/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false, // ✅ ADDED: Consistent URL structure

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true, // ✅ FIXED: SVG logos allowed
    contentDispositionType: 'inline', // ✅ FIXED: Images display inline
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.kisanstatus.com',
      },
      {
        protocol: 'https',
        hostname: 'kisanstatus.com',
      },
      // ✅ ADDED: Common external image sources
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
    // ✅ ADDED: Unoptimized images for static export if needed
    unoptimized: process.env.NODE_ENV === 'development',
  },

  turbopack: {
    resolveAlias: {
      '@': '.',
      '~': '.',
    },
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // ✅ FIXED: Removed @/components from optimizePackageImports
    optimizePackageImports: [
      'lucide-react',
      'recharts',
      'date-fns',
      'framer-motion',
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: true,
  },

  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-popover',
  ],

  // ✅ ADDED: i18n for Hindi/English SEO
  i18n: {
    locales: ['hi-IN', 'en-IN'],
    defaultLocale: 'hi-IN',
    localeDetection: false,
  },

  async redirects() {
    return [
      // Old template pages
      {
        source: '/new-registration',
        destination: '/articles/PmKisanMasterGuide2026',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-ekyc-online-2026',
        destination: '/articles/PmKisanMasterGuide2026',
        permanent: true,
      },
      // Kist redirects
      {
        source: '/articles/pm-kisan-23vi-kist-2026-status-check',
        destination: '/articles/PmKisan24viKist2026',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-21vi-installment-status-check',
        destination: '/articles/PmKisan24viKist2026',
        permanent: true,
      },
      // Master guide redirects
      {
        source: '/articles/pm-kisan-land-seeding-status-check',
        destination: '/articles/PmKisanMasterGuide2026',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-rejected-list-2026',
        destination: '/articles/PmKisanMasterGuide2026',
        permanent: true,
      },
      {
        source: '/articles/pm-kisan-payment-failed-status-2026',
        destination: '/articles/PmKisanMasterGuide2026',
        permanent: true,
      },
      // Product redirects
      {
        source: '/articles/nano-dap-500ml-price-in-india-2026',
        destination: '/articles/NanoDap500mlPriceInIndia2026',
        permanent: true,
      },
      {
        source: '/beneficiary-list',
        destination: '/articles/PmKisanBeneficiaryList2026',
        permanent: true,
      },
      // WWW redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kisanstatus.com',
          },
        ],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      // Calculator redirects
      { 
        source: '/calculator/farming-profit', 
        destination: '/calculator/crop-profit', 
        permanent: true 
      },
      { 
        source: '/calculator/kisan-loan-emi', 
        destination: '/calculator/kcc-loan-emi', 
        permanent: true 
      },
      // Short redirects
      { 
        source: '/pm-kisan', 
        destination: '/', 
        permanent: true 
      },
      { 
        source: '/agristack-kya-hai', 
        destination: '/articles/AgriStackKyaHai2026', 
        permanent: true 
      },
      { 
        source: '/kisan-rin-kaha-se-le-2026', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      // Beneficiary list redirects
      { 
        source: '/beneficiary-list/jammu-and-kashmir', 
        destination: '/articles/PmKisanBeneficiaryList2026', 
        permanent: true 
      },
      { 
        source: '/beneficiary-list/:slug', 
        destination: '/articles/PmKisanBeneficiaryList2026', 
        permanent: true 
      },
      // Status redirects
      { 
        source: '/pm-kisan-beneficiary-status', 
        destination: '/articles/PmKisan24viKist2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-beneficiary-status/', 
        destination: '/articles/PmKisan24viKist2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-beneficiary-list', 
        destination: '/articles/PmKisanBeneficiaryList2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-beneficiary-list/', 
        destination: '/articles/PmKisanBeneficiaryList2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-kyc-csc', 
        destination: '/articles/PmKisanMasterGuide2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-kyc-csc/', 
        destination: '/articles/PmKisanMasterGuide2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-status', 
        destination: '/articles/PmKisan24viKist2026', 
        permanent: true 
      },
      { 
        source: '/pm-kisan-status/', 
        destination: '/articles/PmKisan24viKist2026', 
        permanent: true 
      },
      { 
        source: '/kisan-status', 
        destination: '/articles/PmKisan24viKist2026', 
        permanent: true 
      },
      { 
        source: '/kisan-status/', 
        destination: '/articles/PmKisan24viKist2026', 
        permanent: true 
      },
      // Scheme redirects
      { 
        source: '/scheme/agristack', 
        destination: '/articles/AgriStackKyaHai2026', 
        permanent: true 
      },
      { 
        source: '/scheme/kcc', 
        destination: '/articles/KisanCreditCardOnlineApply2026', 
        permanent: true 
      },
      { 
        source: '/scheme/pm-kisan', 
        destination: '/articles/PmKisanMasterGuide2026', 
        permanent: true 
      },
      { 
        source: '/scheme/nabard-tractor', 
        destination: '/articles/KisanTractorLoan2026', 
        permanent: true 
      },
      { 
        source: '/scheme/nano-dap', 
        destination: '/articles/NanoDap500mlPriceInIndia2026', 
        permanent: true 
      },
      { 
        source: '/scheme/pmfby', 
        destination: '/articles/PmfbyCropInsurance2026', 
        permanent: true 
      },
      { 
        source: '/scheme/soil-health-card', 
        destination: '/articles/soil-health-card-complete-guide-2026', 
        permanent: true 
      },
      // Bank redirects
      { 
        source: '/bank/sbi', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      { 
        source: '/bank/bob', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      { 
        source: '/bank/pnb', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      { 
        source: '/bank/cooperative', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      { 
        source: '/bank/tata-capital', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      { 
        source: '/bank/mahindra-finance', 
        destination: '/articles/KisanRinKahaSeLe2026', 
        permanent: true 
      },
      // Spam redirects
      { 
        source: '/vulkan-vegas', 
        destination: '/', 
        permanent: true 
      },
      { 
        source: '/1xbet', 
        destination: '/', 
        permanent: true 
      },
      { 
        source: '/mostbet', 
        destination: '/', 
        permanent: true 
      },
      { 
        source: '/smartbonus', 
        destination: '/', 
        permanent: true 
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // ✅ ADDED: Robots header for crawl control
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        ],
      },
      // ✅ ADDED: No-cache for dynamic pages
      {
        source: '/articles/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  // ✅ ADDED: Webpack config for bundle analysis
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
