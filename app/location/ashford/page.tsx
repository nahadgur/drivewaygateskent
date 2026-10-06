import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('ashford')!;
const description = 'Driveway and electric gates in Ashford, Kent: Article 4 directions written for gates and fences, Kent Downs farmhouses at Wye and Challock, Chilmington Green, and wet ground where the Stours meet.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Ashford, Kent',
  description,
  path: '/location/ashford/',
});

const faqs = [
  {
    question: 'Is there an Article 4 direction on gates near me in Ashford?',
    answer: 'Possibly. Ashford Borough Council has made several Article 4 directions aimed specifically at gates, fences and walls, including ones near South Willesborough (2008), Highfield (2003), Charing (2006) and another in 2013. The published records show points rather than exact boundaries, so ask the council to check your address before you change a front boundary.',
  },
  {
    question: 'Do I need permission for automatic gates at a listed farmhouse?',
    answer: 'If the gates affect the setting of a listed building, expect the council to treat them carefully. In 2025 an application for replacement automatic gates with below-ground motors at a farm in Molash was advertised as affecting the setting of a listed building. Talk to the council early and keep the design simple.',
  },
  {
    question: 'Can I add gates to a new house at Chilmington Green?',
    answer: 'Check the title deeds and the estate planning permission first. Large urban extensions usually fix front garden layouts and may remove permitted development rights, so a gate could need the developer\'s consent or a planning application.',
  },
  {
    question: 'Who approves a new access onto the A28 in Ashford?',
    answer: 'Kent County Council approves the dropped kerb as highway authority. Because the A28 is a classified road, the new access also needs planning permission from Ashford Borough Council.',
  },
  {
    question: 'Does a public right of way affect gates on my drive?',
    answer: 'It can. A gate must not obstruct a public footpath or bridleway, and in 2025 an application at Challock for piers and electronic timber gates was flagged because it affected a right of way. If a path crosses your drive, raise it with the council before you build.',
  },
  {
    question: 'Will an underground gate motor cope with wet ground in Ashford?',
    answer: 'Only if the chamber drains. Much of the town sits on low ground near the Great Stour and East Stour, and a motor chamber without a soakaway or drain can flood. Above-ground arm motors are the safer choice on wet sites.',
  },
];

