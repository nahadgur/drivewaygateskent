import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { pageMetadata } from '@/lib/seo';
import { TOWN_PAGES, townRedirects } from '@/data/townPages';
import CityClient from './CityClient';

interface Props { params: { city: string } }

// Legacy template towns only: skip towns that now have a bespoke route or redirect.
export function generateStaticParams() {
  const skip = new Set([...TOWN_PAGES.filter(t => t.built).map(t => t.slug), ...townRedirects().map(r => r.from)]);
  return Object.values(LOCATIONS).flat().map(city => toSlug(city)).filter(slug => !skip.has(slug)).map(city => ({ city }));
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
