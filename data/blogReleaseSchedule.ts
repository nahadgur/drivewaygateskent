// Staged sitemap rollout ("drip feed") for the Kent blog.
//
// A blog post is added to the sitemap only once its release date is on or before
// today. The sitemap route revalidates daily, so each batch enters automatically
// on its date with no redeploy needed. To retune the cadence, just edit the dates
// here — nothing else changes.
//
// Plan: Batch 1 (2026-06-23) = the coastal post + 4 cornerstones, then ~3/week.
// Any post slug NOT listed here stays out of the sitemap until it is added.

export const BLOG_SITEMAP_RELEASE: Record<string, string> = {
  // Batch 1 — 2026-06-23 (coastal + cornerstones)
  'coastal-gate-corrosion-protection': '2026-06-23',
  'planning-permission-driveway-gates-kent': '2026-06-23',
  'how-much-do-driveway-gates-cost-kent-2026': '2026-06-23',
  'best-gate-material-kent-wood-steel-aluminium': '2026-06-23',
  'electric-sliding-vs-swing-gates-kent': '2026-06-23',

  // Batch 2 — 2026-06-30
  'electric-gate-maintenance-kent': '2026-06-30',
  'driveway-gates-kent-aonb-high-weald-north-downs': '2026-06-30',
  'driveway-gates-home-security-kent': '2026-06-30',

  // Batch 3 — 2026-07-07
  'electric-gate-automation-retrofit-kent': '2026-07-07',
  'choosing-gate-installer-kent': '2026-07-07',
  'wooden-vs-metal-driveway-gates-pros-and-cons': '2026-07-07',

  // Batch 4 — 2026-07-14
  'driveway-gates-west-kent-sevenoaks-tunbridge-wells': '2026-07-14',
  'do-electric-gates-add-value-to-your-house': '2026-07-14',
  'best-electric-gate-motor-brands-uk-compared': '2026-07-14',

  // Batch 5 — 2026-07-21
  'how-wide-should-driveway-gates-be-measuring-guide': '2026-07-21',
  'how-to-look-after-wooden-driveway-gates': '2026-07-21',
  'driveway-gate-ideas-for-older-houses-and-period-properties': '2026-07-21',

  // Batch 6 — 2026-07-28
  'how-long-do-electric-gates-last-before-replacing': '2026-07-28',
  'are-driveway-gates-worth-the-money': '2026-07-28',
  'what-to-do-when-electric-gates-stop-working': '2026-07-28',
  'can-you-install-driveway-gates-on-a-sloped-driveway': '2026-07-28',
};

// Slugs whose release date is on or before `now` (ISO YYYY-MM-DD compares chronologically).
export function releasedBlogSlugs(now: Date = new Date()): string[] {
  const today = now.toISOString().slice(0, 10);
  return Object.entries(BLOG_SITEMAP_RELEASE)
    .filter(([, date]) => date <= today)
    .map(([slug]) => slug);
}
