// ============================================================
// Генератор OG-картинок (см. память: reference_og_image_formula).
//
// Двухуровневая вариативность:
//   • СИД ДОМЕНА  → идентичность сайта: композиция (A–F), палитра,
//     тип фоновых объектов, наличие чипов, стиль подвала.
//   • СИД СТРАНИЦЫ → плотность: сколько строк описания под заголовком,
//     какие факты попадут, мелкие акценты.
// Так два сайта сети не читаются как один шаблон, а страницы внутри сайта
// остаются узнаваемыми, но не одинаковыми.
//
// Запуск: node scripts/generate-og.mjs   → public/og/*.png
// ============================================================
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
// Правило именования карточек — общее с MainLayout (см. scripts/og-slug.mjs).
import { ogFileName, LEGACY_FILE } from './og-slug.mjs';

const DOMAIN = process.env.OG_DOMAIN ?? 'www.mobiilnelaen.ee';
const OUT = process.env.OG_OUT ?? path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og');

// ── crc32 ──
const crcTable = (() => {
  const t = new Int32Array(256);
  for (let i = 0; i < 256; i++) { let c = i; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[i] = c; }
  return t;
})();
const crc32 = (s) => { let c = -1; for (let i = 0; i < s.length; i++) c = (c >>> 8) ^ crcTable[(c ^ s.charCodeAt(i)) & 0xff]; return (c ^ -1) >>> 0; };

const SEED = crc32(DOMAIN);
const pick = (arr, shift, seed = SEED) => arr[(seed >>> shift) % arr.length];

// ── Палитры: у каждого сайта своя (не только акцент — весь строй) ──
const PALETTES = [
  { bg1: '#0b1220', bg2: '#0f172a', bg3: '#0a3b4d', accent: '#22d3ee', text: '#ffffff', soft: '#cbe9f2' },
  { bg1: '#1c0a08', bg2: '#3b1410', bg3: '#6b2418', accent: '#f97316', text: '#fff7ed', soft: '#fcd9c0' },
  { bg1: '#0a1a12', bg2: '#0f2a1d', bg3: '#14532d', accent: '#4ade80', text: '#f0fdf4', soft: '#bbf7d0' },
  { bg1: '#14091f', bg2: '#241040', bg3: '#4c1d95', accent: '#c084fc', text: '#faf5ff', soft: '#ddd0f7' },
  { bg1: '#1a1206', bg2: '#332305', bg3: '#713f12', accent: '#fbbf24', text: '#fffbeb', soft: '#fde9b8' },
  { bg1: '#0d1117', bg2: '#161b22', bg3: '#1f2937', accent: '#94a3b8', text: '#f8fafc', soft: '#cbd5e1' },
  { bg1: '#1a0713', bg2: '#3b0d2a', bg3: '#831843', accent: '#f472b6', text: '#fdf2f8', soft: '#fbcfe8' },
  { bg1: '#04141a', bg2: '#083344', bg3: '#0e7490', accent: '#67e8f9', text: '#ecfeff', soft: '#a5f3fc' },
];

const SIZES = [[1200, 630], [1200, 628], [1280, 720], [1200, 675]];
const COMPOSITIONS = ['classic', 'twoCol', 'panel', 'minimal', 'sideStack', 'ribbon'];
const BG_OBJECTS = ['grid', 'dots', 'rings', 'blobs', 'waves', 'triangles', 'bands', 'plain'];

const P = pick(PALETTES, 3);
const [W, H] = pick(SIZES, 18);
const COMP = pick(COMPOSITIONS, 0);
const BGOBJ = pick(BG_OBJECTS, 6);
const SHOW_CHIPS = ((SEED >>> 9) % 3) !== 0;      // примерно у 2/3 сайтов чипы есть
const SHOW_EYEBROW = ((SEED >>> 11) % 4) !== 0;   // у 3/4 — надзаголовок
const FOOT_STYLE = pick(['line', 'bare', 'boxed'], 15);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const F = 'DejaVu Sans, Verdana, sans-serif';

function wrapByWidth(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/);
  const lines = []; let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (t.length > maxChars && cur) { lines.push(cur); cur = w; } else { cur = t; }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, maxLines);
}

