import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('folkestone')!;
const description = 'Driveway and electric gates in Folkestone and Hythe: landslips on The Leas and in Sandgate, Channel salt air, the West End conservation area, Hawkinge, and Otterpool Park.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Folkestone, Kent',
  description,
  path: '/location/folkestone/',
});

const faqs = [
  {
    question: 'Is it safe to put heavy gate posts near the cliffs in Folkestone?',
    answer: 'It needs care. The council has recorded landslips on The Leas, the Road of Remembrance and in Sandgate since 2023, linked to heavy rain and the erosion-prone sandy ground. On cliff-top and steep plots, ask for a ground assessment, deeper footings, and lighter gates such as aluminium.',
  },
  {
    question: 'What gate finish lasts on The Leas or Sandgate Esplanade?',
    answer: 'Aluminium, or steel that is hot-dip galvanised and then powder coated, with A4 stainless fixings. A plain powder coat over bare steel will start rusting from the edges within a few winters in direct Channel spray.',
  },
  {
    question: 'Do I need permission for gates in the Folkestone conservation area?',
    answer: 'A gate up to 1 metre beside a road is usually permitted development, even in a conservation area, unless an Article 4 direction applies. Taller gates need permission. Folkestone and Hythe District Council covers the town, the Old Town, Sandgate, Hythe and Saltwood conservation areas, so check with them first.',
  },
  {
    question: 'How do I apply for a dropped kerb in Folkestone?',
    answer: 'The district council directs residents to Kent County Council, the highway authority, which uses a self-assessment form. If the road is classified, such as the A259, A260 or A20, you also need planning permission from the district council.',
  },
  {
    question: 'Can I add gates to a new home at Hawkinge or Otterpool Park?',
    answer: 'Check the title deeds and the estate\'s planning permission first, as new estates often restrict changes to front gardens. Hawkinge sits on the edge of the Kent Downs, where a simple design is more likely to be accepted.',
  },
  {
    question: 'Are car thefts a problem in Folkestone and Sandgate?',
    answer: 'Kent Police warned in early 2026 about someone trying car door handles in the early hours across Folkestone, with several cars targeted in Sandgate. A closed gate and a camera intercom keep cars out of easy reach of the street.',
  },
];

