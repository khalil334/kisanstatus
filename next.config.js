/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 — Turbopack enabled by default in dev
  // React 19 compatible
  experimental: {
    // React 19 uses new JSX transform — already enabled by default in Next 15
  },

  // Compress responses for better Core Web Vitals
  compress: true,

  // ✅ FIX: serve images as-is from public/images/ without Next.js optimizer
  images: {
    unoptimized: true,
  },

  // Add security + SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/(:path*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2|woff))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async redirects() {
    return [
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