import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://qalbu-quran.pages.dev',
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()]
});