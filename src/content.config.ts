import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const kandungan = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/kandungan/data" }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
});

const deprecated = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/kandungan/deprecated",
  }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { kandungan, deprecated };
