/**
 * robots.ts — KisanStatus.com
 * Next.js 15 dynamic robots generation
 * ✅ Allows major AI crawlers for better visibility in AI Search
 */
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all standard search engines (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/speed-insights',
          '/private/', // Agar koi private folder ho toh block karo
        ],
      },
      {
        // ✅ ALLOWED: Major AI Crawlers
        // Ye bots ab search results mein tumhara content dikha sakte hain
        userAgent: [
          'GPTBot',           // OpenAI (ChatGPT)
          'ChatGPT-User',     // OpenAI User Agent
          'Claude-Web',       // Anthropic (Claude)
          'PerplexityBot',    // Perplexity AI
          'YouBot',           // You.com
          'cohere-ai',        // Cohere
          'anthropic-ai',     // Anthropic
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        // ❌ BLOCKED: Aggressive Scrapers / Bad Bots
        // Ye bots sirf data churate hain, value nahi dete
        userAgent: [
          'CCBot',            // Common Crawl (optional: allow if you want open data)
          'Google-Extended',  // Google's training bot (block if you don't want Gemini training on your data)
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://kisanstatus.com/sitemap.xml',
  };
}