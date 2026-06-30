/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },

  experimental: {
    optimizeCss: true,
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
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
      {
        source: '/',
        has: [{ type: 'host', value: 'ww16.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ww16.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'sub1' }],
        destination: 'https://kisanstatus.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'sub1' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'tr_uuid' }],
        destination: 'https://kisanstatus.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'tr_uuid' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      { source: '/pm-kisan-status', destination: '/articles/pm-kisan-23vi-kist-2026-status-check', permanent: true },
      { source: '/pm-kisan-beneficiary-status', destination: '/articles/pm-kisan-21vi-installment-status-check', permanent: true },
      { source: '/pm-kisan-kyc-csc', destination: '/articles/pm-kisan-ekyc-online-2026', permanent: true },
      { source: '/pm-kisan-beneficiary-list', destination: '/articles/pm-kisan-beneficiary-list-2026', permanent: true },
      { source: '/articles/pm-kisan-24vi-kist-2026', destination: '/articles/pm-kisan-24vi-kist', permanent: true },
      { source: '/articles/agri-stack-kya-hai-2026', destination: '/articles/agristack-kya-hai', permanent: true },
      { source: '/articles/pm-kisan-mobile-number-change-2026', destination: '/articles/pm-kisan-mobile-number-change', permanent: true },
    ];
  },
};

module.exports = nextConfig;