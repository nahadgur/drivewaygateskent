import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('whitstable')!;
const description = 'Driveway and electric gates in Whitstable: salt-air specifications for Tankerton and the seafront, conservation area rules, and gates for low, wet ground near the Swale.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Whitstable, Kent',
  description,
  path: '/location/whitstable/',
});

const faqs = [
  {
    question: 'Do I need planning permission for electric gates in Tankerton?',
    answer: 'Tankerton is a conservation area. Permitted development still allows a gate up to 1 metre high next to a road used by vehicles unless an Article 4 direction removes that right, and the Whitstable Town Conservation Area has one covering dwelling houses. Anything taller, or any gate on a property covered by a direction, needs an application to Canterbury City Council. Ask the council which rules apply to your address before you order.',
  },
  {
    question: 'Will a steel gate rust on Marine Parade or West Beach?',
    answer: 'Plain powder-coated mild steel will start to blister within a few years on the seafront. Specify hot-dip galvanising under a marine-grade powder coat, A4 stainless fixings, or aluminium, which does not rust. Hardwood should be Accoya or a durable species with a regular oiling routine.',
  },
  {
    question: 'Can an underground gate motor work on low ground near the Swale?',
    answer: 'Underground motors sit in a chamber that must drain freely. On the low-lying London Clay around Seasalter and the harbour, a chamber without a working soakaway or drain can flood and ruin the motor. Many installers fit ram-arm or articulated-arm motors on wet sites instead.',
  },
  {
    question: 'Who approves a new dropped kerb for a Whitstable driveway?',
    answer: 'Kent County Council is the highway authority and handles dropped kerb applications. If the new access is onto a classified road, such as the A2990 corridor, you also need planning permission from Canterbury City Council.',
  },
  {
    question: 'How often should a seafront gate in Whitstable be serviced?',
    answer: 'At least once a year, and more often on the most exposed frontages. Salt builds up on photocell lenses, hinge pins and motor seals, so a service should clean and test the safety devices, check the force settings and look for corrosion starting at cut edges and fixings.',
  },
  {
    question: 'Can I put gates on a new-build house at Brooklands Farm?',
    answer: 'Check the title deeds and the planning permission for the estate first. Developers often fix front garden layouts or remove permitted development rights on new estates, in which case a gate would need the developer\'s consent or a planning application.',
  },
];

