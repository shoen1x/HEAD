import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
// https://astro.build/config
export default defineConfig({
  site: "https://shoen1x.github.io",
  base: "HEAD",
  integrations: [mdx(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});