import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('tunbridge-wells')!;
const description = 'Driveway and electric gates in Tunbridge Wells: sandstone ridges and clay valleys, listed boundary walls on Calverley Road, the town\'s conservation areas, and the High Weald around it.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Tunbridge Wells, Kent',
  description,
  path: '/location/tunbridge-wells/',
});

const faqs = [
  {
    question: 'Can I put gates into a listed boundary wall in Calverley Park?',
    answer: 'Not without listed building consent. Stretches of the early 19th-century ashlar walls and stone gate piers along Calverley Road are themselves Grade II listed, so cutting a new opening, changing the piers or fixing gates to them needs consent from Tunbridge Wells Borough Council as well as any planning permission.',
  },
  {
    question: 'Which Tunbridge Wells areas have extra rules on gates and fences?',
    answer: 'The council has Article 4 directions for St James and for The Lodge on Blackhurst Lane, the latter covering gates, fences and walls. Most of the Victorian residential areas are conservation areas, including Camden Park, Pembury Road, Broadwater Down and Nevill Park. Check your address with the council before changing a front boundary.',
  },
  {
    question: 'Will a gate on a sloping Tunbridge Wells drive need special hinges?',
    answer: 'Often. The town sits on sandstone ridges cut by steep valleys, so many drives fall away from or rise towards the road. Rising hinges, a leaf cut to follow the slope, or a cantilever sliding gate are the usual answers, and the installer should check the slope at the survey.',
  },
  {
    question: 'Did the new Local Plan change anything for gates?',
    answer: 'The Local Plan adopted in December 2025 does not change permitted development for gates. It matters more for new homes on land released from the Green Belt, where the estate permission may set its own rules on front boundaries.',
  },
  {
    question: 'Why does my gate keep drifting out of line in Tunbridge Wells?',
    answer: 'Clay ground shrinks in dry summers and swells in wet winters, and that movement can shift a gate post. Deeper post foundations and adjustable hinges help, and a service visit can realign the leaves and reset the motor limits.',
  },
  {
    question: 'Can an underground motor be fitted in a valley-bottom garden?',
    answer: 'Only if the chamber can drain. Where the sandstone meets the clay, springs keep the ground wet, and a chamber without a soakaway or drain can flood. Above-ground arm motors are the safer choice on those sites.',
  },
];

