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

  // URL redirects — old paths to new canonical URLs
  async redirects() {
    return [
      // Calculator path corrections
      {
        source: '/calculator/farming-profit',
        destination: '/calculator/crop-profit',
        permanent: true,
      },
      {
        source: '/calculator/kisan-loan-emi',
        destination: '/calculator/kcc-loan-emi',
        permanent: true,
      },

      // Article path corrections
      {
        source: '/pm-kisan-24vi-kist',
        destination: '/articles/pm-kisan-24vi-kist',
        permanent: true,
      },
      {
        source: '/pm-kisan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pm-kisan-status',
        destination: '/articles/pm-kisan-status-check-online-2026-complete-guide',
        permanent: true,
      },

      // Beneficiary list slug corrections
      {
        source: '/beneficiary-list/daman-diu',
        destination: '/beneficiary-list/dadra-nagar-haveli',
        permanent: true,
      },
      {
        source: '/beneficiary-list/jammu-and-kashmir',
        destination: '/beneficiary-list/jammu-kashmir',
        permanent: true,
      },

      // Article slug correction
      {
        source: '/agristack-kya-hai',
        destination: '/articles/agristack-kya-hai',
        permanent: true,
      },
    ];
  },

  // Security headers + caching strategy
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
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