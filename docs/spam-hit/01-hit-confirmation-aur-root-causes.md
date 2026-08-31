# Part 1 — Hit Confirmation aur Root Causes

*Source: [SPAM-HIT-DEEP-ANALYSIS.md](../../SPAM-HIT-DEEP-ANALYSIS.md) ka split hissa. Content unchanged.*

---

---

## GSC SE CONFIRMED: Hit ki Exact Date = 18 August 2026

Search Console ka daily data (June–Aug 2026):

| Period | Impressions/din | Clicks/din |
|---|---|---|
| Late June (launch ke baad) | 100–200 | 1–3 |
| July (dheere growth) | 200–350 | 4–6 |
| 4–13 Aug (achanak spike) | 600 → **2,616** | 16 → **54** |
| 14–17 Aug | 1,400–1,900 | 18–38 |
| **18 Aug se aaj tak** | **40–73 (–96%)** | **0–2** |

**Ab dhyan se dekho timeline:**

- **15–18 Aug:** 22 naye articles publish hue (18 Aug ko akele 13, subah 7 baje se raat tak, minutes ke gap par)
- **18 Aug:** usi din impressions 1,486 → 64. Ek din me. Ye coincidence nahi hai.

Google ne 10–13 Aug ko site ko test diya tha (impressions 2,600/din tak chadhaye — "ranking test window"). Site us test ke beech me 22 AI articles ka burst kar gayi. Result: poora domain demote. Ye classic **scaled content abuse** classification hai.

**Ek aur cheez:** 18 Aug ke baad position 7 se improve hokar 2–3 dikh rahi hai — ye recovery nahi hai. Matlab sirf 2-4 branded queries bachi hain jahan site abhi bhi upar hai; baaki sab queries se site poori tarah nikal di gayi.

---

## Root Causes (Evidence ke Saath)

### 1. 🔴 18-Aug Burst — Direct Trigger (GSC-confirmed)
22 articles in 4 din, jab pichhli analysis ne warn kiya tha "max 2–3/hafta". Machine-pace publishing = machine content, Google ke liye case closed.

### 2. 🔴 Backdated Publish Dates
Repo ka pehla commit **20 June 2026**. Lekin 29 articles ki `publishedTime` **March–May 2026** ki hai — site ke exist hone se pehle. Google first-crawl date se cross-check karta hai; ye date-fabrication domain ka poora date-trust khatam kar deti hai.

### 3. 🟠 Mass Date-Refresh
Sitemap ke 132 me se ~100+ URLs ki lastmod August ki. Har article har hafte genuinely update nahi ho sakta — ye "stale date abuse" hai.

### 4. 🟠 AI-Template Fingerprints
107 articles, ek author, ek jaisa structure, zero real screenshots, sirf 2 articles me sources. Insaan ka kaam aisa nahi dikhta — aur Google ab exactly yehi difference maapta hai.

### 5. 🟠 Bot 403
Article pages non-browser user-agents ko 403 dete hain. Vercel Firewall me check karo ke Googlebot verified-bot allowlist me hai. GSC → URL Inspection → Live Test se confirm karo.

---

[Index](./README.md) · [Part 2 — Recovery: Sab Kuch Real Insaan Jaisa Kaise Banayein →](./02-recovery-human-signals.md)
