import { defineCollection, z } from 'astro:content'
import { rssSchema } from "@astrojs/rss"
import { glob } from "astro/loaders"

const ideas = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./idea" }),
  schema: rssSchema.extend({
    tags : z.array(z.string()).optional()
  })
});

export const collections = {
  ideas
}