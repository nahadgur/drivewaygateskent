import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('westerham')!;
const description = 'Driveway and electric gates in Westerham, Brasted and Edenbridge: two National Landscapes and the Green Belt, recent gate approvals and refusals, listed estates, and steep Greensand ridge drives.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Westerham, Kent',
  description,
  path: '/location/westerham/',
});

const faqs = [
  {
    question: 'Will I get permission for new gates in the Green Belt near Westerham?',
    answer: 'It depends on the design and the site. Sevenoaks District Council granted new gates with pillars at Farley Grange in 2026, but refused two pairs of electric gates with brick piers at Knockholt in 2025. Modest gates that suit a rural entrance are far more likely to succeed than large, formal ones.',
  },
  {
    question: 'Do gates at a listed house need two applications?',
    answer: 'Usually, yes: householder planning permission and listed building consent. At Foxwold on Pipers Lane, Brasted Chart, new metal entrance gates went through both, and both were granted in 2025.',
  },
  {
    question: 'Which gate works on a steep drive on Hosey Hill or Crockham Hill?',
    answer: 'A swing gate on a steep drive needs rising hinges or a leaf shaped to the slope so it does not catch the ground. A standard sliding gate needs a level run, so on a slope a cantilever sliding gate, which runs clear of the ground, is often the better answer.',
  },
  {
    question: 'Is Westerham in the Kent Downs or the Surrey Hills?',
    answer: 'Both are close. Westerham sits on the border, and the area around it touches both the Kent Downs and the Surrey Hills National Landscapes, as well as the Green Belt. Planning for gates is handled by Sevenoaks District Council.',
  },
  {
    question: 'Are cars stolen from driveways in Westerham?',
    answer: 'Vehicle crime around Westerham runs at more than double the rate of burglary in recent police figures. A closed automated gate slows a stolen car leaving the drive, and a camera intercom records it.',
  },
  {
    question: 'Who approves a new access onto the A25 at Brasted?',
    answer: 'Kent County Council approves the dropped kerb as highway authority. The A25 is a classified road, so a new access also needs planning permission from Sevenoaks District Council.',
  },
];

