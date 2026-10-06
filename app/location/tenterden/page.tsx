import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('tenterden')!;
const description = 'Driveway and electric gates in Tenterden: listed railings and walls on the High Street, the conservation area, Wadhurst Clay ground, the A28, and gates for St Michaels and Rolvenden.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Tenterden, Kent',
  description,
  path: '/location/tenterden/',
});

const faqs = [
  {
    question: 'Are the railings on Tenterden High Street listed?',
    answer: 'Some are. Certain stretches of railings and walls along the High Street are listed structures in their own right, separate from the houses behind them. Altering or replacing them, or hanging a new gate on them, needs listed building consent from Ashford Borough Council.',
  },
  {
    question: 'Is there an Article 4 direction on gates in Tenterden?',
    answer: 'The directions on the national register are site-specific, covering land at Pittlesden Farm, a house on St Michaels Terrace and a timber yard at Rolvenden. We found no area-wide direction on front boundaries, so most homes fall under the normal permitted development limits. Check with the council if you are unsure.',
  },
  {
    question: 'Can I put electric gates off the A28?',
    answer: 'Yes, but plan the set-back carefully. A new access onto the A28 needs planning permission as well as a dropped kerb, and highways officers look for room for a car to wait off the road. Kent Police have also made speeding on the A28 through St Michaels and Rolvenden a 2026 priority.',
  },
  {
    question: 'Will a sliding gate track stay level on Tenterden clay?',
    answer: 'Wadhurst Clay shrinks and swells with the seasons, so a ground track needs a deep, well-reinforced concrete base. Where movement is a worry, a cantilever sliding gate that runs clear of the ground avoids the track altogether.',
  },
  {
    question: 'What gate suits a weatherboarded Wealden house?',
    answer: 'A timber gate in oak or iroko, painted or left to weather, usually suits these houses best. Keep the design simple and the piers in proportion to the frontage.',
  },
  {
    question: 'Who handles a dropped kerb in Tenterden?',
    answer: 'Kent County Council, as highway authority. Its guidance has given an application fee of about £480, with part refunded if refused. Check the current fee on the council website.',
  },
];

