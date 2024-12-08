import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const item = defineCollection({
  loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/kandungan" })
});

export const collections = { item };