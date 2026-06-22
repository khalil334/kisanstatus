/**
 * Dynamic Sitemap — KisanStatus.com
 * Articles auto-generate from lib/articles-data.ts
 * Naya article add karo articles-data.ts mein — sitemap automatic update hoga
 */
import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/articles-data';

const BASE_URL = 'https://kisanstatus.com';

const STATES = [
  'andhra-pradesh','arunachal-pradesh','assam','bihar','chhattisgarh','goa',
  'gujarat','haryana','himachal-pradesh','jharkhand','karnataka','kerala',
  'madhya-pradesh','maharashtra','manipur','meghalaya','mizoram','nagaland',
  'odisha','punjab','rajasthan','sikkim','tamil-nadu','telangana','tripura',
  'uttar-pradesh','uttarakhand','west-bengal','delhi','jammu-kashmir',
  'ladakh','puducherry','andaman-nicobar','chandigarh','dadra-nagar-haveli','lakshadweep',
];

const STATIC_DATE = new Date('2026-06-23');

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                        lastModified: STATIC_DATE, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/pm-kisan-status`,                   lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/new-registration`,                  lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator`,                        lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/installment-tracker`,    lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator/pm-kisan-benefit`,       lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/kcc-loan-emi`,           lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/pmfby-premium`,          lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/msp-income`,             lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/crop-profit`,            lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/search`,                            lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/about`,                             lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/author`,                            lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`,                           lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/official-links`,                    lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`,                    lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/disclaimer`,                        lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/terms-of-service`,                  lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.4 },
  ];

  // ── Article pages — AUTO from articles-data.ts ───────────────────────────
  // Ab sirf articles-data.ts mein entry karo — sitemap automatic ban jaayega
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url:             `${BASE_URL}/articles/${article.slug}`,
    lastModified:    article.modifiedTime
                       ? new Date(article.modifiedTime)
                       : article.publishedTime
                         ? new Date(article.publishedTime)
                         : STATIC_DATE,
    changeFrequency: 'weekly' as const,
    priority:        0.9,
  }));

  // ── State beneficiary list pages ──────────────────────────────────────────
  const statePages: MetadataRoute.Sitemap = STATES.map((slug) => ({
    url:             `${BASE_URL}/beneficiary-list/${slug}`,
    lastModified:    STATIC_DATE,
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }));

  return [...staticPages, ...articlePages, ...statePages];
}
