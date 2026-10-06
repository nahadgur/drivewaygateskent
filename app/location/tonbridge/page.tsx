import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('tonbridge')!;
const description = 'Driveway and electric gates in Tonbridge: the Medway floodplain, a council refusal over gate set-back, Green Belt villages, Quarry Hill, and what an electric gate costs to run.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Tonbridge, Kent',
  description,
  path: '/location/tonbridge/',
});

const faqs = [
  {
    question: 'How far back should a driveway gate be from the road in Tonbridge?',
    answer: 'Far enough for a car to stand completely off the road while the gate opens. In 2014 the borough council refused an access at East Malling partly because a gate set only 2.5 metres back, within 5 metres of a junction, was judged a significant highway safety hazard. On a busy road, plan for a longer set-back.',
  },
  {
    question: 'How much does an electric gate cost to run?',
    answer: 'Less than most people expect. The motor only draws real power for the few seconds the gate moves. Most of the annual cost is standby power for the control board, receiver, photocells and any intercom. Ask the installer for the standby wattage and multiply by the hours in a year and your unit rate.',
  },
  {
    question: 'Is my Tonbridge street at risk of flooding a gate motor?',
    answer: 'Parts of the town sit on the Medway floodplain. If your property is in a flood zone, avoid an underground motor chamber, mount the control box well above ground level, and choose above-ground arm motors.',
  },
  {
    question: 'Do I need planning permission for gates in Hildenborough or Hadlow?',
    answer: 'Both have conservation areas, and much of the countryside around them is Green Belt. A replacement gate within the permitted development height limits is usually fine, but a new entrance onto a rural lane, or a tall or suburban-looking gate, can be refused. Check with Tonbridge and Malling Borough Council first.',
  },
  {
    question: 'Who approves a new access onto the A26 in Tonbridge?',
    answer: 'Kent County Council approves the dropped kerb as highway authority, and because the A26 is a classified road, the new access also needs planning permission from Tonbridge and Malling Borough Council.',
  },
  {
    question: 'What gate suits a Quarry Hill house?',
    answer: 'Quarry Hill is a conservation area on rising ground south of the river. Painted metal gates on brick piers suit its older houses, and the slope often calls for rising hinges or a sliding gate that runs across the drive.',
  },
];

