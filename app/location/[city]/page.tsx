import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { pageMetadata } from '@/lib/seo';
import CityClient from './CityClient';

interface Props { params: { city: string } }

export function generateStaticParams() {
  return Object.values(LOCATIONS).flat().map(city => ({ city: toSlug(city) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cityName = getCityBySlug(params.city);
  if (!cityName) return {};
  return pageMetadata({
    title: `Driveway Gates in ${cityName}, Kent`,
    description: `Electric, wooden and metal driveway gates in ${cityName}, Kent. Request free site surveys and written quotes from local gate installers.`,
    path: `/location/${params.city}/`,
  });
}

export default function CityPage({ params }: Props) {
  if (!getCityBySlug(params.city)) notFound();
  return <CityClient params={params} />;
}
