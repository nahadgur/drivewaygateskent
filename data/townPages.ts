// data/townPages.ts - the bespoke town pages and where the old town URLs go.
//
// Each town page is its own route at app/location/<slug>/page.tsx with its own
// structure. This file only holds what the shared furniture needs: name, council,
// coordinates for schema, and the old /location/<slug>/ URLs folded into it.

export interface TownPage {
  slug: string;
  name: string;
  council: string;
  lat: number;
  lng: number;
  // Old town slugs that 308 to this page once it is built.
  absorbs: string[];
  // Set to true when the bespoke route exists; drives the sitemap and redirects.
  built: boolean;
}

export const TOWN_PAGES: TownPage[] = [
  { slug: 'sevenoaks', name: 'Sevenoaks', council: 'Sevenoaks District Council', lat: 51.2724, lng: 0.1909, absorbs: ['otford', 'shoreham', 'seal', 'kemsing', 'sundridge', 'ide-hill', 'chiddingstone', 'penshurst', 'hartley', 'new-ash-green', 'fawkham'], built: true },
  { slug: 'westerham', name: 'Westerham', council: 'Sevenoaks District Council', lat: 51.2665, lng: 0.0711, absorbs: ['brasted', 'edenbridge'], built: false },
  { slug: 'tunbridge-wells', name: 'Tunbridge Wells', council: 'Tunbridge Wells Borough Council', lat: 51.1324, lng: 0.2637, absorbs: ['pembury', 'southborough', 'lamberhurst'], built: true },
  { slug: 'cranbrook', name: 'Cranbrook', council: 'Tunbridge Wells Borough Council', lat: 51.0966, lng: 0.5354, absorbs: ['hawkhurst', 'goudhurst', 'sissinghurst', 'paddock-wood'], built: false },
  { slug: 'tonbridge', name: 'Tonbridge', council: 'Tonbridge and Malling Borough Council', lat: 51.1953, lng: 0.2750, absorbs: ['hildenborough', 'borough-green', 'ightham'], built: false },
  { slug: 'west-malling', name: 'West Malling', council: 'Tonbridge and Malling Borough Council', lat: 51.2930, lng: 0.4090, absorbs: ['east-malling', 'aylesford', 'larkfield', 'snodland'], built: false },
  { slug: 'maidstone', name: 'Maidstone', council: 'Maidstone Borough Council', lat: 51.2704, lng: 0.5227, absorbs: ['bearsted', 'loose', 'coxheath', 'barming', 'boughton-monchelsea', 'leeds', 'hollingbourne', 'lenham', 'harrietsham', 'headcorn', 'staplehurst', 'marden', 'yalding'], built: true },
  { slug: 'dartford', name: 'Dartford', council: 'Dartford Borough Council', lat: 51.4462, lng: 0.2188, absorbs: ['wilmington', 'bean', 'stone', 'greenhithe', 'longfield', 'swanley'], built: false },
  { slug: 'gravesend', name: 'Gravesend', council: 'Gravesham Borough Council', lat: 51.4416, lng: 0.3700, absorbs: ['northfleet', 'meopham', 'higham', 'cobham'], built: false },
  { slug: 'medway', name: 'Medway', council: 'Medway Council', lat: 51.3800, lng: 0.5270, absorbs: [], built: false },
  { slug: 'canterbury', name: 'Canterbury', council: 'Canterbury City Council', lat: 51.2802, lng: 1.0789, absorbs: ['bridge', 'chartham', 'sturry', 'wingham'], built: true },
  { slug: 'whitstable', name: 'Whitstable', council: 'Canterbury City Council', lat: 51.3600, lng: 1.0260, absorbs: [], built: true },
  { slug: 'herne-bay', name: 'Herne Bay', council: 'Canterbury City Council', lat: 51.3730, lng: 1.1280, absorbs: [], built: false },
  { slug: 'faversham', name: 'Faversham', council: 'Swale Borough Council', lat: 51.3150, lng: 0.8910, absorbs: [], built: false },
  { slug: 'ashford', name: 'Ashford', council: 'Ashford Borough Council', lat: 51.1465, lng: 0.8750, absorbs: [], built: false },
  { slug: 'tenterden', name: 'Tenterden', council: 'Ashford Borough Council', lat: 51.0690, lng: 0.6890, absorbs: [], built: false },
  { slug: 'folkestone', name: 'Folkestone', council: 'Folkestone and Hythe District Council', lat: 51.0814, lng: 1.1695, absorbs: ['hythe'], built: false },
  { slug: 'dover', name: 'Dover', council: 'Dover District Council', lat: 51.1279, lng: 1.3134, absorbs: [], built: false },
  { slug: 'deal', name: 'Deal', council: 'Dover District Council', lat: 51.2229, lng: 1.4026, absorbs: ['sandwich'], built: false },
  { slug: 'thanet', name: 'Thanet', council: 'Thanet District Council', lat: 51.3600, lng: 1.3900, absorbs: ['broadstairs', 'ramsgate'], built: false },
];

export function getTownPage(slug: string): TownPage | undefined {
  return TOWN_PAGES.find(t => t.slug === slug);
}

// Old town slug -> bespoke page slug, only for pages that are built.
export function townRedirects(): { from: string; to: string }[] {
  return TOWN_PAGES.filter(t => t.built).flatMap(t => t.absorbs.map(from => ({ from, to: t.slug })));
}
