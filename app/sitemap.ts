import { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { SITE_URL } from '@/lib/site-config';

const ALL_ARTICLES = [
  ...ARTICLES.map((a) => ({
    slug: a.slug,
    title: a.title,
    desc: a.desc,
    category: a.category,
    publishedTime: a.publishedTime,
    modifiedTime: a.modifiedTime,
    ogImage: a.ogImage,
    path: `/articles/${a.slug}`,
  })),
  ...MAANDHAN_ARTICLES.map((a) => ({
    slug: a.slug,
    title: a.title,
    desc: a.description,
    category: a.category,
    publishedTime: a.published,
    modifiedTime: a.modified,
    ogImage: a.ogImage || a.image,
    path: `/maandhan/${a.slug}`,
  })),
  ...LIVE_RAJYA_YOJANA_ARTICLES.map((a) => ({
    slug: a.slug,
    title: a.title,
    desc: a.description,
    category: 'farming',
    publishedTime: a.published,
    modifiedTime: a.modified,
    ogImage: a.ogImage,
    path: `/rajya-yojana/${a.slug}`,
  })),
  ...HINDI_ARTICLES.map((a) => ({
    slug: a.slug,
    title: a.titleHi,
    desc: a.desc,
    category: a.category,
    publishedTime: a.publishedTime,
    modifiedTime: a.modifiedTime,
    ogImage: a.ogImage,
    path: `/articles/hindi/${a.slug}`,
  })),
];

/**
 * Freshness is measured against the newest article in the dataset, NOT against
 * the build clock. Deriving it from `new Date()` at module scope meant every
 * deploy silently reshuffled priorities and stamped `lastmod` with the build
 * date, so the sitemap claimed freshness that the content never had.
 *
 * Using a content-derived reference keeps the relative tiers below working as
 * designed while making the whole sitemap deterministic: rebuilding without
 * changing content now produces a byte-identical sitemap.
 */
const REFERENCE_DATE = new Date(
  Math.max(
    ...ALL_ARTICLES.map((a) => {
      const t = new Date(a.modifiedTime || a.publishedTime).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

/** Deterministic fallback for entries with no usable date of their own. */
const FALLBACK_DATE = REFERENCE_DATE;

/**
 * Priority reflects a page's ROLE, not its recency. The old recency-based
 * tiers put 39/94 URLs at priority 1.0 after any bulk date bump, collapsing
 * the signal (GSC "Discovered - currently not indexed", FIX-4 in fix.md).
 * Recency is already conveyed by <lastmod>; priority now ranks page types:
 * homepage 1.0 > hubs 0.9 > cornerstone articles 0.8 > normal articles 0.7 >
 * category pages 0.6 > legal/static 0.3.
 */
const CORNERSTONE_SLUGS = new Set([
  'PmKisanMasterGuide2026',
  'PmKisan24viKist2026',
  'PmKisanBeneficiaryList2026',
]);

function getArticlePriority(slug: string): number {
  return CORNERSTONE_SLUGS.has(slug) ? 0.8 : 0.7;
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = FALLBACK_DATE;

  const staticPages: MetadataRoute.Sitemap = [
    { 
      url: SITE_URL, 
      lastModified: new Date('2026-07-19'), 
      changeFrequency: 'daily', 
      priority: 1.0,
      alternates: {
        languages: {
          'hi-IN': SITE_URL,
        },
      },
    },
    { 
      url: `${SITE_URL}/articles`, 
      lastModified: new Date('2026-07-19'), 
      changeFrequency: 'daily', 
      priority: 0.90,
    },
    { 
      url: `${SITE_URL}/maandhan`, 
      // Hub rewritten (overview + guided path + FAQ) — real content change.
      lastModified: new Date('2026-08-08'), 
      changeFrequency: 'weekly', 
      priority: 0.90,
    },
    ...(LIVE_RAJYA_YOJANA_ARTICLES.length > 0
      ? [{
          url: `${SITE_URL}/rajya-yojana`,
          lastModified: now,
          changeFrequency: 'weekly' as const,
          priority: 0.90,
        }]
      : []),
    { 
      url: `${SITE_URL}/calculator`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.90,
    },
    { 
      url: `${SITE_URL}/calculator/quick-status-check`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/calculator/installment-tracker`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/calculator/pm-kisan-benefit`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/calculator/kcc-loan-emi`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/calculator/pmfby-premium`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/calculator/msp-income`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/calculator/crop-profit`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.70,
    },
    { 
      url: `${SITE_URL}/about`, 
      lastModified: new Date('2026-06-15'), 
      changeFrequency: 'monthly', 
      priority: 0.50,
    },
    { 
      url: `${SITE_URL}/contact`, 
      lastModified: new Date('2026-06-15'), 
      changeFrequency: 'monthly', 
      priority: 0.50,
    },
    { 
      url: `${SITE_URL}/privacy-policy`, 
      lastModified: new Date('2026-06-01'), 
      changeFrequency: 'yearly', 
      priority: 0.30,
    },
    { 
      url: `${SITE_URL}/disclaimer`, 
      lastModified: new Date('2026-06-01'), 
      changeFrequency: 'yearly', 
      priority: 0.30,
    },
    { 
      url: `${SITE_URL}/terms-of-service`, 
      lastModified: new Date('2026-06-01'), 
      changeFrequency: 'yearly', 
      priority: 0.30,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((category) => {
    const categoryArticles = ALL_ARTICLES.filter(a => a.category === category);
    const latestArticle = categoryArticles.sort((a, b) => 
      new Date(b.modifiedTime || b.publishedTime).getTime() - 
      new Date(a.modifiedTime || a.publishedTime).getTime()
    )[0];
    
    return {
      url: `${SITE_URL}/articles/category/${category}`,
      lastModified: latestArticle 
        ? new Date(latestArticle.modifiedTime || latestArticle.publishedTime) 
        : now,
      changeFrequency: 'weekly',
      priority: 0.60,
    };
  });

  const articlePages: MetadataRoute.Sitemap = ALL_ARTICLES.map((article) => {
    const modified = article.modifiedTime || article.publishedTime;
    const modifiedDate = modified ? new Date(modified) : now;
    
    return {
      url: `${SITE_URL}${article.path}`,
      lastModified: modifiedDate,
      changeFrequency: getArticleFrequency(article.category),
      priority: getArticlePriority(article.slug),
      images: article.ogImage ? [`${SITE_URL}${article.ogImage}`] : undefined,
    };
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
  ];
}