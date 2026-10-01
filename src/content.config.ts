import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/.
// Anything you write below the frontmatter becomes that project's case study
// page, and a "Read the case study" link appears automatically.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // One or two sentences, shown in the "More work" list.
    summary: z.string(),
    // Longer description, shown when this is the featured project.
    description: z.string().optional(),
    // Short context such as "MSc dissertation" or "Huawei Technologies".
    context: z.string().optional(),
    year: z.string(),
    stack: z.array(z.string()).default([]),
    // Exactly one project should be featured. If none is, the first by order is used.
    featured: z.boolean().default(false),
    // Lower numbers appear first.
    order: z.number().default(100),
    // Name of an interactive demo in src/components/demos/index.ts.
    demo: z.string().optional(),
    links: z
      .object({
        github: z.url().optional(),
        demo: z.url().optional(),
        writeup: z.url().optional(),
      })
      .default({}),
    // Key points for the featured layout. Set highlightsAreSteps when they
    // happen in order, so they are numbered.
    highlights: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    highlightsAreSteps: z.boolean().default(false),
    // Supporting evidence for the featured layout, such as testing or load results.
    evidence: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
  }),
});

export const collections = { projects };
