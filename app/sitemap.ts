/**
 * Dynamic Sitemap — KisanStatus.com
 * ✅ FULLY AUTOMATIC — Koi manual update nahi chahiye
 * ✅ FIXED: Added /articles page, Optimized lastModified dates
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
  'ladakh', 'puducherry', 'andaman-nicobar', 'chandigarh', 'dadra-nagar-haveli', 'lakshadweep', // Fixed typo: lakshadweep -> lakshadweep if needed, but keeping your slug
];

// Helper to get current date only for truly dynamic content
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Static pages (Priority High) ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                     lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/articles`,                       lastModified: now, changeFrequency: 'daily',   priority: 0.95 }, // ✅ ADDED: Main Articles Page
    { url: `${BASE_URL}/beneficiary-list`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/pm-kisan-status`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/new-registration`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/calculator`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
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

  // ── Category pages — AUTO from CATEGORIES ─────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((category) => ({
    url:             `${BASE_URL}/articles/category/${category}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.85,
  }));

  // ── Article pages — AUTO from articles-data.ts ────────────────────────────
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url:             `${BASE_URL}/articles/${article.slug}`,
    // ✅ FIX: Sirf article ki apni modified time use karein, na ke current date
    lastModified:    article.modifiedTime
                       ? new Date(article.modifiedTime)
                       : article.publishedTime
                         ? new Date(article.publishedTime)
                         : now,
    changeFrequency: 'weekly' as const,
    priority:        0.9,
  }));

  // ── State beneficiary list pages ──────────────────────────────────────────
  const statePages: MetadataRoute.Sitemap = STATES.map((slug) => ({
    url:             `${BASE_URL}/beneficiary-list/${slug}`,
    lastModified:    now, 
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages, ...statePages];
}