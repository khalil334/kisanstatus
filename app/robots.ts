/**
 * robots.ts — KisanStatus.com
 * Next.js 15 dynamic robots generation
 * ✅ Allows major AI crawlers for better visibility in AI Search
 * ✅ FIX: Blocks spam tracking URLs (?sub1=, ?tr_uuid=) from being crawled
 */
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all standard search engines (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/speed-insights',
          '/private/',
          // ✅ FIX: Block spam tracking query param URLs
          '/*?*sub1=',
          '/*?*tr_uuid=',
        ],
      },
      {
        // ✅ ALLOWED: Major AI Crawlers
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'PerplexityBot',
          'YouBot',
          'cohere-ai',
          'anthropic-ai',
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          // ✅ FIX: Block spam URLs for AI crawlers too
          '/*?*sub1=',
          '/*?*tr_uuid=',
        ],
      },
      {
        // ❌ BLOCKED: Aggressive Scrapers / Bad Bots
        userAgent: [
          'CCBot',
          'Google-Extended',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://kisanstatus.com/sitemap.xml',
  };
}
