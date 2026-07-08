import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server',
  adapter: cloudflare({ routes: { exclude: ['/googledc8e00915daee8f6.html', '/googledc8e00915daee8f6'] } }),
  integrations: [tailwind()]
});