import type { MetadataRoute } from 'next';

import { PAGE_META, SITE_URL } from '@/shared/constants/seo';

export const dynamic = 'force-static';

const PRIORITY: Record<string, number> = {
  '/': 1,
  '/team': 0.5,
  '/contact': 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(PAGE_META).map(path => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: PRIORITY[path] ?? 0.8,
  }));
}
