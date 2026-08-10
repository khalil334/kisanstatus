# KisanStatus.com

>  PM Kisan Samman Nidhi status, eKYC, beneficiary list, aur farming guides — Hinglish mein.

Independent informational portal for Indian farmers covering PM Kisan Yojana status checks, eKYC, installment tracking, beneficiary lists, loans, and farming scheme guides.

## 🌾 About

KisanStatus provides free, verified guidance in Hinglish for:
- PM Kisan beneficiary status & installment (kist) tracking
- eKYC (OTP & CSC biometric) walkthroughs
- Beneficiary list / rejection reason lookup
- New registration guidance
- Farming loans (KCC, tractor loans) & credit
- Free calculators (PM Kisan benefit, MSP income, crop profit, KCC EMI)

This is **not** an official Government of India website. All official actions point to `pmkisan.gov.in`.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## 📁 Project Structure

```
kisanstatus/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Homepage
│   ├── articles/                # Article listing + [slug] pages
│   ├── calculator/               # PM Kisan / MSP / crop / KCC calculators
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   ├── disclaimer/
│   └── sitemap.ts
├── components/
│   ├── articles/                 # 29 core article components
│   │   ├── kisanguides/          # 9 guide articles
│   │   ├── loan-mandi-pashupalan/ # 11 loan / mandi / pashupalan articles
│   │   ├── maandhan/             # 13 Maandhan pension articles
│   │   └── rajya-yojana/         # 10 state-scheme articles (+ tools/)
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
└── public/
```

> ℹ️ Article counts are data-driven: `/articles` lists everything registered in `lib/articles-data.ts`, `lib/loan-mandi-pashupalan-data.ts`, `lib/maandhan-data.ts` and `lib/rajya-yojana-data.ts` (currently 73 live articles). Update this section after any redesign so it never goes stale.

## 🚀 Local Development

```bash
npm install
cp .env.example .env.local   # add your GA4 ID etc.
npm run dev                  # → http://localhost:3000
npm run build
npm start
```

## 🔧 Configuration

| Env Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_SITE_URL` | `https://kisanstatus.com` |

## ✅ SEO Checklist (keep updated)

- [ ] Every page has unique title + meta description
- [ ] Canonical URL matches actual page URL (no copy-pasted homepage canonical)
- [ ] Author is consistently "KisanStatus Team" across all pages
- [ ] No orphaned/legacy routes live outside this app's route structure
- [ ] `sitemap.ts` only lists real, current URLs

## ⚠️ Disclaimer

KisanStatus.com is an independent informational platform, not affiliated with the Government of India. For official PM Kisan services, visit [pmkisan.gov.in](https://pmkisan.gov.in).

---
© 2026 KisanStatus.com
