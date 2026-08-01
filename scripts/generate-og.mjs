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

function svg({ kw, sub, data }) {
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

const PAGES = [
  { slug: 'index', kw: 'Mobiilne laen', sub: 'võrdle laene otse nutiseadmest' },
  { slug: 'sms-laen', kw: 'SMS-laen', sub: 'väike kiirlaen kohe' },
  { slug: 'kiirlaen', kw: 'Kiirlaen', sub: 'võrdle kiirlaene ja KKM-i' },
  { slug: 'vaikelaen', kw: 'Väikelaen', sub: 'võrdle ja taotle soodsalt' },
  { slug: 'krediidikonto', kw: 'Krediidikonto', sub: 'paindlik krediidilimiit' },
  { slug: 'krediidiliin', kw: 'Krediidiliin', sub: 'kasuta osade kaupa' },
  { slug: 'autolaen', kw: 'Autolaen', sub: 'võrdle autolaenu pakkumisi' },
  { slug: 'krediitkaart', kw: 'Krediitkaart', sub: 'intressivaba periood' },
  { slug: 'meist', kw: 'Meist', sub: 'sõltumatu laenude võrdlus' },
  { slug: 'metoodika', kw: 'Metoodika', sub: 'kuidas me võrdleme' },
  { slug: 'kontakt', kw: 'Kontakt', sub: 'võta meiega ühendust' },
  { slug: 'privaatsuspoliitika', kw: 'Privaatsuspoliitika', sub: 'andmete töötlemine' },
  { slug: 'kasutustingimused', kw: 'Kasutustingimused', sub: 'portaali kasutamine' },
];

await mkdir(OUT, { recursive: true });
console.log(`OG formula → domain=${DOMAIN} seed=${SEED}`);
console.log(`  layout=${LAYOUT} bg=${BG} logo=${LOGO} size=${W}x${H}`);

for (const p of PAGES) {
  const buf = Buffer.from(svg({ kw: p.kw, sub: p.sub, data: stamp }));
  const png = await sharp(buf).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(path.join(OUT, `${p.slug}.png`), png);
  console.log(`  ✓ /og/${p.slug}.png (${Math.round(png.length / 1024)} KB)`);
}
console.log('done');
