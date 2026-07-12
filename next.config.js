/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image Optimization ─────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.kisanstatus.com',
      },
    ],
    // ✅ NEW: Image loader for better optimization
    loader: 'default',
    path: '/_next/image',
  },

  // ── Core Settings ──────────────────────────────────────────
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // ✅ NEW: Generate ETags for better caching
  generateEtags: true,

  // ── Turbopack Configuration (Next.js 16+) ─────────────────
  turbopack: {
    resolveAlias: {
      '@': './src',
      '~': './src',
    },
  },

  // ── Performance Optimizations ──────────────────────────────
  experimental: {
    optimizePackageImports: [
      '@/components/ArticleShared',
      '@/components/ArticleSVGs',
      '@/lib',
      '@/utils',
      'lucide-react',
      'recharts',
      'date-fns',
    ],
    scrollRestoration: true,
    serverMinification: true,
    serverSourceMaps: false,
    webpackBuildWorker: true,
    optimizeServerReact: true,
    // ✅ NEW: CSS optimization
    optimizeCss: true,
    // ✅ NEW: Better font optimization
    optimizeFonts: true,
  },

  // ── Compiler Options — Bundle Size Reduce ──────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: true,
    // ✅ NEW: Remove prop-types in production
    emotion: process.env.NODE_ENV === 'production' ? {
      sourceMap: false,
      autoLabel: 'never',
    } : false,
  },

  // ── Transpile Packages — Fix Legacy JavaScript ─────────────
  transpilePackages: [
    '@/components',
    '@/lib',
    '@/utils',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-popover',
  ],

  // ── Webpack Configuration — Advanced Optimization ──────────
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // ✅ IMPROVED: Better chunk splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000, // Reduced from 20000
        maxSize: 200000, // Reduced from 244000
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          // ✅ NEW: Separate vendor chunks for better caching
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
            enforce: true,
          },
          // ✅ NEW: Framework chunk (React, Next.js)
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            name: 'framework',
            chunks: 'all',
            priority: 40,
            enforce: true,
          },
          // ✅ NEW: Common utilities
          common: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          // ✅ NEW: Image optimization
          images: {
            test: /\.(png|jpg|jpeg|gif|webp|avif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'static/images/[hash][ext]',
            },
          },
        },
      };

      // ✅ IMPROVED: Better tree shaking
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;
      config.optimization.sideEffects = true;
      config.optimization.concatenateModules = true;

      // ✅ NEW: Minimize output
      config.optimization.minimize = true;
      config.optimization.moduleIds = 'deterministic';
    }

    // ✅ Reduce bundle size by excluding heavy libraries
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
      };
    }

    // ✅ NEW: Ignore mock files
    config.ignoreWarnings = [
      {
        message: /Critical dependency/,
      },
    ];

    return config;
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
      
      // Scheme pages redirects (7 URLs)
      { source: '/scheme/agristack', destination: '/articles/AgriStackKyaHai2026', permanent: true },
      { source: '/scheme/kcc', destination: '/articles/KisanCreditCardOnlineApply2026', permanent: true },
      { source: '/scheme/pm-kisan', destination: '/articles/PmKisanMasterGuide2026', permanent: true },
      { source: '/scheme/nabard-tractor', destination: '/articles/KisanTractorLoan2026', permanent: true },
      { source: '/scheme/nano-dap', destination: '/articles/NanoDap500mlPriceInIndia2026', permanent: true },
      { source: '/scheme/pmfby', destination: '/articles/PmfbyCropInsurance2026', permanent: true },
      { source: '/scheme/soil-health-card', destination: '/articles/soil-health-card-complete-guide-2026', permanent: true },
      
      // Bank pages redirects (6 URLs)
      { source: '/bank/sbi', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/bob', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/pnb', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/cooperative', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/tata-capital', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      { source: '/bank/mahindra-finance', destination: '/articles/KisanRinKahaSeLe2026', permanent: true },
      
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
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // ✅ NEW: Better caching
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          // ✅ NEW: Image priority hint
          { key: 'Link', value: '</hero-wheat-field.webp>; rel=preload; as=image; fetchpriority=high' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          // ✅ NEW: Font priority
          { key: 'Link', value: '</_next/static/css/app/layout.css>; rel=preload; as=style' },
        ],
      },
      // ✅ NEW: Critical assets priority
      {
        source: '/',
        headers: [
          { 
            key: 'Link', 
            value: [
              '</hero-wheat-field.webp>; rel=preload; as=image; fetchpriority=high',
              '</_next/static/css/app/layout.css>; rel=preload; as=style',
            ].join(', ')
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;