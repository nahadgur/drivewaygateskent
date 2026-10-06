import { pageMetadata } from '@/lib/seo';
import BlogIndexClient from './BlogIndexClient';

export const metadata = pageMetadata({
  title: 'Driveway Gate Guides for Kent Homeowners',
  description: 'Guides on driveway gate costs, planning permission, materials, safety and repairs for Kent homes, including coastal and rural properties.',
  path: '/blog/',
});

export default function BlogIndexPage() {
  return <BlogIndexClient />;
}
