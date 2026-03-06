// data/locations.ts - Driveway Gates Kent

export const LOCATIONS: Record<string, string[]> = {
  'West Kent': [
    'Sevenoaks', 'Westerham', 'Edenbridge', 'Otford', 'Shoreham',
    'Borough Green', 'Hildenborough', 'Penshurst', 'Chiddingstone', 'Sundridge',
    'Brasted', 'Ide Hill', 'Seal', 'Kemsing', 'Ightham',
  ],
  'Tunbridge Wells and Weald': [
    'Tunbridge Wells', 'Tonbridge', 'Paddock Wood', 'Cranbrook', 'Hawkhurst',
    'Goudhurst', 'Lamberhurst', 'Sissinghurst', 'Tenterden', 'Headcorn',
    'Staplehurst', 'Marden', 'Yalding', 'Pembury', 'Southborough',
  ],
  'North Kent': [
    'Dartford', 'Gravesend', 'Swanley', 'Longfield', 'Northfleet',
    'Bean', 'Stone', 'Greenhithe', 'Wilmington', 'Hartley',
    'New Ash Green', 'Fawkham', 'Meopham', 'Higham', 'Cobham',
  ],
  'Maidstone and Mid Kent': [
    'Maidstone', 'Bearsted', 'Aylesford', 'Snodland', 'Larkfield',
    'East Malling', 'West Malling', 'Loose', 'Coxheath', 'Hollingbourne',
    'Lenham', 'Harrietsham', 'Leeds', 'Boughton Monchelsea', 'Barming',
  ],
  'East Kent': [
    'Canterbury', 'Whitstable', 'Faversham', 'Deal', 'Folkestone',
    'Dover', 'Sandwich', 'Herne Bay', 'Broadstairs', 'Ramsgate',
    'Hythe', 'Wingham', 'Bridge', 'Chartham', 'Sturry',
  ],
};

export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}

export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
