import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('dartford')!;
const description = 'Driveway and electric gates in Dartford: the West Hill Article 4 directions, keyless car theft from driveways, Ebbsfleet new-builds, Green Belt villages, Swanley, and electric gate repairs.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Dartford, Kent',
  description,
  path: '/location/dartford/',
});

const faqs = [
  {
    question: 'Do I need planning permission for gates on West Hill?',
    answer: 'On some houses, yes. Dartford Borough Council made Article 4 directions on West Hill in 1980 and 1983 that remove the right to put up or alter gates, fences and walls. If your house is covered, any new gate needs planning permission. Ask the council to confirm whether your address is included.',
  },
  {
    question: 'Will electric gates stop keyless car theft from my drive?',
    answer: 'They make it harder, not impossible. Relay thieves still need to drive the car away, and a closed automated gate slows that down while a camera records it. Kent Police advice also covers signal-blocking pouches for keys, steering locks and CCTV.',
  },
  {
    question: 'Can I add a gate to a new-build house at Ebbsfleet or Ingress Park?',
    answer: 'Check the title deeds, any estate management rules and the estate\'s planning permission first. In the Ebbsfleet area, the Ebbsfleet Development Corporation may be the planning authority rather than the borough council.',
  },
  {
    question: 'My electric gate has stopped working. Is it the motor?',
    answer: 'Not always. Common causes include a blocked or misaligned photocell, a flat remote battery, a tripped supply, a failed capacitor or limit switch, or a gate that has dropped on its hinges and now binds. A repair engineer should test the safety devices and power first, before replacing a motor.',
  },
  {
    question: 'Which council handles gates in Swanley?',
    answer: 'Swanley is in Sevenoaks District, not Dartford Borough, even though it sits on the Dartford side of the M25. Planning questions go to Sevenoaks District Council, and Kent County Council handles dropped kerbs as it does across the county.',
  },
  {
    question: 'Who approves a new access onto the A225 or A226?',
    answer: 'Kent County Council approves the dropped kerb as highway authority. Both are classified roads, so a new access also needs planning permission from the borough council.',
  },
];

