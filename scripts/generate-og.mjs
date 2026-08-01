// ============================================================
// Генератор OG-картинок по формуле (см. память: reference_og_image_formula).
// Вариант оформления ВЫВОДИТСЯ ИЗ ДОМЕНА (seed) — на другом сайте сети
// макет будет другим автоматически, помнить ничего не нужно.
// Текст на картинке: ВЧ-ключ + СЧ-модификатор + строка данных/даты.
// Запуск: node scripts/generate-og.mjs   → public/og/*.png
// ============================================================
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const DOMAIN = 'www.mobiilnelaen.ee';
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og');

// ── crc32 → сид домена ──
const crcTable = (() => {
  const t = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c;
  }
  return t;
})();
const crc32 = (s) => {
  let c = -1;
  for (let i = 0; i < s.length; i++) c = (c >>> 8) ^ crcTable[(c ^ s.charCodeAt(i)) & 0xff];
  return (c ^ -1) >>> 0;
};

const SEED = crc32(DOMAIN);
const pick = (arr, shift) => arr[(SEED >>> shift) % arr.length];

// ── Оси вариативности ──
const SIZES = [[1200, 630], [1200, 628], [1280, 720], [1200, 675]];
const LAYOUTS = ['left', 'center', 'bottombar', 'split'];
const BGS = ['solid', 'gradient', 'diagonal'];
const LOGOS = ['tl', 'tr', 'bl', 'none'];

const [W, H] = pick(SIZES, 18);
const LAYOUT = pick(LAYOUTS, 0);
const BG = pick(BGS, 6);
const LOGO = pick(LOGOS, 12);

