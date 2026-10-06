import { pageMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

export const metadata = pageMetadata({
  title: 'Driveway Gates Kent | Electric Gate Installers Across Kent',
  description: 'Compare free quotes from driveway gate installers across Kent. Electric sliding and swing gates, wooden and wrought iron gates, gate automation and repairs.',
  path: '/',
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeClient />;
}
