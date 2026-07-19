import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
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
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
