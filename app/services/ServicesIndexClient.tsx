// app/services/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ServicesIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow heritage-inner">
        <Hero
          title="Driveway Gate Services Across Kent"
          subtitle="From bespoke hardwood for Wealden farmhouses to marine-grade aluminium for the East Kent coast. Sliding, swing, automated, and manual. Pick your gate type below and find a Kent installer."
          image="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png"
          showCta={false}
        />
        <section className="section-padding">
          <div className="container-width">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20 items-end mb-12 md:mb-16">
              <div>
                <p className="text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">Made for the property</p>
                <h2 className="text-4xl md:text-5xl">Choose the right gate system.</h2>
              </div>
              <p className="text-gray-600 text-lg leading-8 max-w-2xl">Every material and mechanism has a different character. Explore the options, then speak with Kent specialists who can advise on proportions, planning, ground conditions and automation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-200 border border-brand-200">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group flex flex-col bg-white transition-all hover:bg-brand-50">
                  <div className="aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="text-2xl font-display font-semibold text-brand-950 group-hover:text-brand-600 mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-6 mb-6 flex-grow">{service.description}</p>
                    <span className="text-brand-700 font-bold text-xs uppercase tracking-[0.12em] flex items-center">
                      Find installers <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
