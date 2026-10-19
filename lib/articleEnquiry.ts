import type { ArticleCta } from '@/data/articleCtas';

export interface ArticleEnquiryContext extends ArticleCta {
  slug: string;
  articleTitle: string;
}

// Keep contextual answers in the existing message field so the receiving
// spreadsheet/email integration does not need new columns to preserve them.
export function buildEnquiryMessage(data: FormData, context?: ArticleEnquiryContext): string {
  const answer = (key: string) => String(data.get(key) || '').trim();
  if (!context) return answer('message');
  const lines = [`Article: ${context.articleTitle}`, `Gate setup: ${answer('gateSetup') || 'Not specified'}`];
  if (context.setback) {
    const fields = [
      ['setbackDistance', 'Distance to closed gate'],
      ['measurementStart', 'Measurement starting point'],
      ['vehicleLength', 'Vehicle/trailer length'],
      ['openingClearance', 'Gate opening and clearance'],
    ];
    for (const [key, label] of fields) {
      if (answer(key)) lines.push(`${label}: ${answer(key)}`);
    }
  }
  if (answer('message')) lines.push(`${context.messageLabel}: ${answer('message')}`);
  return lines.join('\n');
}
