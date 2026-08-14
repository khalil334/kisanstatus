# Site Health Check — kisanstatus.com

**Date:** 14 Aug 2026 (post PR #309 merge, commit `cb56368`)
**Scope:** Live crawl of all 117 sitemap URLs + code-level audit of the repo (`main`).
**Verdict: ✅ HEALTHY — no critical red flags, no broken pages, no SEO damage.**

---

## Live crawl results (117 sitemap URLs)

| Check | Result |
|---|---|
| Sitemap URLs returning HTTP 200 | **117 / 117** ✅ |
| Duplicate URLs in sitemap | none ✅ |
| Internal links sampled (home, /articles, /articles/hi, /calculator) | 45/45 OK ✅ |
| 404 handling (`/nonexistent-page-xyz`) | proper 404 ✅ |
| `kisanstatus.vercel.app` → `kisanstatus.com` | 308 permanent redirect ✅ |
| robots.txt / sitemap.xml / rss.xml | all 200 ✅ |

## On-page SEO (verified live)

| Check | Home | About | Article sample (25vi Kist) |
|---|---|---|---|
| `<title>` | ✅ unique | ✅ "Verified" removed (PR #309 live) | ✅ unique |
| Canonical | ✅ | ✅ | ✅ |
| Robots meta | `index, follow` ✅ | ✅ | ✅ |
| Single `<h1>` | ✅ | ✅ | ✅ |
| JSON-LD | 4 blocks, all valid ✅ | 6 blocks, all valid ✅ | 4 blocks, all valid ✅ |
| OG image | 200 ✅ | 200 ✅ | 200 ✅ |

- PR #309 changes confirmed **live in production**: "India Ka #1" and "Verified/Trusted" claims gone; new badge "Independent PM Kisan Guide Portal" rendering.
- Both new gau-mutra OG images serve 200 and are valid 1200×630 WebP.

## Code-level audit

| Check | Result |
|---|---|
| Duplicate article slugs across 5 data files (93 articles) | none ✅ |
| ogImage / image paths referenced vs files in `public/` (93 refs) | all exist ✅ |
| `component:` refs vs files in `components/articles/` (80 refs) | all exist ✅ |
| Redirect targets in `next.config.js` (~70 rules) | all resolve ✅ |
| Hardcoded `localhost` / `vercel.app` / `http://` refs in app code | none ✅ |
| robots.ts | sane — AI bots + Ahrefs allowed, scrapers (CCBot/MJ12/Semrush) blocked, `/api/` disallowed ✅ |
| Security headers (HSTS, nosniff, Referrer-Policy, X-Frame-Options) | present ✅ |
| hreflang (hi ↔ hi-Latn ↔ x-default) mapping | consistent both directions ✅ |

## ⚠️ Minor notices (no action urgent, not bugs)

1. **Slightly future `modifiedTime`** — `PmKisan25viKist2027` in `lib/core-articles-data.ts` has `modifiedTime: 2026-08-15T00:20+05:30`, a few minutes ahead of audit time (IST midnight edge). Harmless; will self-resolve. Avoid pre-dating `modifiedTime` in future edits — Google distrusts inflated lastmod.
2. **CSP is Report-Only** (`vercel.json`) — fine for now; consider enforcing after monitoring reports.
3. **`X-XSS-Protection` header** is deprecated (ignored by modern browsers). Harmless; can be dropped whenever convenient.

## Re-check list (browser)

- [x] `/` — hero badge + stats labels
- [x] `/about` — title, tagline, Organization schema
- [x] Gau mutra articles (Hinglish + Hindi) — OG images on WhatsApp/Twitter share
- [ ] Trigger Ahrefs Site Audit re-crawl (project **Kisanstatus**, id 10042735) to refresh issue counts
