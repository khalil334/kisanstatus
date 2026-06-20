# KisanStatus.in

> PM Kisan Status Check 2026 — 21st Installment Informational Website

## 🚀 Deploy to Vercel (5 minutes)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/kisanstatus)

### Quick Deploy Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — KisanStatus.in"
   git remote add origin https://github.com/YOUR_USERNAME/kisanstatus.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Set Environment Variables on Vercel**
   - `NEXT_PUBLIC_GA_ID` → Your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_SITE_URL` → `https://kisanstatus.in`

4. **Add Custom Domain**
   - In Vercel dashboard → Domains → Add `kisanstatus.in`
   - Update your domain DNS: CNAME → `cname.vercel-dns.com`

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
│   ├── layout.tsx              # Root layout — Header, Footer, Analytics
│   ├── page.tsx                # Homepage — Hero, Cards, Steps, FAQ
│   ├── globals.css             # Global styles + Tailwind
│   ├── sitemap.ts              # Dynamic XML sitemap
│   ├── pm-kisan-status/
│   │   └── page.tsx            # Status check guide + installment table
│   ├── beneficiary-list/
│   │   └── [state]/
│   │       └── page.tsx        # 32 state pages (SSG)
│   ├── speed-insights/
│   │   └── page.tsx            # Core Web Vitals + performance info
│   ├── privacy-policy/
│   │   └── page.tsx            # GDPR + AdSense privacy policy
│   └── disclaimer/
│       └── page.tsx            # "Not official govt site" disclaimer
├── components/
│   ├── Header.tsx              # Sticky green header + mobile menu
│   ├── Footer.tsx              # Footer with disclaimer + links
│   ├── Logo.tsx                # SVG logo component
│   └── FAQSection.tsx          # Accessible FAQ accordion
├── lib/
│   └── gtag.ts                 # Google Analytics 4 helpers
├── public/
│   ├── robots.txt              # SEO crawl rules
│   ├── logo.svg                # Standalone SVG logo
│   └── favicon.ico             # (Add your favicon here)
├── .env.example                # Environment variable template
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Green theme + design tokens
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript strict mode
└── vercel.json                 # Vercel deployment settings
```

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
- ✅ Dynamic XML sitemap (app/sitemap.ts)
- ✅ robots.txt
- ✅ Canonical URLs on all pages
- ✅ Semantic HTML5 structure

## ⚡ Performance

- ✅ Next.js Static Site Generation (SSG) — instant page loads
- ✅ Vercel Edge Network — <50ms TTFB
- ✅ Tailwind CSS purging — <10KB CSS in production
- ✅ Mobile-first responsive design (320px–4K)
- ✅ Touch-friendly buttons (min 48px)
- ✅ Vercel Analytics + Speed Insights integrated

---

## ⚠️ Disclaimer

KisanStatus.in is NOT an official Government of India website.
For official PM Kisan information, visit [pmkisan.gov.in](https://pmkisan.gov.in)

---

© 2026 KisanStatus.in — Contact: pubggamenewone@gmail.com
