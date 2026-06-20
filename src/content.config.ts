import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    draft: z.boolean().optional(),
    featured: image().optional(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date(),
    external_link: z.string().url().optional(),
    featured: image().optional(),
    featuredProject: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
