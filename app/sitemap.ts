import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { LIVE_YOJANA_2026_ARTICLES } from '@/lib/yojana-2026-data';
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
    noindex: a.noindex === true,
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
    noindex: false,
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
    noindex: false,
  })),
  ...LIVE_YOJANA_2026_ARTICLES.map((a) => ({
    slug: a.slug,
    title: a.title,
    desc: a.description,
    category: 'farming',
    publishedTime: a.published,
    modifiedTime: a.modified,
    ogImage: a.ogImage,
    path: `/yojana/${a.slug}`,
    noindex: false,
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
    noindex: false,
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

const LATEST_PUBLISHED = new Date(
  Math.max(
    ...ALL_ARTICLES.map((a) => {
      const t = new Date(a.publishedTime).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

function calculatorModified(componentFile: string, fallback: string): Date {
  try {
    const src = fs.readFileSync(
      path.join(process.cwd(), 'components', 'calculators', componentFile),
      'utf8',
    );
    const m = src.match(/const MODIFIED = '([^']+)'/);
    if (m) {
      const d = new Date(m[1]);
      if (Number.isFinite(d.getTime())) return d;
    }
  } catch {
  }
  return new Date(fallback);
}

function clampToNow(d: Date): Date {
  const buildTime = new Date();
  return d.getTime() > buildTime.getTime() ? buildTime : d;
}

const HINDI_UPDATED = new Date(
  Math.max(
    ...HINDI_ARTICLES.map((a) => {
      const t = new Date(a.modifiedTime || a.publishedTime).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

const MAANDHAN_UPDATED = new Date(
  Math.max(
    ...MAANDHAN_ARTICLES.map((a) => {
      const t = new Date(a.modified || a.published).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
  ),
);

const RAJYA_YOJANA_UPDATED = new Date(
  Math.max(
    ...LIVE_RAJYA_YOJANA_ARTICLES.map((a) => {
      const t = new Date(a.modified || a.published).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
    0,
  ),
);

const YOJANA_2026_UPDATED = new Date(
  Math.max(
    ...LIVE_YOJANA_2026_ARTICLES.map((a) => {
      const t = new Date(a.modified || a.published).getTime();
      return Number.isFinite(t) ? t : 0;
    }),
    0,
  ),
);

const CALC_DATES = {
  quickStatus: calculatorModified('QuickStatusChecker.tsx', '2026-05-10'),
  installmentTracker: calculatorModified('InstallmentTrackerCalcPage.tsx', '2026-03-10'),
  pmKisanBenefit: calculatorModified('PMKisanBenefitCalcPage.tsx', '2026-04-05'),
  kccLoanEmi: calculatorModified('KCCLoanCalcPage.tsx', '2026-04-16'),
  pmfbyPremium: calculatorModified('PMFBYCalcPage.tsx', '2026-04-24'),
  mspIncome: calculatorModified('MSPIncomeCalcPage.tsx', '2026-05-20'),
  cropProfit: calculatorModified('CropProfitCalcPage.tsx', '2026-04-28'),
};

const CALCULATORS_UPDATED = new Date(
  Math.max(...Object.values(CALC_DATES).map((d) => d.getTime())),
);

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
    case 'mandi': return 'weekly';
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
      lastModified: clampToNow(LATEST_PUBLISHED),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: clampToNow(LATEST_PUBLISHED),
      changeFrequency: 'weekly',
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
          lastModified: clampToNow(RAJYA_YOJANA_UPDATED),
          changeFrequency: 'weekly' as const,
          priority: 0.90,
        }]
      : []),
    ...(LIVE_YOJANA_2026_ARTICLES.length > 0
      ? [{
          url: `${SITE_URL}/yojana`,
          lastModified: clampToNow(YOJANA_2026_UPDATED),
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
      lastModified: CALC_DATES.quickStatus,
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/installment-tracker`,
      lastModified: CALC_DATES.installmentTracker,
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/pm-kisan-benefit`,
      lastModified: CALC_DATES.pmKisanBenefit,
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/kcc-loan-emi`,
      lastModified: CALC_DATES.kccLoanEmi,
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/pmfby-premium`,
      lastModified: CALC_DATES.pmfbyPremium,
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/msp-income`,
      lastModified: CALC_DATES.mspIncome,
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    {
      url: `${SITE_URL}/calculator/crop-profit`,
      lastModified: CALC_DATES.cropProfit,
      changeFrequency: 'weekly',
      priority: 0.70,
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

  const articlePages: MetadataRoute.Sitemap = ALL_ARTICLES.filter((a) => !a.noindex).map((article) => {
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
