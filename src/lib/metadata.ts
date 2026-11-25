import type { Metadata } from 'next';
import { PROFILE } from '@/lib/data';

export function pageMetadata(title: string, description: string, path: string, image = PROFILE.heroImage): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: PROFILE.name, type: 'website', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
