'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, FileCheck, KeyRound, Gauge, Wrench } from 'lucide-react';
import { services } from '@/data/services';
import { pricingTiers } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

// Kent's 13 local planning authorities and the town pages that sit in each.
const DISTRICTS: { name: string; towns: [string, string][] }[] = [
  { name: 'Sevenoaks District', towns: [['sevenoaks', 'Sevenoaks'], ['westerham', 'Westerham']] },
  { name: 'Tunbridge Wells Borough', towns: [['tunbridge-wells', 'Tunbridge Wells'], ['cranbrook', 'Cranbrook']] },
  { name: 'Tonbridge and Malling Borough', towns: [['tonbridge', 'Tonbridge'], ['west-malling', 'West Malling']] },
  { name: 'Maidstone Borough', towns: [['maidstone', 'Maidstone']] },
  { name: 'Dartford Borough', towns: [['dartford', 'Dartford']] },
  { name: 'Gravesham Borough', towns: [['gravesend', 'Gravesend']] },
  { name: 'Medway', towns: [['medway', 'Rochester, Chatham and Gillingham']] },
  { name: 'Canterbury City', towns: [['canterbury', 'Canterbury'], ['whitstable', 'Whitstable'], ['herne-bay', 'Herne Bay']] },
  { name: 'Swale Borough', towns: [['faversham', 'Faversham']] },
  { name: 'Ashford Borough', towns: [['ashford', 'Ashford'], ['tenterden', 'Tenterden']] },
  { name: 'Folkestone and Hythe District', towns: [['folkestone', 'Folkestone and Hythe']] },
  { name: 'Dover District', towns: [['dover', 'Dover'], ['deal', 'Deal and Sandwich']] },
  { name: 'Thanet District', towns: [['thanet', 'Margate, Broadstairs and Ramsgate']] },
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
  const openQuotes = () => setIsModalOpen(true);
  const [selectedGate, setSelectedGate] = useState(0);
  const gateTabs = useRef<(HTMLButtonElement | null)[]>([]);
  const handleGateKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowDown') next = (index + 1) % services.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + services.length) % services.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = services.length - 1;
    else return;
    event.preventDefault();
    setSelectedGate(next);
    gateTabs.current[next]?.focus();
  };

  return <>
    <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <Header onOpenModal={openQuotes} />
    <main id="main-content" className="home-editorial">
      <section className="entrance-hero">
        <div className="hero-heading container-width">
          <div className="hero-kicker"><p>Driveway gate installers across Kent</p><p>Independent quote service</p></div>
          <h1>Driveway <span>Gates</span><span className="sr-only"> in Kent, supplied and fitted.</span></h1>
        </div>
        <div className="hero-stage container-width">
          <figure className="hero-photograph">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png" alt="Wrought iron entrance gates opening towards a country house" fetchPriority="high" />
            <figcaption><span>Electric. Wooden. Metal.</span><a href="#gate-styles">Explore gate styles</a></figcaption>
          </figure>
          <div className="hero-copy">
            <p className="hero-location">In Kent.</p>
            <h2>Supplied<br />and fitted.</h2>
            <p className="hero-description">Electric, wooden and metal driveway gates for Kent homes. Describe your entrance and up to three local installers will arrange a site survey and a written quote.</p>
            <button onClick={openQuotes} className="btn-primary">Get free quotes</button>
            <p className="hero-note">Free, no-obligation written quotes</p>
          </div>
        </div>
        <div className="assurance-strip container-width"><p>Electric sliding and swing gates</p><p>Wooden and wrought iron</p><p>Guide prices from £2,800 fitted</p></div>
      </section>

      <section id="gate-styles" className="gate-collection section-padding">
        <div className="container-width">
          <div className="section-heading"><div><p className="eyebrow">Find your entrance</p><h2>Electric, Wooden and<br /><em>Metal Driveway Gates</em></h2></div><p>A <Link href="/services/electric-sliding-gates/">sliding gate</Link> suits a short or steep North Downs drive, while a <Link href="/services/wooden-driveway-gates/">hardwood gate</Link> suits a Wealden farmhouse. Start with the gate type.</p></div>
          <div className="gate-browser">
            <div className="gate-panels">{services.map((service,index) => <div key={service.id} id={'gate-panel-' + index} role="tabpanel" aria-labelledby={'gate-tab-' + index} hidden={selectedGate !== index} tabIndex={0}>
              <div className="gate-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title + ' in Kent'} loading="lazy" width={1408} height={768} />
              </div>
              <div className="gate-panel-copy"><p>{service.description}</p><Link href={'/services/' + service.slug + '/'} className="btn-primary">Prices and options</Link></div>
            </div>)}</div>
            <div className="gate-selector">
              <p className="eyebrow">Choose your gate type</p>
              <div role="tablist" aria-label="Gate types" aria-orientation="vertical">{services.map((service,index) => <button key={service.id} id={'gate-tab-' + index} role="tab" aria-selected={selectedGate === index} aria-controls={'gate-panel-' + index} tabIndex={selectedGate === index ? 0 : -1} ref={node => { gateTabs.current[index] = node; }} onKeyDown={event => handleGateKey(event,index)} onPointerEnter={event => { if (event.pointerType === 'mouse') setSelectedGate(index); }} onFocus={() => setSelectedGate(index)} onClick={() => setSelectedGate(index)}>
                {service.title}<span aria-hidden="true">{selectedGate === index ? '−' : '+'}</span>
              </button>)}</div>
              <Link href="/services/" className="text-link">View all gate services</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="quote-process section-padding">
        <div className="container-width process-layout">
          <div className="process-intro"><p className="eyebrow">A simpler way to start</p><h2>How Getting<br />a Quote <em>Works</em></h2><p>Three steps from your first message to a written quote you can compare.</p><button onClick={openQuotes} className="btn-light">Get free quotes</button></div>
          <div className="process-steps">{[
            { step: '1', title: 'Describe Your Project', desc: 'Your Kent town or postcode and the type of gate you want. It takes about two minutes.' },
            { step: '2', title: 'Arrange Site Surveys', desc: 'Up to three Kent gate installers contact you to visit. They measure the entrance, check the ground and power supply, and flag any planning questions.' },
            { step: '3', title: 'Compare Written Quotes', desc: 'Each quote is based on a survey of your property. Compare them on your own terms and go ahead only if you want to.' },
          ].map(item => <div className="process-step" key={item.step}><span className="step-number">{item.step}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></div>)}</div>
        </div>
      </section>

      <section className="kent-section section-padding">
        <div className="container-width">
          <div className="kent-intro">
            <figure className="kent-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gates/gate-wooden-oak-open-interior-tree-lined-lane.png" alt="Oak gates opening onto a leafy country lane" loading="lazy" width={1408} height={768} />
              <figcaption>Hardwood gates. A natural fit for the Weald.</figcaption>
            </figure>
            <div><p className="eyebrow">Local knowledge matters</p><h2>Driveway Gates Across Kent <em>by District</em></h2>
              <p>Kent has 13 local planning authorities, the 12 district councils plus Medway, and each sets its own policy on boundary treatments, conservation areas and Article 4 directions. The Kent Downs and High Weald, renamed from Areas of Outstanding Natural Beauty to National Landscapes in 2023, cover much of the west and south of the county.</p>
              <p>The property stock changes the specification too. Oast houses and barn conversions in the Weald usually call for hardwood, period homes around Sevenoaks and Tunbridge Wells suit wrought iron on brick piers, new builds in North Kent suit aluminium sliding gates, and the coast from Whitstable to Folkestone needs <Link href="/blog/coastal-gate-corrosion-protection/" className="inline-link">corrosion-resistant finishes</Link>.</p>
              <Link href="/location/" className="text-link">See every area covered</Link>
            </div>
          </div>
          <div className="district-list">{DISTRICTS.map(d => <div key={d.name}><h3>{d.name}</h3><p>{d.towns.map(([slug, label], i) => <span key={slug}><Link href={'/location/' + slug + '/'}>{label}</Link>{i < d.towns.length - 1 ? ' · ' : ''}</span>)}</p></div>)}</div>
        </div>
      </section>

      <section className="installation-section section-padding"><div className="container-width">
        <div className="section-heading"><div><p className="eyebrow">The details that count</p><h2>What a Proper Electric<br /><em>Gate Install Includes</em></h2></div><p>Use this as a checklist when you compare quotes. A well-run installation covers all six.</p></div>
        <div className="installation-grid">{INSTALL_CHECKS.map(item => <div key={item.title}><div className="installation-heading"><h3>{item.title}</h3><span className="installation-icon" aria-hidden="true">{item.icon}</span></div><p>{item.desc}</p></div>)}</div>
      </div></section>

      <section className="prices-section section-padding"><div className="container-width pricing-layout">
        <div className="pricing-intro"><p className="eyebrow">Plan your project</p><h2>Driveway Gate Guide Prices in Kent <em>for 2026</em></h2><p>Indicative ranges for a fully installed gate, not quotes. <Link href="/blog/how-much-do-driveway-gates-cost-kent-2026/" className="inline-link">West Kent usually sits higher</Link> than North and East Kent.</p><button onClick={openQuotes} className="btn-primary">Get free quotes</button></div>
        <div className="price-list">{pricingTiers.map(tier => <details key={tier.slug} className="price-row"><summary><span><span className="price-name">{tier.treatment}</span><span className="price-meta">{tier.typicalDuration}</span></span><span className="price-amount">£{tier.priceFrom.toLocaleString()} <span>–</span> £{tier.priceTo.toLocaleString()}</span><span className="price-toggle" aria-hidden="true">+</span></summary><div className="price-details"><p>{tier.includes}</p><p>{tier.description}</p></div></details>)}<p className="price-footnote">Select a gate type to see what is included.</p></div>
      </div></section>

      <section className="questions-section section-padding"><div className="container-width questions-layout"><div><p className="eyebrow">Before you begin</p><h2>A little more<br /><em>clarity.</em></h2><p>Driveway gates, planning and installation.</p></div><FAQ faqs={homepageFaqs} title="Driveway Gates in Kent: Common Questions" /></div></section>
      <section className="closing-section"><div className="container-width closing-layout"><div><p className="eyebrow">Your entrance starts here</p><h2>Get Free Driveway<br />Gate Quotes <em>in Kent</em></h2></div><div><p>Tell us about your entrance and up to three Kent installers will arrange site surveys and written quotes. No fee and no obligation.</p><button onClick={openQuotes} className="btn-light">Get Free Quotes</button></div></div></section>
    </main>
    <Footer />
  </>;
}
