import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ARTICLES } from '@/lib/articles-data'
import { HINDI_ARTICLES } from '@/lib/hindi-articles-data'

const CANONICAL_SLUGS = new Map<string, string>()
for (const a of ARTICLES) CANONICAL_SLUGS.set(a.slug.toLowerCase(), a.slug)
for (const a of HINDI_ARTICLES) CANONICAL_SLUGS.set(a.slug.toLowerCase(), a.slug)

const ARTICLE_PATH = /^\/articles\/([^/]+)$/

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

  const articleMatch = url.pathname.match(ARTICLE_PATH)
  if (articleMatch) {
    const slug = decodeURIComponent(articleMatch[1])
    const canonical = CANONICAL_SLUGS.get(slug.toLowerCase())
    if (canonical && canonical !== slug) {
      url.pathname = `/articles/${canonical}`
      return NextResponse.redirect(url, 308)
    }
  }

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
