
#	Bug	Severity	File	Status
1	Maandhan slug page repo mein corrupt	🔴 Critical	`app/maandhan/[slug]/page.tsx`	✅ Not reproducible — file valid hai (imports, metadata, component map sab theek)
2	`/pm-kisan-status` route missing	🔴 Critical	`lib/site-config.ts` / `app/pm-kisan-status/`	✅ Fixed — nav link ab seedha `/calculator/quick-status-check` (redirect hop khatam)
3	Calculator icons empty	🔴 Critical	`app/calculator/page.tsx`	✅ Not reproducible — saare 7 icons ke SVG paths maujood hain
4	Hardcoded GA/GSC tokens	🔴 Critical	`lib/gtag.ts`, `lib/site-config.ts`	✅ Fixed — env-var only (`NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GSC_TOKEN`); hardcoded fallbacks removed, GA script sirf tab load hota hai jab ID set ho
5	Category soft-404	🟡 Moderate	`app/articles/category/[category]/page.tsx`	✅ Fixed in PR #117
6	`not-found.tsx` missing/broken	🟡 Moderate	`app/not-found.tsx`	✅ Not reproducible — file maujood aur functional hai
7	Copyright year static	🟡 Moderate	`lib/site-config.ts`	✅ Not reproducible — `getCopyrightYears()` dynamic hai (`new Date().getFullYear()`)
8	Missing TypeScript generics	🟡 Moderate	`Header.tsx`, `calculator/page.tsx`	✅ Not reproducible — `useState<...>` / `useRef<HTMLInputElement>` typed hain; calculator page server component hai
9	Maandhan missing `generateStaticParams`	🟡 Moderate	`app/maandhan/[slug]/page.tsx`	✅ Not reproducible — line 21 par maujood hai
10	Footer spacing	🟢 Minor	`components/Footer.tsx`	✅ Not reproducible — koi concrete spacing defect nahi mila
