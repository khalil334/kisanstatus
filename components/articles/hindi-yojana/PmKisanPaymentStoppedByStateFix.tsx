import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// Self-contained article — कोई shared component import नहीं (Rule 2)।
// Structure variant: clinic-style लक्षण→जांच→इलाज flow + Rx step-cards + quote-strip FAQ (Rule 3)।

const FAQS = [
  {
    q: 'क्या यह message आने का मतलब है कि मैं योजना से बाहर हो गया?',
    a: 'नहीं। इसका अर्थ है कि आपकी उस किस्त का भुगतान राज्य स्तर पर verification में रोका गया है — record से नाम कटना अलग बात है। गड़बड़ी सुधरते ही रुका हुआ पैसा आने की व्यवस्था है।',
  },
  {
    q: 'रुकी हुई किस्त का पैसा वापस मिलेगा या डूब गया?',
    a: 'सुधार के बाद रुकी किस्तें आमतौर पर अगली release के साथ जुड़कर आती हैं। कई किसानों को एक साथ ₹4,000 (दो किस्तें) आई हैं। शर्त यही है कि जिस वजह से रुका था, वह वजह पूरी तरह ठीक हो।',
  },
  {
    q: 'यह और "Rft Signed by State" — एक ही चीज हैं?',
    a: 'नहीं, बल्कि उल्टी दिशा के message हैं। "Rft Signed by State Government" अच्छा संकेत है — राज्य ने आपकी request आगे बढ़ा दी। "Payment stopped by state" रुकावट है — राज्य ने भुगतान रोका है।',
  },
  {
    q: 'गड़बड़ी कहां है, यह पक्का कैसे पता चलेगा?',
    a: 'खुद अंदाज़ा लगाने से बेहतर है दो जगह पूछना — portal की online grievance (Help Desk) में आधार से query डालें, और अपने ब्लॉक के कृषि अधिकारी/पटवारी से record दिखवाएं। जिला स्तर पर ही पता चलता है कि किस जांच में आवेदन अटका।',
  },
  {
    q: 'कितने दिन में ठीक हो जाता है?',
    a: 'कोई तय समय-सीमा नहीं है — यह इस पर निर्भर है कि गड़बड़ी क्या है और सुधार कितनी जल्दी दर्ज होता है। नाम की spelling का सुधार हफ्तों में हो जाता है; जमीन के record वाला मामला महीनों खींच सकता है।',
  },
  {
    q: 'क्या CSC वाला यह ठीक कर सकता है?',
    a: 'आंशिक रूप से — eKYC, correction form, नाम सुधार के काम CSC से हो जाते हैं। लेकिन land verification और राज्य स्तर की approval CSC के हाथ में नहीं है; उसके लिए कृषि विभाग/तहसील ही रास्ता है।',
  },
  {
    q: 'eKYC भी YES है, seeding भी ठीक है — फिर भी रोक क्यों?',
    a: 'तब मामला लगभग तय जमीन के record या पात्रता की जांच का है — वह हिस्सा जो online screen पर नहीं दिखता। ऐसी स्थिति में तहसील/ब्लॉक जाए बिना जड़ पकड़ में नहीं आती। खतौनी की ताजा नकल निकलवाकर देखें कि उसमें आपका नाम है या नहीं।',
  },
  {
    q: 'पति-पत्नी दोनों के आवेदन थे, दोनों रुक गए — क्या करें?',
    a: 'योजना का नियम है — एक परिवार (पति, पत्नी और नाबालिग बच्चे) से एक ही लाभार्थी। दोनों के आवेदन होने पर जांच में दोनों रुक सकते हैं। जिसकी जमीन record में है, उसका आवेदन रखें और दूसरे को voluntary surrender से हटवाएं — तब जांच आगे बढ़ती है।',
  },
  {
    q: 'शिकायत डाले हुए काफी समय हो गया, कोई जवाब नहीं — अब?',
    a: 'Portal की grievance में query number मिलता है — उसी से status देखते रहें। जवाब न आए तो सीढ़ी चढ़ें: पहले ब्लॉक का कृषि अधिकारी, फिर जिला कृषि अधिकारी, और फिर राज्य का Nodal Officer। हर बार पुरानी शिकायत का number साथ रखें, नई शिकायत बार-बार न डालें।',
  },
  {
    q: 'क्या बैंक जाकर यह ठीक हो सकता है?',
    a: 'सिर्फ तब, जब रुकावट बैंक से जुड़ी हो — खाता बंद हो गया हो या आधार seeding inactive हो। "Stopped by state" की जड़ ज्यादातर राज्य की जांच में होती है, बैंक में नहीं। पहले वजह पक्की करें, फिर उसी दरवाजे पर जाएं।',
  },
  {
    q: 'रोक हटने के बाद पैसा किस दिन आएगा?',
    a: 'किसी अलग दिन नहीं — रुकी राशि अगली सरकारी release के साथ आती है। सुधार आज दर्ज हो जाए तो भी भुगतान अगली किस्त जारी होने की तारीख पर ही आएगा, बीच में अलग से transfer नहीं होता।',
  },
  {
    q: 'कोई कह रहा है पैसे देकर रोक हटवा देगा — सच है?',
    a: 'सौ प्रतिशत ठगी है। राज्य की जांच किसी दलाल के पैसे से तेज नहीं होती, और शिकायत दर्ज करने का कोई शुल्क नहीं है। OTP, बैंक details या fees मांगने वाले से दूरी रखें।',
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

// Local building blocks — सब इसी file में (Rule 2)।
function Sec({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-6 mb-2 text-[var(--color-text)]">{children}</h3>;
}

function Rx({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-card)]">
      <div className="flex items-center gap-3 bg-[var(--color-bg-alt)] px-4 py-2.5 border-b border-[var(--color-border)]">
        <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white text-xs font-black flex items-center justify-center shrink-0">
          {step}
        </span>
        <span className="font-bold text-sm text-[var(--color-text)]">{title}</span>
      </div>
      <div className="px-4 py-3 text-sm text-[var(--color-text)] leading-relaxed">{children}</div>
    </div>
  );
}

function Aside({ tone, children }: { tone: 'info' | 'warn' | 'danger'; children: React.ReactNode }) {
  const cls =
    tone === 'info'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600'
      : tone === 'warn'
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
        : 'bg-red-50 dark:bg-red-900/20 border-red-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm leading-relaxed text-[var(--color-text)] ${cls}`}>
      {children}
    </div>
  );
}

