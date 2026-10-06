'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

// Kent's 13 local planning authorities and the town pages that sit in each.
const COUNCILS: { name: string; note: string; towns: { slug: string; label: string }[] }[] = [
  {
    name: 'Sevenoaks District',
    note: 'Most of the district is Green Belt and much of it National Landscape. Kemsing has an Article 4 direction on gates and walls.',
    towns: [{ slug: 'sevenoaks', label: 'Sevenoaks' }, { slug: 'westerham', label: 'Westerham, Brasted and Edenbridge' }],
  },
  {
    name: 'Tunbridge Wells Borough',
    note: 'High Weald and Green Belt cover about three quarters of the borough. Listed stone walls on Calverley Road; a new Local Plan adopted in December 2025.',
    towns: [{ slug: 'tunbridge-wells', label: 'Tunbridge Wells' }, { slug: 'cranbrook', label: 'Cranbrook, Hawkhurst and Goudhurst' }],
  },
  {
    name: 'Tonbridge and Malling Borough',
    note: 'About 71% Green Belt, with the Medway floodplain running through Tonbridge, Aylesford and Snodland.',
    towns: [{ slug: 'tonbridge', label: 'Tonbridge and Hildenborough' }, { slug: 'west-malling', label: 'West Malling, Aylesford and Snodland' }],
  },
  {
    name: 'Maidstone Borough',
    note: 'Ragstone walls, steep drives under the Kent Downs, village Article 4 directions, and large new estates at Heathlands and Lidsing.',
    towns: [{ slug: 'maidstone', label: 'Maidstone and the villages' }],
  },
  {
    name: 'Dartford Borough',
    note: 'Article 4 directions on gates and walls at West Hill and Greenhithe, and fast growth around Ebbsfleet.',
    towns: [{ slug: 'dartford', label: 'Dartford, Greenhithe and Swanley' }],
  },
  {
    name: 'Gravesham Borough',
    note: 'Thirteen conservation areas where new gates, walls and hard surfaces need planning permission.',
    towns: [{ slug: 'gravesend', label: 'Gravesend, Meopham and Cobham' }],
  },
  {
    name: 'Medway Council',
    note: 'A unitary authority that runs its own planning and highways, with Article 4 streets controlling boundary gates.',
    towns: [{ slug: 'medway', label: 'Rochester, Chatham, Gillingham and Strood' }],
  },
  {
    name: 'Canterbury City',
    note: 'Nearly 100 conservation areas across the district, from the city’s Article 4 streets to the Whitstable and Herne Bay seafronts.',
    towns: [{ slug: 'canterbury', label: 'Canterbury' }, { slug: 'whitstable', label: 'Whitstable' }, { slug: 'herne-bay', label: 'Herne Bay' }],
  },
  {
    name: 'Swale Borough',
    note: 'An Article 4 direction across the Faversham Conservation Area brings front gates under planning control.',
    towns: [{ slug: 'faversham', label: 'Faversham' }],
  },
  {
    name: 'Ashford Borough',
    note: 'Article 4 directions written specifically for gates and fences, and Kent Downs farmhouses at Wye and Challock.',
    towns: [{ slug: 'ashford', label: 'Ashford' }, { slug: 'tenterden', label: 'Tenterden' }],
  },
  {
    name: 'Folkestone and Hythe District',
    note: 'Channel salt air on the seafront and landslips on The Leas and in Sandgate since 2023.',
    towns: [{ slug: 'folkestone', label: 'Folkestone and Hythe' }],
  },
  {
    name: 'Dover District',
    note: 'Article 4 controls on gates in Deal’s Middle Street, Sandwich’s walled town and Dover’s Dour Street.',
    towns: [{ slug: 'dover', label: 'Dover' }, { slug: 'deal', label: 'Deal, Walmer and Sandwich' }],
  },
  {
    name: 'Thanet District',
    note: 'Sea on three sides, Article 4 controls on front gardens in Ramsgate, and one of Kent’s densest clusters of listed buildings.',
    towns: [{ slug: 'thanet', label: 'Margate, Broadstairs and Ramsgate' }],
  },
];

export default function LocationIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow heritage-inner">
        <Hero
          title="Driveway Gates Across Kent"
          subtitle="Planning rules, ground and weather change from one council to the next. Find your area to see what applies to a gate where you live."
          image="/images/gates/gate-aerial-wrought-iron-closed-topiary-gravel-circle.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 mb-4">Kent&apos;s 13 Councils and Their Gate Rules</h2>
              <p className="text-gray-600 text-lg leading-8">
                Kent has 12 district councils plus Medway, and each sets its own policy on conservation areas, Article 4 directions and front boundaries. Kent County Council handles dropped kerbs everywhere except Medway, which runs its own highways.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {COUNCILS.map(c => (
                <div key={c.name} className="bg-white border border-brand-200 rounded-sm p-6">
                  <h3 className="text-xl font-display font-semibold text-brand-950 mb-2">{c.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.note}</p>
                  <ul className="space-y-2">
                    {c.towns.map(t => (
                      <li key={t.slug}>
                        <Link href={`/location/${t.slug}/`} className="group inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-900">
                          <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="group-hover:underline">Driveway gates in {t.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-brand-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
