type ArticleEvent = 'article_checklist_open' | 'article_checklist_complete' | 'article_quote_open' | 'article_enquiry_success';

export function trackArticleEvent(event: ArticleEvent, slug: string, placement?: 'header' | 'article') {
  try {
    if (typeof window === 'undefined' || window.localStorage.getItem('cookie-consent-v1') !== 'accepted') return;
    const analytics = window as Window & { gtag?: (command: string, name: string, params: Record<string, string>) => void };
    // Never send contact details, free text, measurements or postcode to GA.
    analytics.gtag?.('event', event, { article_slug: slug, ...(placement ? { placement } : {}) });
  } catch { /* Analytics must not interrupt the checklist or enquiry. */ }
}
