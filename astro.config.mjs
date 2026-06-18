import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mobiilnelaen.ee',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Не индексируем партнёрские редиректы /go/*
      filter: (page) => !page.includes('/go/'),
    }),
  ]
});