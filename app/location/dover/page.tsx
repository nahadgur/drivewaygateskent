import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { getTownPage } from '@/data/townPages';
import { TownShell } from '@/components/town/TownShell';
import { TownHero } from '@/components/town/TownHero';
import { TownSection, linkClass } from '@/components/town/TownSection';
import { TownGateTypes } from '@/components/town/TownGateTypes';
import { TownSchema } from '@/components/town/TownSchema';
import { FAQ } from '@/components/FAQ';

const town = getTownPage('dover')!;
const description = 'Driveway and electric gates in Dover: the Dour Street Article 4 on gates, steep chalk drives and the Dour valley flood zone, Channel wind, Whitfield\'s new estates and the Kent Downs villages.';

export const metadata = pageMetadata({
  title: 'Driveway Gates in Dover, Kent',
  description,
  path: '/location/dover/',
});

const faqs = [
  {
    question: 'Do I need planning permission for a gate on Dour Street?',
    answer: 'Yes. Dover District Council confirmed an Article 4 direction for the Dour Street Conservation Area in 2024 that brings gates, fences and walls fronting a road, waterway or public space under planning control. Any new or altered front gate there needs planning permission.',
  },
  {
    question: 'Will a sliding gate work on a steep Dover drive?',
    answer: 'A standard sliding gate needs a level run, which many Dover drives on Castle Hill, Western Heights and Tower Hamlets do not have. A cantilever sliding gate that runs clear of the ground, or swing gates on rising hinges, are the usual answers.',
  },
  {
    question: 'Is my Dover home at risk of flooding a gate motor?',
    answer: 'If it is on the floor of the Dour valley, possibly. The river runs through the town and its valley is flood-mapped. Avoid an underground motor chamber there, mount the control box high, and use sealed connectors.',
  },
  {
    question: 'What finish should a gate have near Waterloo Crescent?',
    answer: 'Aluminium, or hot-dip galvanised steel under a powder coat, with stainless fixings. Seafront and cliff-top homes take Channel wind and spray, which rusts plain painted steel quickly.',
  },
  {
    question: 'Can I add gates to a new house at Whitfield?',
    answer: 'Check the title deeds and the estate planning permission first. The Whitfield Urban Expansion is being built in phases, and new estates usually control front gardens through conditions or covenants.',
  },
  {
    question: 'Do I need permission for a new gated entrance in the Alkham Valley?',
    answer: 'A new vehicle access with gates and fencing in the Kent Downs goes through planning. In 2022 an application on Alkham Valley Road sought exactly that. Keep the design simple and rural, and talk to the council first.',
  },
];

