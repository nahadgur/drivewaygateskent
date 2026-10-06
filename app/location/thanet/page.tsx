import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('thanet')!;
const description = 'Driveway and automatic gates in Thanet: Margate, Broadstairs and Ramsgate. Salt wind on three coasts, Article 4 controls on front gardens, Ramsgate\'s listed terraces, chalk ground and new estates.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Margate, Broadstairs and Ramsgate',
  description,
  path: '/location/thanet/',
  absoluteTitle: true,
});

const faqs = [
  {
    question: 'Do I need permission for a front gate in Ramsgate?',
    answer: 'In much of the old town, yes. Article 4 directions are in force in the Ramsgate, Ramsgate Marina extension and Pegwell conservation areas, and Thanet District Council\'s guidance says these can cover front gardens, including walls, gates, fences and hardstanding for parking. Many houses are listed as well, which brings in listed building consent.',
  },
  {
    question: 'What gate finish survives the Thanet coast?',
    answer: 'Aluminium, or steel that is hot-dip galvanised and then powder coated, with stainless fixings. Thanet faces the sea on three sides, so salt-laden wind reaches further inland than on the estuary towns.',
  },
  {
    question: 'Does a new gate in a listed wall need consent?',
    answer: 'Yes. In 2025 a new opening and gate in the rear boundary wall at 7 Guildford Lawn, Ramsgate, went through listed building consent. Any opening, gate or change to a wall around a listed house in Thanet needs it.',
  },
  {
    question: 'Are galvanised steel gates acceptable on a listed Ramsgate house?',
    answer: 'They can be. A 2024 listed building case at Townley House on Chatham Street, a grade II* house of 1792, proposed a galvanised steel vehicle gate. The design and finish still need to suit the building, so expect to provide drawings.',
  },
  {
    question: 'Is Broadstairs quieter for car crime than Margate?',
    answer: 'In recent police figures, yes, by a wide margin. Margate and Ramsgate town centres recorded several times more burglary and vehicle crime than Broadstairs. A closed gate and camera intercom are still worthwhile for a car parked off the street.',
  },
  {
    question: 'Can I add gates to a new home at Westgate or Birchington?',
    answer: 'Check your title deeds and the estate planning permission first. The large new sites at Westgate-on-Sea, Birchington and Westwood will set front garden rules through their permissions.',
  },
];

