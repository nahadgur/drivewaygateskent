// data/blog.ts : Driveway Gates Kent

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  featuredImage: string;
  excerpt: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[] }
  | { type: 'cta' }
  | { type: 'internal-link'; href: string; text: string; context: string }
  | { type: 'external-link'; href: string; text: string; source: string; rel: 'noopener noreferrer' }
  | { type: 'related-articles'; articles: { slug: string; title: string; category: string }[] };

const article1: BlogArticle = {
  slug: 'how-much-do-driveway-gates-cost-kent-2026',
  title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide',
  metaTitle: 'Driveway Gate Costs Kent 2026 | Full Pricing Guide',
  metaDescription: 'What do driveway gates cost in Kent in 2026? Real prices for electric sliding gates, swing gates, hardwood gates, metal gates, automation, and repairs across the county.',
  category: 'Pricing',
  publishDate: '2026-01-15',
  featuredImage: '/images/gates/gate-wrought-iron-open-manor-brick-pillars.png',
  excerpt: 'Kent gate prices vary considerably between the premium West Kent commuter belt and the more rural east of the county. Here is what installations actually cost across different parts of Kent in 2026.',
  content: [
    { type: 'p', text: 'Kent spans a wider range of residential markets than most English counties. The Sevenoaks and Tunbridge Wells corridor produces gate specifications that rival anything in the Home Counties, driven by commuter wealth and high-value rural properties. North Kent around Dartford and Gravesend operates at a different price point, with practical automation on modern builds forming the bulk of demand. East Kent, from Canterbury through to the coastal towns of Whitstable, Deal, and Folkestone, brings its own considerations: period properties in the historic centres, and salt air exposure on coastal installations that affects material specification.' },
    { type: 'p', text: 'The figures below come from completed installations across Kent in 2025 and early 2026. They represent what installers in the county are actually quoting and completing, not manufacturer list prices or estimates based on national averages.' },
    { type: 'h2', text: 'Electric Sliding Gates: £4,800 to £12,500 Installed' },
    { type: 'p', text: 'Electric sliding gates start at around £4,800 for a standard aluminium single-leaf gate on a flat site. This covers gate supply, ground-track foundation, a branded motor, two remote handsets, and safety commissioning to BS EN 12453. Bespoke fabricated steel or wrought iron systems with video intercom and smartphone control push toward £11,000 to £12,500.' },
    { type: 'p', text: 'Cantilever systems for the sloped driveways common along the North Downs ridge between Wrotham and Folkestone add £800 to £2,500 over standard tracked installations. The Wealden hills around Cranbrook and Goudhurst produce similar gradient challenges.' },
    { type: 'h2', text: 'Electric Swing Gates: £3,800 to £11,500 Installed' },
    { type: 'p', text: 'Electric swing gates start at approximately £3,800 for a standard flat-driveway installation. Underground motors, strongly favoured in the West Kent premium market around Sevenoaks and Tunbridge Wells for the clean entrance they create, add £400 to £800 over equivalent ram-arm systems. Premium installations with wrought iron, full access management, and pillar work reach £11,500 and above.' },
    { type: 'h2', text: 'Wooden Driveway Gates: £2,800 to £8,500 Installed' },
    { type: 'p', text: 'Hardwood gates suit the character of many Kent properties, particularly in the High Weald AONB, the Kentish Downs villages, and the conservation areas of Canterbury, Faversham, and Tenterden. Iroko and oak are the standard timber choices. Accoya, with its 50-year manufacturer guarantee, is the favoured specification for coastal East Kent properties where salt air accelerates the degradation of untreated softwoods.' },
    { type: 'h2', text: 'Metal Driveway Gates: £3,000 to £9,500 Installed' },
    { type: 'p', text: 'Fabricated mild steel with hot-dip galvanising and powder coating starts from £3,000 including automation. Coastal properties between Whitstable and Folkestone should specify marine-grade powder coat or aluminium to address the higher corrosion risk from salt-laden air. Wrought iron gates, hand-forged for period properties, start from around £6,500 and are regularly specified in the Sevenoaks and Canterbury conservation areas.' },
    { type: 'h2', text: 'Getting an Accurate Quote for Your Kent Property' },
    { type: 'p', text: 'A site survey is the only route to a reliable price. Gate installation costs are site-specific in ways that cannot be assessed remotely. Driveway gradient, soil conditions, proximity to the coast, planning designations, and the physical condition of any existing pillars all influence the final figure. Compare a minimum of three quotes from specialist installers, with each quote broken down by gate, groundwork, motor, and access control separately.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'electric-sliding-vs-swing-gates-kent', title: 'Electric Sliding vs Swing Gates: Which Suits Your Kent Driveway?', category: 'Buying Guide' },
      { slug: 'planning-permission-driveway-gates-kent', title: 'Planning Permission for Driveway Gates in Kent: AONB, Green Belt, Conservation Areas', category: 'Planning' },
      { slug: 'choosing-gate-installer-kent', title: 'How to Choose a Driveway Gate Installer in Kent', category: 'Buying Guide' },
    ]},
  ],
};

