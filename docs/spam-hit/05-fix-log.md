# Part 5 — Fix Log aur Aage ka Kaam

*Source: [SPAM-HIT-DEEP-ANALYSIS.md](../../SPAM-HIT-DEEP-ANALYSIS.md) ka split hissa. Content unchanged.*

---

# Fix Log (kya-kya ho chuka)

Har entry code me verify ki gayi hai, sirf plan nahi.

| Date | Part | Kya kiya | Files |
|---|---|---|---|
| 29 Aug | 1 | Backdated `publishedTime` (Mar–May) → git ki asli first-commit dates; modified dates clamp | `lib/*-data.ts` |
| 29 Aug | 2 | Auto date-bump band — `update-dates` build pipeline se hataya, ab sirf manual | `package.json` |
| 30 Aug | 3 | FTO page: full-form ka seedha jawab hero ke upar; `seoTitle` + `desc` rewrite (query "fto ka full form", 118 impr / 0 clicks); visible changelog block add | `lib/core-articles-data.ts`, `components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai.tsx` |
| 31 Aug | 4 | 18-Aug burst + thin Hindi duplicates **index se bahar** (commit 72a7f09e): 19 pages par `noindex: true` + sitemap se exclude. Delete + 301 ki jagah noindex isliye: dates asli hain, pages delete karke topic naye slug par laana wahi date-games repeat karta; noindex reversible hai aur user ke liye page zinda rehta hai. Robots meta `app/yojana/[slug]` + `app/articles/hi/[slug]` me flag honour karta hai | `lib/yojana-2026-data.ts`, `lib/hindi-yojana-2026-data.ts`, `lib/hindi-rajya-yojana-data.ts`, `lib/hindi-kisanguides-data.ts`, `app/sitemap.ts`, `app/yojana/[slug]/page.tsx`, `app/articles/hi/[slug]/page.tsx` |
| 31 Aug | 5 | FTO duplicate fold (noindex + 301 original par jo 28 clicks leta tha); hreflang guard (`DEINDEXED_PATHS` — noindex page kabhi alternate na bane, `hi/kisan-karj-mafi-list` wapas indexed kyunki proven winner ka 301 usme aata hai); Section C ke 4 zero-click titles rewrite (gehu-ka-bhav, jansamarth, 24vi-kist, hi/nayi-registration). Verified: `tsc --noEmit` clean, `check:titles` 95/95, `check:content` pass | `lib/core-articles-data.ts`, `lib/hindi-hreflang.ts`, `lib/hindi-yojana-data.ts`, `lib/loan-mandi-pashupalan-data.ts`, `next.config.js` (commit 07d45fb4) |
| 31 Aug | 6 | Em-dash cleanup: 565 body em-dashes removed across 152 files (alternating pass — aadhe rakhe, human mix); titles/meta untouched; 24vi-kist filler heading → query-shaped | components/, app/, lib/ (commit 2ee89c25) |
| 31 Aug | 7 | Publishing-pace guardrail: `check:pace` build step — baseline 31 Aug ke baad >2 naye publishedTime kisi 7-din window me = build FAIL; noindex exempt; `ALLOW_PUBLISH_BURST=1` override. Negative-tested (3 fake future articles → fail) | `scripts/check-publish-pace.js`, `package.json` |

**Verify kiya (pehle se theek tha, dobara kaam ki zarurat nahi):**
- NanoDap duplicate ka 301 `next.config.js` me maujood hai; registry me duplicate entry nahi
- LinkedIn URL asli profile hai (30 Aug confirmed) — schema `sameAs` se hatane ki zarurat nahi

**Aage ka kaam, priority order me:**
1. ~~21 burst articles delete + 301~~ ✅ done as noindex + sitemap removal (Part 4, upar) — delete nahi kiya, reasoning Fix Log me
2. ~~Section C ke 6 zero-click pages ka title/meta rewrite~~ ✅ 4/6 done (Part 5); bache 2 (pm-kisan-complete-guide, bihar-kisan-registration) Top-15 deep-rewrite ke saath
3. ~~Em-dash + filler-heading cleanup~~ ✅ done (commit 2ee89c25) — 565/1,100 hataye, human mix rakha
4. ~~Publishing guardrail~~ ✅ done — `check:pace` build step (details checklist me)
5. Top 15 winners ka deep rewrite (screenshots, real cases, changelog) — sirf haath se, code se nahi hota
6. Vercel firewall Googlebot check + GSC Manual Actions check — sirf dashboards se hota hai


---

[← Part 4 — Page-Level Audit (GSC Data Se)](./04-page-level-audit.md) · [Index](./README.md) · [Part 6 — Query-Level Data aur Insights →](./06-query-level-data.md)
