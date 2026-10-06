import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('gravesend')!;
const description = 'Driveway and electric gates in Gravesend and Gravesham: Article 4 conservation areas that control front gates and walls, Windmill Hill, Green Belt villages, Ebbsfleet and the Lower Thames Crossing.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Gravesend, Kent',
  description,
  path: '/location/gravesend/',
});

const faqs = [
  {
    question: 'Do I need planning permission for a front gate in Windmill Hill?',
    answer: 'Yes. Windmill Hill is one of Gravesham\'s Article 4 conservation areas, where building or altering a gate, fence or wall on an elevation facing a road, footpath or open space needs planning permission. The same applies to laying a new hard surface.',
  },
  {
    question: 'Which Gravesham areas have the Article 4 controls on gates?',
    answer: 'Windmill Hill North and South, Milton Place, Upper Windmill Street, Darnley Road, King Street, Pelham Road and The Avenue, Riverside, Overcliffe, Hook Green, Cobham, Meopham Green and The Street, and Chestnut Green. The council\'s 2020 guide sets out the detail.',
  },
  {
    question: 'Why can\'t a planning search tool find these Article 4 directions?',
    answer: 'Gravesham\'s Article 4 directions are not on the national planning data register, so tools that rely on it can show none. The council\'s own Article 4 guide is the reliable source.',
  },
  {
    question: 'Can I put gates on a house in Cobham or Meopham?',
    answer: 'Both are in the Green Belt and partly in the Kent Downs National Landscape, and Cobham and Meopham Green have Article 4 conservation areas. In those areas a new gate needs planning permission; elsewhere in the villages, keep to the permitted development heights and a design that suits a rural lane.',
  },
  {
    question: 'Will a gate by the river at Gravesend rust?',
    answer: 'The Thames here is a tidal estuary, so the air is damp and slightly salty rather than full sea spray. Hot-dip galvanising under a powder coat, or aluminium, is still the sensible specification for a riverside gate.',
  },
  {
    question: 'Who approves a new access onto the A226 or A227?',
    answer: 'Kent County Council approves the dropped kerb as highway authority, and because both are classified roads, the new access also needs planning permission from Gravesham Borough Council.',
  },
];

