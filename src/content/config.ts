import { defineCollection, z } from 'astro:content';
// z -> zod schema

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        authors: z.string().or(z.array(z.string())),
        features: z.string().or(z.array(z.string())),
        img: z.string(),
        tech: z.array(
            z.object({
              name: z.string(),
              icon: z.string(),
            })
        ),
        url: z.string(),
    })
});

export const collections = { projects };

