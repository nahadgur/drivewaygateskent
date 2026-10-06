import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('medway')!;
const description = 'Driveway and electric gates in Medway: Rochester, Chatham, Gillingham and Strood. Medway Council\'s own dropped kerb rules, Article 4 streets that control boundary gates, chalk slopes and car crime.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Medway: Rochester, Chatham and Gillingham',
  description,
  path: '/location/medway/',
  absoluteTitle: true,
});

const faqs = [
  {
    question: 'Who approves a dropped kerb in Medway?',
    answer: 'Medway Council, not Kent County Council. Medway is a unitary authority and runs its own highways. Its rules require the crossing to be at least 10 metres from a junction and 1 metre from a streetlight or telegraph pole, with a maximum width of 5.6 metres. The application fee is not refunded if the application is refused.',
  },
  {
    question: 'Does my Medway street have an Article 4 direction on gates?',
    answer: 'Some do. Medway Council has Article 4 directions on houses in named conservation area streets that remove the right to put up, alter or remove boundary gates, fences or walls. They include Watts Avenue, Roebuck Road, King Edward Road and parts of the High Street in Rochester, Park Avenue and Cleave Road in Gillingham, and stretches of Maidstone Road in Chatham. Check the council\'s list for your address.',
  },
  {
    question: 'Can I automate gates on a listed house in Medway?',
    answer: 'It can be approved. In 2024 Medway Council granted listed building consent for actuator arms to automate replacement timber gates at Upnor Castle House, with the motors fitted inside the boundary. Keep the operators discreet and the gate design traditional.',
  },
  {
    question: 'Will a gate work on a steep chalk drive in Hempstead or Walderslade?',
    answer: 'Yes, with the right design. On steep plots, swing gates need rising hinges or leaves shaped to the slope, and some sites need regraded levels or retaining walls. A cantilever sliding gate, which runs clear of the ground, avoids the problem of a track on a slope.',
  },
  {
    question: 'Are electric gates worth it given car crime in Chatham and Gillingham?',
    answer: 'They help. Chatham and Gillingham have some of the highest vehicle crime counts in Kent in recent police figures. A closed automated gate slows a stolen car leaving the drive, and a camera intercom records it. Combine it with keeping keys away from the door and a steering lock.',
  },
  {
    question: 'Does the Local Plan 2041 change anything for gates?',
    answer: 'Not directly. It plans for around 24,500 new homes, including at Land West of Hoo and Land West of Strood. New estates there will set their own front garden rules through the planning permission and the deeds.',
  },
];

