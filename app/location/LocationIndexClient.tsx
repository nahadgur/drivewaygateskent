'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

// Kent's 13 local planning authorities and the town pages that sit in each.
const COUNCILS: { name: string; note: string; towns: { slug: string; label: string }[] }[] = [
  {
    name: 'Sevenoaks District',
    note: 'Most of the district is Green Belt and much of it National Landscape. Kemsing has an Article 4 direction on gates and walls.',
    towns: [{ slug: 'sevenoaks', label: 'Sevenoaks' }, { slug: 'westerham', label: 'Westerham, Brasted and Edenbridge' }],
  },
  {
    name: 'Tunbridge Wells Borough',
    note: 'High Weald and Green Belt cover about three quarters of the borough. Listed stone walls on Calverley Road; a new Local Plan adopted in December 2025.',
    towns: [{ slug: 'tunbridge-wells', label: 'Tunbridge Wells' }, { slug: 'cranbrook', label: 'Cranbrook, Hawkhurst and Goudhurst' }],
  },
  {
    name: 'Tonbridge and Malling Borough',
    note: 'About 71% Green Belt, with the Medway floodplain running through Tonbridge, Aylesford and Snodland.',
    towns: [{ slug: 'tonbridge', label: 'Tonbridge and Hildenborough' }, { slug: 'west-malling', label: 'West Malling, Aylesford and Snodland' }],
  },
  {
    name: 'Maidstone Borough',
    note: 'Ragstone walls, steep drives under the Kent Downs, village Article 4 directions, and large new estates at Heathlands and Lidsing.',
    towns: [{ slug: 'maidstone', label: 'Maidstone and the villages' }],
  },
  {
    name: 'Dartford Borough',
    note: 'Article 4 directions on gates and walls at West Hill and Greenhithe, and fast growth around Ebbsfleet.',
    towns: [{ slug: 'dartford', label: 'Dartford, Greenhithe and Swanley' }],
  },
  {
    name: 'Gravesham Borough',
    note: 'Thirteen conservation areas where new gates, walls and hard surfaces need planning permission.',
    towns: [{ slug: 'gravesend', label: 'Gravesend, Meopham and Cobham' }],
  },
  {
    name: 'Medway Council',
    note: 'A unitary authority that runs its own planning and highways, with Article 4 streets controlling boundary gates.',
    towns: [{ slug: 'medway', label: 'Rochester, Chatham, Gillingham and Strood' }],
  },
  {
    name: 'Canterbury City',
    note: 'Nearly 100 conservation areas across the district, from the city’s Article 4 streets to the Whitstable and Herne Bay seafronts.',
    towns: [{ slug: 'canterbury', label: 'Canterbury' }, { slug: 'whitstable', label: 'Whitstable' }, { slug: 'herne-bay', label: 'Herne Bay' }],
  },
  {
    name: 'Swale Borough',
    note: 'An Article 4 direction across the Faversham Conservation Area brings front gates under planning control.',
    towns: [{ slug: 'faversham', label: 'Faversham' }],
  },
  {
    name: 'Ashford Borough',
    note: 'Article 4 directions written specifically for gates and fences, and Kent Downs farmhouses at Wye and Challock.',
    towns: [{ slug: 'ashford', label: 'Ashford' }, { slug: 'tenterden', label: 'Tenterden' }],
  },
  {
    name: 'Folkestone and Hythe District',
    note: 'Channel salt air on the seafront and landslips on The Leas and in Sandgate since 2023.',
    towns: [{ slug: 'folkestone', label: 'Folkestone and Hythe' }],
  },
  {
    name: 'Dover District',
    note: 'Article 4 controls on gates in Deal’s Middle Street, Sandwich’s walled town and Dover’s Dour Street.',
    towns: [{ slug: 'dover', label: 'Dover' }, { slug: 'deal', label: 'Deal, Walmer and Sandwich' }],
  },
  {
    name: 'Thanet District',
    note: 'Sea on three sides, Article 4 controls on front gardens in Ramsgate, and one of Kent’s densest clusters of listed buildings.',
    towns: [{ slug: 'thanet', label: 'Margate, Broadstairs and Ramsgate' }],
  },
];

export default function LocationIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();
  const filteredCouncils = COUNCILS.map(council => ({
    ...council,
    towns: council.name.toLowerCase().includes(query) ? council.towns : council.towns.filter(town => town.label.toLowerCase().includes(query) || town.slug.includes(query)),
  })).filter(council => council.towns.length > 0);
  const townCount = filteredCouncils.reduce((count, council) => count + council.towns.length, 0);

  return <>
    <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <Header onOpenModal={() => setIsModalOpen(true)} />
    <main id="main-content" className="subpage locations-index">
      <header className="location-opening container-width">
        <Breadcrumbs items={[{ label: 'Areas we cover' }]} />
        <div className="location-opening-layout">
          <div className="location-opening-copy"><p className="eyebrow">Local knowledge matters</p><h1>Driveway Gates<br /><em>Across Kent</em></h1><p>Planning rules, ground and weather change from one council to the next. Find your area to see what applies to a gate where you live.</p><a href="#kent-districts" className="text-link">Find your area</a></div>
          <figure className="location-opening-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gates/gate-aerial-wrought-iron-closed-topiary-gravel-circle.png" alt="Gated Kent country entrance with gravel driveway and topiary" width={1408} height={768} fetchPriority="high" />
          </figure>
        </div>
      </header>
      <section id="kent-districts" className="location-directory container-width" aria-labelledby="area-finder-title">
        <div className="area-finder"><div><h2 id="area-finder-title">Find your area</h2><p>Choose a town for local gate advice.</p></div><label className="area-search"><span>Search towns or districts</span><input type="search" placeholder="e.g. Sevenoaks or Canterbury" value={search} onChange={event => setSearch(event.target.value)} /></label></div>
        <div className="area-directory-meta"><p role="status">{townCount} {townCount === 1 ? 'area' : 'areas'} across {filteredCouncils.length} {filteredCouncils.length === 1 ? 'council' : 'councils'}</p>{query && <button onClick={() => setSearch('')} className="text-link">Clear search</button>}</div>
        {filteredCouncils.length > 0 ? <div className="area-district-grid">{filteredCouncils.map(council => <section key={council.name} className="area-district">
          <h3>{council.name}</h3>
          <ul className="area-town-links">{council.towns.map(town => <li key={town.slug}><Link href={`/location/${town.slug}/`} aria-label={`Driveway gates in ${town.label}`}>{town.label}</Link></li>)}</ul>
          <details className="area-rules"><summary>Local gate rules<span className="rules-closed" aria-hidden="true">+</span><span className="rules-open" aria-hidden="true">&minus;</span></summary><p>{council.note}</p></details>
        </section>)}</div> : <div className="area-empty"><h3>No matching areas</h3><p>Try a nearby town or a district name.</p><button className="btn-primary" onClick={() => setSearch('')}>Show all areas</button></div>}
        <div className="county-rule-overview"><h2>Kent&apos;s 13 Councils<br /><em>and Their Gate Rules</em></h2><p>Kent has 12 district councils plus Medway, and each sets its own policy on conservation areas, Article 4 directions and front boundaries. Kent County Council handles dropped kerbs everywhere except Medway, which runs its own highways.</p></div>
      </section>
      <section className="subpage-faq container-width"><p className="eyebrow">Before you begin</p><FAQ faqs={FAQS_LOCATION} /></section>
    </main>
    <Footer />
  </>;
}
