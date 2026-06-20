/**
 * robots.ts — KisanStatus.com
 * Next.js 15 dynamic robots generation (better than static robots.txt)
 * Replaces public/robots.txt
 */
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/speed-insights',   // internal perf page
        ],
      },
      {
        // Block AI scrapers from indexing content
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'YouBot',
          'cohere-ai',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://kisanstatus.com/sitemap.xml',
  };
}