const article2: BlogArticle = {
  slug: 'electric-sliding-vs-swing-gates-kent',
  title: 'Electric Sliding vs Swing Gates: Which Suits Your Kent Driveway?',
  metaTitle: 'Sliding vs Swing Gates Kent | Which Should You Choose in 2026?',
  metaDescription: 'Deciding between electric sliding and swing gates for your Kent property? We compare both on space requirements, cost, gradient handling, and suitability for different Kent driveways.',
  category: 'Buying Guide',
  publishDate: '2026-01-20',
  featuredImage: '/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png',
  excerpt: 'The sliding versus swing decision usually comes down to what your driveway physically allows. Here is how to work out which type fits your Kent property.',
  content: [
    { type: 'p', text: 'The sliding versus swing question is the first practical decision most Kent homeowners face when planning a driveway gate installation. Both types are proven, widely installed across the county, and available in every material and finish. The right answer for your property is almost always dictated by the physical characteristics of your driveway rather than preference alone.' },
    { type: 'h2', text: 'When Swing Gates Work Best' },
    { type: 'p', text: 'A swing gate needs clear arc space to open. The leaf sweeps through approximately 90 degrees inward onto the property. If you have a driveway of reasonable depth on a flat or gentle gradient, swing gates are typically the more cost-effective choice. The commuter belt towns of Sevenoaks, Tonbridge, and the Maidstone suburbs produce the highest volume of swing gate installations in Kent, where detached properties with straightforward driveways make the format a natural fit.' },
    { type: 'h2', text: 'When Sliding Gates Make More Sense' },
    { type: 'p', text: 'A sliding gate travels horizontally along the boundary and needs no swing clearance. It requires run-back space to one side at least as wide as the gate itself plus roughly 500mm for the motor housing. Kent has a significant number of properties on the North Downs ridge and through the Weald where driveways slope steeply from the road. In these situations, cantilever sliding systems that clear the gradient entirely are the proven solution.' },
    { type: 'h2', text: 'Cost Comparison in Kent' },
    { type: 'p', text: 'On a standard flat Kent driveway, a swing gate installation is typically £500 to £2,000 less than an equivalent sliding system. This gap narrows on sloped sites where cantilever engineering adds cost to the sliding option, or on wide openings above 5 metres where a sliding gate becomes structurally superior to very large swing leaves.' },
    { type: 'h2', text: 'Which is Right for Your Kent Property?' },
    { type: 'list', items: [
      'Short driveway or insufficient swing clearance: sliding gate',
      'Sloped driveway on the North Downs or in the Weald: sliding with cantilever, or specialist swing hinge engineering',
      'Opening wider than 5 metres: sliding for structural efficiency',
      'Standard flat driveway 3 to 4 metres wide: swing is usually more cost-effective',
      'Period property, rural Kent, AONB village: swing in hardwood or wrought iron usually fits best',
      'Modern build in North Kent or commuter belt: either works; sliding favoured for a contemporary look',
    ]},
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
      { slug: 'best-gate-material-kent-wood-steel-aluminium', title: 'Best Gate Material for Kent: Wood, Steel, or Aluminium?', category: 'Materials' },
    ]},
  ],
};

