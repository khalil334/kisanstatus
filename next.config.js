/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image Optimization ─────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: false,
  },

  // ── Compression ────────────────────────────────────────────
  compress: true,

  // ── Performance Optimizations ──────────────────────────────
  experimental: {
    optimizePackageImports: ['@/components/ArticleShared', '@/components/ArticleSVGs'],
  },

  // ── Redirects ──────────────────────────────────────────────
  async redirects() {
    return [
      // WWW → non-WWW fallback
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // Calculator path corrections
      { source: '/calculator/farming-profit', destination: '/calculator/crop-profit', permanent: true },
      { source: '/calculator/kisan-loan-emi', destination: '/calculator/kcc-loan-emi', permanent: true },

      // Root-level shortcuts → /articles/
      { source: '/pm-kisan', destination: '/', permanent: true },
      { source: '/agristack-kya-hai', destination: '/articles/agristack-kya-hai', permanent: true },
      { source: '/kisan-rin-kaha-se-le-2026', destination: '/articles/kisan-rin-kaha-se-le-2026', permanent: true },

      // Beneficiary list slug correction
      { source: '/beneficiary-list/jammu-and-kashmir', destination: '/beneficiary-list/jammu-kashmir', permanent: true },

      // 🚨 SPAM/HACKED URL REDIRECTS (Google mein indexed hain)
      // Yeh sab valid articles par redirect karo taaki SEO juice save ho
      
      // Beneficiary status → 24vi Kist article
      { source: '/pm-kisan-beneficiary-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/pm-kisan-beneficiary-status/', destination: '/articles/PmKisan24viKist2026', permanent: true },
      
      // Beneficiary list → Beneficiary List article
      { source: '/pm-kisan-beneficiary-list', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/pm-kisan-beneficiary-list/', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      
      // KYC/CSC → Master Guide article
      { source: '/pm-kisan-kyc-csc', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/pm-kisan-kyc-csc/', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      
      // Common spam variations
      { source: '/pm-kisan-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/pm-kisan-status/', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/kisan-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/kisan-status/', destination: '/articles/PmKisan24viKist2026', permanent: true },
      
      // Casino/gambling spam URLs (agar indexed hain)
      { source: '/vulkan-vegas', destination: '/', permanent: true },
      { source: '/1xbet', destination: '/', permanent: true },
      { source: '/mostbet', destination: '/', permanent: true },
      { source: '/smartbonus', destination: '/', permanent: true },
    ];
  },

  // ── Headers ────────────────────────────────────────────────
  async headers() {
    return [
      // DNS prefetch
      {
        source: '/((?!_next/static|api|images).*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },

      // RSC prefetch requests
      {
        source: '/:path*{/}?',
        has: [{ type: 'header', key: 'next-router-prefetch' }],
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },

      // Article images
      {
        source: '/images/articles/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=2592000' }],
      },

      // Site-level images
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=2592000' }],
      },

      // Next.js static assets
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;