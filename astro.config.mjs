import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Google Analytics ID（本番時はここに設定）
const GA_ID = 'G-4YKNW7950N';

export default defineConfig({
  site: 'https://EviDiet-Lab.github.io',
  base: '/ladylab',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    define: {
      __GA_ID__: JSON.stringify(GA_ID),
    },
  },
});
