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
          '/_next/',
          '/tools/',
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
          '/private/',
          '/tools/',
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