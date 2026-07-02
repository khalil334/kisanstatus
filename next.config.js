/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ FIXED: Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    // ❌ REMOVED: contentDispositionType: 'attachment'
    // Ye images ko download kara deta tha instead of display!
  },

  // Compression enable
  compress: true,

  // ✅ FIXED: Redirects
  async redirects() {
    return [
      // Calculator redirects
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

      // ✅ FIXED: PM Kisan redirects (correct destinations)
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

      // Beneficiary list redirects
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

      // Article redirects
      {
        source: '/agristack-kya-hai',
        destination: '/articles/agristack-kya-hai',
        permanent: true,
      },
    ];
  },

  // Security & Performance Headers
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
      // ✅ Pages: No cache (always fresh)
      {
        source: '/:path*{/}?',
        has: [{ type: 'header', key: 'next-router-prefetch' }],
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      // ✅ Images: Long cache (immutable)
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // ✅ Static assets: Long cache
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;