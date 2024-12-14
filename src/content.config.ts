import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kandungan = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/kandungan/data" }),
	schema: z.object({
		title: z.string()
	})
});

export const collections = { kandungan };