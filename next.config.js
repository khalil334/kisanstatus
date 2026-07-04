/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image Optimization ─────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600, // 1 hour (was 60s — reduces origin revalidation)
    dangerouslyAllowSVG: false,
    // Add remote domains if external images ever needed:
    // remotePatterns: [{ protocol: 'https', hostname: 'pmkisan.gov.in' }],
  },

  // ── Compression ────────────────────────────────────────────
  compress: true,

  // ── Performance Optimizations ──────────────────────────────
  experimental: {
    optimizePackageImports: ['@/components/ArticleShared', '@/components/ArticleSVGs'],
  },

  // ── Redirects (Next.js level only — domain/article slugs in vercel.json) ──
  async redirects() {
    return [
      // WWW → non-WWW fallback (Vercel domain settings are primary)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // Calculator path corrections ONLY
      // ⚠️ Do NOT redirect /calculator/quick-status-check — it's a valid tool
      { source: '/calculator/farming-profit', destination: '/calculator/crop-profit', permanent: true },
      { source: '/calculator/kisan-loan-emi', destination: '/calculator/kcc-loan-emi', permanent: true },

      // Root-level shortcuts → /articles/ (NOT in vercel.json)
      { source: '/pm-kisan', destination: '/', permanent: true },
      { source: '/agristack-kya-hai', destination: '/articles/agristack-kya-hai', permanent: true },
      { source: '/kisan-rin-kaha-se-le-2026', destination: '/articles/kisan-rin-kaha-se-le-2026', permanent: true },

      // Beneficiary list slug correction (hyphen vs 'and')
      { source: '/beneficiary-list/jammu-and-kashmir', destination: '/beneficiary-list/jammu-kashmir', permanent: true },
    ];
  },

  // ── Headers ────────────────────────────────────────────────
  // Security headers → vercel.json (edge level, faster)
  // Only caching + performance headers here
  async headers() {
    return [
      // DNS prefetch — HTML pages only (not static/API)
      {
        source: '/((?!_next/static|api|images).*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },

      // RSC prefetch requests — always fresh
      {
        source: '/:path*{/}?',
        has: [{ type: 'header', key: 'next-router-prefetch' }],
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },

      // Article images — shorter cache than fonts (OG images may update)
      {
        source: '/images/articles/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=2592000' }],
      },

      // Site-level images (hero, logo, OG) — moderate cache
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=2592000' }],
      },

      // Next.js static assets — immutable (hashed filenames)
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;