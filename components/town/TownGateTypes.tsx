import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

// Compact links to the six service pages. The heading is passed in per town.
export function TownGateTypes({ heading, note }: { heading: string; note?: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mb-3">{heading}</h2>
      {note && <p className="text-gray-600 mb-5 leading-relaxed">{note}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map(s => (
          <Link
            key={s.id}
            href={`/services/${s.slug}/`}
            className="group flex items-center justify-between gap-3 p-4 bg-brand-50 rounded-sm border border-brand-100 hover:border-brand-300 transition-colors"
          >
            <span className="font-medium text-brand-950 group-hover:text-brand-700">{s.title}</span>
            <ArrowRight className="w-4 h-4 text-brand-500 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}
