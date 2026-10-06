import { pageMetadata } from '@/lib/seo';
import LocationIndexClient from './LocationIndexClient';

export const metadata = pageMetadata({
  title: 'Driveway Gate Installers by Kent Town',
  description: 'Find driveway gate installers in your part of Kent, from Dartford and Sevenoaks to Canterbury, Whitstable and Folkestone. Request free quotes.',
  path: '/location/',
});

export default function LocationIndexPage() {
  return <LocationIndexClient />;
}
