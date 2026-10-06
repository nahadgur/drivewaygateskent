import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('faversham')!;
const description = 'Driveway and electric gates in Faversham: the conservation area Article 4 that brings front gates under planning control, listed townhouses, creekside flood zones, Faversham Lakes and the Duchy scheme.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Faversham, Kent',
  description,
  path: '/location/faversham/',
});

const faqs = [
  {
    question: 'Do I need planning permission for a front gate in Faversham?',
    answer: 'In the Faversham Conservation Area, almost certainly. An Article 4 direction in force since 2007 removes the permitted development right to put up or alter gates, fences and walls, and the right to demolish them. A new or replacement front gate on a house there needs planning permission from Swale Borough Council.',
  },
  {
    question: 'Will the council want detailed drawings of my gate?',
    answer: 'Expect it. When a replacement entrance gate and paving at 94 Abbey Street were permitted in 2017, the approval referred to a drawing showing the gate design in detail. On listed houses, the gate also needs listed building consent.',
  },
  {
    question: 'Can I run a gate cable near Faversham Creek?',
    answer: 'Check the Environment Agency flood map first. Flood zones are extensive along the creek and the Oare and Ham marshes. In a flood zone, keep the control box high, avoid underground motor chambers, and use sealed connections.',
  },
  {
    question: 'Do I need a special finish for a gate near the creek?',
    answer: 'The creek and the Swale estuary bring damp, slightly salty air to Oare, Ham Road and the creek basin. Hot-dip galvanised steel under a powder coat, or aluminium, with stainless fixings, will last longer than plain painted steel.',
  },
  {
    question: 'Can I add gates at Faversham Lakes or the Duchy development?',
    answer: 'Check the title deeds and the planning permission first. At Faversham Lakes, boundary treatments were approved phase by phase, and new estates usually control front gardens through conditions or covenants.',
  },
  {
    question: 'Are cars being targeted in Faversham?',
    answer: 'In August 2026 Kent Police appealed after three vehicles were targeted overnight in Springhead Road, Blaxland Close and Whiting Crescent. A closed gate and a camera intercom help keep cars out of easy reach.',
  },
];