export default function AshfordPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Ashford"
        image="/images/gates/gate-wooden-oak-open-interior-tree-lined-lane.png"
        intro={
          <>
            <p>Ashford is one of the few Kent boroughs with Article 4 directions written specifically for gates and fences, and its villages run up into the Kent Downs.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Article 4 Directions Written for Gates and Fences">
            <p>
              Most Kent councils use Article 4 directions to protect whole conservation areas. Ashford Borough Council has also made directions aimed squarely at front boundaries. The government&apos;s <a href="https://www.planning.data.gov.uk/entity/7010006814" className={linkClass} rel="noopener noreferrer" target="_blank">planning data register</a> lists one for a gate, fence, wall or enclosure near South Willesborough (2008), one for the erection of a gate and fence near Highfield (2003), directions on walls and gates near Charing (2006), and another on gates, fences and walls from 2013. There is also an older direction on properties in Queen Street in the town centre, made in 1986.
            </p>
            <p>
              The register only plots these as points, so it cannot tell you whether your house is inside one. If you live near any of these places, ask the council before ordering a gate. Where a direction applies, a gate that would normally be permitted development needs planning permission.
            </p>
          </TownSection>

          <TownSection title="Conservation Areas From Queens Road to Kingsnorth">
            <p>
              In and around the town, conservation areas cover the Town Centre, Queens Road, Lacton Green, Willesborough Lees, Kennington and Ball Lane, Great Chart and Kingsnorth. Further out, Wye, Chilham, Charing and Tenterden have their own. Queens Road is the railway town&apos;s Victorian expansion, with villas and terraces where painted metal gates on brick piers fit the street. Great Chart, Kennington and Kingsnorth each have an older village core sitting beside much newer estates, so the right gate can change from one end of a road to the other.
            </p>
          </TownSection>

          <TownSection title="Kent Downs Farmhouses at Wye, Challock and Molash">
            <p>
              North and east of the town, Wye, Challock, Molash and Chilham sit in the Kent Downs National Landscape. Here the typical project is a farmhouse or barn conversion at the end of a long track, often with a listed building nearby. Two recent applications show the pattern. In 2025, replacement entrance gates with automatic opening and below-ground motors at a farm on Shottenden Road, Molash (PA/2025/1774), were advertised as affecting the setting of a listed building. Earlier the same year, an application at Challock (PA/2025/0368) sought close-board fencing, brick piers with stone caps and electronic timber gates, partly after the work was done, and was flagged because it affected a public right of way.
            </p>
            <p>
              The lessons are to keep the design in keeping with the farmstead, to check for rights of way before building, and to apply before the work, not after. <Link href="/services/wooden-driveway-gates/" className={linkClass}>Hardwood gates</Link> on simple piers are what planning officers usually expect in the Downs.
            </p>
          </TownSection>

          <TownSection title="Long Tracks and Off-Grid Power">
            <p>
              Many farm entrances around Wye and Challock are a long way from the nearest mains supply. Trenching a cable down a 200 metre track is expensive and disruptive, which is why <Link href="/blog/off-grid-power-for-gates-on-rural-kent-farm-drives/" className={linkClass}>solar and battery power</Link> is common on rural gates here. It suits light to moderate use; a busy farm entrance with deliveries all day is better on mains. Ask the installer to size the battery for December, not July.
            </p>
          </TownSection>

          <TownSection title="Chilmington Green and the Stodmarsh Hold-Up">
            <p>
              South-west of the town, Chilmington Green is planned as an urban extension of up to 5,750 homes, delivered in phases to 2038. Like other large estates, it comes with its own rules on front gardens set through the planning permission and the title deeds. Check both before planning a gate.
            </p>
            <p>
              House building in the Stour catchment has been held back since 2020 by Natural England advice that new homes must not add nutrients reaching the Stodmarsh nature reserve. In April 2026 the council announced approval of the first phase of a stream enhancement scheme intended to unlock up to 5,000 stalled homes across Ashford and Canterbury. As those homes come forward, so will a new wave of gate enquiries on fresh estates.
            </p>
          </TownSection>

          <TownSection title="Wet Ground Where the Great Stour and East Stour Meet">
            <p>
              Ashford grew up where the Great Stour and East Stour meet, and plenty of the town sits on low, wet ground near the rivers. That matters for gates in two ways. Post foundations need to go deep enough to stay stable as the ground wets and dries, and an underground motor chamber needs a working drain or soakaway, or it will fill with water. On the wettest sites, installers fit arm motors above ground and keep the control box well clear of the ground.
            </p>
          </TownSection>

          <TownSection title="Car Key Burglaries in Wye">
            <p>
              Kent Police reported an arrest in January 2026 after a run of burglaries in Ramsfield and Upper Bridge Street, Wye, between September and December 2025 in which keys went missing and cars were said to have been taken. A closed automated gate slows a car leaving the drive, and a camera intercom records who came to the entrance. Neither replaces keeping keys out of reach of the front door.
            </p>
          </TownSection>

          <TownSection title="Access Onto the A28, A2070 and A251">
            <p>
              Kent County Council is the highway authority. A new vehicle access onto a classified road such as the A28, A2070, A251 or A292 needs planning permission as well as dropped kerb approval. Permitted development caps a gate beside a road used by vehicles at 1 metre in height (<a href="https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2" className={linkClass} rel="noopener noreferrer" target="_blank">GPDO Schedule 2, Part 2</a>), and gates may not open outwards over the road or pavement.
            </p>
          </TownSection>

          <TownSection title="Matching the Gate to the Street">
            <p>
              In the Victorian streets around Queens Road, a painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gate</Link> on brick piers suits the houses. On the 1990s and 2000s estates at Singleton, Park Farm and Repton Park, an aluminium sliding gate or a simple swing pair in a dark powder coat is the usual choice, and frontages are often short enough that sliding is the practical option. Out in the Downs villages, oak or iroko on timber or brick posts fits the farmsteads. Searches for this area usually add &quot;Kent&quot;, because Ashford in Surrey and Middlesex share the name, so make sure any installer you contact actually covers TN23 to TN27.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Ashford Homes"
            note="Hardwood suits the Downs villages; aluminium and painted steel suit the town and its newer estates."
          />

          <FAQ faqs={faqs} title="Ashford Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
