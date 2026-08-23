# HUMANIZE-PLAN.md — Content ko 100% Insaan Jaisa Banane ka Plan (Parts Mein)

> **Rules ki poori list `CONTENT-RULES.md` mein hai — wahi bible hai.** Ye file batati hai
> KAAM KAISE hoga: kaunsa part pehle, kya check karna hai, aur har part ke baad kya karna hai.

---

## Core principle — kya hatana hai

Har article mein ye 4 AI-footprints **zero** hone chahiye:

1. **Uniform AI words** — Moreover/Furthermore/Comprehensive/"Aaj ke digital yug mein" type
   filler (poori banned list: CONTENT-RULES.md Rule 1). Inki jagah seedhi desi baat.
2. **Uniform sentence length** — har sentence 15–20 words wala AI rhythm BANNED (Rule 2).
   Mix chahiye: kabhi 4 words. Kabhi pandrah. Kabhi ek lambi 25+ wali — par do lagataar nahi.
3. **Uniform paragraphs** — har para 3-4 lines same size = AI footprint (Rule 3).
   Kahin 1 line. Kahin 6. Kahin sirf ek sawaal.
4. **Fake/vague info** — "kai options maujood hain" type filler DELETE. Har claim **real aur
   verifiable** ho: exact fee, exact button ka naam, exact date, exact helpline. Jo cheez
   verify nahi kar sakte, wo likhni hi nahi (Rule 7). **Koi value fabricate nahi karni.**

---

## Workflow — har part ke liye SAME process

1. Us part ki data file kholo, har article ka content padho
2. AI-footprints dhundo (upar wale 4 + CONTENT-RULES.md ki Rule 1–7 checklist)
3. Rewrite karo — info wahi rahegi (facts change nahi karne), sirf likhne ka style insaan jaisa
4. Rule 9 final checklist chalao (har ✅ hona chahiye)
5. `npx tsc --noEmit` — types na tootein
6. **Commit + DIRECT PUSH to main** — ek part = ek push
7. Push hone ke baad hi agla part shuru karo. Do parts ek saath kabhi nahi.

> Ek part adhura chhod ke agla shuru karna BANNED. Chhota, poora, pushed — yahi tareeqa hai.

---

## Parts — is order mein (high-traffic pehle)

| Part | File(s) | Articles | Status |
|---|---|---|---|
| **Part 1** | `lib/core-articles-data.ts` (PM Kisan core — status, eKYC, kist) | 40 | ✅ Pushed (audit: sab 40 articles scan kiye — banned-word hits 0 asli [2 false positives: "Comprehensive insurance" product-naam, "elevated hive" literal], 12 files me AI-uniform FAQ answers ya same-rhythm sentence runs mile aur fix kiye; facts change nahi hue, sirf style) |
| **Part 2** | `lib/loan-mandi-pashupalan-data.ts` (loans, mandi, pashupalan) | 12 | ⬜ Pending |
| **Part 3** | `lib/maandhan-data.ts` (Maandhan pension) | 14 | ⬜ Pending |
| **Part 4** | `lib/rajya-yojana-data.ts` (state yojana) | 17 | ⬜ Pending |
| **Part 5** | `lib/yojana-2026-data.ts` (yojana 2026 / Hinglish) | 8 | ⬜ Pending |
| **Part 6** | `lib/hindi-rajya-yojana-data.ts` (Hindi rajya) | 15 | ⬜ Pending |
| **Part 7** | `lib/hindi-yojana-data.ts` + `lib/hindi-yojana-2026-data.ts` | 8+6 | ⬜ Pending |
| **Part 8** | `lib/hindi-loan-mandi-pashupalan-data.ts` + baaki chhoti Hindi files | ~5 | ⬜ Pending |

Har part complete hone par is table mein status update karo (⬜ Pending → ✅ Pushed `<commit>`)
aur wo update USI push mein jaye.

### Priority ka logic

- Part 1 pehle kyunki core PM Kisan articles hi sabse zyada traffic laate hain, aur GSC ke
  7 "Crawled – currently not indexed" pages ke isi group mein hone ka chance sabse zyada hai.
- Hindi parts baad mein kyunki wo pehle se behtar indexed hain (dekho DEINDEX-DIAGNOSIS.md § 2).

---

## Har article ke liye quick-check (short version)

- [ ] Banned word scan (Rule 1) — ek bhi mila to us section ka rewrite
- [ ] 3 lagataar same-length sentences? → todo (Rule 2)
- [ ] Same-size paragraphs ka block? → mix karo (Rule 3)
- [ ] Keyword stuffing? Title + pehla para + ek H2, bas (Rule 4)
- [ ] Har number/fee/date/button-naam verifiable? Vague filler delete (Rule 7)
- [ ] Min 3 insaan-wale touches: observation, opinion, experience-wali warning (Rule 7)
- [ ] FAQ answers alag-alag length, generic sawaal hataye (Rule 8)
- [ ] Zor se padho — jahan "robot jaisa" lage, wahan rewrite (Rule 9)

## Kya NAHI karna (DEINDEX-DIAGNOSIS.md se)

- ❌ Koi article DELETE nahi karna — deindex ki wajah content nahi, code thi (ab fixed)
- ❌ Facts/figures invent nahi karne — jo pata nahi, wo likhna nahi
- ❌ hi/ ↔ yojana/ hreflang pairs nahi chhedne
- ❌ Canonical/slug/URL change nahi karne — sirf content text improve hoga