export default function FavershamPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Faversham"
        image="/images/gates/gate-wrought-iron-detail-spear-finials-closeup.png"
        intro={
          <>
            <p>In Faversham&apos;s conservation area, an Article 4 direction brings every new or replacement front gate under planning control, and many of the houses are listed too.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="An Article 4 Direction That Covers Front Gates">
            <p>
              Swale Borough Council&apos;s Article 4 direction for the Faversham Conservation Area, in force since 29 May 2007, removes a range of householder permitted development rights (<a href="https://www.planning.data.gov.uk/entity/7010009497" className={linkClass} rel="noopener noreferrer" target="_blank">planning data register</a>). Among them is the right to put up or alter gates, fences and walls, and the right to demolish any gate, fence, wall or other means of enclosure. In plain terms, a new or replacement front gate, wall or railing on a house in the conservation area needs planning permission.
            </p>
            <p>
              Two Faversham conservation areas were expanded in May 2024 under the council&apos;s heritage strategy, so a house that was outside the boundary a few years ago may now be inside it. Check the current map before assuming you are clear.
            </p>
            <p>
              A householder application for a gate is not complicated. You need a location plan, drawings of the gate and piers in elevation, a short description of materials and colour, and the application fee. Many installers who work in the town will prepare the drawings; ask whether that is included in the quote.
            </p>
          </TownSection>

          <TownSection title="Abbey Street, West Street and the Listed Townhouses">
            <p>
              Around 380 listed buildings stand within a few kilometres of the town, one of the highest concentrations in Kent, and the historic streets of Abbey Street, West Street and Court Street are lined with them. On a listed house, gates need listed building consent as well as planning permission.
            </p>
            <p>
              The council takes the detail seriously. In 2017 it permitted replacement entrance gates and paving at 94 Abbey Street (17/501310/FULL, with listed building consent 17/501311/LBC), with the approval tied to a drawing of the gate design. In 2016 a new brick pier, wall and entrance gates at Wreights Cottage on The Mall went through listed building consent. For a Faversham townhouse, plan on hand-made <Link href="/services/metal-driveway-gates/" className={linkClass}>painted metal or timber gates</Link> drawn to scale and approved before fabrication.
            </p>
          </TownSection>

          <TownSection title="Preston, Ospringe and Syndale">
            <p>
              Beyond the town conservation area, Preston-next-Faversham, south of the station, and Ospringe, on the A2 with listed buildings along Water Lane, have conservation areas of their own, as do Syndale and Whitehill. In these, the normal permitted development limits apply unless a direction says otherwise, but the council will still expect a design that suits the village street. South of the A2, the Kent Downs National Landscape begins.
            </p>
          </TownSection>

          <TownSection title="Chalk Ground and Creekside Flood Zones">
            <p>
              Faversham is built on chalk, but along Faversham Creek the ground is beach and tidal-flat deposits of clay, silt and sand. The flood risk picture changes sharply between the two. The national flood-risk mapping shows extensive flood zones along the creek and across the Oare and Ham marshes, many times more than an inland Weald town like Cranbrook.
            </p>
            <p>
              For a gate near the creek, check the <a href="https://check-for-flooding.service.gov.uk/" className={linkClass} rel="noopener noreferrer" target="_blank">Environment Agency flood map</a> before trenching for cables. In a flood zone, keep the control box high on a pier, avoid underground motor chambers, and use sealed connectors. On chalk higher up the town, foundations are straightforward and drainage is rarely a problem.
            </p>
          </TownSection>

          <TownSection title="Estuary Air Around Oare and Ham Road">
            <p>
              The creek opens onto the Swale estuary, and homes around Oare, Ham Road and the creek basin get damp, slightly salty air. It is gentler than the open coast at Whitstable, but plain painted steel still rusts faster here than inland. <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>Galvanising under the powder coat</Link>, or aluminium, with stainless fixings is the safer specification for creekside gates.
            </p>
          </TownSection>

          <TownSection title="Faversham Lakes and the Duchy of Cornwall Scheme">
            <p>
              Faversham Lakes, on the former Oare mineral workings off Ham Road, is being built in phases: 113 homes in the first, then 106 and 111 in later phases. The council approved boundary treatments and Secured by Design details phase by phase, so front gardens there follow an agreed plan. Check the deeds and the conditions before adding a gate.
            </p>
            <p>
              South-east of the town, Swale councillors voted in 2026 to approve the Duchy of Cornwall&apos;s scheme for up to 2,500 homes near Brenley Corner, between the M2 and the A2, with detailed consent for the first 261 homes and building expected from 2027. As with Faversham Lakes, the estate design will set the rules for front boundaries.
            </p>
          </TownSection>

          <TownSection title="Orchard Villages: Boughton, Hernhill and Throwley">
            <p>
              The orchard country around Faversham is full of older farmhouses and newer infill. At Boughton under Blean, a new house was approved with sliding entrance gates behind Horselees Road (21/501427/FULL). At Hernhill, entrance gates were repositioned at Forge Orchard on Staple Street. At Throwley, a listed farm sought estate railings and entrance gates under listed building consent. <Link href="/services/wooden-driveway-gates/" className={linkClass}>Timber field gates</Link> suit most of these lanes; estate railings suit the larger farmhouses.
            </p>
          </TownSection>

          <TownSection title="Vehicle and Farm Crime">
            <p>
              In August 2026 Kent Police appealed after three vehicles were targeted overnight in Springhead Road, Blaxland Close and Whiting Crescent, and the same month the Rural Task Force arrested a suspect after a farm building burglary where a wire fence had been cut. A locked, automated gate with a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> slows vehicles leaving and records them; on farms, pair it with secure storage for tools and machinery.
            </p>
          </TownSection>

          <TownSection title="Dropped Kerbs and Roadside Gates">
            <p>
              Kent County Council is the highway authority and handles dropped kerbs. A new access onto a classified road such as the A2 or A251 also needs planning permission. Gates on a roadside boundary must open inwards or slide, because the highway authority can require any gate that opens outwards over the road to be altered.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Faversham Homes"
            note="Painted metal and timber, drawn for consent, suit the conservation area; galvanised steel suits the creek."
          />

          <FAQ faqs={faqs} title="Faversham Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
