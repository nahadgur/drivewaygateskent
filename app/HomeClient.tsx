'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, FileCheck, KeyRound, Gauge, Wrench } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

// Kent's 13 local planning authorities and the towns on this site that sit in each.
// Medway is a unitary authority with no town pages yet.
const DISTRICTS: { name: string; towns: string[]; note?: string }[] = [
  { name: 'Sevenoaks District', towns: ['Sevenoaks', 'Westerham', 'Edenbridge', 'Swanley', 'Otford'] },
  { name: 'Tunbridge Wells Borough', towns: ['Tunbridge Wells', 'Cranbrook', 'Hawkhurst', 'Paddock Wood', 'Goudhurst'] },
  { name: 'Tonbridge and Malling Borough', towns: ['Tonbridge', 'West Malling', 'Aylesford', 'Snodland', 'Borough Green'] },
  { name: 'Maidstone Borough', towns: ['Maidstone', 'Bearsted', 'Headcorn', 'Marden', 'Lenham'] },
  { name: 'Dartford Borough', towns: ['Dartford', 'Greenhithe', 'Wilmington'] },
  { name: 'Gravesham Borough', towns: ['Gravesend', 'Northfleet', 'Meopham', 'Higham'] },
  { name: 'Medway', towns: [], note: 'Rochester, Chatham, Gillingham and Strood' },
  { name: 'Canterbury City', towns: ['Canterbury', 'Whitstable', 'Herne Bay', 'Sturry', 'Chartham'] },
  { name: 'Swale Borough', towns: ['Faversham'] },
  { name: 'Ashford Borough', towns: ['Tenterden'] },
  { name: 'Folkestone and Hythe District', towns: ['Folkestone', 'Hythe'] },
  { name: 'Dover District', towns: ['Dover', 'Deal', 'Sandwich', 'Wingham'] },
  { name: 'Thanet District', towns: ['Broadstairs', 'Ramsgate'] },
];

const INSTALL_CHECKS = [
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Force Testing to BS EN 12453',
    desc: 'BS EN 12453 is the safety standard for powered gates. The installer measures the closing force with a calibrated tester and records the results, rather than judging it by eye.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Safety Edges and Photocells',
    desc: 'Photocells across the opening and pressure-sensitive safety edges stop and reverse the gate if a person, pet or car is in the way. Ask where each one will be fitted before you accept a quote.',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'A Declaration of Conformity',
    desc: 'Whoever automates a gate takes on the manufacturer’s duties under the Supply of Machinery (Safety) Regulations 2008. That means a Declaration of Conformity, a technical file and UKCA or CE marking at handover.',
  },
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: 'Manual Release and Power Cuts',
    desc: 'Every automated gate needs a manual release so it can be opened by hand. Many 24V motors can also take a battery backup that keeps the gate working through a power cut.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Gate Safe Awareness',
    desc: 'Gate Safe is a UK charity set up in 2010 after two children died in automated gate accidents. It trains installers in safe practice, and it is fair to ask whether yours has completed the training.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'A Servicing Plan',
    desc: 'Motors, hinges and safety devices wear. Ask how often the installer recommends a service, what each visit checks, and what it costs, so the gate stays safe after the warranty period.',
  },
];