export default function FolkestonePage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Folkestone"
        image="/images/gates/gate-split-wrought-iron-vs-aluminium-sliding.png"
        intro={
          <>
            <p>Folkestone gates face Channel salt air on the seafront and, on the cliff-top streets, ground that has been slipping since 2023.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Landslips on The Leas and in Sandgate">
            <p>
              Folkestone and Hythe District Council has recorded a run of <a href="https://www.folkestone-hythe.gov.uk/parks-beaches-open-spaces/folkestone-landslips" className={linkClass} rel="noopener noreferrer" target="_blank">landslips</a> since late 2023: near the Lower Leas Coastal Park in November 2023, several on the Road of Remembrance in early 2024 that closed it until August 2025, and below Madeira Walk, behind Sunny Sands and in The Riviera at Sandgate in March 2024. The council points to heavy rain and the sandy, erosion-prone Folkestone Formation.
            </p>
            <p>
              A gate is a small structure, but a heavy pair of iron or hardwood leaves puts real load on its posts. On cliff-top and steep plots, ask the installer how deep the footings will go, whether the ground has moved before, and whether a lighter <Link href="/services/metal-driveway-gates/" className={linkClass}>aluminium gate</Link> would reduce the load. If there are cracks in nearby walls or paths, get advice on the ground before you dig.
            </p>
          </TownSection>

          <TownSection title="Channel Salt on the Seafront">
            <p>
              The Leas, Sandgate Esplanade and the harbour face straight into the Channel. Salt spray settles on everything, and a standard powder coat over bare steel will chip and rust within a few winters. Specify <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>hot-dip galvanised steel under a marine-grade coat</Link> or aluminium, A4 stainless hinges and fixings, and motors with sealed housings. Rinse the gate with fresh water after storms and have the photocells cleaned at every service, because a lens clouded with salt can stop the gate closing.
            </p>
          </TownSection>

          <TownSection title="Conservation Areas From the Old Town to Saltwood">
            <p>
              The district council has designated conservation areas across the town and coast: Folkestone itself, including The Leas and the West End; the Folkestone Old Town, which has its own appraisal; Sandgate High Street and Sandgate Esplanade; Hythe; Saltwood; Newington; and Etchinghill. The council has no Article 4 directions on the national register, although Sandgate Parish Council has asked for them in two of its conservation areas. For now, a gate within the permitted development height is usually allowed, but a tall solid gate across a period frontage is likely to be questioned.
            </p>
          </TownSection>

          <TownSection title="West End Villas and Grimston Gardens">
            <p>
              The West End, behind The Leas, is a district of Victorian and Edwardian villas, many now flats, with front walls, railings and gate piers. An application at Grimston Gardens (24/1931/FH) sought retrospective approval for a garden wall with railings, a double gate to the front and a single side gate, which shows these boundaries are watched. Painted iron or steel gates matched to the railings are the natural choice, and on a converted house, check with the freeholder and other flat owners first.
            </p>
          </TownSection>

          <TownSection title="Hythe, Saltwood and Sandgate">
            <p>
              West along the coast, Hythe and Saltwood have their own conservation areas, and Sandgate sits between the cliffs and the sea with the landslip and salt exposure of both. In Saltwood, set back from the coast, timber gates on brick piers suit the village; in Sandgate, aluminium or galvanised steel suits the seafront houses.
            </p>
          </TownSection>

          <TownSection title="Hawkinge and the Downs Behind the Town">
            <p>
              Behind Folkestone, the Kent Downs National Landscape covers the north of the district, around Hawkinge, Etchinghill and Newington. Hawkinge has grown with large modern estates on the edge of the Downs, while Etchinghill and Newington are older villages with conservation areas. For a newer house, an aluminium <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding gate</Link> suits short frontages; in the villages, hardwood fits better.
            </p>
          </TownSection>

          <TownSection title="Otterpool Park Garden Town">
            <p>
              Otterpool Park, near Sellindge and Westenhanger, is planned as a garden town of 8,500 homes. The district council and Homes England renewed their planning collaboration agreement in March 2026, and a public exhibition followed in June. As with any new estate, front garden rules will be set by the permissions and deeds.
            </p>
          </TownSection>

          <TownSection title="Door-Handle Thefts in Sandgate">
            <p>
              In early 2026 Kent Police warned of someone trying car door handles in the early hours across Folkestone, and on 9 February several cars were targeted in Sandgate. A closed gate keeps a parked car out of easy reach of the pavement, and a camera intercom records anyone at the entrance.
            </p>
          </TownSection>

          <TownSection title="Dropped Kerbs Through Kent County Council">
            <p>
              The district council directs residents to Kent County Council, the highway authority, for dropped kerbs, using a self-assessment form. A new access onto a classified road such as the A259, A260 or A20 also needs planning permission. Permitted development limits a gate beside a road used by vehicles to 1 metre (<a href="https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2" className={linkClass} rel="noopener noreferrer" target="_blank">GPDO Schedule 2, Part 2</a>), and gates may not open outwards over the pavement.
            </p>
          </TownSection>

          <TownSection title="Lighter Gates for Steep and Exposed Plots">
            <p>
              Weight matters more in Folkestone than in most towns. A solid wrought iron pair can weigh several times as much as an aluminium gate of the same size, and that load sits on the posts and hinges every time the wind catches the leaves. On a cliff-top or sloping plot, where the ground may move and the wind off the Channel is strong, a lighter gate puts less strain on the footings and lets the installer fit a smaller motor.
            </p>
            <p>
              Open designs help too. A gate with vertical bars or spaced slats lets the wind through, while a solid close-boarded gate acts like a sail and can trip the motor&apos;s force limit in a gale. Ask the installer how the gate is braced and what wind load the motor is rated for.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Folkestone Homes"
            note="Aluminium suits the seafront and cliff-top plots; painted iron suits the West End villas."
          />

          <FAQ faqs={faqs} title="Folkestone Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
