// ============================================================
// Image-sitemap для mobiilnelaen.ee.
//
// ⭐ Повод (03.08.2026): og:image индексируется поиском по картинкам как
// самостоятельный ресурс — у конкурента sesok.ee/laen/kiirlaen на странице
// НЕТ ни одного тега <img>, а картинка в картиночной выдаче есть. На наши
// генерируемые карточки внешних ссылок нет, поэтому карта сайта — единственный
// быстрый канал их обнаружения.
//
// Отдельным файлом, потому что основную карту строит @astrojs/sitemap, а
// расширение image: он не поддерживает. Объявлен строкой Sitemap: в robots.txt.
//
// ⚠️ Вызывается ИЗ npm run build (после astro build), потому что сборка идёт
// на Vercel: скрипт, который запускают только локально, на проде не отработает
// и карта протухнет при первом же изменении страниц.
// ⚠️ Хост — www: non-www 307-редиректится, а карта не должна вести на редиректы.
// ============================================================
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = process.env.SM_DIST ?? path.join(ROOT, 'dist');
const SITE = 'https://www.mobiilnelaen.ee';

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : (e.name === 'index.html' ? [p] : []);
});

if (!fs.existsSync(DIST)) {
  console.error(`Нет ${DIST}. Сначала: astro build`);
  process.exit(1);
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const entries = [];
for (const f of walk(DIST)) {
  const html = fs.readFileSync(f, 'utf8');
  if (/http-equiv=["']refresh["']/i.test(html)) continue;       // редирект-заглушка
  if (/name=["']robots["'][^>]*noindex/i.test(html)) continue;  // закрыто от индексации

  const url = '/' + path.relative(DIST, f).split(path.sep).join('/').replace(/index\.html$/, '');
  if (url === '/404/' || url.startsWith('/go/')) continue;

  const images = new Set();
  const og = (html.match(/property="og:image" content="([^"]+)"/) || [])[1];
  if (og) images.add(og);
  for (const m of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    let src = m[1];
    if (!src || src.startsWith('data:')) continue;
    if (src.startsWith('/')) src = SITE + src;
    if (!src.startsWith(SITE + '/')) continue; // чужие хосты в свою карту не кладём
    images.add(src);
  }
  if (images.size) entries.push({ url, images: [...images] });
}

entries.sort((a, b) => a.url.localeCompare(b.url));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => `  <url>
    <loc>${esc(SITE + e.url)}</loc>
${e.images.map((i) => `    <image:image>\n      <image:loc>${esc(i)}</image:loc>\n    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(DIST, 'sitemap-images.xml'), xml, 'utf8');
const total = entries.reduce((s, e) => s + e.images.length, 0);
console.log(`image-sitemap → sitemap-images.xml · ${entries.length} URL, ${total} картинок`);
