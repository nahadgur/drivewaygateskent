import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('maidstone')!;
const description = 'Driveway, electric and solar gates in Maidstone: ragstone piers, steep drives under the Kent Downs at Boxley and Detling, village Article 4s, and new-build estates at Heathlands and Lidsing.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Maidstone, Kent',
  description,
  path: '/location/maidstone/',
});

const faqs = [
  {
    question: 'Do solar-powered gates work in Maidstone?',
    answer: 'Yes, for light to moderate use. A solar gate runs from a battery charged by a panel, so it suits a farmhouse or a long drive in the Weald villages where running mains cable would mean a long trench. Size the panel and battery for winter, when short days give the least charge, and expect fewer daily cycles than a mains system.',
  },
  {
    question: 'Should gate piers in Maidstone be built in ragstone?',
    answer: 'Where the house or the neighbouring walls are ragstone, matching it usually looks right and is what planning officers expect in a conservation area. Kentish ragstone comes from the Hythe Beds around Maidstone, which was the main quarrying centre, so reclaimed or new stone is easy to source locally.',
  },
  {
    question: 'Are gates allowed in the Loose, Lenham or Headcorn conservation areas?',
    answer: 'These conservation areas have Article 4 directions dating from 1989 and 1998. The published records do not list which rights each one removes, so ask Maidstone Borough Council before altering a front boundary or adding gates there.',
  },
  {
    question: 'Can I add gates to a new-build house at Heathlands or Lidsing?',
    answer: 'Check your title deeds and any estate management rules first, because new-build estates often restrict changes to front gardens. Then the normal permitted development limits apply unless the planning permission for the estate removed them.',
  },
];

export default function MaidstonePage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Maidstone"
        image="/images/gates/gate-steel-sage-green-swing-period-brick-spring.png"
        intro={
          <>
            <p>Maidstone runs from steep drives under the Kent Downs to flat Weald villages and fast-growing new estates, and each part of the borough asks something different of a gate.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl">
          <TownSection title="Ragstone Piers in the County Town">
            <p>
              Kentish ragstone comes from the Hythe Beds of the Lower Greensand, and Maidstone was the centre of the trade, shipping stone down the Medway for centuries (<a href="https://kentarchaeology.org.uk/journal/112/kentish-rag-and-other-kent-building-stones" className={linkClass} rel="noopener noreferrer" target="_blank">Kent Archaeological Society</a>). Ragstone boundary walls are the local default in older streets and villages, so gate piers that match them sit naturally, especially in a conservation area.
            </p>
          </TownSection>

          <TownSection title="Steep Drives Under the Downs at Boxley and Detling">
            <p>
              About 27% of the borough lies in the Kent Downs National Landscape, along the scarp through Boxley, Detling, Thurnham and Hollingbourne. Drives there often climb steeply from the lane. A swing gate that opens uphill can catch on the slope, so installers either set the hinges to lift the leaf as it opens or fit a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link> that runs across the slope without a ground track. Our guide to <Link href="/blog/can-you-install-driveway-gates-on-a-sloped-driveway/" className={linkClass}>gates on a sloped driveway</Link> covers the options.
            </p>
          </TownSection>

          <TownSection title="Village Article 4 Directions in Loose, Lenham and Headcorn">
            <p>
              The national register lists Article 4 directions for the Loose Conservation Area (1989), Lenham (1989), Headcorn (1998) and Holy Trinity in the town (1996), as well as older directions on land north of Thurnham and east of Hollingbourne. The records do not say which rights each removes. Before changing a front wall or adding gates in these places, ask <a href="https://www.planning.data.gov.uk/entity.json?dataset=article-4-direction-area&organisation_entity=205" className={linkClass} rel="noopener noreferrer" target="_blank">Maidstone Borough Council</a> to confirm.
            </p>
          </TownSection>

          <TownSection title="Solar Gates for Weald Villages and Farm Drives">
            <p>
              Maidstone is one of the few Kent towns where people search for solar gates by name. It makes sense south of the town, in Headcorn, Staplehurst, Marden and Yalding, where farmhouses and converted barns sit at the end of long drives and trenching mains cable to the entrance is expensive. Our guide to <Link href="/blog/off-grid-power-for-gates-on-rural-kent-farm-drives/" className={linkClass}>off-grid power for rural gates</Link> sets out when solar is enough.
            </p>
          </TownSection>

          <TownSection title="Heathlands, Lidsing and New-Build Driveways">
            <p>
              The Local Plan Review adopted in March 2024 plans for a 5,000-home garden community at Heathlands and up to 2,000 homes at Lidsing. Gates on new estates are usually simpler than in the villages, but check the title deeds and any management company rules before you plan one.
            </p>
            <p>
              Kent County Council&apos;s surface water plan for Maidstone and Malling expects deep flooding in large storms in parts of the area, so ask any installer how an underground motor chamber will drain on your site.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types Across the Borough"
            note="Hardwood and painted metal suit the villages; aluminium sliding gates suit the newer estates."
          />

          <FAQ faqs={faqs} title="Maidstone Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
