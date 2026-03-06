// app/services/[serviceSlug]/[locationSlug]/page.tsx
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';


const serviceLocationContent: Record<string, {
  intro: (city: string) => string[];
  steps: (city: string) => string[];
  whyPoints: (city: string) => string[];
}> = {
  'electric-sliding': {
    intro: (city) => [
      `Sliding gate enquiries in ${city} typically begin with a site constraint. A driveway too short for swing leaves to clear the road. An approach that slopes from the pavement and defeats standard swing hinge geometry. An opening wide enough that swing leaves would place impractical loads on the post foundations. A sliding gate resolves each situation with horizontal travel along the boundary: no arc clearance required, no sweep space needed in front of or behind the gate.`,
      `Ground-track and cantilever are the two configurations in regular use. Ground-track is the standard on level or near-level sites: a concrete foundation carries the steel channel, the gate runs on rollers within it, and the motor drives the gate through a rack fixed to the underside of the leaf. Cantilever systems suspend the gate from an elevated rail, eliminating the ground-level requirement. They are specified for sites in ${city} where the driveway gradient makes a level track impractical, where a decorative driveway surface should not be interrupted, or where the ground conditions would not support a conventional track foundation.`,
    ],
    steps: (city) => [
      `Provide your ${city} postcode, the opening width, and whether run-back space is available to one side. We identify up to three sliding gate specialists who work regularly in the ${city} area.`,
      `Each installer contacts you to arrange a site visit. They measure the opening, check run-back on both sides, and confirm whether ground-track or cantilever suits the ${city} site conditions.`,
      `You receive a written quote covering gate supply or fabrication, track foundation or cantilever rail, motor and drive system, photocells, and any access control equipment.`,
      `If new gate leaves are being fabricated, the workshop lead time is typically 2 to 4 weeks from confirmed order depending on material and design.`,
      `On the installation day, the concrete track bed is excavated and poured, and electrical conduit is run for motor supply and intercom cabling.`,
      `Track is set and levelled, gate is hung and adjusted for smooth travel, motor and rack are fitted, and safety photocells are positioned and wired to BS EN 12453.`,
      `The system is commissioned and tested. Travel limits are calibrated, remotes and any app access are programmed, and the manual release procedure is demonstrated.`,
    ],
    whyPoints: (city) => [
      `Sliding gate specialists in our ${city} network have direct experience with the ground conditions, gradients, and property types across this part of Kent.`,
      `All installations are commissioned to BS EN 12453, with photocell and safety edge testing documented at handover.`,
      `Each ${city} installer provides a free site survey and a fully itemised written quote before you make any commitment.`,
      `FAAC, BFT, CAME, and Nice motor systems available, with established Kent parts networks for long-term maintenance.`,
    ],
  },
  'electric-swing': {
    intro: (city) => [
      `Swing gates are the most widely installed gate type on residential properties in ${city}, and the preference is well founded. Paired gates opening as you approach the driveway deliver a combination of visual impact and daily convenience that other formats do not quite match. The technology is mature, the installer population that can execute the work reliably is substantial, and the range of materials and motor configurations gives genuine flexibility across different property types.`,
      `The motor decision shapes the entrance aesthetic as much as the gate design. Underground motors sit in a chamber below the post, invisible when the gate is closed, and are the preferred specification on premium ${city} properties. Ram-arm motors mount on the face of the gate and post, visible from inside. They are the practical and cost-effective choice on retrofit projects where post foundations do not allow excavation. Your installer will make an honest assessment at the survey based on gate weight and post condition.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry with gate type, opening width, and approximate budget. We match you with up to three swing gate specialists covering your area.`,
      `Each installer visits the ${city} property, measures the opening, walks the full swing arc to confirm clearance, and checks pillar and foundation condition before recommending motor type.`,
      `You receive a written quote covering gate fabrication or supply, post foundations, motor installation, safety photocells, and access control equipment.`,
      `Where new gates are fabricated, allow 2 to 5 weeks for manufacture depending on material and design complexity.`,
      `On site, post foundations are set or verified, underground motor chambers excavated where specified, and electrical conduit installed before surface reinstatement.`,
      `Gate leaves are hung and aligned, motors fitted into chambers or onto post faces, photocells positioned for full arc coverage, and all wiring terminated.`,
      `The complete system is programmed and tested to BS EN 12453. Travel limits set, force limits calibrated, all access devices paired, and the manual release demonstrated.`,
    ],
    whyPoints: (city) => [
      `Swing gate installers in our ${city} network understand the property types, plot sizes, and terrain across this part of Kent.`,
      `Underground and ram-arm motor options available with clear guidance on which suits your gate weight and post condition.`,
      `BS EN 12453 commissioning completed and documented on every installation before handover.`,
      `Written warranties covering gate structure and automation provided separately by every ${city} installer in our network.`,
    ],
  },
  'wooden-gates': {
    intro: (city) => [
      `Hardwood gates are the instinctive specification for a significant proportion of ${city} properties. The High Weald AONB, the North Downs AONB, the conservation areas across Kent's historic towns, and the county's large stock of oast houses, barn conversions, and period farmhouses all create contexts where timber is not just preferred but is the only material that feels right. Where a planning officer or conservation adviser is involved, timber is also the specification that typically raises least resistance.`,
      `Fabrication is almost always bespoke rather than off-the-shelf for hardwood gates in ${city}. A skilled timber gate maker can match the proportions of the entrance, reference the architectural character of the house, or achieve a specific design detail, for a modest premium over a standard size. Iroko is the default choice for most projects: naturally durable, dimensionally stable, and consistent in quality. European oak is specified where the grain character is a design feature. Accoya, with its 50-year manufacturer guarantee, is the right specification for exposed or coastal Kent positions where low maintenance is a firm requirement.`,
    ],
    steps: (city) => [
      `Submit your enquiry and we connect you with hardwood gate specialists covering ${city} who have completed bespoke timber projects in this part of Kent.`,
      `Your installer visits the ${city} property, discusses the design brief, shows timber species samples, confirms automation requirements, and takes measurements.`,
      `Detailed fabrication drawings are produced for your approval. No timber is ordered or cut until you sign off the design.`,
      `Gates are made to the approved drawings in the workshop. Lead time is typically 3 to 5 weeks from confirmed order.`,
      `On installation day, gates are transported to site and hung on hot-dip galvanised or stainless steel ironmongery, and the initial treatment coat is applied.`,
      `Where automation is included, the motor system is fitted and commissioned to BS EN 12453 with all safety sensors tested.`,
      `Your installer hands over a written maintenance schedule covering the recommended treatment product, interval, and method for the specified timber.`,
    ],
    whyPoints: (city) => [
      `Hardwood gate specialists in our ${city} network understand Kent's AONB and conservation area planning context and can advise on the right specification.`,
      `Iroko, European oak, and Accoya all available, with clear guidance on which suits your maintenance preference and site exposure.`,
      `Free site survey and fabrication drawings produced for approval before any ${city} installer begins work.`,
      `FSC-certified timber available from every fabricator in our network on request.`,
    ],
  },
  'metal-gates': {
    intro: (city) => [
      `Metal gate installations in ${city} cover a wider range than in most areas. At one end, high-specification wrought iron entrance treatments on brick piers with underground motors and video intercom. At the other, fabricated steel or aluminium sliding gates in anthracite powder coat for modern builds where the brief is functional and contemporary. The specification decision that separates durable installations from those needing attention within five years is the surface treatment: hot-dip galvanising before powder coating is the correct standard on every steel and iron gate.`,
      `For ${city} properties near the East Kent coast, the corrosion challenge is more acute. Salt-laden air accelerates the breakdown of any exposed steel surface. Marine-grade polyester powder coat over hot-dip galvanising is the minimum specification, and aluminium is worth considering as a zero-corrosion alternative that eliminates the concern entirely. Every installer in our ${city} network specifies hot-dip galvanising as standard and will advise on coastal-grade treatments where relevant.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry and we match you with metal gate fabricators whose experience covers your chosen material and style.`,
      `Your installer visits the ${city} property, reviews portfolio examples, discusses design direction, material, colour, and automation requirements, and measures the opening.`,
      `Full CAD drawings are produced for your approval before fabrication begins. 3D renders available on complex projects at no additional cost.`,
      `The gate is fabricated, shot-blasted, hot-dip galvanised, and powder-coated in your specified RAL colour. Allow 3 to 6 weeks from drawing approval.`,
      `On installation day, the gate is hung on new or existing posts, with foundations inspected and upgraded where required.`,
      `Automation, safety photocells, and access control are installed and wired, and the full system tested before handover.`,
      `Written handover documentation covers gate warranty, automation warranty, and maintenance guidance for the powder coat finish.`,
    ],
    whyPoints: (city) => [
      `Metal gate specialists in our ${city} network specify hot-dip galvanising before powder coating as a non-negotiable standard on all steel and iron work.`,
      `CAD drawings produced and approved before fabrication begins, so you see exactly what is being made before the workshop starts.`,
      `Free site survey and design consultation with each ${city} specialist, with no commitment until you approve drawings and quote.`,
      `Gate structure and automation warranties provided separately in writing by every ${city} installer in our network.`,
    ],
  },
  'automated-systems': {
    intro: (city) => [
      `Gate automation retrofits are among the highest-demand jobs for installers covering ${city}. The typical brief: a homeowner with manual gates that are structurally sound and the right aesthetic, who has reached the point where daily manual operation is no longer acceptable. The retrofit adds motor and access control without touching the gates themselves, addressing posts, foundations, and hinge condition before any equipment is fitted.`,
      `The access control additions are where the investment often delivers the most practical value. A video intercom connected to a smartphone app means you can see and speak to anyone at the gate from anywhere and open or refuse entry remotely. A proximity reader opens the gate automatically as your vehicle approaches. For ${city} homeowners concerned about vehicle security, a closed automated gate with video recording adds a genuine deterrent layer against the relay theft methods that target premium driveways across Kent.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry. We match you with automation specialists who carry out retrofit projects regularly and stock parts for the main motor brands.`,
      `Your installer visits the ${city} property to assess gate weight, hinge condition, post alignment, and foundation adequacy before recommending motor type and torque.`,
      `Motor type and access control package are agreed in writing before any equipment is ordered. Structural remedial work quoted separately and confirmed first.`,
      `On installation day, motors are fitted, underground chambers excavated where the site allows, photocells positioned, and intercom or keypad cabling run.`,
      `The system is commissioned to BS EN 12453, with travel limits calibrated, safety sensor response tested and documented, and all access devices programmed.`,
      `Handover includes the manual release procedure, remote programming, smartphone app setup, and a written declaration of conformity.`,
    ],
    whyPoints: (city) => [
      `Automation engineers covering ${city} carry out a thorough structural assessment before specifying any motor, not after fitting it.`,
      `FAAC, BFT, CAME, Nice, and Beninca motor systems available, with established parts networks across Kent.`,
      `BS EN 12453 safety compliance tested, documented, and provided in writing at handover on every ${city} installation.`,
      `Video intercom, proximity readers, keypads, and smart home integration all available as additions to any ${city} retrofit.`,
    ],
  },
  'gate-repair': {
    intro: (city) => [
      `Gate repair callouts in ${city} cover a predictable set of faults. Motor and gearbox wear from insufficient lubrication or undersized specification. Control board failure from moisture ingress through a poorly sealed housing. Photocell misalignment after a vehicle clip or frost movement, causing repeated stops with no actual obstruction. Hinge wear on gates that were never correctly adjusted, producing a dropping leaf the motor fights to move. On coastal Kent properties, salt corrosion of electrical contacts is an additional factor. Most of these are single-visit fixes when the engineer has the right parts.`,
      `The motor brand matters significantly to repair speed and cost. FAAC, BFT, CAME, Nice, and Beninca all maintain spare parts supply for at least ten years after production ends. An engineer covering ${city} who carries stock for these brands resolves the majority of faults on the first visit. A gate running an obscure or unbranded motor creates a different situation: parts sourced internationally, extended lead times, and a gate stuck in manual operation while the component is awaited. Annual servicing catches most developing faults before they become system failures, and is consistently cheaper than emergency callout and repair.`,
    ],
    steps: (city) => [
      `Submit your ${city} repair enquiry. We connect you with gate engineers covering your area who carry parts for FAAC, BFT, CAME, Nice, and Beninca.`,
      `The engineer attends the ${city} property and runs a structured diagnostic covering motor, control board, safety sensors, drive mechanism, hinges, and gate structure.`,
      `You receive a clear explanation of the fault and a written repair quote before any work is carried out or parts ordered.`,
      `Where the fault can be resolved with parts on the van, the repair is completed on the first visit and the system tested before the engineer leaves.`,
      `If a component must be ordered, the gate is made safe in manual mode and a return visit is scheduled. Lead times for main brand parts are typically 1 to 5 working days.`,
      `After repair or servicing, motor travel limits, safety sensors, battery backup, and all access devices are tested and confirmed working.`,
      `A written service report covering all work completed, parts replaced, test results, and future observations is provided.`,
    ],
    whyPoints: (city) => [
      `Repair engineers covering ${city} aim to attend urgent callouts within 24 to 48 hours, with same-day attendance for gates stuck open.`,
      `Diagnostic assessment and written repair quote provided before any work begins on every ${city} callout.`,
      `Engineers carry stock parts for FAAC, BFT, CAME, Nice, and Beninca, resolving the majority of ${city} callouts on the first visit.`,
      `Annual service contracts available from engineers in our network for scheduled, hassle-free maintenance.`,
    ],
  },
};



