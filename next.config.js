const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: '**.kisanstatus.com' },
      { protocol: 'https', hostname: 'kisanstatus.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },

  turbopack: {
    resolveAlias: { '@': '.', '~': '.' },
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'recharts', 'date-fns', 'framer-motion', 'react-icons', '@heroicons/react'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    reactRemoveProperties: true,
  },

  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-popover',
  ],

  // NOTE: redirects live here and ONLY here. Do not add a `redirects` block to
  // vercel.json — Vercel platform redirects run BEFORE Next.js ones, so a rule
  // there silently overrides this file and creates split-brain config (BUG-2).
  async redirects() {
    return [
      // Host normalization: apex is canonical.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kisanstatus.vercel.app' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      { source: '/en', destination: '/', permanent: true },
      // FIX-2 (fix.md): legacy CMS-shaped paths that Googlebot / feed readers
      // guess and that GSC reports under "Not found (404)". Each target was
      // verified live at 200 on 2026-08-08. Only paths with an unambiguous
      // modern equivalent are redirected; the rest stay 404 on purpose.
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/feed', destination: '/rss.xml', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      // Moved from app/articles/[slug]/page.tsx: in-page redirect() never ran
      // (root loading.tsx streams a 200 shell first) and the slug is not in
      // generateStaticParams, so with dynamicParams=false it would 404.
      { source: '/articles/PmKisanBeneficiaryListVillageWise2026', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/new-registration', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/articles/pm-kisan-ekyc-online-2026', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/articles/pm-kisan-23vi-kist-2026-status-check', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/articles/pm-kisan-21vi-installment-status-check', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/articles/pm-kisan-land-seeding-status-check', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/articles/pm-kisan-rejected-list-2026', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/articles/pm-kisan-payment-failed-status-2026', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/articles/nano-dap-500ml-price-in-india-2026', destination: '/articles/NanoDap500mlPriceInIndia2026', permanent: true },
      { source: '/articles/kisan-tractor-loan-2026', destination: '/articles/KisanTractorLoan2026', permanent: true },
      { source: '/articles/pm-kisan-mobile-number-change', destination: '/articles/PmKisanMobileNumberChangeUpdate', permanent: true },
      { source: '/articles/pm-kisan-mobile-number-change-2026', destination: '/articles/PmKisanMobileNumberChangeUpdate', permanent: true },
      { source: '/pm-kisan-21vi-installment-status-check', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/articles/pm-kisan-24vi-kist-2026', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/articles/agri-stack-kya-hai-2026', destination: '/articles/AgriStackKyaHai2026', permanent: true },
      { source: '/author', destination: '/about', permanent: true },
      { source: '/official-links', destination: '/contact', permanent: true },
      { source: '/beneficiary-list', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/articles/loan/KisanCreditCardOnlineApply2026', destination: '/articles/KisanCreditCardOnlineApply2026', permanent: true },
      { source: '/articles/farming/pm-fme-yojana-food-processing', destination: '/articles/pm-fme-yojana-food-processing', permanent: true },
      { source: '/articles/farming/pm-matsya-sampada-yojana-fish-farming', destination: '/articles/pm-matsya-sampada-yojana-fish-farming', permanent: true },
      { source: '/articles/farming/silage-making-business-guide', destination: '/articles/silage-making-business-guide', permanent: true },
      { source: '/articles/farming/vermi-compost-business-guide', destination: '/articles/vermi-compost-business-guide', permanent: true },
      { source: '/articles/pm-kisan-maandhan-status-check-online', destination: '/maandhan/pm-kisan-maandhan-status-check-online', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },
      { source: '/calculator/farming-profit', destination: '/calculator/crop-profit', permanent: true },
      { source: '/calculator/kisan-loan-emi', destination: '/calculator/kcc-loan-emi', permanent: true },
      { source: '/pm-kisan', destination: '/', permanent: true },
      { source: '/agristack-kya-hai', destination: '/articles/AgriStackKyaHai2026', permanent: true },
      { source: '/kisan-rin-kaha-se-le-2026', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/beneficiary-list/jammu-and-kashmir', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      {
        source: '/beneficiary-list/:slug((?!PmKisanBeneficiaryList2026).*)',
        destination: '/articles/PmKisanBeneficiaryList2026',
        permanent: true,
      },
      { source: '/pm-kisan-beneficiary-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/pm-kisan-beneficiary-list', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
      { source: '/pm-kisan-kyc-csc', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      // Canonical destination for /pm-kisan-status: the live site has been
      // sending this to the quick-status-check calculator (the vercel.json rule
      // won before it was consolidated here). Keep that target so no live URL
      // behaviour changes.
      { source: '/pm-kisan-status', destination: '/calculator/quick-status-check', permanent: true },
      // BUG-5: /speed-insights was a noindex meta-refresh placeholder page; now a real redirect.
      { source: '/speed-insights', destination: '/', permanent: true },
      { source: '/kisan-status', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/scheme/agristack', destination: '/articles/AgriStackKyaHai2026', permanent: true },
      { source: '/scheme/kcc', destination: '/articles/KisanCreditCardOnlineApply2026', permanent: true },
      { source: '/scheme/pm-kisan', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/scheme/nabard-tractor', destination: '/articles/KisanTractorLoan2026', permanent: true },
      { source: '/scheme/nano-dap', destination: '/articles/NanoDap500mlPriceInIndia2026', permanent: true },
      { source: '/scheme/pmfby', destination: '/articles/PmfbyCropInsurance2026', permanent: true },
      { source: '/scheme/soil-health-card', destination: '/articles/soil-health-card-complete-guide-2026', permanent: true },
      { source: '/bank/sbi', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/bob', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/pnb', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/cooperative', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/tata-capital', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/mahindra-finance', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/articles/pm-kisan-24vi-kist', destination: '/articles/PmKisan24viKist2026', permanent: true },
      { source: '/articles/pm-kisan-ekyc-kaise-karein', destination: '/articles/PmKisanEkycOnline2026', permanent: true },
      { source: '/articles/pm-kisan-status-check-2026', destination: '/articles/PmKisan24viKist2026', permanent: true },
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
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        ],
      },
      {
        source: '/',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/about',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/contact',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/privacy-policy',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/disclaimer',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/calculator/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/search',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        source: '/articles/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400' },
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

  webpack: (config, { isServer }) => {
    if (!isServer && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }));
    }
    return config;
  },
};

module.exports = nextConfig;
