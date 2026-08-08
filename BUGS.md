# Bug Status — verified 2026-08-08

Har bug repo (`main` @ 80576a1) aur live site (kisanstatus.com) dono par check kiya gaya.
**Result: sab 6 bugs repo mein pehle se fixed hain — koi code change ki zaroorat nahi.**
Live site bhi fresh deploy chala raha hai (404 UI, calculator cards, footer spacing sab sahi render ho rahe hain).

| # | Bug | File | Status | Verification |
|---|-----|------|--------|--------------|
| 1 | Maandhan slug page corrupt | `app/maandhan/[slug]/page.tsx` | ✅ Not reproducible | File complete hai (122 lines) — imports se closing `}` tak sahi. `slug` `await params` se properly aata hai. Live `/maandhan/pm-kisan-maandhan-registration-2026` → HTTP 200, poora article render. |
| 2 | Calculator icons empty | `app/calculator/page.tsx` | ✅ Not reproducible | 11 icon components, sab mein poore SVG paths (`IconSearch`, `IconCalendar`, `IconWheat`, …). Koi `return <></>;` nahi. Live `/calculator` par saare 7 utility cards icons ke saath render ho rahe hain. |
| 3 | `Record` type param missing (Header) | `components/Header.tsx` | ✅ Fixed | Line 27: `const CATEGORY_EMOJIS: Record<string, string>` — type params maujood. |
| 4 | `Record` type param missing (Calculator) | `app/calculator/page.tsx` | ✅ Fixed | Line 79: `const GROUP_STYLES: Record<string, { bar: …; chip: …; btn: …; glow: …; icon: … }>` — type params maujood. |
| 5 | `not-found.tsx` missing/broken | `app/not-found.tsx` | ✅ Fixed | File maujood (4.4 KB) — poora 404 UI, search box, popular articles. Live invalid URL → real HTTP 404 + "404 - Page Nahi Mila" UI render hota hai. |
| 6 | Footer copyright spacing | `components/Footer.tsx` | ✅ Fixed | `© {currentYear} {SITE_NAME}` — JSX space render hota hai. Live HTML: `© 2024-2026 KisanStatus — Built with ❤️ …` (space maujood). |

## Notes

- Agar kisi browser mein purana UI dikhe (icons gayab, footer bina space), to wo **stale cache** hai — hard refresh (Ctrl+Shift+R) karo ya Vercel par fresh redeploy trigger karo.
- Koi naya bug mile to isi file mein table format mein add karo: `# | Bug | File | Kya Problem Hai`.
