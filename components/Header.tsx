'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { LeadFormModal } from '@/components/LeadFormModal';

export function Header({ onOpenModal }: { onOpenModal?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  const openQuotes = () => { setMobileOpen(false); if (onOpenModal) onOpenModal(); else setQuoteOpen(true); };

  return <>
    {!onOpenModal && <LeadFormModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />}
    <a href="#main-content" className="skip-link">Skip to content</a>

    <header className="site-header">
      <div className="container-width header-row">
        <Link href="/" className="brand-lockup" aria-label="Driveway Gates Kent home">
          <Image src="/logo-120px.png" width={72} height={72} alt="" priority className="brand-mark" />
          <span className="brand-name">Driveway Gates<span>Kent specialists</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
          <div className="nav-services">
            <Link href="/services/" aria-current={pathname.startsWith('/services') ? 'page' : undefined}>Our gates <ChevronDown size={13} /></Link>
            <div className="service-menu">{services.map(service => <Link key={service.id} href={'/services/' + service.slug + '/'}>{service.title}</Link>)}</div>
          </div>
          <Link href="/location/" aria-current={pathname.startsWith('/location') ? 'page' : undefined}>Areas we cover</Link>
          <Link href="/blog/" aria-current={pathname.startsWith('/blog') ? 'page' : undefined}>Advice &amp; guides</Link>
        </nav>
        <button onClick={openQuotes} className="btn-primary header-quote">Get free quotes</button>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/services/">Our gates</Link>
        <div className="mobile-services">{services.map(service => <Link key={service.id} href={'/services/' + service.slug + '/'}>{service.title}</Link>)}</div>
        <Link href="/location/">Areas we cover</Link><Link href="/blog/">Advice &amp; guides</Link>
        <button onClick={openQuotes} className="btn-primary">Get free quotes</button>
      </nav>}
    </header>
  </>;
}
