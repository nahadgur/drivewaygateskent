// app/services/[serviceSlug]/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, Shield, Star, Search, CheckCircle, ArrowRight, ChevronDown, Award, Users, CreditCard, Sparkles } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { PricingSection } from '@/components/PricingSection';

const serviceContent: Record<string, { intro: string[]; benefits: { title: string; desc: string }[]; candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[] }> = {
  'electric-sliding': {
    intro: [
      "Kent driveways throw up conditions that favour sliding gates more often than you might expect from a county in the South East. The chalk ridge of the North Downs creates sharp elevation changes between road and entrance, particularly on properties between Wrotham and Folkestone where the scarp face drops steeply. Through the Weald, between Tonbridge and Tenterden, clay soils on rolling terrain produce driveways that slope, curve, or both. In either situation, a sliding gate sidesteps the gradient problem by running horizontally along the boundary rather than sweeping through a vertical arc that the slope would obstruct.",
      "Two configurations account for nearly every Kent residential installation. Ground-track systems run on a steel channel set into a concrete foundation at surface level: the standard choice on flat or near-flat approaches. Cantilever systems suspend the gate from an elevated rail, removing the track entirely. The cantilever option comes into play where the gradient makes a level track unachievable without heavy earthwork, where a decorative block-paved or cobbled surface should not be cut, or where leaf fall from the mature broadleaf trees common on Kent rural properties would clog a ground channel within weeks of installation.",
      "Run-back space is the primary layout constraint. The leaf retracts to one side, requiring an unobstructed boundary at least equal to the gate width plus approximately 500mm for the motor housing. On many Kent properties this space exists naturally as a boundary wall, close-board fence, or established hedge line. Where it does not, a biparting configuration divides the gate into two leaves travelling in opposite directions, halving the run-back needed on each side.",
    ],
    benefits: [
      { title: 'Handles Kent Gradients Without Compromise', desc: 'The North Downs escarpment and the rolling Wealden clay produce driveways that defeat standard swing gate geometry. A cantilever sliding gate clears the gradient entirely, and a ground-track system only requires a level base along the boundary rather than a flat driveway.' },
      { title: 'Stronger Engineering on Wide Openings', desc: 'Wide swing leaves concentrate enormous leverage at the hinge point. A sliding gate distributes load along the full length of the track. For Kent openings above 5 metres, the structural case for sliding over swing is straightforward.' },
      { title: 'Clean Footprint on Short Approaches', desc: 'When open, the leaf sits flat against the boundary with nothing projecting into the driveway. This matters on North Kent commuter belt properties and Maidstone suburban driveways where the approach from the road is short.' },
      { title: 'Resilient Drive Mechanism', desc: 'The rack-and-pinion system that drives a sliding gate is mechanically simple and well proven. Kept clean and lubricated annually, it runs reliably for a decade or more without major component replacement.' },
    ],
    candidateIntro: "A sliding gate is likely the right specification for your Kent property if:",
    candidates: [
      "Your driveway drops or climbs steeply from the road, making swing gate clearance impractical without significant hinge engineering",
      "The approach from the road is short and swing leaves would block parked vehicles, pedestrians, or the road itself",
      "The driveway entrance exceeds 5 metres and structural load distribution matters as much as appearance",
      "A clear run of boundary wall, fence, or hedge at least as wide as the proposed gate exists on one side",
      "The property style suits a contemporary gate that sits flat against the boundary when retracted",
    ],
    process: [
      { title: 'Site Assessment and Layout Planning', desc: 'The installer measures the opening, checks gradient, confirms run-back availability on both sides, and determines whether ground-track or cantilever suits the site.' },
      { title: 'Foundation and Track Preparation', desc: 'The concrete track bed is excavated and poured. Electrical conduit for the motor supply and any intercom cabling is laid before the surface is reinstated.' },
      { title: 'Gate Hanging and Drive Installation', desc: 'Track or cantilever rail is set and levelled, the gate leaf is positioned and adjusted, the motor and drive rack are fitted, and photocell sensors are mounted and wired.' },
      { title: 'Commissioning and Handover', desc: 'Travel endpoints are calibrated, safety sensor response is verified to BS EN 12453, remote handsets and any smartphone access are programmed, and the manual release is demonstrated.' },
    ],
  },
  'electric-swing': {
    intro: [
      "Swing gates remain the most frequently installed gate type on detached Kent properties, and for sound reasons. A pair of leaves opening symmetrically as you arrive delivers a visual statement that a single sliding panel does not quite replicate. The format is mature: the motor technology, hinge engineering, and safety systems are all well understood, which means the installer population capable of executing the job reliably is larger than for any other gate type.",
      "The motor specification defines the character of the entrance as much as the gate material. Underground motors sit in a chamber below the post and are completely hidden when the gate is closed, producing an uncluttered entrance that reads as architecture rather than equipment. This is the standard specification across the West Kent premium market in Sevenoaks, Tunbridge Wells, and Westerham. Ram-arm motors fix to the rear faces of gate and post, visible from inside the property. They are easier to service, cost less, and work well on retrofit projects where existing post foundations cannot accommodate excavation.",
      "Clearance is the suitability test. Each gate leaf must complete its full 90-degree arc without hitting vehicles, steps, raised borders, or anything else within the sweep path. Kent driveways that slope toward the house, common along the North Downs ridge and through the Wealden hills, add a further consideration: the bottom edge of the leaf traces a descending path as it opens, and the motor and hinge specification must account for this. An experienced installer walks the full arc on site before committing to any specification.",
    ],
    benefits: [
      { title: 'Architectural Presence at the Entrance', desc: 'Paired gates opening from a central point create an entrance statement that a sliding leaf does not achieve. For Kent period properties, detached family homes, and any entrance designed to be noticed, swing gates are the natural format.' },
      { title: 'Lower Installed Cost on Standard Driveways', desc: 'No track foundation and less groundwork means a swing installation is typically \u00a3500 to \u00a32,000 less than an equivalent sliding system on a flat site with a standard opening width.' },
      { title: 'Concealed Motor Option for Premium Properties', desc: 'Underground motors are the expected specification in the Sevenoaks and Tunbridge Wells belt. They keep the entrance visually clean and are available on both new installations and most retrofit projects where post foundations allow.' },
      { title: 'Pedestrian Access Without Full Gate Cycle', desc: 'A half-width pedestrian leaf or integrated wicket gate allows foot access without triggering the main motor. Practical on properties with regular deliveries, visitors, or family members who walk through rather than drive.' },
    ],
    candidateIntro: "Swing gates suit most Kent residential properties where the driveway geometry allows:",
    candidates: [
      "The driveway has sufficient depth for gate leaves to open fully inward without blocking parked vehicles or the road",
      "The gradient is manageable with standard or articulated hinge engineering, or the driveway is level",
      "The opening is up to 5 metres, within the range where swing gate post loads remain structurally practical",
      "The architectural character of the property calls for paired gates opening at a central point",
      "Cost is a relevant factor and the site does not specifically demand a sliding system",
    ],
    process: [
      { title: 'Survey and Arc Clearance Check', desc: 'The installer measures the opening, walks the full swing arc checking for obstructions, assesses pillar condition and foundation depth, and confirms motor type based on gate weight, post condition, and gradient.' },
      { title: 'Post and Foundation Work', desc: 'New posts are set in reinforced concrete. Underground motor chambers are excavated and formed where specified. Conduit for power, intercom, and keypad wiring is run before surface reinstatement.' },
      { title: 'Gate Hanging and Motor Installation', desc: 'Gate leaves are hung and aligned. Motors are fitted into chambers or mounted to post faces. Photocell sensors are positioned for full arc coverage and all wiring is terminated.' },
      { title: 'Programming and Safety Handover', desc: 'Travel limits and force limits are set and tested to BS EN 12453. Remote handsets and access control devices are programmed. The manual release is demonstrated and a written commissioning record provided.' },
    ],
  },
  'wooden-gates': {
    intro: [
      "Kent has one of the largest concentrations of properties in England where a hardwood gate is not merely preferred but is the only material that belongs. Oast houses with their distinctive conical roofs dot the Wealden landscape from Paddock Wood to Tenterden. Timber-frame farmhouses and tile-hung cottages line the lanes between Cranbrook, Goudhurst, and Sissinghurst. Barn conversions occupy former agricultural buildings across the county. In each case, the material language of the property is natural, weathered, and organic. A powder-coated aluminium gate at the entrance to any of these buildings would be visually jarring. A well-specified hardwood gate continues the material conversation the property is already having.",
      "Three timber species account for the vast majority of Kent residential gate work. Iroko is the practical default: naturally durable to Use Class 3, dimensionally stable through the wet winters and dry summers of the South East, and consistent in quality. European oak brings deeper grain character and is specified where the timber itself is the design feature. It weathers to an attractive silver grey if left untreated, a finish that sits perfectly against the aged timber and Kentish ragstone found on Wealden buildings. Accoya is the modern premium option: the acetylation process modifies the timber so fundamentally that the manufacturer certifies 50-year above-ground durability. For coastal East Kent properties between Whitstable and Folkestone, where salt air accelerates the breakdown of conventional softwoods, Accoya removes material longevity from the maintenance conversation entirely.",
      "Bespoke fabrication is the standard approach for timber gates in Kent, not an upgrade. A skilled gate maker can reference the proportions of your existing gateposts, the profile of the surrounding fencing, or a specific detail from the house. The cost premium over a catalogue size is modest, and the result is a gate designed for your entrance rather than selected from a range.",
    ],
    benefits: [
      { title: 'The Right Material for Kent Rural and Heritage Properties', desc: 'Conservation areas in Canterbury, Faversham, and the Wealden villages, both AONBs, and properties where the planning context favours traditional materials all benefit from hardwood. Timber is frequently the specification that planning officers expect.' },
      { title: 'Bespoke Design Without Premium Cost', desc: 'Joinery skills for hardwood gate fabrication are more widely available than specialist metalworking. A one-off design matched to your property adds modest cost over a standard size and is achievable through most Kent timber gate workshops.' },
      { title: 'Privacy and Noise Reduction', desc: 'A close-boarded hardwood gate provides complete visual screening and meaningful reduction in road noise. Relevant on Kent properties fronting A-roads and in villages with through-traffic.' },
      { title: 'A Material That Improves With Age', desc: 'Oiled iroko deepens in tone over the years. Untreated oak develops a uniform silver patina that complements rural and garden settings. These are materials that gain character rather than losing it.' },
    ],
    candidateIntro: "Hardwood driveway gates are the right specification if:",
    candidates: [
      "The property is an oast house, barn conversion, farmhouse, period cottage, or any building where natural materials are architecturally correct",
      "The entrance falls within the High Weald AONB, the North Downs AONB, or a conservation area where traditional materials carry planning weight",
      "Privacy is a requirement and a close-boarded design suits the boundary character",
      "You are prepared to oil the gates every one to two years, or you want to specify Accoya to largely eliminate the maintenance schedule",
      "A bespoke design referencing the architectural details of your specific property is part of the brief",
    ],
    process: [
      { title: 'Design Brief and Timber Selection', desc: 'Your installer discusses the design, shows timber species samples, advises on the right species for your site exposure and maintenance preference, and confirms automation requirements before producing drawings.' },
      { title: 'Drawing Approval', desc: 'Detailed fabrication drawings are produced for your review. No timber is ordered or cut until you sign off the design.' },
      { title: 'Workshop Fabrication', desc: 'Gates are made to the approved drawings. Allow 3 to 5 weeks from confirmed order depending on species and design complexity.' },
      { title: 'Installation and Aftercare Handover', desc: 'Gates are hung on hot-dip galvanised or stainless ironmongery. The initial treatment coat is applied on site. Automation is fitted if included. A written maintenance schedule for the specified timber is handed over.' },
    ],
  },
  'metal-gates': {
    intro: [
      "Kent covers a broader metal gate market than most counties because the property stock is so varied. At one end, the Sevenoaks and Tunbridge Wells premium market produces hand-forged wrought iron entrance treatments on brick piers with gilded finials and concealed motors. At the other, a laser-cut aluminium sliding gate in anthracite powder coat is the practical choice for a modern build in Dartford, Gravesend, or the Maidstone suburbs. Between these two points sits the bulk of Kent metal gate work: mild steel fabricated to a bespoke design, hot-dip galvanised, and powder-coated to the required colour.",
      "The surface treatment is the single most important specification decision. Hot-dip galvanising is the correct protection for any steel or iron gate that will live outdoors in Kent. The fabricated gate is immersed in molten zinc, bonding zinc to every surface including hollow section interiors, weld lines, and cut edges. The powder coat goes over the zinc. If the powder coat is chipped at any point in the gate's life, it exposes zinc rather than bare steel, and the zinc protects through a sacrificial mechanism. Coastal East Kent properties face additional corrosion pressure from airborne salt, and installers working between Whitstable and Folkestone should specify marine-grade polyester powder coat or recommend aluminium as the zero-corrosion alternative.",
      "Design flexibility in fabricated metal is substantial. Laser cutting produces intricate patterns, house names, and geometric motifs from flat plate with precision that hand fabrication cannot replicate. Traditional wrought iron profiles with curved heads, spear finials, and scrollwork are produced by specialist blacksmiths and widely specified on period properties in the Canterbury and Sevenoaks conservation areas. Most fabricators in our Kent network produce CAD drawings for approval, with 3D renders standard on larger projects.",
    ],
    benefits: [
      { title: 'Twenty-Year-Plus Durability When Correctly Specified', desc: 'A galvanised and powder-coated steel gate needs no significant surface work for two decades. Aluminium has no corrosion mechanism at all and carries an indefinite functional life with zero additional treatment.' },
      { title: 'Serious Physical Security', desc: 'Heavy-gauge steel or wrought iron on reinforced foundations provides a level of physical resistance that timber cannot match. A genuine deterrent against forced entry when combined with correct hinge specification and quality locks.' },
      { title: 'Total Design Freedom', desc: 'From reproduction Georgian ironwork to perforated contemporary panels, from laser-cut family crests to minimal horizontal bar, metal fabrication handles any brief while maintaining full structural strength.' },
      { title: 'Near-Zero Maintenance for Decades', desc: 'Once the galvanising and powder coat are intact, the maintenance requirement is an annual wash and a visual check of the finish. That is the full commitment for the first twenty years.' },
    ],
    candidateIntro: "Metal driveway gates are the right specification if:",
    candidates: [
      "Security is a primary driver and you need the strongest available physical barrier at the entrance",
      "You want a gate that demands no maintenance schedule beyond an annual wash for the next two decades",
      "The design calls for ornate ironwork, laser-cut personalisation, or a precision-cut contemporary aesthetic",
      "Your property sits in a Canterbury or Sevenoaks conservation area where heritage metalwork is expected",
      "The entrance scale or the character of the property suits wrought iron and the budget supports it",
    ],
    process: [
      { title: 'Design Consultation and CAD Drawings', desc: 'Your installer reviews portfolio examples, discusses material, profile, and colour, and produces CAD drawings for approval. 3D renders available on complex projects.' },
      { title: 'Fabrication and Surface Treatment', desc: 'The gate is fabricated, shot-blasted, hot-dip galvanised, and powder-coated in your RAL colour. Marine-grade powder coat for coastal Kent. Allow 3 to 6 weeks from drawing approval.' },
      { title: 'Installation and Post Assessment', desc: 'Gate is hung on new or existing posts. Foundations inspected and reinforced if required. Automation and access control fitted and wired.' },
      { title: 'Commissioning and Handover', desc: 'Travel limits set, safety stops tested to BS EN 12453, all access devices programmed, manual release demonstrated. Written warranties for gate and automation provided separately.' },
    ],
  },
  'automated-systems': {
    intro: [
      "Automation retrofits consistently account for more enquiries than any other project type across the Kent network. The scenario repeats across the county: a homeowner with manual gates that are structurally sound, visually right for the property, and capable of another twenty years, who has run out of patience with climbing out of the car every morning. The retrofit leaves the gates untouched. It addresses post condition, hinge alignment, and foundation adequacy, then adds the motor, safety systems, and access control that transform the daily experience.",
      "Motor choice on a retrofit follows the same logic as a new installation, with one additional constraint: the existing posts may not accommodate underground chambers without structural compromise. Where posts sit in adequate concrete with clearance at the base, underground motors are achievable and are the standard request from West Kent homeowners in Sevenoaks and Tunbridge Wells. Where post foundations are shallow or the surrounding ground is congested, a ram-arm system mounted on the face is the reliable alternative. A good installer makes this call honestly at the survey rather than defaulting to the higher-cost option.",
      "The access control layer is where the retrofit delivers benefits the manual gates never offered. A video intercom with a camera at the entrance and a smartphone app gives real-time visibility of every caller from anywhere. A proximity reader at the post detects a fob in the approaching vehicle and opens the gate hands-free. GSM and Wi-Fi modules connect the system to smart home platforms. For homeowners in the Sevenoaks and Tunbridge Wells belt where vehicle theft from driveways is a documented concern, a closed automated gate with video recording provides a genuine security layer.",
    ],
    benefits: [
      { title: 'Preserve Your Existing Gates', desc: 'Where the gates are in good condition and the right look for the property, automation adds electric operation without the cost and lead time of new gate fabrication.' },
      { title: 'Underground Motors on Most Kent Retrofits', desc: 'The preference for concealed motors in the West Kent market is well established. Most retrofit sites can accommodate underground installation with manageable additional work.' },
      { title: 'Full Smart Home and Video Access', desc: 'Video intercom, proximity readers, keypad entry, and integration with Google Home, Amazon Alexa, and Apple HomeKit are all available as retrofit additions.' },
      { title: 'BS EN 12453 Safety Compliance', desc: 'Every retrofit is commissioned to the same standard as a new installation. Photocells, safety edges, force limits, and auto-reverse all tested and documented at handover.' },
    ],
    candidateIntro: "A gate automation retrofit makes sense if:",
    candidates: [
      "You have existing manual gates that are structurally sound and correctly hung on posts with adequate foundations",
      "The gates suit the property and new fabrication is not the priority",
      "The daily inconvenience of manual operation has reached the point where the investment is justified",
      "Vehicle security matters and a closed automated gate adds a meaningful deterrent",
      "Smart home integration and remote management are part of the brief alongside basic electric operation",
    ],
    process: [
      { title: 'Structural and Post Assessment', desc: 'The installer checks gate weight, hinge condition, post alignment, and foundation depth. Any remedial work is identified and quoted separately before motor equipment arrives.' },
      { title: 'Motor and Access Control Specification', desc: 'Motor type and torque are confirmed based on the weight assessment. Access control is specified to your requirements. Everything is agreed in writing before equipment is ordered.' },
      { title: 'Installation Day', desc: 'Motors fitted, underground chambers excavated where specified, photocells and safety edges positioned, intercom and keypad cabling run to the control board.' },
      { title: 'Commissioning and Handover', desc: 'Safety sensor response tested to BS EN 12453 with force measurement documented. Travel limits calibrated. All access devices programmed. Manual release demonstrated. Written declaration of conformity provided.' },
    ],
  },
  'gate-repair': {
    intro: [
      "Gate failures across Kent follow predictable patterns. Motor gearboxes wear out from insufficient lubrication or from being undersized for the gate weight. Control boards fail when moisture reaches the electronics through poorly sealed housings. Photocell pairs drift out of alignment after a vehicle nudge or frost heave, causing false stops with no actual obstruction. Hinges that were never correctly adjusted at installation produce a gate leaf that drops until the motor stalls trying to push it through the cycle. On coastal East Kent properties, add salt corrosion of control board contacts and relay switches to the list.",
      "The majority of these faults resolve in a single visit by an engineer carrying diagnostic tools and common spares for the brands most widely installed across Kent: FAAC, BFT, CAME, Nice, and Beninca. Brand matters to repair speed because parts availability depends on the manufacturer support network, and the established brands maintain active spare parts catalogues for at least a decade after a model leaves production. Unbranded or imported motors installed by less experienced firms create a different scenario: the motor fails and replacement parts either do not exist in the UK supply chain or must be sourced internationally at significant delay.",
      "Scheduled annual servicing is consistently the cheapest route to reliable gate operation. A service visit catches motor wear, lubrication breakdown, hinge fatigue, safety sensor drift, and battery backup degradation at the point where each is a low-cost adjustment rather than a high-cost failure. The same issues left until they cause a system breakdown produce an emergency callout fee, a more expensive repair, and a period of manual operation that is exactly the inconvenience the automation was installed to prevent.",
    ],
    benefits: [
      { title: 'Same-Day Attendance for Urgent Situations', desc: 'A gate stuck open that cannot be secured is treated as urgent. Engineers in our network aim for same-day attendance where the property cannot be made safe in the closed position.' },
      { title: 'Diagnosis Before Any Work Begins', desc: 'Every callout starts with a structured diagnostic. You receive a clear fault explanation and a written repair quote before any work is carried out. No surprise charges.' },
      { title: 'Van Stock for the Brands Kent Runs', desc: 'Engineers carry parts for FAAC, BFT, CAME, Nice, and Beninca. The majority of Kent callouts complete on the first visit because the right component is on the van.' },
      { title: 'Service Contracts for Scheduled Maintenance', desc: 'Annual service contracts schedule the yearly service automatically and typically include priority callout response. The simplest way to keep the system maintained without relying on memory.' },
    ],
    candidateIntro: "You should book a gate repair or service if:",
    candidates: [
      "The gate has stopped responding to the remote, is travelling erratically, or is producing unfamiliar mechanical sounds",
      "The gate is stuck open and cannot be secured closed using the manual release",
      "Safety sensors trigger when nothing is in the path, causing repeated stops during the gate cycle",
      "The gate has not been serviced in the last 12 months and the motor warranty has not yet expired",
      "A hinge has visible play or the gate leaf is dropping or misaligning with the closing post",
    ],
    process: [
      { title: 'Callout and Systematic Diagnostic', desc: 'The engineer runs a structured check covering motor, control board, safety sensors, drive mechanism, hinges, and gate structure. Written fault report and repair quote provided before work starts.' },
      { title: 'First-Visit Repair Where Possible', desc: 'If the fault can be resolved with parts on the van, the repair is completed immediately and the full system tested before the engineer leaves.' },
      { title: 'Parts Order and Return Visit', desc: 'Where a component must be ordered, the gate is made safe in manual mode. Return visit scheduled once parts arrive, typically 1 to 5 working days for the main brands.' },
      { title: 'Post-Repair System Test and Report', desc: 'After repair or servicing, motor travel limits, safety sensors, battery backup, and all access devices are tested. A written service report is provided.' },
    ],
  },
};


