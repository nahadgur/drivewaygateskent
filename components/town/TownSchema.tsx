import { siteConfig } from '@/data/site';
import type { TownPage } from '@/data/townPages';

interface TownSchemaProps {
  town: TownPage;
  description: string;
  faqs: { question: string; answer: string }[];
}

// Service schema with the town as a real Place (GeoCoordinates), plus FAQPage.
export function TownSchema({ town, description, faqs }: TownSchemaProps) {
  const url = `${siteConfig.url}/location/${town.slug}/`;
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Driveway gate installation in ${town.name}`,
    serviceType: 'Driveway gate installation',
    url,
    description,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: {
      '@type': 'Place',
      name: `${town.name}, Kent`,
      geo: { '@type': 'GeoCoordinates', latitude: town.lat, longitude: town.lng },
      containedInPlace: { '@type': 'AdministrativeArea', name: town.council },
    },
  };
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />}
    </>
  );
}