export default function TenterdenPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Tenterden"
        image="/images/gates/gate-wooden-painted-cream-kentish-countryside.png"
        intro={
          <>
            <p>Tenterden&apos;s wide High Street is lined with listed houses, and some of its railings and walls are listed in their own right, so gates here start with the heritage question.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Listed Railings and Walls on the High Street">
            <p>
              The Tenterden Conservation Area runs along the High Street from East Cross to West Cross, and around 170 listed buildings stand within a few kilometres of the town. What makes Tenterden unusual is that some of its boundaries are listed separately from the houses. The railings and wall to the east of No 14, for example, are a listed structure (<a href="https://heritage.kent.gov.uk/Designation/DKE14599" className={linkClass} rel="noopener noreferrer" target="_blank">Kent Historic Environment Record</a>). Elsewhere, mid-19th-century spear railings and buttressed red-brick garden walls are typical of the townhouse frontages.
            </p>
            <p>
              If your railing or wall is listed, or stands in front of a listed house, any new gate, repair or replacement needs listed building consent. Even a small change can count: an application for a replacement post-and-rope fence around the front terrace of the White Lion Hotel was treated as affecting a listed building in the conservation area.
            </p>
          </TownSection>

          <TownSection title="Matching Spear Railings and Garden Walls">
            <p>
              Where a new gate goes into an old railing, matching it is usually the goal: the same bar spacing, the same spear finials, and the same black or dark painted finish. A good fabricator can copy the profile from a surviving section. For a brick garden wall, new piers should match the brick and the bond. <Link href="/services/metal-driveway-gates/" className={linkClass}>Hand-made metal gates</Link> built to drawings approved with the consent are the usual route.
            </p>
          </TownSection>

          <TownSection title="Weatherboarded Houses and Wealden Timber">
            <p>
              Away from the brick townhouses, much of the town and its surroundings is weatherboarded and tile-hung Wealden building. Timber suits these best. An oak or iroko <Link href="/services/wooden-driveway-gates/" className={linkClass}>hardwood gate</Link>, painted white or cream to match the weatherboarding or left to weather to silver grey, sits naturally in front of them. On larger plots along roads like Shoreham Lane, where detached houses sit back from the road, automated timber gates with underground motors keep the entrance tidy.
            </p>
          </TownSection>

          <TownSection title="Wadhurst Clay Under the Town">
            <p>
              Tenterden sits on Wadhurst Clay, a mudstone that shrinks in dry weather and swells in wet. That movement affects gates in two ways. Posts set in shallow footings can lean over a few seasons, so the leaves drop and drag, and a sliding gate&apos;s ground track can tilt out of level. Deep, reinforced footings solve the first; a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link>, which runs on rollers clear of the ground, avoids the second. Flood risk around the town is limited and follows the stream valleys, with the Rother Levels to the south.
            </p>
          </TownSection>

          <TownSection title="High Weald Rules Around the Town">
            <p>
              The whole area lies within the High Weald National Landscape, and there is no Green Belt. As around Cranbrook, the designation shapes the look rather than banning gates. Simple timber or traditional metal gates in proportion to the house are what fit, while tall solid gates and oversized piers on a country lane are likely to be questioned.
            </p>
          </TownSection>

          <TownSection title="The A28 Through St Michaels and Rolvenden">
            <p>
              The A28 runs through St Michaels, Tenterden, Rolvenden and Newenden, and in April 2026 Kent Police made speed checks along it a local priority. For a house fronting the A28, that matters. Any new access needs planning permission because it is a classified road, and highways officers look for space for a car to stand completely off the road while the gate opens. Turning in from fast traffic and then stopping on the carriageway is exactly what they want to avoid, so allow a generous set-back.
            </p>
          </TownSection>

          <TownSection title="St Michaels, Pittlesden and Rolvenden">
            <p>
              St Michaels, north of the town on the A28, has its own conservation area. The site-specific Article 4 directions in the area cover land at Pittlesden Farm, a house on St Michaels Terrace and the Rother Valley Timber yard at Rolvenden. Rolvenden and Newenden, towards the Rother valley, are villages of older houses where timber gates suit the street. Smallhythe and High Halden are smaller hamlets with farm entrances where a simple five-bar or field gate is often all that is needed.
            </p>
          </TownSection>

          <TownSection title="Car and Van Theft in the Town">
            <p>
              Recorded burglary in Tenterden is low, but the Town Council has been briefed on car crime including a BMW taken from St Michael&apos;s and a pick-up and a van taken from the town. A closed gate keeps vehicles off the street side of the boundary, and a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> records anyone who comes to the entrance.
            </p>
          </TownSection>

          <TownSection title="A New Local Plan for the Borough">
            <p>
              Ashford Borough Council has started work on a new Local Plan running to 2043 under the new plan-making system, with its first gateway expected by the end of October 2026. The Town Council&apos;s position is that Tenterden already has enough allocated homes. Whatever happens, new estates bring their own front-garden rules, so buyers there should check the deeds before planning a gate. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, any gate on a roadside boundary must open inwards or slide.
            </p>
          </TownSection>

          <TownSection title="Automating an Oak Gate Without Spoiling It">
            <p>
              Many Tenterden owners want the look of a traditional timber gate with the convenience of a motor. It can be done well. The first step is weight: a solid oak leaf is heavy, and the motor has to be sized to it with a margin, or it will strain and fail early. The second is the frame. Timber moves with the weather, so the leaf needs a strong brace, usually a diagonal or a steel subframe hidden inside, to stop it dropping at the latch end.
            </p>
            <p>
              Underground motors keep the posts clear and suit a listed or conservation setting, provided the chamber can drain. Where it cannot, slim articulated arm motors mounted on the inside face of the posts are barely visible from the street. Photocells can be set into timber posts rather than fixed on separate stands.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Tenterden Homes"
            note="Painted metal suits the High Street railings; hardwood suits the weatherboarded houses."
          />

          <FAQ faqs={faqs} title="Tenterden Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
