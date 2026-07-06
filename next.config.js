/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    remotePatterns: [],
    unoptimized: false,
  },

  compress: true,

  experimental: {
    optimizePackageImports: [
      '@/components/ArticleShared',
      '@/components/ArticleSVGs',
      'lucide-react',
      '@radix-ui/react-icons',
    ],
    optimizeCss: true,
    turbo: {
      rules: {
        '*.svg': ['react'],
      },
    },
  },

  reactStrictMode: true,

  async redirects() {
    return [
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
      { source: '/beneficiary-list/:slug', destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
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
      { source: '/vulkan-vegas', destination: '/', permanent: true },
      { source: '/1xbet', destination: '/', permanent: true },
      { source: '/mostbet', destination: '/', permanent: true },
      { source: '/smartbonus', destination: '/', permanent: true },
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
        ],
      },
      {
        source: '/((?!_next/static|api|images).*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        source: '/:path*{/}?',
        has: [{ type: 'header', key: 'next-router-prefetch' }],
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      {
        source: '/images/articles/:path*',
        headers: [{ 
          key: 'Cache-Control', 
          value: 'public, max-age=31536000, s-maxage=31536000, immutable' 
        }],
      },
      {
        source: '/images/:path*',
        headers: [{ 
          key: 'Cache-Control', 
          value: 'public, max-age=31536000, s-maxage=31536000, immutable' 
        }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ 
          key: 'Cache-Control', 
          value: 'public, max-age=31536000, immutable' 
        }],
      },
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