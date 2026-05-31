import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
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
  type: 'content',
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
