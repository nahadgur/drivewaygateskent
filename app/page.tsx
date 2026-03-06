// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Star, Clock, Award } from 'lucide-react';
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
    question: 'How much do driveway gates cost in Kent?',
    answer: 'Kent spans a wide range of residential markets, and pricing reflects that. The premium West Kent corridor around Sevenoaks and Tunbridge Wells sits above the national average, while North Kent and rural East Kent are closer to it. Expect to pay from £2,800 for a basic hardwood swing gate installation, £3,800 to £11,500 for electric swing gates, and £4,800 to £12,500 for electric sliding systems. Bespoke wrought iron gates with underground motors and video access management regularly exceed £12,000 in the West Kent premium market. A site survey is the only way to get a reliable figure for your specific project.',
  },
  {
    question: 'Do I need planning permission for driveway gates in Kent?',
    answer: 'Most Kent homeowners do not need planning permission for standard driveway gates. Permitted development covers gates up to 2 metres, or 1 metre where the gate fronts a classified road. However, Kent has two AONBs (the North Downs and the High Weald), Green Belt through the Sevenoaks and Dartford districts, and conservation areas in every historic town from Canterbury to Tenterden. Listed buildings add a further consent requirement. If your property sits within any of these designations, pre-application advice from the relevant district council is the right first step. Our installers know the twelve Kent district councils and will confirm the position at the site survey.',
  },
  {
    question: 'How long does a driveway gate installation take in Kent?',
    answer: 'The physical installation takes 2 to 4 days on a typical residential project. Groundwork is completed first and needs time to cure before the gate is hung. The gate, motor, and access control equipment follow. Where gates are fabricated to a bespoke design, which is the norm for wrought iron and hardwood in Kent, the workshop lead time is 3 to 6 weeks before the installation date. Your installer will give you a precise programme at the survey stage, including fabrication lead time if applicable.',
  },
  {
    question: 'Which type of driveway gate works best in Kent?',
    answer: 'It depends on the property and the location. In West Kent (Sevenoaks, Tunbridge Wells, Westerham), wrought iron swing gates with underground motors are the dominant specification for period properties. In the High Weald AONB (Cranbrook, Goudhurst, Tenterden), hardwood in oak or iroko is the natural choice and often the only material that feels right in the landscape. In the commuter belt and North Kent (Dartford, Gravesend, Maidstone), sliding and swing gates in fabricated steel or aluminium cover most of the market. Coastal East Kent properties need higher-spec surface treatment to handle salt air, making aluminium or marine-grade powder coat the sensible choice.',
  },
  {
    question: 'Can automation be added to my existing gates?',
    answer: 'Yes, in most cases. Existing swing or sliding gates can be retrofitted with a motor system if the gate structure and hinges are sound and the posts have adequate foundations. Kent installers carry out a significant volume of retrofit work, particularly in the West Kent market where existing gates are often wrought iron and structurally excellent but manually operated. The typical cost for a quality retrofit in Kent is £1,400 to £3,800, depending on gate weight, motor type, and access control specification. Underground motors are available on most retrofit projects with reasonable post access.',
  },
  {
    question: 'How does the installer matching service work?',
    answer: 'We are a matching service, not a gate company. You submit your details (Kent postcode, gate type, approximate budget) and we identify up to three specialist gate installers from our vetted network who cover your area and have relevant experience with your project type. Each installer contacts you directly to arrange a free site survey. You receive a detailed written quote from each one and choose who to proceed with, or nobody if the timing is not right. There is no fee to use the service at any point. We receive a referral fee from the installer after a project is confirmed.',
  },
  {
    question: 'What should I look for in a Kent gate installer?',
    answer: 'Specialisation is the most important factor. Look for a firm that installs gates as their primary trade and has a verifiable history of completed residential projects in Kent. They should carry public liability insurance of at least £2 million, provide written warranties covering the gate and the automation separately, and demonstrate specific experience with your gate type. Kent-specific knowledge matters: an installer who has worked regularly across the county will understand the two AONBs, the conservation area rules in Canterbury and the historic villages, the coastal specification requirements in East Kent, and how to handle the sloped driveways common along the North Downs ridge.',
  },
  {
    question: 'Are electric driveway gates safe for children and pets?',
    answer: 'When installed and commissioned to UK standards they are very safe. BS EN 12453 and the Machinery Directive both apply to automated gate systems and mandate photocell beams across the full opening, safety edges on the leading gate face, and auto-reverse that stops and reverses the gate if it meets resistance mid-travel. A competent installer commissions and tests every safety system before handover and provides written documentation of the test results. The installers in our Kent network commission to the required standard on every project as a non-negotiable part of handover.',
  },
  {
    question: 'What maintenance do electric gates need?',
    answer: 'Annual servicing is the baseline for any automated gate system. A proper service covers motor and gearbox lubrication, drive mechanism inspection, hinge condition and adjustment, safety sensor recalibration and testing, track cleaning on sliding systems, battery backup load testing, and a full structural check of the gate and posts. Hardwood gates need re-oiling every one to two years. Powder-coated metal gates need nothing beyond an occasional wash, though coastal Kent properties should have the finish inspected annually for salt damage. The cost of annual servicing in Kent is typically £120 to £210.',
  },
  {
    question: 'What happens to my gates during a power cut?',
    answer: 'Every properly specified automated gate includes a manual release that allows hand operation when mains power is unavailable. Most modern motor units carry a battery backup module that maintains automatic operation for 20 to 50 gate cycles after the power fails. For rural Kent properties on less reliable supply networks, your installer can specify a solar charging panel to keep the battery topped up independently of the mains supply. This is a common addition on installations in the Weald and the more remote villages.',
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
          },
          serviceType: [
            'Electric Sliding Gate Installation',
            'Electric Swing Gate Installation',
            'Wooden Driveway Gate Installation',
            'Metal Driveway Gate Installation',
            'Automated Gate Systems',
            'Gate Repair and Maintenance',
          ],
          priceRange: '££',
          currenciesAccepted: 'GBP',
          paymentAccepted: 'Cash, Credit Card, Bank Transfer, Finance',
        }) }}
      />
      <FAQSchema faqs={homepageFaqs} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Driveway Gates Kent: Specialist Installers, Free Quotes"
          subtitle="Kent gate specialists for every property type, from wrought iron on Sevenoaks estates to hardwood on High Weald farmhouses and marine-grade aluminium along the coast. Free site surveys, no obligation."
          image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* Intro */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Gate Installers in Kent Who Actually Specialise in Gates
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Kent covers more ground than most counties, and the gate market reflects it. The premium West Kent commuter belt around Sevenoaks and Tunbridge Wells requires a different skill set from the coastal installations in Whitstable, Deal, and Folkestone. The High Weald AONB demands planning sensitivity. North Kent around Dartford and Gravesend is a different market again. An installer who genuinely knows the county understands which specification each area demands before they arrive on site.
                  </p>
                  <p>
                    The gap between a gate specialist and a general builder who takes gate work when it appears is where most installation problems originate. Posts set without adequate foundation for the motor load. Motors undersized for the gate weight. Automation commissioned without the BS EN 12453 safety testing that a proper handover requires. Steel gates specified without hot-dip galvanising for a property half a mile from the coast. We built this service to close that gap: every installer in our network is a gate specialist first, with a verified history of completed residential projects before we refer a single enquiry their way.
                  </p>
                  <p>
                    Submit your details and we match you with up to three vetted Kent installers who cover your area and have relevant experience with your gate type. Each one offers a free site survey and a detailed written quote. You compare them and decide. There is no cost to you at any stage and no obligation to proceed.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Your Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png" alt="Ornate wrought iron driveway gates on a Kent estate property" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png" alt="Modern aluminium sliding gate between stone pillars" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wooden-painted-cream-kentish-countryside.png" alt="Hardwood iroko driveway gate on a Kent country property" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Kent Homeowners Use This Service</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Kent has no shortage of people who will quote for gates. Finding one who genuinely specialises, knows the county&apos;s planning landscape across twelve districts, and will still be answering the phone in five years is the hard part. We do that work for you.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Gate Specialists Only',
                  desc: 'Every firm in our network installs gates as their primary trade. We do not refer general builders, landscapers, or groundwork contractors who take gate work when it comes their way.',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Kent Planning Knowledge',
                  desc: 'Two AONBs, Green Belt, conservation areas across twelve districts, listed buildings in every historic village. Our installers know which rules apply where before they arrive on site.',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Free Survey, No Commitment',
                  desc: 'Every installer in our network carries out a proper site survey before quoting. No remote estimates, no surprises on the day. You decide whether to proceed after you have seen the quote.',
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: 'Three Independent Quotes',
                  desc: 'We match you with up to three specialists covering your area. You own the process: compare quotes on your own terms with no pressure from us or from the installers we introduce.',
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

        {/* Gate Types */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Every Gate Type, Every Kent Property</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Wrought iron for the commuter belt. Hardwood for the Weald. Marine-grade aluminium for the coast. Specialists for every material and every brief.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Covering Every Part of Kent</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">From the M25 commuter belt in the west to the historic coast in the east. Dartford and Gravesend in the north to the Wealden villages in the south. Our network covers the whole county.</p>
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
                Browse All Kent Locations
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What Kent Gate Installations Actually Cost in 2026</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Prices based on completed Kent installations. West Kent sits above the national average; North and East Kent are closer to it. These ranges reflect the county market.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTiers.map(tier => (
                <div key={tier.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-2">{tier.treatment}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-1">
                    £{tier.priceFrom.toLocaleString()} <span className="text-base text-gray-400 font-normal">to</span> £{tier.priceTo.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{tier.alignerSets} · {tier.typicalDuration}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-900 rounded-2xl p-6 md:p-10 text-white text-center">
              <h3 className="text-2xl font-display font-bold mb-2">Spread the Cost From £99 Per Month</h3>
              <p className="text-brand-200 text-sm mb-6 max-w-xl mx-auto">0% interest finance is available through most Kent installers in our network. Spread the cost over 6 to 36 months with nothing to pay upfront. Subject to status and approval.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Options
              </button>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* How It Works */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From your first enquiry to a written quote in hand: three straightforward steps, no fees, no obligation at any point.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Tell Us About Your Project',
                  desc: 'Give us your postcode, the type of gate you have in mind, and a rough budget range. Two minutes is all it takes. We use that information to identify the right specialists for your specific site and specification.',
                },
                {
                  step: '2',
                  title: 'We Introduce the Right Installers',
                  desc: 'We select up to three vetted Kent gate specialists whose experience matches your project. Each one contacts you to arrange a free site visit at a time that suits you, with no cold calls and no salespeople.',
                },
                {
                  step: '3',
                  title: 'Review Quotes and Decide',
                  desc: 'After the site surveys, each installer provides a detailed written quote. You compare them at your own pace. There is no obligation to proceed and no pressure from us at any stage.',
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

        {/* Kent Context */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Two AONBs, Twelve Districts, Coastal Exposure. Our Installers Know Kent.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    The North Downs AONB runs along the chalk ridge from the Surrey border through Sevenoaks and onward to the coast near Folkestone. The High Weald AONB covers the southern portion of the county through Cranbrook, Goudhurst, and Hawkhurst. Green Belt designation applies along the M25 corridor through the Sevenoaks and Dartford districts. Conservation areas exist in every historic town from Canterbury and Faversham to Tenterden and Sandwich. A gate project in Kent frequently involves navigating planning considerations before a single post is set in the ground.
                  </p>
                  <p>
                    Beyond planning, Kent&apos;s geography creates installation requirements that other counties do not share. The North Downs ridge produces steep driveways that need specific motor and hinge engineering. East Kent properties between Whitstable and Folkestone face salt air exposure that demands higher-specification surface treatments on steel and iron. The Wealden clay soils in the south of the county affect foundation design differently from the chalk in the north.
                  </p>
                  <p>
                    Installers in our network who work regularly across different parts of Kent understand these variations and specify accordingly. They know which of the twelve district planning authorities covers a given postcode and what the local policy says about boundary treatments in designated areas.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'West Kent: Sevenoaks, Westerham, Edenbridge, Tunbridge Wells', detail: 'Premium commuter belt, high-specification wrought iron and underground motors, AONB and Green Belt sensitivity' },
                  { label: 'Tunbridge Wells and Weald: Cranbrook, Goudhurst, Tenterden', detail: 'High Weald AONB, oast houses, barn conversions, farmhouses, bespoke hardwood and traditional ironwork' },
                  { label: 'North Kent: Dartford, Gravesend, Swanley, Meopham', detail: 'M25 commuter belt, mix of period and modern, sliding and swing gates, full automation popular' },
                  { label: 'Maidstone and Mid Kent: Bearsted, West Malling, Lenham', detail: 'County town and garden villages, period homes, bespoke metal and hardwood gates' },
                  { label: 'East Kent: Canterbury, Whitstable, Faversham, Deal, Folkestone', detail: 'Historic centres, conservation areas, coastal properties needing marine-grade specification' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                      <p className="text-gray-600 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Driveway Gates in Kent: Frequently Asked Questions" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-brand-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Get Quotes for Your Kent Property?</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">Submit your enquiry in under two minutes. We will match you with up to three vetted Kent gate installers for free site surveys, detailed written quotes, and no obligation.</p>
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
