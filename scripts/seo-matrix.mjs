// Матрица «трафиковая страница × норматив» (гид §20.4 + мастер-гид A1).
// ⛔ Служебные страницы (методика, о нас, контакты, цены, условия, политика,
// кабинет, чекаут, 404) под норматив НЕ попадают — у них нет своего поискового
// интента. Раздувать их вредно.
// Запуск: node scripts/seo-matrix.mjs
import fs from 'node:fs';
import path from 'node:path';

const EXEMPT = /^(go\/.*|metoodika|meist|kontakt|kasutustingimused|privaatsuspoliitika|404)$/;
const NORM = { w: 2600, h2: 14, h3: 6, t: 1, links: 20 };   // МИНИМУМ по мастер-гиду (беат: 3400/18/12/2/28)

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name === 'index.html' ? [p] : [];
  });
}

const rows = [];
for (const f of walk('dist')) {
  const rel = path.relative('dist', f).split(path.sep).join('/');
  const url = '/' + rel.replace(/index\.html$/, '');
  const seg = url.replace(/^\/(ru\/)?/, '').replace(/\/$/, '');
  if (EXEMPT.test(seg)) continue;

  const html = fs.readFileSync(f, 'utf8');
  // ⛔ Пропускать редирект-заглушки и noindex: это не трафиковые страницы.
  // Без этого замер считал ~70 стабов Astro-редиректов и давал 152 страницы
  // вместо реальных 82.
  if (/http-equiv=["']refresh["']/i.test(html) || /name=["']robots["'][^>]*noindex/i.test(html)) continue;
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const count = (s, re) => (s.match(re) || []).length;
  const words = main.replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;

  rows.push({
    url: url === '/' ? '/' : url,
    w: words,
    h2: count(main, /<h2/g),
    h3: count(main, /<h3/g),
    t: count(main, /<table/g),
    // ⛔ Считаем ТОЛЬКО ссылки внутри абзацев, списков и таблиц.
    // Общий счёт по <main> включает крошки, оглавление, блок «похожие» и CTA —
    // это бойлерплейт (§5). На нетронутых страницах он давал «6 ссылок»
    // при НУЛЕ контентных, то есть скрывал, что страница — остров.
    links: [...main.matchAll(/<(p|li|td)\b[\s\S]*?<\/\1>/g)]
      .reduce((n, m) => n + count(m[0], /href="\/[a-z]/g), 0),
  });
}

rows.sort((a, b) => a.w - b.w);
const below = r => r.w < NORM.w || r.h2 < NORM.h2 || r.h3 < NORM.h3 || r.t < NORM.t || r.links < NORM.links;
const bad = rows.filter(below);

const line = r => '  ' + r.url.padEnd(46) +
  String(r.w).padStart(5) + String(r.h2).padStart(4) + String(r.h3).padStart(4) +
  String(r.t).padStart(4) + String(r.links).padStart(5);

console.log(`Трафиковых страниц: ${rows.length} · ниже норматива: ${bad.length} · в норме: ${rows.length - bad.length}`);
console.log(`Норматив кластера: слов ≥${NORM.w}, H2 ≥${NORM.h2}, H3 ≥${NORM.h3}, таблиц ≥${NORM.t}, контентных ссылок ≥${NORM.links}\n`);
console.log('  URL'.padEnd(48) + 'слов  H2  H3 табл ссыл');
console.log('  ── НИЖЕ НОРМАТИВА ──');
bad.forEach(r => console.log(line(r)));
console.log('  ── В НОРМЕ ──');
rows.filter(r => !below(r)).forEach(r => console.log(line(r)));
