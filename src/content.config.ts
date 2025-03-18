import { defineCollection, z } from 'astro:content';

import { glob, file } from "astro/loaders"

const ideas = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./idea" }),
  schema: z.object({
    title  : z.string().optional(),
    summary: z.string().optional(),
    tags   : z.array(z.string()).optional(),
    date   : z.date().optional(),
  })
});

export const collections = {
  ideas
}