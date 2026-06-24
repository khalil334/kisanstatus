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
          // ✅ NEW: tells browser to preconnect DNS for pmkisan.gov.in (faster external links)
          { key: 'X-DNS-Prefetch-Control',    value: 'on' },
        ],
      },

      // ✅ FIX: Static assets — 1 year cache (images, fonts, icons)
      // Pehle pattern galat tha — parens ke andar colon nahi hona chahiye
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

      // ✅ NEW: HTML pages — revalidate every 24 hours (SEO fresh content)
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
    ];
  },
};

module.exports = nextConfig;
