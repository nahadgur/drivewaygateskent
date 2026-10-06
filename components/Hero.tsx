import Link from 'next/link';
import { Check } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  onOpenModal?: () => void;
  checklist?: string[];
  form?: React.ReactNode;
}

export function Hero({ title, subtitle, image, showCta = true, onOpenModal, checklist, form }: HeroProps) {
  return <section className="inner-hero">
    <div className="inner-hero-copy">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {checklist && <ul className="mt-6 space-y-3">{checklist.map(item => <li key={item} className="flex items-start gap-3 text-sm"><Check size={17} className="shrink-0 mt-0.5 text-brand-300" /><span>{item}</span></li>)}</ul>}
      {showCta && !form && <div className="flex flex-wrap gap-4 mt-8">
        {onOpenModal ? <button onClick={onOpenModal} className="btn-primary">Get free quotes</button> : <Link href="/services/" className="btn-primary">Get free quotes</Link>}
        <Link href="/services/" className="btn-secondary">Explore gate styles</Link>
      </div>}
    </div>
    {form ? <div className="inner-hero-form">{form}</div> : <div className="inner-hero-visual">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" fetchPriority="high" />
    </div>}
  </section>;
}
