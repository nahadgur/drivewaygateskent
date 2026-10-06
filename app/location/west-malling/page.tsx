import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('west-malling')!;
const description = 'Driveway and electric gates in West Malling, East Malling, Aylesford, Larkfield, Snodland and Kings Hill: conservation areas, recent gate approvals, the Medway floodplain and driveway car theft.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in West Malling, Kent',
  description,
  path: '/location/west-malling/',
});

const faqs = [
  {
    question: 'Will I get permission for new front gates in West Malling?',
    answer: 'Well-designed gates are routinely approved. In 2017 Tonbridge and Malling Borough Council granted a new front boundary wall and entrance gates at London Road, West Malling, and in 2021 it approved replacement front gates on The Heath, East Malling.',
  },
  {
    question: 'Can I have gates at a listed house near West Malling?',
    answer: 'Yes, with listed building consent. In 2026 the council approved entrance gates on the drive at Aylesford Priory, inside the estate boundary, and replacement entrance walls and gates have been approved at listed houses in Ryarsh and Trottiscliffe.',
  },
  {
    question: 'Is my Aylesford or Snodland home at risk of flooding a gate motor?',
    answer: 'Aylesford, Larkfield and Snodland sit on the Medway floodplain and are heavily flood-mapped, unlike West Malling itself. Near the river, avoid underground motor chambers and mount the control box high.',
  },
  {
    question: 'Will a gate post move on Gault clay at Snodland?',
    answer: 'It can. Gault clay shrinks and swells with the seasons. Deep, reinforced footings keep posts upright, and a cantilever sliding gate avoids a ground track that might tilt.',
  },
  {
    question: 'Are cars stolen from driveways around Snodland?',
    answer: 'It happens. Kent Police recovered a Bentley stolen from a driveway near Snodland after a pursuit, and in March 2026 a van with two motorbikes inside was taken from Saltings Road and recovered within hours with help from doorbell footage.',
  },
  {
    question: 'Can I add gates to a house at Kings Hill?',
    answer: 'Check your title deeds and the estate rules first. Kings Hill is a planned new town on the former RAF West Malling airfield, and front garden layouts there are usually controlled by the original permissions and covenants.',
  },
];

