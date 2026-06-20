// Vercel serverless function — приём заявок/подписки/контакта и отправка через Brevo.
// ENV (задать в Vercel → Project → Settings → Environment Variables):
//   BREVO_API_KEY  — обязательный, ключ Brevo (v3)
//   LEAD_TO_EMAIL  — куда слать заявки (по умолч. Info@mobiilnelaen.ee)
//   SENDER_EMAIL   — verified sender в Brevo (по умолч. Info@mobiilnelaen.ee)
//   BREVO_LIST_ID  — (необязат.) id списка для uudiskiri-подписчиков

const TO = process.env.LEAD_TO_EMAIL || 'Info@mobiilnelaen.ee';
const SENDER = process.env.SENDER_EMAIL || 'Info@mobiilnelaen.ee';

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

  // Honeypot
  if (body.company) return res.status(200).json({ ok: true });

  const type = body.formType || 'contact';
  const email = String(body.email || '').trim();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Vigane e-posti aadress' });
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
