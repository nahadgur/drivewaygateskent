// data/services.ts : Driveway Gates Kent

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: 'electric-sliding',
    title: 'Electric Sliding Gates',
    slug: 'electric-sliding-gates',
    description: 'The go-to solution for driveways where swing clearance is restricted. Sliding gates travel horizontally on a ground track or cantilever rail, handling wide openings and steep approaches that swing gates cannot manage.',
    image: '/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png',
    icon: 'Zap',
    color: 'slate',
    faqs: [
      {
        question: 'How much run-back space does a sliding gate need?',
        answer: 'The gate retracts fully to one side of the opening, so you need a clear stretch of wall or fence at least as wide as the gate leaf, plus roughly 500mm for the motor housing and end stop. A 4-metre gate requires approximately 4.5 metres of unobstructed boundary on one side. Where that run-back is not available, a cantilever system removes the ground track entirely and reduces the lateral clearance needed. Your installer will assess both configurations during the site survey.',
      },
      {
        question: 'Can a sliding gate handle the steep driveways found across Kent?',
        answer: 'Absolutely. Kent has a high proportion of sloped residential plots, particularly through the North Downs ridge between Sevenoaks and Folkestone and across the Weald from Tonbridge through to Cranbrook. The ground track must remain level regardless of the driveway gradient, which means the installer builds up the track foundation on sloped ground or specifies a cantilever system that clears the surface entirely. Both approaches are well proven across Kent installations. Photographs of your driveway gradient at the enquiry stage help the installer plan before the site visit.',
      },
      {
        question: 'How long does a sliding gate installation take in Kent?',
        answer: 'A standard residential sliding gate installation takes 3 to 4 days. Day one covers groundwork: excavating the track foundation, pouring the concrete base, and running electrical conduit for the motor and any intercom cabling. Day two is track installation and gate hanging. Day three handles motor mounting, safety sensor positioning, and wiring. The final day covers commissioning, remote programming, intercom setup if included, and handover. Larger or more complex installations may extend to 5 days.',
      },
    ],
  },
  {
    id: 'electric-swing',
    title: 'Electric Swing Gates',
    slug: 'electric-swing-gates',
    description: 'The most popular gate type on residential Kent driveways. A single or double leaf gate driven by underground or ram-arm motors, combining traditional presence with modern automated convenience.',
    image: '/images/gates/gate-steel-sage-green-swing-period-brick-spring.png',
    icon: 'Shield',
    color: 'emerald',
    faqs: [
      {
        question: 'Should electric swing gates open inward or outward?',
        answer: 'Inward opening is the standard and, in the majority of cases, the only permitted direction. UK highway regulations prohibit gates from opening over a public footpath or road, which rules out outward-opening designs for most Kent residential properties. The exception arises where the driveway slopes steeply downward from the road toward the house, making inward opening mechanically difficult. In those cases, installers typically use articulated hinge systems or higher-torque underground motors to manage the gradient rather than reversing the opening direction. Sloped approaches are common across the North Downs ridge and the Wealden hills.',
      },
      {
        question: 'What is the right width for electric swing gates?',
        answer: 'The opening should match your actual traffic needs, not simply the width of the gap. A single car requires a minimum clear opening of 2.7 metres; two vehicles passing comfortably need at least 5 metres. Most residential driveways in Kent fall between 3 and 4 metres, well suited to a standard double gate split into two equal leaves. For openings wider than 5 metres, your installer will likely recommend a sliding gate as a more structurally sound solution, since very wide swing leaves place considerable stress on the post foundations and motors.',
      },
      {
        question: 'Do electric swing gates require planning permission in Kent?',
        answer: 'In most cases, no. Permitted development rights cover gates up to 2 metres in height that open inward and are not adjacent to a classified road. The limit reduces to 1 metre for gates fronting a highway. Listed buildings and conservation area properties require consent regardless of height. Kent has a high concentration of planning designations: the North Downs AONB, the High Weald AONB, extensive Green Belt coverage along the M25 corridor, and conservation areas across every district. Your installer will flag any planning considerations at the site survey and can recommend a pre-application enquiry where there is any doubt.',
      },
    ],
  },
  {
    id: 'wooden-gates',
    title: 'Wooden Driveway Gates',
    slug: 'wooden-driveway-gates',
    description: 'Bespoke hardwood gates crafted to specification in iroko, European oak, or Accoya. The natural choice for oast houses, barn conversions, Wealden farmhouses, and rural properties where character matters as much as security.',
    image: '/images/gates/gate-wooden-painted-cream-kentish-countryside.png',
    icon: 'Sparkles',
    color: 'amber',
    faqs: [
      {
        question: 'How long do hardwood driveway gates last in Kent?',
        answer: 'A properly specified and maintained hardwood gate will outlast most other materials. Iroko, the most commonly used species for Kent residential gates, has a natural oil content that resists moisture absorption and holds its shape through the seasonal weather changes the county experiences. With an oil treatment every two years, an iroko gate will remain structurally sound and presentable for 25 to 30 years. European oak performs similarly and weathers to an attractive silver-grey if left untreated. Accoya, a modified radiata pine with a 50-year above-ground durability guarantee, is the premium low-maintenance option, particularly suited to coastal East Kent properties exposed to salt-laden air.',
      },
      {
        question: 'Can hardwood gates be automated?',
        answer: 'Yes, and the combination works well. Hardwood gates are heavier than aluminium equivalents, so the motor specification matters. A well-rated underground swing motor or heavy-duty ram-arm system handles even large iroko or oak gates without difficulty. The installer needs the approximate weight and dimensions of the gate before specifying the motor, which is why the timber species and panel design are confirmed before any automation equipment is ordered. Gate and motor are matched to each other, not selected independently.',
      },
      {
        question: 'Which timber species works best for Kent conditions?',
        answer: 'Iroko is the most reliable all-round choice for Kent residential gates. It is naturally durable to Use Class 3 without treatment, resists surface checking in warm dry summers, and holds its shape through damp winters. European oak is equally durable and preferred where the grain and character of the timber are a design priority, often the right choice in High Weald AONB and conservation area contexts where material authenticity carries weight. Accoya is the right specification for homeowners who want a documented 50-year lifespan with minimal annual maintenance, particularly on coastal East Kent properties between Whitstable and Folkestone where salt air exposure accelerates the weathering of untreated softwoods.',
      },
    ],
  },
  {
    id: 'metal-gates',
    title: 'Metal Driveway Gates',
    slug: 'metal-driveway-gates',
    description: 'Fabricated steel, aluminium, and wrought iron gates built for decades of service. From hand-forged ornate ironwork on Sevenoaks estate properties to precision-cut contemporary aluminium on modern North Kent builds.',
    image: '/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png',
    icon: 'Globe',
    color: 'sky',
    faqs: [
      {
        question: 'What is the practical difference between steel, aluminium, and wrought iron gates?',
        answer: 'Mild steel is the standard fabrication material for bespoke gates across Kent. It is strong, weldable into any profile, and takes a hot-dip galvanised and powder-coated finish that protects against corrosion for 20 years or more. Aluminium is lighter than steel, will not rust under any conditions, and is the preferred choice for very wide gates or heavy automation where reducing the moving weight extends motor life. It is also worth considering for coastal East Kent properties where salt air increases the corrosion challenge. Wrought iron is a specialist material, hand-forged by blacksmiths rather than fabricated, and is used on high-value period and estate properties where the authentic texture and character of the material justify the additional cost.',
      },
      {
        question: 'Do metal gates rust in Kent conditions?',
        answer: 'Untreated steel and iron will corrode in Kent conditions, and properties near the East Kent coast face accelerated corrosion from salt-laden air. The correct specification is hot-dip galvanising before powder coating, which encases the steel in zinc before the polymer finish is applied. This two-stage protection means that any chip or scratch in the powder coat exposes zinc rather than steel, and the zinc continues to protect through a sacrificial mechanism. A gate specified this way should not need remedial rust treatment for 20 years or more, even in coastal positions. Aluminium is the sensible alternative where zero rust risk is the priority, as it forms a stable oxide layer that protects the metal without any additional treatment.',
      },
      {
        question: 'Can I commission a bespoke design for a metal gate in Kent?',
        answer: 'Yes. Bespoke fabrication is standard practice for metal gates in Kent, and the majority of installations in our network involve a custom design rather than an off-the-shelf product. Installers work with specialist fabricators who can produce anything from a straightforward horizontal-bar contemporary gate to an ornate estate gate with scrollwork, a family crest, and gilded finials. Most fabricators provide detailed CAD drawings and, for larger projects, 3D renders showing the gate in position on your property. The design and approval process typically adds 2 to 4 weeks before fabrication begins.',
      },
    ],
  },
  {
    id: 'automated-systems',
    title: 'Automated Gate Systems',
    slug: 'automated-gate-systems',
    description: 'Complete automation packages for new and existing gates. Motors, safety systems, video intercom, keypad and proximity access, smart home integration, and battery backup as standard.',
    image: '/images/gates/gate-video-intercom-panel-brick-wall-closeup.png',
    icon: 'Medal',
    color: 'indigo',
    faqs: [
      {
        question: 'Can my existing gates be automated?',
        answer: 'In most cases, yes, provided the gates are structurally sound and properly hung on posts that are set in adequate foundations. The installer will assess gate weight, hinge condition, post alignment, and available power supply during the site visit. Common issues that need addressing before automation are sagging hinges, posts that have moved slightly over time, and gates that are heavier than the proposed motor is rated for. All of these are straightforward to resolve. The one situation where automation is not cost-effective is where the gate itself is in poor condition and would need to be replaced anyway, in which case a new gate and motor package is a better investment.',
      },
      {
        question: 'What happens to automated gates when the power goes off?',
        answer: 'Every properly installed automated gate system includes a manual release mechanism that allows the gate to be opened and closed by hand without power. In addition, most modern motor control boards accept a battery backup module that maintains automatic operation for 20 to 50 full cycles after the mains supply fails. For properties in rural Kent where power outages occur more frequently, a solar panel connected to a dedicated battery bank can keep the system running without reliance on the mains. Your installer will recommend the appropriate backup specification based on your location and usage pattern.',
      },
      {
        question: 'Can I operate my gates from a smartphone?',
        answer: 'Yes. GSM and Wi-Fi modules are available for most gate motor brands and allow you to open, close, and monitor your gates from anywhere with a mobile signal. You can grant temporary access to specific numbers, receive push notifications when the gate is operated, and integrate the gate into smart home platforms including Google Home, Amazon Alexa, and Apple HomeKit. Video intercom systems with IP cameras give you a live view of the gate entrance on your phone before deciding whether to grant access. The technology is reliable and straightforward, and your installer will configure the app and test the remote access before handover.',
      },
    ],
  },
  {
    id: 'gate-repair',
    title: 'Gate Repair and Maintenance',
    slug: 'gate-repair-and-maintenance',
    description: 'Diagnostic callouts, motor replacement, hinge realignment, safety sensor calibration, and annual service contracts across Kent. Most faults resolved on the first visit.',
    image: '/images/gates/gate-split-wrought-iron-vs-aluminium-sliding.png',
    icon: 'Users',
    color: 'rose',
    faqs: [
      {
        question: 'How often should electric driveway gates be serviced?',
        answer: 'Once a year is the minimum for any automated gate system. A full service covers motor lubrication, gearbox inspection, drive belt or rack-and-pinion condition, hinge torque, safety sensor alignment and sensitivity testing, battery backup charge level, intercom function, and a visual inspection of the gate structure, posts, and finish. Annual servicing typically costs £120 to £210 in Kent and will extend the working life of the motor by several years. It also keeps the manufacturer warranty valid on systems still within the warranty period.',
      },
      {
        question: 'My gate is making a grinding or scraping noise. What is causing it?',
        answer: 'A grinding noise on a sliding gate is almost always debris in the track, a worn drive pinion, or a roller that has seized. On a swing gate, grinding usually points to a dry hinge, a worn motor gearbox, or a gate that has dropped slightly and is scraping the ground or pillar face. In both cases, stop using the gate on auto mode until an engineer has inspected it. Continuing to run a gate with a mechanical fault accelerates wear and can turn a minor repair into a motor replacement. Switch to manual mode using the release key and book a callout.',
      },
      {
        question: 'How much does a gate repair callout cost in Kent?',
        answer: 'Kent gate engineers typically charge a callout and diagnostic fee of £80 to £140, which covers the visit and a full assessment of the fault. Labour and parts are additional. Most common repairs, including motor replacement, photocell realignment, control board replacement, and hinge adjustment, come to between £230 and £620 all in on a single visit. Engineers in our network carry the most common spare parts for FAAC, BFT, CAME, Nice, and Beninca systems on the van, which means the majority of faults are resolved the same day without a return visit.',
      },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
