import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  site: "https://shoen1x.github.io",
  base: "HEAD",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()]
});