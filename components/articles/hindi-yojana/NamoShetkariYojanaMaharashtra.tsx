import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'महाराष्ट्र के किसान को कुल कितना पैसा मिलता है?',
    a: 'केंद्र की PM Kisan से ₹6,000 सालाना और राज्य की नमो शेतकरी महासन्मान निधि से ₹6,000 — कुल ₹12,000। राज्य सरकार ने रकम बढ़ाने की घोषणा भी की है, लेकिन बढ़ी हुई रकम आपकी किस्त में कब से दिखेगी, यह official portal/घोषणा से ही confirm करें।',
  },
  {
    q: 'क्या नमो शेतकरी के लिए अलग आवेदन करना पड़ता है?',
    a: 'नहीं। योजना PM Kisan के database पर ही चलती है — महाराष्ट्र का जो किसान PM Kisan का verified beneficiary है, वही नमो शेतकरी का भी हकदार है। अलग form भरने की जरूरत नहीं। नया किसान पहले PM Kisan में registration कराए, राज्य की किस्त अपने आप जुड़ती है।',
  },
  {
    q: 'किस्त का status कहां देखें?',
    a: 'NSMNY portal (nsmny.mahait.org) पर Beneficiary Status option है — registered mobile number या registration number डालकर OTP से status दिखता है। PM Kisan वाली किस्तों के लिए pmkisan.gov.in का Know Your Status अलग से देखना होगा।',
  },
  {
    q: 'PM Kisan आ रही है पर नमो शेतकरी की किस्त नहीं आई — क्यों?',
    a: 'सबसे आम कारण: eKYC अधूरी, बैंक खाता आधार से linked/DBT-enabled नहीं, या land record verification pending। दूसरा कारण schedule का है — राज्य की किस्तें PM Kisan के साथ-साथ नहीं, अपने कार्यक्रम से release होती हैं। पहले NSMNY portal पर status देखें, फिर कृषि सहायक/तलाठी से मिलें।',
  },
  {
    q: 'किस्तें कब-कब आती हैं?',
    a: 'PM Kisan की तरह ही ₹2,000 की तीन किस्तों का ढांचा है, पर release की तारीखें राज्य सरकार तय करती है — कई बार PM Kisan की किस्त के आसपास, कई बार अलग से। Exact date की सिर्फ official घोषणा मानें, WhatsApp forward नहीं।',
  },
  {
    q: 'क्या यह योजना मराठी में ही है? हिंदी वाले किसान का क्या?',
    a: 'Portal मराठी और अंग्रेजी में है, पर process वही है जो ऊपर लिखी है — आधार, mobile OTP, status check। भाषा से हक पर फर्क नहीं पड़ता; महाराष्ट्र का PM Kisan beneficiary होना ही शर्त है।',
  },
];

const RELATED = [
  { slug: 'hindi/mp-kisan-kalyan-yojana', title: 'MP किसान कल्याण योजना ₹12000', emoji: '🌾' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'hindi/npci-aadhaar-seeding', title: 'NPCI आधार सीडिंग', emoji: '🏦' },
];