const article3: BlogArticle = {
  slug: 'planning-permission-driveway-gates-kent',
  title: 'Planning Permission for Driveway Gates in Kent: AONB, Green Belt, Conservation Areas',
  metaTitle: 'Planning Permission Driveway Gates Kent | 2026 Rules Explained',
  metaDescription: 'Kent has two AONBs, extensive Green Belt, and conservation areas across all twelve districts. Find out when you need planning consent for driveway gates in Kent.',
  category: 'Planning',
  publishDate: '2026-01-25',
  featuredImage: '/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png',
  excerpt: 'Two Areas of Outstanding Natural Beauty, Green Belt along the entire M25 corridor, twelve district planning authorities, and conservation areas in every historic town. Kent planning for gates is not straightforward.',
  content: [
    { type: 'p', text: 'Kent presents one of the more complex planning landscapes for residential gate installations in England. The county contains two Areas of Outstanding Natural Beauty (the North Downs and the High Weald), a substantial belt of Green Belt land along the M25 corridor through Sevenoaks and Dartford, twelve separate district councils each with their own local plan policies, and conservation areas in towns and villages across the county from Canterbury and Faversham to Tenterden and Westerham.' },
    { type: 'h2', text: 'Permitted Development: The General Rule' },
    { type: 'p', text: 'Most residential driveway gates in Kent fall under permitted development and do not require a planning application. The general rule allows gates up to 2 metres in height that open inward onto the property. For gates adjacent to a classified road, the limit drops to 1 metre. These thresholds apply to the finished height of the gate measured from ground level at the point where it meets the road or pavement.' },
    { type: 'h2', text: 'North Downs AONB and High Weald AONB' },
    { type: 'p', text: 'Both AONBs carry specific planning sensitivity for residential development, including gates. The North Downs AONB runs along the chalk ridge from the Surrey border through Sevenoaks, Wrotham, and onwards toward Folkestone. The High Weald AONB covers the southern part of the county including Cranbrook, Goudhurst, Lamberhurst, and Hawkhurst. Properties within either AONB should confirm the planning position before proceeding, as Article 4 Directions can remove permitted development rights.' },
    { type: 'h2', text: 'Green Belt Along the M25 Corridor' },
    { type: 'p', text: 'The Metropolitan Green Belt extends into Kent through Sevenoaks District and Dartford Borough. Properties within this designation are subject to stricter controls on development including boundary treatments. While standard driveway gates generally remain within permitted development, Green Belt properties with Article 4 Directions should check with the relevant district council before proceeding.' },
    { type: 'h2', text: 'Conservation Areas and Listed Buildings' },
    { type: 'p', text: 'Canterbury, Faversham, Tenterden, Sandwich, and dozens of Kent villages have conservation area designations that affect what you can install at the property boundary. Listed buildings require separate listed building consent for any gate installation regardless of height. Kent has a particularly high density of medieval and Tudor listed properties in its historic centres, and an installer familiar with the county will know when consent is needed and how to design a gate that satisfies the conservation officer.' },
    { type: 'h2', text: 'Twelve District Councils: Who to Ask' },
    { type: 'p', text: 'Kent County Council is not the planning authority for residential gates. Planning applications and pre-application enquiries go to the relevant district council: Sevenoaks, Tonbridge and Malling, Tunbridge Wells, Maidstone, Dartford, Gravesham, Canterbury, Swale, Ashford, Folkestone and Hythe, Dover, or Thanet. Each district has its own local plan policies and supplementary guidance on boundary treatments. Your installer should know which district covers your property and what the local policy says.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'choosing-gate-installer-kent', title: 'How to Choose a Driveway Gate Installer in Kent', category: 'Buying Guide' },
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
    ]},
  ],
};

const article4: BlogArticle = {
  slug: 'best-gate-material-kent-wood-steel-aluminium',
  title: 'Best Gate Material for Kent: Wood, Steel, or Aluminium?',
  metaTitle: 'Best Driveway Gate Material Kent | Wood vs Steel vs Aluminium 2026',
  metaDescription: 'Choosing between wood, steel, and aluminium for your Kent driveway gate? This guide covers durability, maintenance, design options, and which material suits different Kent property types.',
  category: 'Materials',
  publishDate: '2026-01-28',
  featuredImage: '/images/gates/gate-wooden-painted-cream-kentish-countryside.png',
  excerpt: 'The right material depends on your property type, your proximity to the coast, and whether your installation falls within a planning designation. Here is how to choose.',
  content: [
    { type: 'p', text: 'Kent properties span everything from medieval timber-frame houses in the Canterbury villages to modern estates in North Kent. The material you choose for your driveway gate should reflect the architectural character of the property, the environmental conditions of the location, and the level of maintenance you are prepared to commit to over the next twenty years.' },
    { type: 'h2', text: 'Hardwood: Iroko, Oak, and Accoya for Kent' },
    { type: 'p', text: 'Hardwood gates are the natural specification for oast houses, barn conversions, Wealden farmhouses, and period properties throughout the Kent countryside. Iroko offers the best balance of durability and cost. European oak brings richer grain character and weathers to an attractive silver grey. Accoya, with its 50-year guarantee, is the clear choice for coastal East Kent where salt air exposure accelerates weathering and where low maintenance is a firm requirement.' },
    { type: 'h2', text: 'Steel: The Versatile Standard' },
    { type: 'p', text: 'Fabricated mild steel with hot-dip galvanising and powder coating is the most widely specified material for Kent gate installations. It handles any design brief from ornate traditional to minimal contemporary, takes any RAL colour, and provides 20-plus years of service when the surface treatment is correctly specified. For coastal positions between Whitstable and Folkestone, ensure the installer specifies a marine-grade polyester powder coat rather than a standard formulation.' },
    { type: 'h2', text: 'Aluminium: Coastal Kent and Low Maintenance' },
    { type: 'p', text: 'Aluminium does not corrode in any conditions, which makes it the most logical material for gate installations within a mile or two of the Kent coastline. It is lighter than steel, which reduces motor load and foundation requirements. On the design side, aluminium lends itself to contemporary horizontal-bar and flat-panel aesthetics rather than traditional ornate styles. Across the North Kent commuter belt and on modern builds in the Maidstone and Ashford areas, aluminium gates are an increasingly common specification.' },
    { type: 'h2', text: 'Choosing by Property Type' },
    { type: 'list', items: [
      'Wealden farmhouse or oast house: European oak or iroko, close-boarded for privacy',
      'Victorian or Edwardian in Sevenoaks, Tunbridge Wells, or Canterbury: wrought iron or fabricated steel with period detailing',
      'Modern build in North Kent: aluminium sliding or fabricated steel in anthracite',
      'Coastal property in Whitstable, Deal, or Folkestone: aluminium or Accoya for corrosion resistance',
      'Conservation area: timber or traditional ironwork, material to match existing boundary character',
      'AONB (North Downs or High Weald): hardwood is typically the safest planning choice',
    ]},
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
      { slug: 'driveway-gates-kent-aonb-high-weald-north-downs', title: 'Driveway Gates in Kent AONB: North Downs and High Weald Guide', category: 'Planning' },
    ]},
  ],
};

