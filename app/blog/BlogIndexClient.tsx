'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { blogArticles } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PageIntro } from '@/components/PageIntro';
import { GuideCard } from '@/components/GuideCard';
import { QuoteBand } from '@/components/QuoteBand';

const publishedArticles = blogArticles.filter(a => !a.draft).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
const CATEGORIES = ['All', ...Array.from(new Set(publishedArticles.map(a => a.category))).sort()];

export default function BlogIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();
  const filtered = publishedArticles.filter(a => (activeCategory === 'All' || a.category === activeCategory) && (!query || a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query)));
  const featured = filtered[0];
  return <>
    <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <Header onOpenModal={() => setIsModalOpen(true)} />
    <main id="main-content" className="subpage guides-index">
      <PageIntro eyebrow="Advice & guides" title="Kent Gate Guides: Planning, Pricing, and Specification" breadcrumbs={[{ label: 'Guides' }]}>
        <p>National Landscape planning rules, coastal material specification, cost breakdowns by area, and how to tell a specialist from a generalist. Written specifically for Kent homeowners.</p>
      </PageIntro>
      <section className="container-width guide-library" aria-label="Gate guides">
        <div className="guide-filters">
          <div className="category-filters" role="group" aria-label="Filter guides by category">{CATEGORIES.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} aria-pressed={activeCategory === cat}>{cat}</button>)}</div>
          <label className="guide-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search guides</span><input type="search" placeholder="Search guides…" value={search} onChange={e => setSearch(e.target.value)} /></label>
        </div>
        <p className="results-count" role="status">{filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}{activeCategory !== 'All' ? ` · ${activeCategory}` : ''}</p>
        {featured ? <><GuideCard article={featured} featured /><div className="guide-grid">{filtered.slice(1).map(article => <GuideCard key={article.slug} article={article} />)}</div></> : <div className="empty-guides"><h2>No articles found</h2><button className="text-link" onClick={() => { setSearch(''); setActiveCategory('All'); }}>Clear filters</button></div>}
        <QuoteBand onOpenModal={() => setIsModalOpen(true)}><p>Local installers, site surveys and up to three written quotes. No fees at any stage.</p></QuoteBand>
      </section>
    </main>
    <Footer />
  </>;
}
