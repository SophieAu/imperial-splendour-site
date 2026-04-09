import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://imperialsplendour.com',
  integrations: [svelte(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@content': path.resolve(__dirname, 'content'),
      },
    },
  },
});
