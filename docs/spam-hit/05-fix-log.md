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

**Verify kiya (pehle se theek tha, dobara kaam ki zarurat nahi):**
- NanoDap duplicate ka 301 `next.config.js` me maujood hai; registry me duplicate entry nahi
- LinkedIn URL asli profile hai (30 Aug confirmed) — schema `sameAs` se hatane ki zarurat nahi

**Aage ka kaam, priority order me:**
1. 21 burst articles delete + 301 (sabse bada asar, sabse bada kaam)
2. Section C ke 6 zero-click pages ka title/meta rewrite
3. Em-dash + filler-heading cleanup (script-driven pass)
4. Publishing guardrail: build-time check jo hafte me 2 se zyada naye article dates par fail ho

---

[← Part 4 — Page-Level Audit (GSC Data Se)](./04-page-level-audit.md) · [Index](./README.md) · [Part 6 — Query-Level Data aur Insights →](./06-query-level-data.md)
