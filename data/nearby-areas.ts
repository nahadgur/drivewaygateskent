// data/nearby-areas.ts - Driveway Gates Kent

export const NEARBY_AREAS: Record<string, string[]> = {
  'sevenoaks': ['Otford', 'Seal', 'Kemsing', 'Shoreham', 'Sundridge', 'Brasted'],
  'tunbridge-wells': ['Southborough', 'Pembury', 'Tonbridge', 'Lamberhurst', 'Rusthall', 'Bidborough'],
  'tonbridge': ['Hildenborough', 'Hadlow', 'East Peckham', 'Paddock Wood', 'Tudeley', 'Shipbourne'],
  'canterbury': ['Bridge', 'Chartham', 'Sturry', 'Harbledown', 'Littlebourne', 'Wingham'],
  'maidstone': ['Bearsted', 'Loose', 'Coxheath', 'Barming', 'Boughton Monchelsea', 'Otham'],
  'dartford': ['Wilmington', 'Bean', 'Stone', 'Swanley', 'Longfield', 'Greenhithe'],
  'folkestone': ['Hythe', 'Sandgate', 'Hawkinge', 'Cheriton', 'Lyminge', 'Elham'],
  'whitstable': ['Herne Bay', 'Tankerton', 'Swalecliffe', 'Blean', 'Chestfield', 'Seasalter'],
  'cranbrook': ['Sissinghurst', 'Goudhurst', 'Hawkhurst', 'Benenden', 'Frittenden', 'Biddenden'],
  'deal': ['Sandwich', 'Walmer', 'Kingsdown', 'Sholden', 'Worth', 'Ringwould'],
  'faversham': ['Boughton under Blean', 'Ospringe', 'Selling', 'Throwley', 'Eastling', 'Newnham'],
  'gravesend': ['Northfleet', 'Meopham', 'Higham', 'Cobham', 'Shorne', 'Luddesdown'],
  'tenterden': ['Rolvenden', 'Biddenden', 'Appledore', 'Wittersham', 'Benenden', 'Woodchurch'],
  'westerham': ['Brasted', 'Sundridge', 'Edenbridge', 'Ide Hill', 'Crockham Hill', 'French Street'],
  'paddock-wood': ['Brenchley', 'Horsmonden', 'Matfield', 'Marden', 'Capel', 'Five Oak Green'],
};

export function getNearbyAreas(citySlug: string): string[] {
  return NEARBY_AREAS[citySlug] || [];
}
