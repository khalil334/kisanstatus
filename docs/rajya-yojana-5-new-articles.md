# Rajya Yojana — 5 New Article Plan (Traffic Growth)

**Repo:** github.com/khalil334/kisanstatus · **Folder:** `components/articles/rajya-yojana/`
**Basis:** Existing 10 live articles cover Rajasthan, AP, MP, Maharashtra, Telangana, WB, Odisha, Chhattisgarh. Ye 5 articles un bade states ko cover karte hain jo abhi MISSING hain — Haryana, Bihar, Karnataka, Gujarat, UP — sab me kisan-scheme status-check searches bahut high hain aur competition mostly low-quality sarkari-result sites hain.

> Note: Search volumes exact nahi diye — keywords real search patterns se liye gaye hain (web research), fabricated numbers nahi.

---

## 1. Meri Fasal Mera Byora Status Check 2026 (Haryana)

- **Suggested slug:** `meri-fasal-mera-byora-status-check-2026`
- **State:** Haryana · **Portal:** fasal.haryana.gov.in
- **Primary keyword:** `meri fasal mera byora status check`
- **Secondary keywords:**
  - meri fasal mera byora registration 2026
  - fasal haryana gov in login
  - meri fasal mera byora last date
  - meri fasal mera byora payment status
  - mfmb registration kaise kare
  - meri fasal mera byora kharif 2026
  - मेरी फसल मेरा ब्यौरा
- **Angle:** Registration + status + MSP payment — seasonal spikes (Rabi/Kharif deadline ke time traffic explode hota hai). Dhaan seedha bijai ₹4500/acre + Mera Pani Meri Virasat ₹8000/acre subsections add karo.

## 2. Bihar Kisan Registration Status Check 2026 (DBT Agriculture)

- **Suggested slug:** `bihar-kisan-registration-status-check-2026`
- **State:** Bihar · **Portal:** dbtagriculture.bihar.gov.in
- **Primary keyword:** `dbt agriculture bihar status check`
- **Secondary keywords:**
  - bihar kisan registration status
  - dbtagriculture bihar gov in registration
  - kisan panjikaran number kaise nikale
  - krishi input anudan status bihar
  - bihar kisan registration number search
  - diesel anudan bihar status
  - बिहार किसान पंजीकरण
- **Angle:** Bihar PM-Kisan ka sabse bada beneficiary-base states me hai; DBT portal registration har scheme (diesel anudan, input anudan, beej anudan) ka gateway hai — evergreen + multi-scheme internal linking.

## 3. Parihara Payment Status Check 2026 — Village Wise (Karnataka)

- **Suggested slug:** `parihara-payment-status-check-2026`
- **State:** Karnataka · **Portal:** parihara.karnataka.gov.in / landrecords.karnataka.gov.in
- **Primary keyword:** `parihara payment status check`
- **Secondary keywords:**
  - parihara payment village wise
  - bele parihara list 2026
  - parihara payment status by aadhaar
  - parihara karnataka gov in
  - bele hani parihara status
  - bhoomi parihara report
  - ಪರಿಹಾರ ಹಣ ಸ್ಟೇಟಸ್
- **Angle:** Drought/flood relief — calamity season me massive village-wise search spikes. Aadhaar-based + village-wise dono methods cover karo. Competition weak hai.

## 4. iKhedut Portal Status Check 2026 (Gujarat)

- **Suggested slug:** `ikhedut-portal-status-check-2026`
- **State:** Gujarat · **Portal:** ikhedut.gujarat.gov.in
- **Primary keyword:** `ikhedut portal status check`
- **Secondary keywords:**
  - ikhedut arji status
  - ikhedut portal registration 2026
  - ikhedut yojana list 2026
  - i khedut subsidy status
  - ikhedut gujarat gov in application status
  - tractor sahay yojana gujarat status
  - આઈ ખેડૂત પોર્ટલ
- **Angle:** 100+ subsidy schemes ka single portal (tractor, drip, tar fencing) — har scheme window khulne par traffic aata hai. Application-status types (pending/approved/payment released) explain karo.

## 5. UP Kisan Karj Rahat List 2026 (Uttar Pradesh)

- **Suggested slug:** `up-kisan-karj-rahat-list-2026`
- **State:** Uttar Pradesh · **Portal:** upkisankarjrahat.upsdc.gov.in
- **Primary keyword:** `up kisan karj rahat list`
- **Secondary keywords:**
  - kisan karj mafi list 2026 up
  - up kisan karj rahat yojana status
  - kisan karj mafi yojana list kaise dekhe
  - upkisankarjrahat upsdc gov in
  - kisan karj mafi complaint status
  - किसान कर्ज माफी लिस्ट यूपी
- **Angle:** UP = PM-Kisan ka sabse bada state (2.5 crore+ beneficiaries) — abhi site par UP-specific ek bhi article nahi. Karj-mafi searches evergreen hain; PM-Kisan articles se strong internal-link juice milega.

---

## Priority Order (traffic potential ke hisaab se)

1. **Meri Fasal Mera Byora** — seasonal spike + registration mandatory for MSP
2. **UP Kisan Karj Rahat** — biggest state, zero UP coverage abhi
3. **Parihara Karnataka** — weak competition, village-wise long-tail
4. **Bihar DBT Agriculture** — evergreen gateway keyword
5. **iKhedut Gujarat** — scheme-window spikes

## Har article me (existing pattern follow karo)

- `lib/rajya-yojana-data.ts` me entry (slug, mainKeyword, secondaryKeywords, officialPortal)
- Component: `components/articles/rajya-yojana/<Name>.tsx`
- Hero + 4-5 webp images: `public/images/articles/rajya-yojna/<slug>/`
- Related links: PM Kisan Master Guide + Payment Failed Fix
- FAQ section (status check, helpline, documents)