export default function WhitstablePage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Whitstable"
        image="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png"
        intro={
          <>
            <p>A Whitstable gate has to cope with salt air off the Swale and, across much of the town, conservation area rules that inland suburbs never meet.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Salt Air on Tankerton and the West Beach Frontage">
            <p>
              Homes on Marine Parade, Tankerton Road, West Beach, Island Wall and the Joy Lane end of Seasalter take the full force of onshore wind. Salt carried on that wind settles on every exposed surface of a gate, and a standard powder coat over bare steel will chip and rust from the edges within a few winters.
            </p>
            <p>
              The specification that lasts here is <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>hot-dip galvanised steel under a marine-grade powder coat</Link>, or <Link href="/services/metal-driveway-gates/" className={linkClass}>aluminium</Link>, which cannot rust at all. Hinges, bolts and motor brackets should be A4 stainless rather than zinc plated.
            </p>
          </TownSection>

          <TownSection title="Eight Conservation Areas From Seasalter to Chestfield">
            <p>
              Canterbury City Council has designated eight conservation areas in and around Whitstable: Whitstable Town, Tankerton, Church Street, South Whitstable, Chestfield, Courts Lee Manor, the Canterbury and Whitstable Railway, and Whitstable Station. The full list is on the government&apos;s <a href="https://www.planning.data.gov.uk/entity.json?dataset=conservation-area&organisation_entity=75" className={linkClass} rel="noopener noreferrer" target="_blank">planning data register</a>.
            </p>
            <p>
              The Whitstable Town Conservation Area also carries an Article 4 direction on dwelling houses, made in 1996, and individual houses on Borstal Hill, Canterbury Road and Joy Lane have their own direction from 2003. Gates in these places go through the planning system: a 2025 householder application on Joy Lane (reference CA/25/00536) that included electric gates was advertised as affecting a conservation area.
            </p>
          </TownSection>

          <TownSection title="Tankerton Villas Versus Old Town Cottages">
            <p>
              Tankerton was laid out from 1890, when the Tankerton Estate was bought and its plots auctioned. The result is late Victorian and Edwardian houses on wider plots, many with room for a pair of <Link href="/services/electric-swing-gates/" className={linkClass}>swing gates</Link> and a car standing clear of the pavement.
            </p>
            <p>
              The streets behind the harbour are tighter. Where a frontage is too short for a car to pull in before the gate, a sliding gate or a pedestrian gate with off-street parking elsewhere is usually the realistic choice. Chestfield, a conservation area since 1983, has larger plots where long drives make automation and an intercom worth the cost.
            </p>
          </TownSection>

          <TownSection title="Low Ground, London Clay and Tidal Defences">
            <p>
              Much of Whitstable sits on low ground over London Clay, which holds water and moves as it wets and dries. The South Quay sheet piling replaced in 2016 protects around 2,430 homes and 460 businesses from tidal flooding, which gives a sense of how close the sea sits to the town.
            </p>
            <p>
              For a gate, that means deeper post foundations on clay and careful thought about where water goes. An underground motor chamber needs a working drain, so on wet sites installers often choose arm motors mounted above ground.
            </p>
          </TownSection>

          <TownSection title="Car Key Burglaries Along the North Kent Coast">
            <p>
              In 2026 Kent Police reported jailing a group who broke into homes in Whitstable, Faversham and nearby villages to take car keys and drive high-value cars off the drive. A closed, automated gate does not stop a burglary, but it slows a car leaving the property, and an intercom with a camera records who came to the entrance. Keep keys well away from the front door as well.
            </p>
          </TownSection>

          <TownSection title="Brooklands Farm and the South Whitstable Growth Area">
            <p>
              Canterbury City Council&apos;s draft Local Plan proposes Brooklands Farm in South Whitstable for up to 1,350 homes (Policy W4), with further draft allocations around Chestfield Road and Golden Hill that drew resident objections in the 2025 consultation. New estates bring their own rules. Many developers fix front garden layouts in the planning permission or the title deeds, so a buyer on a new street should read the transfer and any estate management terms before ordering a gate.
            </p>
            <p>
              Older South Whitstable roads such as Joy Lane are a different picture: detached houses on larger plots, and South Whitstable has its own conservation area. Here a pair of automated gates set well back from the road is common, and the generous frontage leaves room for a car to wait off the carriageway while the gates open.
            </p>
          </TownSection>

          <TownSection title="Motors and Maintenance by the Sea">
            <p>
              Salt does not only attack the gate leaf. It works into motor housings, photocell lenses, hinge pins and the control box, so a seafront installation needs kit chosen for exposure. Look for motors with a high ingress protection rating, sealed cable glands and stainless fixings, and ask where the control board will sit; a box tucked behind a wall or inside a garage lasts far longer than one bolted to the pier facing the beach.
            </p>
            <p>
              Maintenance matters more here than inland. Rinsing the gate and motor covers with fresh water after winter storms, checking the photocells for salt film, and a <Link href="/services/gate-repair-and-maintenance/" className={linkClass}>service visit at least once a year</Link> keep the safety devices working. A photocell clouded by salt can stop the gate closing, or worse, fail to see a child or a car in the opening.
            </p>
          </TownSection>

          <TownSection title="Dropped Kerbs and the Main Roads Into Town">
            <p>
              Kent County Council is the highway authority for Whitstable and handles dropped kerb applications. On a classified road, including the A2990 corridor along Canterbury Road and the Thanet Way approaches, a new vehicle access also needs planning permission from Canterbury City Council. Permitted development limits a gate beside any road used by vehicles to 1 metre in height, and the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a> forbids gates that open outwards over the road or pavement, so inward-swinging or sliding gates are the only legal options on a front boundary.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Whitstable Homes"
            note="Aluminium and galvanised steel suit the seafront; hardwood suits Chestfield and the conservation areas inland."
          />

          <FAQ faqs={faqs} title="Whitstable Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
