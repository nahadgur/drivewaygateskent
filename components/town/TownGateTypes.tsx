import Link from 'next/link';
import { services } from '@/data/services';

export function TownGateTypes({ heading, note }: { heading: string; note?: React.ReactNode }) {
  return <section className="town-gate-types"><h2>{heading}</h2>{note && <p>{note}</p>}<div className="town-gate-links">{services.map(s => <Link key={s.id} href={`/services/${s.slug}/`}>{s.title}</Link>)}</div></section>;
}