// ── Фон: разные объекты + разные палитры ──
function background() {
  const defs = `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${P.bg1}"/><stop offset="55%" stop-color="${P.bg2}"/><stop offset="100%" stop-color="${P.bg3}"/>
    </linearGradient>
    <radialGradient id="soft" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${P.accent}" stop-opacity="0.20"/><stop offset="100%" stop-color="${P.accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="${P.accent}" stroke-opacity="0.07" stroke-width="1"/></pattern>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="2" fill="${P.accent}" fill-opacity="0.13"/></pattern>
  </defs>`;

  let obj = '';
  const A = P.accent;
  switch (BGOBJ) {
    case 'grid':  obj = `<rect width="${W}" height="${H}" fill="url(#grid)"/>`; break;
    case 'dots':  obj = `<rect width="${W}" height="${H}" fill="url(#dots)"/>`; break;
    case 'rings': obj = [0.55, 0.42, 0.3, 0.18].map((k, i) =>
        `<circle cx="${Math.round(W * 0.84)}" cy="${Math.round(H * 0.26)}" r="${Math.round(W * k * 0.5)}" fill="none" stroke="${A}" stroke-opacity="${0.05 + i * 0.02}" stroke-width="2"/>`).join(''); break;
    case 'blobs': obj = `<circle cx="${Math.round(W * 0.85)}" cy="${Math.round(H * 0.2)}" r="${Math.round(W * 0.2)}" fill="${A}" opacity="0.10"/>
                         <circle cx="${Math.round(W * 0.12)}" cy="${Math.round(H * 0.88)}" r="${Math.round(W * 0.15)}" fill="${A}" opacity="0.07"/>`; break;
    case 'waves': obj = [0.55, 0.7, 0.85].map((k, i) =>
        `<path d="M0,${Math.round(H * k)} C${W * 0.3},${Math.round(H * (k - 0.09))} ${W * 0.7},${Math.round(H * (k + 0.09))} ${W},${Math.round(H * k)}" fill="none" stroke="${A}" stroke-opacity="${0.16 - i * 0.04}" stroke-width="3"/>`).join(''); break;
    case 'triangles': obj = `<polygon points="0,${H} ${Math.round(W * 0.42)},${H} 0,${Math.round(H * 0.45)}" fill="${A}" opacity="0.08"/>
                             <polygon points="${W},0 ${W},${Math.round(H * 0.5)} ${Math.round(W * 0.62)},0" fill="${A}" opacity="0.06"/>`; break;
    case 'bands': obj = [0, 1, 2].map((i) =>
        `<rect x="${Math.round(W * (0.62 + i * 0.11))}" y="0" width="${Math.round(W * 0.045)}" height="${H}" fill="${A}" opacity="${0.10 - i * 0.03}"/>`).join(''); break;
    default: obj = '';
  }

  const glowX = COMP === 'twoCol' || COMP === 'sideStack' ? Math.round(W * 0.2) : Math.round(W * 0.82);
  const glow = `<circle cx="${glowX}" cy="${Math.round(H * 0.3)}" r="${Math.round(W * 0.3)}" fill="url(#soft)"/>`;

  return `${defs}<rect width="${W}" height="${H}" fill="url(#bg)"/>${obj}${glow}`;
}

function chips(facts, x, y, centered) {
  if (!facts.length) return { svg: '', h: 0 };
  const size = Math.round(W / 60);
  const h = Math.round(size * 2.5);
  const gap = Math.round(W * 0.016);
  const style = pick(['pill', 'plain', 'boxed'], 21);
  if (style === 'plain') {
    const line = facts.join('   ·   ');
    return {
      svg: `<text x="${x}" y="${y + size}" font-family="${F}" font-size="${size}" fill="${P.soft}" opacity="0.9" text-anchor="${centered ? 'middle' : 'start'}">${esc(line)}</text>`,
      h: Math.round(size * 2.2),
    };
  }
  const widths = facts.map((f) => Math.round(f.length * size * 0.62) + size * 2);
  const total = widths.reduce((a, b) => a + b, 0) + gap * (facts.length - 1);
  let cx = centered ? Math.round((W - total) / 2) : x;
  const svg = facts.map((f, i) => {
    const w = widths[i];
    const shape = style === 'pill'
      ? `<rect x="${cx}" y="${y}" rx="${Math.round(h / 2)}" width="${w}" height="${h}" fill="${P.accent}" opacity="0.16"/>`
      : `<rect x="${cx}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${P.accent}" stroke-opacity="0.45" stroke-width="2"/>`;
    const el = `${shape}<text x="${cx + w / 2}" y="${y + h * 0.68}" font-family="${F}" font-size="${size}" fill="${P.soft}" text-anchor="middle">${esc(f)}</text>`;
    cx += w + gap;
    return el;
  }).join('');
  return { svg, h: h + Math.round(size * 0.8) };
}

