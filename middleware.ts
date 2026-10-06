import { NextResponse, type NextRequest } from 'next/server';
import { townRedirects } from '@/data/townPages';

// Old village and suburb town pages fold into their bespoke town page (308).
const REDIRECTS = new Map(townRedirects().map(r => [r.from, r.to]));

export function middleware(req: NextRequest) {
  const match = req.nextUrl.pathname.match(/^\/location\/([^/]+)\/?$/);
  const target = match ? REDIRECTS.get(match[1]) : undefined;
  if (!target) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/location/${target}/`;
  return NextResponse.redirect(url, 308);
}

export const config = { matcher: '/location/:slug*' };
