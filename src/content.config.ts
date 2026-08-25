import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: `./${BLOG_PATH}`,
  }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      lang: z.string().optional(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const library = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/library" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      creator: z.string(),
      type: z.enum(["book", "course"]),
      status: z.enum(["want-to-read", "to-read", "reading", "completed"]),
      cover: image().optional(),
    }),
});

export const collections = { posts, library };
