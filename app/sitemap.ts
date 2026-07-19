import { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { SITE_URL } from '@/lib/site-config';

function getArticlePriority(modifiedTime: string): number {
  const daysSinceModified = Math.floor((Date.now() - new Date(modifiedTime).getTime()) / 86400000);
  if (daysSinceModified <= 1) return 1.0;      // Today updated
  if (daysSinceModified <= 7) return 0.95;       // This week
  if (daysSinceModified <= 30) return 0.90;      // This month
  if (daysSinceModified <= 90) return 0.85;      // This quarter
  return 0.80;                                  // Older
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
  const now = new Date();

  // ✅ FIXED: Static pages with actual lastModified
  const staticPages: MetadataRoute.Sitemap = [
    { 
      url: SITE_URL, 
      lastModified: now, 
      changeFrequency: 'daily', 
      priority: 1.0,
      // ✅ ADDED: Alternates for language
      alternates: {
        languages: {
          'hi-IN': SITE_URL,
          'en-IN': `${SITE_URL}/en`,
        },
      },
    },
    { 
      url: `${SITE_URL}/articles`, 
      lastModified: now, 
      changeFrequency: 'daily', 
      priority: 0.95,
    },
    { 
      url: `${SITE_URL}/calculator`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/quick-status-check`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.90,
    },
    { 
      url: `${SITE_URL}/calculator/installment-tracker`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.90,
    },
    { 
      url: `${SITE_URL}/calculator/pm-kisan-benefit`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/kcc-loan-emi`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/pmfby-premium`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/msp-income`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/calculator/crop-profit`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    { 
      url: `${SITE_URL}/about`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.60,
    },
    { 
      url: `${SITE_URL}/contact`, 
      lastModified: now, 
      changeFrequency: 'monthly', 
      priority: 0.50,
    },
    { 
      url: `${SITE_URL}/privacy-policy`, 
      lastModified: now, 
      changeFrequency: 'yearly', 
      priority: 0.40,
    },
    { 
      url: `${SITE_URL}/disclaimer`, 
      lastModified: now, 
      changeFrequency: 'yearly', 
      priority: 0.40,
    },
    { 
      url: `${SITE_URL}/terms-of-service`, 
      lastModified: now, 
      changeFrequency: 'yearly', 
      priority: 0.40,
    },
    { 
      url: `${SITE_URL}/articles/PmKisanBeneficiaryList2026`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.85,
    },
    // ✅ ADDED: Search page
    { 
      url: `${SITE_URL}/search`, 
      lastModified: now, 
      changeFrequency: 'daily', 
      priority: 0.70,
    },
  ];

  // ✅ FIXED: Category pages with actual lastModified from articles
  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((category) => {
    // Find latest article in category for accurate lastModified
    const categoryArticles = ARTICLES.filter(a => a.category === category);
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

  // ✅ FIXED: Article pages with images
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => {
    const modified = article.modifiedTime || article.publishedTime;
    const modifiedDate = modified ? new Date(modified) : now;
    
    return {
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: modifiedDate,
      changeFrequency: getArticleFrequency(article.category),
      priority: modified ? getArticlePriority(modified) : 0.80,
      // ✅ ADDED: Images for image sitemap
      images: article.ogImage ? [
        {
          loc: `${SITE_URL}${article.ogImage}`,
          caption: article.ogTitle || article.title,
          title: article.title,
        },
      ] : undefined,
    };
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
  ];
}
