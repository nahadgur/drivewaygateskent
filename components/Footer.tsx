// components/Footer.tsx
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 pt-20 pb-8 border-t-4 border-brand-500">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-brand-400 flex items-center justify-center text-brand-300 font-bold">DG</div>
              <span className="font-display font-semibold text-lg text-white">Driveway Gates Kent</span>
            </div>
            <p className="text-sm text-brand-100/75 leading-relaxed mb-4">
              Free quote service connecting Kent homeowners with driveway gate installers across every corner of the county.
            </p>
            <p className="text-xs text-brand-200/55 italic border-l-2 border-brand-700 pl-3">
              Driveway Gates Kent is a referral service. We connect you with independent gate installers. We do not carry out installations ourselves.
            </p>
          </div>

          {/* Gate Types */}
          <div>
            <h4 className="text-brand-300 font-bold uppercase tracking-[0.12em] text-xs mb-5">Gate Types</h4>
            <ul className="space-y-2 text-sm">
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="text-brand-300 font-bold uppercase tracking-[0.12em] text-xs mb-5">Popular Locations</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Gates in Sevenoaks', href: '/location/sevenoaks/' },
                { label: 'Gates in Tunbridge Wells', href: '/location/tunbridge-wells/' },
                { label: 'Gates in Canterbury', href: '/location/canterbury/' },
                { label: 'Gates in Maidstone', href: '/location/maidstone/' },
                { label: 'Gates in Dartford', href: '/location/dartford/' },
                { label: 'Gates in Folkestone', href: '/location/folkestone/' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-brand-300 font-bold uppercase tracking-[0.12em] text-xs mb-5">Service Area</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-500" /> Kent, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-800 pt-8 text-sm text-brand-200/55 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. We are a matching service, not a gate installer.</p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="hover:text-brand-100">Sitemap</Link>
            <Link href="/services/" className="hover:text-brand-100">Services</Link>
            <Link href="/location/" className="hover:text-brand-100">Locations</Link>
            <Link href="/privacy/" className="hover:text-brand-100">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
