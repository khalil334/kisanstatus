/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image Optimization ─────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── Core Settings ──────────────────────────────────────────
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js signature

  // ── Performance Optimizations ──────────────────────────────
  experimental: {
    optimizePackageImports: ['@/components/ArticleShared', '@/components/ArticleSVGs', '@/lib'],
    scrollRestoration: true,
    // TTFB improvement
    serverMinification: true,
    serverSourceMaps: false,
  },

  // ── Redirects ──────────────────────────────────────────────
  async redirects() {
    return [
      // WWW → non-WWW
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      
      // Calculator redirects
      { source: '/calculator/farming-profit', destination: '/calculator/crop-profit', permanent: true },
      { source: '/calculator/kisan-loan-emi', destination: '/calculator/kcc-loan-emi', permanent: true },
      
      // Article redirects
      { source: '/pm-kisan', destination: '/', permanent: true },
      { source: '/agristack-kya-hai', destination: '/articles/AgriStackKyaHai2026', permanent: true },
      { source: '/kisan-rin-kaha-se-le-2026', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      
      // Beneficiary list redirects
      { source: '/beneficiary-list/jammu-and-kashmir', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/beneficiary-list/:slug', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      
      // PM Kisan status redirects
      { source: '/pm-kisan-beneficiary-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/pm-kisan-beneficiary-status/', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/pm-kisan-beneficiary-list', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/pm-kisan-beneficiary-list/', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/pm-kisan-kyc-csc', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/pm-kisan-kyc-csc/', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/pm-kisan-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/pm-kisan-status/', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/kisan-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/kisan-status/', destination: '/articles/PmKisan24viKist2026', permanent: true },
      
      // Spam redirects
      { source: '/vulkan-vegas', destination: '/', permanent: true },
      { source: '/1xbet', destination: '/', permanent: true },
      { source: '/mostbet', destination: '/', permanent: true },
      { source: '/smartbonus', destination: '/', permanent: true },
    ];
  },

  // ── Security & Performance Headers ─────────────────────────
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security headers
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          
          // Performance: DNS prefetch
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      
      // Images: Long-term caching
      {
        source: '/images/:path*',
        headers: [{ 
          key: 'Cache-Control', 
          value: 'public, max-age=31536000, s-maxage=31536000, immutable' 
        }],
      },
      
      // Static assets: Long-term caching
      {
        source: '/_next/static/:path*',
        headers: [{ 
          key: 'Cache-Control', 
          value: 'public, max-age=31536000, immutable' 
        }],
      },
      
      // Fonts: Long-term caching
      {
        source: '/fonts/:path*',
        headers: [{ 
          key: 'Cache-Control', 
          value: 'public, max-age=31536000, immutable' 
        }],
      },
    ];
  },
};

module.exports = nextConfig;