const article5: BlogArticle = {
  slug: 'electric-gate-automation-retrofit-kent',
  title: 'Adding Electric Automation to Existing Gates in Kent',
  metaTitle: 'Gate Automation Retrofit Kent | Add Electric Operation to Manual Gates',
  metaDescription: 'Retrofit automation to your existing Kent driveway gates. This guide covers feasibility, motor options, access control, and what the process involves from survey to commissioning.',
  category: 'Automation',
  publishDate: '2026-02-01',
  featuredImage: '/images/gates/gate-underground-motor-installation-engineer.png',
  excerpt: 'Existing manual gates that are structurally sound can almost always be automated. The retrofit adds electric operation without disturbing the gates themselves.',
  content: [
    { type: 'p', text: 'Gate automation retrofits are among the most frequently requested projects for installers covering Kent. The typical brief is straightforward: a homeowner with manual gates that are the right look for the property, still in sound condition, but no longer acceptable as a daily manual task. The retrofit adds the motor, safety systems, and access control without replacing the gates.' },
    { type: 'h2', text: 'Feasibility: What Gets Checked at the Survey' },
    { type: 'p', text: 'The installer assesses gate weight, hinge condition, post alignment, foundation adequacy, and available power supply. Common issues that need resolving before automation include sagging hinges, posts that have shifted, and gates that are heavier than the proposed motor can handle. All are straightforward to address. The one situation where a retrofit is not cost-effective is where the gate itself needs replacing, in which case a new gate and motor package makes better financial sense.' },
    { type: 'h2', text: 'Underground vs Ram-Arm Motors' },
    { type: 'p', text: 'Underground motors sit in a chamber below the post and are invisible when the gate is closed. They are the standard choice on premium West Kent properties in the Sevenoaks and Tunbridge Wells belt where the appearance of the entrance matters. Ram-arm motors mount on the face of the gate and post, visible from inside the property. They are the practical choice on retrofit projects where the post foundations do not support excavation, and are widely used across the North Kent and Maidstone areas.' },
    { type: 'h2', text: 'Access Control Options' },
    { type: 'p', text: 'Beyond basic remote operation, a retrofit can include video intercom with smartphone access, proximity readers that open the gate as your vehicle approaches, keypad entry, and integration with smart home platforms. For Kent homeowners in the Sevenoaks and Tunbridge Wells belt where high-value vehicle ownership is concentrated, a video intercom with recording capability adds a genuine security dimension to the automation investment.' },
    { type: 'h2', text: 'What the Retrofit Costs in Kent' },
    { type: 'p', text: 'A quality automation retrofit in Kent costs £1,400 to £3,800 depending on gate weight, motor type, and access control specification. Underground motors sit at the higher end of the range. The installation takes 1 to 2 days from arrival on site. BS EN 12453 safety commissioning and a written handover are included as standard on every retrofit in our Kent network.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'electric-gate-maintenance-kent', title: 'Electric Gate Maintenance in Kent: What Your Annual Service Should Cover', category: 'Maintenance' },
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
    ]},
  ],
};

