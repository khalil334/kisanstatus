/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 — Turbopack enabled by default in dev
  // React 19 compatible
  experimental: {
    // React 19 uses new JSX transform — already enabled by default in Next 15
  },

  // Compress responses for better Core Web Vitals
  compress: true,

  // Add security + SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking (also good for SEO trust signals)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Stop MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer policy — send origin on same-site, no referrer on cross-site
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/(:path*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2|woff))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Redirect www → non-www (pick one canonical form)
  // + Permanent 301 redirects for old expired-domain URLs → new 2026 articles
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true, // 301 redirect
      },
      // ── Old expired-domain URLs → new articles (permanent 301) ──────────
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
