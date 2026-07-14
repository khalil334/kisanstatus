import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── 1. Standard Rules for All Search Engines (Google, Bing, DuckDuckGo, etc.) ──
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/tools/',
          '/admin/',
          '/_next/',
          '/*?*sub1=',
          '/*?*tr_uuid=',
        ],
      },
      
      // ── 2. Specific Rules for AI Training Bots (Allow crawling but block sensitive/tools) ──
      {
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
          '/tools/',
          '/private/',
          '/*?*sub1=',
          '/*?*tr_uuid=',
        ],
      },
      
      // ── 3. Strict Block for Data Scrapers & AI Training Crawlers ──
      {
        userAgent: ['CCBot', 'Google-Extended', 'FacebookBot', 'Applebot-Extended'],
        disallow: '/',
      },
    ],
    
    // ✅ DYNAMIC SITEMAP: Uses SITE_URL so it works in both dev and prod
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}