const article6: BlogArticle = {
  slug: 'choosing-gate-installer-kent',
  title: 'How to Choose a Driveway Gate Installer in Kent',
  metaTitle: 'How to Choose a Gate Installer Kent | What to Check in 2026',
  metaDescription: 'Not all gate installers in Kent are equal. This guide explains what to check, what questions to ask, and what separates a specialist from a generalist.',
  category: 'Buying Guide',
  publishDate: '2026-02-05',
  featuredImage: '/images/gates/gate-steel-installation-two-engineers-suburban.png',
  excerpt: 'The quality of the installation matters more than the brand of gate or motor. Here is how to identify a Kent gate installer who will get the job right first time.',
  content: [
    { type: 'p', text: 'A gate installer who specialises in residential gate work and has a documented track record of completed projects in Kent is a fundamentally different proposition from a general builder who occasionally takes on gate jobs. The difference shows in the foundation specification, the motor sizing, the safety commissioning, and the quality of the handover documentation. It also shows three years later when something needs attention and the installer is still in business and still answering the phone.' },
    { type: 'h2', text: 'Check the Track Record' },
    { type: 'p', text: 'Ask for evidence of completed residential gate installations. A genuine specialist will have a portfolio of finished projects, ideally including work in your part of Kent. Look for experience with your specific gate type: a firm that primarily installs aluminium sliding gates on new-build estates may not be the right fit for a bespoke hardwood installation in the High Weald AONB.' },
    { type: 'h2', text: 'Verify Insurance and Warranties' },
    { type: 'p', text: 'Public liability insurance of at least £2 million is the baseline for any gate installer working on residential properties. Warranties should be provided separately for the gate structure and the automation system, not lumped together in a vague catch-all. Ask for the warranty terms in writing before signing a contract.' },
    { type: 'h2', text: 'Kent-Specific Planning Knowledge' },
    { type: 'p', text: 'Kent has two AONBs, Green Belt through the Sevenoaks and Dartford areas, and conservation areas in every historic town. An installer who knows the county will identify planning considerations at the survey stage before they become problems. They will know which of the twelve district councils covers your property and what the local policy says about boundary treatments. This knowledge is a genuine differentiator that matters more in Kent than in counties with simpler planning landscapes.' },
    { type: 'h2', text: 'BS EN 12453 Commissioning' },
    { type: 'p', text: 'Every automated gate in the UK should be commissioned to BS EN 12453 with force testing and documented safety checks at handover. Ask any installer whether they carry a force measurement device and whether they will provide a written commissioning record. An installer who cannot confirm both of these should not be considered for any automation project.' },
    { type: 'h2', text: 'Coastal Specification Knowledge' },
    { type: 'p', text: 'If your property is in East Kent near the coast, the installer should know the higher-specification surface treatments required for salt air exposure. Marine-grade powder coat, aluminium over steel where appropriate, and stainless steel fixings rather than standard zinc-plated are all relevant. An installer who does not raise these points for a coastal Kent property may not have the experience to get the specification right.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
      { slug: 'electric-gate-maintenance-kent', title: 'Electric Gate Maintenance in Kent: What Your Annual Service Should Cover', category: 'Maintenance' },
    ]},
  ],
};

