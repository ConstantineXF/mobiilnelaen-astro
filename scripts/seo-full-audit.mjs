/**
 * seo-full-audit.mjs — ПАРАМЕТРИЧЕСКИЙ аудит по мастер-гиду.
 * Перенесён из vertaislaina24 и адаптирован под mobiilnelaen.ee:
 *   · один язык (ET), hreflang нет;
 *   · служебные слаги эстонские;
 *   · «домен в title» проверяет mobiilnelaen;
 *   · схема продукта — LoanOrCredit (кредитная ниша), не Service;
 *   · добавлена проверка ПОВТОРЯЮЩИХСЯ вопросов FAQ между страницами
 *     (требование владельца: одинаковых наборов и одинаковых вопросов быть не должно).
 *
 * Скелет («что на странице») проверяет отдельный scripts/seo-skeleton.mjs —
 * параметрический аудит без скелетного даёт ложное «готово» (гид §A2f).
 *
 * Запуск: node scripts/seo-full-audit.mjs [dist]   ·   FULL=1 → все замечания
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = process.argv[2] ?? 'dist';

// Служебные: юр-страницы, контакты, «о нас», методика (§18b и §A1 гида —
// у них нет собственного поискового интента, нормативы объёма к ним не применяются).
const SERVICE = /^(privaatsuspoliitika|kasutustingimused|kontakt|meist|metoodika|vastutusest-loobumine|404)$/;
const NORM = {
  cluster: { w: 2600, h2: 14, h3: 6, t: 1, links: 20 },
  home: { w: 2100, h2: 16, h3: 14, t: 1, links: 20 },
};
const kindOf = (u) => (u === '/' ? 'home' : 'cluster');

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : (e.name === 'index.html' ? [p] : []);
});
const c = (s, re) => (s.match(re) || []).length;
const attr = (h, re) => (h.match(re) || [])[1] ?? null;

const pages = [];
let stubs = 0;

for (const f of walk(DIST)) {
  const html = fs.readFileSync(f, 'utf8');
  if (/http-equiv=["']refresh["']/i.test(html) || /name=["']robots["'][^>]*noindex/i.test(html)) { stubs++; continue; }

  const url = '/' + path.relative(DIST, f).split(path.sep).join('/').replace(/index\.html$/, '');
  const seg = url.replace(/^\//, '').replace(/\/$/, '').split('/')[0];
  const service = SERVICE.test(seg);
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];

  const words = main.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;

  // Контентные ссылки — только внутри абзацев, списков и ячеек (гид §5.0)
  const inlineLinks = [...main.matchAll(/<(p|li|td)\b[\s\S]*?<\/\1>/g)]
    .flatMap((m) => [...m[0].matchAll(/href="(\/[^"#?]*)"/g)].map((x) => x[1]))
    .filter((h) => !/^\/(go|api)\//.test(h));

  // Вопросы FAQ: из схемы и из <summary>. Оглавление (<summary>Sisukord) не вопрос.
  const faqQ = [...new Set([
    ...[...html.matchAll(/"@type"\s*:\s*"Question"\s*,\s*"name"\s*:\s*"([^"]+)"/g)].map((m) => m[1]),
    ...[...main.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)]
      .map((m) => m[1].replace(/<[^>]*>/g, '').trim()).filter((q) => q.endsWith('?')),
  ])];

  pages.push({
    _html: html, _main: main,
    url, service, kind: kindOf(url),
    w: words,
    h1: c(html, /<h1/g),
    h2: c(main, /<h2/g), h3: c(main, /<h3/g), t: c(main, /<table/g),
    links: inlineLinks.length,
    outgoing: [...new Set(inlineLinks.map((u) => (u.endsWith('/') ? u : u + '/')))],
    title: attr(html, /<title>([^<]*)<\/title>/),
    desc: attr(html, /name="description" content="([^"]*)"/),
    canonical: attr(html, /rel="canonical" href="([^"]*)"/),
    ogUrl: attr(html, /property="og:url" content="([^"]*)"/),
    ogImg: attr(html, /property="og:image" content="([^"]*)"/),
    ogW: attr(html, /property="og:image:width" content="([^"]*)"/),
    ogH: attr(html, /property="og:image:height" content="([^"]*)"/),
    ld: [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]),
    viewport: /name="viewport"/.test(html),
    tablesWrapped: c(html, /overflow-x-auto/g) + c(html, /\.prose table\{[^}]*overflow-x:auto/g),
    imgs: c(main, /<img/g),
    imgsNoAlt: c(main, /<img(?![^>]*\balt=)/g),
    faqQ,
  });
}

const byUrl = new Map(pages.map((p) => [p.url, p]));
const inbound = new Map(pages.map((p) => [p.url, 0]));
for (const p of pages) for (const t of p.outgoing) if (inbound.has(t) && t !== p.url) inbound.set(t, inbound.get(t) + 1);

const dup = (key) => {
  const m = new Map();
  for (const p of pages) { const v = p[key]; if (!v) continue; m.set(v, (m.get(v) ?? 0) + 1); }
  return m;
};
const dTitle = dup('title'), dDesc = dup('desc'), dOg = dup('ogImg');

// Повторяющиеся вопросы FAQ между страницами
const qCount = new Map();
for (const p of pages) for (const q of p.faqQ) qCount.set(q, (qCount.get(q) ?? 0) + 1);
// Полностью совпадающие наборы вопросов
const setKey = (p) => p.faqQ.slice().sort().join('|');
const dSet = new Map();
for (const p of pages) { if (!p.faqQ.length) continue; const k = setKey(p); dSet.set(k, (dSet.get(k) ?? 0) + 1); }

const pngSize = (file) => {
  try {
    const b = fs.readFileSync(file);
    if (b.readUInt32BE(0) !== 0x89504e47) return null;
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  } catch { return null; }
};

const issues = [];
const add = (url, group, msg) => issues.push({ url, group, msg });

for (const p of pages) {
  const t = p.url;
  // 1. Контент по типу
  if (!p.service) {
    const n = NORM[p.kind];
    const miss = [];
    if (p.w < n.w) miss.push(`слов ${p.w}/${n.w}`);
    if (p.h2 < n.h2) miss.push(`H2 ${p.h2}/${n.h2}`);
    if (p.h3 < n.h3) miss.push(`H3 ${p.h3}/${n.h3}`);
    if (p.t < n.t) miss.push(`таблиц ${p.t}/${n.t}`);
    if (p.links < n.links) miss.push(`ссылок ${p.links}/${n.links}`);
    if (miss.length) add(t, 'контент', `${p.kind}: ${miss.join(', ')}`);
  }
  // 2. Мета.
  // ⛔ Длина title/description — норматив трафиковых страниц (гид §A1). К
  // служебным (юр-страницы, контакты, «о нас», методика) он не применяется:
  // им требуется «только корректная разметка», а раздувание вредит (§18b).
  // Присутствие и уникальность проверяем у всех.
  if (!p.title) add(t, 'мета', 'нет title');
  else {
    if (!p.service && (p.title.length < 45 || p.title.length > 60)) add(t, 'мета', `title ${p.title.length} симв.`);
    if (/mobiilnelaen\.(ee|com)/i.test(p.title)) add(t, 'мета', 'домен в title');
    if ((dTitle.get(p.title) ?? 0) > 1) add(t, 'мета', 'дубль title');
  }
  if (!p.desc) add(t, 'мета', 'нет description');
  else {
    if (!p.service && (p.desc.length < 140 || p.desc.length > 165)) add(t, 'мета', `description ${p.desc.length} симв.`);
    if ((dDesc.get(p.desc) ?? 0) > 1) add(t, 'мета', 'дубль description');
  }
  if (p.h1 !== 1) add(t, 'мета', `H1 ${p.h1} шт.`);
  // 3. Canonical / og:url
  if (!p.canonical) add(t, 'canonical', 'нет canonical');
  if (p.ogUrl && p.canonical && p.ogUrl !== p.canonical) add(t, 'canonical', 'og:url ≠ canonical');
  // 4. OG
  if (!p.ogImg) add(t, 'og', 'нет og:image');
  else {
    if (!/^https?:\/\//.test(p.ogImg)) add(t, 'og', 'og:image не абсолютный');
    const rel = p.ogImg.replace(/^https?:\/\/[^/]+/, '');
    const file = path.join(DIST, rel);
    if (rel.startsWith('/') && !fs.existsSync(file)) add(t, 'og', `og:image отсутствует: ${rel}`);
    else if (rel.startsWith('/')) {
      const s = pngSize(file);
      if (s && p.ogW && p.ogH && (String(s.w) !== p.ogW || String(s.h) !== p.ogH)) {
        add(t, 'og', `размеры мета ${p.ogW}×${p.ogH} ≠ файл ${s.w}×${s.h}`);
      }
    }
    if (!p.ogW || !p.ogH) add(t, 'og', 'нет og:image:width/height');
    if ((dOg.get(p.ogImg) ?? 0) > 4) add(t, 'og', 'общая карточка на многих страницах');
  }
  // 5. Схемы
  const types = p.ld.flatMap((s) => [...s.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((m) => m[1]));
  if (!types.length) add(t, 'схемы', 'нет JSON-LD');
  else {
    if (p.url !== '/' && !types.includes('BreadcrumbList')) add(t, 'схемы', 'нет BreadcrumbList');
    if (!p.service && p.url !== '/' && !types.includes('LoanOrCredit')) add(t, 'схемы', 'нет LoanOrCredit');
    if (c(p._html, /"@type"\s*:\s*"FAQPage"/g) > 1) add(t, 'схемы', 'два FAQPage в документе');
  }
  // 6. Адаптив
  if (!p.viewport) add(t, 'адаптив', 'нет viewport');
  if (p.t > p.tablesWrapped) add(t, 'адаптив', `таблиц ${p.t}, обёрток ${p.tablesWrapped}`);
  if (p.imgsNoAlt > 0) add(t, 'адаптив', `картинок без alt: ${p.imgsNoAlt}`);
  if (!p.service && p.imgs === 0) add(t, 'адаптив', 'нет ни одной картинки');
  // 7. Силос
  if (!p.service && p.url !== '/') {
    if ((inbound.get(p.url) ?? 0) === 0) add(t, 'силос', 'сирота: нет входящих контентных ссылок');
    if (p.outgoing.length === 0) add(t, 'силос', 'тупик: нет исходящих контентных ссылок');
  }
  // 8. FAQ: наличие и уникальность
  if (!p.service) {
    if (p.faqQ.length < 5) add(t, 'faq', `вопросов ${p.faqQ.length}/5`);
    if (p.faqQ.length && (dSet.get(setKey(p)) ?? 0) > 1) add(t, 'faq', 'набор вопросов дублирует другую страницу');
    for (const q of p.faqQ) if ((qCount.get(q) ?? 0) > 1) add(t, 'faq', `вопрос повторяется на другой странице: «${q}»`);
  }
}

// Свежесть: lastmod в sitemap
const smFiles = fs.readdirSync(DIST).filter((f) => /^sitemap.*\.xml$/.test(f));
let lastmodOk = false;
for (const f of smFiles) {
  if (/<lastmod>/.test(fs.readFileSync(path.join(DIST, f), 'utf8'))) lastmodOk = true;
}
if (smFiles.length && !lastmodOk) issues.push({ url: '(sitemap)', group: 'свежесть', msg: 'нет lastmod ни на одном URL' });
if (!smFiles.length) issues.push({ url: '(sitemap)', group: 'свежесть', msg: 'sitemap не найден' });

// Скелет: видимые крошки и блок вопросов (гид §20 / §A2f)
const _FAQ = /(?:id|class)="[^"]*\bfaq\b[^"]*"|<h[23][^>]*>[\s\S]{0,140}?(?:KKK|Korduma\s+kippuvad|Sagedas\w*\s+küsimus|FAQ)/i;
const _CRUMB_LABEL = /aria-label="[^"]*(?:breadcrumb|murupuru)[^"]*"/i;
const _hasCrumbs = (h) => _CRUMB_LABEL.test(h) ||
  [...h.matchAll(/<ol\b[^>]*>([\s\S]{0,900}?)<\/ol>/gi)]
    .some((m) => /href="\/"/.test(m[1]) && (m[1].match(/<a\b/g) || []).length >= 1);

for (const p of pages) {
  const h = p._html;
  if (p.url !== '/') {
    if (!_hasCrumbs(h)) add(p.url, 'скелет', 'нет видимых хлебных крошек');
    else if (!_CRUMB_LABEL.test(h)) add(p.url, 'скелет', 'крошки без aria-label');
  }
  const faq = _FAQ.test(p._main) || (p._main.match(/<details/g) || []).length >= 3;
  const faqLd = /"@type"\s*:\s*"FAQPage"/.test(h);
  if (!p.service && !faq) add(p.url, 'скелет', 'нет блока вопросов и ответов');
  if (faqLd && !faq) add(p.url, 'скелет', 'FAQPage в схеме, а видимого блока нет');
}

// ── Отчёт ──
const byGroup = {};
for (const i of issues) (byGroup[i.group] ??= []).push(i);
const affected = new Set(issues.map((i) => i.url)).size;

if (process.env.FULL) {
  for (const i of issues) console.log(`${i.group.padEnd(10)} ${i.url} — ${i.msg}`);
  console.log('');
}
console.log(`Страниц: ${pages.length} (стабов пропущено: ${stubs}) · с замечаниями: ${affected} · всего замечаний: ${issues.length}\n`);
if (issues.length) {
  console.log('По группам:');
  for (const [g, list] of Object.entries(byGroup).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  ${g.padEnd(12)} ${String(list.length).padStart(4)}`);
  }
  console.log('\nПримеры (до 3 на группу):');
  for (const [g, list] of Object.entries(byGroup)) {
    console.log(`\n[${g}]`);
    for (const i of list.slice(0, 3)) console.log(`  ${i.url} — ${i.msg}`);
    if (list.length > 3) console.log(`  … ещё ${list.length - 3}`);
  }
}
