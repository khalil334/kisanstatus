# BUGS.md — Live audit (kisanstatus.com + repo `main` @ 80576a1)

Audit date: 2026-08-08. Purane 6 bugs verify kiye — sab repo mein pehle se fixed the
(PRs #113–#119), isliye delete kar diye. Neeche naye, **verified** bugs hain.

| # | Severity | Bug | File(s) | Kya Problem Hai |
|---|----------|-----|---------|-----------------|
| 1 | Critical (SEO) | Soft-404: invalid slug pe HTTP **200** milta hai, 404 nahi | `app/maandhan/[slug]/page.tsx`, `app/articles/[slug]/page.tsx`, `app/rajya-yojana/[slug]/page.tsx`, `app/articles/category/[category]/page.tsx` | Live test: `curl -o /dev/null -w "%{http_code}" https://kisanstatus.com/maandhan/koi-bhi-galat-slug` → **200** (body 404 UI hai, status 200). Chaaron dynamic routes affected. Root cause: root `app/loading.tsx` ki wajah se Next.js response shell ko **status 200 ke saath turant stream** kar deta hai; uske baad page/generateMetadata ke andar `notFound()` status change nahi kar sakta. `notFound()` calls sahi hain par bekaar jaati hain. **Fix (template-level):** chaaron SSG slug routes mein `export const dynamicParams = false` add karo — sab valid slugs `generateStaticParams` se aate hain, to unknown slug router level pe hi real 404 dega, render se pehle. Saath mein `app/articles/[slug]/page.tsx` ka in-page `redirect('PmKisanBeneficiaryListVillageWise2026' → 'PmKisanBeneficiaryList2026')` `next.config.js` ke `redirects()` mein move karna hoga, warna wo slug 404 ho jayega. |
| 2 | Minor | Duplicate meta tags `<head>` mein | `app/layout.tsx` | Live home page ke head mein `apple-mobile-web-app-title` 2 baar aur `apple-mobile-web-app-status-bar-style` 2 baar render hote hain. Wajah: `metadata.other` (lines ~120–122) aur `metadata.appleWebApp` (line ~141) dono same tags emit karte hain. **Fix:** `other` block se teeno `apple-mobile-web-app-*` entries hatao, sirf `appleWebApp` rakho. |

## Verified-clean (koi action nahi chahiye)

- Purane BUGS.md ke sab 6 bugs: repo mein already fixed (maandhan page intact, calculator icons SVG ke saath, `Record<string, string>` types present, `not-found.tsx` complete, footer spacing `© {year} {name}` sahi — live pe bhi `© 2024-2026 KisanStatus` render hota hai).
- `npx eslint .` — clean. `npx tsc --noEmit` — clean. `next build --webpack` — success (94 pages).
- Sitemap ke sab 94 URLs live pe 200.
- Static assets (og-image, favicons, manifest, safari-pinned-tab) — sab 200.
- Nav fix (BUG-2) aur GA/GSC token removal (BUG-4) deployed hain — deployment latest hai.

Note: `next build` (Turbopack, default) is sandbox mein internal ECONNREFUSED se fail hota hai — ye environment issue hai, repo bug nahi; `--webpack` se build clean hai. Vercel pe verify karna ho to normal deploy hi kaafi hai.