const article7: BlogArticle = {
  slug: 'electric-gate-maintenance-kent',
  title: 'Electric Gate Maintenance in Kent: What Your Annual Service Should Cover',
  metaTitle: 'Electric Gate Maintenance Kent | Annual Service Guide 2026',
  metaDescription: 'Annual servicing prevents the majority of electric gate failures. This guide covers what a proper Kent gate service includes, what it costs, and why skipping it is a false economy.',
  category: 'Maintenance',
  publishDate: '2026-02-08',
  featuredImage: '/images/gates/gate-underground-motor-installation-engineer.png',
  excerpt: 'A proper annual service covers motor, gearbox, hinges, safety sensors, battery backup, and the gate structure. Here is what to expect and what it should cost in Kent.',
  content: [
    { type: 'p', text: 'An automated gate system is a piece of machinery that operates outdoors through every season. It needs annual professional servicing for the same reason a boiler or a vehicle does: mechanical components wear, lubricants break down, electronic calibrations drift, and the safety systems that protect your family need to be tested and confirmed working at regular intervals.' },
    { type: 'h2', text: 'What a Full Annual Service Covers' },
    { type: 'p', text: 'Motor and gearbox lubrication. Drive mechanism inspection: rack-and-pinion on sliding gates, arm or underground mechanism on swing gates. Hinge condition assessment and torque check. Safety sensor alignment and sensitivity testing for photocells and safety edges. Battery backup charge level and load test. Intercom and access control function verification. Track cleaning and roller inspection on sliding gates. Visual inspection of the gate structure, posts, finish, and fixings.' },
    { type: 'h2', text: 'What It Costs in Kent' },
    { type: 'p', text: 'Annual servicing in Kent typically costs £120 to £210 for a standard residential gate system. The variation reflects travel distance, system complexity, and whether the system includes intercom or advanced access control that needs testing. This cost is consistently less than a single emergency callout and repair, and it keeps the manufacturer warranty valid on systems still within the warranty period.' },
    { type: 'h2', text: 'Coastal Kent: Additional Considerations' },
    { type: 'p', text: 'Properties near the East Kent coast between Whitstable and Folkestone face accelerated corrosion on steel and iron components due to salt-laden air. An annual service on a coastal installation should include specific inspection of the finish condition, checking for any chips or scratches that could allow salt corrosion to start, and application of protective treatment to any exposed areas. Stainless steel fixings should be checked for the early signs of crevice corrosion that can occur even on marine-grade stainless in high-salt environments.' },
    { type: 'h2', text: 'Why Skipping a Service Is a False Economy' },
    { type: 'p', text: 'The most common gate failures seen by Kent engineers are preventable with annual servicing. A motor that fails from lack of lubrication costs £350 to £700 to replace. A safety sensor that drifts out of alignment and is not caught until it causes repeated false stops generates a callout fee. A battery backup that dies silently leaves the gate stuck open during the next power cut. Annual servicing catches all of these at the point where they are cheap to address.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'electric-gate-automation-retrofit-kent', title: 'Adding Electric Automation to Existing Gates in Kent', category: 'Automation' },
      { slug: 'choosing-gate-installer-kent', title: 'How to Choose a Driveway Gate Installer in Kent', category: 'Buying Guide' },
    ]},
  ],
};

const article8: BlogArticle = {
  slug: 'driveway-gates-kent-aonb-high-weald-north-downs',
  title: 'Driveway Gates in Kent AONB: North Downs and High Weald Guide',
  metaTitle: 'Driveway Gates Kent AONB | North Downs and High Weald 2026 Guide',
  metaDescription: 'Installing driveway gates in the North Downs or High Weald AONB in Kent? This guide covers planning rules, material choices, and how to get the design right for a designated landscape.',
  category: 'Planning',
  publishDate: '2026-02-12',
  featuredImage: '/images/gates/gate-wooden-painted-cream-kentish-countryside.png',
  excerpt: 'Kent sits within two AONBs with distinct landscape characters. Getting the gate specification right for each requires understanding what the designation means in practice.',
  content: [
    { type: 'p', text: 'The North Downs AONB and the High Weald AONB between them cover a substantial part of Kent. The North Downs run along the chalk escarpment from the Surrey border through Sevenoaks and onward past Wye toward Folkestone. The High Weald covers the southern portion of the county including Cranbrook, Goudhurst, Lamberhurst, Sissinghurst, and the surrounding countryside. Each carries a distinct landscape character that gate installations should respect.' },
    { type: 'h2', text: 'North Downs AONB: Chalk Downland Character' },
    { type: 'p', text: 'The North Downs landscape is characterised by chalk grassland, beechwood, flint-walled villages, and a mix of vernacular and Victorian residential architecture along the ridge. Gate materials that sit comfortably in this landscape include hardwood in European oak or iroko, painted softwood where the property is a simpler cottage style, and traditional ironwork where the property has an established metalwork boundary. Powder-coated aluminium in standard commercial colours tends to read as suburban rather than rural and is less appropriate in this setting.' },
    { type: 'h2', text: 'High Weald AONB: Wealden Character' },
    { type: 'p', text: 'The High Weald is a landscape of rolling hills, ancient woodland, medieval field patterns, and characteristic Wealden buildings including oast houses, tile-hung cottages, and timber-frame farmhouses. The gate specification that fits most naturally here is close-boarded hardwood, particularly European oak left to weather to a silver grey that matches the aged timber of the surrounding buildings. Wrought iron is appropriate on larger properties where the entrance scale justifies it. The Wealden villages tend to have a less formal boundary character than the North Downs settlements, and gate designs should reflect this.' },
    { type: 'h2', text: 'Planning Considerations in Both AONBs' },
    { type: 'p', text: 'Permitted development rights generally apply to standard residential gates in the AONB, but Article 4 Directions can remove these rights in specific areas. Pre-application advice from the relevant district council is the right first step for any installation where there is doubt. Installers in our Kent network who work regularly in both AONBs can advise on whether consent is needed and how to design a gate that satisfies the landscape officer.' },
    { type: 'h2', text: 'Material and Finish Guidance' },
    { type: 'list', items: [
      'European oak, left untreated to weather naturally, is the default AONB-safe choice for the High Weald',
      'Iroko, oiled to a warm mid-brown, works well across both AONBs for properties with a warmer colour palette',
      'Accoya in a muted paint finish suits properties where the existing boundary is painted timber',
      'Wrought iron is appropriate on larger estate properties in both AONBs where the entrance scale matches',
      'Avoid bright white, anthracite grey, or other high-contrast colours that stand out against the rural landscape',
      'Match the gate profile to the existing boundary style: close-boarded where fences are solid, open-framed where the boundary is post-and-rail',
    ]},
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'planning-permission-driveway-gates-kent', title: 'Planning Permission for Driveway Gates in Kent: AONB, Green Belt, Conservation Areas', category: 'Planning' },
      { slug: 'best-gate-material-kent-wood-steel-aluminium', title: 'Best Gate Material for Kent: Wood, Steel, or Aluminium?', category: 'Materials' },
    ]},
  ],
};