export default function DoverPage() {
  return (
    <TownShell>
      <TownSchema town={town} description={description} faqs={faqs} />
      <TownHero
        town={town.name}
        slug={town.slug}
        title="Driveway Gates in Dover"
        image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
        intro={
          <>
            <p>Dover climbs steeply out of the Dour valley under the White Cliffs, so gates here deal with slopes, Channel wind and, on Dour Street, an Article 4 direction on front gates.</p>
            <p>Describe your entrance and up to three local installers will arrange a survey and a written quote.</p>
          </>
        }
      />

      <div className="container-width py-14">
        <div className="max-w-3xl mx-auto">
          <TownSection title="The Dour Street Article 4 Direction">
            <p>
              Dover District Council confirmed Article 4 Direction Number 1 of 2024 for the Dour Street Conservation Area. It brings under planning control the erection, alteration or improvement of any gate, fence, wall or other means of enclosure fronting a road, waterway or publicly accessible space (<a href="https://www.dover.gov.uk/Planning/Heritage/Conservation-Areas/Scanned-copy-of-confirmed-Dour-Street-Art-4-Direction-1-of-2024.pdf" className={linkClass} rel="noopener noreferrer" target="_blank">Dover District Council</a>). The conservation area, first designated in 1987, was extended in May 2024 at the same time.
            </p>
            <p>
              If your house is in the extended area, a new or replacement front gate needs planning permission. Painted metal or timber gates that match the street are what the council expects.
            </p>
          </TownSection>

          <TownSection title="Nine Conservation Areas in the Town">
            <p>
              Beyond Dour Street, Dover has conservation areas at the Town Centre, Charlton Green, Dover Castle, Dover College, London Road, Waterloo Crescent, Western Heights and River. Around 145 listed buildings stand within a few kilometres of the centre, fewer than Deal or Sandwich, so most homeowners will not need listed building consent. Charlton Green and London Road have Victorian streets where <Link href="/services/metal-driveway-gates/" className={linkClass}>painted metal gates</Link> on brick piers suit the houses.
            </p>
          </TownSection>

          <TownSection title="Steep Chalk Sides and the Dour Valley Floor">
            <p>
              The town centre sits on chalk with clay, silt and gravel along the floor of the Dour valley. The river runs through the town and its valley is flood-mapped, while houses climb the steep chalk sides at Castle Hill, Western Heights and Tower Hamlets.
            </p>
            <p>
              The two halves of the town need different gates. On the valley floor, avoid underground motor chambers, mount the control box high and choose above-ground arm motors. On the slopes, a standard sliding gate needs a level run that many drives do not have, so a <Link href="/services/electric-sliding-gates/" className={linkClass}>cantilever sliding gate</Link> or swing gates on rising hinges are the practical choices. Chalk takes post footings well and drains freely.
            </p>
          </TownSection>

          <TownSection title="Channel Wind Under the White Cliffs">
            <p>
              Seafront houses on Waterloo Crescent and Marine Parade, and the estates on the cliff tops, take Channel wind and spray. <Link href="/blog/coastal-gate-corrosion-protection/" className={linkClass}>Galvanised steel under a marine-grade coat</Link>, or aluminium, with stainless fixings is the specification that lasts. Wind load matters too: a solid gate catches gusts like a sail and can trip the motor, so open designs with spaced bars are better on exposed plots.
            </p>
          </TownSection>

          <TownSection title="Whitfield and the New Estates">
            <p>
              North of the town, the Whitfield Urban Expansion is allocated for 6,350 homes in total, with about 2,200 due by 2040. Reserved matters for first-phase plots of 308 and 244 homes moved through in 2025, and the all-electric Dover Fastrack bus now links Whitfield to the town centre and Dover Priory station. New estates set their own front garden rules, so read the deeds and the permission before planning a gate. Where a gate is allowed, an aluminium sliding gate suits the short frontages.
            </p>
          </TownSection>

          <TownSection title="River, Temple Ewell and the Alkham Valley">
            <p>
              Up the Dour valley, River has its own conservation area, and Temple Ewell and Kearsney sit in the Kent Downs National Landscape. West of the town, the Alkham Valley is classic Downs country, and new gated entrances there go through planning: in 2022 an application on Alkham Valley Road sought a new vehicle access with entrance gates and fencing. <Link href="/services/wooden-driveway-gates/" className={linkClass}>Timber gates</Link> on simple posts suit these villages and are what planning officers expect in the Downs.
            </p>
          </TownSection>

          <TownSection title="St Margaret's at Cliffe">
            <p>
              East along the cliffs, St Margaret&apos;s at Cliffe is a clifftop village with a St Margaret&apos;s Bay conservation area appraisal adopted in 2023. Homes here face the full force of Channel weather, and many sit on long plots. Galvanised or aluminium gates with sealed motors, and a GSM intercom that avoids long data cables, are the practical combination.
            </p>
          </TownSection>

          <TownSection title="Motorbike Thefts and Car Tampering">
            <p>
              Between January and May 2026 Kent Police targeted motorbike and moped thefts after bikes were taken from addresses in St Radigund&apos;s, Whitfield and Buckland. In July 2026 an arrest followed cars being tampered with on Folkestone Road in the early hours. A closed gate keeps bikes and cars off the street side of the boundary, and a <Link href="/services/automated-gate-systems/" className={linkClass}>camera intercom</Link> records anyone at the entrance.
            </p>
          </TownSection>

          <TownSection title="Dropped Kerbs and the Roads Out of Dover">
            <p>
              Kent County Council is the highway authority and handles dropped kerbs. A new access onto a classified road, such as the A256, A258 or the London Road and Folkestone Road approaches, also needs planning permission from Dover District Council. Under the <a href="https://www.legislation.gov.uk/ukpga/1980/66/section/153" className={linkClass} rel="noopener noreferrer" target="_blank">Highways Act 1980</a>, the highway authority can require any gate that opens outwards over the road to be altered, so roadside gates must swing inwards or slide.
            </p>
          </TownSection>

          <TownSection title="Choosing a Motor for a Sloping Drive">
            <p>
              On Dover&apos;s steep streets, motor choice matters as much as gate style. A gate that opens uphill has to lift slightly as it swings, and a gate that opens downhill can run away under its own weight if the motor has no brake. Installers deal with this by setting the hinge geometry so the leaf clears the slope, and by choosing a motor with enough torque for the gate&apos;s weight on that gradient, with a margin to spare.
            </p>
            <p>
              Ask the installer to weigh the gate, measure the slope and explain the motor they have chosen. A battery backup is worth adding on a steep drive, because a gate that stops halfway in a power cut is harder to push by hand uphill. Every automated gate should also have a manual release, demonstrated at handover.
            </p>
          </TownSection>

          <TownGateTypes
            heading="Gate Types for Dover Homes"
            note="Aluminium suits the seafront and cliff tops; timber suits the Downs villages."
          />

          <FAQ faqs={faqs} title="Dover Gate Questions" />
        </div>
      </div>
    </TownShell>
  );
}
