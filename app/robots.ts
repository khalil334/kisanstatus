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
          // '/_next/',  // ❌ REMOVED: Static assets block nahi karne chahiye
          '/tools/',
          '/*.json$',      // ✅ ADDED: JSON files block
          '/*.xml$',       // ✅ ADDED: XML files except sitemap
          '/search?',      // ✅ ADDED: Search query pages block
        ],
        crawlDelay: 1,       // ✅ ADDED: 1 second delay
      },
      
      // ✅ GOOGLE: Special rules
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/tools/',
        ],
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
      
      // ✅ AI BOTS: Restricted access (content protection)
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
        allow: [
          '/',  // ✅ Allow for brand visibility
        ],
        disallow: [
          '/api/',
          '/private/',
          '/tools/',
          '/articles/',  // ✅ ADDED: Protect main content
        ],
      },
      
      // ✅ BLOCK COMPLETELY: Data scrapers
      {
        userAgent: [
          'CCBot',
          'Google-Extended',  // ✅ Kept blocked — AI training data
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
    
    // ✅ ADDED: Host directive
    host: 'kisanstatus.com',
    
    // ✅ Sitemap
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
