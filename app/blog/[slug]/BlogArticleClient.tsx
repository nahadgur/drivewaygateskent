'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { QuoteBand } from '@/components/QuoteBand';
import { getArticleBySlug, type ContentBlock } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';
import { getArticleCta, type ArticleCta } from '@/data/articleCtas';
import { trackArticleEvent } from '@/lib/articleEvents';

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

function ContentRenderer({ blocks, onOpenModal, cta }: { blocks: ContentBlock[]; onOpenModal: () => void; cta: ArticleCta }) {
  // Pre-process: pull all image blocks out, map them to the h2 index they follow
  const imageQueue: { [h2Index: number]: { src: string; alt: string }[] } = {};
  let currentH2Index = -1;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === 'h2') {
      currentH2Index = i;
    }
    if (block.type === 'image' && currentH2Index !== -1) {
      if (!imageQueue[currentH2Index]) imageQueue[currentH2Index] = [];
      imageQueue[currentH2Index].push({ src: block.src, alt: block.alt });
    }
  }


  return (
    <div className="article-prose">
      {blocks.map((block, i) => {
        // Skip image blocks, they render attached to their h2 instead
        if (block.type === 'image') return null;
        // Skip internal-link, external-link, cta data blocks
        if (block.type === 'internal-link' || block.type === 'external-link' || block.type === 'cta') return null;

        const elements: React.ReactNode[] = [];

        switch (block.type) {
          case 'h2':
            elements.push(
              <h2 key={i} id={`section-${i}`} className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mt-10 mb-4">
                {block.text}
              </h2>
            );
            // Inject images that belong to this h2, immediately after the heading
            if (imageQueue[i]) {
              imageQueue[i].forEach((img, imgIdx) => {
                elements.push(
                  <div key={`img-${i}-${imgIdx}`} className="article-inline-image">
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
      <QuoteBand title={cta.heading} onOpenModal={onOpenModal}><p>{cta.body}</p></QuoteBand>
    </div>
  );
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const cta = getArticleCta(article.slug);
  const openQuote = (placement: 'header' | 'article') => {
    trackArticleEvent('article_quote_open', article.slug, placement);
    setIsModalOpen(true);
  };

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
      <LeadFormModal key={article.slug} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => openQuote('header')} />
      <main id="main-content" className="subpage article-page">
        <PageIntro eyebrow={article.category} title={article.title} breadcrumbs={[{ label: 'Guides', href: '/blog/' }, { label: article.category }]}>
          <p>{article.excerpt}</p>
          <time className="article-date" dateTime={article.publishDate}>{new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
        </PageIntro>
        <figure className="article-cover container-width">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.featuredImage} alt={article.title} width={1408} height={768} fetchPriority="high" />
        </figure>
        <div className="container-width article-layout">
          <aside className="article-contents"><nav aria-label="On this page"><p className="eyebrow">In this guide</p>{article.content.map((block, i) => block.type === 'h2' ? <a key={i} href={`#section-${i}`}>{block.text}</a> : null)}<Link href="/blog/" className="text-link">All guides</Link></nav></aside>
          <article><ContentRenderer blocks={article.content} cta={cta} onOpenModal={() => openQuote('article')} /><Link href="/blog/" className="text-link article-back">Back to all guides</Link></article>
        </div>
      </main>
      <Footer />
    </>
  );
}
