import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** A project gets a case study page when its Markdown file has text below the frontmatter. */
export function hasCaseStudy(project: Project): boolean {
  return Boolean(project.body && project.body.trim().length > 0);
}

export function caseStudyUrl(project: Project): string {
  return `/projects/${project.id}/`;
}

/** All projects sorted by `order`, with the featured one pulled out. */
export async function getProjects() {
  const all = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const featured = all.find((p) => p.data.featured) ?? all[0];
  const others = all.filter((p) => p !== featured);
  return { all, featured, others };
}
