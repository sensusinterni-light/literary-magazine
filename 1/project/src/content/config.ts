import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    issue: z.number(),
    issueTitle: z.string(),
    issueDate: z.string(),
    date: z.coerce.date(),
    type: z.enum(['poetry', 'prose']),
    excerpt: z.string().optional(),
  }),
});

export const collections = { articles };
