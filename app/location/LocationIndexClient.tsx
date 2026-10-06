// app/location/page.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function LocationIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow heritage-inner">
        <Hero
          title="Find a Gate Installer Near You in Kent"
          subtitle="75 Kent towns from Sevenoaks to Folkestone, Dartford to Tenterden. Search your area below to request free quotes."
          image="/images/gates/gate-aerial-wrought-iron-closed-topiary-gravel-circle.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <section className="section-padding">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-12">
              <div>
                <p className="text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">County-wide network</p>
                <h2 className="text-4xl md:text-5xl">Local knowledge matters.</h2>
              </div>
              <p className="text-gray-600 text-lg leading-8">Kent’s coast, National Landscapes, conservation areas and varied ground conditions all affect the right specification. Start with your area.</p>
            </div>
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your town or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-sm border border-gray-200 bg-brand-50 text-brand-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="space-y-12">
              {Object.entries(filteredLocations).map(([region, cities]) => (
                <div key={region} className="border-t border-brand-300 pt-8">
                  <h2 className="text-3xl font-display font-semibold text-brand-950 mb-6">{region}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {cities.map(city => (
                      <Link
                        key={city}
                        href={`/location/${toSlug(city)}/`}
                        className="group block bg-white hover:bg-brand-50 border border-brand-200 hover:border-brand-500 rounded-sm p-4 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="font-medium text-gray-700 group-hover:text-brand-700 text-sm">{city}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
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
