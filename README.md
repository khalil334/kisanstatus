# KisanStatus.com
> PM Kisan Samman Nidhi status, eKYC, beneficiary list, aur farming guides — Hinglish mein.

Independent informational portal for Indian farmers covering PM Kisan Yojana status checks, eKYC, installment tracking, beneficiary lists, loans, and farming scheme guides.

## About

KisanStatus provides free, verified guidance in Hinglish for:
- PM Kisan beneficiary status & installment (kist) tracking
- eKYC (OTP, CSC biometric & face authentication) walkthroughs
- Beneficiary list / rejection reason lookup
- New registration & correction-form guidance
- PM Kisan Maandhan pension scheme guides
- State-level (rajya) yojana guides
- Farming loans (KCC, tractor loans), mandi bhav & pashupalan guides
- Free calculators (PM Kisan benefit, MSP income, crop profit, KCC EMI)

This is **not** an official Government of India website. All official actions point to `pmkisan.gov.in`.

## Tech Stack

- **Framework:** Next.js (App Router), deployed on Vercel
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Project Structure

```
kisanstatus/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # Homepage
│   ├── articles/                 # Core articles ([slug] + /hi Hindi variants)
│   ├── maandhan/                 # Maandhan pension articles ([slug])
│   ├── rajya-yojana/             # State-scheme articles ([slug])
│   ├── calculator/               # PM Kisan / MSP / crop / KCC calculators
│   ├── search/                   # Site search
│   ├── api/                      # Route handlers
│   ├── rss.xml/                  # RSS feed
│   ├── llms.txt/                 # LLM-friendly site index
│   ├── robots.ts · sitemap.ts
│   └── about / contact / privacy-policy / disclaimer / terms-of-service
├── components/
│   ├── articles/                 # Per-article content components
│   │   ├── kisanguides/
│   │   ├── loan-mandi-pashupalan/
│   │   ├── maandhan/
│   │   └── rajya-yojana/
│   ├── ArticleShared.tsx         # Shared blocks (FAQ renderer emits FAQPage JSON-LD)
│   ├── Header.tsx · Footer.tsx · SearchBar.tsx · calculators/ …
├── lib/                          # Article registries + site config
│   ├── core-articles-data.ts     # Core /articles registry (titles, seoTitle, slugs, meta)
│   ├── loan-mandi-pashupalan-data.ts
│   ├── maandhan-data.ts
│   ├── rajya-yojana-data.ts
│   ├── hindi-articles-data.ts · hindi-hreflang.ts   # Hindi variants + hreflang
│   └── site-config.ts · categories.ts · author-bios.ts
├── scripts/
│   ├── submit-indexnow.js        # IndexNow submission (changed URLs only)
│   ├── build-indexnow-payload.js
│   ├── check-title-h1.js         # Title/H1 consistency check
│   └── update-article-dates.js
└── public/
```

> ℹ️ Articles are data-driven: routes render whatever is registered in the `lib/*-data.ts` registries. Add/edit an article by updating its registry entry + component — counts in this README are intentionally not hardcoded.

## Local Development

```bash
npm install
cp .env.example .env.local   # add your GA4 ID etc.
npm run dev                  # → http://localhost:3000
npm run build
npm start
```

## Configuration

| Env Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_SITE_URL` | `https://kisanstatus.com` |

## SEO & Structured Data

Conventions for JSON-LD, canonical/hreflang, and known Ahrefs false positives live in [`CLAUDE.md`](CLAUDE.md) — read it before touching metadata or schema.

Checklist (keep updated):

- [ ] Every page has a unique title + meta description (`seoTitle` in the registry; template appends `| KisanStatus`)
- [ ] Canonical URL matches the actual page URL
- [ ] Internal links use the exact registry `slug` (wrong-case/renamed slugs 404)
- [ ] Author is consistently "Manish Kumar" across all pages
- [ ] Route templates own Article JSON-LD; components must not re-emit Article/FAQPage
- [ ] `sitemap.ts` only lists real, current URLs
- [ ] After content changes, IndexNow submits changed URLs (`scripts/submit-indexnow.js`)

Site health is monitored via Ahrefs Site Audit (project `10042735`).

## Disclaimer

KisanStatus.com is an independent informational platform, not affiliated with the Government of India. For official PM Kisan services, visit [pmkisan.gov.in](https://pmkisan.gov.in).

---
© 2026 KisanStatus.com