export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();
  const content = serviceLocationContent[service.id] || serviceLocationContent['electric-swing'];
  const intro = content.intro(cityName);
  const steps = content.steps(cityName);
  const whyPoints = content.whyPoints(cityName);

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Minimum 50 Residential Installs', desc: `Every ${cityName} installer in our network specialises in gate installation and has a verified project history before receiving a single referral from us.` },
    { icon: <Clock className="w-6 h-6" />, title: 'Site Survey Within the Week', desc: `Most installers covering ${cityName} can offer a free site survey slot within 7 days, with evening and Saturday appointments available.` },
    { icon: <Shield className="w-6 h-6" />, title: 'Insured and Warranted', desc: `Public liability cover and written warranties on both the gate and the automation are required from every installer before we refer any ${cityName} enquiries.` },
    { icon: <Users className="w-6 h-6" />, title: 'Matched to Your Gate Type', desc: `We connect you with ${cityName} installers who have specific experience with ${service.title.toLowerCase()}, not a general list of whoever is available.` },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${service.title} in ${cityName}`,
    url: `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`,
    description: `Find vetted ${service.title.toLowerCase()} specialists in ${cityName}, Kent. Free site survey, written quotes, no obligation.`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kent' },
    },
    serviceType: service.title,
    priceRange: '\u00a3\u00a3',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Gate Types', href: '/services/' },
              { label: service.title, href: `/services/${service.slug}/` },
              { label: cityName }
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Vetted Installers in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title} in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Kent {service.title.toLowerCase()} specialists covering {cityName}. Site survey at no charge, written quotes, no obligation to proceed.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    `${service.title} specialists in ${cityName}, verified and active in Kent`,
                    'Up to three independent quotes, each with a free site survey',
                    'Insured, warranted, and commissioned to BS EN 12453 as standard',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <span>Highly rated by Kent homeowners</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  {service.title} in {cityName}: What to Expect
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">How {service.title} Installation Works in {cityName}</h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <p className="text-gray-700 font-medium pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              <section className="mb-12">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Get {service.title} in {cityName} Through Us?</h3>
                <div className="space-y-3">
                  {whyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {service.faqs.length > 0 && (
                <div className="mb-12">
                  <FAQ faqs={service.faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              <section className="mt-12 mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Are Saying</h2>
                <Testimonials limit={2} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Other Gate Types in {cityName}</h3>
                  <ul className="space-y-2 mb-8">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}/${params.locationSlug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{service.title} Elsewhere in Kent</h3>
                  <ul className="space-y-2">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => {
                      const slug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      return (
                        <li key={city}>
                          <Link href={`/services/${service.slug}/${slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                            {service.title} in {city}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available at most {cityName} installers. Spread the cost of {service.title.toLowerCase()} over 6 to 36 months with nothing to pay upfront.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Get {service.title} Quotes in {cityName}</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">Submit your enquiry in under two minutes. We will match you with up to three vetted {cityName} installers for free site surveys, written quotes, and no obligation at any stage.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
