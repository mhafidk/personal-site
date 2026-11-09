import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date().optional(),
      date: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      image: z.string().optional(),
      slug: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    })
    .transform((data) => {
      const resolvedDate = data.pubDate ?? data.date ?? new Date();
      return {
        ...data,
        pubDate: resolvedDate,
      };
    }),
});

export const collections = { blog };
