import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path from "path";
import { BASE_URL, slugs } from "./src/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: BASE_URL,
  integrations: [
    svelte(),
    sitemap({ filter: (page) => page !== `${BASE_URL}/${slugs.factions}` }),
  ],
  vite: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "assets"),
        "@content": path.resolve(__dirname, "content"),
      },
    },
  },
});