export default function NamoShetkariYojanaMaharashtra({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        सितंबर 2025 की एक press release का आंकड़ा देखिए — नमो शेतकरी योजना की 7वीं किस्त में महाराष्ट्र
        सरकार ने <strong>91 लाख से ज्यादा किसानों</strong> के खातों में करीब ₹1,892 करोड़ भेजे। एक किस्त
        में। फिर भी गांव-गांव में यही सवाल घूमता है — "PM Kisan तो आ गई, पर यह दूसरी वाली ₹2,000 किसकी
        थी? और इस बार क्यों नहीं आई?" अगर आप भी महाराष्ट्र के किसान हैं और यह हिसाब उलझा हुआ लगता है, तो
        यह guide आपके लिए है।
      </p>

      <IB>
        <strong>एक line में:</strong> महाराष्ट्र का जो किसान PM Kisan का verified beneficiary है, उसे राज्य
        सरकार <strong>नमो शेतकरी महासन्मान निधि</strong> से ₹6,000/साल और देती है — अलग आवेदन नहीं,
        ₹2,000 की तीन किस्तें, status{' '}
        <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">nsmny.mahait.org</a>{' '}
        पर।
      </IB>

      <SH>योजना क्या है — और MP वाले model से रिश्ता</SH>
      <p>
        2023-24 के महाराष्ट्र budget में घोषित यह योजना उसी formula पर चलती है जो मध्य प्रदेश ने{' '}
        <Link href="/articles/hindi/mp-kisan-kalyan-yojana">किसान कल्याण योजना</Link> से शुरू किया था —
        केंद्र की PM Kisan के ऊपर राज्य अपनी तरफ से बराबर की रकम जोड़ दे। नतीजा: महाराष्ट्र के किसान परिवार
        को सालाना <strong>₹12,000</strong> — ₹6,000 केंद्र से, ₹6,000 राज्य से।
      </p>
      <p>
        सरकार ने राज्य वाली रकम बढ़ाकर ₹9,000 करने की बात भी कही है — यानी कुल ₹15,000 का math। लेकिन
        यहां हम वही लिखेंगे जो खाते में आता दिखा है: अब तक की किस्तें ₹2,000 × 3 के हिसाब से ₹6,000/साल
        की rhythm पर आई हैं। बढ़ी हुई रकम आपकी किस्त में कब से लागू होगी, यह official घोषणा और portal से
        confirm करें — अफवाह से नहीं।
      </p>

      <SH>पात्रता — शर्तें गिनती की हैं</SH>
      <StepList>
        <SI n={1}>किसान <strong>महाराष्ट्र का निवासी</strong> हो और उसके नाम खेती की जमीन का record हो।</SI>
        <SI n={2}><strong>PM Kisan का active beneficiary</strong> हो — यही असली शर्त है; राज्य अपनी अलग जांच नहीं करता, केंद्र का verified database ही उठाता है।</SI>
        <SI n={3}><strong>eKYC पूरी</strong> हो और बैंक खाता आधार से seeded + DBT-enabled हो।</SI>
        <SI n={4}>PM Kisan के exclusion नियम यहां भी लागू — income tax payer परिवार, सरकारी कर्मचारी, ₹10,000+ pension वाले बाहर।</SI>
      </StepList>

      <WB>
        इसका उल्टा भी उतना ही सच है — PM Kisan में किस्त रुकी (eKYC, land seeding, बैंक issue), तो नमो
        शेतकरी भी रुकेगी। एक ही जड़ से दोनों किस्तें निकलती हैं। इसलिए पहले PM Kisan की सेहत ठीक करो,
        राज्य वाली अपने आप पटरी पर आ जाती है।
      </WB>

      <SH>Status check — step by step</SH>
      <StepList>
        <SI n={1}>
          <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">nsmny.mahait.org</a>{' '}
          खोलें — यह NSMNY का official portal है।
        </SI>
        <SI n={2}><strong>Beneficiary Status</strong> option चुनें।</SI>
        <SI n={3}>Registered mobile number या registration number (वही जो PM Kisan में है) डालें, captcha भरें।</SI>
        <SI n={4}>Mobile पर आए <strong>OTP</strong> से verify करें।</SI>
        <SI n={5}>Screen पर किस्तों की history, eKYC status और आधार seeding status दिखेगा — screenshot रख लें।</SI>
      </StepList>

      <GovLink
        href="https://nsmny.mahait.org"
        label="Namo Shetkari Mahasanman Nidhi — Official Portal"
        guide="NSMNY Portal खोलो"
        guideHref="/articles/PmKisanMasterGuide2026"
        portalName="Government of Maharashtra"
      />

      <SH>किस्त नहीं आई? यह checklist चलाइए</SH>
      <p>
        7वीं किस्त के समय भी लाखों किसान ऐसे थे जिनका नाम list में था पर पैसा नहीं पहुंचा। लगभग हर मामला
        इन्हीं चार खानों में गिरता है:
      </p>
      <StepList>
        <SI n={1}>
          <strong>eKYC अधूरी</strong> — rejection का सबसे बड़ा कारण। मोबाइल से OTP या Face App से पूरी
          करें — तरीका <Link href="/articles/hindi/ekyc-mobile-se">eKYC guide</Link> में है।
        </SI>
        <SI n={2}>
          <strong>बैंक खाता आधार से linked नहीं / DBT off</strong> — यह NPCI seeding का मामला है, branch
          जाकर form भरना पड़ता है। पूरा process{' '}
          <Link href="/articles/hindi/npci-aadhaar-seeding">NPCI आधार सीडिंग guide</Link> में।
        </SI>
        <SI n={3}>
          <strong>Land record verification pending</strong> — तलाठी/कृषि सहायक के स्तर पर अटका होता है;
          खतौनी लेकर मिलिए।
        </SI>
        <SI n={4}>
          <strong>PM Kisan में ही registration अधूरा</strong> — तो पहले वहां का status देखें (
          <Link href="/articles/hindi/status-check-mobile-se">mobile number से status check</Link>) और वह
          ठीक कराएं।
        </SI>
      </StepList>

      <SH>नए किसान के लिए रास्ता</SH>
      <p>
        अलग से "नमो शेतकरी का form" ढूंढने मत जाइए — ऐसा कोई अलग आवेदन है ही नहीं। रास्ता एक ही है:
        पहले PM Kisan में registration (अब Farmer ID के साथ), eKYC और बैंक seeding पूरी कीजिए। जिस
        महीने आप PM Kisan के verified beneficiary बने, उसके बाद की राज्य किस्त से आपका नाम नमो शेतकरी
        में भी गिना जाने लगता है। Registration का पूरा तरीका{' '}
        <Link href="/articles/hindi/nayi-registration">नई रजिस्ट्रेशन guide</Link> में step-by-step लिखा
        है।
      </p>

      <SH>सीधी बात</SH>
      <p>
        नमो शेतकरी कोई पहेली नहीं है — यह PM Kisan की परछाई है। वहां सब ठीक, तो यहां भी पैसा आएगा; वहां
        अटका, तो यहां भी अटकेगा। इसलिए साल में दो बार portal पर status देख लेने की आदत, eKYC-बैंक-जमीन
        तीनों record दुरुस्त, और किसी भी "किस्त दिलवाने वाले agent" से दूरी — बस इतना ही काम है। बाकी
        ₹12,000 आपका हक है, किसी की मेहरबानी नहीं।
      </p>

      <FAQBlock faqs={FAQS} />

      <RelatedArticles articles={RELATED} />
    </>
  );
}
