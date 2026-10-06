import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('deal')!;
const description = 'Driveway and electric gates in Deal, Walmer and Sandwich: Article 4 controls on gates in Middle Street and Sandwich\'s walled town, listed houses, seafront salt, and flood risk in Sandwich.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Deal and Sandwich, Kent',
  description,
  path: '/location/deal/',
});

const faqs = [
  {
    question: 'Do I need planning permission for a gate in Middle Street, Deal?',
    answer: 'Yes. An Article 4 direction confirmed in 2000 brings gates, fences and walls fronting a road, waterway or open space under planning control in the Middle Street Conservation Area, including their demolition. Any new or altered front gate needs planning permission from Dover District Council.',
  },
  {
    question: 'Does Sandwich have the same rules?',
    answer: 'Yes. The Sandwich Walled Town conservation area has an Article 4 direction confirmed in 1998 with the same wording on gates, fences and walls. With around 470 listed buildings nearby, many houses also need listed building consent.',
  },
  {
    question: 'Can I have an electric gate on The Strand in Walmer?',
    answer: 'Yes, subject to the usual rules. In 2025 an application at 44 The Strand sought iron railings to the front and a sliding electric gate at the rear. On the seafront, specify aluminium or galvanised steel and sealed motors.',
  },
  {
    question: 'Is Sandwich at risk of flooding a gate motor?',
    answer: 'Sandwich is low-lying and much of it is flood-mapped, though a tidal defence scheme now protects the town. Avoid underground motor chambers, mount the control box high, and use sealed connectors.',
  },
  {
    question: 'Which way should a gate open in Sandwich\'s narrow streets?',
    answer: 'Inwards or sliding. The Highways Act 1980 lets the highway authority require any gate opening outwards over the road to be altered, and in Sandwich\'s narrow medieval streets there is rarely room anyway.',
  },
  {
    question: 'Are there Article 4 directions in Kingsdown or Nelson Street?',
    answer: 'Both have Article 4 directions on single family houses, confirmed in 2016 and 2017. Whether they cover gates is not clear from the published summary, so ask Dover District Council before altering a front boundary.',
  },
];