export default function PmKisanPaymentStoppedByStateFix({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        Status check किया, और screen पर लिखा आया — <strong>&ldquo;Installment payment stopped by
        state&rdquo;</strong>। पढ़कर पहला खयाल यही आता है कि पैसा गया। रुकिए। यह message जितना डरावना दिखता है,
        उतना है नहीं — लेकिन इसे अनदेखा करने की चीज भी नहीं है। आइए बिना घुमाए समझते हैं कि system के अंदर
        हुआ क्या है, आपको करना क्या है, और किस दरवाजे पर जाने से काम बनेगा।
      </p>

      <Sec>इस line का असली अर्थ</Sec>
      <p>
        योजना में पैसा केंद्र सरकार भेजती है, पर लाभार्थियों की जांच-पड़ताल राज्य सरकार के जिम्मे है। हर किस्त
        से पहले राज्य अपने record से मिलान करता है। इस मिलान में आपके आवेदन में कोई खटका मिला — तो राज्य
        ने आपकी उस किस्त का भुगतान रोक दिया। यानी: <em>पैसा release हुआ था, पर आपके नाम की मंजूरी राज्य
        स्तर पर अटक गई</em>। यह अस्थायी रोक है, स्थायी निष्कासन नहीं।
      </p>
      <p>
        इसे एक डाकिये के उदाहरण से समझिए। केंद्र ने चिट्ठी (पैसा) भेज दी, पर गांव के डाकघर (राज्य) ने कहा —
        पते में गड़बड़ है, पहले पता ठीक कराओ, चिट्ठी यहीं रखी है। चिट्ठी लौटी नहीं है, फटी भी नहीं है — बस
        रुकी है। पता ठीक होते ही पहुंच जाएगी। &ldquo;Stopped by state&rdquo; ठीक यही स्थिति है।
      </p>

      <Aside tone="info">
        अच्छी खबर यह है कि जिस वजह से रोक लगी, वह सुधर जाए तो रुकी हुई राशि आगे की release के साथ मिलने
        की व्यवस्था है। असली काम एक ही है — वजह पकड़ना और सुधारना। नीचे इसी की पूरी विधि है।
      </Aside>

      <Sec>Status के message आपस में मत उलझाइए</Sec>
      <p>
        Portal पर मिलते-जुलते कई message दिखते हैं, और किसान अक्सर एक को दूसरा समझ बैठते हैं। फर्क साफ
        कर लीजिए, क्योंकि हर message का इलाज अलग है:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">Screen पर लिखा है</th>
              <th className="border border-[var(--color-border)] p-2 text-left">अर्थ</th>
              <th className="border border-[var(--color-border)] p-2 text-left">आपका काम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Rft Signed by State Government</td>
              <td className="border border-[var(--color-border)] p-2">राज्य ने आपकी request आगे बढ़ा दी — शुभ संकेत</td>
              <td className="border border-[var(--color-border)] p-2">इंतजार, कुछ नहीं करना</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">FTO is Generated</td>
              <td className="border border-[var(--color-border)] p-2">भुगतान का order बन चुका, transfer कतार में</td>
              <td className="border border-[var(--color-border)] p-2">इंतजार, खाता active रखें</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Payment stopped by state</td>
              <td className="border border-[var(--color-border)] p-2">राज्य की जांच में आवेदन अटका — रोक</td>
              <td className="border border-[var(--color-border)] p-2">वजह खोजें, सुधार कराएं (यह guide)</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Payment failed / returned</td>
              <td className="border border-[var(--color-border)] p-2">पैसा भेजा गया पर बैंक से लौट आया</td>
              <td className="border border-[var(--color-border)] p-2">बैंक/seeding ठीक कराएं</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ध्यान दीजिए — आखिरी दो में जमीन-आसमान का फर्क है। &ldquo;Failed&rdquo; में पैसा चलकर लौटा है (गड़बड़ी बैंक की
        तरफ), जबकि &ldquo;stopped by state&rdquo; में पैसा चला ही नहीं (गड़बड़ी राज्य की जांच में)। इसीलिए &ldquo;stopped&rdquo;
        वालों का बैंक के दस चक्कर लगाना अक्सर बेकार जाता है — दरवाजा ही गलत है।
      </p>

      <Sec>रोक की आम वजहें — गिनकर पांच</Sec>
      <ol className="my-4 space-y-3 pl-5 list-decimal text-sm leading-relaxed">
        <li>
          <strong>नाम का mismatch</strong> — आधार, बैंक खाते और आवेदन में नाम की spelling अलग-अलग है। एक
          अक्षर का फर्क भी जांच में पकड़ा जाता है।
        </li>
        <li>
          <strong>जमीन के record की जांच अधूरी</strong> — खतौनी में नाम नहीं, वरासत दर्ज नहीं, या land
          seeding pending है।
        </li>
        <li>
          <strong>अपात्रता का संदेह</strong> — record में आप income tax payer, सरकारी कर्मचारी या pension
          पाने वाले के रूप में flag हुए हैं।
        </li>
        <li>
          <strong>Documents अधूरे</strong> — eKYC बाकी है, या बैंक खाते की आधार seeding inactive है।
        </li>
        <li>
          <strong>दोहरा आवेदन</strong> — एक ही परिवार से एक से ज्यादा नाम, या एक ही जमीन पर दो आवेदन।
        </li>
      </ol>

      <Sub>अपनी वजह खुद कैसे छांटें — तीन सवाल</Sub>
      <p>
        तहसील जाने से पहले पांच मिनट खुद से ये तीन सवाल पूछ लीजिए, आधी छंटाई घर बैठे हो जाती है:
      </p>
      <p>
        <strong>सवाल 1 — status page पर eKYC के आगे क्या लिखा है?</strong> NO लिखा है तो ढूंढना बंद — यही
        पहली और संभावित वजह है। <Link href="/articles/hindi/ekyc-mobile-se">Phone से eKYC</Link> कर लीजिए,
        बाकी सवाल बाद में।
      </p>
      <p>
        <strong>सवाल 2 — आधार, passbook और आवेदन में नाम अक्षर-दर-अक्षर एक है?</strong> &ldquo;Ram Kumar&rdquo; और
        &ldquo;Ramkumar&rdquo; system की नजर में दो अलग आदमी हैं। &ldquo;Devi&rdquo; कहीं है, कहीं नहीं — यह भी mismatch है। फर्क
        मिले तो <Link href="/articles/PmKisanCorrectionForm2026">correction form</Link> ही रास्ता है।
      </p>
      <p>
        <strong>सवाल 3 — जमीन आपके नाम खतौनी में दर्ज है?</strong> पिता/दादा के नाम है और वरासत
        (mutation) नहीं चढ़ी, तो जांच यहीं अटकती है। यह इकलौती वजह है जो online ठीक नहीं होती — तहसील
        जाना ही पड़ता है।
      </p>
      <p>
        तीनों सवालों के जवाब ठीक निकलें, तब मानिए कि मामला अपात्रता की जांच या दोहरे आवेदन का है — और
        तब सीधे grievance + ब्लॉक कार्यालय वाला रास्ता पकड़िए, जो आगे लिखा है।
      </p>

      <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
        <p className="text-2xl mb-2">📆</p>
        <p className="font-black text-lg mb-1">Kist Ruki Hai? Pata Karo Kyun</p>
        <p className="text-green-100 text-sm mb-4">eKYC, bank seeding, land seeding check karo — 4 sawaal mein exact reason.</p>
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

      <Sec>अब इलाज — नुस्खा तीन कदम का</Sec>
      <Rx step="1" title="घर बैठे जांच">
        Status page पर eKYC का column देखें (NO है तो{' '}
        <Link href="/articles/hindi/ekyc-mobile-se">phone से eKYC</Link> कर लें), और myAadhaar पर bank
        seeding status देखें (<Link href="/articles/hindi/npci-aadhaar-seeding">तरीका यहां</Link>)। आधार और
        passbook आमने-सामने रखकर नाम मिलाएं — फर्क दिखे तो{' '}
        <Link href="/articles/PmKisanCorrectionForm2026">correction form</Link> से सुधार डालें।
      </Rx>
      <Rx step="2" title="Online शिकायत + query number">
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        Farmers Corner में Help Desk/Grievance का विकल्प है, आधार number से query register होती है। जो
        query number मिले, उसे कागज पर लिखकर रखिए — आगे की हर बातचीत में वही आपकी पहचान है। साथ
        में helpline <strong>155261</strong> पर भी बात कर लें। पूरा तरीका{' '}
        <Link href="/articles/hindi/helpline-shikayat">शिकायत guide</Link> में लिखा है।
      </Rx>
      <Rx step="3" title="ब्लॉक/तहसील — अक्सर निर्णायक">
        रोक <em>राज्य</em> ने लगाई है, तो ताला भी वहीं खुलेगा। अपने ब्लॉक के कृषि अधिकारी या तहसील में
        पटवारी से मिलिए और साफ पूछिए — मेरा आवेदन किस जांच में रुका है? जमीन का मामला हो तो खतौनी की
        नकल साथ ले जाएं। जिले से बात न बने तो{' '}
        <Link href="/articles/PmKisanStateNodalOfficerList">State Nodal Officer</Link> अगली सीढ़ी है।
      </Rx>

      <Sub>तहसील/ब्लॉक जाते समय थैले में क्या हो</Sub>
      <p>
        आधे किसान इस चूक में खाली हाथ लौटते हैं कि अधिकारी ने कागज मांगा और कागज घर पर था। एक ही चक्कर में
        काम निकालना है तो ये साथ रखिए:
      </p>
      <ul className="my-4 space-y-2 list-none pl-0">
        <li className="flex gap-2 text-sm leading-relaxed"><span className="shrink-0">🗂️</span><span>आधार कार्ड (original + एक photocopy)</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span className="shrink-0">🗂️</span><span>बैंक passbook का पहला पन्ना — जिस खाते में किस्त आती है</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span className="shrink-0">🗂️</span><span>खतौनी/खसरा की ताजा नकल — जमीन आपके नाम दिखनी चाहिए</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span className="shrink-0">🗂️</span><span>PM Kisan का registration number (status page से लिखकर या screenshot)</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span className="shrink-0">🗂️</span><span>Grievance का query number, अगर online शिकायत पहले डाल चुके हैं</span></li>
      </ul>
      <p>
        अधिकारी से मिलते समय एक ही साफ सवाल पूछिए — <em>&ldquo;मेरे registration number पर state verification
        में क्या objection लगा है?&rdquo;</em> गोल-मोल जवाब मिले तो विनम्रता से लिखित में देने या record दिखाने
        को कहिए। ज्यादातर block office में PFMS/portal की entry सामने खोलकर वजह बता दी जाती है।
      </p>

      <Aside tone="danger">
        एक जमीनी अनुभव: UP के एक किसान का भुगतान दो किस्तों से इसी message पर अटका था। वजह निकली —
        पिता के निधन के बाद वरासत खतौनी में दर्ज नहीं थी। तहसील में वरासत दर्ज होते ही अगली release में
        दोनों रुकी किस्तें एक साथ आ गईं। सबक: message portal पर दिखता है, पर जड़ अक्सर कागज में होती है।
      </Aside>

      <Sec>सुधार के बाद क्या होता है — और कब तक</Sec>
      <p>
        यह हिस्सा समझना जरूरी है, वरना सुधार के बाद भी रोज status देखकर घबराहट बनी रहती है। क्रम ऐसा
        चलता है: आपका सुधार (eKYC, correction, वरासत — जो भी था) पहले <em>record में दर्ज</em> होता है।
        फिर राज्य की अगली verification में आपका नाम दोबारा जांच से गुजरता है। जांच पास हुई तो नाम अगली
        beneficiary list में लौट आता है, और रुकी राशि उस release के साथ जुड़कर आती है।
      </p>
      <p>
        दो बातें पल्ले बांध लीजिए। पहली — सुधार और पैसे के बीच एक release का फासला होना सामान्य
        है; सुधार के अगले हफ्ते पैसा नहीं आता। दूसरी — सुधार के बाद status बदलकर पहले &ldquo;Rft Signed&rdquo; वाली
        अच्छी lines दिखने लगती हैं; यही संकेत है कि गाड़ी पटरी पर लौट आई। महीने में एक-दो बार status
        देखते रहिए, रोज देखने से कुछ जल्दी नहीं होता।
      </p>
      <p>
        और अगर दो release निकल जाएं, सुधार भी दर्ज हो और फिर भी वह message अटका रहे — तब मान लीजिए
        कि शिकायत को ऊपर की सीढ़ी चाहिए। पुराने query number के साथ जिला कृषि अधिकारी, और वहां से{' '}
        <Link href="/articles/PmKisanStateNodalOfficerList">Nodal Officer</Link> — यही chain है। हर स्तर
        पर लिखित/entry वाला proof बनवाते चलिए।
      </p>

      <Sec>दो पेचीदा मामले — जरा गहराई से</Sec>
      <Sub>मामला 1: अपात्रता का flag गलत लगा है</Sub>
      <p>
        योजना के नियम में income tax भरने वाले, सरकारी सेवा में रहे लोग (चतुर्थ श्रेणी/multi-tasking staff
        को छोड़कर), ₹10,000 से ऊपर pension पाने वाले retired कर्मचारी, और doctor-वकील-CA जैसे registered
        professional लाभ के दायरे से बाहर हैं। जांच में कभी-कभी यह flag गलत आदमी पर लग जाता है — हमनाम
        व्यक्ति tax भरता हो, या आपने किसी एक साल return भरा हो और बाद में बंद कर दिया हो।
      </p>
      <p>
        ऐसा लगे तो घबराने की जगह proof इकट्ठा कीजिए — आप tax नहीं भरते तो उसका आधार, सरकारी सेवा में
        नहीं हैं तो उसका। फिर ब्लॉक कार्यालय में लिखित आपत्ति दीजिए कि flag गलत लगा है, साथ में proof।
        यह मामला सिर्फ online शिकायत से शायद ही सुलझता है — कागज के साथ आमने-सामने की बात ही काम
        करती है। और अगर flag सही है, तो सच्चाई यह है कि रोक हटेगी नहीं — बल्कि पहले लिया पैसा वापस
        मांगा जा सकता है (<Link href="/articles/hindi/recovery-notice">recovery notice guide</Link> पढ़ें)।
      </p>
      <Sub>मामला 2: एक जमीन, दो आवेदन</Sub>
      <p>
        भाइयों में बंटवारा कागज पर नहीं चढ़ा, और दोनों ने एक ही खतौनी के आधार पर आवेदन कर दिया — यह
        स्थिति गांवों में बहुत आम है और जांच में दोनों आवेदन रोक देती है। इसका इलाज बंटवारे को record
        में चढ़वाना है, या आपसी सहमति से एक आवेदन रखकर दूसरा हटवाना। जब तक record में दो दावे दिखेंगे,
        राज्य की जांच किसी एक को भी पास नहीं करेगी। यही बात पति-पत्नी दोनों के आवेदन पर लागू होती है —
        नियम से लाभ परिवार में एक को ही मिलता है।
      </p>

      <Sec>किन गलतियों से बचें</Sec>
      <p>
        <strong>बार-बार नई शिकायत डालना।</strong> हर नई शिकायत नई कतार में लगती है। एक query number लेकर
        उसी पर follow-up कीजिए — यह ज्यादा तेज चलता है।
      </p>
      <p>
        <strong>बैंक बदल लेना।</strong> &ldquo;पैसा नहीं आ रहा तो खाता ही बदल दूं&rdquo; — यह &ldquo;stopped by state&rdquo; में
        उल्टा पड़ता है। रोक राज्य की जांच में है; नया खाता जुड़वाने से एक और verification की परत बढ़ जाती
        है। खाता तभी छेड़ें जब वजह पक्के तौर पर बैंक की निकली हो।
      </p>
      <p>
        <strong>सिर्फ helpline के भरोसे बैठना।</strong> Helpline शिकायत दर्ज कर देती है, पर राज्य की जांच
        का ताला जिले/ब्लॉक में खुलता है। Phone और चक्कर — दोनों साथ चलाइए।
      </p>

      <Aside tone="warn">
        &ldquo;Payment stopped हटवाने&rdquo; के नाम पर पैसे मांगने वाले बिचौलियों से सावधान। न शिकायत दर्ज करने का
        कोई शुल्क है, न राज्य की जांच किसी को पैसे देकर तेज होती है। जो व्यक्ति OTP या बैंक details मांगे,
        समझ जाइए मामला ठगी का है। सरकारी काम सिर्फ सरकारी खिड़की से — portal, helpline 155261, या
        ब्लॉक/तहसील कार्यालय।
      </Aside>

      <div className="my-5 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)] shadow-sm">
        <div className="bg-green-50 dark:bg-green-900/20 border-b border-[var(--color-border)] px-4 py-2.5">
          <span className="text-green-700 dark:text-green-300 text-xs font-bold">🏛️ Official portal:</span>
        </div>
        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div>
            <p className="font-bold text-[var(--color-text)] text-sm">PM Kisan Portal — Know Your Status</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Government of India — pmkisan.gov.in</p>
          </div>
          <a
            href="https://pmkisan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
          >
            pmkisan.gov.in खोलें → Farmers Corner ↗
          </a>
        </div>
      </div>

      <Sec>राज्य-दर-राज्य फर्क — किससे पूछें, कहां जाएं</Sec>
      <p>
        जांच राज्य करता है, तो दफ्तरों के नाम और काम का बंटवारा हर जगह एक सा नहीं। UP में जमीन का
        काम तहसील (लेखपाल/पटवारी) देखता है और योजना का सत्यापन कृषि विभाग; Bihar में कृषि समन्वयक
        (Kisan Salahkar) गांव स्तर पर पहला संपर्क है; MP-Rajasthan में पटवारी और ग्राम सेवक दोनों से
        बात बनती है। नाम जो भी हो, सूत्र एक है — पहले गांव/ब्लॉक स्तर का कृषिकर्मी, फिर जिला कृषि
        अधिकारी, और आखिर में राज्य का Nodal Officer। सीढ़ी लांघकर ऊपर मत जाइए — Nodal Officer के
        दफ्तर से मामला घूमकर फिर जिले के पास ही आता है, बस समय ज्यादा लगता है।
      </p>
      <p>
        एक और काम की बात — कई राज्य अपने portal (UP का upagripardarshi या राज्य कृषि विभाग की
        site) पर भी लाभार्थी सूची दिखाते हैं। वहां अपना नाम खोजकर देख लीजिए — राज्य की सूची में नाम
        है पर केंद्र के portal पर रोक है, तो मामला दोनों record के मिलान का है और यही बात grievance में
        लिखने से सुनवाई तेज होती है। राज्य योजनाओं के लाभ (<Link href="/articles/hindi/namo-shetkari-yojana">Maharashtra की नमो शेतकरी</Link> या{' '}
        <Link href="/articles/hindi/mp-kisan-kalyan-yojana">MP की किसान कल्याण</Link>) अक्सर PM Kisan की
        लिस्ट से जुड़े होते हैं — यहां रोक लगी रही तो वहां का पैसा भी अटक सकता है। एक सुधार से दोनों
        दरवाजे खुलते हैं — टालिए मत।
      </p>

      <Sec>आखिर में — पूरी बात का सार</Sec>
      <p>
        &ldquo;Installment payment stopped by state&rdquo; निष्कासन नहीं, राज्य की जांच में लगी अस्थायी रोक
        है। वजह पांच में से कोई एक होती है — नाम mismatch, जमीन record, अपात्रता का flag, अधूरी
        eKYC/seeding, या दोहरा आवेदन। घर बैठे eKYC-नाम-seeding जांचिए, portal पर grievance डालकर query
        number संभालिए, और कागज लेकर ब्लॉक/तहसील में पूछिए कि objection क्या है। सुधार दर्ज होने के बाद
        रुकी किस्तें अगली release के साथ जुड़कर आती हैं — पैसा डूबता नहीं, बशर्ते जड़ ठीक की जाए। दलालों
        को पैसे देना समाधान नहीं, ठगी है।
      </p>

      <p>
        आखिरी बात — यह पूरा काम धैरज का है, पर नामुमकिन बिल्कुल नहीं। जिन किसानों की रोक लंबी खिंचती
        है, उनमें ज्यादातर वे होते हैं जो या तो वजह पकड़े बिना इंतजार करते रहे, या गलत दरवाजे (सिर्फ बैंक,
        सिर्फ helpline) खटखटाते रहे। जो क्रम ऊपर लिखा है — घर बैठे जांच, online शिकायत, फिर कागज लेकर
        ब्लॉक/तहसील — उसी क्रम में चलिए, हर कदम का proof संभालते चलिए, और release के मौसम में status
        पर नजर रखिए। नीचे के सवाल-जवाब में वे उलझनें हैं जो किसान अक्सर पूछते हैं।
      </p>

      <Sec>रुकी किस्त पर किसानों की आम उलझनें — छोटे जवाब</Sec>
      <div className="my-4 space-y-5">
        {FAQS.map((f) => (
          <div key={f.q} className="border-l-4 border-[var(--color-primary)] pl-4">
            <p className="font-semibold text-[var(--color-text)] text-sm mb-1">❓ {f.q}</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        भुगतान और status की प्रक्रिया की जानकारी{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (कृषि
        एवं किसान कल्याण मंत्रालय) से ली गई है, और DBT भुगतान के ढांचे के लिए{' '}
        <a href="https://dbtbharat.gov.in" target="_blank" rel="noopener noreferrer">dbtbharat.gov.in</a> देखा
        गया। राज्य-स्तरीय verification राज्य-दर-राज्य थोड़ा अलग चलता है — इस page की जानकारी{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} तक की है।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">🔗 इस विषय से जुड़े और page</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li><Link href="/articles/PmKisanCorrectionForm2026">📝 Correction Form Guide</Link></li>
          <li><Link href="/articles/hindi/helpline-shikayat">📞 हेल्पलाइन और शिकायत</Link></li>
          <li><Link href="/articles/hindi/npci-aadhaar-seeding">🏦 NPCI आधार सीडिंग</Link></li>
          <li><Link href="/articles/PmKisanStateNodalOfficerList">🏛️ State Nodal Officer List</Link></li>
        </ul>
      </div>
    </>
  );
}
