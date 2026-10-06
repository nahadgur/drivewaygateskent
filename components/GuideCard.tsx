import Link from 'next/link';

type Guide = { slug: string; title: string; featuredImage: string; category: string; excerpt: string; publishDate: string };

export function GuideCard({ article, featured = false }: { article: Guide; featured?: boolean }) {
  return <Link href={`/blog/${article.slug}/`} className={`guide-card${featured ? ' guide-card-featured' : ''}`}>
    <div className="guide-card-image">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={article.featuredImage} alt={article.title} loading="lazy" width={1408} height={768} />
    </div>
    <div className="guide-card-copy">
      <p className="eyebrow">{article.category}</p>
      {featured ? <h2>{article.title}</h2> : <h3>{article.title}</h3>}
      <p>{article.excerpt}</p>
      <div className="guide-card-meta"><time dateTime={article.publishDate}>{new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time><span>Read guide</span></div>
    </div>
  </Link>;
}
