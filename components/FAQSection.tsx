// ✅ FIXED: STATS object ab accessible hai kyunki yeh HomeContent.tsx ke andar hai
const FAQS = [
  {
    q: 'पीएम किसान की 23वीं किस्त कब आई?',
    a: (
      <>
        23वीं किस्त <strong>{STATS.currentKistDate}</strong> को release हो चुकी है — {STATS.registeredFarmers} registered farmers में से {STATS.receivedKist} farmers को {STATS.perKist} DBT से मिले हैं।{' '}
        <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-600 font-bold underline hover:no-underline">
          यहाँ क्लिक करके अपना स्टेटस चेक करें →
        </Link>
      </>
    ),
  },
  {
    q: 'पीएम किसान eKYC नहीं हुई तो क्या पैसा आएगा?',
    a: (
      <>
        नहीं — बिना eKYC के कोई भी किस्त नहीं आती। eKYC बिल्कुल free है।{' '}
        <Link href="/articles/pm-kisan-ekyc-online-2026" className="text-green-600 font-bold underline hover:no-underline">
          घर बैठे Online eKYC कैसे करें? (Step-by-step Guide)
        </Link>
      </>
    ),
  },
  {
    q: 'पीएम किसान स्टेटस में "Land Seeding No" दिखाए तो क्या करें?',
    a: (
      <>
        इसका मतलब आपकी ज़मीन PM Kisan portal से link नहीं हुई। Fix: 1) अपने पटवारी/लेखपाल से मिलें 2) Khasra-Khatauni अपडेट करवाएं।{' '}
        <Link href="/articles/pm-kisan-land-seeding-status-check" className="text-green-600 font-bold underline hover:no-underline">
          Land Seeding की पूरी प्रक्रिया यहाँ पढ़ें →
        </Link>
      </>
    ),
  },
  {
    q: 'पीएम किसान में नाम गलत है तो payment आएगी क्या?',
    a: (
      <>
        नहीं — name mismatch से eKYC fail होती है और payment रुक जाती है।{' '}
        <Link href="/articles/pm-kisan-name-correction-online-2026" className="text-green-600 font-bold underline hover:no-underline">
          नाम गलत होने पर ऑनलाइन कैसे सुधार करें? (Full Guide)
        </Link>
      </>
    ),
  },
  {
    q: 'KCC (किसान क्रेडिट कार्ड) लोन कैसे मिलेगा?',
    a: (
      <>
        KCC के लिए आपको नज़दीकी बैंक (SBI/PNB) जाना होगा। Interest 7% p.a. (subsidy के साथ 4% effective) है। ₹1.6 लाख तक बिना collateral मिलता है।{' '}
        <Link href="/articles/kcc-loan-apply-online-guide" className="text-green-600 font-bold underline hover:no-underline">
          KCC Loan Apply Online — पूरी डिटेल यहाँ पढ़ें →
        </Link>
      </>
    ),
  },
  {
    q: 'Soil Health Card (मिट्टी स्वास्थ्य कार्ड) कैसे बनवाएं?',
    a: (
      <>
        Soil Health Card बनवाने के लिए नज़दीकी CSC center या agriculture office जाएं और mitti ka sample दें। ये बिल्कुल free है।{' '}
        <Link href="/articles/soil-health-card-complete-guide-2026" className="text-green-600 font-bold underline hover:no-underline">
          Soil Health Card Complete Guide 2026 (Download PDF)
        </Link>
      </>
    ),
  },
];