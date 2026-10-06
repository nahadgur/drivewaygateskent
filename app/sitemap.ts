import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { TOWN_PAGES, townRedirects } from '@/data/townPages';
import { blogArticles } from '@/data/blog';
import { BLOG_SITEMAP_RELEASE, releasedBlogSlugs } from '@/data/blogReleaseSchedule';

// Re-evaluate daily so dripped blog posts enter the sitemap on their release date
// without needing a redeploy.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const released = new Set(releasedBlogSlugs());

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/privacy/`, lastModified: new Date('2026-07-16'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Town pages: legacy template towns not yet folded into a bespoke page, plus every
  // bespoke page that is built.
  const absorbed = new Set(townRedirects().map(r => r.from));
  const townSlugs = new Set(allCities.map(toSlug).filter(slug => !absorbed.has(slug)));
  TOWN_PAGES.filter(t => t.built).forEach(t => townSlugs.add(t.slug));
  const locationPages: MetadataRoute.Sitemap = Array.from(townSlugs).map(slug => ({
    url: `${base}/location/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Drip-fed blog posts: only those whose release date has arrived.
  const blogPages: MetadataRoute.Sitemap = blogArticles
    .filter(a => released.has(a.slug))
    .map(a => ({
      url: `${base}/blog/${a.slug}/`,
      lastModified: new Date(BLOG_SITEMAP_RELEASE[a.slug]),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
