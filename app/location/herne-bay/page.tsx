import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('herne-bay')!;
const description = 'Driveway and automatic gates in Herne Bay: onshore wind off the estuary, London Clay ground, the conservation areas, Strode Farm, Hillborough and the Golf Course site, and the Bullockstone Road upgrade.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Herne Bay, Kent',
  description,
  path: '/location/herne-bay/',
});

const faqs = [
  {
    question: 'Do I need permission for gates in the Herne Bay Conservation Area?',
    answer: 'Possibly. An Article 4 direction on dwelling houses in the Herne Bay Conservation Area has been in force since 1997, but the published record does not list which rights it removes. Ask Canterbury City Council whether it covers front gates and walls before you order.',
  },
  {
    question: 'Can I put gates on a new house at Strode Farm or Hillborough?',
    answer: 'Check the title deeds and the estate planning permission first. New estates usually fix the front garden layout through conditions or covenants, so a gate may need the developer\'s consent or a planning application.',
  },
  {
    question: 'What gate finish lasts on the Herne Bay seafront?',
    answer: 'Within a few streets of the front, aluminium or hot-dip galvanised steel under a powder coat, with stainless fixings. The north-facing seafront takes onshore wind off the Thames Estuary, which carries salt onto exposed metal.',
  },
  {
    question: 'Will Bullockstone Road works affect a new access?',
    answer: 'Kent County Council is widening Bullockstone Road, adding a shared footway and cycleway and extending the 40 mph limit, to serve the new estates. A new access onto it will need to suit the new layout, so speak to the council before planning one.',
  },
  {
    question: 'Will my gate post move on London Clay?',
    answer: 'It can. London Clay shrinks in dry summers and swells in wet winters. Deep, reinforced footings keep posts upright, and a cantilever sliding gate avoids a ground track that might tilt.',
  },
  {
    question: 'Has the council approved gates in Herne before?',
    answer: 'Yes. In 2021 it granted a boundary wall with entrance gates at Braggs Lane, Herne, and it has approved reinstated entrance gates on conservation area frontages in the town. Well-designed gates are routinely approved.',
  },
];