export default function WesterhamPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Westerham"
        image="/images/gates/gate-aerial-estate-closed-autumn-trees.png"
        intro={
          <>
            <p>Westerham sits on the Kent and Surrey border in the Green Belt, with two National Landscapes around it and steep drives up the Greensand ridge.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Two National Landscapes and the Green Belt">
            <p>
              Few Kent towns sit where two protected landscapes meet. Around Westerham, both the Kent Downs and the Surrey Hills National Landscapes reach close to the town, and the Metropolitan Green Belt covers the whole area, from Sevenoaks District across the county line into Tandridge (<a href="https://www.planning.data.gov.uk/entity.json?dataset=area-of-outstanding-natural-beauty" className={linkClass} rel="noopener noreferrer" target="_blank">planning data register</a>). Planning for gates is handled by Sevenoaks District Council.
            </p>
            <p>
              None of this stops a homeowner replacing a gate within the permitted development heights. It matters when the gate is new, tall, or part of a new entrance onto a rural lane.
            </p>
          </TownSection>

          <TownSection title="Recent Gate Approvals and Refusals">
            <p>
              Local decisions show where the line falls. In 2026 the council granted a new driveway and vehicle access with two gates and pillars, plus fencing along the front boundary, at Farley Grange on East Farley Lane (26/01043/HOUSE). Earlier, new side entrance gates and piers were granted at French Street House (19/01655/HOUSE), and a new house at Little Betsoms Farm was approved with a new driveway, access and entrance gates (22/02873/FUL).
            </p>
            <p>
              On the other side, in 2025 the council refused two pairs of electric gates with brick piers at a house on Main Road, Knockholt (25/00681/HOUSE). The pattern across the district is that gates suited to a rural entrance get through, and grand, formal entrances in open countryside are the ones at risk. A conversation with the planning team before you commission drawings is time well spent.
            </p>
          </TownSection>

          <TownSection title="Listed Estates at Brasted Chart">
            <p>
              Around 130 listed buildings stand within a few kilometres of Westerham, from the town centre to country estates on the ridge. Where a house is listed, gates usually need both householder planning permission and listed building consent. At Foxwold, on Pipers Lane in Brasted Chart, new metal entrance gates went through both applications in 2025 and both were granted. For a listed estate, budget for drawings that show the gates, piers and any motor housings in detail, and allow time for consent before fabrication.
            </p>
          </TownSection>

          <TownSection title="Steep Drives on the Greensand Ridge">
            <p>
              The town centre sits on Folkestone Formation sandstone, with silt along the headwaters of the Darent. South of the town, the Greensand ridge rises steeply through Crockham Hill, Toys Hill and Hosey Hill. A 2016 scheme on Hosey Hill needed its access track cut into the slope and was refused, which gives a sense of the gradients.
            </p>
            <p>
              On a slope, a swing gate that opens uphill catches the ground unless it is <Link href="/blog/can-you-install-driveway-gates-on-a-sloped-driveway/" className={linkClass}>hung on rising hinges or shaped to the gradient</Link>. A standard sliding gate needs a level run, so on steep frontages a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link> that runs clear of the ground is often the better choice.
            </p>
          </TownSection>

          <TownSection title="Brasted, Crockham Hill and French Street">
            <p>
              Brasted, on the A25 east of the town, mixes village houses with small modern closes; at Horizon Close, sliding gates replaced a timber gate (18/03481/FUL), and entrance gates were approved at Daisy Meadow on Chart Lane (20/03155/HOUSE). Crockham Hill and French Street are hamlets of large detached houses on the ridge, with entrance gates approved at Spencely House on Goodley Stock Road (18/03826/HOUSE). Across these villages, <Link href="/services/wooden-driveway-gates/" className={linkClass}>oak gates</Link> on brick piers suit the lanes, and on the bigger houses automation with a video intercom makes sense on long drives.
            </p>
          </TownSection>

          <TownSection title="Edenbridge to the South">
            <p>
              Edenbridge, south of the ridge in the Eden valley, is also in Sevenoaks District and the Green Belt. Its historic High Street has a conservation area, and the surrounding countryside is dotted with farmhouses and converted barns. As in Westerham, modest timber or painted metal gates suit the town, and new entrances onto rural lanes are judged carefully.
            </p>
          </TownSection>

          <TownSection title="Vehicle Crime Around the Town">
            <p>
              In police figures for the year to August 2026, vehicle crime within a mile of the town centre ran at more than double the level of burglary. Cars parked on open drives near the A25 are an easy target. An automated gate that closes behind you, with a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link>, keeps the car out of reach of the road and records anyone who tries the entrance.
            </p>
          </TownSection>

          <TownSection title="A New Local Plan and Small Infill Sites">
            <p>
              Sevenoaks District Council published its draft Local Plan for the final round of comments in 2026, with representations due by 17 September and examination expected in 2027. Westerham is treated as a higher-tier settlement, so some edge-of-town sites are in play, but new housing locally has mostly been small: nine homes south of the garage on London Road and four self-build plots east of Court Lodge Barn. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, every roadside gate must open inwards or slide, and Kent County Council handles dropped kerbs as highway authority.
            </p>
          </TownSection>

          <TownSection title="Designing Gates That Suit the Green Belt">
            <p>
              The Green Belt test is about openness, and gates affect it through their height, their solidity and everything that comes with them. A few choices make an application far more likely to succeed. Keep the gates no taller than they need to be, and consider an open design such as vertical bars or a five-bar pattern rather than solid boarding. Keep piers modest; a pair of oversized brick piers with lanterns reads as a suburban entrance on a country lane.
            </p>
            <p>
              Avoid widening the hard standing more than the cars need, and keep existing hedges either side of the opening. Choose colours that recede, such as dark green, black or natural oak, rather than bright finishes. Put these points in the design statement with the application, because they answer the questions the planning officer will ask.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Westerham Homes"
            note="Oak suits the ridge lanes and farmhouses; painted metal suits listed estates and the town."
          />

          <FAQ faqs={faqs} title="Westerham Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