const article9: BlogArticle = {
  slug: 'driveway-gates-west-kent-sevenoaks-tunbridge-wells',
  title: 'Driveway Gates in West Kent: Sevenoaks, Tunbridge Wells, and the Commuter Belt',
  metaTitle: 'Driveway Gates Sevenoaks Tunbridge Wells | West Kent Premium Guide',
  metaDescription: 'West Kent has the highest concentration of premium residential gate installations in the county. This guide covers what the market expects and how to specify correctly.',
  category: 'Local Guide',
  publishDate: '2026-02-15',
  featuredImage: '/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png',
  excerpt: 'The Sevenoaks and Tunbridge Wells corridor produces some of the highest-specification gate installations in the South East. Here is what the premium West Kent market requires.',
  content: [
    { type: 'p', text: 'West Kent is the wealthiest part of the county and the area where gate installation standards are highest. The Sevenoaks district, Tunbridge Wells, and the villages between them contain a concentration of high-value residential properties that sustain a genuine premium market for bespoke gate work. This is not about cost alone: it is about the expectation that the gate entrance will be architecturally coherent with the property it serves, that the automation will be invisible, and that the specification will be right for the next twenty years.' },
    { type: 'h2', text: 'Underground Motors as the Standard Specification' },
    { type: 'p', text: 'In the West Kent premium market, underground motors are the default rather than the upgrade. The expectation is a clean entrance where the gate face is uninterrupted by visible motor equipment, the pillars are uncluttered, and the automation reads as invisible. Ram-arm motors, while perfectly functional, are viewed as a compromise in this segment. Properties in Sevenoaks, Westerham, Penshurst, and the Tunbridge Wells conservation area consistently specify underground installation as a non-negotiable element of the brief.' },
    { type: 'h2', text: 'Wrought Iron and the West Kent Aesthetic' },
    { type: 'p', text: 'Hand-forged wrought iron gates are more widely specified in West Kent than in most parts of the country. The concentration of Georgian, Victorian, and Edwardian properties creates consistent demand for ironwork that reflects the architectural period of the house. Ornate scroll and spear designs on substantial brick pillars with stone caps and pillar-mounted lanterns are a standard brief in this market. The fabrication is specialist work, with lead times of 4 to 8 weeks from drawing approval to delivery.' },
    { type: 'h2', text: 'Vehicle Security in the Premium Belt' },
    { type: 'p', text: 'The Sevenoaks and Tunbridge Wells area has a high concentration of premium vehicles. Relay theft, where criminals use signal amplification to unlock and start keyless vehicles from the driveway, is a documented problem across this part of Kent. A closed automated gate with video intercom and recording capability is a meaningful deterrent. Access control that logs every gate opening with a timestamp provides evidence in the event of an incident. Security-conscious homeowners in this market routinely specify these features as part of the gate installation brief.' },
    { type: 'h2', text: 'North Downs AONB and Green Belt Overlap' },
    { type: 'p', text: 'Much of the West Kent premium market sits within or adjacent to the North Downs AONB and the Green Belt. Properties on the ridge above Sevenoaks, in the villages of Otford, Shoreham, and Kemsing, and along the Pilgrims Way frequently fall within both designations. Installers working in this part of Kent need to understand the planning position before specifying, and the ability to design a gate that satisfies both the homeowner and the landscape officer is a genuine professional skill.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
      { slug: 'best-gate-material-kent-wood-steel-aluminium', title: 'Best Gate Material for Kent: Wood, Steel, or Aluminium?', category: 'Materials' },
    ]},
  ],
};

