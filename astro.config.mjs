import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { lastmodFor } from "./scripts/page-updated.mjs";

// https://astro.build/config
export default defineConfig({
  // Хост совпадает с реально отдаваемым (non-www 307 → www),
  // иначе sitemap и canonical ссылаются на редиректы.
  site: 'https://www.mobiilnelaen.ee',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Не индексируем партнёрские редиректы /go/*
      filter: (page) => !page.includes('/go/'),
      // Честный lastmod: дата реальной правки страницы из scripts/page-updated.mjs.
      // Общей даты «сегодня» на весь сайт быть не должно (гид §19).
      serialize(item) {
        const d = lastmodFor(new URL(item.url).pathname);
        if (d) item.lastmod = new Date(d + 'T00:00:00Z').toISOString();
        return item;
      },
    }),
  ]
});