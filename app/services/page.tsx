import { pageMetadata } from '@/lib/seo';
import ServicesIndexClient from './ServicesIndexClient';

export const metadata = pageMetadata({
  title: 'Driveway Gate Types in Kent',
  description: 'Electric sliding gates, swing gates, wooden and metal driveway gates, gate automation and repairs in Kent. Compare the options and request free quotes.',
  path: '/services/',
});

export default function ServicesIndexPage() {
  return <ServicesIndexClient />;
}