export default function TonbridgePage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Tonbridge"
        image="/images/gates/gate-steel-installation-two-engineers-suburban.png"
        intro={
          <>
            <p>Tonbridge sits on the Medway floodplain inside a borough that is mostly Green Belt, so where you put a gate, and how far back, matters as much as what it looks like.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Living on the Medway Floodplain">
            <p>
              The Medway and its tributaries run through Tonbridge and Malling, and a large part of the borough lies in flood zones, including the town centre (<a href="https://democracy.tmbc.gov.uk/documents/s91467/CH03+Spatial+Characteristics+of+the+Borough.pdf" className={linkClass} rel="noopener noreferrer" target="_blank">Tonbridge and Malling Borough Council</a>). Upgrades to the Leigh flood storage barrier and the Hildenborough embankment, west of the town, were due to finish by winter 2025 to 2026, which reduces the risk for many low-lying streets but does not remove it.
            </p>
            <p>
              For a gate, flood risk changes the kit. An underground motor sits in a buried chamber that fills with water in a flood and is often ruined. On properties in or near a flood zone, installers fit arm motors above ground, mount the control box high on a pier or wall, and use sealed connectors. After any flood, have the gate&apos;s <Link href="/services/gate-repair-and-maintenance/" className={linkClass}>safety devices checked</Link> before you use it again.
            </p>
          </TownSection>

          <TownSection title="Set-Back Lessons From an East Malling Refusal">
            <p>
              One of the clearest local examples of how highways officers view gates comes from elsewhere in the borough. In July 2014 the council&apos;s planning committee refused new paddock gates and an access on Wateringbury Road, East Malling (TM/13/03793/FL). One reason was that the gates were set only 2.5 metres back, with the access within 5 metres of a junction, which the committee called a significant highway safety hazard. The other was that the gates and wide hardstanding looked suburban and out of place on a rural lane.
            </p>
            <p>
              The same thinking applies in Tonbridge. A car waiting for a gate should stand fully off the road, and on a rural lane the entrance should look like it belongs there.
            </p>
          </TownSection>

          <TownSection title="Green Belt and the Downs Across the Borough">
            <p>
              The council&apos;s own figures put 71% of the borough in the Metropolitan Green Belt and 28% in a protected landscape: the Kent Downs to the north and the edge of the High Weald south of the town. Inside Tonbridge itself this rarely matters for a replacement gate. On the lanes towards Hildenborough, Hadlow, Shipbourne and Plaxtol it can decide whether a new entrance is acceptable.
            </p>
          </TownSection>

          <TownSection title="Quarry Hill and the Historic Centre">
            <p>
              The town has three conservation areas of its own: the historic centre around the castle, Quarry Hill on the rising ground south of the station, and Haysden by the river. The council has no Article 4 directions on the national register, but in a conservation area a tall solid gate across an old frontage is still likely to draw comment. Painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gates</Link> on brick piers suit Quarry Hill, where the slope often makes a sliding gate or rising hinges the better choice.
            </p>
          </TownSection>

          <TownSection title="Hildenborough, Hadlow and Shipbourne">
            <p>
              Hildenborough, west of the town, is a commuter village with two conservation areas, Hildenborough and Coldharbour, set in the Green Belt. Hadlow, to the east, has its own conservation area and another at The Freehold. Shipbourne and Plaxtol, on the edge of the Kent Downs, are smaller villages of older houses on generous plots. In all of them, timber gates or simple painted metal on brick piers are what fits, and a long drive often makes automation with a <Link href="/services/automated-gate-systems/" className={linkClass}>video intercom</Link> worthwhile.
            </p>
          </TownSection>

          <TownSection title="What an Electric Gate Costs to Run">
            <p>
              A question that comes up often in Tonbridge is what an electric gate costs to run once it is in. A gate motor draws real power only for the 15 to 30 seconds each cycle takes. Most of the electricity a gate uses over a year goes on standby: the control board, radio receiver, photocells and any intercom are on all the time.
            </p>
            <p>
              To work out your own figure, ask the installer for the system&apos;s standby wattage, multiply it by 8,760 hours, divide by 1,000 to get kilowatt hours, and multiply by your unit rate. Add a small allowance for the motor itself. A video intercom with a screen indoors adds more than the gate. Running costs are small next to the <Link href="/blog/how-much-do-driveway-gates-cost-kent-2026/" className={linkClass}>price of the installation</Link> itself.
            </p>
          </TownSection>

          <TownSection title="Burglaries Across Tonbridge, Sevenoaks and Tunbridge Wells">
            <p>
              Kent Police charged three people over a series of 12 burglaries across Tonbridge, Sevenoaks and Tunbridge Wells between October 2023 and January 2024, in which car keys and cars were taken on three occasions. An automated gate that closes behind you slows a car leaving the drive, and keeping keys well away from the door matters just as much.
            </p>
          </TownSection>

          <TownSection title="New Access Onto the A26 and A227">
            <p>
              Kent County Council is the highway authority. A new access onto a classified road such as the A26, A227 or B245 needs planning permission as well as dropped kerb approval. Permitted development caps a gate beside a road used by vehicles at 1 metre in height, and the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a> does not allow gates to open outwards over the road or pavement.
            </p>
          </TownSection>

          <TownSection title="Haysden and the Riverside">
            <p>
              Haysden, west of the town, is a small riverside conservation area beside the flood storage area at Leigh. Houses here sit close to the water, so the same rules apply as on the floodplain streets: no buried motor chamber, a control box mounted high, and timber or simple metal gates that suit a riverside lane.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Tonbridge Homes"
            note="Arm motors suit the floodplain streets; hardwood suits the Green Belt villages."
          />

          <FAQ faqs={faqs} title="Tonbridge Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
