'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageIntro } from '@/components/PageIntro';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ServicesIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
    <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <Header onOpenModal={() => setIsModalOpen(true)} />
    <main id="main-content" className="subpage services-index">
      <PageIntro eyebrow="Made for the property" title="Driveway Gate Services Across Kent" breadcrumbs={[{ label: 'Gate types' }]}>
        <p>From bespoke hardwood for Wealden farmhouses to marine-grade aluminium for the East Kent coast. Sliding, swing, automated, and manual. Pick your gate type below and find a Kent installer.</p>
        <a href="#gate-options" className="text-link">Explore the gate types</a>
      </PageIntro>
      <section id="gate-options" className="container-width catalog-section">
        <div className="section-heading"><h2>Choose the right<br /><em>gate system.</em></h2><p>Every material and mechanism has a different character. Explore the options, then speak with Kent specialists who can advise on proportions, planning, ground conditions and automation.</p></div>
        <div className="service-catalog">{services.map(service => <Link key={service.id} href={`/services/${service.slug}/`} className="service-catalog-item">
          <div className="catalog-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} loading="lazy" width={1408} height={768} />
          </div>
          <div className="catalog-copy"><h3>{service.title}</h3><p>{service.description}</p><span className="text-link">Find installers</span></div>
        </Link>)}</div>
      </section>
    </main>
    <Footer />
  </>;
}
