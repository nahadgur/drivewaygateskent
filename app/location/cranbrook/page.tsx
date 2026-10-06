import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('cranbrook')!;
const description = 'Driveway and electric gates in Cranbrook and the Weald: listed buildings and conservation areas, the High Weald National Landscape, oast houses and farmsteads, Hawkhurst and Goudhurst.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Cranbrook, Kent',
  description,
  path: '/location/cranbrook/',
});

const faqs = [
  {
    question: 'Do I need listed building consent for gates in Cranbrook?',
    answer: 'If your house is listed, or the wall or gate is within the curtilage of a listed building, yes. Around 250 listed buildings sit in and around the town, and much of the High Street, Stone Street and The Hill is listed. Ask Tunbridge Wells Borough Council before ordering anything.',
  },
  {
    question: 'Are gates allowed in the High Weald National Landscape?',
    answer: 'Yes. The designation does not ban gates, but it shapes what is acceptable. A simple timber gate that suits a Wealden farmhouse is far more likely to be accepted than a tall, ornate metal gate with large piers. In 2014 the council permitted a set of gates fronting Tenterden Road in Cranbrook.',
  },
  {
    question: 'What gate suits an oast house or barn conversion?',
    answer: 'Usually a hardwood field-style or close-boarded gate in oak or iroko, hung on timber or brick posts. It echoes the agricultural character of the building. Automation can be added with motors that sit low or underground so the gate still looks traditional.',
  },
  {
    question: 'Will a gate post move on Weald clay?',
    answer: 'It can. Clay shrinks in dry summers and swells in wet winters, which can push a post out of line. Deeper concrete footings and hinges with adjustment help, and a service visit can realign the leaves if they start to drag.',
  },
  {
    question: 'How much does a dropped kerb cost in Cranbrook?',
    answer: 'Kent County Council handles dropped kerbs as highway authority. Search listings of its current guidance give an application fee of £480, with part refunded if the application is refused. Check the council website for the current figure before you apply.',
  },
  {
    question: 'Do new homes at Turnden or Brick Kiln Farm allow gates?',
    answer: 'Check your title deeds and the estate planning permission first. New estates in a National Landscape often control front boundaries closely, so a gate may need the developer\'s consent or a planning application.',
  },
];

