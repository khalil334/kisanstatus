import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SPAM_PARAMS = [
  'sub1', 'sub2', 'sub3', 'sub4', 'sub5',
  'tr_uuid',
  'click_id',
  'fbclid',
  'msclkid',
]

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  let changed = false
  
  SPAM_PARAMS.forEach(param => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param)
      changed = true
    }
  })
  
  if (changed) {
    return NextResponse.redirect(url, 302)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|css|js|woff|woff2|ttf|eot|xml|txt|json|pdf)$).*)',
  ],
}
