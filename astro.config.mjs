import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import genericBuildFilenames from 'astro-generic-build-filenames';
// https://astro.build/config
export default defineConfig({
  site: "https://shoen1x.github.io",
  base: "HEAD",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    genericBuildFilenames()
  ]
});