function footer(pad) {
  const size = Math.round(W / 62);
  const y = H - Math.round(pad * 0.7);
  if (FOOT_STYLE === 'bare') {
    return `<text x="${pad}" y="${y}" font-family="${F}" font-size="${size}" fill="${P.accent}" opacity="0.85">${esc(DOMAIN)}</text>`;
  }
  if (FOOT_STYLE === 'boxed') {
    const w = Math.round(DOMAIN.length * size * 0.62) + size * 2;
    return `<rect x="${pad}" y="${y - size * 1.4}" rx="4" width="${w}" height="${Math.round(size * 2)}" fill="${P.accent}" opacity="0.14"/>
            <text x="${pad + w / 2}" y="${y}" font-family="${F}" font-size="${size}" fill="${P.soft}" text-anchor="middle">${esc(DOMAIN)}</text>`;
  }
  return `<line x1="${pad}" y1="${y - size * 1.9}" x2="${W - pad}" y2="${y - size * 1.9}" stroke="${P.accent}" stroke-opacity="0.25" stroke-width="2"/>
          <text x="${pad}" y="${y}" font-family="${F}" font-size="${size}" fill="${P.accent}">${esc(DOMAIN)}</text>`;
}

// ── Композиции ──
function render(page) {
  const pageSeed = crc32(page.slug + DOMAIN);
  const pad = Math.round(W * 0.065);

  // Динамическая плотность текста: 1–3 строки описания, зависит от страницы
  const descLines = 1 + (pageSeed % 3);
  const sub = wrapByWidth(page.desc ?? page.sub ?? '', 52, descLines);

  // Часть фактов тоже плавает
  const factCount = SHOW_CHIPS ? 2 + ((pageSeed >>> 4) % 2) : 0;
  const facts = (page.facts ?? []).slice(0, factCount);

  const eyebrow = SHOW_EYEBROW ? (page.eyebrow ?? EYEBROW) : null;
  const stamp = page.stamp ?? STAMP;

  const bg = background();
  const T = { title: Math.round(W / 15), sub: Math.round(W / 40), eye: Math.round(W / 64) };
  let body = '';

  if (COMP === 'minimal') {
    const lines = wrapByWidth(page.kw, 20, 2);
    let y = Math.round(H * 0.44) - (lines.length - 1) * T.title * 0.5;
    body += lines.map((l, i) => `<text x="${W / 2}" y="${y + i * T.title * 1.15}" font-family="${F}" font-size="${Math.round(T.title * 1.25)}" font-weight="bold" fill="${P.text}" text-anchor="middle">${esc(l)}</text>`).join('');
    y += lines.length * T.title * 1.15 + T.sub * 0.6;
    body += `<text x="${W / 2}" y="${y}" font-family="${F}" font-size="${T.sub}" fill="${P.soft}" text-anchor="middle">${esc(sub[0] ?? '')}</text>`;
    body += `<text x="${W / 2}" y="${H - pad}" font-family="${F}" font-size="${Math.round(W / 64)}" fill="${P.accent}" text-anchor="middle">${esc(DOMAIN)}</text>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${body}</svg>`;
  }

  if (COMP === 'twoCol') {
    const colX = Math.round(W * 0.42);
    const bigVal = page.stat ?? (facts[0] ?? '').split(' ')[0] ?? '';
    body += `<rect x="0" y="0" width="${colX - Math.round(W * 0.03)}" height="${H}" fill="${P.accent}" opacity="0.08"/>`;
    body += `<text x="${Math.round(colX * 0.5)}" y="${Math.round(H * 0.48)}" font-family="${F}" font-size="${Math.round(W / 11)}" font-weight="bold" fill="${P.accent}" text-anchor="middle">${esc(bigVal)}</text>`;
    if (page.statLabel) body += `<text x="${Math.round(colX * 0.5)}" y="${Math.round(H * 0.57)}" font-family="${F}" font-size="${Math.round(W / 58)}" fill="${P.soft}" text-anchor="middle">${esc(page.statLabel)}</text>`;
    let y = Math.round(H * 0.34);
    const lines = wrapByWidth(page.kw, 18, 2);
    body += lines.map((l, i) => `<text x="${colX}" y="${y + i * T.title * 1.15}" font-family="${F}" font-size="${T.title}" font-weight="bold" fill="${P.text}">${esc(l)}</text>`).join('');
    y += lines.length * T.title * 1.15 + T.sub * 0.4;
    body += sub.map((l, i) => `<text x="${colX}" y="${y + i * T.sub * 1.35}" font-family="${F}" font-size="${T.sub}" fill="${P.soft}" opacity="0.92">${esc(l)}</text>`).join('');
    body += footer(pad);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${body}</svg>`;
  }

  if (COMP === 'panel') {
    let y = Math.round(H * 0.22);
    if (eyebrow) { body += `<text x="${pad}" y="${y}" font-family="${F}" font-size="${T.eye}" font-weight="bold" letter-spacing="3" fill="${P.accent}">${esc(eyebrow.toUpperCase())}</text>`; y += Math.round(T.title * 0.9); }
    const lines = wrapByWidth(page.kw, 22, 2);
    body += lines.map((l, i) => `<text x="${pad}" y="${y + i * T.title * 1.12}" font-family="${F}" font-size="${T.title}" font-weight="bold" fill="${P.text}">${esc(l)}</text>`).join('');
    y += lines.length * T.title * 1.12 + Math.round(T.sub * 0.6);
    const panelH = Math.round(T.sub * 1.5 * (sub.length + facts.length) + T.sub * 1.6);
    body += `<rect x="${pad}" y="${y}" rx="14" width="${W - pad * 2}" height="${panelH}" fill="${P.accent}" opacity="0.10"/>`;
    let py = y + Math.round(T.sub * 1.5);
    body += sub.map((l, i) => `<text x="${pad + 28}" y="${py + i * T.sub * 1.4}" font-family="${F}" font-size="${T.sub}" fill="${P.soft}">${esc(l)}</text>`).join('');
    py += sub.length * T.sub * 1.4;
    body += facts.map((f, i) => `<text x="${pad + 28}" y="${py + i * T.sub * 1.35}" font-family="${F}" font-size="${Math.round(T.sub * 0.85)}" fill="${P.accent}">${esc('— ' + f)}</text>`).join('');
    body += footer(pad);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${body}</svg>`;
  }

  if (COMP === 'sideStack') {
    const leftW = Math.round(W * 0.58);
    let y = Math.round(H * 0.34);
    const lines = wrapByWidth(page.kw, 16, 3);
    body += lines.map((l, i) => `<text x="${pad}" y="${y + i * T.title * 1.12}" font-family="${F}" font-size="${T.title}" font-weight="bold" fill="${P.text}">${esc(l)}</text>`).join('');
    y += lines.length * T.title * 1.12 + T.sub * 0.4;
    body += wrapByWidth(sub.join(' '), 38, descLines).map((l, i) => `<text x="${pad}" y="${y + i * T.sub * 1.35}" font-family="${F}" font-size="${T.sub}" fill="${P.soft}" opacity="0.9">${esc(l)}</text>`).join('');
    let sy = Math.round(H * 0.34);
    body += facts.map((f, i) => `<text x="${leftW + Math.round(W * 0.06)}" y="${sy + i * Math.round(W / 34)}" font-family="${F}" font-size="${Math.round(W / 56)}" fill="${P.accent}">${esc('▸ ' + f)}</text>`).join('');
    if (eyebrow) body += `<text x="${W - pad}" y="${Math.round(H * 0.16)}" font-family="${F}" font-size="${T.eye}" font-weight="bold" letter-spacing="3" fill="${P.accent}" text-anchor="end">${esc(eyebrow.toUpperCase())}</text>`;
    body += footer(pad);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${body}</svg>`;
  }

  if (COMP === 'ribbon') {
    const ribH = Math.round(H * 0.26);
    const ribY = Math.round(H * 0.3);
    body += `<rect x="0" y="${ribY}" width="${W}" height="${ribH}" fill="${P.accent}" opacity="0.18"/>`;
    body += `<rect x="0" y="${ribY}" width="${Math.round(W * 0.012)}" height="${ribH}" fill="${P.accent}"/>`;
    const lines = wrapByWidth(page.kw, 24, 1);
    body += `<text x="${pad}" y="${ribY + ribH * 0.64}" font-family="${F}" font-size="${T.title}" font-weight="bold" fill="${P.text}">${esc(lines[0])}</text>`;
    let y = ribY + ribH + Math.round(T.sub * 1.4);
    body += sub.map((l, i) => `<text x="${pad}" y="${y + i * T.sub * 1.35}" font-family="${F}" font-size="${T.sub}" fill="${P.soft}">${esc(l)}</text>`).join('');
    y += sub.length * T.sub * 1.35 + Math.round(T.sub * 0.6);
    if (facts.length) body += `<text x="${pad}" y="${y}" font-family="${F}" font-size="${Math.round(W / 60)}" fill="${P.accent}">${esc(facts.join('  ·  '))}</text>`;
    body += `<text x="${W - pad}" y="${H - Math.round(pad * 0.7)}" font-family="${F}" font-size="${Math.round(W / 62)}" fill="${P.soft}" opacity="0.75" text-anchor="end">${esc(stamp)}</text>`;
    body += `<text x="${pad}" y="${H - Math.round(pad * 0.7)}" font-family="${F}" font-size="${Math.round(W / 62)}" fill="${P.accent}">${esc(DOMAIN)}</text>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${body}</svg>`;
  }

  // classic
  let y = Math.round(H * 0.21);
  if (eyebrow) { body += `<text x="${pad}" y="${y}" font-family="${F}" font-size="${T.eye}" font-weight="bold" letter-spacing="3" fill="${P.accent}">${esc(eyebrow.toUpperCase())}</text>`; y += Math.round(T.title * 0.95); }
  const lines = wrapByWidth(page.kw, 22, 2);
  body += lines.map((l, i) => `<text x="${pad}" y="${y + i * T.title * 1.12}" font-family="${F}" font-size="${T.title}" font-weight="bold" fill="${P.text}">${esc(l)}</text>`).join('');
  y += lines.length * T.title * 1.12 + Math.round(T.sub * 0.5);
  body += sub.map((l, i) => `<text x="${pad}" y="${y + i * T.sub * 1.35}" font-family="${F}" font-size="${T.sub}" fill="${P.soft}" opacity="0.92">${esc(l)}</text>`).join('');
  y += sub.length * T.sub * 1.35 + Math.round(T.sub * 0.7);
  const c = chips(facts, pad, y, false);
  body += c.svg;
  body += footer(pad);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${body}</svg>`;
}

// ── Контент страниц: desc — длинное описание, из него берётся 1–3 строки ──
const now = new Date();
const STAMP = `uuendatud ${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
const EYEBROW = 'Sõltumatu laenuvõrdlus';

const PAGES = [
  { slug: 'index', kw: 'Mobiilne laen', stat: '7', statLabel: 'laenutüüpi',
    desc: 'Võrdle Eesti laene otse nutiseadmest: kiirlaen, sms-laen, väikelaen, krediidikonto ja krediitkaart ühel lehel koos tingimuste ja KKM-iga.',
    facts: ['Tasuta võrdlus', 'Võrdle KKM-i', 'Taotle 2 minutiga'] },
  { slug: 'sms-laen', kw: 'SMS-laen', stat: '~5 min', statLabel: 'otsus',
    desc: 'Väike lühiajaline kiirlaen ootamatuteks kuludeks. Nimi viitab vanale SMS-taotlusele, tänapäeval vormistad kõik internetis Smart-ID-ga.',
    facts: ['Alates ~50 €', 'Otsus ~5 min', 'Smart-ID'] },
  { slug: 'kiirlaen', kw: 'Kiirlaen', stat: '24/7', statLabel: 'taotlemine',
    desc: 'Kiire tagatiseta laen väiksemateks kuludeks. Võrdle intressi ja krediidi kulukuse määra enne taotlemist.',
    facts: ['Kiire otsus', 'Võrdle KKM-i', 'Tagatiseta'] },
  { slug: 'vaikelaen', kw: 'Väikelaen', stat: 'kuni 10 000 €', statLabel: 'summa',
    desc: 'Suurem summa ja pikem periood kui kiirlaenul, tavaliselt ka madalam intress. Sobib planeeritud kuludeks.',
    facts: ['Suurem summa', 'Pikem periood', 'Madalam intress'] },
  { slug: 'krediidikonto', kw: 'Krediidikonto', stat: 'uuenev', statLabel: 'limiit',
    desc: 'Uuenev krediidilimiit, mida kasutad vajaduse järgi. Intressi maksad ainult kasutatud summalt, tagasi makstud osa vabaneb uuesti.',
    facts: ['Korduvkasutus', 'Intress vaid kasutatult', 'Paindlik'] },
  { slug: 'krediidiliin', kw: 'Krediidiliin', stat: 'paindlik', statLabel: 'krediit',
    desc: 'Kokkulepitud limiit, mida saad kasutada osade kaupa ja korduvalt. Rahaline reserv ootamatusteks.',
    facts: ['Raha käepärast', 'Maksa kasutatult', 'Uueneb'] },
  { slug: 'autolaen', kw: 'Autolaen', stat: 'sõiduk', statLabel: 'tagatiseks',
    desc: 'Sõiduki ostuks mõeldud laen. Võrdle autolaenu ja liisingu tingimusi ning arvesta kaskokindlustuse kulu.',
    facts: ['Sõiduki ost', 'Pikk periood', 'Võrdle KKM-i'] },
  { slug: 'krediitkaart', kw: 'Krediitkaart', stat: 'intressivaba', statLabel: 'periood',
    desc: 'Krediidilimiit kaardil koos intressivaba perioodiga. Sobib igapäevaostudeks, kui tasud limiidi õigeaegselt.',
    facts: ['Intressivaba periood', 'Igapäevaostud', 'Limiit'] },
  { slug: 'meist', kw: 'Meist', stat: 'sõltumatu', statLabel: 'portaal',
    desc: 'Oleme võrdlusportaal, mitte laenuandja. Ei väljasta laene ega tee krediidiotsuseid — aitame tingimusi kõrvuti võrrelda.',
    facts: ['Ei ole laenuandja', 'Tasuta kasutajale', 'Läbipaistev'] },
  { slug: 'metoodika', kw: 'Metoodika', stat: 'avalik', statLabel: 'metoodika',
    desc: 'Kust andmed pärinevad, kui tihti neid uuendame ja mille alusel pakkumisi järjestame. Partnerlus järjestust ei mõjuta.',
    facts: ['Avalikud allikad', 'Regulaarne uuendus', 'Sõltumatu järjestus'] },
  { slug: 'kontakt', kw: 'Kontakt', stat: '24 h', statLabel: 'vastame',
    desc: 'Küsimused, ettepanekud või ebatäpsus andmetes — kirjuta meile ja vastame esimesel võimalusel.',
    facts: ['info@mobiilnelaen.ee', 'Vastame tööpäeviti'] },
  { slug: 'privaatsuspoliitika', kw: 'Privaatsus­poliitika', stat: 'GDPR', statLabel: 'nõuetele vastav',
    desc: 'Milliseid andmeid kogume, milleks neid töötleme ja millised õigused sul on isikuandmete kaitse üldmääruse alusel.',
    facts: ['GDPR', 'Sinu õigused', 'Küpsised'] },
  { slug: 'kasutustingimused', kw: 'Kasutus­tingimused', stat: 'info', statLabel: 'portaal',
    desc: 'Portaali kasutamise reeglid, andmete täpsus, partnerlingid ja vastutuse piirang.',
    facts: ['Informatiivne portaal', 'Partnerlingid', 'Vastutus'] },
];

await mkdir(OUT, { recursive: true });
console.log(`OG → ${DOMAIN}  seed=${SEED}`);
console.log(`  композиция=${COMP}  фон=${BGOBJ}  палитра=#${(SEED >>> 3) % PALETTES.length}  чипы=${SHOW_CHIPS}  надзаголовок=${SHOW_EYEBROW}  подвал=${FOOT_STYLE}  ${W}x${H}`);

for (const p of PAGES) {
  const png = await sharp(Buffer.from(render(p))).png({ compressionLevel: 9 }).toBuffer();
  const file = ogFileName(p.slug);
  await writeFile(path.join(OUT, `${file}.png`), png);
  // Копия под прежним именем (index.png): карточка могла попасть в индекс до
  // переименования, а 404 на проиндексированном ресурсе хуже дубля.
  const legacy = LEGACY_FILE[file];
  if (legacy) await writeFile(path.join(OUT, `${legacy}.png`), png);
}
console.log(`  ✓ ${PAGES.length} картинок (главная — с ключом в имени)`);
