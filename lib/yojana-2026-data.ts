// New 2026 yojana articles section (SEO-KEYWORDS-RANK1-PLAN.md).
// Components live in components/articles/yojana-2026/.
// Route: app/yojana/[slug]/page.tsx → /yojana/<slug>
// Existing data files are NOT touched — this file is the only source for this section.

export type Yojana2026ArticleMeta = {
  slug: string;
  mainKeyword: string;
  readonly secondaryKeywords: readonly string[];
  title: string; // ≤46 chars — root layout appends " | KisanStatus" (14 chars, 60 budget)
  description: string;
  ogTitle: string;
  component: string;
  officialPortal: string;
  published: string;
  modified: string;
  readTime: string;
  ogImage?: string;
  readonly relatedPaths: readonly string[];
};

export const YOJANA_2026_ARTICLES: readonly Yojana2026ArticleMeta[] = [
  {
    slug: 'fasal-bima-claim-status-check',
    mainKeyword: 'fasal bima claim status check',
    secondaryKeywords: [
      'pmfby claim status',
      'fasal bima ka paisa kab aayega',
      'pmfby application status check',
      'fasal bima claim reject kyu hota hai',
      'crop insurance claim status online',
      'pmfby 72 hours rule',
      'fasal bima complaint number 14447',
      'fasal bima claim kitne din me aata hai',
    ],
    title: 'Fasal Bima Claim Status — Paisa Kab Milega',
    description:
      'PMFBY claim atka hai? pmfby.gov.in pe status check ke exact clicks, 72 ghante ka rule, reject hone ke 5 asli karan aur complaint ka poora rasta — 14447 se DGRO tak.',
    ogTitle: 'Fasal Bima Claim Status — Paisa Kab Aur Kaise Milega',
    component: 'FasalBimaClaimStatusCheck',
    officialPortal: 'https://pmfby.gov.in',
    published: '2026-08-18T08:30:00+05:30',
    modified: '2026-08-18T08:30:00+05:30',
    readTime: '12 min read',
    relatedPaths: ['/articles/PmfbyCropInsurance2026', '/calculator/pmfby-premium'],
  },
];

export const LIVE_YOJANA_2026_ARTICLES = YOJANA_2026_ARTICLES;

export const YOJANA_2026_MAP: Readonly<Record<string, Yojana2026ArticleMeta>> = Object.freeze(
  Object.fromEntries(YOJANA_2026_ARTICLES.map((a) => [a.slug, a])),
);

export function getYojana2026Article(slug: string): Yojana2026ArticleMeta | undefined {
  return YOJANA_2026_MAP[slug];
}
