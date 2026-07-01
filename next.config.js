/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },
  
  // Compression enable
  compress: true,
  
  // ✅ REDIRECTS - Fix 404 broken pages
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
      
      // PM Kisan redirects
      {
        source: '/pm-kisan-24vi-kist',
        destination: '/articles/pm-kisan-23vi-kist-2026-status-check',
        permanent: true,
      },
      {
        source: '/pm-kisan',
        destination: '/pm-kisan-status',
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
  
  // Headers for security & performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/:path*{/}?',
        has: [
          {
            type: 'header',
            key: 'next-router-prefetch',
          },
        ],
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      // ✅ FIXED: Images ke liye optimized cache
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // ❌ REMOVED: Unnecessary rewrites section
  // Ye image optimization ko break kar raha tha!
};

module.exports = nextConfig;