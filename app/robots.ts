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
          'Applebot',
          'FacebookBot',
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
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'YouBot',
          'cohere-ai',
          'Amazonbot',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'CCBot',
          'Google-Extended',
          'Bytespider',
          'Diffbot',
          'omgili',
          'omgilibot',
          'Timpibot',
          'ImagesiftBot',
        ],
        disallow: '/',
      },
      {
        userAgent: [
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
