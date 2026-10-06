'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { getArticleBySlug, type ContentBlock } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';

function BlogCtaBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="my-12 rounded-sm overflow-hidden border border-brand-600 bg-brand-950 shadow-lg relative not-prose">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-500" />
      <div className="px-7 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-500/20 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400 mb-1">No Cost, No Obligation</p>
          <h3 className="text-xl md:text-2xl font-display font-semibold !text-white leading-snug mb-2">Looking for a Kent gate installer?</h3>
          <p className="!text-brand-100 text-sm md:text-base leading-6">We match you with up to three specialists. Free site surveys, written quotes, zero fees.</p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="inline-flex min-h-12 items-center gap-2 px-7 py-3 rounded-sm bg-brand-500 hover:bg-brand-400 !text-brand-950 font-bold text-sm transition-colors whitespace-nowrap"
          >
            Get 3 Free Quotes
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Inline markdown-link parser: [text](url) rendered inline in prose.
   Internal (root-relative) links use next/link; external links open in a new tab.
   Backward-compatible: plain text with no [..](..) is returned unchanged. */
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (href.startsWith('/')) {
      out.push(<Link key={`il-${k++}`} href={href} className="text-brand-600 underline underline-offset-2 hover:text-brand-700 transition-colors">{label}</Link>);
    } else {
      out.push(<a key={`il-${k++}`} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2 hover:text-brand-700 transition-colors">{label}</a>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function ContentRenderer({ blocks, onOpenModal }: { blocks: ContentBlock[]; onOpenModal: () => void }) {
  // Pre-process: pull all image blocks out, map them to the h2 index they follow
  // Also find index of 2nd h2 for CTA injection
  const imageQueue: { [h2Index: number]: { src: string; alt: string }[] } = {};
  let h2Count = 0;
  let currentH2Index = -1;
  let ctaInsertBeforeH2 = -1; // we'll store the block index of the 2nd h2

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === 'h2') {
      h2Count++;
      currentH2Index = i;
      if (h2Count === 2) ctaInsertBeforeH2 = i;
    }
    if (block.type === 'image' && currentH2Index !== -1) {
      if (!imageQueue[currentH2Index]) imageQueue[currentH2Index] = [];
      imageQueue[currentH2Index].push({ src: block.src, alt: block.alt });
    }
  }

  // Track which images have been rendered
  const renderedImages = new Set<number>();

  return (
    <div className="prose prose-gray max-w-none">
      {blocks.map((block, i) => {
        // Skip image blocks, they render attached to their h2 instead
        if (block.type === 'image') return null;
        // Skip internal-link, external-link, cta data blocks
        if (block.type === 'internal-link' || block.type === 'external-link' || block.type === 'cta') return null;

        const elements: React.ReactNode[] = [];

        // Inject CTA banner just before the 2nd h2
        if (i === ctaInsertBeforeH2) {
          elements.push(<BlogCtaBanner key="cta-inject" onOpenModal={onOpenModal} />);
        }

        switch (block.type) {
          case 'h2':
            elements.push(
              <h2 key={i} className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mt-10 mb-4">
                {block.text}
              </h2>
            );
            // Inject images that belong to this h2, immediately after the heading
            if (imageQueue[i]) {
              imageQueue[i].forEach((img, imgIdx) => {
                elements.push(
                  <div key={`img-${i}-${imgIdx}`} className="my-6 rounded-sm overflow-hidden border border-gray-200 shadow-lg aspect-[16/9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                );
              });
            }
            break;

          case 'h3':
            elements.push(
              <h3 key={i} className="text-xl md:text-2xl font-display font-semibold text-brand-950 mt-8 mb-3">
                {block.text}
              </h3>
            );
            break;

          case 'p':
            elements.push(
              <p key={i} className="text-gray-600 leading-relaxed mb-5">
                {renderInline(block.text)}
              </p>
            );
            break;

          case 'list':
            elements.push(
              <ul key={i} className="my-6 pl-6 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="text-gray-600 leading-relaxed list-disc marker:text-brand-500">
                    {item}
                  </li>
                ))}
              </ul>
            );
            break;

          default:
            break;
        }

        return elements.length > 0 ? <React.Fragment key={i}>{elements}</React.Fragment> : null;
      })}
    </div>
  );
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: article.featuredImage.startsWith('http') ? article.featuredImage : `${siteConfig.url}${article.featuredImage}`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}/`,
    },
    articleSection: article.category,
    inLanguage: 'en-GB',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow heritage-inner">

        {/* Hero */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-width pb-10">
            <Link href="/blog/" className="inline-flex items-center gap-1 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 hover:text-brand-200 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-brand-100 text-xs">
                <Calendar className="w-3 h-3" />
                {new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white max-w-4xl leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Long-form content */}
        <div className="container-width py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <article>
              <ContentRenderer blocks={article.content} onOpenModal={() => setIsModalOpen(true)} />
            </article>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
