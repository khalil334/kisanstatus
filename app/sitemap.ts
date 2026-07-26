import { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { SITE_URL } from '@/lib/site-config';

const REFERENCE_DATE = new Date('2026-07-20T00:00:00+05:30');

const ALL_ARTICLES = [
  // Regular articles are served from /articles/<slug>
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
  // Maandhan articles are served from /maandhan/<slug>, NOT /articles/<slug>
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
];

function getArticlePriority(modifiedTime: string): number {
  const daysSinceModified = Math.floor((REFERENCE_DATE.getTime() - new Date(modifiedTime).getTime()) / 86400000);
  if (daysSinceModified <= 1) return 1.0;
  if (daysSinceModified <= 7) return 0.95;
  if (daysSinceModified <= 30) return 0.90;
  if (daysSinceModified <= 90) return 0.85;
  return 0.80;
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
  const now = REFERENCE_DATE;

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
      priority: 0.95,
    },
    { 
      url: `${SITE_URL}/calculator`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/quick-status-check`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.90,
    },
    { 
      url: `${SITE_URL}/calculator/installment-tracker`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.90,
    },
    { 
      url: `${SITE_URL}/calculator/pm-kisan-benefit`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/kcc-loan-emi`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/pmfby-premium`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/msp-income`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/crop-profit`, 
      lastModified: new Date('2026-07-15'), 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/about`, 
      lastModified: new Date('2026-06-15'), 
      changeFrequency: 'monthly', 
      priority: 0.60,
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
      priority: 0.40,
    },
    { 
      url: `${SITE_URL}/disclaimer`, 
      lastModified: new Date('2026-06-01'), 
      changeFrequency: 'yearly', 
      priority: 0.40,
    },
    { 
      url: `${SITE_URL}/terms-of-service`, 
      lastModified: new Date('2026-06-01'), 
      changeFrequency: 'yearly', 
      priority: 0.40,
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
      priority: 0.85,
    };
  });

  const articlePages: MetadataRoute.Sitemap = ALL_ARTICLES.map((article) => {
    const modified = article.modifiedTime || article.publishedTime;
    const modifiedDate = modified ? new Date(modified) : now;
    
    return {
      url: `${SITE_URL}${article.path}`,
      lastModified: modifiedDate,
      changeFrequency: getArticleFrequency(article.category),
      priority: modified ? getArticlePriority(modified) : 0.80,
      images: article.ogImage ? [`${SITE_URL}${article.ogImage}`] : undefined,
    };
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
  ];
}