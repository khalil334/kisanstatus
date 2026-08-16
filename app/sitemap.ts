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
    ogImage: a.ogImage as string | undefined,
    path: `/articles/${a.slug}`,
  })),
];

const REFERENCE_DATE = new Date(
  Math.max(
    ...ALL_ARTICLES.map((a) => {
      const t = new Date(a.modifiedTime || a.publishedTime).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

const FALLBACK_DATE = REFERENCE_DATE;

// Google ignores lastmod site-wide if it catches future timestamps — clamp
// any content date that is still ahead of the build moment.
function clampToNow(d: Date): Date {
  const buildTime = new Date();
  return d.getTime() > buildTime.getTime() ? buildTime : d;
}

// /articles/hi lists only Hindi articles — its lastmod should track the
// freshest Hindi article, not the whole site's freshest article.
const HINDI_UPDATED = new Date(
  Math.max(
    ...HINDI_ARTICLES.map((a) => {
      const t = new Date(a.modifiedTime || a.publishedTime).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

// Hub pages inherit the freshest date of the content they list, so they can never
// drift out of sync with their children the way hardcoded dates did.
const MAANDHAN_UPDATED = new Date(
  Math.max(
    ...MAANDHAN_ARTICLES.map((a) => {
      const t = new Date(a.modified || a.published).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

// Kept in sync with the per-calculator `MODIFIED` consts in components/calculators/.
const CALCULATORS_UPDATED = new Date('2026-05-20');

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
  const now = clampToNow(FALLBACK_DATE);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
      // No hreflang alternates: single-language site — a lone self-referencing
      // hreflang on one URL is half-done markup and adds nothing for Google.
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.90,
    },
    {
      url: `${SITE_URL}/articles/hi`,
      lastModified: clampToNow(HINDI_UPDATED),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${SITE_URL}/maandhan`,
      lastModified: MAANDHAN_UPDATED,
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
      lastModified: CALCULATORS_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${SITE_URL}/calculator/quick-status-check`,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/installment-tracker`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/pm-kisan-benefit`,
      lastModified: new Date('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/kcc-loan-emi`,
      lastModified: new Date('2026-04-16'),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/pmfby-premium`,
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/msp-income`,
      lastModified: new Date('2026-05-20'),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/crop-profit`,
      lastModified: new Date('2026-04-28'),
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
        ? clampToNow(new Date(latestArticle.modifiedTime || latestArticle.publishedTime))
        : now,
      changeFrequency: 'weekly',
      priority: 0.60,
    };
  });

  const hindiCategoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES)
    .filter((category) => HINDI_ARTICLES.some((a) => a.category === category))
    .map((category) => {
      const categoryArticles = HINDI_ARTICLES.filter((a) => a.category === category);
      const latest = [...categoryArticles].sort((a, b) =>
        new Date(b.modifiedTime || b.publishedTime).getTime() -
        new Date(a.modifiedTime || a.publishedTime).getTime()
      )[0];

      return {
        url: `${SITE_URL}/articles/hi/category/${category}`,
        lastModified: latest
          ? clampToNow(new Date(latest.modifiedTime || latest.publishedTime))
          : now,
        changeFrequency: 'weekly' as const,
        priority: 0.60,
      };
    });

  const articlePages: MetadataRoute.Sitemap = ALL_ARTICLES.map((article) => {
    const modified = article.modifiedTime || article.publishedTime;
    const modifiedDate = modified ? clampToNow(new Date(modified)) : now;

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
    ...hindiCategoryPages,
    ...articlePages,
  ];
}
