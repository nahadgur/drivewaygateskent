import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('sevenoaks')!;
const description = 'Driveway and electric gates in Sevenoaks: the Kemsing Article 4, ragstone walls and black railings in the character guidance, Green Belt refusals, and gates for Kippington and Wildernesse.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Sevenoaks, Kent',
  description,
  path: '/location/sevenoaks/',
});

const faqs = [
  {
    question: 'Do I need planning permission for new gates in Kemsing?',
    answer: 'Very likely. Sevenoaks District Council has brought forward an Article 4 direction for the Kemsing Conservation Area that removes the permitted development right to put up or alter gates, fences and walls, to lay hard surfaces, and to demolish boundaries. Check with the council whether it is in force before you commission a gate.',
  },
  {
    question: 'Can I add electric gates to a house in the Green Belt?',
    answer: 'Replacing gates on an existing domestic entrance is usually straightforward within the permitted development height limits. New entrance gates and fencing on open land are treated differently: in 2021 the council refused fencing and entrance gates at Blueberry Lane, Knockholt, as inappropriate development in the Green Belt that harmed openness and the landscape.',
  },
  {
    question: 'What gate style suits a Kippington or Wildernesse house?',
    answer: 'Both are conservation areas of large detached houses in big plots. The council\'s character guidance favours traditional ragstone and brick walls with black metal railings and gates, so painted metal gates on ragstone or brick piers usually fit best, often with underground motors to keep the entrance uncluttered.',
  },
  {
    question: 'Does a new access onto the A25 need planning permission?',
    answer: 'Yes. A new vehicle access onto a classified road such as the A25, A224 or A225 needs planning permission as well as a dropped kerb approval from Kent County Council, the highway authority.',
  },
  {
    question: 'How far back should a gate be from the A25?',
    answer: 'There is no single published figure, but highways officers look for enough space for a car to pull fully off the road before the gate opens. On a busy classified road that usually means setting the gate well back from the pavement, and a new access there also needs planning permission.',
  },
  {
    question: 'Is solar power an option for a long Wildernesse drive?',
    answer: 'Yes, where the gate is far from the house and trenching would cross a mature garden. A solar panel and battery can run a gate with light to moderate use. Size the system for winter, when short days give the least charge.',
  },
];

