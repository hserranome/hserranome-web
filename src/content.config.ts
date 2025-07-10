import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./data/blog" }),
    schema: z.object({
        title: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        description: z.string().optional(),
    }),
});

export const collections = { blog };