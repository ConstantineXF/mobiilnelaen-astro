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