export default function SevenoaksPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Sevenoaks"
        image="/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png"
        intro={
          <>
            <p>Most of Sevenoaks District is Green Belt and much of it is National Landscape, so a gate here is as much a planning question as a design one.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Green Belt and the Kent Downs Around the Town">
            <p>
              The council&apos;s 2025 summary of its emerging Local Plan puts 93% of the district in the Metropolitan Green Belt and more than 60% in the Kent Downs or High Weald National Landscape (<a href="https://engagement.sevenoaks.gov.uk/strategic-planning/emerginglocalplan/user_uploads/06-non-technical-summary-2025_web.pdf" className={linkClass} rel="noopener noreferrer" target="_blank">Sevenoaks District Council</a>). Inside the town that rarely matters for a replacement gate. Outside it, on lanes towards Knockholt, Ide Hill and Shoreham, it can decide whether a new entrance is allowed at all.
            </p>
            <p>
              In 2021 the council refused fencing and entrance gates on land at Blueberry Lane, Knockholt (reference 21/01388/FUL), finding them inappropriate development that harmed the openness of the Green Belt and the landscape. If you are forming a new entrance in open countryside, talk to the planning team before you pay a deposit.
            </p>
          </TownSection>

          <TownSection title="The Kemsing Article 4 Direction">
            <p>
              Sevenoaks District Council has brought forward an Article 4 direction for the Kemsing Conservation Area. It removes three permitted development rights: putting up or altering a gate, fence or wall; laying a hard surface; and demolishing a boundary. The council consulted on it in autumn 2024, and its <a href="https://engagement.sevenoaks.gov.uk/strategic-planning/kemsing-conservation-area-article-4-direction/" className={linkClass} rel="noopener noreferrer" target="_blank">consultation page</a> sets out the detail. In practice, a new driveway gate in Kemsing should be treated as needing planning permission.
            </p>
          </TownSection>

          <TownSection title="Ragstone Walls and Black Railings">
            <p>
              The council&apos;s Residential Character Area Assessment guidance, adopted in 2012, asks for traditional ragstone and brick walls, black metal railings and gates to be kept or reinstated. Where a front garden becomes parking, it asks owners to keep as much of the front boundary as possible.
            </p>
            <p>
              That points to a recognisable Sevenoaks entrance: painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gates</Link> between ragstone or brick piers, with the boundary wall kept either side rather than opened up across the full width of the plot.
            </p>
          </TownSection>

          <TownSection title="Kippington, Wildernesse and the Large-Plot Estates">
            <p>
              Kippington and Oakhill Road became a conservation area in 1991 and Wildernesse, on the former Wildernesse Estate, in 1994. Both are areas of large detached houses set well back on long drives. Here the gate is often 30 metres or more from the house, so <Link href="/services/automated-gate-systems/" className={linkClass}>automation with a video intercom</Link> and phone access does most of the work, and underground motors keep the entrance clean.
            </p>
            <p>
              Closer to the station, the Victorian and inter-war streets have shorter frontages where a single sliding gate or a narrow pair is the practical fit.
            </p>
          </TownSection>

          <TownSection title="Keys Taken From Hallways">
            <p>
              Kent Police charged two people over keyless car thefts after a burglary near Brittains Lane in April 2025, and in 2026 charged a man over car thefts in Sevenoaks and Otford where keys were taken from inside the home first. A shut gate slows a stolen car leaving the drive, and a camera intercom records the attempt. Keep keys out of sight of the front door too.
            </p>
          </TownSection>

          <TownSection title="Riverhead, Chipstead and Bessels Green">
            <p>
              West of the town centre, Riverhead, Chipstead, Bessels Green and Dunton Green have their own conservation areas or character areas in the council&apos;s guidance, with a mix of village cores, inter-war houses and post-war estates. The same principle applies as in town: keep the front boundary where you can, and use materials that match the street. A post-war house on a wide plot can take a modern aluminium sliding gate without looking out of place, while a cottage in the Chipstead village core suits a simple timber gate.
            </p>
            <p>
              Otford and Seal, to the north and east, are village conservation areas too. Both sit close to the Kent Downs scarp, and drives off the lanes there often rise or fall sharply from the road.
            </p>
          </TownSection>

          <TownSection title="A New Local Plan and 1,145 Homes a Year">
            <p>
              Sevenoaks District Council consulted on its draft Local Plan between 23 October and 11 December 2025, with a revised plan due in 2026. It is planning under a government target of 1,145 homes a year, a rise of 63% on the old figure, for a plan period running from 2027 to 2042. With most of the district in the Green Belt, some of that growth will come from land released at the edge of settlements.
            </p>
            <p>
              For homeowners the practical point is that new estates arrive with their own planning conditions. If you buy on one, check whether the permission removed permitted development rights for front boundaries before you plan a gate.
            </p>
          </TownSection>

          <TownSection title="Main Roads, Dropped Kerbs and Set-Back">
            <p>
              Kent County Council is the highway authority, and any new vehicle access onto the A25, A224 or A225 also needs planning permission. On busy roads, highways officers look for space for a car to pull fully off the carriageway before the gate, so a gate set close to the pavement on the main approaches into town can be refused even where the gate itself is modest. The <a href="https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2" className={linkClass} rel="noopener noreferrer" target="_blank">permitted development rules</a> still cap a roadside gate at 1 metre without permission.
            </p>
            <p>
              Long drives in Wildernesse and Kippington also mean long cable runs. Ask whether the installer will trench mains power to the gate, use an existing supply in an outbuilding, or fit a <Link href="/blog/off-grid-power-for-gates-on-rural-kent-farm-drives/" className={linkClass}>solar and battery system</Link> where trenching would cross a mature garden.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Choosing a Gate for a Sevenoaks Property"
            note="Painted metal on ragstone suits the conservation areas; hardwood suits the village lanes and the Green Belt edge."
          />

          <FAQ faqs={faqs} title="Sevenoaks Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
