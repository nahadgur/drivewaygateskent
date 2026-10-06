import { NextResponse, type NextRequest } from 'next/server';
import { TOWN_PAGES, townRedirects } from '@/data/townPages';

// Old village and suburb town pages fold into their bespoke town page (308).
const TOWN_REDIRECTS = new Map(townRedirects().map(r => [r.from, r.to]));

// Any old town slug, or a bespoke town page slug, mapped to its bespoke page.
const TOWN_TARGET = new Map<string, string>([
  ...TOWN_PAGES.filter(t => t.built).map(t => [t.slug, t.slug] as [string, string]),
  ...townRedirects().map(r => [r.from, r.to] as [string, string]),
]);

function redirect(req: NextRequest, pathname: string) {
  const url = req.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url, 308);
}

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const town = path.match(/^\/location\/([^/]+)\/?$/);
  if (town) {
    const target = TOWN_REDIRECTS.get(town[1]);
    return target ? redirect(req, `/location/${target}/`) : NextResponse.next();
  }

  // Service x town combo pages were retired on 2026-10-06. Leads still arrived
  // through them (e.g. gate repair in Edenbridge), so each one 308s to the
  // bespoke town page that covers that town, which carries the local detail and
  // a form. Towns without a page fall back to the service page.
  const combo = path.match(/^\/services\/([^/]+)\/([^/]+)\/?$/);
  if (combo) {
    const target = TOWN_TARGET.get(combo[2]);
    return redirect(req, target ? `/location/${target}/` : `/services/${combo[1]}/`);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/location/:slug*', '/services/:service/:town*'] };
