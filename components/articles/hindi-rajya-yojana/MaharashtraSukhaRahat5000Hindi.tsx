import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { buildFaqSchema } from '@/lib/faq-schema';
import CountdownRedirectButton from '@/components/CountdownRedirectButton';

const FAQS = [
  {
    q: 'मेरा ₹5,000 कब आएगा? कोई तारीख है?',
    a: 'कोई एक तारीख नहीं है। 5 नवंबर तक 87,45,669 किसानों को ₹4,372.83 करोड़ मिल चुका था, और बाकी को पैसा अभी भेजा जा रहा है। विभाग ने कहा है कि बैंक खाते की तकनीकी दिक्कत से कुछ भुगतान रुके हैं, और कोई पात्र किसान छूटेगा नहीं। अपनी पासबुक देखिए — SMS का इंतजार मत कीजिए।',
  },
  {
    q: 'मेरी फसल 33% से कम खराब हुई। क्या मुझे कुछ नहीं मिलेगा?',
    a: 'इस ₹5,000 वाले अग्रिम के लिए 33% से ज्यादा नुकसान की शर्त है। कम नुकसान वालों को यह अग्रिम नहीं मिलेगा। लेकिन आखिरी मुआवजा अलग से आएगा, जब सर्वे पूरा होगा — उसकी दर NDRF की प्रति-हेक्टेयर दर से तय होगी। अपने तलाठी से पूछिए कि आपके गांव का सर्वे किस हालत में है।',
  },
  {
    q: 'मेरे पास AgriStack Farmer ID नहीं है। क्या ₹5,000 नहीं मिलेगा?',
    a: 'मिलेगा, अगर बाकी शर्तें पूरी हैं। वन अधिकार वाले किसान जिनके पास Farmer ID नहीं है, उन्हें eKYC के आधार पर अग्रिम दिया जा रहा है। 1 नवंबर 2025 से 27 अक्टूबर 2026 के बीच किसी भी सरकारी योजना के लिए eKYC करवा चुके किसानों को दोबारा eKYC नहीं करवानी।',
  },
  {
    q: 'क्या ₹5,000 PM Kisan की किस्त है?',
    a: 'नहीं, बिल्कुल नहीं। यह महाराष्ट्र सरकार का एक बार का सूखा राहत अग्रिम है, PM Kisan से इसका कोई लेना-देना नहीं है। PM Kisan की किस्तें अपने समय पर अलग से आती रहेंगी।',
  },
  {
    q: 'मैं सहकारी शक्कर कारखाने में काम करता हूं। क्या मैं बाहर हूं?',
    a: 'अगर आप कारखाने के मौसमी मजदूर हैं, तो नहीं — GR में साफ लिखा है कि मौसमी मजदूर बाहर नहीं हैं। लेकिन कारखाने के पदाधिकारी या कर्मचारी, जिनकी सैलरी ₹25,000 महीने से ज्यादा है, वे इस अग्रिम से बाहर हैं।',
  },
  {
    q: 'बिजली बिल माफी का मुझे कैसे फायदा मिलेगा?',
    a: 'जून 2026 तक के बकाया कृषि बिजली बिल माफ करने का एलान हुआ है, लगभग ₹58,000 करोड़ का। इसके लिए अलग से फॉर्म भरने की खबर अभी नहीं आई है — बिल में माफी कैसे दिखेगी, यह बिजली विभाग बताएगा। जब तक कोई साफ निर्देश न आए, अपना बिल देखते रहिए और किसी एजेंट को पैसा मत दीजिए।',
  },
];

const FAQ_SCHEMA = buildFaqSchema(FAQS);

