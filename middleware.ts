import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 🚫 Sirf SPAM params remove karo, marketing params mat chhedo
const SPAM_PARAMS = [
  'sub1', 'sub2', 'sub3', 'sub4', 'sub5',  // Affiliate spam
  'tr_uuid',                                 // Tracking UUID spam
  'click_id',                                // Click tracking spam
  'fbclid',                                  // Facebook click ID (spam-like)
  'msclkid',                                 // Microsoft click ID
  // ⚠️ gclid removed from here — CONFIRM with site owner whether Google Ads
  // is used before stripping this. If Google Ads traffic is ever run,
  // stripping gclid breaks conversion attribution. Add back only if
  // confirmed no ads campaigns rely on it.
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  let changed = false
  
  // Sirf spam params delete karo
  SPAM_PARAMS.forEach(param => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param)
      changed = true
    }
  })
  
  // Agar kuch change hua toh clean URL par redirect karo
  if (changed) {
    // 302 use karo instead of 301 - temporary redirect
    // 301 browser mein cache ho jata hai permanently
    return NextResponse.redirect(url, 302)
  }
  
  return NextResponse.next()
}

// Static files, images, aur API routes ko skip karo
// ✅ FIX: Added common static asset extensions (images, fonts, css, js) so
// middleware doesn't run on every asset request — these never carry spam
// query params and were previously wasting Edge Function invocations.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|css|js|woff|woff2|ttf|eot|xml|txt|json|pdf)$).*)',
  ],
}