export default function WestMallingPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in West Malling"
        image="/images/gates/gate-wooden-oak-open-interior-tree-lined-lane.png"
        intro={
          <>
            <p>From West Malling&apos;s listed high street to the Medway floodplain at Aylesford and Snodland, this corner of Kent asks very different things of a gate street by street.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="A Market Town With 220 Listed Buildings">
            <p>
              Around 220 listed buildings stand within a few kilometres of West Malling, most of them along its high street and in the surrounding villages. The conservation areas run well beyond the town: West Malling, East Malling Village, Mill Street, Bradbourne, Clare Park and Blacklands, New Barns and Broadwater Farm, Offham, Aylesford, Holtwood, Ditton, Cobdown Farm, Larkfield Church, Snodland, Holborough Mill and Paddlesworth (<a href="https://www.planning.data.gov.uk/entity.json?dataset=conservation-area&longitude=0.4090&latitude=51.2930" className={linkClass} rel="noopener noreferrer" target="_blank">planning data register</a>).
            </p>
            <p>
              No Article 4 directions for these centres appear on the national register, so most homes fall under the normal permitted development limits. A listed house still needs listed building consent for any change to its gates or walls.
            </p>
          </TownSection>

          <TownSection title="Recent Gate Approvals Across the Mallings">
            <p>
              Tonbridge and Malling Borough Council has a steady record of approving gates that suit their setting. It granted a new front boundary wall and entrance gates at 233 London Road, West Malling, in 2017 (17/01246/FL), and replacement front gates at Rayfield Farm on The Heath, East Malling, in 2021 (21/01436/FL). In July 2026 it approved entrance gates on the driveway at Aylesford Priory, set inside the estate boundary, with listed building consent (26/00822/FL and 26/00823/LB).
            </p>
            <p>
              Out in the villages, replacement entrance walls and gates were approved at the listed Ryarsh Place, rebuilt gates at Bulawayo House in Offham, and a new 2 metre brick wall with repositioned gates at Trosley Court in Trottiscliffe. The pattern is that good design gets through.
            </p>
          </TownSection>

          <TownSection title="The Medway Floodplain at Aylesford, Larkfield and Snodland">
            <p>
              West Malling itself is on sandstone and barely flood-mapped. Aylesford, Larkfield and Snodland are another story: they sit on the Medway floodplain, with river terrace gravels at Aylesford and Larkfield and alluvium at Snodland, and the national flood maps cover large parts of all three. Near the river, check the <a href="https://check-for-flooding.service.gov.uk/" className={linkClass} rel="noopener noreferrer" target="_blank">Environment Agency flood map</a> before trenching cables, avoid underground motor chambers, and mount the control box well above ground.
            </p>
          </TownSection>

          <TownSection title="Gault Clay Under Snodland">
            <p>
              Snodland is on Gault mudstone, a clay that shrinks in dry summers and swells in wet winters. Gate posts in shallow footings can lean over a few seasons, and a sliding gate&apos;s ground track can tilt. Deep, reinforced footings and a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link> that runs clear of the ground deal with both.
            </p>
          </TownSection>

          <TownSection title="The Downs Scarp at Trottiscliffe, Ryarsh and Birling">
            <p>
              North of the Mallings, the Kent Downs National Landscape follows the scarp through Trottiscliffe, Ryarsh, Birling and Paddlesworth, and the Green Belt covers the edges of West Malling, Larkfield and Snodland. Houses on the scarp lanes are often listed farmhouses and manor houses on long, rising drives. <Link href="/services/wooden-driveway-gates/" className={linkClass}>Oak gates</Link> or simple painted metal on brick piers suit them, and on a rising drive the leaves need rising hinges or a shape that follows the slope.
            </p>
          </TownSection>

          <TownSection title="Kings Hill and the Growth Proposals">
            <p>
              Kings Hill, built from the 1990s on the former RAF West Malling airfield, is a planned new town where front gardens are usually controlled by the original permissions and covenants. Check the deeds before planning a gate. The emerging Local Plan adds around 890 homes on Broadwater Farm towards Pikey Lane and the New Barns conservation area, and around 420 across the East Malling Research land at New Road and Cherry Orchard, Ditton. After the council voted in September 2026 not to progress its plan, the Housing Minister directed it to consult and submit the plan by 31 December 2026.
            </p>
          </TownSection>

          <TownSection title="Driveway Car Theft Around Snodland">
            <p>
              Kent Police recovered a Bentley stolen from a driveway near Snodland after a pursuit, and in March 2026 a van with two motorbikes inside was taken from Saltings Road, Snodland, and recovered within hours with help from doorbell footage. Larkfield and Leybourne recorded the most burglaries of the five centres in the year to August 2026. A closed automated gate slows a vehicle leaving the drive, and a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> records it, much as the doorbell camera did at Saltings Road.
            </p>
          </TownSection>

          <TownSection title="East Malling and The Heath">
            <p>
              East Malling has two conservation areas, the village and Mill Street, while The Heath has larger detached houses on generous plots where automated gates with long drives are common. In the village core, painted metal or timber gates in keeping with the older cottages fit best. On The Heath, a pair of swing gates with underground motors suits the bigger houses.
            </p>
          </TownSection>

          <TownSection title="The A20 and Highway Rules">
            <p>
              Kent County Council is the highway authority across the Mallings, including Snodland, even though it borders Medway. A new access onto a classified road such as the A20 London Road or the A228 needs planning permission as well as a dropped kerb. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, the highway authority can require any gate that opens outwards over the road to be altered, so gates must open inwards or slide.
            </p>
          </TownSection>

          <TownSection title="Offham and the Green Belt Villages">
            <p>
              West of the town, Offham is a Green Belt village with its own conservation area, where a garage and rebuilt entrance gates were approved at Bulawayo House on Teston Road (23/00226/FL). Residents have also petitioned for the Green Belt to be extended between West Malling, East Malling and Kings Hill, a sign of how strongly the gaps between the settlements are valued.
            </p>
            <p>
              In the Green Belt, the test for a new gate is whether it keeps the area open. Modest gates, open designs and keeping hedges either side of the entrance help an application. Replacing an existing gate within the permitted development height limits is usually straightforward.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for the Mallings"
            note="Oak suits the scarp villages; arm motors suit the floodplain; aluminium suits Kings Hill."
          />

          <FAQ faqs={faqs} title="West Malling Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
