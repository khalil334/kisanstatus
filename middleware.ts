import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 🚫 Sirf SPAM params remove karo, marketing params mat chhedo
const SPAM_PARAMS = [
  'sub1', 'sub2', 'sub3', 'sub4', 'sub5',  // Affiliate spam
  'tr_uuid',                                 // Tracking UUID spam
  'click_id',                                // Click tracking spam
  'fbclid',                                  // Facebook click ID (spam-like)
  'msclkid',                                 // Microsoft click ID
  'gclid',                                   // Google click ID (optional - rakho agar ads use karte ho)
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
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|sitemap.xml|robots.txt).*)'],
}