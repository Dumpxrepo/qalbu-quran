import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server', // Penting untuk SSR
  adapter: cloudflare(),
  integrations: [tailwind()]
});