export default function MedwayPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Medway"
        image="/images/gates/gate-steel-installation-two-engineers-suburban.png"
        intro={
          <>
            <p>Rochester, Chatham, Gillingham and Strood have their own council for both planning and highways, with their own dropped kerb rules and Article 4 streets that control boundary gates.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="One Council for Planning and Highways">
            <p>
              Medway is different from the rest of Kent. Medway Council is a unitary authority, so it is both the planning authority and the highway authority. Kent County Council plays no part in a Medway dropped kerb, and Medway sets its own rules. Its <a href="https://www.medway.gov.uk/info/200136/parking_roads_travel/476/dropped_kerbs/3" className={linkClass} rel="noopener noreferrer" target="_blank">dropped kerb guidance</a> requires a crossing to be at least 10 metres from a junction and 1 metre from a streetlight or telegraph pole, with a maximum width of 5.6 metres, and the fee is not refunded if the application is refused.
            </p>
            <p>
              Those rules decide whether a gated drive is possible at all. On a corner plot within 10 metres of a junction, a new crossing will fail, however good the gate. Check the kerb first, then design the gate around it.
            </p>
          </TownSection>

          <TownSection title="Article 4 Streets That Control Boundary Gates">
            <p>
              Medway Council has made <a href="https://www.medway.gov.uk/info/200147/applying_for_planning_permission/553/article_4_directions/2" className={linkClass} rel="noopener noreferrer" target="_blank">Article 4 directions</a> on houses in named streets within its conservation areas. They remove the right to put up, alter or remove boundary gates, fences or walls, so any change needs planning permission. The streets include Watts Avenue, Roebuck Road, King Edward Road, Gundolph Road, New Road and Orange Terrace in Rochester, numbers 200 to 392 High Street Rochester, Park Avenue and Cleave Road in Gillingham Park, two stretches of Maidstone Road in Chatham, and parts of Brompton and Upnor.
            </p>
            <p>
              Most of these are Victorian and Edwardian terraces and villas with original front walls and railings. Painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gates</Link> that match surviving railings are what the council expects.
            </p>
          </TownSection>

          <TownSection title="Historic Rochester and Hundreds of Listed Buildings">
            <p>
              Medway has an exceptional concentration of listed buildings: more than 400 within a few kilometres of both Rochester and Chatham, and over 300 around Strood. Conservation areas include Historic Rochester, Star Hill to Sun Pier, New Road, Watts Avenue and Roebuck Road, Maidstone Road in Chatham, Brompton Lines, Chatham Historic Dockyard, Gillingham Park, Gillingham Green, Railway Street, Upnor, and Frindsbury and Manor Farm. On a listed house, gates need listed building consent, and the Georgian frontages of Rochester High Street are among the most sensitive in Kent.
            </p>
          </TownSection>

          <TownSection title="Automated Gates on Listed Houses">
            <p>
              Listed does not mean manual. In May 2024 Medway Council granted listed building consent at Upnor Castle House for actuator arms to automate replacement timber entrance gates (MC/24/0565). The key was that the operators sat inside the boundary, out of view. On a listed house, ask the installer for slim arm motors fixed to the inside of the posts, photocells set into the piers, and a control box tucked out of sight. <Link href="/services/automated-gate-systems/" className={linkClass}>Automation</Link> that the street cannot see is far easier to approve.
            </p>
          </TownSection>

          <TownSection title="Chalk Slopes in Hempstead and Walderslade">
            <p>
              Medway is built on chalk, with alluvium along the river frontage. Inland, the chalk rises into steep residential areas such as Hempstead and Walderslade, where larger detached houses sit on sloping plots. At Pemberth Lodge in Hempstead, a gate scheme needed regraded land levels and retaining walls. On slopes like these, a swing gate needs rising hinges or a leaf shaped to the gradient, and a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link> often works better than a ground track. Chalk itself drains freely and takes post footings well.
            </p>
          </TownSection>

          <TownSection title="Sliding Gates and Turning Space">
            <p>
              Medway Council has approved gated frontages where the layout works. In 2016 it granted a front boundary wall with sliding gates and a driveway turning area at 578 City Way, Rochester (MC/16/2249). A turning area means cars leave forwards rather than reversing onto a busy road, which highways officers welcome. On main roads into Chatham and Rochester, plan the gate and the turning space together.
            </p>
          </TownSection>

          <TownSection title="Car Crime Across Chatham and Gillingham">
            <p>
              In police figures for the year to August 2026, the areas around Chatham and Gillingham town centres recorded some of the highest vehicle crime counts in Kent. In January 2026 a serial burglar who targeted homes in Rainham, Cliffe, Rochester and Gillingham was jailed, and 2025 brought charges over keyless car theft in the area. A closed automated gate with a camera intercom slows a car leaving the drive and records the attempt; a signal-blocking pouch for keys stops relay theft at the source.
            </p>
          </TownSection>

          <TownSection title="Rainham, Strood and the Hoo Peninsula">
            <p>
              Rainham, on the Gillingham side, has suburban semis and detached houses, with a new boundary wall and gates granted at Maidstone Road (MC/11/3047). Strood and Frindsbury combine a conservation area with Green Belt on the western fringe, and the Kent Downs reach the Rochester and Strood edges. Out on the Hoo Peninsula, Cliffe is a rural village where a new vehicle crossing with entrance gates has been approved at Buckland Road. Timber gates suit the villages; aluminium suits the newer estates.
            </p>
          </TownSection>

          <TownSection title="The Local Plan 2041">
            <p>
              Medway submitted its Local Plan 2041 in December 2025, planning for about 24,500 homes, roughly 40% on urban and waterfront regeneration sites, with allocations including Land West of Hoo and Land West of Strood. The Inspectors began their examination in 2026, with adoption targeted by the end of the year. New estates will set their own rules on front gardens, so buyers should read the deeds before planning a gate. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, any gate on a roadside boundary must open inwards or slide.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Medway Homes"
            note="Painted metal suits the Article 4 streets; aluminium suits the newer estates."
          />

          <FAQ faqs={faqs} title="Medway Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