const homepageFaqs = [
  {
    question: 'What do driveway gates cost to install in Kent in 2026?',
    answer: 'As a guide, a manual hardwood swing gate starts at around £2,800 fitted, electric swing gates typically fall between £3,800 and £11,500, and a fully automated sliding or wrought iron system can reach £12,500 or more. West Kent around Sevenoaks and Tunbridge Wells tends to sit at the higher end, and coastal properties may pay more for marine-grade finishes. Only a site survey gives a figure you can rely on.',
  },
  {
    question: 'Do I need planning permission for driveway gates in Kent?',
    answer: 'Often not. Under permitted development a gate can be up to 1 metre high next to a highway used by vehicles and up to 2 metres elsewhere. You need consent for a listed building or its curtilage, where an Article 4 direction removes the right (common in some Kent conservation areas), or above those heights. Kent has 13 local planning authorities, 12 district councils plus Medway, so check with the one that covers your address.',
  },
  {
    question: 'How far back from the road should driveway gates be set?',
    answer: 'Gates must not open outwards over a road or pavement under the Highways Act 1980, so they swing inwards or slide. Highways officers also look for room for a car to pull fully off the road while the gate opens, which in practice often means setting the gate back around 5 metres from the carriageway. Where a planning application is needed, the council will consult the highways authority on this.',
  },
  {
    question: 'What happens to electric gates in a power cut?',
    answer: 'Every automated gate should have a manual release, usually a key-operated override on the motor, so it can be opened by hand. Many 24V motors can take a battery backup that runs the gate for a number of cycles during a cut, and solar-powered gates run from their own battery. Ask the installer to show you the manual release at handover.',
  },
  {
    question: 'Do gates near the Kent coast need a different specification?',
    answer: 'Yes. Properties near the coast between Whitstable and Folkestone face faster corrosion from airborne salt. The usual specification is hot-dip galvanised steel with a marine-grade powder coat, or aluminium, which does not rust. Stainless steel fixings should replace zinc-plated ones, and Accoya is a common choice for coastal timber gates.',
  },
  {
    question: 'What type of gate suits an oast house or barn conversion?',
    answer: 'Hardwood is the usual answer for oast houses, barn conversions and timber-frame farmhouses across the Weald. European oak weathers to silver grey alongside old timber and Kentish ragstone, and iroko is a cheaper alternative with similar durability. In conservation areas and the Kent Downs and High Weald National Landscapes, timber is often the material planning officers expect.',
  },
  {
    question: 'Can my existing manual gates be automated?',
    answer: 'Usually, yes. If the gates are sound, correctly hung and the posts sit in adequate foundations, motors can be added without replacing the gates. As a guide this costs around £1,400 to £3,800 depending on gate weight, motor type and access control. Underground motors are possible where the posts allow.',
  },
  {
    question: 'What does this service cost me?',
    answer: 'Nothing. You describe the gate you want and up to three Kent installers contact you to arrange a site survey and a written quote. There is no fee and no obligation to go ahead. If the project goes ahead you pay the installer directly, and the installer pays a referral fee, which does not change the price you are quoted.',
  },
];

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main>
        <Hero
          title="Driveway Gates in Kent, Supplied and Fitted"
          subtitle="Electric, wooden and metal driveway gates for Kent homes. Describe your entrance and up to three local installers will arrange a site survey and a written quote."
          image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
          checklist={[
            'Electric sliding and swing gates, wooden and wrought iron',
            'Guide prices from £2,800 fitted',
            'Free, no-obligation written quotes',
          ]}
          form={<HeroLeadForm />}
        />

        {/* How It Works */}
        <section id="how-it-works" className="section-padding bg-white scroll-mt-24">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 mb-4">How Getting a Quote Works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Three steps from your first message to a written quote you can compare.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Describe Your Project',
                  desc: 'Your Kent town or postcode and the type of gate you want. It takes about two minutes.',
                },
                {
                  step: '2',
                  title: 'Arrange Site Surveys',
                  desc: 'Up to three Kent gate installers contact you to visit. They measure the entrance, check the ground and power supply, and flag any planning questions.',
                },
                {
                  step: '3',
                  title: 'Compare Written Quotes',
                  desc: 'Each quote is based on a survey of your property. Compare them on your own terms and go ahead only if you want to.',
                },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-5">{item.step}</div>
                  <h3 className="text-lg font-display font-semibold text-brand-950 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gate Types */}
        <section className="section-padding bg-brand-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 mb-4">Electric, Wooden and Metal Driveway Gates</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A <Link href="/services/electric-sliding-gates/" className="text-brand-600 hover:underline">sliding gate</Link> suits a short or steep North Downs drive, while a <Link href="/services/wooden-driveway-gates/" className="text-brand-600 hover:underline">hardwood gate</Link> suits a Wealden farmhouse. Start with the gate type.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={`${service.title} in Kent`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-semibold text-brand-950 group-hover:text-brand-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      Prices and options <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Kent by District */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 mb-5">Driveway Gates Across Kent by District</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kent has 13 local planning authorities, the 12 district councils plus Medway, and each sets its own policy on boundary treatments, conservation areas and Article 4 directions. The Kent Downs and High Weald, renamed from Areas of Outstanding Natural Beauty to National Landscapes in 2023, cover much of the west and south of the county.
                </p>
                <p>
                  The property stock changes the specification too. Oast houses and barn conversions in the Weald usually call for hardwood, period homes around Sevenoaks and Tunbridge Wells suit wrought iron on brick piers, new builds in North Kent suit aluminium sliding gates, and the coast from Whitstable to Folkestone needs <Link href="/blog/coastal-gate-corrosion-protection/" className="text-brand-600 hover:underline">corrosion-resistant finishes</Link>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DISTRICTS.map(d => (
                <div key={d.name} className="p-5 bg-brand-50 rounded-sm border border-brand-100">
                  <h3 className="font-display font-semibold text-brand-950 mb-2">{d.name}</h3>
                  {d.towns.length > 0 ? (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {d.towns.map((t, i) => (
                        <span key={t}>
                          <Link href={`/location/${toSlug(t)}/`} className="text-brand-600 hover:underline">{t}</Link>
                          {i < d.towns.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">{d.note}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/location/" className="btn-secondary">See every area covered</Link>
            </div>
          </div>
        </section>

        {/* What a Proper Install Includes */}
        <section className="section-padding bg-brand-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 mb-4">What a Proper Electric Gate Install Includes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Use this as a checklist when you compare quotes. A well-run installation covers all six.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSTALL_CHECKS.map(item => (
                <div key={item.title} className="bg-white rounded-sm p-6 border border-brand-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-sm text-brand-600 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-display font-semibold text-brand-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Prices */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 mb-4">Driveway Gate Guide Prices in Kent for 2026</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Indicative ranges for a fully installed gate, not quotes. <Link href="/blog/how-much-do-driveway-gates-cost-kent-2026/" className="text-brand-600 hover:underline">West Kent usually sits higher</Link> than North and East Kent.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTiers.map(tier => (
                <div key={tier.slug} className="bg-brand-50 rounded-sm p-6 border border-brand-100">
                  <h3 className="font-display font-semibold text-brand-950 mb-2">{tier.treatment}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-1">
                    &pound;{tier.priceFrom.toLocaleString()} <span className="text-base text-gray-400 font-normal">to</span> &pound;{tier.priceTo.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{tier.includes} &middot; {tier.typicalDuration}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-brand-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Driveway Gates in Kent: Common Questions" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-brand-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Get Free Driveway Gate Quotes in Kent</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">Tell us about your entrance and up to three Kent installers will arrange site surveys and written quotes. No fee and no obligation.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-sm hover:bg-brand-50 transition-colors">
              Get Free Quotes
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
