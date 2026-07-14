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
          '/tools/',
          '/admin/',
          '/_next/',
          '/*?*sub1=',
          '/*?*tr_uuid=',
        ],
      },
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
      {
        userAgent: ['CCBot', 'Google-Extended', 'FacebookBot', 'Applebot-Extended'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}