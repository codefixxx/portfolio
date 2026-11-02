import type { MetadataRoute } from 'next';
import { site, projects } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${site.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
  return routes;
}
