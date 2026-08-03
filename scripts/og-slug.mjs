// ============================================================
// Единое правило «URL страницы → файл OG-карточки».
//
// ⭐ 03.08.2026. Основание — факт, а не теория: страница конкурента
// sesok.ee/laen/kiirlaen не содержит НИ ОДНОГО тега <img>, картинка живёт
// только в og:image — и всё равно выдаётся в поиске по картинкам Google.
// Значит og:image индексируется как самостоятельный ресурс, а имя файла
// работает как ключ. Слаги разделов у нас уже ключевые (kiirlaen, vaikelaen,
// autolaen…), а главная отдавала index.png — ключа в имени нет вообще.
//
// ⚠️ Отдельный модуль, а не функция внутри generate-og.mjs: тот на верхнем
// уровне ПИШЕТ картинки, поэтому импортировать его из .astro нельзя.
// Раньше список страниц был скопирован в MainLayout вручную и мог разъехаться
// с генератором.
// ============================================================

/** Страницы, для которых генерируется собственная карточка (npm run og). */
export const OG_PAGES = [
  'index', 'sms-laen', 'kiirlaen', 'vaikelaen', 'krediidikonto', 'krediidiliin',
  'autolaen', 'krediitkaart', 'meist', 'metoodika', 'kontakt',
  'privaatsuspoliitika', 'kasutustingimused',
];

/** Главная: ВЧ-ключ вместо технического слага. */
export const HOME_FILE = { index: 'mobiilne-laen' };

// ⛔ Прежнее имя не удаляем: ресурс мог попасть в индекс. Генератор пишет
// побайтовую копию index.png — дубль по содержимому безвреден, а 404 на
// проиндексированной картинке вреден.
export const LEGACY_FILE = { 'mobiilne-laen': 'index' };

/** Имя файла карточки по слагу страницы. */
export const ogFileName = (slug) => HOME_FILE[slug] ?? slug;

/** Путь страницы → путь карточки от корня сайта. */
export function ogFileFor(pathname) {
  const seg = (String(pathname).replace(/^\/|\/$/g, '') || 'index').split('/')[0];
  return `/og/${ogFileName(OG_PAGES.includes(seg) ? seg : 'index')}.png`;
}
