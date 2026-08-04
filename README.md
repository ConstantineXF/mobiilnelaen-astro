# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## ✅ Скелет §20 + чистка выдуманного контента (04.08.2026)

**Проверки (обе в нуле):**
```
npm run build      # dist
npm run skeleton   # матрица «страница × слот» §20 → все слоты 100%
npm run audit      # параметрический аудит → 0 замечаний (FULL=1 — построчно)
```

### Классификаторы аудита (две ошибки, дававшие ложную картину)
- **`/metoodika/` считалась кластером.** Страница методики раскрывает критерии
  сравнения, поискового интента у неё нет — гид освобождает такие страницы от
  нормативов. Одна страница давала ложные промахи сразу в 6 слотах. Слаг добавлен
  в `SERVICE` в `scripts/seo-skeleton.mjs`.
- **Слот 9 («что делать при отказе») искался только по корню `keeldu`.** По-эстонски
  об отказе пишут иначе: «taotlus lükatakse tagasi», «eitav otsus», «jääb rahuldamata»,
  «limiiti ei kinnitatud». Раздел был на всех 7 страницах, детектор его не видел.
  Словарь маркера расширен; ⛔ детектор перед работой по списку проверять руками.
- В `scripts/seo-full-audit.mjs` длина title/description проверяется **только у
  трафиковых** страниц: служебным (юр-страницы, контакты, meist, metoodika) норматив
  не адресован, им нужна корректная разметка и ничего сверх.

### Контент
- На всех 7 страницах кластера раздел об отказе дополнен **планом действий**:
  срок и порядок шагов, право бесплатно узнать результат запроса в регистр и свои
  данные, снижение суммы/лимита, кокандидат, бесплатное долговое консультирование,
  куда жаловаться. Реализация разная по страницам (таймлайн, три шага, «сам/машина»,
  «отказ vs снятие лимита») — одинаковый блок на 7 страницах был бы шаблоном.
- Появились **исходящие ссылки на авторитеты** (раньше их не было ни на одной странице
  кластера, только в `/meist/`): fi.ee, riigiteataja.ee (KAVS и VÕS), ttja.ee,
  creditinfo.ee — разные по страницам.
- Дубль FAQ-вопроса «Mis on KKM ja miks see oluline on?» (был на `/kiirlaen/` и
  `/vaikelaen/`) заменён на väikelaen-специфичный. Повторяющихся вопросов и
  совпадающих наборов — 0 (проверяется теперь в `npm run audit`).
- Тайтлы короче 45 симв. **дописаны** (только additive, существующий текст —
  префикс): autolaen, vaikelaen, krediidikonto, krediidiliin, sms-laen.
  URL и H1 не тронуты. Описание главной сокращено 186 → 151.

### ⛔ Снято как выдуманное (чек-лист дефектов клонов)
- **`Testimonials.astro`** — отзывы со звёздами и именами из Sanity (тип `testimonial`).
  Компонент удалён. ⚠️ **Сами документы остались в Sanity** — удалить их в CMS
  (локально нет `SANITY_WRITE_TOKEN`), иначе они просто лежат без вывода.
- **`LiveFeed.astro`** — «Värsked taotlused üle Eesti»: лента сумм, городов и устройств
  из захардкоженного массива плюс фраза «meie platvormi kasutatakse aktiivselt iga päev».
  Портал заявок не принимает — активность была выдумана целиком.
- **`Stats.astro`** — «92% / 85% / 78%» без источника, включая «Väljamakse 15 minutiga»
  (trivializing-лексика, запрещённая в кредитной рекламе).
- **`Voting.tsx`** — счётчик голосов, стартовавший со 127 и живший в localStorage.
- Замена: **`TypicalCases.astro`** — 6 обезличенных типовых ситуаций без имён, дат,
  городов и оценок, со строкой «это не отзывы» и ссылками на профильные страницы.
- Из прод-HTML убраны **русские комментарии** (инлайн-скрипты Header/CookieConsent/QrOpen
  и `public/sw.js`) — на эстонском сайте это сетевой футпринт. Проверка: кириллицы в
  `dist` — 0 файлов.

### Свежесть
`sitemap` получил честный `lastmod` из `scripts/page-updated.mjs` (дата ставится по
факту правки; на Vercel клон shallow, вытащить дату из git на сборке нельзя).
⛔ Правишь текст страницы — правь её дату там же, в том же коммите.

### ⚠️ Осталось владельцу
- **Нет расписания пересборки.** Офферы тянутся из Sanity в момент билда, а билд
  бывает только при push. Публикация в CMS сайт не обновляет. Нужен либо
  Deploy Hook + cron (Vercel Cron / GH Action), либо вебхук Sanity → Deploy Hook.
- Документы `testimonial` в Sanity — удалить.
- В подвале указано «Tööaeg: 24/7» — для сравнительного портала это обещание
  поддержки, которого нет; заменить на реальное время ответа.

## 🖼️ OG как канал картиночного поиска (03.08.2026)

**Основание — факт, а не теория.** Страница конкурента `sesok.ee/laen/kiirlaen`
не содержит НИ ОДНОГО тега `<img>` — картинка есть только в `og:image` — и всё
равно выдаётся в поиске по картинкам Google. Значит `og:image` индексируется как
самостоятельный ресурс, а **имя файла карточки работает как ключ**.

- **Имя карточки главной = ВЧ-ключ:** `/` → `/og/mobiilne-laen.png` (был
  `index.png` — ключа в имени нет вообще). Слаги остальных страниц уже ключевые
  (`kiirlaen`, `vaikelaen`, `autolaen`…) и не тронуты.
- **Прежнее имя оставлено побайтовой копией** `index.png`: ресурс мог попасть в
  индекс, 404 на нём хуже дубля по содержимому.
- **Новый модуль `scripts/og-slug.mjs`** — единственное место со списком страниц
  и правилом именования; его импортируют и генератор, и `MainLayout`. Раньше
  список был скопирован в шаблон вручную.
- **Карточка продублирована видимым `<img>`** с осмысленным alt в конце `<main>`.
  ⛔ Прятать CSS-ом нельзя. `<img>` — основной канал обнаружения для Google
  Images, и alt там влияет, в отличие от `og:image:alt`.
- **Image-sitemap** `scripts/generate-image-sitemap.mjs` → `/sitemap-images.xml`,
  объявлен отдельной строкой `Sitemap:` в robots.txt. Вызывается **из
  `npm run build`**, потому что сборка идёт на Vercel: скрипт, запускаемый
  только локально, на проде не отработал бы и карта протухла.
- В robots.txt адреса карт переведены на **www** (non-www 307-редиректится,
  карта не должна вести на редирект).

### ⚠️ Расхождение с реестром композиций — требует решения владельца
В памяти (`reference_og_image_formula`) за mobiilnelaen.ee записана композиция
**ribbon + triangles**, и именно из-за неё vertaislaina24.fi был вручную
переведён на `sideStack`. Фактически же генератор здесь считает сид от
**`www.mobiilnelaen.ee`** (строка `DOMAIN`), и сид даёт **sideStack + dots,
1200×628** — это подтверждается живыми карточками. То есть сейчас **sideStack
занят двумя сайтами сети** (vertaislaina24.fi и mobiilnelaen.ee).
Композиция намеренно НЕ менялась (это было бы вне рамок задачи), но развязать
коллизию стоит: либо `COMP_OVERRIDE = 'ribbon'` здесь (тогда размер станет
1200×630 и в `MainLayout` нужно поправить `og:image:height`), либо смена
композиции у vertaislaina24.fi.
