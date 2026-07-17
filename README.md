# KisanStatus.com

> PM Kisan Status Check — Farming Schemes, Verification & Market Info

KisanStatus.com is a Next.js informational website that helps farmers check PM Kisan installment status, verify beneficiary details, and learn about government farming schemes, credit/loan options, and market rates. It is **not** an official Government of India website.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Create .env.local from example
cp .env.example .env.local
# Edit .env.local and add your GA4 ID

# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
kisanstatus/
├── app/
│   ├── layout.tsx                    # Root layout — Header, Footer, Analytics
│   ├── page.tsx                      # Homepage — Hero, Cards, Steps, FAQ
│   ├── globals.css                   # Global styles + Tailwind
│   ├── sitemap.ts                    # Dynamic XML sitemap
│   ├── pm-kisan-status/
│   │   └── page.tsx                  # Status check guide + installment table
│   ├── beneficiary-list/
│   │   └── [state]/
│   │       └── page.tsx              # State-wise beneficiary list pages (SSG)
│   ├── calculator/
│   │   └── installment-tracker/
│   │       └── page.tsx              # PM Kisan installment tracker calculator
│   ├── speed-insights/
│   │   └── page.tsx                  # Core Web Vitals + performance info
│   ├── privacy-policy/
│   │   └── page.tsx                  # GDPR + AdSense privacy policy
│   └── disclaimer/
│       └── page.tsx                  # "Not official govt site" disclaimer
├── components/
│   ├── Header.tsx                    # Sticky green header + mobile menu
│   ├── Footer.tsx                    # Footer with disclaimer + links
│   ├── Logo.tsx                      # SVG logo component
│   ├── FAQSection.tsx                # Accessible FAQ accordion
│   └── articles/                     # Article content components
│       ├── ...                       # Verification & Status, Credit & Loans,
│       │                             #   Farming & Schemes, Market Rates
│       └── kisanguides/              # Step-by-step "how to" guide articles
├── lib/
│   └── gtag.ts                       # Google Analytics 4 helpers
├── public/
│   ├── robots.txt                    # SEO crawl rules
│   ├── logo.svg                      # Standalone SVG logo
│   └── favicon.ico
├── .env.example                      # Environment variable template
├── next.config.js
├── tailwind.config.ts                # Green theme + design tokens
├── postcss.config.js
├── tsconfig.json                     # TypeScript strict mode
└── vercel.json                       # Vercel deployment settings
```

### Content

The `components/articles/` directory holds the site's informational articles, organized across four categories: **Verification & Status**, **Credit & Loans**, **Farming & Schemes**, and **Market Rates**. `components/articles/kisanguides/` holds a smaller set of dedicated step-by-step guide articles.

---

## 🚀 Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — KisanStatus.com"
   git remote add origin https://github.com/khalil334/kisanstatus.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import this GitHub repository
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Set Environment Variables on Vercel**
   - `NEXT_PUBLIC_GA_ID` → Your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_SITE_URL` → `https://kisanstatus.com`

4. **Add Custom Domain**
   - In Vercel dashboard → Domains → Add `kisanstatus.com`
   - Update your domain DNS: CNAME → `cname.vercel-dns.com`

---

## 🔧 Configuration Required

### 1. Google Analytics 4
- Create a GA4 property at [analytics.google.com](https://analytics.google.com)
- Get your Measurement ID (format: `G-XXXXXXXXXX`)
- Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### 2. Google AdSense
- Apply at [adsense.google.com](https://adsense.google.com)
- After approval, uncomment the AdSense script in `app/layout.tsx`
- Replace `ca-pub-XXXXXXXXXX` with your Publisher ID

### 3. Google Search Console
- Verify your domain at [search.google.com/search-console](https://search.google.com/search-console)
- Update the verification token in `app/layout.tsx` metadata

---

## 📊 SEO Features

- ✅ Unique `<title>` and `<meta description>` on every page
- ✅ JSON-LD structured data: Organization + FAQPage + WebSite schemas
- ✅ Open Graph + Twitter Card meta tags
- ✅ Dynamic XML sitemap (`app/sitemap.ts`)
- ✅ `robots.txt`
- ✅ Canonical URLs on all pages
- ✅ Semantic HTML5 structure

## ⚡ Performance

- ✅ Next.js Static Site Generation (SSG) — instant page loads
- ✅ Vercel Edge Network — low TTFB
- ✅ Tailwind CSS purging — minimal production CSS
- ✅ Mobile-first responsive design (320px–4K)
- ✅ Touch-friendly buttons (min 48px)
- ✅ Vercel Analytics + Speed Insights integrated

---

## ⚠️ Disclaimer

KisanStatus.com is **NOT** an official Government of India website.
For official PM Kisan information, visit [pmkisan.gov.in](https://pmkisan.gov.in)

---

© 2026 KisanStatus.com
