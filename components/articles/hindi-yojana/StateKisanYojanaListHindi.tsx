import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'PM Kisan और राज्य की योजना — दोनों का पैसा एक साथ मिल सकता है?',
    a: 'हां, ज्यादातर राज्यों में दोनों साथ चलती हैं। केंद्र अपना ₹6,000 भेजता है और राज्य अपना हिस्सा उसके ऊपर जोड़ता है। दोनों के पोर्टल अलग हैं, किस्तों की तारीखें अलग हैं, और एक का रुकना दूसरे को अपने आप नहीं रोकता। बस इतना ध्यान रखिए कि MP और महाराष्ट्र जैसे राज्यों में सूची PM Kisan के डेटा से ही बनती है — वहां केंद्र वाला रिकॉर्ड बिगड़ा तो राज्य की किस्त भी अटक जाती है।',
  },
  {
    q: 'सबसे ज्यादा पैसा किस राज्य में मिलता है?',
    a: 'फिक्स रकम वाली योजनाओं में आंध्र प्रदेश की अन्नदाता सुखीभवा सबसे आगे है — केंद्र का हिस्सा मिलाकर साल का ₹20,000 तक। लेकिन तेलंगाना का हिसाब प्रति एकड़ चलता है (₹12,000 प्रति एकड़ सालाना), इसलिए तीन एकड़ वाले किसान को वहां ₹36,000 बनते हैं — फिक्स रकम वाले किसी भी राज्य से ज्यादा। सीधा मुकाबला मुमकिन नहीं, क्योंकि हर राज्य का मॉडल अपना है।',
  },
  {
    q: 'मेरा राज्य (UP/बिहार/हरियाणा/पंजाब) इस सूची में क्यों नहीं है?',
    a: 'क्योंकि वहां PM Kisan जैसी अलग सालाना नकद-सहायता योजना अभी नहीं चल रही। इसका मतलब यह नहीं कि कुछ नहीं मिलता — बिहार में डीजल अनुदान और कृषि इनपुट अनुदान हैं, हरियाणा में MSP खरीद का मेरी फसल मेरा ब्योरा सिस्टम है, UP में पुरानी कर्ज राहत के मामले निपट रहे हैं, गुजरात में iKhedut से सब्सिडी मिलती है। मदद का रास्ता अलग है, बंद नहीं है।',
  },
  {
    q: 'राज्य बदलकर दूसरी जगह बस गया हूं — पुरानी किस्त मिलती रहेगी?',
    a: 'नहीं। हर राज्य की योजना में वहां का निवासी होना और वहीं जमीन होना जरूरी शर्त है। शिफ्ट होते ही पुरानी जगह की पात्रता खत्म हो जाती है। नए राज्य में वहां के नियम से दोबारा पंजीकरण करना पड़ता है। PM Kisan पर इस बदलाव का असर नहीं पड़ता — वह पूरे देश की योजना है, बस रिकॉर्ड में पता अपडेट करवा लीजिए।',
  },
  {
    q: 'बटाईदार (किराए पर खेती करने वाले) को भी राज्य की योजना का पैसा मिलता है?',
    a: 'ज्यादातर राज्यों में नहीं, क्योंकि सूची जमीन के रिकॉर्ड से बनती है। आंध्र प्रदेश इसका बड़ा अपवाद है — वहां CCRC कार्ड वाले पंजीकृत बटाईदार भी अन्नदाता सुखीभवा में आते हैं। तेलंगाना में पंजीकृत किरायेदार किसान पात्र हैं, और भूमिहीन खेत-मजदूरों के लिए इंदिराम्मा आत्मीय भरोसा नाम का अलग ट्रैक है। ओडिशा में भी भूमिहीन परिवारों को ₹12,500 का अलग ट्रैक मिलता है।',
  },
  {
    q: 'राज्य की योजना के लिए अलग से फॉर्म भरना पड़ेगा या अपने आप नाम जुड़ जाएगा?',
    a: 'राज्य पर निर्भर है। MP और महाराष्ट्र में कुछ नहीं करना — सूची PM Kisan के डेटा से अपने आप बनती है। राजस्थान में जन आधार जुड़ा होना चाहिए। पश्चिम बंगाल, ओडिशा और आंध्र प्रदेश में अपना अलग पंजीकरण है — वहां PM Kisan में होना काफी नहीं, राज्य के पोर्टल या कैंप में नाम खुद जुड़वाना पड़ता है।',
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

const STATES = [
  {
    state: 'मध्य प्रदेश',
    scheme: 'CM किसान कल्याण योजना',
    amount: '₹6,000 / साल (3 × ₹2,000)',
    total: '₹12,000',
    guide: '/rajya-yojana/mp-kisan-kalyan-yojana-kist-status',
  },
  {
    state: 'राजस्थान',
    scheme: 'मुख्यमंत्री किसान सम्मान निधि',
    amount: '₹3,000 / साल (3 × ₹1,000)',
    total: '₹9,000',
    guide: '/rajya-yojana/rajasthan-kisan-samman-nidhi-9000',
  },
  {
    state: 'महाराष्ट्र',
    scheme: 'नमो शेतकरी महासन्मान निधि',
    amount: '₹6,000 / साल (2 × ₹3,000)',
    total: '₹12,000',
    guide: '/rajya-yojana/namo-shetkari-yojana-status-check-2026',
  },
  {
    state: 'आंध्र प्रदेश',
    scheme: 'अन्नदाता सुखीभवा',
    amount: '₹14,000 तक राज्य का हिस्सा',
    total: '₹20,000 तक',
    guide: '/rajya-yojana/annadata-sukhibhava-status-check-2026',
  },
  {
    state: 'तेलंगाना',
    scheme: 'रायतु भरोसा',
    amount: '₹12,000 / एकड़ / साल',
    total: 'जमीन के हिसाब से',
    guide: '/rajya-yojana/rythu-bharosa-status-check-2026',
  },
  {
    state: 'पश्चिम बंगाल',
    scheme: 'कृषक बंधु',
    amount: '₹4,000–₹10,000 / साल (जमीन पर स्लैब)',
    total: '₹16,000 तक',
    guide: '/rajya-yojana/krishak-bandhu-status-check-2026',
  },
  {
    state: 'ओडिशा',
    scheme: 'CM किसान योजना',
    amount: '₹4,000 / साल (भूमिहीन: ₹12,500)',
    total: '₹10,000',
    guide: '/rajya-yojana/odisha-cm-kisan-status-check-2026',
  },
  {
    state: 'छत्तीसगढ़',
    scheme: 'कृषक उन्नति योजना',
    amount: 'धान खरीदी पर अंतर राशि (फिक्स नहीं)',
    total: 'बिक्री के हिसाब से',
    guide: '/rajya-yojana/krishak-unnati-yojana-status-check-2026',
  },
];

function Hd({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-3 pb-2 border-b-2 border-green-200 dark:border-green-900">
      {children}
    </h2>
  );
}

function SubHd({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold text-[var(--color-text)] mt-6 mb-2">{children}</h3>;
}

function Note({ tone, children }: { tone: 'green' | 'amber' | 'red'; children: React.ReactNode }) {
  const cls =
    tone === 'green'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600'
      : tone === 'red'
        ? 'bg-red-50 dark:bg-red-900/20 border-red-600'
        : 'bg-amber-50 dark:bg-amber-900/20 border-amber-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm leading-relaxed text-[var(--color-text)] ${cls}`}>
      {children}
    </div>
  );
}

const Td = ({ children, strong }: { children: React.ReactNode; strong?: boolean }) => (
  <td className={`border border-[var(--color-border)] px-3 py-2 ${strong ? 'font-medium' : ''}`}>{children}</td>
);

export default function StateKisanYojanaListHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        PM Kisan का ₹6,000 तो पूरे देश में एक जैसा है। असली फर्क इस बात से पड़ता है कि
        आपका खेत किस राज्य की सीमा के अंदर है। राजस्थान का किसान साल में ₹9,000 तक पहुंचता
        है, मध्य प्रदेश और महाराष्ट्र का ₹12,000, और आंध्र प्रदेश का ₹20,000 तक। जमीन वही,
        मेहनत वही — रकम में इतना अंतर सिर्फ नक्शे की लकीर से।
      </p>

      <p>
        यह पेज उसी अंतर का पूरा हिसाब एक जगह रखता है: किस राज्य में कौन सी योजना, कितना
        पैसा, और स्थिति देखने का सीधा रास्ता। हर राज्य का अलग विस्तृत गाइड भी है — लिंक
        टेबल में और हर सेक्शन में मिलेगा। शुरुआत करने से पहले एक बात साफ कर दें: नीचे का
        हर आंकड़ा उस राज्य की सरकारी घोषणा या आधिकारिक पोर्टल से मिलाया गया है, कोई भी
        नंबर WhatsApp फॉरवर्ड से नहीं लिया गया।
      </p>

      <Hd>पूरी तस्वीर एक टेबल में — राज्य, योजना, रकम</Hd>

      <p>
        &ldquo;कुल सालाना&rdquo; वाले कॉलम में PM Kisan का ₹6,000 जोड़कर लिखा है, क्योंकि
        किसान के खाते में साल भर में यही जोड़ पहुंचता है।
      </p>

      <div className="my-5 overflow-x-auto not-prose">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-green-50 dark:bg-green-900/30">
              <Td strong>राज्य</Td>
              <Td strong>योजना</Td>
              <Td strong>राज्य का हिस्सा</Td>
              <Td strong>कुल सालाना (PM Kisan मिलाकर)</Td>
              <Td strong>गाइड</Td>
            </tr>
          </thead>
          <tbody>
            {STATES.map((s) => (
              <tr key={s.state}>
                <Td strong>{s.state}</Td>
                <Td>{s.scheme}</Td>
                <Td>{s.amount}</Td>
                <Td>{s.total}</Td>
                <Td>
                  <Link href={s.guide} className="text-green-700 dark:text-green-400 underline">
                    पूरा गाइड
                  </Link>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Note tone="amber">
        <strong>ध्यान रखिए:</strong> राज्य योजनाओं की रकम कैबिनेट के फैसलों से बदलती रहती
        है, और इंटरनेट पर पुराने आंकड़े सालों तक घूमते रहते हैं। किसी भी बड़े फैसले से पहले
        अपने राज्य के आधिकारिक पोर्टल पर मौजूदा रकम एक बार खुद देख लीजिए।
      </Note>

      <Hd>हर राज्य का छोटा हिसाब — कौन, कितना, कैसे</Hd>

      <SubHd>मध्य प्रदेश — मुख्यमंत्री किसान कल्याण योजना</SubHd>
      <p>
        राज्य केंद्र के बराबर ₹6,000 सालाना देता है, तीन किस्तों में। अलग आवेदन नहीं देना
        पड़ता — सूची PM Kisan के डेटा से बनती है, इसलिए वहां का रिकॉर्ड जिंदा रहना ही असली
        शर्त है। स्थिति SAARA पोर्टल (saara.mp.gov.in) पर दिखती है और गिरदावरी का रिकॉर्ड
        यहां खास मायने रखता है। पूरा तरीका{' '}
        <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">MP वाले गाइड</Link> में
        है, और इसका हिंदी संस्करण <Link href="/articles/hi/mp-kisan-kalyan-yojana">यहां</Link>।
      </p>

      <SubHd>राजस्थान — मुख्यमंत्री किसान सम्मान निधि</SubHd>
      <p>
        जून 2026 में मुख्यमंत्री कार्यालय की घोषणा के मुताबिक राज्य का हिस्सा बढ़कर ₹3,000
        सालाना हो गया — यानी केंद्र के ₹6,000 मिलाकर कुल ₹9,000। यहां का दरवाजा जन आधार
        है; वह बैंक खाते से जुड़ा नहीं तो किश्त अटकती है। किस्तें अक्सर PM Kisan की किस्त
        के साथ ही, अलग एंट्री में आती हैं। पूरा हिसाब{' '}
        <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">राजस्थान गाइड</Link> और
        उसके <Link href="/articles/hi/rajasthan-kisan-samman-nidhi">हिंदी संस्करण</Link> में।
      </p>

      <SubHd>महाराष्ट्र — नमो शेतकरी महासन्मान निधि</SubHd>
      <p>
        PM Kisan के पात्र लाभार्थी को राज्य ₹6,000 और देता है — कुल ₹12,000 सालाना। अलग
        आवेदन नहीं, सूची केंद्रीय डेटा से बनती है। यहां का सबसे जरूरी कागज 7/12 उतारा है।
        स्थिति देखने का रास्ता{' '}
        <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">नमो शेतकरी गाइड</Link>{' '}
        में है (हिंदी में <Link href="/articles/hi/namo-shetkari-yojana">यहां पढ़िए</Link>)।
      </p>

      <SubHd>आंध्र प्रदेश — अन्नदाता सुखीभवा</SubHd>
      <p>
        फिक्स रकम वाली योजनाओं में देश का सबसे बड़ा पैकेज — केंद्र का हिस्सा मिलाकर साल का
        ₹20,000 तक। और इसकी सबसे अलग बात: CCRC कार्ड वाले पंजीकृत बटाईदार भी इसमें आते
        हैं, जो लगभग किसी और राज्य में नहीं होता। किस्तों का सीजन-वार हिसाब{' '}
        <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">AP गाइड</Link> में
        है, हिंदी में <Link href="/articles/hi/annadata-sukhibhava-status">यहां</Link>।
      </p>

      <SubHd>तेलंगाना — रायतु भरोसा</SubHd>
      <p>
        यहां हिसाब प्रति एकड़ चलता है: हर एकड़ खेती-योग्य जमीन पर ₹12,000 सालाना — ₹6,000
        खरीफ में, ₹6,000 रबी में। दो एकड़ वाले को चार एकड़ वाले से आधा मिलता है, इसलिए गांव
        में हर खाते की रकम अलग दिखती है। भूमिहीन खेत-मजदूरों के लिए इंदिराम्मा आत्मीय
        भरोसा नाम का अलग ट्रैक भी है। जमीन का रिकॉर्ड (भू भारती) यहां सब कुछ तय करता है —
        पूरा हिसाब <Link href="/rajya-yojana/rythu-bharosa-status-check-2026">रायतु भरोसा गाइड</Link>{' '}
        और <Link href="/articles/hi/rythu-bharosa-status">हिंदी गाइड</Link> में।
      </p>

      <SubHd>पश्चिम बंगाल — कृषक बंधु</SubHd>
      <p>
        जमीन के स्लैब पर ₹4,000 से ₹10,000 सालाना, दो किस्तों में (खरीफ + रबी)। पहचान का
        मुख्य जरिया आधार नहीं, वोटर कार्ड (EPIC) है — यह पूरे देश में अनोखा सिस्टम है। साथ
        में ₹2 लाख का डेथ बेनिफिट भी जुड़ा है। स्लैब का पूरा गणित और EPIC से स्थिति देखने
        का तरीका <Link href="/rajya-yojana/krishak-bandhu-status-check-2026">कृषक बंधु गाइड</Link>{' '}
        में, हिंदी में <Link href="/articles/hi/krishak-bandhu-status">यहां</Link>।
      </p>

      <SubHd>ओडिशा — CM किसान योजना</SubHd>
      <p>
        KALIA की जगह आई योजना। छोटे-सीमांत किसान को ₹4,000 सालाना (नुआखाई + अक्षय तृतीया
        पर), और भूमिहीन कृषि परिवारों के लिए अलग ट्रैक पर ₹12,500 — भूमिहीन को पैसा देने
        वाला यह गिने-चुने राज्यों में है। दोनों ट्रैक की सूचियां अलग होती हैं, यह फर्क
        समझना यहां सबसे जरूरी है। पूरा तरीका{' '}
        <Link href="/rajya-yojana/odisha-cm-kisan-status-check-2026">ओडिशा गाइड</Link> में,
        हिंदी में <Link href="/articles/hi/odisha-cm-kisan-status">यहां</Link>।
      </p>

      <SubHd>छत्तीसगढ़ — कृषक उन्नति योजना</SubHd>
      <p>
        इस सूची की सबसे हटके योजना — फिक्स सालाना रकम नहीं मिलती। पैसा धान की सरकारी खरीदी
        से जुड़ा है: MSP और ₹3,100 प्रति क्विंटल के बीच की अंतर राशि किसान के खाते में आती
        है, यानी जितना धान बेचा, उतना हिसाब। खरीफ 2026 से धान छोड़कर दूसरी फसल लगाने पर
        ₹15,000 प्रति एकड़ इनपुट सहायता का नया रास्ता भी खुला है। पूरा गणित{' '}
        <Link href="/rajya-yojana/krishak-unnati-yojana-status-check-2026">कृषक उन्नति गाइड</Link>{' '}
        में है।
      </p>

      <Hd>जिन राज्यों में सीधी नकद योजना नहीं — वहां क्या है?</Hd>

      <p>
        उत्तर प्रदेश, बिहार, हरियाणा, पंजाब, गुजरात, कर्नाटक जैसे कई बड़े राज्यों में PM
        Kisan जैसी अलग सालाना नकद-सहायता योजना अभी नहीं चल रही। मेरे एक परिचित बिहार के
        हैं — पड़ोसी राज्य की किस्त की खबर पढ़कर हर बार पूछते हैं कि हमारा नंबर कब आएगा।
        जवाब यह है कि इन राज्यों में मदद का मॉडल ही अलग है:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>बिहार</strong> — DBT Agriculture पोर्टल एक छाता है: डीजल अनुदान (₹750
          प्रति एकड़ प्रति सिंचाई तक), कृषि इनपुट अनुदान, बीज अनुदान — सब एक ही 13 अंकों के
          पंजीकरण से। पूरा सिस्टम{' '}
          <Link href="/rajya-yojana/bihar-kisan-registration-status-check-2026">बिहार गाइड</Link>{' '}
          में समझाया है।
        </li>
        <li>
          <strong>हरियाणा</strong> — नकद योजना की जगह MSP खरीद का मजबूत सिस्टम: मेरी फसल
          मेरा ब्योरा पर पंजीकरण के बिना मंडी में फसल नहीं बिकती। तरीका{' '}
          <Link href="/rajya-yojana/meri-fasal-mera-byora-status-check-2026">हरियाणा गाइड</Link>{' '}
          में।
        </li>
        <li>
          <strong>कर्नाटक</strong> — फसल नुकसान पर परिहार (मुआवजा) सिस्टम चलता है, FRUITS
          ID से। विस्तार{' '}
          <Link href="/rajya-yojana/parihara-payment-status-check-2026">परिहार गाइड</Link> में।
        </li>
        <li>
          <strong>उत्तर प्रदेश</strong> — 2017 की किसान कर्ज राहत (₹1 लाख तक माफी) के
          बचे मामले निपट रहे हैं; नई सालाना नकद योजना नहीं है। ईमानदार हिसाब{' '}
          <Link href="/rajya-yojana/up-kisan-karj-rahat-list-2026">UP गाइड</Link> में।
        </li>
        <li>
          <strong>गुजरात</strong> — iKhedut पोर्टल से ट्रैक्टर, ड्रिप, मशीनरी जैसी दर्जनों
          सब्सिडी मिलती हैं — सालाना नकद नहीं, आवेदन-आधारित सहायता। पूरा तरीका{' '}
          <Link href="/rajya-yojana/ikhedut-portal-status-check-2026">iKhedut गाइड</Link> में।
        </li>
      </ul>

      <p>
        इन राज्यों के किसान के लिए सलाह दो लाइन की है: PM Kisan का रिकॉर्ड दुरुस्त रखिए
        (यही आधार है — <Link href="/articles/PmKisanMasterGuide2026">मास्टर गाइड यहां</Link>),
        और अपने कृषि विभाग की साइट पर चालू योजनाओं का पेज देखते रहिए। नए बजट के साथ नई
        योजनाएं आती रहती हैं — जब भी किसी राज्य में नई नकद-सहायता योजना शुरू होगी, हम यह
        पेज अपडेट कर देंगे।
      </p>

      <Hd>राज्य का पैसा केंद्र के ऊपर कैसे जुड़ता है — तीन बातें</Hd>

      <p>
        पूरे सिस्टम को समझने की चाबी एक ही है: राज्य की योजना PM Kisan की जगह नहीं लेती,
        उसके ऊपर जुड़ती है। केंद्र अपना ₹6,000 तीन किस्तों में भेजता है; राज्य अपना हिस्सा
        अपने शेड्यूल पर, अपनी ट्रेजरी से भेजता है। दो अलग मशीनें, एक ही खाता।
      </p>

      <p>
        इसी से तीन बातें निकलती हैं। पहली — दोनों की किस्तें कभी एक साथ नहीं आतीं; 15–30
        दिन का फर्क आम है, घबराने की बात नहीं। दूसरी — एक रुक जाए तो दूसरी अपने आप नहीं
        रुकती; दोनों के कारण अपने-अपने होते हैं। तीसरी — MP और महाराष्ट्र जैसे राज्यों में
        सूची केंद्रीय डेटा से बनती है, इसलिए वहां e-KYC का एक्सपायर होना दोनों किस्तें एक
        साथ रोक देता है। डबल नुकसान।
      </p>

      <p>
        मैंने खुद बैंक स्टेटमेंट में यह फर्क देखा है — PM Kisan का क्रेडिट
        &ldquo;PMKISAN&rdquo; के रेफरेंस से आता है और राज्य वाला अलग एंट्री में। महीने में
        दो अलग क्रेडिट दिखना बिल्कुल सामान्य है, इसे गलती मत समझिए।
      </p>

      <Hd>जांच से पहले तीन चीजें — राज्य कोई भी हो</Hd>

      <p>
        पोर्टल चाहे कोई भी हो, पैसा अटकने की वजहें लगभग वही रहती हैं। पहली: बैंक खाता NPCI
        से आधार-सीड हो — फोटोकॉपी जमा करना काफी नहीं, शाखा से सीधा पूछिए कि सीडिंग हुई या
        नहीं। दूसरी: आधार, बैंक और जमीन के रिकॉर्ड में नाम की स्पेलिंग एक जैसी हो। तीसरी:
        e-KYC चालू हालत में हो — यह वाली सबसे धोका देती है, स्क्रीन पर सब हरा दिखता है और
        पैसा फिर भी नहीं आता। पैसा अटके तो पहले{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">पेमेंट फेल होने वाला गाइड</Link>{' '}
        देख लीजिए — ज्यादातर मामले वहीं सुलझ जाते हैं।
      </p>

      <Note tone="red">
        <strong>फ्रॉड से बचिए:</strong> कोई भी सरकारी योजना पंजीकरण या स्थिति ठीक करने के
        नाम पर पैसा नहीं मांगती। &ldquo;फीस&rdquo; मांगने वाला हर आदमी फ्रॉड है। सरकारी
        घोषणा हमेशा .gov.in या .nic.in वाले पते पर मिलती है — WhatsApp पर घूमती
        &ldquo;नई योजना&rdquo; की खबर को पहले अपने राज्य की सरकारी साइट से मिलाइए।
      </Note>

      <Hd>अक्सर पूछे जाने वाले सवाल</Hd>

      <div className="space-y-3 not-prose mb-8">
        {FAQS.map(({ q, a }) => (
          <details
            key={q}
            className="border border-[var(--color-border)] rounded-xl overflow-hidden group"
          >
            <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
              <span>{q}</span>
              <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
              {a}
            </div>
          </details>
        ))}
      </div>

      <p>
        यह लेख{' '}
        <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
          State Kisan Yojana List (Hinglish)
        </Link>{' '}
        का हिंदी संस्करण है। PM Kisan की पूरी जानकारी के लिए{' '}
        <Link href="/articles/PmKisanMasterGuide2026">मास्टर गाइड</Link> पढ़िए।
      </p>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          रकम और नियम हर राज्य के कैबिनेट फैसलों से बदल सकते हैं। अंतिम जानकारी के लिए अपने
          राज्य की आधिकारिक साइट या कृषि कार्यालय से पुष्टि करें।
        </p>
      </div>
    </>
  );
}
