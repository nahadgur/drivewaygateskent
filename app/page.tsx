// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Star, Clock, Award, Phone, Zap, TreePine, Waves } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { FAQSchema } from '@/components/FAQSchema';
import { siteConfig } from '@/data/site';

const topAreas = ['Sevenoaks', 'Tunbridge Wells', 'Canterbury', 'Maidstone', 'Tonbridge', 'Dartford', 'Folkestone', 'Cranbrook', 'Whitstable', 'Gravesend', 'Faversham', 'Tenterden'];

const homepageFaqs = [
  {
    question: 'What do driveway gates cost to install in Kent in 2026?',
    answer: 'The Kent market ranges from around \u00a32,800 for a manual hardwood swing gate up to \u00a312,500 or more for a fully automated sliding or wrought iron system. Electric swing gates typically fall between \u00a33,800 and \u00a311,500. The West Kent commuter corridor around Sevenoaks and Tunbridge Wells sits at the higher end of these ranges, while North Kent and rural East Kent are closer to the national average. Coastal East Kent properties may pay a premium for marine-grade surface treatments. The only way to get a figure you can rely on is a site survey, which every installer in our network provides free of charge.',
  },
  {
    question: 'Which Kent properties need planning permission for gates?',
    answer: 'Standard residential gates under 2 metres that open inward are covered by permitted development in most cases. The limit drops to 1 metre if the gate fronts a classified road. Where it gets more complex in Kent is the overlap of designations: the North Downs AONB runs from the Surrey border to Folkestone, the High Weald AONB covers the southern Weald, Green Belt applies along the M25 corridor, and conservation areas exist in Canterbury, Faversham, Tenterden, Sandwich, and dozens of villages. Listed buildings need separate consent regardless. Kent has twelve district councils, each with its own local plan policies on boundary treatments. Our installers know which authority covers your postcode and what the position is likely to be.',
  },
  {
    question: 'Do gates near the Kent coast need a different specification?',
    answer: 'Yes. Properties within a mile or two of the coast between Whitstable and Folkestone face accelerated corrosion from airborne salt. Standard powder coat over mild steel will show damage faster than it would inland. The correct specification for coastal Kent is either hot-dip galvanising with marine-grade polyester powder coat, or aluminium, which does not corrode under any conditions. Stainless steel fixings should replace standard zinc-plated ones. Accoya is the recommended timber for coastal hardwood gates because its modified cell structure resists moisture absorption far more effectively than conventional softwoods. An installer experienced in coastal Kent work will raise these points at the survey without being asked.',
  },
  {
    question: 'How long does a typical Kent gate installation take from start to finish?',
    answer: 'The on-site work takes 2 to 4 days for a standard residential project. Groundwork goes in first and needs curing time before the gate is hung. The gate, motor, safety sensors, and access control follow. If your gates are being fabricated to a bespoke design, which is standard for wrought iron and hardwood in Kent, the workshop lead time adds 3 to 6 weeks before the installation date. Your installer will confirm a full programme at the survey stage, covering both the manufacturing and installation timeline.',
  },
  {
    question: 'What type of gate suits a period Kent property like an oast house or barn conversion?',
    answer: 'Hardwood is almost always the right answer for oast houses, barn conversions, tile-hung cottages, and timber-frame farmhouses across the Kent Weald. European oak left to weather to silver grey sits naturally alongside the aged timber and Kentish ragstone found on these buildings. Iroko is a more cost-effective alternative with similar durability. In conservation areas and both AONBs, timber is often the material that raises least resistance from the planning authority. Wrought iron is the appropriate alternative for larger period properties where the entrance scale justifies a more formal treatment. Your installer will advise on which material the local planning context is likely to favour.',
  },
  {
    question: 'Is vehicle theft from driveways a real concern in Kent?',
    answer: 'In parts of the county, yes. The Sevenoaks and Tunbridge Wells corridor has a concentration of high-value vehicles on residential driveways, and relay theft, where criminals amplify a keyless fob signal to unlock and start a vehicle without the key, is a documented problem. A closed automated gate between the road and the vehicle forces a second obstacle into the theft chain. Combined with video intercom that records gate activity and auto-close that removes the risk of leaving the gate open by mistake, automated gates are one of the most effective physical deterrents available. Some vehicle insurers offer reduced premiums for properties with electric gates.',
  },
  {
    question: 'Can my existing manual gates be automated without replacing them?',
    answer: 'In most cases, yes. If the gates are structurally sound, correctly hung, and the posts sit in adequate foundations, a motor system can be added without disturbing the gates themselves. This is one of the most common projects across Kent, particularly in West Kent where existing wrought iron gates are often in excellent condition but manually operated. The typical cost is \u00a31,400 to \u00a33,800 depending on gate weight, motor type, and what access control you add. Underground motors are achievable on most retrofit sites where the post condition allows.',
  },
  {
    question: 'What does the free matching service actually involve?',
    answer: 'You tell us your Kent postcode, the type of gate you want, and a rough budget. We identify up to three specialist gate installers from our vetted network whose experience matches your project and location. Each one contacts you directly to arrange a free site survey at a time that works for you. After the surveys you receive a detailed written quote from each installer. You compare them at your own pace and decide whether to proceed. There is no fee at any stage and no obligation. We receive a referral contribution from the installer after a completed project, which does not affect the price you pay.',
  },
  {
    question: 'How do I know the installers in your Kent network are any good?',
    answer: 'Every installer is assessed before they receive a single referral. We require evidence of at least 50 completed residential gate installations, current public liability insurance, and a standard practice of providing separate written warranties for the gate structure and the automation system. We monitor customer feedback on an ongoing basis. Installers whose quality or responsiveness drops below our threshold are removed. Kent-specific knowledge matters too: we only refer firms that understand the county, including both AONBs, the conservation area landscape, the coastal specification requirements, and the twelve district council planning frameworks.',
  },
  {
    question: 'What safety standards apply to electric gates in the UK?',
    answer: 'BS EN 12453 is the safety standard that every automated gate installation in the UK must meet. It requires photocell beams across the full gate opening, safety edges on the leading face that stop and reverse the gate on contact, force limits tested with calibrated equipment, and auto-reverse that triggers if the motor detects resistance. A competent installer commissions and tests every safety system before handover and provides a written commissioning record documenting the results. Every installer in our Kent network commissions to this standard on every project without exception.',
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          logo: `${siteConfig.url}/android-chrome-512x512.png`,
          image: `${siteConfig.url}/android-chrome-512x512.png`,
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Kent',
            containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Driveway Gate Installation Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electric Sliding Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electric Swing Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wooden Driveway Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Driveway Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gate Automation Retrofit' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gate Repair and Maintenance' } },
            ],
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127',
            bestRating: '5',
          },
          priceRange: '\u00a3\u00a3',
          currenciesAccepted: 'GBP',
          paymentAccepted: 'Cash, Credit Card, Bank Transfer, Finance',
          openingHours: 'Mo-Sa 08:00-18:00',
        }) }}
      />
      <FAQSchema faqs={homepageFaqs} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Driveway Gates Kent: Vetted Installers, Free Site Surveys"
          subtitle="Connecting Kent homeowners with specialist gate installers across the county. From Sevenoaks to Canterbury, Dartford to Folkestone. Three free quotes, no obligation, no cost to you."
          image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* How It Works - moved up for conversion */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Three Steps to Your Kent Gate Installer</h2>
              <p className="text-gray-600 max-w-xl mx-auto">No searching, no cold calls, no sales pressure. Tell us what you need and we handle the rest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Describe Your Project',
                  desc: 'Your Kent postcode, the type of gate, and a rough budget. Takes under two minutes. We use this to identify the right specialists for your site, your property type, and your specification.',
                },
                {
                  step: '2',
                  title: 'Meet Your Matched Installers',
                  desc: 'Up to three vetted gate specialists contact you to arrange free site visits. They assess the driveway, check planning if relevant, and provide detailed written quotes with no obligation attached.',
                },
                {
                  step: '3',
                  title: 'Compare and Choose',
                  desc: 'Three independent quotes, each based on a physical survey of your property. Compare on your terms. Proceed when you are ready, or not at all. There is no fee to you at any stage of this process.',
                },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-5">{item.step}</div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">
                Start Your Free Enquiry
              </button>
              <p className="text-gray-500 text-sm mt-3">Free for homeowners. No fees. No obligation.</p>
            </div>
          </div>
        </section>

        {/* Why Specialist Matters */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Most Kent Gate Problems Start With the Wrong Installer
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    A general builder who occasionally installs a gate is not the same thing as a gate specialist. The difference shows in the foundation depth, the motor sizing, the surface treatment specification, and the safety commissioning. It shows in whether the installer knows that a property in the North Downs AONB faces different planning rules from one in Dartford, or that a steel gate half a mile from the Whitstable seafront needs marine-grade powder coat rather than a standard formulation.
                  </p>
                  <p>
                    Kent is a county where these details matter more than most. The terrain varies from the chalk ridge of the North Downs to the clay hills of the Weald. The planning landscape involves two Areas of Outstanding Natural Beauty, Green Belt along the M25 corridor, conservation areas in every historic town, and twelve separate district councils. The property types run from medieval timber-frame houses in Canterbury to modern estates in Dartford. Getting the specification right for each context is not something a generalist does well.
                  </p>
                  <p>
                    Every installer in our network does gate work as their primary trade, has completed at least 50 residential installations, carries full public liability insurance, and provides written warranties on both the gate and the automation. We match you with up to three who cover your area and have the right experience for your project. You compare their quotes and decide.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Your Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png" alt="Wrought iron driveway gates with stone pillars and lanterns on a Kent estate" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png" alt="Contemporary aluminium sliding gate on a modern Kent property" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wooden-painted-cream-kentish-countryside.png" alt="Painted hardwood gate on a rural Kent driveway surrounded by countryside" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Gate Types */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Electric Gates, Wooden Gates, Metal Gates: Kent Specialists for Each</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Whether you need a <Link href="/services/electric-sliding-gates/" className="text-brand-600 hover:underline">sliding gate</Link> for a steep North Downs driveway or a <Link href="/services/wooden-driveway-gates/" className="text-brand-600 hover:underline">hardwood gate</Link> for a Wealden farmhouse, we have the right specialist.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={`${service.title} installation in Kent`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      Find Kent installers <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Kent Property Types - unique section */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Gates for the Garden of England: Every Kent Property Type</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Kent&apos;s residential stock is unusually varied. The right gate specification depends as much on the building&apos;s character as on your personal preference.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <TreePine className="w-6 h-6" />,
                  title: 'Oast Houses and Barn Conversions',
                  desc: 'The Wealden landscape between Paddock Wood and Tenterden is dotted with converted oast houses and agricultural barns. European oak or iroko, close-boarded or open-framed to suit the boundary, is the instinctive specification. Our High Weald AONB installers know what works.',
                  link: '/services/wooden-driveway-gates/',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Victorian and Edwardian Commuter Belt',
                  desc: 'The period housing stock across Sevenoaks, Tunbridge Wells, and Tonbridge calls for gates with heritage character. Wrought iron or fabricated steel with traditional profiles, on brick piers with underground motors concealed below.',
                  link: '/services/metal-driveway-gates/',
                },
                {
                  icon: <Waves className="w-6 h-6" />,
                  title: 'Coastal East Kent Properties',
                  desc: 'Between Whitstable and Folkestone, salt air changes the specification entirely. Aluminium for zero corrosion, Accoya for salt-resistant timber, marine-grade powder coat on any steel. Coastal installers know the requirements.',
                  link: '/services/electric-sliding-gates/',
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Canterbury Conservation Area',
                  desc: 'The historic core of Canterbury and surrounding villages carry conservation designations that affect boundary treatments. Gate material and design need to respect the street scene. Our Canterbury-area installers handle this regularly.',
                  link: '/services/metal-driveway-gates/',
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Modern Builds in North Kent',
                  desc: 'New-build estates across Dartford, Gravesend, and the Ebbsfleet corridor suit clean-lined aluminium sliding gates or fabricated steel in anthracite. Practical, low-maintenance, and fully automated.',
                  link: '/services/electric-sliding-gates/',
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: 'Premium West Kent Estates',
                  desc: 'Sevenoaks, Westerham, and the Tunbridge Wells belt produce some of the highest-specification gate installations in the South East. Hand-forged wrought iron, underground motors, video intercom, and proximity access.',
                  link: '/services/automated-gate-systems/',
                },
              ].map((item, i) => (
                <Link key={i} href={item.link} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Kent Planning and Geography */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-4">
                {[
                  { label: 'West Kent', towns: 'Sevenoaks, Westerham, Edenbridge, Tunbridge Wells', detail: 'London commuter wealth, North Downs AONB and Green Belt overlap, premium wrought iron and concealed automation' },
                  { label: 'The Weald', towns: 'Cranbrook, Goudhurst, Tenterden, Hawkhurst', detail: 'High Weald AONB, oast houses, farmsteads, barn conversions. Bespoke hardwood the dominant specification' },
                  { label: 'North Kent', towns: 'Dartford, Gravesend, Swanley, Meopham', detail: 'M25 commuter belt, contemporary and period mix. Sliding and swing automation, practical specifications' },
                  { label: 'Mid Kent', towns: 'Maidstone, Bearsted, West Malling, Lenham', detail: 'County town and garden villages. Bespoke metal and hardwood across a range of property ages and styles' },
                  { label: 'East Kent Coast', towns: 'Canterbury, Whitstable, Faversham, Deal, Folkestone', detail: 'Historic conservation areas, medieval listed buildings, coastal exposure demanding marine-grade specification' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}: {item.towns}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Two AONBs. Twelve Districts. One Coast. Kent Demands Local Knowledge.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    The North Downs AONB traces the chalk escarpment from the Surrey border through Sevenoaks, past Wrotham Hill, and onward to the coast above Folkestone. The High Weald AONB covers the rolling clay hills through Cranbrook, Goudhurst, and Lamberhurst. Green Belt wraps the M25 corridor through the Sevenoaks and Dartford districts. Conservation areas exist in Canterbury, Faversham, Tenterden, Sandwich, and in villages right across the county.
                  </p>
                  <p>
                    Add twelve separate district planning authorities, each with its own policies on boundary treatments, and you have a planning landscape that rewards experience and punishes assumptions. An installer who knows Kent will identify the relevant designation at postcode level, advise on whether a pre-application enquiry makes sense, and design a gate that the planning authority is likely to accept.
                  </p>
                  <p>
                    Then there is the physical landscape. North Downs properties sit on chalk with steep gradients that need specific hinge and motor engineering. The Weald sits on clay that behaves differently under foundation loads. The coast brings salt air corrosion that inland specification does not account for. Our network installers work across all of these conditions and adjust their specification for each one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Driveway Gate Installers Near You in Kent</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">75 towns covered across every part of the county. Select your area to see what is available locally.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {topAreas.map(area => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="group flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-700">Gates in {area}</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/location/" className="btn-secondary">
                Browse All 75 Kent Locations
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Kent Driveway Gate Prices: What Installations Actually Cost in 2026</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real prices from completed Kent projects. West Kent runs higher than the national average; North and East Kent are closer to it. Every figure includes full installation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTiers.map(tier => (
                <div key={tier.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-2">{tier.treatment}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-1">
                    &pound;{tier.priceFrom.toLocaleString()} <span className="text-base text-gray-400 font-normal">to</span> &pound;{tier.priceTo.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{tier.alignerSets} &middot; {tier.typicalDuration}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-900 rounded-2xl p-6 md:p-10 text-white text-center">
              <h3 className="text-2xl font-display font-bold mb-2">0% Finance From &pound;99 Per Month</h3>
              <p className="text-brand-200 text-sm mb-6 max-w-xl mx-auto">Available through most Kent installers in our network. Spread the cost over 6 to 36 months with nothing to pay upfront at many providers. Subject to status.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Options
              </button>
            </div>
          </div>
        </section>

        {/* Trust / Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What You Get From Our Free Matching Service</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We are not a gate company. We are the filter between you and the county&apos;s best gate installers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Minimum 50 Installs',
                  desc: 'No one enters our Kent network without a verified track record. Every installer has completed at least 50 residential gate projects before they receive a single referral from us.',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Insured, Warranted, Tested',
                  desc: 'Public liability insurance, separate written warranties for gate and automation, and BS EN 12453 safety commissioning with force testing documented at handover. Non-negotiable.',
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Matched to Your Area',
                  desc: 'A coastal Folkestone project and a Sevenoaks estate entrance need different experience. We match by location and project type, not just availability.',
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Still There in Five Years',
                  desc: 'We refer established businesses, not sole traders who might not be around when you need a service or warranty call. Longevity and responsiveness are part of our ongoing assessment.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Driveway Gates Kent: Your Questions Answered" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-brand-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get Matched With Kent Gate Installers Today</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">Two minutes is all it takes. Tell us what you need and we connect you with up to three vetted specialists for free site surveys and written quotes. No fees, no obligation, no pressure.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">
              Get Free Quotes Now
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
