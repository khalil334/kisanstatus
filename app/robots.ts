import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ✅ DEFAULT: All bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/tools/',
          '/search?',
        ],
        crawlDelay: 1,
      },
      
      // ✅ GOOGLEBOT: With crawl delay
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/tools/',
        ],
        crawlDelay: 1,
      },
      
      // ✅ GOOGLE IMAGE: Image indexing
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/images/',
          '/_next/image',
        ],
        disallow: [
          '/api/',
        ],
      },
      
      // ✅ BING: Special rules
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/tools/',
        ],
        crawlDelay: 2,
      },
      
      // ✅ AI BOTS: Allow articles for AI visibility
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot',
          'YouBot',
          'cohere-ai',
          'anthropic-ai',
          'Amazonbot',
          'FacebookBot',
          'Applebot',
          'Applebot-Extended',
        ],
        allow: ['/'],
        disallow: [
          '/api/',
          '/private/',
          '/tools/',
        ],
      },
      
      // ✅ BLOCK COMPLETELY: Data scrapers
      {
        userAgent: [
          'CCBot',
          'Google-Extended',
          'Bytespider',
          'Diffbot',
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'BLEXBot',
        ],
        disallow: '/',
      },
    ],
    
    // ✅ Sitemap
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