export default function DartfordPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Dartford"
        image="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png"
        intro={
          <>
            <p>Dartford combines fast-growing new estates with older streets under Article 4 control, and car theft from driveways is a live local concern.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="The West Hill Article 4 Directions">
            <p>
              Dartford Borough Council made an Article 4 direction in 1983 covering 31 to 35 West Hill that removes the right to put up gates, fences, walls or other enclosures, and to alter existing ones (<a href="https://www.dartford.gov.uk/downloads/file/2828/31-35-west-hill" className={linkClass} rel="noopener noreferrer" target="_blank">Dartford Borough Council</a>). Related directions with the same effect were made on West Hill in 1980 and in Greenhithe in 1984. West Hill climbs steeply out of the town centre, and its Victorian and Edwardian houses are exactly the kind of frontage these directions were meant to protect.
            </p>
            <p>
              If your house is covered, a new gate needs planning permission even at a height that would normally be allowed. Expect the council to favour railings or a low painted metal gate over a solid one.
            </p>
          </TownSection>

          <TownSection title="Keyless Theft From Dartford Driveways">
            <p>
              In November 2025 a Kent Police alert, shared by Horton Kirby and South Darenth Parish Council, warned that criminals were targeting cars on driveways in the area, &quot;often using technology to bypass keyless entry systems&quot;. Wilmington Parish Council&apos;s crime report for March 2026 also listed a car stolen from a driveway.
            </p>
            <p>
              Relay theft works by boosting the signal from a key fob inside the house so the car opens and starts. An automated gate does not stop the relay, but it does stop the car leaving quickly, and a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> records the attempt. Combine it with a signal-blocking pouch for keys and a steering lock, as the police advise.
            </p>
          </TownSection>

          <TownSection title="Ebbsfleet Garden City and New Estates">
            <p>
              Ebbsfleet Garden City is planned for around 15,000 homes across Dartford and Gravesham, and the Ebbsfleet Development Corporation handles planning across its area. The borough&apos;s own Local Plan, adopted in April 2024, plans for 12,640 homes. Add Ingress Park in Greenhithe and the estates at Castle Hill and Stone, and a large share of Dartford homes are new builds.
            </p>
            <p>
              New-build frontages are often short and open-plan, and many estates restrict changes to front gardens in the deeds. Where a gate is allowed, an aluminium <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding gate</Link> is the usual answer: it needs no swing space, suits a modern house, and does not rust.
            </p>
          </TownSection>

          <TownSection title="Conservation Areas From the Town Centre to Southfleet">
            <p>
              The borough&apos;s conservation areas are Dartford Town Centre, Church Hill in Stone, Greenhithe, Red Street, Southfleet and Hook Green. Greenhithe also has its 1984 Article 4 direction on boundaries. In these places, painted metal gates on brick piers suit the older houses, and the council will look more closely at anything tall or solid.
            </p>
          </TownSection>

          <TownSection title="Green Belt Villages: Wilmington, Darenth and Sutton-at-Hone">
            <p>
              South of the town, the villages of Wilmington, Darenth, Sutton-at-Hone and Southfleet sit in the Metropolitan Green Belt. Houses there are larger and drives longer, and a new entrance onto a rural lane is treated more strictly than a replacement gate on an existing drive. <Link href="/services/wooden-driveway-gates/" className={linkClass}>Timber gates</Link> often sit better than metal on the village lanes.
            </p>
          </TownSection>

          <TownSection title="Swanley and the Sevenoaks District Edge">
            <p>
              Swanley sits on the Dartford side of the M25 but falls under Sevenoaks District Council for planning. That matters because Sevenoaks is overwhelmingly Green Belt and applies its own character guidance on front boundaries. If you live in Swanley, Hextable or Crockenhill, direct planning questions to Sevenoaks, not Dartford.
            </p>
          </TownSection>

          <TownSection title="Electric Gate Repairs in Dartford">
            <p>
              Electric gate repairs come up often in Dartford, and most faults are not the motor. A photocell knocked out of line or covered in dirt stops the gate closing; a gate that has dropped on its hinges binds and trips the motor&apos;s force limit; a failed capacitor or limit switch stops one leaf; and a flat battery in a remote looks like a dead gate.
            </p>
            <p>
              A good <Link href="/services/gate-repair-and-maintenance/" className={linkClass}>repair engineer</Link> checks power, safety devices and gate alignment before quoting for a new motor, and resets the force settings to BS EN 12453 afterwards. Ask whether they carry parts for your motor brand, because that decides whether the fix happens on the first visit.
            </p>
          </TownSection>

          <TownSection title="New Access Onto the A2, A225 and A226">
            <p>
              Kent County Council is the highway authority. A new access onto a classified road such as the A2, A225, A226 or A296 needs planning permission as well as dropped kerb approval. Permitted development caps a gate beside a road used by vehicles at 1 metre in height (<a href="https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2" className={linkClass} rel="noopener noreferrer" target="_blank">GPDO Schedule 2, Part 2</a>), and gates may not open outwards over the road or pavement.
            </p>
          </TownSection>

          <TownSection title="Swing or Sliding on a Dartford Drive">
            <p>
              The choice usually comes down to two measurements. A swing gate needs clear space behind it equal to the width of each leaf, plus room for a car to stand off the road while the gate opens. On a short new-build frontage that space often does not exist, and a car left waiting across the pavement is exactly what highways officers object to.
            </p>
            <p>
              A sliding gate needs no swing space, but it needs a straight run beside the opening at least as long as the gate itself, plus a little extra for the motor and end post. On a corner plot or a narrow frontage, that run can be the deciding factor. On the steeper part of West Hill, a swing gate opening uphill may catch on the drive, which is where rising hinges or a cantilever sliding gate earn their cost.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Dartford Homes"
            note="Aluminium sliding gates suit the new estates; painted metal suits West Hill and the conservation areas."
          />

          <FAQ faqs={faqs} title="Dartford Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
