import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'क्या phone से यह काम बिल्कुल free है?',
    a: 'हां। Portal पर OTP से हो या PM-KISAN app में Face Auth से — दोनों में एक रुपया नहीं लगता। पैसा सिर्फ तब लगता है जब CSC पर biometric कराने जाते हैं, और वहां भी मामूली service charge होता है।',
  },
  {
    q: 'OTP नहीं आ रहा — बार-बार try कर लिया?',
    a: 'OTP उस नंबर पर जाता है जो आधार में registered है, न कि उस पर जो आप अभी चला रहे हैं। दोनों अलग हैं तो OTP कभी नहीं आएगा। पहले Aadhaar Seva Kendra जाकर आधार में नया नंबर डलवाएं (करीब ₹50 का शुल्क), फिर यह process करें।',
  },
  {
    q: 'माता-पिता की eKYC उनके बिना मेरे phone से हो सकती है?',
    a: 'हो सकती है — OTP उनके आधार-linked नंबर पर आएगा, वह आपको बता दें तो आप भर सकते हैं। Face Auth के लिए तो app में दूसरे beneficiary का चेहरा scan करने का विकल्प ही दिया गया है — बुजुर्गों के लिए यही बना है।',
  },
  {
    q: '"eKYC is already done" लिखा आ रहा है, अब?',
    a: 'बधाई — कुछ नहीं करना। यह message तभी आता है जब record में eKYC पहले से पूरी हो। Status page पर eKYC: YES दिखेगा — पक्का सबूत यही है।',
  },
  {
    q: '"Record not found with given Aadhaar" का क्या अर्थ है?',
    a: 'दो ही वजहें होती हैं — या तो आप योजना में registered ही नहीं हैं, या आधार number गलत/किसी और record से जुड़ा है। पहले Know Your Status में अपना registration check करें; record है ही नहीं तो पहले नई registration होगी, eKYC बाद की बात है।',
  },
  {
    q: 'Smartphone नहीं है, सिर्फ keypad वाला phone है — कोई रास्ता?',
    a: 'Phone से नहीं होगा — OTP वाले तरीके के लिए भी browser चाहिए। ऐसे में नजदीकी CSC पर fingerprint से करवा लें, या परिवार में किसी के smartphone से ऊपर वाला तरीका अपनाएं। OTP आपके keypad phone पर ही आ जाएगा।',
  },
  {
    q: 'eKYC के बाद किस्त कितने दिन में आ जाती है?',
    a: 'eKYC कोई payment trigger नहीं है — यह सिर्फ शर्त पूरी करता है। पैसा तभी आता है जब सरकार किस्त release करती है। हां, eKYC अधूरी रही तो release होने पर भी आपका भुगतान रुक जाएगा।',
  },
  {
    q: 'हर साल eKYC दोबारा करानी पड़ती है?',
    a: 'एक बार दर्ज हो जाने पर बार-बार कराने की जरूरत नहीं रहती — status में YES टिका रहता है। दोबारा जरूरत तब पड़ सकती है जब आधार में कोई बड़ा बदलाव हो या record में गड़बड़ी पकड़ी जाए। किस्त से पहले एक नजर status पर डाल लेना काफी है।',
  },
  {
    q: 'Face Auth में चेहरा scan हो ही नहीं रहा, क्या करूं?',
    a: 'रोशनी और camera दोनों देखिए। सामने से आती रोशनी में, चश्मा-टोपी हटाकर, phone को आंखों की सीधाई पर रखें और हिलने से बचें। बुजुर्गों में कम रोशनी बड़ी आम वजह होती है। दो-तीन कोशिशों में भी न बने तो OTP वाला रास्ता या CSC का biometric बेहतर है।',
  },
  {
    q: 'CSC वाला eKYC के ₹200-300 मांग रहा है — देना पड़ेगा?',
    a: 'नहीं, इतना नहीं। CSC पर biometric सेवा की तय सरकारी फीस होती है जो मामूली है; उससे ज्यादा मांगना वसूली है। Phone से OTP या Face Auth वाला रास्ता पूरी तरह मुफ्त है — पहले उसी की कोशिश कीजिए, CSC तभी जाइए जब आधार में नंबर linked न हो।',
  },
  {
    q: 'eKYC YES है फिर भी किस्त नहीं आई — क्यों?',
    a: 'eKYC तीन शर्तों में से एक है। बाकी दो — बैंक खाते की आधार seeding और जमीन के record की seeding — भी YES होनी चाहिए। इनमें कोई NO है तो भुगतान उसी step पर रुकेगा। Status page पर तीनों field एक साथ दिखते हैं, वहां मिला लीजिए।',
  },
  {
    q: 'आधार में नंबर update कराने के बाद कितनी देर में eKYC हो पाएगी?',
    a: 'नंबर update होने में कुछ दिन लगते हैं, और जब तक वह चालू न हो, आधार OTP नहीं आएगा। जल्दी हो तो इंतजार की जगह CSC पर fingerprint से eKYC करा लें — और नंबर update होने के बाद आगे के काम घर बैठे होने लगेंगे।',
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

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Sec({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-[var(--color-text)] mt-6 mb-2">{children}</h3>;
}

function PathCard({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)]">
      <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
        <span className="w-9 h-9 rounded-lg bg-[var(--color-primary)] text-white font-black flex items-center justify-center shrink-0">
          {badge}
        </span>
        <h2 className="text-base font-black text-[var(--color-text)] m-0">{title}</h2>
      </div>
      <div className="p-4 text-sm leading-relaxed text-[var(--color-text)] space-y-3">{children}</div>
    </div>
  );
}

