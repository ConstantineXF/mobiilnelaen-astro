// Vercel serverless function — приём заявок/подписки/контакта и отправка через Brevo.
// ENV (задать в Vercel → Project → Settings → Environment Variables):
//   BREVO_API_KEY  — обязательный, ключ Brevo (v3)
//   LEAD_TO_EMAIL  — куда слать заявки (по умолч. Info@mobiilnelaen.ee)
//   SENDER_EMAIL   — verified sender в Brevo (по умолч. Info@mobiilnelaen.ee)
//   BREVO_LIST_ID  — (необязат.) id списка для uudiskiri-подписчиков

const TO = process.env.LEAD_TO_EMAIL || 'Info@mobiilnelaen.ee';
const SENDER = process.env.SENDER_EMAIL || 'Info@mobiilnelaen.ee';

const ALLOWED_ORIGINS = ['https://www.mobiilnelaen.ee', 'https://mobiilnelaen.ee'];

// Запрос действительно пришёл с нашего сайта? (боты, дёргающие API напрямую, отсекаются)
function fromSite(req) {
  const o = req.headers.origin || '';
  if (o) {
    try {
      const host = new URL(o).host;
      return ALLOWED_ORIGINS.includes(o) || host.endsWith('.vercel.app');
    } catch (_) { return false; }
  }
  const r = req.headers.referer || '';
  if (r) return ALLOWED_ORIGINS.some((a) => r.startsWith(a)) || /:\/\/[^/]+\.vercel\.app\//.test(r);
  return false; // ни Origin, ни Referer → почти наверняка бот
}

// Признаки ссылочного спама
function hasLink(s) {
  return /(https?:\/\/|www\.|\[url|<a\s|\bt\.me\/|\.ru\b|\.top\b|bit\.ly)/i.test(String(s || ''));
}

// Боты форм, которые доходили до почты (11.11.2026; те же, что на kiirarve и itp):
// случайный набор латинских букв в имени и тексте («xowvYTuijOfABhjfeQSXK») и
// «если не дозвонитесь, напишите в мессенджер/вацап» + российский мобильный 8/+7 9xx.
// Эстонскому кредитному порталу клиенты с российским номером не пишут.
function isFormSpam(name, message) {
  const junk = (s) => /^[A-Za-z]{12,200}$/.test(s) && (s.match(/[A-Z]/g) || []).length >= 4;
  if (junk(name) && junk(message)) return true;
  return /(ва[цт]с?ап|вотсап|whats\s?app|телеграм|telegram|мес+ен?д?жер)/iu.test(message)
    && /(?<!\d)(\+?7|8)[\s-]?\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}(?!\d)/.test(message);
}

function esc(v) {
  return String(v == null ? '' : v).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
}

async function brevo(path, payload) {
  const res = await fetch('https://api.brevo.com/v3' + path, {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok && res.status !== 204) {
    const txt = await res.text().catch(() => '');
    throw new Error('Brevo ' + res.status + ': ' + txt);
  }
  return res;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.BREVO_API_KEY) {
    return res.status(500).json({ error: 'Email backend not configured' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  body = body || {};

  // Тихо «принимаем», но НЕ шлём письмо — чтобы бот не подстраивался
  const drop = () => res.status(200).json({ ok: true });

  // 1. Honeypot заполнен → бот
  if (body.company) return drop();
  // 2. Запрос не с нашего сайта → бот, бьющий по API напрямую
  if (!fromSite(req)) return drop();

  const type = body.formType || 'contact';
  const email = String(body.email || '').trim();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Vigane e-posti aadress' });
  }

  // 3. Валидация по типу формы + фильтр ссылочного спама
  const name = String(body.name || '').trim();
  const message = String(body.message || '').trim();
  if (type === 'application') {
    if (!String(body.amount || '').trim() || !String(body.income || '').trim()) return drop();
  } else if (type === 'contact') {
    if (!name || message.length < 3) return drop();
    if (hasLink(name) || hasLink(email) || hasLink(message)) return drop();
    if (isFormSpam(name, message)) return drop();
  }

  let subject = 'MobiilneLaen — uus sõnum';
  let rows = [];

  if (type === 'application') {
    subject = 'MobiilneLaen — uus laenupäring';
    rows = [
      ['Laenusumma (€)', body.amount],
      ['Netosissetulek (€)', body.income],
      ['Laenu tüüp', body.loanType],
      ['E-post', email],
    ];
  } else if (type === 'subscription') {
    subject = 'MobiilneLaen — uus uudiskirja liitumine';
    rows = [['E-post', email]];
    if (process.env.BREVO_LIST_ID) {
      try {
        await brevo('/contacts', {
          email,
          listIds: [Number(process.env.BREVO_LIST_ID)],
          updateEnabled: true,
        });
      } catch (_) { /* не валим запрос, если контакт уже есть */ }
    }
  } else {
    subject = 'MobiilneLaen — kontaktivorm';
    rows = [
      ['Nimi', body.name],
      ['E-post', email],
      ['Sõnum', body.message],
    ];
  }

  const html =
    '<h2>' + esc(subject) + '</h2><table cellpadding="6" style="border-collapse:collapse">' +
    rows.map((r) => '<tr><td style="color:#64748b">' + esc(r[0]) + '</td><td><b>' + esc(r[1]) + '</b></td></tr>').join('') +
    '</table>';

  try {
    await brevo('/smtp/email', {
      sender: { name: 'MobiilneLaen.ee', email: SENDER },
      to: [{ email: TO }],
      replyTo: { email },
      subject,
      htmlContent: html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(502).json({ error: 'Saatmine ebaõnnestus' });
  }
}
