import { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { SITE_URL } from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// STATE SLUGS
// ═══════════════════════════════════════════════════════════

const STATE_SLUGS = [
  'andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa',
  'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala',
  'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland',
  'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil-nadu', 'telangana', 'tripura',
  'uttar-pradesh', 'uttarakhand', 'west-bengal', 'delhi', 'jammu-kashmir',
  'ladakh', 'puducherry', 'andaman-nicobar', 'chandigarh', 'dadra-nagar-haveli', 'lakshadweep',
] as const;

// ═══════════════════════════════════════════════════════════
// SMART PRIORITY & FREQUENCY HELPERS
// ═══════════════════════════════════════════════════════════

function getArticlePriority(modifiedTime: string): number {
  const daysSinceModified = Math.floor(
    (Date.now() - new Date(modifiedTime).getTime()) / 86400000
  );
  if (daysSinceModified <= 7) return 0.95;   // Last week (High Priority)
  if (daysSinceModified <= 30) return 0.90;  // Last month
  if (daysSinceModified <= 90) return 0.85;  // Last quarter
  return 0.80;                               // Older but still relevant
}

function getArticleFrequency(category: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  switch (category as CategorySlug) {
    case 'mandi': return 'daily';
    case 'status-check': return 'weekly';
    case 'loan': return 'monthly';
    case 'farming': return 'monthly';
    default: return 'weekly';
  }
}

// ═══════════════════════════════════════════════════════════
// SITEMAP GENERATOR
// ═══════════════════════════════════════════════════════════

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── 1. Static Pages (High Priority) ──
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                                     lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${SITE_URL}/articles`,                       lastModified: now, changeFrequency: 'daily',   priority: 0.95 },
    { url: `${SITE_URL}/calculator`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/calculator/quick-status-check`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.90 },
    { url: `${SITE_URL}/calculator/installment-tracker`, lastModified: now, changeFrequency: 'weekly',  priority: 0.90 },
    { url: `${SITE_URL}/calculator/pm-kisan-benefit`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/calculator/kcc-loan-emi`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/calculator/pmfby-premium`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/calculator/msp-income`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/calculator/crop-profit`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/about`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: `${SITE_URL}/author`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: `${SITE_URL}/contact`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.50 },
    { url: `${SITE_URL}/privacy-policy`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.40 },
    { url: `${SITE_URL}/disclaimer`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.40 },
    { url: `${SITE_URL}/terms-of-service`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.40 },
  ];

  // ── 2. Category Pages ──
  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((category) => ({
    url:             `${SITE_URL}/articles/category/${category}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.85,
  }));

  // ── 3. Article Pages (Dynamic from ARTICLES array) ──
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => {
    const modified = article.modifiedTime || article.publishedTime;
    return {
      url:             `${SITE_URL}/articles/${article.slug}`,
      lastModified:    modified ? new Date(modified) : now,
      changeFrequency: getArticleFrequency(article.category),
      priority:        modified ? getArticlePriority(modified) : 0.80,
    };
  });

  // ── 4. State Pages (Beneficiary Lists) ──
  const statePages: MetadataRoute.Sitemap = STATE_SLUGS.map((slug) => ({
    url:             `${SITE_URL}/beneficiary-list/${slug}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.80,
  }));

  // ✅ Combine and Return
  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...statePages,
  ];
}