// Палитра проекта (у каждого сайта своя → дополнительная развязка)
const C = { dark: '#0f172a', mid: '#06b6d4', light: '#e0f7fa', white: '#ffffff' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (t.length > max && cur) { lines.push(cur); cur = w; } else { cur = t; }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

function svgRich({ kw, sub, facts = [], data, eyebrow }) {
  const pad = Math.round(W * 0.065);
  const titleSize = Math.round(W / 16);
  const subSize = Math.round(W / 36);
  const eyebrowSize = Math.round(W / 62);
  const chipText = Math.round(W / 58);
  const footSize = Math.round(W / 60);

  const centered = LAYOUT === 'center';
  const anchor = centered ? 'middle' : 'start';
  const x = centered ? W / 2 : LAYOUT === 'split' ? pad + Math.round(W * 0.04) : pad;

  // Фон: глубокий градиент + световое пятно + мягкая сетка — читаемо и «дороже» на вид
  const defs = `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220"/>
      <stop offset="55%" stop-color="${C.dark}"/>
      <stop offset="100%" stop-color="#0a3b4d"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${C.mid}" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="${C.mid}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0H0V46" fill="none" stroke="${C.mid}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>`;

  const glowX = BG === 'diagonal' ? Math.round(W * 0.12) : Math.round(W * 0.86);
  const glowY = BG === 'gradient' ? Math.round(H * 0.78) : Math.round(H * 0.2);

  const bg = `${defs}
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#grid)"/>
    <circle cx="${glowX}" cy="${glowY}" r="${Math.round(W * 0.33)}" fill="url(#glow)"/>
    ${BG === 'diagonal'
      ? `<polygon points="0,${H} ${W},${Math.round(H * 0.42)} ${W},${H}" fill="${C.mid}" opacity="0.10"/>`
      : ''}
    <rect x="0" y="${H - 8}" width="${W}" height="8" fill="${C.mid}" opacity="0.85"/>`;

  const sideBar =
    LAYOUT === 'split' ? `<rect x="0" y="0" width="${Math.round(W * 0.028)}" height="${H}" fill="${C.mid}"/>` : '';

  // ── вертикальная раскладка: надзаголовок → title → sub → чипы → подвал ──
  let y = Math.round(H * 0.20);

  const eyebrowEl = eyebrow
    ? `<text x="${x}" y="${y}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${eyebrowSize}" font-weight="bold" letter-spacing="3" fill="${C.mid}" text-anchor="${anchor}">${esc(eyebrow.toUpperCase())}</text>`
    : '';
  y += Math.round(titleSize * 0.95);

  const lines = wrap(kw, 24);
  const titleEl = lines
    .map((l, i) =>
      `<text x="${x}" y="${y + i * titleSize * 1.1}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${titleSize}" font-weight="bold" fill="${C.white}" text-anchor="${anchor}">${esc(l)}</text>`
    )
    .join('');
  y += lines.length * titleSize * 1.1 + Math.round(subSize * 0.5);

  const subEl = sub
    ? `<text x="${x}" y="${y}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${subSize}" fill="${C.light}" opacity="0.92" text-anchor="${anchor}">${esc(sub)}</text>`
    : '';
  y += Math.round(subSize * 1.6);

  // Чипы с фактами — дополнительный ключевой текст (OCR) и заполнение площади
  let chipsEl = '';
  if (facts.length) {
    const chipH = Math.round(chipText * 2.5);
    const gap = Math.round(W * 0.018);
    const widths = facts.map((f) => Math.round(f.length * chipText * 0.62) + chipText * 2);
    const totalW = widths.reduce((a, b) => a + b, 0) + gap * (facts.length - 1);
    let cx = centered ? Math.round((W - totalW) / 2) : x;
    chipsEl = facts
      .map((f, i) => {
        const wgt = widths[i];
        const el = `<g>
        <rect x="${cx}" y="${y}" rx="${Math.round(chipH / 2)}" width="${wgt}" height="${chipH}" fill="${C.mid}" opacity="0.16"/>
        <text x="${cx + wgt / 2}" y="${y + chipH * 0.68}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${chipText}" fill="${C.light}" text-anchor="middle">${esc(f)}</text>
      </g>`;
        cx += wgt + gap;
        return el;
      })
      .join('');
  }

  // Подвал: дата + домен (бренд-метка всегда видна)
  const footY = H - Math.round(pad * 0.75);
  const footEl = `
    <line x1="${pad}" y1="${footY - footSize * 1.9}" x2="${W - pad}" y2="${footY - footSize * 1.9}" stroke="${C.mid}" stroke-opacity="0.25" stroke-width="2"/>
    <text x="${pad}" y="${footY}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${footSize}" fill="${C.mid}">${esc(DOMAIN)}</text>
    ${data ? `<text x="${W - pad}" y="${footY}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${footSize}" fill="${C.light}" opacity="0.7" text-anchor="end">${esc(data)}</text>` : ''}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${sideBar}${eyebrowEl}${titleEl}${subEl}${chipsEl}${footEl}</svg>`;
}

function svgOld({ kw, sub, data }) {
  const titleSize = Math.round(W / 18);
  const subSize = Math.round(W / 38);
  const dataSize = Math.round(W / 52);
  const pad = Math.round(W * 0.07);

  const lines = wrap(kw, 22);
  const centered = LAYOUT === 'center';
  const anchor = centered ? 'middle' : 'start';
  const x = centered ? W / 2 : LAYOUT === 'split' ? pad + Math.round(W * 0.045) : pad;

  let baseY;
  if (LAYOUT === 'bottombar') baseY = Math.round(H * 0.60);
  else if (centered) baseY = Math.round(H * 0.42) - (lines.length - 1) * titleSize * 0.6;
  else baseY = Math.round(H * 0.44) - (lines.length - 1) * titleSize * 0.6;

  const bg =
    BG === 'gradient'
      ? `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="${C.dark}"/><stop offset="100%" stop-color="#0b3f52"/>
         </linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/>`
      : BG === 'diagonal'
      ? `<rect width="${W}" height="${H}" fill="${C.dark}"/>
         <polygon points="0,${H} ${W},${Math.round(H * 0.55)} ${W},${H}" fill="${C.mid}" opacity="0.22"/>`
      : `<rect width="${W}" height="${H}" fill="${C.dark}"/>`;

  const bar =
    LAYOUT === 'bottombar'
      ? `<rect x="0" y="${Math.round(H * 0.52)}" width="${W}" height="${H}" fill="#000" opacity="0.22"/>`
      : LAYOUT === 'split'
      ? `<rect x="0" y="0" width="${Math.round(W * 0.035)}" height="${H}" fill="${C.mid}"/>`
      : '';

  const titleLines = lines
    .map((l, i) => `<text x="${x}" y="${baseY + i * titleSize * 1.22}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${titleSize}" font-weight="bold" fill="${C.white}" text-anchor="${anchor}">${esc(l)}</text>`)
    .join('');

  const subY = baseY + lines.length * titleSize * 1.22 + subSize * 0.4;
  const subEl = sub
    ? `<text x="${x}" y="${subY}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${subSize}" fill="${C.mid}" text-anchor="${anchor}">${esc(sub)}</text>`
    : '';

  const dataEl = data
    ? `<text x="${x}" y="${subY + subSize * 1.9}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${dataSize}" fill="${C.light}" opacity="0.85" text-anchor="${anchor}">${esc(data)}</text>`
    : '';

  let brandEl = '';
  if (LOGO !== 'none') {
    const bs = Math.round(W / 58);
    const bx = LOGO === 'tr' ? W - pad : pad;
    const by = LOGO === 'bl' ? H - Math.round(pad * 0.55) : pad + bs;
    brandEl = `<text x="${bx}" y="${by}" font-family="DejaVu Sans, Verdana, sans-serif" font-size="${bs}" fill="${C.mid}" text-anchor="${LOGO === 'tr' ? 'end' : 'start'}">${esc(DOMAIN)}</text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${bar}${titleLines}${subEl}${dataEl}${brandEl}</svg>`;
}

// ── Страницы: ВЧ-ключ + СЧ-модификатор ──
const now = new Date();
const stamp = `uuendatud ${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;

// eyebrow — надзаголовок, facts — чипы (доп. ключевой текст для OCR + конверсионные аргументы)
const EYEBROW = 'Sõltumatu laenuvõrdlus';
const PAGES = [
  { slug: 'index', kw: 'Mobiilne laen', sub: 'Võrdle Eesti laene otse nutiseadmest',
    facts: ['Tasuta võrdlus', 'Võrdle KKM-i', 'Taotle 2 minutiga'] },
  { slug: 'sms-laen', kw: 'SMS-laen', sub: 'Väike kiirlaen kohe, ilma paberita',
    facts: ['Alates ~50 €', 'Otsus ~5 min', 'Smart-ID'] },
  { slug: 'kiirlaen', kw: 'Kiirlaen', sub: 'Võrdle kiirlaene ja krediidi kulukuse määra',
    facts: ['Kiire otsus', 'Võrdle KKM-i', 'Tagatiseta'] },
  { slug: 'vaikelaen', kw: 'Väikelaen', sub: 'Võrdle väikelaene ja taotle soodsalt',
    facts: ['Suurem summa', 'Pikem periood', 'Madalam intress'] },
  { slug: 'krediidikonto', kw: 'Krediidikonto', sub: 'Uuenev krediidilimiit vajaduse järgi',
    facts: ['Korduvkasutus', 'Intress vaid kasutatult', 'Paindlik'] },
  { slug: 'krediidiliin', kw: 'Krediidiliin', sub: 'Kasuta limiiti osade kaupa',
    facts: ['Raha käepärast', 'Maksa kasutatult', 'Uueneb'] },
  { slug: 'autolaen', kw: 'Autolaen', sub: 'Võrdle autolaenu ja liisingu pakkumisi',
    facts: ['Sõiduki ost', 'Pikk periood', 'Võrdle KKM-i'] },
  { slug: 'krediitkaart', kw: 'Krediitkaart', sub: 'Intressivaba periood ja krediidilimiit',
    facts: ['Intressivaba periood', 'Igapäevaostud', 'Limiit'] },
  { slug: 'meist', kw: 'Meist', sub: 'Sõltumatu portaal, mitte laenuandja',
    facts: ['Ei ole laenuandja', 'Tasuta kasutajale', 'Läbipaistev'] },
  { slug: 'metoodika', kw: 'Metoodika', sub: 'Kuidas me pakkumisi kogume ja järjestame',
    facts: ['Avalikud allikad', 'Regulaarne uuendus', 'Sõltumatu järjestus'] },
  { slug: 'kontakt', kw: 'Kontakt', sub: 'Võta meiega ühendust',
    facts: ['info@mobiilnelaen.ee', 'Vastame tööpäeviti'] },
  { slug: 'privaatsuspoliitika', kw: 'Privaatsuspoliitika', sub: 'Kuidas töötleme andmeid (GDPR)',
    facts: ['GDPR', 'Sinu õigused', 'Küpsised'] },
  { slug: 'kasutustingimused', kw: 'Kasutustingimused', sub: 'Portaali kasutamise reeglid',
    facts: ['Informatiivne portaal', 'Partnerlingid', 'Vastutus'] },
];

await mkdir(OUT, { recursive: true });
console.log(`OG formula → domain=${DOMAIN} seed=${SEED}`);
console.log(`  layout=${LAYOUT} bg=${BG} logo=${LOGO} size=${W}x${H}`);

for (const p of PAGES) {
  const buf = Buffer.from(
    svgRich({ kw: p.kw, sub: p.sub, facts: p.facts ?? [], data: stamp, eyebrow: EYEBROW })
  );
  const png = await sharp(buf).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(path.join(OUT, `${p.slug}.png`), png);
  console.log(`  ✓ /og/${p.slug}.png (${Math.round(png.length / 1024)} KB)`);
}
console.log('done');
