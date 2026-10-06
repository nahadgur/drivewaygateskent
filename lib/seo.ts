import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}

// Every route sets its own title, description and self-referencing canonical.
export function pageMetadata({ title, description, path, image, absoluteTitle, noindex }: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const img = image
    ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`)
    : `${siteConfig.url}/android-chrome-512x512.png`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: 'website',
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: 'en_GB',
      images: [{ url: img, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}
