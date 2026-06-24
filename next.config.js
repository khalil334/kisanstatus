/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 — Turbopack enabled by default in dev
  compress: true,

  // ✅ Images served as-is (Vercel free plan compatible)
  images: {
    unoptimized: true,
  },

  // ✅ FIX: Proper cache + security + performance headers
  async headers() {
    return [
      // Security headers — all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control',    value: 'on' },
        ],
      },

      // ✅ Static assets — 1 year cache
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },

      // ✅ HTML pages — revalidate every 24 hours
      {
        source: '/((?!_next/static|images|fonts).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=3600' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // www → non-www canonical redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      {
        source: '/pm-kisan-beneficiary-status',
        destination: '/articles/pm-kisan-21vi-installment-status-check',
        permanent: true,
      },
      {
        source: '/pm-kisan-beneficiary-status/',
        destination: '/articles/pm-kisan-21vi-installment-status-check',
        permanent: true,
      },
      {
        source: '/pm-kisan-kyc-csc',
        destination: '/articles/pm-kisan-ekyc-online-2026',
        permanent: true,
      },
      {
        source: '/pm-kisan-kyc-csc/',
        destination: '/articles/pm-kisan-ekyc-online-2026',
        permanent: true,
      },
      {
        source: '/pm-kisan-beneficiary-list',
        destination: '/articles/pm-kisan-beneficiary-list-2026',
        permanent: true,
      },
      {
        source: '/pm-kisan-beneficiary-list/',
        destination: '/articles/pm-kisan-beneficiary-list-2026',
        permanent: true,
      },

      // ✅ FIXED: Old wrong slugs → new correct slugs
      {
        source: '/articles/pm-kisan-24vi-kist-2026',
        destination: '/articles/pm-kisan-24vi-kist',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-24vi-kist-2026/',
        destination: '/articles/pm-kisan-24vi-kist',
        permanent: true,
      },
      {
        source: '/articles/agri-stack-kya-hai-2026',
        destination: '/articles/agristack-kya-hai',
        permanent: true,
      },
      {
        source: '/articles/agri-stack-kya-hai-2026/',
        destination: '/articles/agristack-kya-hai',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-mobile-number-change-2026',
        destination: '/articles/pm-kisan-mobile-number-change',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-mobile-number-change-2026/',
        destination: '/articles/pm-kisan-mobile-number-change',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
