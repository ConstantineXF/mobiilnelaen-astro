/**
 * seo-skeleton.mjs — матрица «страница × слот» по §20 SEO-гида.
 *
 * Зачем отдельно от seo-full-audit.mjs: тот проверяет ПАРАМЕТРЫ (мета, схемы,
 * объём, alt, canonical). Скелет — это ЧТО на странице. Пока его не проверяли
 * машинно, аудит выдавал «0 замечаний» на страницах без FAQ, без блока «что
 * делать при отказе» и без ссылок на регулятора.
 *
 * ⛔ Слот ≠ реализация (§20.1). Маркеры ищутся широко: заголовок, id/класс,
 * характерная разметка. Ложноположительное «слот есть» хуже пропуска, поэтому
 * маркеры узкие по смыслу и широкие по формулировке.
 *
 * Запуск:  node scripts/seo-skeleton.mjs dist [--csv]
 */
import fs from 'fs';
import path from 'path';

const DIST = process.argv[2] ?? 'dist';
const CSV = process.argv.includes('--csv');

// Служебные страницы: скелет к ним не применяется (§18b).
// ⛔ 04.08.2026: сюда добавлены metoodika/methodology и их аналоги. Страница
// методики раскрывает критерии сравнения — у неё нет собственного поискового
// интента, и гид (§A1 «К каким страницам нормативы НЕ применяются») освобождает
// её прямо. Без этого /metoodika/ считалась кластером и одна страница давала
// ложные промахи сразу в шести слотах.
const SERVICE = /^(privaatsuspoliitika|privaatsuspolitika|kasutustingimused|kontaktid|kontakt|meist|metoodika|metodika|metoodia|methodology|metodologija|metodoloģija|menetelma|reklaam|reklama|advertising|about|vastutusest-loobumine|tingimused|admin|404|autor|avtor|o-sajte|kontakty|politika-konfidencialnosti|otkaz-ot-otvetstvennosti|usloviya|usloviya-ispolzovaniya|sitemap|tanan|aitah|kinnitus)$/;

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) return ['_astro', 'assets', 'og', 'images', 'fonts'].includes(e.name) ? [] : walk(p);
  return e.name.endsWith('.html') ? [p] : [];
});

// ── Маркеры слотов. Многоязычные: ET / RU / EN / FI / LV ──────────────────
const H = (re) => new RegExp('<h[23][^>]*>[^<]{0,160}?(?:' + re + ')', 'i');

const SLOTS = [
  {
    n: 2, key: 'ответ', label: 'прямой ответ на интент',
    test: (p) => H('mis on|kes saab|kellele|что такое|кому подходит|кто может|what is|mikä on|kuka voi|kas ir|kam paredzēt').test(p.main)
      || /<h1[\s\S]{0,900}?<p[^>]*>[\s\S]{200,}?<\/p>/i.test(p.main),
  },
  {
    n: 3, key: 'данные', label: 'таблица/диапазоны данных',
    test: (p) => p.tables > 0 || /<dl[\s>]/i.test(p.main),
  },
  {
    n: 4, key: 'рынок', label: 'рынок в цифрах + источник/дата',
    test: (p) => H('turg|arvud|statistika|рынок|цифра|статистик|market|numbers|markkina|tirgus|skaitļ').test(p.main)
      || /(allikas|источник|source|lähde|avots)\s*[:—-]/i.test(p.text),
  },
  {
    n: 5, key: 'шаги', label: 'как это работает (шаги)',
    test: (p) => H('kuidas|samm|как\\s|шаг|порядок|how (to|it)|step|miten|vaihe|kā\\s|solī').test(p.main)
      || /<ol[\s>][\s\S]{0,2000}?<li/i.test(p.main),
  },
  {
    n: 6, key: 'инструмент', label: 'калькулятор/подбор',
    test: (p) => /type="range"|data-calc|kalkulaator|калькулятор|calculator|laskuri|kalkulator/i.test(p.html),
  },
  {
    n: 7, key: 'плюсы-минусы', label: 'плюсы/ограничения',
    test: (p) => H('eelis|puudus|miinus|плюс|минус|преимуществ|недостат|pros|cons|advantage|drawback|hyöd|haitt|priekšrocīb|trūkum').test(p.main),
  },
  {
    n: 8, key: 'требования', label: 'требования/условия',
    test: (p) => H('nõue|tingimus|требован|услови|кому дают|requirement|condition|vaatimu|ehdo|prasīb|nosacīj').test(p.main),
  },
  {
    n: 9, key: 'отказ', label: 'что делать при отказе',
    // ⚠️ 04.08.2026: маркер был только «keeldu». По-эстонски об отказе чаще
    // пишут иначе — «taotlus lükatakse tagasi», «eitav otsus», «jääb
    // rahuldamata», «limiiti ei kinnitatud». Из-за узкого словаря слот
    // показывался отсутствующим на страницах, где раздел есть (проверено руками
    // на 7 страницах: гид §A2f требует сверять детектор перед работой по списку).
    test: (p) => H('keeldu|ei saa laenu|tagasi lükat|tagasilükkam|eitav otsus|jääb rahuldamata|ei kinnitatud|отказ|не одобр|refus|denied|reject|kielteinen|hylkä|atteik|noraid').test(p.main),
  },
  {
    n: 10, key: 'регулирование', label: 'правовая рамка + именованный источник',
    test: (p) => /(finantsinspektsioon|riigiteataja|riigi teataja|tarbijakaitse|krediidiandjate ja -vahendajate seadus|финансовая инспекция|finanssivalvonta|kkv\.fi|kilpailu|ptac|patērētāju tiesīb|latvijas banka|consumer protection)/i.test(p.text)
      || /href="https?:\/\/[^"]*(fi\.ee|riigiteataja\.ee|tarbijakaitse|finanssivalvonta\.fi|kkv\.fi|ptac\.gov\.lv|bank\.lv)/i.test(p.html),
  },
  {
    n: 12, key: 'faq', label: 'FAQ 5–8 вопросов',
    test: (p) => p.faqQ >= 5,
    soft: (p) => p.faqQ > 0 && p.faqQ < 5,
  },
];