export default function GravesendPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Gravesend"
        image="/images/gates/gate-steel-sage-green-swing-period-brick-spring.png"
        intro={
          <>
            <p>Gravesham has more conservation areas with Article 4 controls on front gates and walls than almost anywhere in Kent, so in much of old Gravesend a new gate needs planning permission.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Thirteen Article 4 Conservation Areas">
            <p>
              Gravesham Borough Council&apos;s <a href="https://www.gravesham.gov.uk/downloads/file/347/article-4-direction-2020" className={linkClass} rel="noopener noreferrer" target="_blank">Article 4 guide</a> lists the conservation areas where householder rights have been removed. In them, building walls and gates, altering gates, fences and walls, and laying hard surfaces all need planning permission. The controls apply to single-family houses, on any elevation facing a road, footpath or open space.
            </p>
            <p>
              The areas, with the dates their directions were confirmed, are Windmill Hill North (1998), Milton Place (1999, extended 2009), Upper Windmill Street (1999, extended 2010), Darnley Road (2000), Windmill Hill South (2008), King Street (2008), Pelham Road and The Avenue (2008), Riverside (2008), Overcliffe (2008), Hook Green (2009), Cobham (2009), Meopham Green and The Street (2009), and Chestnut Green (2010).
            </p>
            <p>
              One practical warning: these directions are not on the national planning data register, so online tools that rely on it will tell you there are none. The council&apos;s own guide is the source to trust.
            </p>
          </TownSection>

          <TownSection title="Windmill Hill Boundary Walls">
            <p>
              Windmill Hill rises behind the town centre, and its conservation area covers about 17 hectares of sloping streets. The council&apos;s appraisal names boundary walls as a key issue for the area&apos;s character. In practice that means keeping existing walls, building any new piers to match, and choosing a gate that lets the wall remain the main feature. On the slope, rising hinges or a gate shaped to the gradient avoid a leaf that catches on the drive.
            </p>
            <p>
              If you are not sure whether your house falls inside the boundary, the council&apos;s appraisal for each conservation area includes a map showing the line street by street, and the planning team can confirm it before you commission drawings. An installer who works in Gravesend regularly should raise this at the survey without being asked; if they do not, ask them directly, because a gate fitted without the permission it needed can be the subject of enforcement.
            </p>
          </TownSection>

          <TownSection title="Pelham Road, The Avenue and Darnley Road Villas">
            <p>
              The Pelham Road and The Avenue conservation area, about 8 hectares, along with Darnley Road and Overcliffe, holds many of Gravesend&apos;s larger Victorian and Edwardian houses. Many still have front walls and gate piers from when they were built. Painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gates</Link> in black or a dark green, hung between the existing piers, are usually the right answer, and they need planning permission under the Article 4 controls.
            </p>
          </TownSection>

          <TownSection title="Green Belt and the Kent Downs South of the Town">
            <p>
              About 77% of Gravesham is Green Belt, second only to Sevenoaks in Kent according to the council, and about a quarter of the borough lies in the Kent Downs National Landscape, around Cobham, Meopham and Luddesdown. Here the typical project is a house on a rural lane with a long drive. <Link href="/services/wooden-driveway-gates/" className={linkClass}>Hardwood gates</Link> fit the villages, and a new entrance onto a lane is judged more strictly than a replacement gate.
            </p>
          </TownSection>

          <TownSection title="A New Local Plan and Green Belt Change">
            <p>
              The council consulted on the final stage of its Local Plan between April and May 2026, saying housing needs cannot be met within existing urban areas and that Green Belt boundaries must change. Its government target is 676 homes a year. New estates on released land will come with their own rules on front gardens, so buyers there should check the deeds and the permission before planning a gate.
            </p>
          </TownSection>

          <TownSection title="Ebbsfleet, Northfleet and the Lower Thames Crossing">
            <p>
              West of the town, Ebbsfleet Garden City is planned for about 15,000 homes across Gravesham and Dartford, with the Ebbsfleet Development Corporation handling planning in its area. Northfleet has its own conservation areas at The Hill and Lansdowne Square, right next to the new build. East of Gravesend, construction of the Lower Thames Crossing began in 2026 after approval in 2025. For new-build frontages, an aluminium <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding gate</Link> is the usual fit.
            </p>
          </TownSection>

          <TownSection title="Riverside Gates and Estuary Air">
            <p>
              The Riverside conservation area and the Thames frontage at Denton face a tidal estuary rather than the open sea. The air is damp and carries some salt, so it is still worth specifying hot-dip galvanised steel under a powder coat, or aluminium, with stainless fixings. A plain powder coat over bare steel will show rust at the edges sooner here than on the hill.
            </p>
          </TownSection>

          <TownSection title="A Recent Fence and Gate Application">
            <p>
              Even outside the Article 4 areas, a taller boundary goes through planning. In July 2026 an application at Sandown Road (20260675) sought an extension along with a 1.8 metre boundary fence and gate, car parking, and a longer dropped kerb. A gate above 1 metre beside a road always needs permission, and the dropped kerb goes to Kent County Council, the highway authority. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, gates may not open outwards over the road or pavement.
            </p>
          </TownSection>

          <TownSection title="Hard Surfaces Count Too">
            <p>
              The Gravesham Article 4 controls do not stop at walls and gates. Laying a new hard surface in front of a house in one of these conservation areas also needs planning permission. That matters because a new gate often comes with a new or wider drive. If you plan both, put them in one application, and expect the council to look for permeable paving and for as much of the front wall and planting as possible to stay.
            </p>
            <p>
              Outside the Article 4 areas, the national permitted development rules still apply to the drive: a new hard surface over 5 square metres in a front garden must be permeable or drain to a lawn or border, or it needs permission.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Gravesham Homes"
            note="Painted metal suits the Article 4 streets; hardwood suits Cobham, Meopham and the villages."
          />

          <FAQ faqs={faqs} title="Gravesend Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
