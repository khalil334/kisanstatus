import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'PM किसान खाद योजना में ₹11,000 कब आएंगे?',
    a: 'कभी नहीं — क्योंकि इस नाम की कोई official central scheme मौजूद ही नहीं है। न pmkisan.gov.in पर इसका जिक्र है, न fert.nic.in पर। ₹11,000 का आंकड़ा blogs ने PM किसान के ₹6,000 और एक काल्पनिक ₹5,000 fertilizer amount को जोड़कर बनाया है।',
  },
  {
    q: 'तो क्या खाद पर सरकार कोई पैसा देती ही नहीं?',
    a: 'देती है, बहुत बड़ा — पर किसान के खाते में नहीं। Subsidy fertilizer कंपनी को जाती है, ताकि यूरिया की 45 kg बोरी आपको ₹242 में मिले जबकि उसकी असली लागत ₹2,200 से ऊपर है। आपका फायदा सस्ती बोरी के रूप में मिलता है, cash में नहीं।',
  },
  {
    q: 'खाद योजना का form किसी site पर दिखे तो क्या करूं?',
    a: 'कुछ मत भरिए। न आधार, न bank details, न OTP। हर असली central scheme का portal gov.in या nic.in पर होता है। "खाद योजना registration" वाली private sites data चुराने या OTP fraud के लिए बनी हैं।',
  },
  {
    q: 'फिर किसान को सीधा पैसा किस scheme से मिलता है?',
    a: 'दो पक्के रास्ते: PM किसान सम्मान निधि — साल के ₹6,000 तीन किस्तों में सीधे खाते में, और PMFBY — फसल खराब होने पर बीमा claim। दोनों के official portal हैं और दोनों में बिना agent के खुद apply/check हो जाता है।',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function Head2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold mt-8 mb-3 leading-snug">{children}</h2>;
}

export default function PmKisanKhadYojanaSachHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        सीधा जवाब पहले: <strong>&ldquo;PM किसान खाद योजना&rdquo; नाम की कोई अलग central scheme officially
        मौजूद नहीं है।</strong> न pmkisan.gov.in पर ऐसी किसी योजना का जिक्र है, न Department of Fertilizers
        (fert.nic.in) की किसी सूची में। और खाते में ₹11,000 आने वाली बात? पूरी तरह गढ़ी हुई है।
      </p>
      <p>
        हर हफ्ते कोई न कोई किसान यह सवाल पूछता है। किसी ने WhatsApp पर message देखा, किसी ने YouTube
        thumbnail पर &ldquo;खाते में आ गए ₹11,000&rdquo; पढ़ा। Search करने पर ऊपर वही blogs मिलते हैं जो इस
        योजना को असली बताकर registration का तरीका भी समझा देते हैं — जिस चीज का कोई portal ही नहीं, उसका
        तरीका। चलिए पूरी कहानी समझते हैं।
      </p>

      <Head2>₹11,000 का हिसाब किसने बनाया?</Head2>
      <p>
        Formula सीधा है, और बिल्कुल गलत। PM किसान सम्मान निधि से साल के ₹6,000 मिलते हैं — यह असली है।
        कुछ blogs ने उसके ऊपर ₹5,000 का एक काल्पनिक &ldquo;fertilizer subsidy&rdquo; amount जोड़ा और total
        ₹11,000 बना दिया। किसी ने पहली किस्त ₹6,000 और दूसरी ₹5,000 लिखी, किसी ने खरीफ-रबी में बांट दिया।
        हर blog का हिसाब अलग है — क्योंकि source कोई है ही नहीं।
      </p>
      <p>
        खुद सोचकर देखिए। अगर सरकार सच में हर किसान को खाद के लिए ₹5,000 cash देती, तो इसका budget लाखों
        करोड़ में जाता और घोषणा प्रधानमंत्री खुद करते — TV पर, अखबार में। ऐसी कोई घोषणा कभी हुई नहीं। जो
        scheme सिर्फ blogs पर हो और किसी सरकारी site पर न हो, वह scheme नहीं, clicks के लिए लिखा content है।
      </p>

      <Head2>खाद पर सरकार असल में क्या देती है</Head2>
      <p>
        अब असली बात, जो अफवाह से ज्यादा काम की है। Fertilizer subsidy भारत के सबसे बड़े सरकारी खर्चों में से
        है। फर्क इतना है कि यह पैसा <strong>किसान के खाते में नहीं, fertilizer कंपनी को</strong> जाता है। आप
        दुकान पर जाते हैं, आधार से PoS machine पर अंगूठा लगाते हैं, और बोरी subsidized rate पर मिल जाती है।
        कंपनी बाद में सरकार से subsidy claim करती है। इसे fertilizer DBT कहते हैं — नाम DBT है, पर transfer
        कंपनी को होता है।
      </p>
      <p>
        Numbers देखिए: यूरिया की 45 kg बोरी आपको <strong>₹242</strong> की मिलती है (neem-coating और tax अलग),
        जबकि उसकी असली लागत — बनाने और पहुंचाने की — <strong>₹2,200 से ₹2,600</strong> के बीच बैठती है।
        मतलब हर बोरी पर सरकार करीब ₹2,000 दे रही है। यही है वह &ldquo;खाद का पैसा&rdquo; — cash में नहीं,
        सस्ती बोरी में। DAP-पोटाश में Nutrient Based Subsidy (NBS) चलती है; DAP की 50 kg बोरी कई साल से
        ₹1,350 के आसपास stable रखी गई है — अंतर सरकार भरती है।
      </p>
      <p>
        MRP से ज्यादा कोई dealer नहीं ले सकता — यह कानून है। खरीदते समय PoS machine की पर्ची लीजिए; उसमें
        subsidy का amount भी छपा होता है। खरीद के बाद registered mobile पर SMS भी आता है जिसमें invoice
        number, dealer का नाम, quantity और सरकार का subsidy amount होता है। Fertilizer की शिकायत के लिए
        Kisan Call Centre का नंबर 1800-180-1551 है।
      </p>

      <Head2>&ldquo;खाद योजना registration&rdquo; वाला form दिखे तो?</Head2>
      <p>
        जो चीज मौजूद नहीं, उसका registration form किसी के पास कैसे हो सकता है? फिर भी कई sites
        &ldquo;खाद योजना apply online&rdquo; के नाम से form चला रही हैं। खेल दो तरह का है: पहला — आपका
        आधार, mobile, bank detail जमा करके data बेचना। दूसरा, ज्यादा खतरनाक — registration
        &ldquo;confirm&rdquo; करने के नाम पर <strong>OTP मांगना</strong>। OTP दिया तो खाते से पैसा गया।
      </p>
      <p>
        पहचान का आसान नियम: central scheme का हर असली portal <strong>gov.in</strong> या{' '}
        <strong>nic.in</strong> पर खत्म होता है। असली scheme की जानकारी में हमेशा official portal, helpline
        और notification होता है; fake articles में सिर्फ &ldquo;जल्द आवेदन करें&rdquo; की जल्दी। शक हो तो
        PIB Fact Check (@PIBFactCheck) पर scheme का नाम search कर लीजिए।
      </p>

      <Head2>असली पैसा कहां है — ये दो schemes पक्की हैं</Head2>
      <p>
        <strong>PM किसान सम्मान निधि</strong> — साल के ₹6,000, तीन किस्तें, सीधे आधार-linked खाते में। यही
        वह scheme है जिसके नाम का सहारा लेकर खाद वाली अफवाह बनी। किस्त अटकी हो तो{' '}
        <Link href="/articles/hi/pm-kisan-helpline-155261" className="underline font-bold">हेल्पलाइन और शिकायत
        गाइड</Link> देखिए, और NPCI seeding की दिक्कत हो तो{' '}
        <Link href="/articles/hi/npci-aadhaar-seeding" className="underline">NPCI आधार सीडिंग गाइड</Link>।
      </p>
      <p>
        <strong>PMFBY (फसल बीमा)</strong> — फसल खराब होने पर claim का पैसा। Claim अटका हो तो{' '}
        <Link href="/articles/hi/fasal-bima-claim-status" className="underline font-bold">फसल बीमा क्लेम
        स्टेटस गाइड</Link> में पूरा रास्ता है। इनके अलावा आपके राज्य की अपनी schemes भी होंगी — पर उन्हें
        हमेशा राज्य कृषि विभाग के portal से verify करके ही मानिए।
      </p>
      <p>
        एक छोटा test याद रखिए: scheme असली है या नहीं, यह जानने के लिए उसका नाम + site:gov.in लिखकर search
        कीजिए। सरकारी portal पर मिला तो असली। सिर्फ blogs पर मिला तो समझिए content है, scheme नहीं।
      </p>

      <Head2>अक्सर पूछे जाने वाले सवाल</Head2>
      <div className="space-y-5">
        {FAQS.map((f) => (
          <div key={f.q}>
            <h3 className="font-bold text-base mb-1">{f.q}</h3>
            <p className="text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}
