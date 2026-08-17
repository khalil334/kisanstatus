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
          // '/search?' intentionally NOT disallowed: the page is noindex-ed
          // (metadata + X-Robots-Tag). Blocking it in robots.txt would stop
          // Google from ever reading that noindex. One signal only.
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
        ],
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
        ],
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
        ],
      },
      {
        userAgent: ['AhrefsBot', 'AhrefsSiteAudit'],
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: [
          'CCBot',
          'Google-Extended',
          'Bytespider',
          'Diffbot',
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
