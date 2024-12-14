import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
// https://astro.build/config
export default defineConfig({
  site: "https://shoen1x.github.io",
  base: "HEAD",
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), svelte()],
});