export default function CranbrookPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Cranbrook"
        image="/images/gates/gate-wooden-iroko-closeup-kent-weald-countryside.png"
        intro={
          <>
            <p>Cranbrook sits in the High Weald with hundreds of listed buildings around it, so most gates here are timber, carefully detailed, and checked against the setting of an old house.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="A Wealden Town Full of Listed Buildings">
            <p>
              The government&apos;s <a href="https://www.planning.data.gov.uk/entity.json?dataset=listed-building" className={linkClass} rel="noopener noreferrer" target="_blank">listed building register</a> records around 250 listed buildings within a few kilometres of Cranbrook town centre, and much of the High Street, Stone Street and The Hill is listed. If your house is listed, or your wall or gate sits within the curtilage of a listed building, any change to the entrance needs listed building consent from Tunbridge Wells Borough Council as well as any planning permission.
            </p>
            <p>
              That does not make a gate impossible. It means the design has to respect the building: proportions that suit the house, materials that match, and fixings that do not damage historic brick or timber. Expect to supply drawings, and allow time for the consent before the gate goes into the workshop.
            </p>
          </TownSection>

          <TownSection title="Cranbrook, Wilsley Green and Sissinghurst Conservation Areas">
            <p>
              The Cranbrook Conservation Area covers the town centre, with an appraisal adopted by the council in 2010. To the north, Wilsley Green and Wilsley Pound form small conservation areas of historic houses around the green, and Sissinghurst, on the A262, has had its own since 1971. Goudhurst and Kilndown, on their hilltops to the west, are conservation areas too.
            </p>
            <p>
              In a conservation area, permitted development still allows a gate up to 1 metre beside a road and 2 metres elsewhere unless an Article 4 direction removes the right. The only Cranbrook direction we found covers a single property, so most homes fall under the normal limits. Above them, or on a listed building, you need consent.
            </p>
          </TownSection>

          <TownSection title="Inside the High Weald National Landscape">
            <p>
              Cranbrook lies inside the High Weald National Landscape, and there is no Green Belt here. The designation shapes what looks right rather than banning gates. In 2014 the council permitted a set of gates fronting Tenterden Road (14/502632/FULL), a reminder that well-designed gates on a Weald frontage are routinely approved. What tends to draw objection is the suburban look: tall solid gates, oversized piers and wide hard standing on a rural lane. The <Link href="/blog/planning-permission-driveway-gates-kent/" className={linkClass}>High Weald planning approach</Link> favours timber and simple forms.
            </p>
          </TownSection>

          <TownSection title="Oast Houses, Barns and Farmhouses">
            <p>
              The farmland around Cranbrook, Benenden and Sissinghurst is full of converted oast houses, barns and timber-framed farmhouses. For these, an oak or iroko <Link href="/services/wooden-driveway-gates/" className={linkClass}>hardwood gate</Link> in a field-gate or close-boarded pattern is the natural choice. A five-bar gate suits an open farmyard entrance; a close-boarded gate gives privacy where the house sits near the lane.
            </p>
            <p>
              Automation works with timber too. Underground motors keep the posts clean, and articulated arm motors suit heavier gates on existing posts. Ask the installer to weigh the leaf and size the motor to it, because a heavy oak gate on an undersized motor is a common reason for early failure.
            </p>
          </TownSection>

          <TownSection title="Sandstone in Town, Clay in the Fields">
            <p>
              The town centre sits on the Tunbridge Wells Sand Formation, a mix of sandstone and siltstone, but much of the surrounding countryside is Weald clay that drains poorly. Kent County Council&apos;s flood risk profile for the borough notes the slow drainage of the Low Weald clay to the north. On clay, gate posts need deeper footings because the ground shrinks and swells with the seasons, and an underground motor chamber needs a working drain or soakaway.
            </p>
          </TownSection>

          <TownSection title="Long Farm Drives and Power">
            <p>
              Many entrances around Cranbrook are a long way from the house. Running mains cable to the gate can mean trenching across fields or a long drive. Where use is light, <Link href="/blog/off-grid-power-for-gates-on-rural-kent-farm-drives/" className={linkClass}>solar and battery power</Link> avoids the trench. Where the gate sees deliveries and farm traffic all day, mains power is more reliable. A GSM intercom, which works over the mobile network, avoids running a data cable from the gate to the house.
            </p>
          </TownSection>

          <TownSection title="Turnden and Brick Kiln Farm">
            <p>
              New housing at Cranbrook is concentrated around Hartley. Berkeley&apos;s Turnden development on Hartley Road had a first phase of 38 homes, with a second phase of 165 more proposed in the Crane Valley. Nearby, Brick Kiln Farm has outline consent for up to 180 homes, granted in 2020 and including a new oast house. Front gardens on these estates are usually controlled by the planning permission and the deeds, so check both before planning a gate.
            </p>
          </TownSection>

          <TownSection title="Hawkhurst, Goudhurst and Benenden">
            <p>
              Hawkhurst, with its Cranbrook postal address, mixes an older village with newer estates such as the one at Highgate Hill. Goudhurst and Kilndown are hilltop conservation areas where drives often rise steeply from the lane, which suits rising hinges or a cantilever sliding gate. Benenden has farmsteads being converted, such as farm buildings on Stepneyford Lane. Across all of them, timber gates fit the setting best.
            </p>
          </TownSection>

          <TownSection title="Rural Burglary and Farm Theft">
            <p>
              Recorded burglary around Cranbrook is low by Kent standards, but in July 2025 Kent Police charged a suspect over six house burglaries in Ashford, Cranbrook and Tonbridge, and rural theft of tools and machinery is a long-running concern in the Weald. A locked gate with a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> slows a vehicle leaving and records it.
            </p>
          </TownSection>

          <TownSection title="Dropped Kerbs and the A229 and A262">
            <p>
              Kent County Council is the highway authority and handles dropped kerbs. A new access onto a classified road such as the A229 or A262 also needs planning permission. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, the highway authority can require any gate that opens outwards over the road to be altered, so roadside gates must swing inwards or slide.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Weald Homes"
            note="Oak and iroko suit the farmhouses and oasts; painted metal suits a few town houses."
          />

          <FAQ faqs={faqs} title="Cranbrook Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
