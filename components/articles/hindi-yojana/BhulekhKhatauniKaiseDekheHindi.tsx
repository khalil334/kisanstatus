import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { buildFaqSchema } from '@/lib/faq-schema';
import CountdownRedirectButton from '@/components/CountdownRedirectButton';
import StatePortalFinder from '@/components/StatePortalFinder';

const FAQS = [
  {
    q: 'भूलेख पर अपना रिकॉर्ड देखने के लिए कोई फीस लगती है?',
    a: 'आम खतौनी की नकल देखना मुफ्त होता है — आप अपने राज्य के पोर्टल पर जिला, तहसील और गांव चुनकर रिकॉर्ड देख सकते हैं। प्रमाणित (certified) नकल के लिए ऑनलाइन पेमेंट का ऑप्शन होता है, जैसे UP भूलेख पर है। कोई भी आदमी आपसे रिकॉर्ड दिखाने के नाम पर पैसा मांगे तो समझ लीजिए कि वह ठग है।',
  },
  {
    q: 'रिकॉर्ड में मेरा नाम गलत लिखा है। ऑनलाइन सुधर सकता है?',
    a: 'नहीं, नाम का सुधार ऑनलाइन नहीं होता। यह काम तहसील या लेखपाल से होता है — mutation (दाखिल-खारिज) या नाम सुधार के लिए कागज लेकर जाना पड़ता है। पहले पोर्टल पर रिकॉर्ड देखकर गलती नोट कर लीजिए, फिर तहसील जाइए।',
  },
  {
    q: 'मेरे गांव का रिकॉर्ड पोर्टल पर नहीं दिख रहा। क्या करूं?',
    a: 'पहले गांव का नाम सही स्पेलिंग से ढूंढिए — कभी-कभी गांव का नाम अलग तरीके से लिखा होता है। फिर भी न मिले तो अपने लेखपाल या तहसील से पूछिए; कुछ गांव का रिकॉर्ड अभी डिजिटाइज नहीं हुआ है, या पोर्टल पर अपडेट पेंडिंग है।',
  },
  {
    q: 'खतौनी और खसरा में क्या फर्क है?',
    a: 'खतौनी (Record of Rights) वह कागज है जिसमें लिखा होता है कि जमीन किसके नाम पर है, कितनी है और किस किस्म की है। खसरा (गाटा) नंबर जमीन के एक टुकड़े का नंबर होता है — एक खतौनी में कई खसरा नंबर हो सकते हैं। PM Kisan और बैंक, दोनों को खतौनी ही चाहिए होती है।',
  },
  {
    q: 'जमीन अभी भी मेरे पिता के नाम पर है। क्या PM Kisan मिलेगा?',
    a: 'नहीं, जब तक जमीन आपके नाम पर ट्रांसफर (mutation) नहीं होती। PM Kisan में वही अप्लाई कर सकता है जिसके नाम पर जमीन रजिस्टर्ड है। पहले तहसील से वरासत या नामांतरण का काम करवाइए, फिर अप्लाई कीजिए।',
  },
  {
    q: '7/12 उतारा और खतौनी एक ही चीज है?',
    a: 'हां, काम एक ही है — जमीन का रिकॉर्ड। महाराष्ट्र में इसे 7/12 उतारा कहते हैं, UP और उत्तराखंड में खतौनी, पंजाब-हरियाणा में जमाबंदी और कर्नाटक में RTC। नाम अलग है, काम वही: जमीन किसके नाम है, यह बताना।',
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

function H3x({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-6 mb-2 text-[var(--color-text)]">{children}</h3>;
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

export default function BhulekhKhatauniKaiseDekheHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>सवाल: जमीन आपकी है — लेकिन कागज पर नाम किसका है?</p>
      <p>
        जवाब: यही सवाल हर किसान को एक बार खुद से पूछना चाहिए। बैंक लोन के लिए खाता देखेगा, PM Kisan किस्त के लिए
        लैंड सीडिंग देखेगा, और जमीन बेचने वाला खरीदार सबसे पहले खतौनी मांगेगा। तीनों जगह एक ही कागज काम आता है —
        जमीन का रिकॉर्ड, जिसे अलग-अलग राज्यों में खतौनी, 7/12 उतारा, जमाबंदी या RTC कहते हैं। अच्छी बात यह है कि यह
        रिकॉर्ड अब घर बैठे, मुफ्त, अपने राज्य के भूलेख पोर्टल पर देखा जा सकता है। इस लेख में तीन बड़े राज्यों का
        तरीका है, और 18 राज्यों के पोर्टल एक जगह दिए हैं।
      </p>

      <Figure
        priority
        src="/images/articles/hindi-yojna/bhulekh-khatauni-kaise-dekhe/hal-jotai-hero.webp"
        alt="कर्नाटक के रायचूर में बैलों से हल जोतते हुए किसान"
        caption="जमीन जिसकी, रिकॉर्ड भी उसी के नाम होना चाहिए। Photo: Wikimedia Commons, CC BY-SA 4.0."
      />

      <div className="my-8 p-6 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-600 rounded-2xl">
        <h3 className="font-black text-amber-900 dark:text-amber-200 text-lg mb-2">अपनी खतौनी अभी देखें — UP भूलेख पोर्टल</h3>
        <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed mb-3">
          UP के किसान अपनी खतौनी <strong>upbhulekh.gov.in</strong> पर देख सकते हैं — Board of Revenue, उत्तर प्रदेश का
          आधिकारिक पोर्टल। वहां &ldquo;खतौनी (अधिकार अभिलेख) की नक़ल देखें&rdquo; से आपका रिकॉर्ड खुल जाएगा। दूसरे राज्य
          के हैं तो नीचे वाली डायरेक्टरी में अपना पोर्टल ढूंढिए।
        </p>
        <CountdownRedirectButton
          href="https://upbhulekh.gov.in"
          label="UP भूलेख पोर्टल खोलें →"
          seconds={5}
          variant="primary"
        />
        <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed mt-3">
          बटन दबाते ही आप उत्तर प्रदेश सरकार की आधिकारिक वेबसाइट upbhulekh.gov.in पर जाओगे — 5 सेकंड का इंतजार, फिर
          पोर्टल खुल जाएगा। याद रखिए: KisanStatus आपसे कभी आधार या बैंक नंबर नहीं मांगेगा — नंबर सिर्फ सरकारी पोर्टल
          पर डाला जाता है, यहां कभी नहीं।
        </p>
      </div>

      <H2x>खतौनी क्या होती है, और यह क्यों मायने रखती है</H2x>
      <p>
        खतौनी को Record of Rights भी कहते हैं — मतलब, जमीन पर आपका हक इस कागज से साबित होता है। इसमें चार चीजें
        लिखी होती हैं: जमीन के मालिक का नाम, खाता नंबर, गाटा या खसरा नंबर, और जमीन का रकबा (कितनी है)। यह कागज तीन
        जगह काम आता है, और तीनों जगह यह तय करता है कि पैसा मिलेगा या नहीं।
      </p>
      <p>
        पहली जगह: <strong>PM Kisan।</strong> किस्तें सबसे ज्यादा एक ही वजह से रुकती हैं — जमीन का रिकॉर्ड। पोर्टल पर
        लैंड सीडिंग &ldquo;No&rdquo; दिखे तो मतलब है कि आपकी जमीन का रिकॉर्ड स्कीम से जुड़ा नहीं है। उसके लिए लैंड
        सीडिंग फॉर्म भरना पड़ता है, जो तहसील या CSC से मिलता है — और फॉर्म के साथ खतौनी की नकल लगती है।
      </p>
      <p>
        दूसरी जगह: <strong>बैंक।</strong> KCC लोन के लिए बैंक सबसे पहले खतौनी ही मांगता है। तीसरी जगह: <strong>जमीन
        की खरीद-बिक्री।</strong> खरीदार सबसे पहले यही देखता है कि जमीन किसके नाम है और उस पर कोई मुकदमा तो नहीं है।
        UP भूलेख पर प्लॉट की बिक्री की स्थिति और मुकदमे की स्थिति भी देखी जा सकती है।
      </p>
      <Callout tone="warn">
        नाम की स्पेलिंग तीनों जगह एक जैसी रखिए — आधार, बैंक और खतौनी। आधार में &ldquo;मोहम्मद असलम&rdquo;, खतौनी में
        &ldquo;मोहद असलम&rdquo;, बैंक में तीसरी स्पेलिंग — एक अक्षर का फर्क भी किस्त या लोन में अटक सकता है। पहले नाम
        मिलाइए, फिर किस्त का इंतजार कीजिए।
      </Callout>

      <H2x>तीन राज्यों में देखने का तरीका</H2x>
      <H3x>उत्तर प्रदेश — खतौनी</H3x>
      <p>
        upbhulekh.gov.in खोलिए। होमपेज पर &ldquo;भूलेख सेवाएं&rdquo; दिखेगी — उसमें &ldquo;खतौनी (अधिकार अभिलेख) की नक़ल
        देखें&rdquo; पर क्लिक कीजिए। फिर अपना जिला चुनिए, तहसील, गांव — और गांव की लिस्ट में अपना खाता नंबर या नाम
        ढूंढिए। खतौनी खुल जाएगी। जरूरत हो तो उसे सेव या प्रिंट कर लीजिए। यह आम नकल है — प्रमाणित नकल के लिए पोर्टल
        पर ऑनलाइन पेमेंट का ऑप्शन है।
      </p>
      <H3x>महाराष्ट्र — 7/12 उतारा</H3x>
      <p>
        महाराष्ट्र में इसी रिकॉर्ड को 7/12 उतारा कहते हैं, और इसका पोर्टल bhulekh.mahabhumi.gov.in है। तरीका वही है:
        जिला, तालुका, गांव चुनकर 7/12 निकालिए। एक ईमानदार बात: 9 नवंबर को चेक करने पर यह पोर्टल इस ब्राउज़र में खुला
        ही नहीं — थोड़ी देर बाद फिर ट्राय कीजिए, या सीधे तहसील चले जाइए। पोर्टल न खुलने का मतलब यह नहीं है कि रिकॉर्ड
        नहीं है।
      </p>
      <H3x>पंजाब और हरियाणा — जमाबंदी</H3x>
      <p>
        इन दोनों राज्यों में रिकॉर्ड का नाम जमाबंदी है। पंजाब में jamabandi.punjab.gov.in और हरियाणा में
        jamabandi.nic.in पर जाकर जिला-तहसील-गांव चुनिए, फिर अपनी जमाबंदी निकालिए। बाकी राज्यों का तरीका भी लगभग
        यही है — पोर्टल अलग, कदम वही।
      </p>
      <p>
        दो और नाम जान लीजिए, क्योंकि पूछताछ में यही आते हैं। तमिलनाडु में इस रिकॉर्ड को पट्टा चिट्टा कहते हैं —
        पोर्टल eservices.tn.gov.in, जहां जिला, तालुक, गांव और पट्टा या सर्वे नंबर से रिकॉर्ड खुलता है। पश्चिम बंगाल
        में इसे बांग्लारभूमि (खतियान) कहते हैं — banglarbhumi.gov.in पर Know Your Property से मिलता है।
      </p>

      <H2x>खतौनी पढ़ने का एक उदाहरण</H2x>
      <p>
        मान लीजिए खतौनी खुली और उसमें लिखा है: नाम — राम कुमार, खाता संख्या 123, गाटा संख्या 45 और 46, रकबा 1.5
        हेक्टेयर, जमीन की किस्म — कृषि योग्य। अब इसे कैसे पढ़ेंगे? नाम बताता है कि जमीन किसके नाम पर है। खाता संख्या
        उस परिवार या व्यक्ति का खाता है, जिसके नाम पर जमीन दर्ज है। गाटा संख्या जमीन के टुकड़ों के नंबर हैं — एक खाते
        में कई गाटे हो सकते हैं। रकबा बताता है कि कुल कितनी जमीन है।
      </p>
      <p>
        अब तीन चीजें मिलाइए। पहली: नाम की स्पेलिंग आधार से मिलती है या नहीं। दूसरी: रकबा उतना ही है जितना आप
        जानते हैं — अगर रकबा कम दिख रहा है तो हो सकता है कि जमीन का कुछ हिस्सा किसी और के नाम पर हो। तीसरी: गाटा
        संख्या वही है जो आपके खेत की है — गलत गाटा नंबर फसल बीमा के क्लेम के समय सबसे बड़ी दिक्कत बनता है, क्योंकि
        क्लेम उसी जमीन पर मिलता है जो रजिस्टर हुई है।
      </p>
      <Callout tone="info">
        साझा खाता (joint khata) वाली एक आम दिक्कत: खतौनी में पिता और तीनों बेटों के नाम एक साथ लिखे हों, तो PM Kisan
        के लिए हर व्यक्ति अलग-अलग अप्लाई नहीं कर सकता — स्कीम में परिवार का नियम है। बंटवारा (partition) करवाना हो तो
        तहसील से mutation का काम करवाना पड़ता है, जिसके बाद हर हिस्सेदार के नाम अलग खाता बनता है।
      </Callout>

      <Figure
        src="/images/articles/hindi-yojna/bhulekh-khatauni-kaise-dekhe/khet-jotai.webp"
        alt="भारत में खेत की जुताई करते किसान"
        caption="खेत की जुताई से पहले एक बार रिकॉर्ड देख लेना — नाम, रकबा, सब सही है या नहीं। Photo: Wikimedia Commons, CC0."
      />

      <H2x>रिकॉर्ड में गलती हो तो क्या करें</H2x>
      <p>
        रिकॉर्ड देखकर गलती मिले — नाम गलत हो, रकबा कम-ज्यादा हो, या जमीन अभी भी पिता के नाम पर हो — तो यह काम ऑनलाइन
        नहीं होता। इसके लिए तहसील या लेखपाल के पास कागज लेकर जाना पड़ता है। जमीन पिता के नाम से आपके नाम पर करनी हो
        तो mutation (दाखिल-खारिज / नामांतरण) करवाना पड़ता है। वरासत के बाद नाम बदलवाना हो तो भी यही रास्ता है।
      </p>
      <p>
        एक बात साफ समझ लीजिए: mutation के बिना PM Kisan नहीं मिलेगा, क्योंकि स्कीम में वही अप्लाई कर सकता है जिसके
        नाम पर जमीन रजिस्टर्ड है। पहले तहसील से नामांतरण का काम करवाइए, फिर अप्लाई कीजिए। और हां, यह काम करवाने के
        लिए किसी एजेंट को पैसा मत दीजिए — तहसील में यह सरकारी काम है। कर्नाटक में अगस्त 2026 से एक राहत है: बाहर
        रहने वाले वारिस अब तालुक ऑफिस जाए बिना, ऑनलाइन फैमिली ट्री या लीगल हेयर सर्टिफिकेट देकर e-Pouthi के लिए
        अप्लाई कर सकते हैं।
      </p>
      <Callout tone="info">
        <strong>प्रमाणित नकल:</strong> बैंक या किसी आधिकारिक काम के लिए आम नकल नहीं, प्रमाणित (certified) नकल चाहिए
        होती है। UP भूलेख पर इसके लिए ऑनलाइन पेमेंट का ऑप्शन है — पोर्टल के मेनू में &ldquo;ऑनलाइन पेमेन्ट द्वारा
        खतौनी की प्रमाणित प्रति प्राप्त करें&rdquo; लिखा मिलेगा। आम नकल देखना मुफ्त है, प्रमाणित नकल के लिए पेमेंट
        होता है। <strong>शिकायत:</strong> रिकॉर्ड में गलती हो या पोर्टल पर कुछ न खुल रहा हो, तो UP भूलेख पर शिकायत
        दर्ज करने और उसकी स्थिति देखने का लिंक भी है। लिखित शिकायत का रिकॉर्ड बनता है, इसलिए फोन पर बात करने से
        ज्यादा काम आती है।
      </Callout>

      <H2x>अपने राज्य का पोर्टल यहां ढूंढिए</H2x>
      <p>
        नीचे 18 राज्यों के भूलेख पोर्टल एक जगह हैं। अपना राज्य सर्च करके पोर्टल खोलिए। मध्य प्रदेश के दोनों पोर्टल
        (mpbhulekh.gov.in और bhu-abhilekh.nic.in) भी 9 नवंबर को इस ब्राउज़र में नहीं खुले — थोड़ी देर बाद फिर ट्राय
        कीजिए या तहसील से पूछिए। 13 नवंबर को दोबारा चेक करने पर तमिलनाडु और पश्चिम बंगाल के पोर्टल भी इस ब्राउज़र
        में टाइम आउट हो गए।
      </p>
      <p>
        तेलंगाना के किसान एक बदलाव ध्यान रखें: वहां पुराना धरणी पोर्टल बंद हो चुका है, रिकॉर्ड अब भू भारती
        (bhubharati.telangana.gov.in) पर मिलता है। एक सावधानी भी जरूरी है — 7 नवंबर 2026 को तेलंगाना CID ने भू
        भारती mutation से जुड़े एक कथित ₹90 करोड़ के घोटाले में 4 लोगों को गिरफ्तार किया है; मामला अभी जांच में
        है। Mutation सिर्फ RDO के अधिकृत प्रोसेस से होता है, इसलिए किसी ऑपरेटर या एजेंट को mutation के नाम पर
        पैसा न दें — अपना रिकॉर्ड खुद पोर्टल पर चेक करें।
      </p>
      <StatePortalFinder />

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
        इस लेख के पोर्टल और तरीके इन्हीं जगहों से वेरिफाई किए गए हैं:
      </p>
      <ul>
        <li>
          <a href="https://upbhulekh.gov.in" target="_blank" rel="noopener noreferrer">
            upbhulekh.gov.in
          </a>{' '}
          — Board of Revenue, उत्तर प्रदेश: खतौनी की नकल, प्रमाणित नकल (ऑनलाइन पेमेंट), बिक्री और मुकदमे की स्थिति,
          शिकायत (9 नवंबर 2026 को खुद खोला गया)
        </li>
        <li>
          <a href="https://bhulekh.mahabhumi.gov.in" target="_blank" rel="noopener noreferrer">
            bhulekh.mahabhumi.gov.in
          </a>{' '}
          — महाराष्ट्र 7/12 उतारा पोर्टल (साइट की StatePortalFinder लिस्ट से; 9 नवंबर को इस ब्राउज़र में नहीं खुला,
          रीट्राय करें)
        </li>
        <li>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">
            pmkisan.gov.in
          </a>{' '}
          — लैंड सीडिंग और PM Kisan पात्रता
        </li>
        <li>
          <a href="https://eservices.tn.gov.in" target="_blank" rel="noopener noreferrer">
            eservices.tn.gov.in
          </a>{' '}
          — Commissioner of Land Administration, तमिलनाडु: पट्टा चिट्टा व्यू
        </li>
        <li>
          <a href="https://banglarbhumi.gov.in" target="_blank" rel="noopener noreferrer">
            banglarbhumi.gov.in
          </a>{' '}
          — बांग्लारभूमि, पश्चिम बंगाल: Know Your Property / खतियान
        </li>
        <li>
          <a href="https://bhubharati.telangana.gov.in" target="_blank" rel="noopener noreferrer">
            bhubharati.telangana.gov.in
          </a>{' '}
          — भू भारती, राजस्व विभाग, तेलंगाना: पहानी / ROR-1B। पुराना धरणी पोर्टल 14 अप्रैल 2025 से बंद है; उसकी
          जगह यही पोर्टल चलता है
        </li>
        <li>
          The Times of India और Siasat, 8 नवंबर 2026 — तेलंगाना CID की भू भारती mutation फ्रॉड में 4 गिरफ्तारियों
          की रिपोर्ट; मामला अभी जांच में है
        </li>
        <li>
          The New Indian Express, 10 नवंबर 2026, और thelandbankers.com — कर्नाटक e-Pouthi राहत: बाहर रहने वाले
          वारिस के लिए ऑनलाइन फैमिली ट्री / लीगल हेयर सर्टिफिकेट, अगस्त 2026 से
        </li>
        <li>
          <Link href="/articles/PmKisanLandSeedingForm">KisanStatus: लैंड सीडिंग फॉर्म गाइड</Link> — राज्य-वार भूलेख
          पोर्टल लिंक
        </li>
      </ul>
      <p>
        आखिरी बार पोर्टल्स से मिलान 13 नवंबर 2026 को किया गया — UP भूलेख उस दिन खुला और वेरिफाई हुआ; तमिलनाडु और
        पश्चिम बंगाल के पोर्टल उस दिन इस ब्राउज़र में टाइम आउट हो गए (दोनों के आधिकारिक डोमेन Google सर्च से कन्फर्म
        हैं)। अंत में एक ही सलाह: रिकॉर्ड देखने का काम आज ही कर लीजिए — पांच मिनट का काम है, और इससे पता चल जाएगा
        कि किस्त, लोन या जमीन के सौदे में आगे कोई अड़चन तो नहीं है। गलती मिले तो तहसील जाकर उसे अभी सुधरवा लीजिए,
        क्योंकि कागज का काम आखिरी मौके पर कभी नहीं होता।
      </p>
      <Callout tone="warn">
        यह लेख जानकारी का साथी है, सरकारी दस्तावेज नहीं। जमीन से जुड़ी हर बात अपने लेखपाल या तहसील से जांच लें।
        KisanStatus कोई सरकारी विभाग नहीं है।
      </Callout>
      <p>
        लैंड सीडिंग फॉर्म के बारे में{' '}
        <Link href="/articles/PmKisanLandSeedingForm">लैंड सीडिंग वाली गाइड</Link> पढ़ें, और PM Kisan की पूरी
        जानकारी <Link href="/articles/PmKisanMasterGuide2026">मास्टर गाइड</Link> में है।
      </p>
    </>
  );
}
