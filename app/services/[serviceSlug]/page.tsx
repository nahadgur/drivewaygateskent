import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
import ServiceClient from './ServiceClient';

interface Props { params: { serviceSlug: string } }

const SERVICE_META: Record<string, { title: string; description: string }> = {
  'electric-sliding-gates': {
    title: 'Electric Sliding Gates in Kent',
    description: 'Electric sliding gates for Kent driveways: ground-track and cantilever systems for short, sloping or wide entrances. Request free quotes from local installers.',
  },
  'electric-swing-gates': {
    title: 'Electric Swing Gates in Kent',
    description: 'Electric swing gates in Kent with underground or ram-arm motors: price, clearance and safety explained. Request free quotes from local installers.',
  },
  'wooden-driveway-gates': {
    title: 'Wooden Driveway Gates in Kent',
    description: 'Hardwood driveway gates in iroko, oak and Accoya for Kent homes, oast houses and barn conversions. Manual or automated. Request free quotes.',
  },
  'metal-driveway-gates': {
    title: 'Metal and Wrought Iron Driveway Gates in Kent',
    description: 'Wrought iron, steel and aluminium driveway gates in Kent, galvanised and powder coated for coastal and inland homes. Request free quotes.',
  },
  'automated-gate-systems': {
    title: 'Automatic and Electric Gates in Kent',
    description: 'Automatic gate systems in Kent: motors, safety edges and photocells, intercoms and app access, and automating existing gates. Request free quotes.',
  },
  'gate-repair-and-maintenance': {
    title: 'Electric Gate Repairs and Servicing in Kent',
    description: 'Electric gate repairs and servicing in Kent: gates that will not open or close, motor and photocell faults, and safety checks. Request a repair quote.',
  },
};

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};
  const meta = SERVICE_META[service.slug] ?? { title: `${service.title} in Kent`, description: service.description };
  return pageMetadata({ ...meta, path: `/services/${service.slug}/`, image: service.image });
}

export default function ServicePage({ params }: Props) {
  if (!getServiceBySlug(params.serviceSlug)) notFound();
  return <ServiceClient params={params} />;
}
