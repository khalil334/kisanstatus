# KisanStatus.com — Traffic Diagnosis & Content Plan

**Date:** 2026-08-14 · **Current traffic:** ~16–20 clicks/day from ~93 articles

---

## 1. Diagnosis — traffic kam kyun hai

Site technically theek hai (fast load ~0.12s, sitemap, canonical tags, robots.txt, rich
schema — Article/FAQ/Breadcrumb sab hai). Problem **content strategy** mein hai, technical
mein nahi. Sirf aur articles likhne se traffic nahi badhega.

### Problem #1 — Roman Hindi (Hinglish) mein likha hai, log Devanagari mein search karte hain ⭐ SABSE BADA ISSUE
- Aapke titles: *"PM Kisan 24vi Kist Kab Aayegi?"* (Roman script)
- Kisan actually search karta hai: **"पीएम किसान 24वीं किस्त कब आएगी"** (Devanagari)
- Google script match karta hai. Devanagari queries ka volume Roman Hindi se **10–50x zyada** hai.
- Sitemap mein sirf ~16 Hindi (Devanagari) guides hain, baaki ~66 articles Hinglish mein.
- **Yeh akela fix traffic ka sabse bada lever hai.**

### Problem #2 — Head keywords pe compete kar rahe ho jo jeet nahi sakte
- "PM Kisan status", "PM Kisan kist" jaise queries pe **pmkisan.gov.in** (official site) +
  **Amar Ujala, Jagran, ABP, Zee** jaise giant news portals rank karte hain.
- Naya domain (low authority, kam backlinks) in queries pe page 1 pe nahi aa sakta.
- Long-tail + problem-solving queries pe jaana hoga (neeche list hai).

### Problem #3 — Ek hi topic pe over-concentration
- Zyada tar articles PM Kisan ke ird-gird hain (kist, eKYC, status, FTO…). Yeh aapas mein
  cannibalize karte hain aur ek hi crowded battlefield pe lade ja rahe hain.

### Problem #4 — Date-sensitive content stale ho jata hai
- "24vi kist October 2026 expected", meta description mein aaj ke mandi rates hard-coded
  (₹20-24 aloo…) — yeh jaldi purana hota hai, CTR girta hai, Google freshness demote karta hai.

### Aaj ka sudden drop
- Ek din ka drop panic ka reason nahi — lekin **Google Search Console kholo** aur dekho:
  - Coverage/Indexing report — pages de-indexed to nahi hue?
  - Performance report — impressions gire ya sirf clicks? (Impressions gire = ranking drop;
    clicks gire = CTR issue)
  - Manual actions section — koi penalty to nahi?
- Bina GSC data ke exact wajah confirm nahi ho sakti. **GSC screenshot share karo to main aur deep jaunga.**

---

## 2. Plan — kya karna hai (priority order)

### Phase 1 (Week 1–2): Translate, don't write new ⭐
Naye articles MAT likho abhi. Apne **top 20 existing Hinglish articles ko Devanagari Hindi
mein convert karo** (proper translation, not transliteration):
- Title, H1, meta description, headings, body — sab Devanagari
- URL slug Roman rakh sakte ho (e.g. `/hi/pm-kisan-24-kist-kab-aayegi`)
- Har Hindi page pe `hreflang` tags lagao (hi ↔ hi-Latn pairs) — abhi hreflang bilkul nahi hai
- Priority order: kist/status articles pehle (highest intent)

### Phase 2 (Week 2–4): Long-tail Devanagari articles jahan competition kam hai
News portals yeh queries cover nahi karte — yahan naya domain bhi rank kar sakta hai:
1. **State-specific**: "यूपी किसान कर्ज माफी लिस्ट में नाम कैसे देखें", "बिहार डीजल अनुदान ऑनलाइन आवेदन", "एमपी किसान कल्याण योजना स्टेटस" — har bade state ke liye
2. **Problem-solving**: "पीएम किसान में आधार नंबर गलत है कैसे सुधारें", "पैसा आया नहीं बैंक अकाउंट बंद हो गया", "रजिस्ट्रेशन नंबर खो गया कैसे निकालें"
3. **Mandi bhav per-crop/per-mandi pages**: "आज का सरसों का भाव राजस्थान", "गेहूं का रेट आज यूपी मंडी" — programmatic pages, daily update (yeh recurring traffic ka engine ban sakta hai)
4. **Comparison/decision**: "केसीसी लोन vs गोल्ड लोन किसान के लिए", "ट्रैक्टर लोन कौन सा बैंक सस्ता"

### Phase 3 (ongoing): Freshness + distribution
- Kist/date articles ko har major update pe refresh karo (lastmod bhi update ho)
- Meta descriptions se hard-coded rates/dates hatao — evergreen phrasing rakho
- **WhatsApp channel** (aap already chala rahe ho) + **YouTube Shorts** (Hindi, 30-sec "kist kab aayegi" updates) — rural audience Google se zyada YouTube/WhatsApp pe hai
- Quora Hindi + Facebook farmer groups mein genuine answers + link

### Phase 4: Authority (slow burn)
- Har article mein official sources (pmkisan.gov.in, agri ministry) cite karo — already ho raha hai, continue
- Local news sites / agri blogs se 5–10 genuine backlinks (guest post, data ya tool cite karwa ke)
- EMI calculator jaise tools ko promote karo — tools naturally links attract karte hain

---

## 3. Kya NAHI karna
- ❌ Aur 50 Hinglish articles mat likho — same result milega
- ❌ PM Kisan head terms ("pm kisan status check") pe naye articles mat banao — official site ke against nahi jeet sakte
- ❌ AI se bulk-generate karke bina edit publish mat karo — Google helpful content system pakad leta hai
- ❌ Ek din ke drop pe site restructure mat karo — pehle GSC data dekho

---

## 4. Success metrics (8 हफ्ते ka target)
| Metric | Abhi | Target |
|---|---|---|
| Clicks/day | 16–20 | 100+ |
| Devanagari articles | ~16 | 50+ |
| Indexed pages (GSC) | check karo | 90%+ of sitemap |
| Impressions/day | GSC se dekho | 3–5x |

**Pehla action aaj:** GSC kholo → Indexing report check karo → top 5 articles ki
Devanagari translation shuru karo.