export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocations, setShowLocations] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content = serviceContent[service.id] || serviceContent['electric-swing'];
  const relatedServices = services.filter(s => s.id !== service.id);

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  const totalCities = Object.values(LOCATIONS).flat().length;

  const combinedFaqs = [
    ...(service.faqs || []),
    ...FAQS_SERVICES,
  ];

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-40" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: service.title }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {['Compare up to 3 free quotes', 'Every installer vetted and insured', `${totalCities}+ Kent locations covered`].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <HeroLeadForm service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">{service.title}: What You Need to Know</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Benefits of {service.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0 h-fit">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                        <p className="text-sm text-gray-600">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">Find {service.title} Installers Across Kent</h2>
                    <p className="text-gray-600">
                      Kent specialists for {service.title.toLowerCase()} covering {totalCities} towns and areas across the county.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowLocations(!showLocations)}
                    className="flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline self-start md:self-auto whitespace-nowrap"
                  >
                    {showLocations ? 'Hide locations' : `Show all ${totalCities}+ locations`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="mb-6 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search your town or area..."
                      value={searchQuery}
                      onChange={(e) => { setSearchQuery(e.target.value); if (!showLocations) setShowLocations(true); }}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${showLocations ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!showLocations}
                >
                  <div className="space-y-8 pb-4">
                    {Object.entries(filteredLocations).map(([region, cities]) => (
                      <div key={region}>
                        <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{region}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                          {cities.map(city => (
                            <Link
                              key={city}
                              href={`/services/${service.slug}/${toSlug(city)}/`}
                              className="group flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg hover:bg-brand-50 transition-all border border-gray-100 hover:border-brand-200"
                            >
                              <MapPin className="w-3 h-3 text-brand-400 flex-shrink-0" />
                              <span className="text-gray-700 group-hover:text-brand-700 text-xs font-medium truncate">{city}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {!showLocations && (
                  <p className="text-sm text-gray-500">
                    Search for your area above or <button onClick={() => setShowLocations(true)} className="text-brand-600 font-medium hover:underline">browse all locations</button> to find {service.title.toLowerCase()} installers near you.
                  </p>
                )}
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Are {service.title} Right for Your Property?</h2>
                <p className="text-gray-600 mb-4">{content.candidateIntro}</p>
                <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  A site survey is always the right starting point. Your installer will assess the driveway, check planning position if relevant, and give you a firm recommendation based on what the site actually allows.
                </p>
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">The Installation Process</h2>
                <div className="space-y-4">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-0.5">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection serviceId={service.id} serviceName={service.title} />

              <div className="mb-14">
                <FAQ faqs={combinedFaqs} title={`${service.title} FAQs`} />
              </div>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Say</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get Matched for {service.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm">Free, no-obligation match with vetted installers in your Kent area.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find an Installer</button>
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: "Surveys available this week" },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: "50+ installs per installer" },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: "4.9 average rating" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-900 text-white p-6 rounded-2xl">
                  <h3 className="font-display font-bold mb-2">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available. Spread the cost over 6 to 36 months.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Other Gate Types</h3>
                  <div className="space-y-2">
                    {relatedServices.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                        <ArrowRight className="w-3 h-3" /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
