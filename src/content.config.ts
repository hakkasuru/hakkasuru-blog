import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    repo: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    status: z.enum(["active", "archived", "wip"]).default("active"),
  }),
});

const travel = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/travel" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    country: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    visitedAt: z.coerce.date(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    excerpt: z.string(),
  }),
});

export const collections = { articles, projects, travel };
