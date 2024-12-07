import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  site: 'https://shoen1x.github.io',
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].mjs',
          chunkFileNames: 'chunks/chunk.[hash].mjs',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
});