export default function HerneBayPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Herne Bay"
        image="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png"
        intro={
          <>
            <p>Herne Bay is growing fast, with three big estates under way, while its seafront and conservation areas need gates built for wind, salt and clay ground.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Strode Farm, Hillborough and the Golf Course Site">
            <p>
              Few Kent towns are adding homes as quickly. Canterbury City Council&apos;s list of <a href="https://www.canterbury.gov.uk/planning-and-building/planning-policies/adopted-local-plan-major-developments" className={linkClass} rel="noopener noreferrer" target="_blank">major developments</a> includes 800 homes at Strode Farm, about 700 on the former Herne Bay Golf Course and driving range, and about 1,300 at Hillborough with a business park extension and a primary school. Work has started on all of them.
            </p>
            <p>
              That means a lot of new homeowners about to think about their front boundary. On a new estate, the planning permission and the deeds usually fix the front garden layout. Read both before you plan a gate, and if a gate is allowed, an aluminium <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding gate</Link> suits the short frontages and modern houses typical of these estates.
            </p>
          </TownSection>

          <TownSection title="The Bullockstone Road Upgrade">
            <p>
              To serve Strode Farm, Hillborough and Greenhill, Kent County Council is widening Bullockstone Road, adding a shared footway and cycleway and extending the 40 mph limit. Any house with an access onto that road, or planning a new one, will be dealing with a changed layout. Kent County Council is the highway authority for dropped kerbs, and a new access onto a classified road also needs planning permission from Canterbury City Council.
            </p>
          </TownSection>

          <TownSection title="Onshore Wind Off the Estuary">
            <p>
              Herne Bay&apos;s seafront faces north across the Thames Estuary and takes onshore wind and salt. Within a few streets of the front, plain painted steel will show rust at the edges within a few winters. The longer-lasting choices are aluminium, which cannot rust, or <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>hot-dip galvanised steel under a powder coat</Link>, with stainless hinges and fixings.
            </p>
            <p>
              Wind matters as much as salt. A solid close-boarded gate catches the wind like a sail and can trip the motor&apos;s force limit, while a gate with spaced bars or slats lets it through. Ask the installer what wind load the motor is rated for.
            </p>
          </TownSection>

          <TownSection title="London Clay and Plenty Brook">
            <p>
              The town sits on London Clay with head deposits, a ground that shrinks and swells with the seasons. Gate posts in shallow footings can lean over a few years, so ask for deep, reinforced foundations, and consider a cantilever sliding gate if a ground track might tilt. Flood mapping is extensive along the coastal strip and the Plenty Brook valley, so check the <a href="https://check-for-flooding.service.gov.uk/" className={linkClass} rel="noopener noreferrer" target="_blank">Environment Agency flood map</a> before choosing an underground motor.
            </p>
          </TownSection>

          <TownSection title="Six Conservation Areas Around the Town">
            <p>
              Canterbury City Council has designated conservation areas at Herne Bay itself, The Eddington (1989), Broomfield (1998), Hawe Farm, Herne Windmill and Herne. The Herne Bay Conservation Area has an Article 4 direction on dwelling houses, confirmed in 1997, though the published record does not say which rights it removes, so check with the council before changing a front boundary there.
            </p>
            <p>
              With around 70 listed buildings in the wider area, most homeowners will not need listed building consent, which keeps Herne Bay simpler than Canterbury or Faversham.
            </p>
          </TownSection>

          <TownSection title="Reinstating Gates on Period Frontages">
            <p>
              The council has a record of approving gates that restore a street&apos;s character. It granted the reinstatement of entrance gates at 30 Station Road in 2004, and the retention of entrance walls and gates at 21 Margate Road in Broomfield in 2005. For the Victorian and Edwardian houses near the seafront, painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gates</Link> that match surviving railings are the obvious fit.
            </p>
          </TownSection>

          <TownSection title="Herne Village and Broomfield">
            <p>
              Inland, Herne is an older village with a windmill conservation area and Article 4 directions on individual cottages along Lower Herne Road and Bogshole Lane. In 2021 the council granted a boundary wall with entrance gates at Firwood Cottage on Braggs Lane (CA/21/02227), and entrance walls and gates at The Ivy House on Herne Street went through listed building consent in the late 1990s. Broomfield, along Margate Road, has detached houses on larger plots where automated gates with a video intercom are common. Timber gates suit the village cottages best.
            </p>
          </TownSection>

          <TownSection title="Automatic Gates for Herne Bay Drives">
            <p>
              Locally, people tend to search for automatic gates rather than electric gates, but they mean the same thing: a gate opened by a motor from a remote, keypad or phone. For a seafront house, choose motors with sealed housings, and mount the control box out of the weather. On a new-build drive, a sliding gate with a compact motor and a <Link href="/services/automated-gate-systems/" className={linkClass}>GSM intercom</Link>, which works over the mobile network, avoids running data cable to the house. Whatever the setup, the gate must be force tested to BS EN 12453 and handed over with a commissioning record.
            </p>
          </TownSection>

          <TownSection title="Roadside Gates and the Highway Rules">
            <p>
              Permitted development limits a gate beside a road used by vehicles to 1 metre in height, and the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a> allows the highway authority to require any gate that opens outwards over the road to be altered. On the busier routes into town, allow enough set-back for a car to wait off the carriageway.
            </p>
          </TownSection>

          <TownSection title="The Eddington and the Thanet Way">
            <p>
              The Eddington conservation area sits beside the Thanet Way, right next to the former golf course now being redeveloped. Houses here are close to one of the busiest roads into the town, which makes set-back important: a car turning in from fast traffic needs to stand fully off the road while the gate opens. A sliding gate that opens quickly, or a swing gate set well back from the pavement, avoids queuing on the carriageway.
            </p>
            <p>
              Traffic noise and headlights are another reason people here choose a gate, and a close-boarded timber gate does more for privacy than an open metal one. In a conservation area, keep it to a height and design that suits the street, and check with the council before going above the permitted development limit.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Herne Bay Homes"
            note="Aluminium suits the seafront and new estates; timber suits Herne village."
          />

          <FAQ faqs={faqs} title="Herne Bay Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
