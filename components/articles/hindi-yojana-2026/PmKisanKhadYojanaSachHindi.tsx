import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { buildFaqSchema } from '@/lib/faq-schema';

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
  {
    q: 'दुकानदार MRP से ज्यादा मांगे तो क्या करूं?',
    a: 'MRP से ज्यादा लेना गैर-कानूनी है। पहले PoS पर्ची मांगिए — उसमें सही दाम छपा होता है। फिर भी न माने तो Kisan Call Centre 1800-180-1551 पर शिकायत करिए या जिले के कृषि अधिकारी को बताइए। खरीद के बाद SMS न आए तो भी समझिए सौदे में गड़बड़ है।',
  },
];

const FAQ_SCHEMA = buildFaqSchema(FAQS);

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

      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
        <Image
          src="/images/nano-dap-buy-online-fertilizer.webp"
          alt="खाद की दुकान पर बोरी खरीदता किसान"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          खाद की subsidy बोरी के दाम में मिलती है — खाते में cash से नहीं
        </figcaption>
      </figure>

      <Head2>₹11,000 का हिसाब किसने बनाया?</Head2>
      <p>
        Formula सीधा है। और बिल्कुल गलत। PM किसान सम्मान निधि से साल के ₹6,000 मिलते हैं — यह असली है।
        उसके ऊपर कुछ blogs ने ₹5,000 का एक काल्पनिक &ldquo;fertilizer subsidy&rdquo; amount जोड़कर total
        ₹11,000 बना दिया। किसी ने पहली किस्त ₹6,000 और दूसरी ₹5,000 लिखी। किसी ने खरीफ-रबी में बांट दिया।
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

      <Head2>दुकान पर असल में क्या होता है — अंगूठा, पर्ची, SMS</Head2>
      <p>
        जो किसान पहली बार सुन रहा है कि subsidy PoS machine से जुड़ी है, उसके लिए पूरा scene: आप
        licensed dealer के पास जाते हैं, आधार नंबर बताते हैं, machine पर अंगूठा लगाते हैं। बिक्री आधार से
        verify होती है, तभी subsidized rate लगता है। Machine से पर्ची निकलती है जिसमें बोरी की quantity,
        आपका दिया दाम और सरकार की subsidy — तीनों लिखे होते हैं।
      </p>
      <p>
        खरीद के बाद registered mobile पर SMS आता है — invoice नंबर, dealer का नाम, quantity और subsidy
        amount के साथ। SMS आना मतलब बिक्री सरकारी record में गई। SMS न आए और dealer पर्ची भी न दे,
        तो समझ लीजिए कुछ गड़बड़ है।
      </p>
      <p>
        इससे एक बात और साफ हो जाती है, जो अफवाह को जड़ से काट देती है: खाद subsidy का पूरा system बोरी
        की <em>बिक्री</em> से जुड़ा है, किसान के bank खाते से नहीं। जब system में खाते में पैसा भेजने का
        इंतजाम ही नहीं है, तो ₹11,000 खाते में आएंगे कहां से? कहीं से नहीं।
      </p>

      <Head2>यह अफवाह हर साल नई क्यों हो जाती है</Head2>
      <p>
        &ldquo;खाद योजना&rdquo; वाले articles 2021 से चले आ रहे हैं। हर साल वही content, बस heading में साल
        बदल जाता है — 2024, 2025, अब 2026। PM किसान की असली किस्त का season आते ही इन articles की
        traffic बढ़ जाती है, क्योंकि किसान वैसे ही पैसा search कर रहा होता है।
      </p>
      <p>
        YouTube पर यह और तेज चलता है। Thumbnail पर बड़ा सा &ldquo;₹11,000 आ गए — list में नाम
        देखो&rdquo; और video के अंदर वही PM किसान beneficiary status check करने का process, जो ₹6,000
        वाली असली scheme का है। देखने वाले को लगता है scheme confirm हो गई, क्योंकि video में सरकारी
        portal दिख रहा है। Portal असली, scheme का नाम नकली — यही trick है। इसलिए video में portal
        दिखना काफी नहीं; यह देखिए कि उस portal पर <em>उस नाम की scheme</em> लिखी है या नहीं।
      </p>

      <Head2>&ldquo;खाद योजना registration&rdquo; वाला form दिखे तो?</Head2>
      <p>
        जो चीज मौजूद नहीं, उसका registration form किसी के पास कैसे हो सकता है? फिर भी कई sites
        &ldquo;खाद योजना apply online&rdquo; के नाम से form चला रही हैं। खेल दो तरह का। पहला — आपका
        आधार, mobile, bank detail जमा करके data बेचना। दूसरा ज्यादा खतरनाक है: registration
        &ldquo;confirm&rdquo; करने के नाम पर <strong>OTP मांगना</strong>। OTP दिया? खाते से पैसा गया।
      </p>
      <p>
        पहचान का आसान नियम: central scheme का हर असली portal <strong>gov.in</strong> या{' '}
        <strong>nic.in</strong> पर खत्म होता है। असली scheme की जानकारी में हमेशा official portal, helpline
        और notification होता है; fake articles में सिर्फ &ldquo;जल्द आवेदन करें&rdquo; की जल्दी। शक हो तो
        PIB Fact Check (@PIBFactCheck) पर scheme का नाम search कर लीजिए।
      </p>

      <Head2>खाद पर असली बचत का रास्ता — जो कोई blog नहीं बताता</Head2>
      <p>
        ₹11,000 वाली अफवाह के पीछे भागने से जो नहीं मिलेगा, वह खाद के <em>सही इस्तेमाल</em> से मिल सकता
        है। ज्यादातर खेतों में खाद जरूरत से ज्यादा डलती है — अंदाजे से। जितनी बोरी बच गई, उतना पैसा जेब
        में रहा। और यह अंदाजा हटाने का सरकारी इंतजाम पहले से मौजूद है, बिल्कुल मुफ्त।
      </p>
      <p>
        <strong>Soil Health Card</strong> — मिट्टी का free test, जिसकी report बताती है कि आपके खेत में
        nitrogen, phosphorus कितना है और कौन सी खाद कितनी चाहिए। Test और card दोनों पर किसान का कोई
        खर्च नहीं; portal soilhealth.dac.gov.in है और sample block के कृषि office से भी जमा हो जाता है।
        कैसे बनवाएं और report कैसे पढ़ें — पूरा तरीका{' '}
        <Link href="/articles/soil-health-card-complete-guide-2026" className="underline font-bold">soil
        health card गाइड</Link> में है। Report के हिसाब से खाद डालने पर अक्सर बोरी कम लगती है — यानी असली,
        गिनने लायक बचत।
      </p>

      <figure className="my-5 rounded-2xl overflow-hidden border border-[var(--color-border)]">
        <Image
          src="/images/articles/soil-health-card-complete-guide-2026/hero.webp"
          alt="Soil Health Card की report के साथ खेत में किसान"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          मिट्टी का free test — खाद की असली बचत यहीं से शुरू होती है
        </figcaption>
      </figure>
      <p>
        दूसरा रास्ता <strong>Nano DAP</strong> है — IFFCO की 500 ml की बोतल, दाम करीब ₹250–350, जो कई
        कामों में 50 kg की ₹1,350 वाली granular DAP बोरी की जगह ले लेती है। कहां यह फायदे का सौदा है और
        कहां पुरानी बोरी ही सही — यह हिसाब{' '}
        <Link href="/articles/NanoDap500mlPriceInIndia2026" className="underline">Nano DAP price गाइड</Link>{' '}
        में किया है। नीयत यह समझने की है: सरकार से खाद का पैसा खाते में नहीं आता, पर खाद पर आपका अपना
        खर्च कम जरूर हो सकता है — बिना किसी fake registration के।
      </p>

      <Head2>OTP दे दिया और पैसा कट गया — तुरंत ये करिए</Head2>
      <p>
        अगर यह article पढ़ने से पहले ही किसी &ldquo;खाद योजना registration&rdquo; में OTP दे बैठे हैं और
        खाते से पैसा कट गया, तो घबराकर बैठिए मत — पहले घंटे में की गई शिकायत का वजन सबसे ज्यादा होता है।
        तीन काम, इसी क्रम में:
      </p>
      <p>
        पहला — <strong>1930</strong> पर call कीजिए। यह cyber crime की national helpline है; जल्दी report
        होने पर बैंक transaction रोकने या पैसा freeze कराने की कोशिश करते हैं। दूसरा —{' '}
        <strong>cybercrime.gov.in</strong> पर online शिकायत दर्ज कीजिए और complaint number संभालकर रखिए।
        तीसरा — अपनी bank branch को उसी दिन बताइए, ताकि खाते पर आगे की transaction block हो। और घर में
        जो बड़े-बुजुर्ग PM किसान के beneficiary हैं, उन्हें यह जरूर समझा दीजिए कि सरकारी योजना का पैसा लेने
        के लिए <em>कभी</em> OTP नहीं बताना पड़ता — fraud का सबसे ज्यादा शिकार वही होते हैं।
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

      <Head2>आज के आज करने लायक 3 काम</Head2>
      <p>
        अफवाह पढ़कर खाली हाथ लौटने से अच्छा, तीन काम कर लीजिए जिनसे असली पैसा पक्का होता है:
      </p>
      <p>
        <strong>1. PM किसान का status देखिए</strong> — pmkisan.gov.in पर &ldquo;Know Your Status&rdquo; में
        eKYC, land seeding और bank seeding तीनों हरे हैं या नहीं। अगली (24वीं) किस्त October 2026 में
        expected है — कमी अभी ठीक करेंगे तो किस्त नहीं अटकेगी।{' '}
        <strong>2. खाद खरीद पर पर्ची और SMS check करिए</strong> — यही आपका सबूत है कि आपको सही
        subsidized दाम लगा।{' '}
        <strong>3. परिवार के WhatsApp group में यह बात आगे भेजिए</strong> — खासकर घर के बड़े-बुजुर्गों
        तक, जो OTP fraud का सबसे आसान निशाना होते हैं। किसी के ₹2,000 बच गए तो यह पूरा article
        सफल है।
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
