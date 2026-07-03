/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization — AVIF + WebP for best compression
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },

  // Gzip/Brotli compression enabled
  compress: true,

  // URL redirects — only Next.js specific ones
  // Domain canonicalization + article slug fixes → vercel.json (edge level, faster)
  async redirects() {
    return [
      // ── WWW → non-WWW (Next.js fallback if Vercel domain settings miss) ──
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // ── Calculator path corrections ──
      { source: '/calculator/farming-profit', destination: '/calculator/crop-profit', permanent: true },
      { source: '/calculator/kisan-loan-emi', destination: '/calculator/kcc-loan-emi', permanent: true },
      { source: '/calculator/quick-status-check', destination: '/calculator/installment-tracker', permanent: true },

      // ── Root level → /articles/ redirects ──
      { source: '/pm-kisan', destination: '/', permanent: true },
      { source: '/pm-kisan-status', destination: '/articles/pm-kisan-status-check-online-2026-complete-guide', permanent: true },
      { source: '/pm-kisan-24vi-kist', destination: '/articles/pm-kisan-24vi-kist', permanent: true },
      { source: '/agristack-kya-hai', destination: '/articles/agristack-kya-hai', permanent: true },
      { source: '/kisan-rin-kaha-se-le-2026', destination: '/articles/kisan-rin-kaha-se-le-2026', permanent: true },
      { source: '/pm-kisan-beneficiary-list', destination: '/articles/pm-kisan-beneficiary-list-2026', permanent: true },

      // ── Beneficiary list slug corrections ──
      { source: '/beneficiary-list/daman-diu', destination: '/beneficiary-list/dadra-nagar-haveli', permanent: true },
      { source: '/beneficiary-list/jammu-and-kashmir', destination: '/beneficiary-list/jammu-kashmir', permanent: true },
    ];
  },

  // Caching strategy only — security headers moved to vercel.json (edge level)
  async headers() {
    return [
      // DNS prefetch hint
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      // Pages: always fresh (no stale content)
      {
        source: '/:path*{/}?',
        has: [{ type: 'header', key: 'next-router-prefetch' }],
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      // Images: cache for 1 year (immutable filenames)
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Static assets: cache for 1 year (hashed filenames)
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;