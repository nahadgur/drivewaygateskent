import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('canterbury')!;
const description = 'Driveway and electric gates in Canterbury: the 1985 Article 4 streets, listed building consent for walls and gates, tight Victorian frontages, Kent Downs villages and Stour valley flood risk.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Canterbury, Kent',
  description,
  path: '/location/canterbury/',
});

const faqs = [
  {
    question: 'Does my Canterbury street fall under the 1985 Article 4 direction?',
    answer: 'Possibly. The 1985 direction lists hundreds of individual addresses across the city, including houses on Whitstable Road, London Road, North Lane, Pound Lane and St Peter\'s Grove. The published record does not say which rights each property lost, so ask Canterbury City Council before altering a front wall or adding gates.',
  },
  {
    question: 'Do I need listed building consent to replace a garden wall and gate?',
    answer: 'If the house is listed, or the wall is within its curtilage, yes. In 2026 two applications in the city, at St Alphege Lane and Cross Street, sought consent for replacement walls and gates in the setting of listed buildings. Expect the same if your property is listed.',
  },
  {
    question: 'What gate fits a narrow Victorian frontage in St Dunstan\'s?',
    answer: 'Many terraced frontages are too short for a car to stand clear of the pavement while a gate opens. A single-leaf sliding gate, or a pedestrian gate with parking elsewhere, is often the only practical option. Remember that gates may not open outwards over the pavement.',
  },
  {
    question: 'Are underground gate motors a risk near the Stour?',
    answer: 'They can be. Kent County Council\'s flood profile for the district identifies river, groundwater and surface water risk, sometimes combined. On low ground near the Stour, choose above-ground arm motors or make sure an underground chamber drains properly.',
  },
];

export default function CanterburyPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Canterbury"
        image="/images/gates/gate-wrought-iron-detail-spear-finials-closeup.png"
        intro={
          <>
            <p>Canterbury has more conservation areas and Article 4 records than almost anywhere in Kent, so even a simple wall-and-gate change can need consent.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl">
          <TownSection title="The 1985 Article 4 Streets">
            <p>
              The national planning register records 98 conservation areas and 463 Article 4 entries for Canterbury City Council&apos;s district (<a href="https://www.planning.data.gov.uk/entity.json?dataset=article-4-direction-area&organisation_entity=75" className={linkClass} rel="noopener noreferrer" target="_blank">planning data register</a>). Many come from a single direction made on 29 November 1985 that lists individual houses street by street across the city: Whitstable Road, Pound Lane, St Peter&apos;s Grove, Black Griffin Lane, North Lane, London Road, Ivy Lane, Cossington Road and Havelock Street among them.
            </p>
            <p>
              The register does not say which rights each house lost. If your address is on one of these streets, ask the council before changing the front boundary.
            </p>
          </TownSection>

          <TownSection title="When a Garden Gate Needs Listed Building Consent">
            <p>
              In the city centre, walls and gates are often part of a listed building&apos;s setting. In 2026 the council received applications for a pedestrian gate and replacement garden walls at St Alphege Lane, made with a separate listed building consent (CA/26/00174 and CA/26/00175), and for a replacement wall and gate at Cross Street in the setting of a listed building (CA/26/01129). A like-for-like gate can still need consent here.
            </p>
          </TownSection>

          <TownSection title="Tight Victorian Frontages in St Dunstan's and Northgate">
            <p>
              The Victorian streets inside and just outside the walls rarely have deep front gardens. A pair of swing gates needs the car to stand clear of the pavement while they open, and the Highways Act does not allow gates to swing out over a footway. That leaves a single-leaf <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding gate</Link> or a pedestrian gate as the realistic choice on many plots.
            </p>
            <p>
              The larger villas on New Dover Road and St Augustine&apos;s Road have room for paired <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gates</Link> on brick piers.
            </p>
          </TownSection>

          <TownSection title="Kent Downs Villages South of the City">
            <p>
              Bridge, Bekesbourne, Petham and Chartham sit in or on the edge of the Kent Downs National Landscape, with village conservation areas of their own. Hardwood is the usual choice there. See our <Link href="/blog/planning-permission-driveway-gates-kent/" className={linkClass}>Kent planning guide for gates</Link> for how the designations interact.
            </p>
          </TownSection>

          <TownSection title="Stour Valley Flood Risk">
            <p>
              Kent County Council&apos;s flood profile for the district records tidal, river, groundwater and surface water risk, sometimes in combination. On low ground near the Stour, an underground motor chamber without reliable drainage can fill with water. Arm motors mounted above ground avoid that.
            </p>
          </TownSection>

          <TownSection title="Key Thefts in Chartham">
            <p>
              In July 2026 Kent Police warned motorists after keys were taken from a house in Chartham overnight and the car driven away, and arrested three teenagers. A closed automated gate slows a car leaving the drive, and keeping keys away from the door matters as much.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Canterbury Properties"
            note="Sliding gates suit the tight city frontages; hardwood suits the Kent Downs villages."
          />

          <FAQ faqs={faqs} title="Canterbury Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