function H2x({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function Figure({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="w-full object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
      />
      <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Callout({ tone, children }: { tone: 'info' | 'warn' | 'danger'; children: React.ReactNode }) {
  const cls =
    tone === 'info'
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

export default function MaharashtraSukhaRahat5000Hindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>सवाल: दिवाली से पहले ₹5,000 मिलने का वादा हुआ था — पैसा कहां तक पहुंचा?</p>
      <p>
        जवाब: आधे से कुछ ज्यादा लोगों तक। महाराष्ट्र सरकार ने 27 अक्टूबर 2026 को कैबिनेट में ₹5,000 का अग्रिम
        मंजूर किया था, 304 सूखाग्रस्त तालुकों के लगभग 1.5 करोड़ किसानों के लिए, कुल ₹7,500 करोड़ का प्रावधान।
        दिवाली 8 नवंबर को बीत गई। 5 नवंबर तक 87,45,669 किसानों को ₹4,372.83 करोड़ मिल चुका था — यानी लगभग 58%।
        बाकी का भुगतान अभी चल रहा है। इस लेख में वही लिखा है जो 9 नवंबर तक साफ तौर पर पता चल सका है, और जो
        अभी साफ नहीं है, उसे साफ लिखा है।
      </p>

      <Figure
        priority
        src="/images/articles/hindi-yojna/maharashtra-sukha-rahat-5000/sukha-mitti-hero.webp"
        alt="सूखे से फटी हुई मिट्टी, महाराष्ट्र के सूखाग्रस्त तालुकों में खरीफ फसल की हालत"
        caption="सूखे की मार — 304 तालुकों में खरीफ फसल इसी हाल में थी। Photo: Wikimedia Commons, CC BY 3.0."
      />

      <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-600 dark:border-green-500 rounded-2xl">
        <h3 className="font-black text-green-900 dark:text-green-200 text-lg mb-2">₹5,000 मिला या नहीं — ऐसे पता करें</h3>
        <p className="text-sm text-green-900 dark:text-green-100 leading-relaxed mb-3">
          इस अग्रिम का <strong>कोई ऑनलाइन स्टेटस पोर्टल नहीं है</strong> और कोई लाभार्थी सूची भी प्रकाशित नहीं हुई है।
          पैसा आया या नहीं, यह सिर्फ आपकी <strong>बैंक पासबुक या SMS</strong> बताएगी। पासबुक में ₹5,000 की DBT एंट्री
          ढूंढिए — SMS का इंतजार मत कीजिए, कभी-कभी पैसा आ जाता है और SMS आता ही नहीं।
        </p>
        <p className="text-sm text-green-900 dark:text-green-100 leading-relaxed mb-4">
          पैसा नहीं आया है तो पहले बैंक में खाते की जांच करवाएं, फिर अपने <strong>तलाठी या तहसील</strong> से पूछें।
          पात्रता की असली शर्तें सरकार के अपने GR में लिखी हैं — उसे खुद पढ़ना हो तो नीचे वाला बटन दबाएं।
        </p>
        <CountdownRedirectButton
          href="https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202610271811211341.pdf"
          label="GR की PDF खोलें →"
          seconds={5}
          variant="success"
        />
        <p className="text-xs text-green-800 dark:text-green-200 leading-relaxed mt-3">
          बटन दबाते ही महाराष्ट्र सरकार का आधिकारिक GR खुल जाएगा — gr.maharashtra.gov.in पर GR No.
          समिती-२०२६/प्र.क्र.८२/मदत-२, 27 अक्टूबर 2026। 5 सेकंड का इंतजार, फिर PDF खुल जाएगी। KisanStatus कभी
          आपसे आधार नंबर या बैंक नंबर नहीं मांगता; अपना नंबर सिर्फ सरकारी वेबसाइट पर ही डालें, कभी इस साइट पर नहीं।
        </p>
      </div>

      <H2x>कितने लोगों तक पैसा पहुंचा</H2x>
      <p>
        सबसे पक्का आंकड़ा 5 नवंबर का है, जो राहत और पुनर्वसन मंत्री मकरंद जाधव पाटिल ने बताया और सात अलग खबरों ने
        दोहराया: <strong>87,45,669 किसान, ₹4,372.83 करोड़</strong>। पैसा भेजना 2 नवंबर से शुरू हुआ था। कुल 1.5 करोड़
        किसानों को देना है, तो इस हिसाब से अभी लगभग 58% लोगों तक पैसा पहुंचा है।
      </p>
      <p>
        इसके बाद CM देवेंद्र फडणवीस ने 7 और 8 नवंबर को कहा कि लगभग 1.5 करोड़ किसानों के खातों में ₹5,000 जमा कर दिए
        गए हैं, साथ में यह भी कहा कि प्रक्रिया अभी चल रही है। ये दोनों बातें एक साथ पढ़िए: CM का बयान एक दावा है,
        पक्की गिनती नहीं। पक्की गिनती अभी भी वही 87.45 लाख वाली है, 5 नवंबर की। उसके बाद की कोई नई गिनती 9 नवंबर तक
        सामने नहीं आई है।
      </p>
      <p>
        छत्रपति संभाजीनगर विभाग में सबसे ज्यादा भुगतान हुआ — ₹1,668.18 करोड़, 33.36 लाख किसानों को। अमरावती विभाग में
        12,82,203 किसान, विदर्भ के 8 जिलों में लगभग 18 लाख किसानों को ₹880 करोड़ से ज्यादा, और पुणे जिले में 3,28,542
        किसानों को ₹164.27 करोड़। पुणे जिले में 10 तालुके सूखाग्रस्त घोषित हुए और 3.18 लाख हेक्टेयर खेती पर असर पड़ा।
        अपने गांव का आंकड़ा सिर्फ तलाठी ही बता सकता है — ऑनलाइन कोई सूची नहीं है।
      </p>
      <Callout tone="warn">
        4 नवंबर को CM ने कहा था कि 73 लाख किसानों को पैसा मिल चुका है और दो दिन में 95% तक पहुंचने की उम्मीद है।
        5 नवंबर की गिनती बताती है कि यह उम्मीद पूरी नहीं हुई — 87.45 लाख, यानी 58%। राहत विभाग के अधिकारियों ने कहा
        है कि बाकी भुगतान अभी भेजा जा रहा है, और देर की वजह बैंक खाते की तकनीकी दिक्कत या गलत डिटेल है। उन्होंने यह
        भी कहा है कि कोई पात्र किसान छूटेगा नहीं।
      </Callout>

      <H2x>किसको मिलेगा, किसको नहीं</H2x>
      <p>
        शुरू में कहा गया था कि 304 तालुकों के सभी किसानों को ₹5,000 मिलेगा। कैबिनेट ने 27 अक्टूबर को यह रुख बदल
        दिया: अब सिर्फ उन्हें मिलेगा जिनकी खरीफ फसल को <strong>33% से ज्यादा नुकसान</strong> हुआ है। यह सीमा NDRF के
        नियम से ली गई है। सूखा घोषणा दो बार में हुई थी — सितंबर के आखिर में 265 तालुके, फिर अक्टूबर के बीच में 39-40
        और। कुल मिलाकर राज्य के 358 तालुकों में से 305 को सूखाग्रस्त घोषित किया गया है, जबकि ₹5,000 वाला अग्रिम 304
        तालुकों के लिए है। पैसा परिवार को नहीं, <strong>रजिस्टर्ड किसान को</strong> मिलेगा। और छोटी जोत वालों के लिए
        एक अच्छी बात: न्यूनतम सहायता ₹1,000 से बढ़ाकर ₹5,000 कर दी गई।
      </p>
      <Callout tone="info">
        <strong>मिलेगा, अगर:</strong> खरीफ 2026 में 33% से ज्यादा फसल का नुकसान, 304 सूखाग्रस्त तालुकों में से किसी
        एक में; रजिस्टर्ड किसान; eKYC पूरी — 1 नवंबर 2025 से 27 अक्टूबर 2026 के बीच किसी भी सरकारी योजना के लिए eKYC
        हुई हो तो दोबारा नहीं करवानी; वन अधिकार वाले किसान, जिनके पास AgriStack Farmer ID नहीं है — eKYC के आधार पर
        पात्र; आधार से जुड़ा बैंक खाता, जिसमें DBT आ सके।
      </Callout>
      <Callout tone="danger">
        <strong>नहीं मिलेगा, अगर:</strong> खेती से अलग कमाई पर इनकम टैक्स भरते हैं; सरकारी कर्मचारी या अधिकारी,
        महीने की सैलरी ₹25,000 से ज्यादा — केंद्र हो या राज्य; सरकारी उपक्रम (जैसे महावितरण, MIDC, ST महामंडल) या
        सहायता-प्राप्त संस्था के कर्मचारी, सैलरी ₹25,000 से ज्यादा; कृषि उत्पन्न बाजार समिति, सहकारी शक्कर कारखाना,
        स्पिनिंग मिल, सहकारी बैंक या दूध संघ के पदाधिकारी या कर्मचारी, सैलरी ₹25,000 से ज्यादा; रिटायर्ड सरकारी
        कर्मचारी, महीने की पेंशन ₹25,000 से ज्यादा (भूतपूर्व सैनिकों को छूट है); मंत्री, MP, MLA, MLC — मौजूदा या
        पहले के — और जिला परिषद, पंचायत समिति या नगर निकाय के सदस्य। शक्कर कारखाने के मौसमी मजदूर बाहर नहीं हैं —
        यह बात GR में साफ लिखी है।
      </Callout>
      <p>
        यह सूची सरकार के GR No. समिती-२०२६/प्र.क्र.८२/मदत-२ (27 अक्टूबर 2026) के पैरा 4 से है। एक गलतफहमी यहीं दूर
        कर लें: यह ₹5,000 PM Kisan की किस्त नहीं है और न ही उसका टॉप-अप। यह महाराष्ट्र सरकार का एक बार का अग्रिम
        है, सिर्फ इस साल के सूखे के लिए।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/maharashtra-sukha-rahat-5000/soybean-khet.webp"
        alt="महाराष्ट्र के ग्रामीण इलाके में सोयाबीन का खेत"
        caption="सोयाबीन, कपास और तूर — इसी खरीफ की फसलों पर सूखे की सबसे ज्यादा मार पड़ी। Photo: Wikimedia Commons, CC BY-SA 3.0."
      />

      <H2x>पैसा नहीं आया तो क्या करें</H2x>
      <p>
        अगर आप 304 तालुकों में से किसी एक में हैं, नुकसान 33% से ज्यादा है, और फिर भी पैसा नहीं आया, तो घबराइए मत
        — पहले ये तीन काम उसी क्रम में कीजिए। ज्यादातर रुकावट इन्हीं में से किसी एक वजह से है।
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-sm leading-relaxed">
        <li>
          <strong>पासबुक खुद देखिए।</strong> बैंक जाकर पासबुक अपडेट करवाइए या बैंक के ऐप में स्टेटमेंट देखिए। ₹5,000
          की DBT एंट्री ढूंढिए। SMS पर भरोसा मत कीजिए — बहुत बार पैसा आ जाता है और SMS आता ही नहीं।
        </li>
        <li>
          <strong>बैंक में खाते की जांच।</strong> ब्रांच जाकर ये तीन चीजें एक साथ चेक करवाइए: अकाउंट नंबर सही है या
          नहीं, आधार सीडिंग (DBT के लिए NPCI सीडिंग) एक्टिव है या नहीं, और अकाउंट dormant तो नहीं हो गया। इनमें से
          कोई एक भी गड़बड़ हो तो पैसा वापस चला जाता है, और ठीक होने के बाद अगली बार में आता है।
        </li>
        <li>
          <strong>तलाठी या तहसील से पूछिए।</strong> आपका नाम पात्र सूची में है या नहीं, आपके गांव का सर्वे कहां तक
          पहुंचा, और नुकसान का प्रतिशत क्या दर्ज हुआ — यह सब कागज तलाठी के पास है, किसी वेबसाइट पर नहीं। गांव के
          किसी भी आदमी से &ldquo;सूची में नाम चेक कर दो&rdquo; कहकर पैसा मत दीजिए। कोई एजेंट यह काम नहीं कर सकता।
        </li>
      </ol>
      <p>
        तीनों काम कर लिए और फिर भी पैसा नहीं आया, तो तहसील ऑफिस में लिखित शिकायत दे सकते हैं। शिकायत में अपना नाम,
        गांव, तालुका और बैंक खाते की डिटेल लिखिए। और एक बात याद रखिए — ₹5,000 निकलवाने के नाम पर कोई भी फॉर्म भरने
        की फीस नहीं है। जो ऐसा मांगे, वह ठग है।
      </p>

      <H2x>₹5,000 के बाद क्या</H2x>
      <p>
        यह समझना सबसे जरूरी है: ₹5,000 सिर्फ तुरंत की मदद है। असली मुआवजा — फसल के नुकसान का पूरा हिसाब — अभी
        बाकी है। राहत मंत्री ने साफ कहा है कि अग्रिम मिलने से बाकी मुआवजा नहीं रुकेगा, वह सर्वे के बाद अलग से तय
        होगा।
      </p>
      <p>
        इसीलिए महाराष्ट्र ने 31 अक्टूबर को केंद्र को एक प्रस्ताव भेजा है: लगभग <strong>₹31,000 करोड़</strong> की मदद,
        National Disaster Response Fund से। प्रस्ताव में लिखा है कि 16.6 मिलियन हेक्टेयर में से 14.15 मिलियन हेक्टेयर
        पर 33% से ज्यादा नुकसान हुआ है, 37,496 गांव और 304 तालुके इसमें आते हैं। प्रस्ताव भेजा जा चुका है, इसकी
        पुष्टि Additional Chief Secretary विनीता वेद सिंगल ने की है — लेकिन केंद्र ने अभी इस पर कोई फैसला नहीं किया
        है। जब तक फैसला नहीं आता, &ldquo;कब मिलेगा&rdquo; का कोई जवाब नहीं है।
      </p>
      <p>
        NDRF की दरें, जिनसे आखिरी मुआवजा बनेगा: बारानी (rain-fed) फसल ₹8,500 प्रति हेक्टेयर, सिंचाई वाली (assured
        irrigated) फसल ₹17,000 प्रति हेक्टेयर, बागवानी / perennial फसल ₹22,500 प्रति हेक्टेयर। इसीलिए सर्वे का काम
        इतना जरूरी है: आपकी फसल किस किस्म की थी और नुकसान कितना हुआ, यह सर्वे से तय होगा।
      </p>

      <H2x>बिजली बिल और बोरवेल</H2x>
      <p>
        ₹5,000 के साथ एक और बड़ा एलान हुआ है: किसानों के <strong>जून 2026 तक के बकाया कृषि बिजली बिल माफ</strong> किए
        जाएंगे, लगभग ₹58,000 करोड़ के। CM ने दिवाली पर लोहारी सावंगा में यह बात दोहराई। इस एलान को जुलाई 2026 वाली
        खबर से मत मिलाइए — तब ₹48,000 करोड़ के pending dues माफ करने की बात आई थी, जो नए कनेक्शन और पुराने बकाये से
        जुड़ी थी। नवंबर वाला एलान अलग है। बिल में माफी कैसे दिखेगी, इस पर बिजली विभाग का साफ निर्देश अभी आना बाकी है।
      </p>
      <p>
        CM ने दिवाली पर लोहारी सावंगा में यह भी एलान किया कि जिन इलाकों में फल-बागवानी ही रोजी का जरिया है, वहां
        खेती के बोरवेल खोदने पर लगी रोक में अस्थायी छूट मिलेगी — <strong>15 दिसंबर 2026 तक</strong>, प्रशासन की
        permission से और भूजल निकासी की निगरानी के साथ। यह छूट बिना शर्त के नहीं है। साथ में यह भी एलान हुआ कि
        लोहारी सावंगा के 10 किसानों को सिंचाई-कुआं योजना का फायदा मिलेगा, और आगे बढ़े हुए सिंचाई प्रोजेक्ट्स के लिए
        ₹15,000 करोड़ कर्ज से उपलब्ध कराए गए हैं।
      </p>
      <p>
        मंत्री गिरीश महाजन ने आर्थिक रूप से सक्षम किसानों से अपील की है कि वे अपना ₹5,000 मुख्यमंत्री राहत कोष में
        वापस कर दें, ताकि वह पैसा ज्यादा जरूरतमंद तक पहुंच सके। उनके जामनेर क्षेत्र के लगभग 50 किसानों ने खुद आकर
        वापस करने की इच्छा जताई है। यह अपील है, नियम नहीं — वापस करना या न करना आपकी मर्जी है। और एक बात: वापस
        करने का कोई आधिकारिक तरीका अभी प्रकाशित नहीं हुआ है, इसलिए किसी को भी इस नाम पर पैसा मत दीजिए।
      </p>
      <p>
        राजस्व मंत्री चंद्रशेखर बावनकुले ने एक और समय-सीमा तय की है: पिछले दो साल में पानी की कमी के लिए जिन निजी
        कुओं को requisition किया गया था, उनका बकाया <strong>20 नवंबर तक</strong> क्लियर करने का आदेश दिया गया है। यह
        ₹5,000 से अलग बात है, लेकिन वही किसानों से जुड़ती है — अगर आपका कुआं requisition हुआ था तो अपने तहसील से
        पूछ लीजिए।
      </p>

      <H2x>कुछ और सवाल</H2x>
      <div className="space-y-3 my-4">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
            <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
              <span>{q}</span>
              <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
            </summary>
            <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">{a}</div>
          </details>
        ))}
      </div>

      <H2x>स्रोत</H2x>
      <p>
        इस लेख की हर तारीख और आंकड़ा इन्हीं जगहों से मिलाया गया है। सबसे पहले सरकार का अपना GR है — GR No.
        समिती-२०२६/प्र.क्र.८२/मदत-२, 27 अक्टूबर 2026, राहत और पुनर्वसन विभाग, महाराष्ट्र — जिसमें ₹5,000 के अग्रिम
        की पात्रता और exclusions साफ लिखी हैं:
      </p>
      <ul>
        <li>
          <a href="https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202610271811211341.pdf" target="_blank" rel="noopener noreferrer">
            महाराष्ट्र GR, 27 अक्टूबर 2026 (PDF) — ₹5,000 अग्रिम, पात्रता, exclusions, ₹7,500 करोड़ का प्रावधान
          </a>
        </li>
        <li>
          <a href="https://indianexpress.com/article/cities/mumbai/maharashtra-drought-2026-news-payouts-release-date-eligiblity-rs-5000-credit-10940097/" target="_blank" rel="noopener noreferrer">
            The Indian Express, 28 अक्टूबर 2026 — कैबिनेट फैसला, ₹7,500 करोड़, 33% शर्त, exclusions
          </a>
        </li>
        <li>
          <a href="https://www.freepressjournal.in/amp/mumbai/maharashtra-cabinet-approves-7500-crore-for-drought-hit-farmers-5000-aid-restricted-to-those-with-over-33-crop-loss" target="_blank" rel="noopener noreferrer">
            Free Press Journal, 27 अक्टूबर 2026 — कैबिनेट मंजूरी, ₹2,000 + ₹5,500 करोड़ का विभाजन, eKYC छूट
          </a>
        </li>
        <li>
          <a href="https://www.deccanchronicle.com/amp/nation/maharashtra-to-give-rs-5000-aid-to-15-crore-farmers-before-diwali-1999504" target="_blank" rel="noopener noreferrer">
            Deccan Chronicle, 28 अक्टूबर 2026 — GR जारी होने की खबर, विस्तृत exclusions, NDRF प्रस्ताव
          </a>
        </li>
        <li>
          <a href="https://www.moneycontrol.com/city/maharashtra-rs-5-000-drought-relief-who-will-get-the-money-and-when-will-it-reach-your-account-article-14062332.html" target="_blank" rel="noopener noreferrer">
            Moneycontrol, 28 अक्टूबर 2026 — कौन पात्र है, कोई अलग पोर्टल नहीं
          </a>
        </li>
        <li>
          <a href="https://timesofindia.indiatimes.com/city/pune/maharashtra-disburses-rs4372-crore-diwali-relief-to-over-87-lakh-drought-hit-farmers/articleshow/135645588.cms" target="_blank" rel="noopener noreferrer">
            Times of India, 8 नवंबर 2026 — 87,45,669 किसान, ₹4,372.83 करोड़, विभाग-वार हिसाब
          </a>
        </li>
        <li>
          <a href="https://timesofindia.indiatimes.com/city/nagpur/rs-880cr-diwali-advance-dole-sent-to-vidarbha-farmers-a/cs/articleshow/135618691.cms" target="_blank" rel="noopener noreferrer">
            Times of India, 7 नवंबर 2026 — विदर्भ ₹880 करोड़, 18 लाख किसान, 2 नवंबर से शुरुआत
          </a>
        </li>
        <li>
          <a href="https://www.freepressjournal.in/amp/pune/pune-drought-farmers-receive-5000-advance-before-diwali-amid-crop-losses-across-318-lakh-hectares" target="_blank" rel="noopener noreferrer">
            Free Press Journal, 9 नवंबर 2026 — पुणे जिला: 3,28,542 किसान, ₹164.27 करोड़, 3.18 लाख हेक्टेयर
          </a>
        </li>
        <li>
          <a href="https://indianexpress.com/article/cities/mumbai/maharashtra-devendra-fadnavis-diwali-drought-hit-farmer-relief-borewells-10955816/" target="_blank" rel="noopener noreferrer">
            The Indian Express, 9 नवंबर 2026 — 305 तालुके घोषित, बोरवेल छूट 15 दिसंबर तक, ₹15,000 करोड़ सिंचाई
          </a>
        </li>
      </ul>
      <p>
        आखिरी बार इन सब से मिलान 9 नवंबर 2026 को किया गया। नई गिनती या केंद्र का NDRF फैसला आते ही यह लेख अपडेट
        होगा।
      </p>
      <Callout tone="warn">
        यह लेख जानकारी का साथी है, सरकारी दस्तावेज नहीं। ₹5,000 से जुड़ी हर बात अपनी पासबुक, तलाठी या तहसील से जांच
        लें। KisanStatus कोई सरकारी विभाग नहीं है और भुगतान प्रक्रिया नहीं करता।
      </Callout>
      <p>
        महाराष्ट्र की दूसरी योजना के बारे में{' '}
        <Link href="/articles/hi/namo-shetkari-yojana">नमो शेतकरी योजना (हिंदी)</Link>{' '} पढ़ें, और PM Kisan की
        पूरी जानकारी{' '}
        <Link href="/articles/PmKisanMasterGuide2026">मास्टर गाइड</Link> में है।
      </p>
    </>
  );
}
