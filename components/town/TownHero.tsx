import { PageIntro } from '@/components/PageIntro';
import { HeroLeadForm } from '@/components/HeroLeadForm';

interface TownHeroProps {
  town: string;
  slug: string;
  title: string;
  intro: React.ReactNode;
  image: string;
}

export function TownHero({ town, title, intro, image }: TownHeroProps) {
  return <>
    <PageIntro eyebrow="Local knowledge / Kent" title={title} breadcrumbs={[{ label: 'Areas', href: '/location/' }, { label: town }]}>{intro}</PageIntro>
    <div className="container-width enquiry-stage town-enquiry">
      <figure className="enquiry-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`Driveway gate design for ${town}`} width={1408} height={768} fetchPriority="high" />
        <figcaption>Driveway gates / {town}</figcaption>
      </figure>
      <div className="enquiry-panel"><HeroLeadForm city={town} /><p className="enquiry-note">No fee and no obligation.</p></div>
    </div>
  </>;
}
