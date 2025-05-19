import { defineCollection, z } from 'astro:content';
// z -> zod schema

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        order: z.number(),
        description: z.string(),
        authors: z.string().or(z.array(z.string())),
        img: z.string(),
        tech: z.array(z.string()),
        url: z.string(),
    })
});

export const collections = { projects };

