import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HeroLeadForm } from '@/components/HeroLeadForm';

interface TownHeroProps {
  town: string;
  slug: string;
  title: string;
  intro: React.ReactNode;
  image: string;
}

// Hero layout for a town page: the H1 and intro are written per town, the form is shared.
export function TownHero({ town, title, intro, image }: TownHeroProps) {
  return (
    <section className="bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-950/50" />
      </div>
      <div className="container-width py-10 md:py-14 relative z-10">
        <Breadcrumbs tone="dark" items={[{ label: 'Areas', href: '/location/' }, { label: town }]} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-[640px]">
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.05] mb-5 text-white text-balance">{title}</h1>
            <div className="text-lg text-brand-100 leading-relaxed space-y-3">{intro}</div>
          </div>
          <div>
            <HeroLeadForm city={town} />
          </div>
        </div>
      </div>
    </section>
  );
}
