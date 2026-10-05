import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is one Markdown file in src/content/projects/.
// Set draft: true to keep it off the live site.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    sector: z.string(),
    kind: z.enum(['commercial', 'domestic']).default('commercial'),
    year: z.number(),
    systems: z.array(z.string()).default([]),
    services: z.array(z.string()).default([]),
    location: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
