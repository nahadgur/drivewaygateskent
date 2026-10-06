// app/location/[city]/page.tsx
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { services } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { FAQS_SERVICES, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';

export default function CityPage({ params }: { params: { city: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();

  const cityFaqs = [...FAQS_LOCATION, ...FAQS_SERVICES];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `Driveway Gate Installers in ${cityName}`,
    url: `${siteConfig.url}/location/${params.city}/`,
    description: `Find driveway gate installers in ${cityName}, Kent. Free site surveys, written quotes, and up to 3 options with no obligation.`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kent' },
    },
    serviceType: [
      'Electric Sliding Gate Installation',
      'Electric Swing Gate Installation',
      'Wooden Driveway Gate Installation',
      'Metal Driveway Gate Installation',
      'Gate Automation Installation',
      'Gate Repair and Maintenance',
    ],
    priceRange: '££',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow heritage-inner">

        <section className="bg-brand-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-brand-950/0 to-transparent pointer-events-none" />
          <div className="container-width py-20 md:py-28 relative z-10">
            <Breadcrumbs tone="dark" items={[{ label: 'Locations', href: '/location/' }, { label: cityName }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Gate Installers in {cityName}
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.02] mb-6 text-white">
                  Driveway Gates in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-brand-100 leading-relaxed">
                  Specialist driveway gate installers covering {cityName} and the surrounding area. Ask each one about the property types and planning rules in this part of Kent.
                </p>
              </div>
              <div>
                <HeroLeadForm city={cityName} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mb-4">
                  Why {cityName} Homeowners Need a Gate Specialist, Not a General Builder
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    Driveway gate installation in Kent involves variables that a general builder is unlikely to anticipate. Two National Landscapes, 13 local planning authorities, clay and chalk subsoils that behave differently under post foundations, coastal salt exposure on East Kent properties, and a terrain that ranges from flat estuarine land in the north to steep chalk escarpment and Wealden hillside further south. An installer who works regularly in the {cityName} area understands how these factors affect the specification for your specific site. Ask any installer for proof of public liability insurance and for written warranties on the gate and the automation.
                  </p>
                  <p>
                    The process is straightforward: each installer we introduce arranges a free site visit at a time that suits you, walks the driveway, checks any planning considerations, and provides a fully itemised written quote. You receive up to three independent quotes and decide on your own terms. There is no cost to you at any point and no obligation to proceed with any of them.
                  </p>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-display font-semibold text-brand-950 mb-6">Gate Types Available in {cityName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}/`} className="block group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-brand-100">
                      <div className="h-36 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display font-semibold text-brand-950 group-hover:text-brand-600 mb-1.5">{service.title}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
                        <span className="text-brand-600 font-medium text-sm flex items-center">Get free quotes <ArrowRight className="w-4 h-4 ml-1" /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} />

              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mb-6">What to Ask a {cityName} Gate Installer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Star className="w-5 h-5" />, title: 'Is Gate Work Your Main Trade?', desc: `A firm that installs gates every week will size the motor, set the foundations and commission the safety devices more reliably than a builder who fits the odd gate. Ask how many automated gates they fitted in the last year.` },
                    { icon: <Shield className="w-5 h-5" />, title: 'Separate Gate and Motor Warranties', desc: `Ask for written warranties on the gate structure and the automation as two separate documents, so it is clear what is covered if a motor fails in year three.` },
                    { icon: <Clock className="w-5 h-5" />, title: 'Safety Paperwork at Handover', desc: `An automated gate should be force tested to BS EN 12453 and handed over with a commissioning record and a Declaration of Conformity. Ask to see an example before you sign.` },
                    { icon: <CheckCircle className="w-5 h-5" />, title: 'Zero Cost at Every Stage', desc: `Using this service costs you nothing. If you go ahead, you pay the installer directly under your own contract.` },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-brand-50 rounded-sm border border-brand-100">
                      <div className="bg-brand-100 p-2 rounded-sm text-brand-600 flex-shrink-0 h-fit">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-brand-950 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} />

              <div className="mb-12"><FAQ faqs={[...FAQS_LOCATION, ...FAQS_SERVICES]} title={`Driveway Gates in ${cityName}: Common Questions`} /></div>

            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-sm shadow-lg border border-brand-100">
                  <h3 className="text-lg font-display font-semibold text-brand-950 mb-4">Find Installers in {cityName}</h3>
                  <p className="text-gray-600 text-sm mb-6">Describe your project and we match you with up to 3 gate specialists covering {cityName}. Free, no strings.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find an Installer</button>
                  <div className="mt-6 pt-6 border-t border-brand-100 space-y-4">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: "Up to three quotes to compare" },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: "No fee for homeowners" },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: "No obligation to go ahead" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-brand-900 rounded-sm p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Find Your Gate Installer in {cityName}</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">Tell us what you need and we handle the matching. Up to three Kent gate installers, each arranging a site survey and a written quote. Takes two minutes to start, costs nothing, and commits you to nothing.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-sm hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
