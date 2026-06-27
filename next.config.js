/** @type {import('next').NextConfig} */ 
const nextConfig = { 
  compress: true, 
  
  images: { 
    unoptimized: false,
    formats: ['image/webp'],
  },
  
  async headers() { 
    return [ 
      { source: '/(.*)', headers: [ 
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' }, 
        { key: 'X-Content-Type-Options', value: 'nosniff' }, 
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, 
        { key: 'X-DNS-Prefetch-Control', value: 'on' }, 
      ] }, 
      { source: '/_next/static/(.*)', headers: [ 
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }, 
      ] }, 
      { source: '/images/(.*)', headers: [ 
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }, 
      ] }, 
      { source: '/fonts/(.*)', headers: [ 
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }, 
      ] }, 
      { source: '/((?!_next/static|images|fonts).*)', headers: [ 
        { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=3600' }, 
      ] }, 
    ]; 
  }, 
  
  async redirects() { 
    return [

      // ============================================================
      // ✅ SPAM URL BLOCK — GSC Crawled URLs Fix (All 6 URLs)
      // ww16.kisanstatus.com + www.kisanstatus.com spam redirects
      // Covers: ?sub1=, ?&sub1=, ?&&tr_uuid= — sab patterns
      // ============================================================

      // Block 1: ww16 subdomain — koi bhi URL → kisanstatus.com
      {
        source: '/',
        has: [{ type: 'host', value: 'ww16.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ww16.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // Block 2: ?sub1= query param (covers ?sub1= AND ?&sub1= dono)
      // Ye 5 URLs cover karta hai: Aug + Oct + Dec 2025 wale
      {
        source: '/',
        has: [{ type: 'query', key: 'sub1' }],
        destination: 'https://kisanstatus.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'sub1' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // Block 3: ?tr_uuid= query param (covers ?&&tr_uuid= bhi)
      // Ye www.kisanstatus.com wala URL cover karta hai
      {
        source: '/',
        has: [{ type: 'query', key: 'tr_uuid' }],
        destination: 'https://kisanstatus.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'tr_uuid' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // ============================================================
      // ✅ CANONICAL REDIRECT — www → non-www
      // ============================================================
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kisanstatus.com' }],
        destination: 'https://kisanstatus.com/:path*',
        permanent: true,
      },

      // ============================================================
      // ✅ PAGE REDIRECTS — Old URLs → New URLs
      // ============================================================
      { source: '/pm-kisan-status', destination: '/articles/pm-kisan-23vi-kist-2026-status-check', permanent: true },
      { source: '/pm-kisan-status/', destination: '/articles/pm-kisan-23vi-kist-2026-status-check', permanent: true },
      { source: '/pm-kisan-beneficiary-status', destination: '/articles/pm-kisan-21vi-installment-status-check', permanent: true }, 
      { source: '/pm-kisan-beneficiary-status/', destination: '/articles/pm-kisan-21vi-installment-status-check', permanent: true }, 
      { source: '/pm-kisan-kyc-csc', destination: '/articles/pm-kisan-ekyc-online-2026', permanent: true }, 
      { source: '/pm-kisan-kyc-csc/', destination: '/articles/pm-kisan-ekyc-online-2026', permanent: true }, 
      { source: '/pm-kisan-beneficiary-list', destination: '/articles/pm-kisan-beneficiary-list-2026', permanent: true }, 
      { source: '/pm-kisan-beneficiary-list/', destination: '/articles/pm-kisan-beneficiary-list-2026', permanent: true }, 
      { source: '/articles/pm-kisan-24vi-kist-2026', destination: '/articles/pm-kisan-24vi-kist', permanent: true }, 
      { source: '/articles/pm-kisan-24vi-kist-2026/', destination: '/articles/pm-kisan-24vi-kist', permanent: true }, 
      { source: '/articles/agri-stack-kya-hai-2026', destination: '/articles/agristack-kya-hai', permanent: true }, 
      { source: '/articles/agri-stack-kya-hai-2026/', destination: '/articles/agristack-kya-hai', permanent: true }, 
      { source: '/articles/pm-kisan-mobile-number-change-2026', destination: '/articles/pm-kisan-mobile-number-change', permanent: true }, 
      { source: '/articles/pm-kisan-mobile-number-change-2026/', destination: '/articles/pm-kisan-mobile-number-change', permanent: true }, 
    ]; 
  }, 
}; 

module.exports = nextConfig;
