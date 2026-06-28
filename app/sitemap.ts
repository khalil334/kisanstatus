import { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES } from '@/lib/articles-data';

const BASE_URL = 'https://kisanstatus.com';

const STATES = [
  'andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa',
  'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala',
  'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland',
  'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil-nadu', 'telangana', 'tripura',
  'uttar-pradesh', 'uttarakhand', 'west-bengal', 'delhi', 'jammu-kashmir',
  'ladakh', 'puducherry', 'andaman-nicobar', 'chandigarh', 'dadra-nagar-haveli', 'lakshadweep',
];

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                     lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/articles`,                       lastModified: now, changeFrequency: 'daily',   priority: 0.95 },
    { url: `${BASE_URL}/beneficiary-list`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/pm-kisan-status`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/new-registration`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/quick-status-check`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator/installment-tracker`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator/pm-kisan-benefit`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/kcc-loan-emi`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/pmfby-premium`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/msp-income`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/crop-profit`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/about`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/author`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/official-links`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${BASE_URL}/disclaimer`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${BASE_URL}/terms-of-service`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((category) => ({
    url:             `${BASE_URL}/articles/category/${category}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.85,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url:             `${BASE_URL}/articles/${article.slug}`,
    lastModified:    article.modifiedTime
                       ? new Date(article.modifiedTime)
                       : article.publishedTime
                         ? new Date(article.publishedTime)
                         : now,
    changeFrequency: 'weekly' as const,
    priority:        0.9,
  }));

  const statePages: MetadataRoute.Sitemap = STATES.map((slug) => ({
    url:             `${BASE_URL}/beneficiary-list/${slug}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages, ...statePages];
}