const FAQ_ZONE = /(?:id|class)="[^"]*\bfaq\b[^"]*"|<h[23][^>]*>[^<]{0,140}?(?:KKK|Korduma\s+kippuvad|Sagedas\w*\s+küsimus|FAQ|Часто\s+задава|Частые\s+вопрос|Вопросы\s+и\s+ответ|Usein\s+kysytyt|UKK|Biežāk\s+uzdotie|Bieži\s+uzdotie|Jautājumi\s+un\s+atbildes)/i;

// Сколько в блоке вопросов. Считаем по трём типовым реализациям сразу:
// FAQPage-схема, <details>/<summary>, заголовки-вопросы со знаком «?».
const countFaq = (html, main) => {
  const ld = [...html.matchAll(/"@type"\s*:\s*"Question"/g)].length;
  const det = (main.match(/<summary[\s>]/g) || []).length;
  const qh = [...main.matchAll(/<(h[34]|summary|button|dt)[^>]*>([^<]{6,200}\?)\s*<\//g)].length;
  return Math.max(ld, det, qh);
};

const pages = [];
for (const f of walk(DIST)) {
  const html = fs.readFileSync(f, 'utf8');
  if (/http-equiv=["']refresh["']/i.test(html) || /name=["']robots["'][^>]*noindex/i.test(html)) continue;
  const url = '/' + path.relative(DIST, f).split(path.sep).join('/').replace(/index\.html$/, '');
  if (url.endsWith('404.html')) continue;
  const seg = url.replace(/^\/(ru\/|en\/|lv\/|fi\/)?/, '').replace(/\/$/, '').split('/')[0];
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const text = main.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  const inline = [...main.matchAll(/<(p|li|td)\b[\s\S]*?<\/\1>/g)]
    .flatMap((m) => [...m[0].matchAll(/href="(\/[^"#?]*)"/g)].map((x) => x[1]))
    .filter((h) => !/^\/(go|bank|api)\//.test(h));

  pages.push({
    url, html, main, text, words,
    service: SERVICE.test(seg) || url === '/sitemap.xml',
    root: /^\/(?:ru\/|en\/|lv\/|fi\/)?$/.test(url),
    depth: url.split('/').filter(Boolean).length,
    tables: (main.match(/<table[\s>]/g) || []).length,
    faqZone: FAQ_ZONE.test(main),
    faqQ: countFaq(html, main),
    inline: [...new Set(inline.map((u) => (u.endsWith('/') ? u : u + '/')))],
    linkDensity: words ? +(inline.length / (words / 1000)).toFixed(1) : 0,
  });
}

// ── Силос: входящие/исходящие, связь с родителем и соседями ───────────────
const byUrl = new Map(pages.map((p) => [p.url, p]));
const inbound = new Map(pages.map((p) => [p.url, []]));
for (const p of pages) for (const t of p.inline) if (inbound.has(t)) inbound.get(t).push(p.url);
const parentOf = (u) => {
  const parts = u.split('/').filter(Boolean);
  if (parts.length < 2) return null;
  return '/' + parts.slice(0, -1).join('/') + '/';
};

// ── Тип страницы → обязательные слоты (§20.3). Требовать всё со всех —
// та же ошибка, что нормативы кластера на служебных страницах.
const kindOf = (u) => {
  if (/\/(blogi|blog|uudised|novosti|news|blogs|zinas|uutiset)\//.test(u)) return 'guide';
  if (/\/(laenupakkujad|kreditory|lenders|aizdevej|lainanantaj)\//.test(u)) return 'provider';
  if (/\/(blogi|blog|uudised|novosti|news)\/$/.test(u)) return 'listing';
  return 'cluster';
};
const REQUIRED = {
  cluster: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  guide: [2, 5, 7, 9, 10, 12],
  provider: [3, 7, 10, 12],
  listing: [2, 12],
};

const target = pages.filter((p) => !p.service && !p.root);
for (const p of target) p.kind = kindOf(p.url);
const miss = {};
const rows = [];

for (const p of target) {
  const gaps = [];
  const req = REQUIRED[p.kind] || REQUIRED.cluster;
  for (const s of SLOTS) {
    if (!req.includes(s.n)) continue;
    if (s.test(p)) continue;
    const soft = s.soft && s.soft(p);
    gaps.push(soft ? s.key + '~' : s.key);
    (miss[s.key] ??= []).push(p.url);
  }
  const par = parentOf(p.url);
  const upOk = !par || !byUrl.has(par) || p.inline.includes(par);
  const inb = inbound.get(p.url) || [];
  rows.push({ url: p.url, w: p.words, faq: p.faqQ, dens: p.linkDensity, in: inb.length, upOk, gaps });
}

if (CSV) {
  console.log(['url', 'words', 'faq', 'density', 'inbound', 'up', ...SLOTS.map((s) => s.key)].join(';'));
  for (const r of rows) {
    const p = target.find((x) => x.url === r.url);
    console.log([r.url, r.w, r.faq, r.dens, r.in, r.upOk ? 1 : 0,
      ...SLOTS.map((s) => (s.test(p) ? 1 : s.soft && s.soft(p) ? 0.5 : 0))].join(';'));
  }
  process.exit(0);
}

console.log(`Страниц под скелет: ${target.length} (служебные и корни исключены)\n`);
console.log('Слот                              нет      % готово   (из скольких требуется)');
for (const s of SLOTS) {
  const n = (miss[s.key] || []).length;
  const need = target.filter((p) => (REQUIRED[p.kind] || REQUIRED.cluster).includes(s.n)).length;
  const pct = need ? Math.round(((need - n) / need) * 100) : 100;
  console.log(`${(s.n + '. ' + s.label).padEnd(34)}${String(n).padStart(4)}${String(pct + '%').padStart(12)}${String(need).padStart(10)}`);
}

const thin = rows.filter((r) => r.dens < 3);
const orphan = rows.filter((r) => r.in === 0);
const noUp = rows.filter((r) => !r.upOk);
const faqThin = rows.filter((r) => r.faq > 0 && r.faq < 5);
const faqNone = rows.filter((r) => r.faq === 0);

console.log('\nПерелинковка и силос');
console.log(`  контентных ссылок < 3 на 1000 слов: ${thin.length}  (норма 3–8)`);
console.log(`  сирот (0 входящих контентных):      ${orphan.length}`);
console.log(`  без ссылки на родителя кластера:    ${noUp.length}`);
console.log('\nFAQ');
console.log(`  нет вопросов вовсе: ${faqNone.length}`);
console.log(`  1–4 вопроса (мало): ${faqThin.length}`);

const show = (t, arr) => { if (arr.length) console.log('\n' + t + ':\n  ' + arr.slice(0, 12).map((r) => r.url + (r.faq ? ` (${r.faq})` : '')).join('\n  ') + (arr.length > 12 ? `\n  … ещё ${arr.length - 12}` : '')); };
show('Без FAQ', faqNone);
show('FAQ неполный', faqThin);
show('Тонкая перелинковка', thin);
