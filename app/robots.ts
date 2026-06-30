import { MetadataRoute } from 'next';

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
          '/*?*sub1=',
          '/*?*tr_uuid=',
        ],
      },
      {
        userAgent: ['CCBot', 'Google-Extended'],
        disallow: '/',
      },
    ],
    sitemap: 'https://kisanstatus.com/sitemap.xml',
  };
}