export default function ThanetPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Margate, Broadstairs and Ramsgate"
        image="/images/gates/gate-split-wrought-iron-vs-aluminium-sliding.png"
        intro={
          <>
            <p>Thanet faces the sea on three sides, and Ramsgate has one of the densest clusters of listed buildings in Kent, so gates here are built for salt and checked for heritage.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="Salt Wind on Three Coasts">
            <p>
              Thanet is an island in all but name, with the sea to the north, east and south-east and chalk cliffs at Cliftonville, Kingsgate and Broadstairs. Salt-laden wind does not stop at the seafront here; it carries across most of the isle. A plain powder coat over bare steel will chip and rust within a few winters, even several streets back.
            </p>
            <p>
              The specification that lasts is <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>hot-dip galvanised steel with a marine-grade powder coat</Link>, or aluminium, which cannot rust. Hinges, bolts and motor brackets should be A4 stainless. Motors need sealed housings, and the control box is best kept behind a wall rather than facing the wind. Rinse the gate with fresh water after winter storms and have the photocells cleaned at every service.
            </p>
          </TownSection>

          <TownSection title="Front Gardens Under Article 4 Control">
            <p>
              Thanet District Council&apos;s <a href="https://www.thanet.gov.uk/wp-content/uploads/2020/02/2020-08-Conservation-Areas-in-Thanet-Residents-and-Owners-Guidance-Consultation-Draft-accessible.docx.pdf" className={linkClass} rel="noopener noreferrer" target="_blank">guidance for owners in conservation areas</a> explains that Article 4 directions can cover front gardens, including hardstanding for parking, walls, gates and fences. Directions are in force in the Ramsgate, Ramsgate Marina extension and Pegwell conservation areas, listed street by street, including Addington Street, Albion Hill, Cliff Street and Kent Place.
            </p>
            <p>
              Conservation areas elsewhere include Margate, Margate Seafront, Dalby Square and Northdown Road in Cliftonville, Clifftop, Broadstairs, St Peters, Reading Street, Ramsgate Royal Esplanade and Montefiore. If your house is in one, check with the council before changing a front wall, gate or parking area.
            </p>
          </TownSection>

          <TownSection title="Ramsgate's Listed Terraces">
            <p>
              Around 450 listed buildings stand within a few kilometres of Ramsgate, one of the highest densities in Kent, with around 250 around Margate and 135 around Broadstairs. The council&apos;s guidance names early 19th-century terraces as the typical Ramsgate conservation area house. On a listed house, even a gate in a rear wall needs consent: in 2025 a new opening and gate at 7 Guildford Lawn went through listed building consent (L/TH/25/0913).
            </p>
            <p>
              The council will consider modern materials when they suit the building. A 2024 case at Townley House on Chatham Street, a grade II* house built in 1792, proposed a galvanised steel vehicle gate. The lesson is that a well-drawn, painted <Link href="/services/metal-driveway-gates/" className={linkClass}>metal gate</Link> in a simple traditional pattern has a fair chance, provided the drawings show it clearly.
            </p>
          </TownSection>

          <TownSection title="Chalk Ground and Clifftop Plots">
            <p>
              The whole isle sits on chalk, with tidal-flat clay at Margate&apos;s old harbour and head deposits in places. Chalk drains freely and takes post footings well, and flood zones are confined to the harbour fronts. On clifftop plots at Kingsgate, Pegwell and Cliftonville, the main issues are wind and exposure rather than ground: an open gate design with spaced bars lets the wind through, while a solid gate acts like a sail and strains the motor.
            </p>
          </TownSection>

          <TownSection title="Automatic Gates in Margate and Ramsgate">
            <p>
              Locally, people search for automatic gates in Margate and Ramsgate rather than electric gates, but they mean the same thing: a motorised gate opened from a remote, keypad or phone. On a terraced frontage with no room for swing leaves, a single-leaf <Link href="/services/electric-sliding-gates/" className={linkClass}>sliding gate</Link> is often the only option. On the larger houses in Westgate, Birchington and Kingsgate, a pair of automated swing gates with a video intercom is common. Either way, the installer should force test the gate to BS EN 12453 and hand over a commissioning record.
            </p>
          </TownSection>

          <TownSection title="Westgate, Birchington and Westwood">
            <p>
              Thanet&apos;s Local Plan included large new sites: about 1,000 homes at Westgate-on-Sea, 600 at Birchington and 500 at Westwood. The council is now preparing a partial update to 2040 that proposes several thousand more homes on the isle, and has proposed almost 300 council homes in Margate and Manston. New estates set their own front garden rules, so check the deeds and the permission before planning a gate.
            </p>
          </TownSection>

          <TownSection title="St Peter's, Reading Street and Pegwell">
            <p>
              Inland of Broadstairs, St Peter&apos;s and Reading Street are village conservation areas with older flint and brick houses, where timber or painted metal gates suit the lanes. Pegwell, on the clifftop south of Ramsgate, has its own Article 4 direction. In each, the council will expect gates to suit the village rather than a modern estate.
            </p>
          </TownSection>

          <TownSection title="Crime in Margate, Ramsgate and Broadstairs">
            <p>
              Recent police figures show a sharp difference across the isle: the areas around Margate and Ramsgate town centres recorded several times more burglary and vehicle crime than Broadstairs. In July 2026 a police pursuit from Ramsgate into Margate ended in an arrest on suspicion of burglary. A closed automated gate keeps a car out of reach of the street, and a camera intercom records anyone at the entrance.
            </p>
          </TownSection>

          <TownSection title="Dropped Kerbs and Roadside Gates in Thanet">
            <p>
              Kent County Council is the highway authority and handles dropped kerbs, and a new access onto a classified road also needs planning permission from Thanet District Council. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, the highway authority can require any gate that opens outwards over the road to be altered, so gates must swing inwards or slide.
            </p>
          </TownSection>

          <TownSection title="Cliftonville, Dalby Square and Northdown Road">
            <p>
              East of Margate, Cliftonville has two conservation areas of its own, Dalby Square and Northdown Road, with large older houses laid out around squares and along the main road. Many have been divided into flats. Before planning a gate on a converted house, check the lease and get agreement from the freeholder and the other owners, because the front boundary is usually shared. Where original railings survive, a painted metal gate matched to them is the safe choice in the conservation area.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Thanet Homes"
            note="Aluminium and galvanised steel suit the whole isle; painted metal suits the listed terraces."
          />

          <FAQ faqs={faqs} title="Thanet Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
