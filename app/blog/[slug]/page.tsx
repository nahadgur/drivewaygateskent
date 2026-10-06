import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug } from '@/data/blog';
import { pageMetadata } from '@/lib/seo';
import BlogArticleClient from './BlogArticleClient';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return blogArticles.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    path: `/blog/${article.slug}/`,
    image: article.featuredImage || undefined,
    noindex: article.draft === true,
  });
}

export default function BlogArticlePage({ params }: Props) {
  if (!getArticleBySlug(params.slug)) notFound();
  return <BlogArticleClient params={params} />;
}