export default function TunbridgeWellsPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Tunbridge Wells"
        image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
        intro={
          <>
            <p>Tunbridge Wells has listed stone walls, a ring of Victorian conservation areas and hilly ground, so the right gate depends heavily on the street.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Sandstone Ridges and Wadhurst Clay Valleys">
            <p>
              The town is built on the Tunbridge Wells Sand Formation, a hard sandstone over the softer Wadhurst Clay (<a href="https://www.bgs.ac.uk/lexicon/lexicon.cfm?pub=TWS" className={linkClass} rel="noopener noreferrer" target="_blank">British Geological Survey</a>). The sandstone forms high ridges and the clay sits in spring-fed valleys, which is why so many drives here slope and why valley-bottom sites can stay wet.
            </p>
            <p>
              On a slope, a swing gate either needs rising hinges or a leaf shaped to the gradient, and a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link> avoids the problem by running clear of the ground. On wet clay, post foundations go deeper and motor chambers need proper drainage.
            </p>
          </TownSection>

          <TownSection title="Listed Ashlar Walls on Calverley Road">
            <p>
              Some of the most distinctive boundaries in Kent are here. Early 19th-century walls of local ashlar along Calverley Road, with pairs of stone gate piers, are listed in their own right by <a href="https://historicengland.org.uk/listing/the-list/list-entry/1083753" className={linkClass} rel="noopener noreferrer" target="_blank">Historic England</a>. Any new opening or gate fixed to a listed wall or pier needs listed building consent, and a matching stone pier is usually expected rather than brick.
            </p>
          </TownSection>

          <TownSection title="Conservation Areas Around the Common">
            <p>
              The borough council has designated conservation areas across most of the older town: Calverley Park, Camden Park, The Pantiles, The Common and Mount Ephraim, Mount Sion and High Street, Madeira Park and Warwick Park, Nevill Park and Hungershall Park, Broadwater Down, Molyneux Park, Pembury Road, St James, Denny Bottom and Rusthall Common, and Southborough Common. There are also Article 4 directions for St James and for The Lodge on Blackhurst Lane, which covers gates, fences and walls.
            </p>
            <p>
              Recent applications show how closely front boundaries are watched. In 2026 a retrospective application was made for removing iron railings at a house in Camden Park (26/01121/FULL), and another sought a new fence and gate with a widened drive at Matfield (26/00957/FULL).
            </p>
          </TownSection>

          <TownSection title="Victorian Villas and Painted Iron">
            <p>
              The large villas of Camden Park, Pembury Road and Broadwater Down suit painted <Link href="/services/metal-driveway-gates/" className={linkClass}>wrought iron or steel gates</Link> on stone or brick piers, usually in black or a dark heritage green. Where a drive is long, <Link href="/services/automated-gate-systems/" className={linkClass}>automation</Link> with underground motors keeps the period look intact.
            </p>
          </TownSection>

          <TownSection title="High Weald and Green Belt Beyond the Town">
            <p>
              The <Link href="/blog/driveway-gates-kent-aonb-high-weald-north-downs/" className={linkClass}>High Weald National Landscape</Link> and the Green Belt together cover about three quarters of the borough. The Local Plan adopted on 10 December 2025 released a small share of Green Belt for housing. For villages such as Langton Green, Speldhurst and Pembury, timber gates are often what the landscape and the planning officer expect.
            </p>
          </TownSection>

          <TownSection title="Southborough, Rusthall and the Common Edges">
            <p>
              Southborough Common and Denny Bottom with Rusthall Common are conservation areas where cottages and villas face open common land. Frontages there are often short and sloping, and the character of the common edge means a low timber or painted metal gate usually sits better than a tall solid one. Langton Green and Speldhurst, further west in the High Weald, have their own village conservation areas with larger plots and long drives.
            </p>
            <p>
              Pembury, east of the town, is another village conservation area. Its older houses line the main road, where highways officers will look closely at any new access.
            </p>
          </TownSection>

          <TownSection title="Springs, Clay and Motor Chambers">
            <p>
              Where the sandstone meets the Wadhurst Clay, water comes to the surface as springs. That is why valley-bottom gardens in Tunbridge Wells stay wet long after rain. An underground gate motor sits in a buried chamber, and on a spring line the chamber can flood unless it drains into a soakaway or a drain run. Arm motors fixed above ground avoid the problem, and a <Link href="/services/gate-repair-and-maintenance/" className={linkClass}>regular service</Link> catches water damage before it kills the motor.
            </p>
            <p>
              Clay also shrinks and swells with the seasons, which can move a gate post enough to throw the leaves out of line. Deeper concrete foundations for the posts, and hinges with some adjustment, keep a gate closing cleanly year after year.
            </p>
          </TownSection>

          <TownSection title="New Access Onto the A26 and A264">
            <p>
              Kent County Council is the highway authority. New access onto a classified road such as the A26, A264, A267 or A21 needs planning permission as well as dropped kerb approval. Permitted development limits a gate beside a road used by vehicles to 1 metre (<a href="https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2" className={linkClass} rel="noopener noreferrer" target="_blank">GPDO Schedule 2, Part 2</a>), and gates may not open outwards over the pavement.
            </p>
          </TownSection>

          <TownSection title="Burglary Series Across West Kent">
            <p>
              Kent Police charged three people over a series of 12 burglaries across Tonbridge, Sevenoaks and Tunbridge Wells between October 2023 and January 2024, in which car keys and cars were taken on three occasions. A gate will not stop a determined burglar on foot, but an automated gate that closes behind you and a <Link href="/services/automated-gate-systems/" className={linkClass}>video intercom</Link> that records the entrance make a driveway a slower, more visible target.
            </p>
          </TownSection>

          <TownSection title="Stone Piers, Sandstone and Matching Materials">
            <p>
              Local sandstone has been the building stone of Tunbridge Wells since the Regency villas went up, and the listed walls on Calverley Road set the standard for the town&apos;s boundaries. Where a new gate goes into an old wall, a matching stone pier usually looks right and is what planning officers expect in a conservation area. Brick piers with stone copings are a common compromise on Victorian streets. Ask the installer whether they will build the piers themselves or bring in a mason, and whether new footings are needed to carry an automated gate.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Tunbridge Wells Homes"
            note="Painted iron suits the conservation areas in town; hardwood suits the High Weald villages."
          />

          <FAQ faqs={faqs} title="Tunbridge Wells Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