const article10: BlogArticle = {
  slug: 'driveway-gates-home-security-kent',
  title: 'Driveway Gates and Home Security in Kent: What Actually Works',
  metaTitle: 'Driveway Gates Security Kent | Vehicle Theft Protection 2026',
  metaDescription: 'How effective are driveway gates against vehicle theft and burglary in Kent? This guide covers what works, what does not, and how to specify a gate for security.',
  category: 'Security',
  publishDate: '2026-02-18',
  featuredImage: '/images/gates/gate-video-intercom-panel-brick-wall-closeup.png',
  excerpt: 'A closed automated gate is a proven deterrent against driveway vehicle theft. Here is how to specify your Kent gate installation with security as a priority.',
  content: [
    { type: 'p', text: 'Vehicle theft from driveways, primarily through relay attacks on keyless entry systems, is a documented concern across the wealthier parts of Kent. The Sevenoaks and Tunbridge Wells corridor, with its concentration of high-value vehicles on residential driveways, is a consistent target. A closed automated driveway gate is one of the most effective physical deterrents available, not because it is impossible to breach, but because it makes the property a significantly harder target than a neighbouring property without one.' },
    { type: 'h2', text: 'Why Gates Deter Vehicle Theft' },
    { type: 'p', text: 'Relay theft relies on speed. The criminals need to approach the house closely enough to amplify the key fob signal, walk to the vehicle, start it, and drive away. A closed gate between the road and the vehicle forces a second obstacle into this chain: the gate itself must be passed before the vehicle can be reached, and the vehicle cannot be driven through a closed gate. The additional time, noise, and visibility involved in breaching or climbing a gate is often enough to redirect the attempt to an easier target.' },
    { type: 'h2', text: 'Auto-Close and Timed Locking' },
    { type: 'p', text: 'Automatic closing after a set delay is a standard feature on all automated gate systems and should be enabled for any installation where security is a primary consideration. Most control boards allow the auto-close delay to be set between fifteen seconds and several minutes. The gate closes automatically after the delay whether the remote was used or the gate was opened by any other means. This removes the risk of leaving the gate open through forgetfulness.' },
    { type: 'h2', text: 'Access Control That Adds Security Value' },
    { type: 'image', src: '/images/gates/gate-proximity-fob-reader-closeup.png', alt: 'Close-up of proximity key fob access reader mounted on a gate post' },
    { type: 'p', text: 'A video intercom with recording capability is the most security-relevant access control addition beyond basic remote controls. A camera at the gate records activity regardless of whether anyone answers, creating both a deterrent and an evidence source. Push notifications to a smartphone give real-time awareness of gate activity from anywhere. Activity logs from keypad and proximity reader systems show a timestamped record of every opening event.' },
    { type: 'h2', text: 'Gate Construction and Physical Resistance' },
    { type: 'p', text: 'A heavy wrought iron or steel gate on reinforced posts offers more physical resistance than a lightweight aluminium gate on standard hinges. However, the primary security benefit of a residential gate in the Kent context is deterrence rather than physical resistance. A gate of 1.8 metres or above is significantly harder to scale and is the standard recommendation for security-priority installations. Most Kent planning authorities accept 1.8 metre gates under permitted development.' },
    { type: 'h2', text: 'Insurance Benefits' },
    { type: 'p', text: 'Some vehicle insurers offer reduced premiums for vehicles kept behind a closed electric gate. The extent of any reduction varies by insurer and policy. Documenting the installation with photographs and commissioning certificates is worth doing if you intend to claim a security-related premium reduction. Check with your insurer before and after installation.' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'electric-gate-automation-retrofit-kent', title: 'Adding Electric Automation to Existing Gates in Kent', category: 'Automation' },
      { slug: 'driveway-gates-west-kent-sevenoaks-tunbridge-wells', title: 'Driveway Gates in West Kent: Sevenoaks, Tunbridge Wells, and the Commuter Belt', category: 'Local Guide' },
      { slug: 'how-much-do-driveway-gates-cost-kent-2026', title: 'How Much Do Driveway Gates Cost in Kent? A Full 2026 Pricing Guide', category: 'Pricing' },
    ]},
  ],
};

export const blogArticles: BlogArticle[] = [
  article1, article2, article3, article4, article5,
  article6, article7, article8, article9, article10,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(a => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map(a => a.slug);
}