export default function DealPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Deal and Sandwich"
        image="/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png"
        intro={
          <>
            <p>Deal&apos;s Middle Street was the first conservation area in Kent, and both it and Sandwich&apos;s walled town bring front gates under planning control.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Middle Street, Kent's First Conservation Area">
            <p>
              Middle Street in Deal was designated in 1968, the first conservation area in Kent. An Article 4 direction confirmed in March 2000 brings under planning control the erection, alteration or improvement of any gate, fence, wall or other means of enclosure fronting a highway, waterway or open space, and the demolition of any such gate or wall (<a href="https://www.dover.gov.uk/asset-library/Middle-Street-Conservation-Area-Deal.pdf" className={linkClass} rel="noopener noreferrer" target="_blank">Dover District Council</a>).
            </p>
            <p>
              In practice, every new or altered front gate in the area needs planning permission. The grid of narrow streets and old fishermen&apos;s houses leaves little room for vehicle gates anyway; most applications here are for pedestrian gates, railings and walls.
            </p>
          </TownSection>

          <TownSection title="Sandwich Walled Town">
            <p>
              Sandwich has around 470 listed buildings within a few kilometres, the most of any town we cover, with 15th to 18th-century houses along streets such as New Street and Harnet Street. The Walled Town conservation area, designated in 1993, has an Article 4 direction confirmed in 1998 with the same wording as Middle Street on gates, fences and walls. On a listed house, listed building consent is needed too.
            </p>
            <p>
              Gates here are judged as part of the street. In December 2022 an application between 47 and 49 New Street proposed a 3 metre front wall, piers with acorn finials, fencing, relocated 2.4 metre entrance gates, a wider drive and a moved streetlight. Schemes on that scale need careful drawings and a strong case.
            </p>
          </TownSection>

          <TownSection title="Low Ground and the Sandwich Tidal Defences">
            <p>
              Sandwich sits on sand, silt and clay under tidal-flat deposits, and much of it is flood-mapped. The Environment Agency, Pfizer and Kent County Council built the <a href="https://www.gov.uk/government/news/ceremony-to-mark-completion-of-sandwich-town-tidal-defence-scheme" className={linkClass} rel="noopener noreferrer" target="_blank">£21.7 million Sandwich Town Tidal Defence Scheme</a> across 16 river reaches to protect the town. For a gate, the risk is water around the motor. Avoid underground chambers, mount the control box high on a pier, and choose above-ground arm motors with sealed connections.
            </p>
          </TownSection>

          <TownSection title="Salt Spray on Beach Street and The Strand">
            <p>
              Deal and Walmer face an open, east-facing shingle beach. Beach Street, The Strand and the seafront streets take direct salt spray, which strips ordinary paint and rusts plain steel quickly. Use aluminium or <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>galvanised steel under a marine-grade coat</Link>, with A4 stainless fixings and sealed motors.
            </p>
            <p>
              Electric gates on the seafront are approved where they suit the house. In June 2025 an application at 44 The Strand in Walmer sought iron railings to the front and a <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding electric gate</Link> to the rear. Putting the vehicle gate at the back and railings at the front kept the seafront elevation traditional.
            </p>
          </TownSection>

          <TownSection title="Walmer, Upper Deal and Great Mongeham">
            <p>
              Deal&apos;s other conservation areas include Nelson Street, Upper Deal, Victoria Road and Wellington Road, Deal South Barracks and Walmer Seafront. Upper Deal is the older village core inland. In October 2025 the district council adopted a new appraisal for Great Mongeham, on the town&apos;s western edge, with two conservation areas after a boundary review, so controls there have just been updated. Nelson Street and Kingsdown also have Article 4 directions on family houses, confirmed in 2017 and 2016.
            </p>
          </TownSection>

          <TownSection title="Recent Gate Applications Around Deal">
            <p>
              Local applications show the range of gate work. At The Old Vicarage on Stanley Road, a 2022 application sought a new vehicle access, parking and entrance gate, replacing the existing gate and wall. On London Road, a front fence and gate and a rear wall and gate went through with amended plans in 2022. Where a new access is involved, the dropped kerb goes to Kent County Council as highway authority.
            </p>
          </TownSection>

          <TownSection title="Chalk Under Deal">
            <p>
              Deal itself is on chalk with clay and silt in places, so post footings are usually straightforward and drainage is good away from the seafront. Chalk is a different world from Sandwich&apos;s wet ground a few miles north, which is why installers will often specify the motor differently for each town.
            </p>
          </TownSection>

          <TownSection title="Burglary and Car Theft in Deal">
            <p>
              In August 2026 Kent Police charged a Deal man with two burglaries, including one on Albert Road in July 2026, and with taking a vehicle from Mill Road. Recorded crime in Sandwich is far lower. A closed automated gate keeps a car off the street side of the boundary, and a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> records anyone at the entrance.
            </p>
          </TownSection>

          <TownSection title="Roadside Gates in Narrow Streets">
            <p>
              Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, the highway authority can require any gate that opens outwards over the road to be altered. In the narrow streets of Middle Street and Sandwich there is rarely room for a swing leaf in any case, so inward-opening gates and single-leaf sliding gates are the norm. A gate beside a road is limited to 1 metre without permission, and in the Article 4 areas any change needs it.
            </p>
          </TownSection>

          <TownSection title="Kingsdown and the White Cliffs">
            <p>
              South of Walmer, Kingsdown is a clifftop village with an Article 4 direction on family houses confirmed in 2016, and the Kent Downs National Landscape begins just beyond it. Houses here face the Channel from higher ground, so they take the wind as well as the salt. Open gate designs that let the wind through, aluminium or galvanised finishes, and motors rated for the wind load are the right combination. Because the Article 4 direction may cover front boundaries, check with Dover District Council before changing a front gate or wall in the village.
            </p>
            <p>
              Inland of Deal, Worth, south of Sandwich, is another village conservation area where timber gates suit the lanes and the flat, open farmland around them.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Deal and Sandwich Homes"
            note="Painted metal and timber suit the conservation areas; aluminium suits the seafront."
          />

          <FAQ faqs={faqs} title="Deal and Sandwich Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