function Tip({ tone, children }: { tone: 'ok' | 'warn' | 'stop'; children: React.ReactNode }) {
  const cls =
    tone === 'ok'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500'
      : tone === 'warn'
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
        : 'bg-red-50 dark:bg-red-900/20 border-red-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${cls}`}>
      {children}
    </div>
  );
}

export default function PmKisanEkycMobileSeKaiseKare({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        <strong>क्या घर बैठे, सिर्फ phone से, बिना CSC गए eKYC हो जाती है?</strong>
      </p>
      <p>
        हो जाती है। दस मिनट का काम है — बशर्ते एक शर्त पूरी हो: आपका mobile number आधार से जुड़ा हो। यही
        एक बात है जिस पर पूरा खेल टिका है। जुड़ा है, तो नीचे के तरीकों में से कोई भी रास्ता पकड़िए। नहीं जुड़ा,
        तो सीधे इस लेख के आखिरी हिस्से पर जाइए — वहां उसका इलाज लिखा है।
      </p>
      <p>
        नीचे तीनों रास्ते अलग-अलग लिखे हैं — OTP वाला, चेहरे से पहचान वाला, और उंगलियों के निशान वाला — और
        साथ में यह भी कि किसे कौन सा चुनना चाहिए। बीच में उन error messages की व्याख्या भी है जिन पर लोग
        अक्सर अटकते हैं, क्योंकि आधी परेशानी यही होती है कि screen पर अंग्रेजी में कुछ लिखा आया और समझ नहीं
        आया कि अब आगे क्या।
      </p>

      <Tip tone="ok">
        याद रहे: बिना पूरी eKYC के किस्त का भुगतान रुक जाता है। यह नियम अब पक्का है — portal खुद होमपेज पर
        लिखता है कि eKYC सभी beneficiaries के लिए अनिवार्य है। इतना छोटा काम टालने लायक नहीं।
      </Tip>

      <Figure
        src="/images/articles/hindi-yojna/ekyc-mobile-se/otp-screen.webp"
        alt="Mobile पर PM Kisan eKYC का OTP verification screen"
        caption="OTP वाला रास्ता — घर बैठे, बिल्कुल मुफ्त"
      />

      <PathCard badge="A" title="Portal पर OTP से — घर बैठे, मुफ्त">
        <p>
          Phone के browser में{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">
            pmkisan.gov.in
          </a>{' '}
          खोलें। Homepage पर ही Farmers Corner में <strong>e-KYC</strong> का box दिखेगा। अपना 12 अंकों का
          आधार number भरकर search दबाएं।
        </p>
        <p>
          अब आधार से जुड़ा mobile number मांगा जाएगा — भरिए, OTP आएगा। पहले mobile OTP, फिर आधार OTP —
          दोनों डालते ही screen पर success का message आ जाता है। पक्का करने के लिए "Know Your Status"
          खोलकर देख लें — eKYC के आगे <strong>YES</strong> दिखना चाहिए।
        </p>
        <p>
          छोटी सलाह, अनुभव से निकली हुई: शाम 6-9 बजे portal पर भीड़ रहती है और OTP अटकते हैं। सुबह के समय
          यही काम पहली बार में हो जाता है। OTP की validity कुछ ही मिनट की होती है — आते ही भर दें।
        </p>
      </PathCard>

      <Sub>पहली बार में न हो तो — तीन बातें जांच लें</Sub>
      <p>
        OTP वाला रास्ता आसान होते हुए भी कुछ लोगों को यहीं रोक देता है। लगभग हमेशा वजह इन तीन में से एक
        होती है। पहली, आधार number टाइप करने में एक अंक की गलती — 12 अंक धीरे-धीरे दोबारा मिलाइए। दूसरी,
        mobile OTP आ गया पर आधार OTP का इंतजार करते रह गए — ये दो अलग OTP हैं, दोनों भरने होते हैं। तीसरी,
        OTP की मियाद निकल गई — नया मंगाइए और आते ही भर दीजिए।
      </p>
      <p>
        एक और छोटी बात: कई लोग आधार OTP वाला हिस्सा देखकर घबरा जाते हैं कि आधार का पासवर्ड मांगा जा रहा है।
        ऐसा कुछ नहीं है — यह उसी तरह का OTP है जो UIDAI आपके आधार से जुड़े नंबर पर भेजता है, और वह आपके ही
        phone पर आता है। किसी को बताने की जरूरत नहीं, खुद भर दीजिए।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/ekyc-mobile-se/face-auth.webp"
        alt="बुजुर्ग किसान PM-KISAN app में Face Authentication करते हुए"
        caption="Face Auth — OTP का झंझट नहीं, चेहरा ही पहचान"
      />

      <PathCard badge="B" title="PM-KISAN app में Face Authentication — बुजुर्गों के लिए वरदान">
        <p>
          जिनके आधार में नंबर तो linked है पर OTP का झंझट नहीं चाहिए — या घर के बुजुर्ग की eKYC करनी है —
          उनके लिए सरकार ने चेहरे से पहचान वाला तरीका दिया है। Google Play Store से{' '}
          <strong>PM-KISAN GoI</strong> app (प्रकाशक: Government of India) डालिए, beneficiary की details से
          login कीजिए, और Face Auth का विकल्प चुनकर camera के सामने चेहरा scan करवाइए। App दूसरे किसानों की
          eKYC कराने की सुविधा भी देता है — आपके phone से पड़ोस के 10 बुजुर्गों का काम भी निपट सकता है।
          Screen-दर-screen विवरण के लिए{' '}
          <Link href="/articles/PmKisanFaceAuthenticationEkyc">Face Auth वाला लेख</Link> खोल लें।
        </p>
        <p>
          चेहरा scan करते वक्त तीन बातें ध्यान रखिए, वरना app बार-बार मना करता रहेगा। रोशनी सामने से आनी
          चाहिए, पीछे से नहीं — खिड़की की तरफ मुंह करके बैठिए। चश्मा, टोपी या मास्क हटा दीजिए। और phone को
          आंखों की सीधाई पर स्थिर रखिए, नीचे से ऊपर की तरफ नहीं। इतना कर लेने पर आम तौर पर पहली या दूसरी
          कोशिश में पहचान हो जाती है।
        </p>
      </PathCard>

      <Tip tone="warn">
        Play Store पर मिलते-जुलते नाम के नकली app भी तैरते रहते हैं। Install से पहले publisher जरूर देखें —
        असली app का प्रकाशक Government of India / कृषि मंत्रालय है। कोई भी app जो eKYC के बदले पैसे या
        बैंक details मांगे, सीधा uninstall करें।
      </Tip>

      <Figure
        src="/images/articles/hindi-yojna/ekyc-mobile-se/csc-fingerprint.webp"
        alt="CSC पर fingerprint scanner से eKYC कराता किसान"
        caption="OTP न आए तो CSC का biometric रास्ता सबसे भरोसेमंद है"
      />

      <PathCard badge="C" title="CSC पर उंगलियों के निशान से — जब OTP का रास्ता बंद हो">
        <p>
          जब आधार में नंबर जुड़ा ही न हो, या बुजुर्ग का चेहरा app पहचान न पाए, तो यह रास्ता बचता है और
          भरोसेमंद भी बैठता है। नजदीकी CSC (Common Service Centre) पर आधार कार्ड ले जाइए; वहां fingerprint
          scanner पर अंगूठा रखवाकर eKYC दर्ज कर दी जाती है। काम मिनटों का है, और इसमें OTP की जरूरत नहीं
          पड़ती — जिनका पुराना नंबर बंद हो चुका है, उनके लिए यही तेज विकल्प है।
        </p>
        <p>
          दो सावधानियां। पहली, वहां भी सेवा की तय फीस मामूली होती है — मनमानी रकम मांगी जाए तो सवाल कीजिए।
          दूसरी, काम होने के बाद counter पर ही status खुलवाकर eKYC: YES अपनी आंखों से देख लीजिए। "हो गया" सुनकर लौट
          आना और बाद में पता चलना कि दर्ज नहीं हुआ — यह शिकायत बहुत आम है।
        </p>
      </PathCard>

      <Sub>कौन सा रास्ता आपके लिए सही है</Sub>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">आपकी स्थिति</th>
              <th className="border border-[var(--color-border)] p-2 text-left">सही रास्ता</th>
              <th className="border border-[var(--color-border)] p-2 text-left">क्यों</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">आधार से नंबर जुड़ा है, smartphone है</td>
              <td className="border border-[var(--color-border)] p-2">Portal पर OTP</td>
              <td className="border border-[var(--color-border)] p-2">तेज, मुफ्त, घर बैठे</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">घर के बुजुर्ग की करानी है</td>
              <td className="border border-[var(--color-border)] p-2">App में Face Auth</td>
              <td className="border border-[var(--color-border)] p-2">एक ही phone से कई लोगों की हो जाती है</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">आधार वाला नंबर बंद हो चुका है</td>
              <td className="border border-[var(--color-border)] p-2">CSC पर biometric</td>
              <td className="border border-[var(--color-border)] p-2">OTP की जरूरत ही नहीं पड़ती</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">keypad वाला phone है</td>
              <td className="border border-[var(--color-border)] p-2">किसी के smartphone से OTP, या CSC</td>
              <td className="border border-[var(--color-border)] p-2">OTP आपके ही नंबर पर आएगा</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">उंगलियों के निशान घिस चुके हैं</td>
              <td className="border border-[var(--color-border)] p-2">पहले Face Auth, फिर OTP</td>
              <td className="border border-[var(--color-border)] p-2">खेती-मजदूरी में यह आम बात है</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-5 p-4 border-2 border-[var(--color-border)] rounded-2xl bg-[var(--color-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="font-bold text-[var(--color-text)] text-sm m-0">PM Kisan Portal — e-KYC</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5 mb-0">
            Government of India — pmkisan.gov.in
          </p>
        </div>
        <a
          href="https://pmkisan.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
        >
          pmkisan.gov.in खोलें ↗
        </a>
      </div>

      <Sec>Screen पर आया error — किसका क्या अर्थ</Sec>
      <p>
        eKYC करते वक्त जो lines दिखती हैं, उनकी व्याख्या समझ लेने से आधी उलझन खत्म हो जाती है। आम चार ये हैं:
      </p>
      <ul className="list-none pl-0 space-y-3 my-4">
        <li className="border border-[var(--color-border)] rounded-xl p-4 text-sm leading-relaxed">
          <strong>Invalid Aadhaar / Aadhaar not valid</strong> — नंबर टाइप करने में गलती है। 12 अंक फिर से
          मिलाइए, बीच में space न छोड़िए।
        </li>
        <li className="border border-[var(--color-border)] rounded-xl p-4 text-sm leading-relaxed">
          <strong>Record not found with given Aadhaar</strong> — इस आधार से योजना का कोई record नहीं जुड़ा।
          पहले <Link href="/articles/hi/status-check-mobile-se">status</Link> देखकर पक्का कीजिए कि आप
          registered हैं या नहीं; न हों तो{' '}
          <Link href="/articles/hi/nayi-registration">नई registration</Link> पहला कदम है।
        </li>
        <li className="border border-[var(--color-border)] rounded-xl p-4 text-sm leading-relaxed">
          <strong>Mobile number not matching</strong> — जो नंबर आप डाल रहे हैं, वह आधार से जुड़ा नहीं है।
          यहीं से आगे का हिस्सा आपके काम का है (नीचे पढ़िए)।
        </li>
        <li className="border border-[var(--color-border)] rounded-xl p-4 text-sm leading-relaxed">
          <strong>eKYC is already done</strong> — काम पहले ही पूरा है, दोबारा करने की जरूरत नहीं। Status में
          YES देख लीजिए, बस।
        </li>
      </ul>

      <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
        <p className="text-2xl mb-2">📆</p>
        <p className="font-black text-lg mb-1">Kist Ruki Hai? Pata Karo Kyun</p>
        <p className="text-green-100 text-sm mb-4">
          eKYC, bank seeding, land seeding check karo — 4 sawaal mein exact reason.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link
            href="/calculator/installment-tracker"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors"
          >
            📆 Kist Tracker Kholo →
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors"
          >
            🧮 Sab Utilities Dekho
          </Link>
        </div>
      </div>

      <Sec>और अगर आधार में mobile number linked ही नहीं है?</Sec>
      <p>
        तब phone वाले दोनों रास्ते बंद हैं — यह कड़वा सच पहले ही बता देना ठीक है। अब दो विकल्प बचते हैं।
        पहला: नजदीकी CSC (Common Service Centre) जाकर fingerprint से biometric eKYC करवा लें — आधार card
        साथ ले जाएं, काम मिनटों में होता है। दूसरा, थोड़ा लंबा पर स्थायी इलाज: Aadhaar Seva Kendra में जाकर
        आधार में अपना चालू नंबर registered करवा लें (
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> से
        appointment बुक होती है) — उसके बाद हर सरकारी OTP वाला काम घर बैठे होगा, सिर्फ यह योजना नहीं।
      </p>
      <p>
        नंबर बदल गया हो तो portal के record में भी नया नंबर डलवाना समझदारी है — कैसे, यह{' '}
        <Link href="/articles/PmKisanMobileNumberChangeUpdate">इस page पर समझाया है</Link>। वरना status
        check और शिकायत, दोनों में आगे दिक्कत आएगी।
      </p>
      <p>
        यहां एक बात साफ रखिए — आधार में नंबर जुड़ा होना और PM Kisan record में वह नंबर दर्ज होना, दो अलग
        बातें हैं। पहली से आधार OTP आता है, दूसरी से portal का OTP और सूचनाएं। दोनों जगह चालू नंबर हो, तभी
        आगे का हर काम — status देखना, शिकायत दर्ज करना, किस्त की जानकारी — बिना अड़चन चलता है। एक बार बैठकर
        दोनों जगह एक ही नंबर करा लेना अच्छा सौदा है।
      </p>

      <Sec>eKYC है क्या, और सरकार इसे क्यों मांगती है</Sec>
      <p>
        बहुत लोग इसे एक और सरकारी झंझट समझकर टालते रहते हैं। बात सीधी है: eKYC के जरिए आधार से यह पक्का
        किया जाता है कि जिस नाम पर पैसा जा रहा है, वह व्यक्ति वाकई वह स्वयं है। कागज पर नाम मिलाने के बजाय
        व्यवस्था सीधे आधार से मिलान कर लेती है — इसे ही electronic KYC कहा जाता है।
      </p>
      <p>
        फायदा किसान का ही है। एक ही परिवार से कई नाम, मर चुके व्यक्ति के नाम पर चलती किस्तें, या किसी और के
        खाते में जाता पैसा — ये गड़बड़ियां इसी मिलान से पकड़ी जाती हैं। जब सूची साफ होती है, तो असली किसान का
        भुगतान बिना अड़चन निकलता है। इसे रुकावट न मानिए; यह वह ताला है जो आपके हिस्से की रकम किसी और के हाथ
        नहीं जाने देता।
      </p>

      <Sub>eKYC, DBT और seeding — तीन अलग चीजें, एक ही उलझन</Sub>
      <p>
        गांव में ये तीनों शब्द एक-दूसरे की जगह बोल दिए जाते हैं, और यहीं से गलतफहमी शुरू होती है। संक्षेप में
        फर्क समझ लीजिए। <strong>eKYC</strong> आपकी पहचान का मिलान है — आधार से।{' '}
        <strong>आधार-बैंक seeding</strong> आपके खाते को आधार से जोड़कर DBT के लिए तैयार करना है, और वह काम
        बैंक शाखा में होता है। <strong>Land seeding</strong> जमीन के record का योजना से जुड़ना है, जो तहसील
        से जुड़ा मामला है।
      </p>
      <p>
        तीनों अलग-अलग दफ्तरों के काम हैं, और तीनों का YES होना जरूरी है। eKYC हो जाने पर यह मान लेना कि अब
        सब पूरा है, गलत है। खाते वाला हिस्सा विस्तार से{' '}
        <Link href="/articles/hi/npci-aadhaar-seeding">NPCI आधार सीडिंग वाले लेख</Link> में पढ़ सकते हैं।
      </p>

      <Sec>बुजुर्गों और महिलाओं के लिए — व्यावहारिक बातें</Sec>
      <p>
        गांव में अटकाव अक्सर इन्हीं दो हिस्सों में दिखता है, और वजह तकनीकी नहीं, व्यावहारिक होती है।
        बुजुर्गों के मामले में अक्सर उंगलियों के निशान साफ नहीं पढ़े जाते और आधार वाला नंबर बेटे या रिश्तेदार
        का दर्ज होता है। ऐसे में कारगर तरीका app का Face Auth है — घर बैठे, बिना लाइन में लगे, और एक ही
        phone से घर के दो-तीन लोगों का काम एक बैठक में।
      </p>
      <p>
        महिलाओं के मामले में आम अड़चन नाम की है — शादी के बाद आधार में नाम या पता बदला, पर बैंक खाते या जमीन
        के record में पुराना ही चल रहा है। eKYC तो हो जाती है, पर मिलान आगे अटकता है। eKYC के साथ ही यह भी
        देख लीजिए कि आधार, passbook और खतौनी — तीनों में नाम की spelling एक जैसी है या नहीं। फर्क मिले तो
        सुधार की प्रक्रिया शुरू कर दीजिए, वरना हर किस्त पर नया सवाल खड़ा होगा।
      </p>

      <Sec>काम पूरा हुआ या नहीं — आखिरी जांच</Sec>
      <Figure
        src="/images/articles/hindi-yojna/ekyc-mobile-se/ekyc-success.webp"
        alt="Mobile पर eKYC successful का green confirmation"
        caption="काम तभी पूरा मानें जब status में eKYC के आगे YES दिखे"
      />
      <p>
        Success message आना और record में दर्ज होना — दोनों में कभी-कभी थोड़ा फासला होता है। अगले दिन एक बार{' '}
        <Link href="/articles/hi/status-check-mobile-se">status page</Link> खोलकर eKYC: YES देख लें। YES
        दिख गया तो यह अध्याय बंद; अब ध्यान बाकी दो चीजों पर दें — बैंक की आधार seeding और जमीन का record।
        किस्त इन्हीं तीन पहियों पर चलती है।
      </p>
      <p>
        और एक आदत डाल लीजिए जो आगे बहुत बचाएगी: जिस दिन eKYC पूरी हो, उस दिन का status mobile में capture कर
        लीजिए और तारीख नोटबुक में लिख लीजिए। कभी record में गड़बड़ी दिखे या किसी दफ्तर में सवाल उठे, तो यह
        सबूत झटपट काम करता है। कागजात संभालना गांव में सस्ता बीमा है।
      </p>
      <p>
        अगर YES न दिखे तो घबराइए नहीं — एक-दो दिन और देखिए, क्योंकि दर्ज होने में समय लगता है। उसके बाद भी NO
        ही रहे तो मान लीजिए कि प्रक्रिया अधूरी रह गई। दोबारा उसी रास्ते से कोशिश कीजिए, और तीसरी बार भी न बने
        तो CSC पर biometric से करा लीजिए। इस एक field पर अटके रहने से बाकी दोनों काम भी रुके रहते हैं — इसे
        लटकाना महंगा पड़ता है।
      </p>

      <Sec>ठगी से बचने के लिए चार पक्की बातें</Sec>
      <p>
        eKYC के नाम पर ठगी का धंधा चलता ही इस बात पर है कि लोग जल्दी में होते हैं और डरे हुए भी — "किस्त रुक
        जाएगी" वाला डर। ये चार बातें याद रख लीजिए, फिर कोई फंसा नहीं सकता:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li>
          <strong>OTP किसी को नहीं</strong> — न फोन पर, न सामने बैठे व्यक्ति को। eKYC आपके phone पर आए OTP
          से आप खुद करते हैं। जो OTP मांगे, वह मदद नहीं कर रहा।
        </li>
        <li>
          <strong>कोई link नहीं</strong> — SMS या WhatsApp में आए किसी link से eKYC नहीं होती। सिर्फ
          pmkisan.gov.in और official app, बस दो जगह।
        </li>
        <li>
          <strong>बैंक details का eKYC से कोई लेना-देना नहीं</strong> — इसमें खाता संख्या, ATM PIN या CVV की
          जरूरत ही नहीं पड़ती। मांगे जाने का सीधा संकेत ठगी है।
        </li>
        <li>
          <strong>"जल्दी करा दूंगा" का लालच नहीं</strong> — eKYC में जल्दी-देर का कोई खेल नहीं है; दर्ज होते
          ही YES दिख जाता है। पैसे लेकर तेज कराने का दावा झूठ है।
        </li>
      </ol>
      <p>
        और अगर किसी ने पहले से पैसे ले लिए हैं या OTP लेकर गड़बड़ की है, तो चुप न रहिए — शिकायत कैसे और कहां
        दर्ज होती है, यह{' '}
        <Link href="/articles/hi/helpline-shikayat">हेल्पलाइन वाले page पर खुलेगा</Link>। जितनी जल्दी
        दर्ज होगी, उतनी गुंजाइश बनेगी।
      </p>

      <Sec>OTP, Face Auth, फीस — जो बार-बार पूछा जाता है</Sec>
      <p className="text-xs text-[var(--color-text-muted)] italic mb-3">
        eKYC के रास्ते में आने वाली आम उलझनें — एक जगह।
      </p>
      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {FAQS.map(({ q, a }) => (
          <div
            key={q}
            className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-bg-alt)]"
          >
            <p className="font-semibold text-[var(--color-text)] text-sm mb-2">{q}</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        पूरी प्रक्रिया हमने{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        e-KYC flow और PM-KISAN GoI app से मिलाकर लिखी है; आधार में number update की जानकारी{' '}
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> से है।
        Portal के option-नाम समय-समय पर बदलते हैं (आखिरी मिलान:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')})।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">आगे किस page पर जाएं</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/PmKisanFaceAuthenticationEkyc">🤳 Face Auth eKYC App Guide</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanEkycOnline2026">🔐 eKYC Online — पूरी guide</Link>
          </li>
          <li>
            <Link href="/articles/hi/status-check-mobile-se">📱 मोबाइल से स्टेटस चेक</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanMobileNumberChangeUpdate">☎️ Mobile Number Update Guide</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
