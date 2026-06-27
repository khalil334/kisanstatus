/**
 * Dynamic Sitemap — KisanStatus.com
 * ✅ FULLY AUTOMATIC — Koi manual update nahi chahiye
 * ✅ FIXED: /search removed, /beneficiary-list added
 */
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

const getCurrentDate = () => new Date();

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                     lastModified: getCurrentDate(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/articles`,                       lastModified: getCurrentDate(), changeFrequency: 'daily',   priority: 0.95 },
    { url: `${BASE_URL}/beneficiary-list`,               lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/pm-kisan-status`,                lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/new-registration`,               lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator`,                     lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/installment-tracker`, lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator/pm-kisan-benefit`,    lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/kcc-loan-emi`,        lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/pmfby-premium`,       lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/msp-income`,          lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/calculator/crop-profit`,         lastModified: getCurrentDate(), changeFrequency: 'weekly',  priority: 0.8 },
    // ✅ REMOVED: /search — ab search modal se hota hai, koi page nahi hai
    { url: `${BASE_URL}/about`,                          lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/author`,                         lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`,                        lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/official-links`,                 lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`,                 lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/disclaimer`,                     lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/terms-of-service`,               lastModified: getCurrentDate(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  // ── Category pages — AUTO from CATEGORIES ─────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((category) => ({
    url:             `${BASE_URL}/articles/category/${category}`,
    lastModified:    getCurrentDate(),
    changeFrequency: 'weekly' as const,
    priority:        0.85,
  }));

  // ── Article pages — AUTO from articles-data.ts ────────────────────────────
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url:             `${BASE_URL}/articles/${article.slug}`,
    lastModified:    article.modifiedTime
                       ? new Date(article.modifiedTime)
                       : article.publishedTime
                         ? new Date(article.publishedTime)
                         : getCurrentDate(),
    changeFrequency: 'weekly' as const,
    priority:        0.9,
  }));

  // ── State beneficiary list pages ──────────────────────────────────────────
  const statePages: MetadataRoute.Sitemap = STATES.map((slug) => ({
    url:             `${BASE_URL}/beneficiary-list/${slug}`,
    lastModified:    getCurrentDate(),
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages, ...statePages];
}