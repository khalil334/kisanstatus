import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { buildFaqSchema } from '@/lib/faq-schema';

const FAQS = [
  {
    q: 'क्या 2026 में कोई राष्ट्रीय किसान कर्ज माफी योजना चल रही है?',
    a: 'नहीं। खेती का कर्ज माफ करना राज्यों का काम है, केंद्र का नहीं। पूरे देश के लिए आखिरी बार 2008 में waiver आया था, उससे पहले 1990 में। उसके बाद जो भी कर्ज माफी हुई, किसी एक राज्य ने अपने बजट से की। इसलिए जब कोई साइट "PM Kisan Karj Mafi Yojana form" दिखाए, तो समझ जाइए कि नाम ही गलत है।',
  },
  {
    q: 'मेरे राज्य में योजना नहीं है, KCC default हो गया है. अब क्या रास्ता है?',
    a: 'Waiver का इंतजार सबसे खराब विकल्प है, क्योंकि उसका कोई भरोसा नहीं। बैंक से दो चीजें पूछिए: One Time Settlement (OTS) और restructuring। OTS में बाकी रकम एक बार में कम करके settle होती है; restructuring में किस्त की अवधि बढ़ जाती है या moratorium मिलता है. खासकर जब फसल खराब हुई हो और जिले में गिरदावरी/अन्नावरी घोषित हुई हो। दोनों के लिए आवेदन लिखित में दें और receiving लें।',
  },
  {
    q: 'कर्ज माफ हो गया तो CIBIL ठीक हो जाता है?',
    a: 'तुरंत नहीं। Waiver के बाद बैंक खाते को settled/closed दिखाता है, और credit report पर वह entry कुछ साल रहती है। "Settled" और "closed" में फर्क होता है, और आगे लोन लेते समय बैंक यही देखता है। Waiver के बाद बैंक से No Dues Certificate जरूर लें, और 60-90 दिन बाद अपनी credit report खुद देखें कि खाता update हुआ या नहीं।',
  },
  {
    q: 'KCC का loan भी माफ होता है क्या?',
    a: 'निर्भर करता है scheme की शर्तों पर। ज्यादातर माफी योजनाएं short-term crop loan cover करती हैं. जिनमें KCC से लिया crop loan भी आ सकता है। Tractor loan और dairy loan. यानी term loans. आम तौर पर बाहर रहते हैं। अपनी scheme का GR पढ़ें।',
  },
  {
    q: 'मेरा loan दो बैंकों में है. दोनों माफ होंगे?',
    a: 'Scheme की शर्तों पर निर्भर है. ज्यादातर में प्रति किसान/परिवार एक सीमा (जैसे ₹2 लाख तक) तय होती है, चाहे खाते कितने भी हों। दोनों खातों का मिलाकर बकाया सीमा से ज्यादा है तो बचा हिस्सा आपको खुद चुकाना होगा। GR में family-unit की परिभाषा ध्यान से पढ़ें।',
  },
];

const FAQ_SCHEMA = buildFaqSchema(FAQS);

function Head2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold mt-8 mb-3 leading-snug">{children}</h2>;
}

export default function KisanKarjMafiAllStatesHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="mb-6 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl">
        <p className="text-xs font-bold mb-2">इस पेज का update log</p>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
          <strong>18 अगस्त 2026</strong> — महाराष्ट्र की नई पुण्यश्लोक अहिल्यादेवी होलकर कर्जमाफी योजना के
          पहले चरण की जानकारी जोड़ी। तेलंगाना वाले हिस्से में साफ किया कि वह योजना 2024 में पूरी हो चुकी है।
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          <strong>अगली update</strong>. हर 2 महीने। जिस राज्य का official notification आएगा, वही टेबल में
          जुड़ेगा। सिर्फ घोषणा पर कुछ नहीं लिखा जाता।
        </p>
      </div>

      <p>
        पहले वह बात, जो आपको कहीं और मुश्किल से मिलेगी।{' '}
        <strong>&ldquo;किसान कर्ज माफी योजना&rdquo; नाम की कोई एक राष्ट्रीय योजना नहीं है।</strong> न कोई
        केंद्रीय पोर्टल है जहां सब राज्यों के किसान अपना नाम ढूंढ सकें, न कोई फॉर्म जो भरने से कर्ज माफ हो
        जाए। खेती का कर्ज माफ करना राज्य का फैसला है. अपने बजट से, अपने नियमों से, अपनी टाइमिंग से।
      </p>
      <p>
        इसलिए सही सवाल यह नहीं है कि &ldquo;कर्ज माफी 2026 की लिस्ट कब आएगी&rdquo;। सही सवाल है:{' '}
        <em>मेरे राज्य में अभी कोई योजना चल रही है या नहीं?</em> नीचे की टेबल इसी का जवाब है, और उसमें सिर्फ
        वे राज्य हैं जिनके लिए official notification, GR या पोर्टल मिल गया। जहां सिर्फ बयान है, वहां साफ
        लिखा है कि बयान है।
      </p>

      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
        <Image
          src="/images/articles/hindi-yojna/karj-mafi-list/karj-mafi-hero.webp"
          alt="किसान बैंक की पासबुक और कर्ज के कागज देखता हुआ"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          कर्ज माफी राज्य का फैसला है. कोई राष्ट्रीय योजना नहीं
        </figcaption>
      </figure>

      <Head2>राज्यवार स्थिति. क्या चालू, क्या बंद, क्या सिर्फ बयान</Head2>
      <div className="my-5 overflow-x-auto border-2 border-gray-200 dark:border-gray-700 rounded-2xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3 text-left">राज्य</th>
              <th className="p-3 text-left">योजना</th>
              <th className="p-3 text-left">स्थिति</th>
              <th className="p-3 text-left">पोर्टल</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-medium">महाराष्ट्र</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">पुण्यश्लोक अहिल्यादेवी होलकर शेतकरी कर्जमाफी योजना. ₹2 लाख तक</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-bold text-green-700 dark:text-green-400">चल रही. चरणबद्ध</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">mjpsky.maharashtra.gov.in</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-medium">तेलंगाना</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">रायतु रुणा माफी. ₹2 लाख तक</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-bold">पूरी हो चुकी (2024)</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">clw.telangana.gov.in</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-medium">उत्तर प्रदेश</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">किसान ऋण मोचन योजना (2017) — ₹1 लाख तक</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-bold">पुरानी योजना, छूटे केस</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">upkisankarjrahat.upsdc.gov.in</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-medium">तमिलनाडु</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">सहकारी फसल ऋण माफी. ₹75,000 तक</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs font-bold text-amber-700 dark:text-amber-400">घोषणा. नियम आने हैं</td>
              <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">राज्य सहकारिता विभाग</td>
            </tr>
            <tr>
              <td className="p-3 text-xs font-medium">बाकी राज्य</td>
              <td className="p-3 text-xs">—</td>
              <td className="p-3 text-xs font-bold">कोई official notification नहीं मिला</td>
              <td className="p-3 text-xs">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        छत्तीसगढ़ का नाम इस टेबल में जान-बूझकर नहीं है। वहां कृषक उन्नति योजना में खरीफ 2026 से दलहन, तिलहन,
        मक्का, मिलेट्स और कपास पर ₹15,000 प्रति एकड़ input सहायता दी जा रही है. यह मदद है, कर्ज माफी नहीं।
        दोनों अलग चीजें हैं।
      </p>

      <Head2>महाराष्ट्र. फिलहाल सबसे बड़ी योजना, और उसका एक अजीब सा फायदा</Head2>
      <p>
        2026 में असली काम महाराष्ट्र में हुआ। बजट 2026-27 में{' '}
        <strong>पुण्यश्लोक अहिल्यादेवी होलकर शेतकरी कर्जमाफी योजना</strong> की घोषणा हुई और जून 2026 में इसे
        मंजूरी मिली. लगभग <strong>₹36,585 करोड़</strong> का आकार। इसमें दो हिस्से हैं:{' '}
        <strong>₹2 लाख तक का बकाया फसल ऋण माफ</strong>, और जिन्होंने समय पर कर्ज चुकाया उनके लिए{' '}
        <strong>₹50,000 का प्रोत्साहन</strong>। बकाया की cut-off तारीख <strong>30 सितंबर 2025</strong> रखी
        गई है।
      </p>
      <p>
        अब वह बात जो सबसे ज्यादा गलत लिखी जाती है। महाराष्ट्र के कर्जमाफी पोर्टल पर साफ लिखा है —{' '}
        <strong>&ldquo;अर्ज करण्याची आवश्यकता नाही&rdquo;</strong>, यानी{' '}
        <strong>कोई फॉर्म भरने की जरूरत नहीं है</strong>। बैंक के रिकॉर्ड और सरकारी डेटा से लिस्ट बनती है।
        इसका मतलब दो बातें: पहला, जो साइट आपसे &ldquo;कर्जमाफी application&rdquo; भरवा रही है वह फ्रॉड है।
        दूसरा, आपका काम फॉर्म ढूंढना नहीं. आपका काम यह देखना है कि बैंक ने आपका रिकॉर्ड ठीक भेजा है या
        नहीं। नाम की स्पेलिंग, आधार, खाता नंबर, और एक ही परिवार के दो खाते. गलती इन चार में से किसी एक में
        होती है।
      </p>
      <p>
        पहले चरण में लगभग 31 लाख किसान लिए गए हैं, और पहले उन्हें लिया गया जिनका बकाया ₹2 लाख तक है। जिनका
        कर्ज इससे ज्यादा है, उनके लिए One Time Settlement का रास्ता रखा गया है — यानी ज्यादा कर्ज वाले किसान
        को पूरा माफ होने का इंतजार नहीं करना चाहिए, OTS की बात बैंक से शुरू कर देनी चाहिए।
      </p>
      <div className="my-5 p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-xl text-sm">
        कर्जमाफी का पैसा लोन खाते में जाता है, आपके बचत खाते में नहीं। पासबुक में बैलेंस बढ़ता दिखना जरूरी
        नहीं है. देखने वाली चीज लोन खाते का outstanding है। इसी गलतफहमी में कई किसान ब्रांच में बेवजह बहस
        कर आते हैं।
      </div>

      <Head2>तेलंगाना. यह योजना हो चुकी है, चल नहीं रही</Head2>
      <p>
        तेलंगाना की रायतु रुणा माफी आज भी सबसे ज्यादा सर्च होने वाली कर्ज माफी है, जबकि वह{' '}
        <strong>2024 में पूरी हो चुकी</strong>। तीन चरण थे, 18 जुलाई, 30 जुलाई और 15 अगस्त 2024। कुल{' '}
        <strong>₹17,934 करोड़</strong> से लगभग <strong>22.37 लाख</strong> किसानों के फसल ऋण माफ हुए: पहले
        चरण में ₹1 लाख तक वाले 11,50,193 किसान, दूसरे में ₹1–1.5 लाख वाले 6,40,823, और तीसरे में ₹1.5–2 लाख
        वाले 4,46,832।
      </p>
      <p>
        दो नियम इसमें दिलचस्प थे, और इन्हीं से सबसे ज्यादा शिकायतें आईं। एक. परिवार की पहचान{' '}
        <strong>राशन कार्ड</strong> से हुई, इसलिए एक घर में दो वयस्क किसानों के अलग-अलग कर्ज होने पर भी सीमा
        एक ही परिवार की मानी गई। दो. एक परिवार में कई लोन होने पर{' '}
        <strong>महिला का लोन पहले</strong> माफ किया गया। यह योजना 12 दिसंबर 2018 से 13 दिसंबर 2023 के बीच के
        short-term फसल ऋण पर लागू थी। नाम छूट गया था तो नई लिस्ट का इंतजार मत करें, clw.telangana.gov.in पर
        रिकॉर्ड देखें और जिला कृषि कार्यालय में लिखित शिकायत करें।
      </p>

      <Head2>UP का सच. पुरानी योजना, नए नाम से बेची जा रही है</Head2>
      <p>
        UP में &ldquo;किसान कर्ज माफी योजना 2026&rdquo; नाम से जो चीज घूम रही है, वह असल में{' '}
        <strong>किसान ऋण मोचन योजना</strong> है — जो <strong>2017</strong> में शुरू हुई थी। उसका दायरा भी तय
        है: छोटे और सीमांत किसान (2 हेक्टेयर तक), <strong>₹1 लाख तक</strong> का फसल ऋण, और कर्ज{' '}
        <strong>31 मार्च 2016</strong> तक बकाया होना चाहिए। यानी 2026 में नया लोन लेकर इस योजना में आने का
        सवाल ही पैदा नहीं होता। जो कुछ होता है वह सिर्फ छूट गए या विवादित पुराने केसों का निपटारा है।
      </p>
      <p>
        एक practical बात। UP का पोर्टल (upkisankarjrahat.upsdc.gov.in) बहुत बार खुलता ही नहीं. यह पेज लिखते
        समय भी जवाब नहीं दे रहा था। इसे &ldquo;सर्वर पर लोड क्योंकि नई लिस्ट आ गई&rdquo; वाली अफवाह का
        सबूत मत मानिए। पोर्टल न खुले? सीधे अपनी बैंक ब्रांच या तहसील में पता करें। रिकॉर्ड वहीं
        है। विस्तार से{' '}
        <Link href="/articles/hi/state-kisan-yojana-list" className="underline font-bold">राज्य योजना लिस्ट वाले पेज का UP हिस्सा</Link>{' '}
        देख लीजिए।
      </p>

      <Head2>यह सब होता क्यों है. दो मिनट का background</Head2>
      <p>
        कर्ज माफी का सिलसिला नया नहीं है। 1990 में ARDRS आई थी, जिसमें प्रति किसान ₹10,000 तक की राहत थी और
        कुल खर्च ₹10,000 करोड़। 2008 में ADWDRS आई. ₹52,500 करोड़, मुख्य रूप से 5 एकड़ तक वाले किसानों के
        लिए। 2014 के बाद यह काम राज्यों के हाथ में चला गया, और अलग-अलग राज्यों ने मिलाकर लगभग{' '}
        <strong>₹2.5 लाख करोड़</strong> की घोषणाएं कीं, 2016-17 की GDP का करीब 1.4%।
      </p>
      <p>
        RBI के एक internal working group ने 2019 में जो बात लिखी, वह किसान के लिए काम की है: waiver की
        घोषणाओं और राज्य चुनावों के बीच गहरा रिश्ता दिखता है। इसका मतलब यह नहीं कि योजना झूठी होती है —
        तेलंगाना और महाराष्ट्र दोनों में पैसा असली गया है। मतलब सिर्फ इतना है कि{' '}
        <strong>टाइमिंग राजनीतिक होती है, जरूरत के हिसाब से नहीं।</strong> इसलिए पूरी planning waiver पर
        टिकाना जोखिम है। जो किसान 2019 से &ldquo;अगले साल माफ हो जाएगा&rdquo; सोचकर किस्त रोकता रहा, उसका
        ब्याज बढ़ता गया और खाता NPA में चला गया।
      </p>

      <Head2>एक सच्ची timeline. पिछली फुले कर्जमुक्ती में क्या-क्या हुआ था</Head2>
      <p>
        घोषणा और पैसे के बीच की दूरी समझनी हो तो पिछली बार का record देख लीजिए। दिसंबर 2019 में महाराष्ट्र
        सरकार ने महात्मा ज्योतिराव फुले शेतकरी कर्जमुक्ती योजना घोषित की. ₹2 लाख तक के crop loans,
        cut-off 30/09/2019। पहली beneficiary list <strong>24/02/2020</strong> को आई. यानी घोषणा से
        पहली list तक ही करीब ढाई महीने। फिर आधार सत्यापन का दौर चला — किसान को खुद CSC या बैंक जाकर
        अंगूठा लगाना पड़ता था, तभी रकम loan account में जाती थी।
      </p>
      <p>
        उस scheme से तीन सबक आज भी काम के हैं। पहला, <strong>list किस्तों में आती है</strong>; पहली list
        में नाम न दिखे तो घबराने की जरूरत नहीं। दूसरा, application का कोई लंबा form नहीं था; process
        paperless थी और आधार ही मुख्य पहचान था। जिसका आधार loan account से जुड़ा नहीं था, उसी का मामला
        अटका। तीसरा. सत्यापन के बिना पैसा नहीं आया, चाहे नाम list में हो।
      </p>

      <Head2>Biometric सत्यापन वाले दिन क्या होता है</Head2>
      <p>
        नाम list में आने के बाद का step ज्यादातर articles छोड़ देते हैं, जबकि असली अटकाव उसी मोड़ पर आता
        है। सत्यापन के लिए एक <strong>unique ID</strong> मिलती है (फुले कर्जमुक्ती में यह list के साथ छपती
        थी)। वह ID और आधार लेकर CSC या बैंक branch जाइए। Screen पर आपका loan detail दिखता है. कौन सा
        बैंक, कितना बकाया. और आपको confirm करना होता है।
      </p>
      <p>
        यहीं दो बातें ध्यान की हैं। पहली, screen पर दिखी रकम आपके हिसाब से गलत है तो
        <strong> confirm मत कीजिए</strong>। आपत्ति दर्ज करने का विकल्प होता है. उसका इस्तेमाल करें, बैंक
        से statement लेकर मिलान करें। गलत रकम एक बार confirm हुई, तो सुधरवाना लंबा काम। दूसरी —
        बुजुर्ग किसानों में अंगूठे की लकीरें घिसने से biometric fail होना आम बात है। iris scan का विकल्प
        मांगिए, या आधार केंद्र जाकर biometric update कराइए।
      </p>

      <figure className="my-5 rounded-2xl overflow-hidden border border-[var(--color-border)]">
        <Image
          src="/images/articles/hindi-yojna/karj-mafi-list/biometric-verify.webp"
          alt="CSC पर आधार से biometric सत्यापन कराता किसान"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          सत्यापन के दिन — unique ID, आधार और अपना loan statement साथ रखिए
        </figcaption>
      </figure>

      <Head2>फर्जी लिस्ट वाली साइटें, pattern पहचानिए</Head2>
      <p>
        कर्ज माफी के नाम पर ठगी अब काफी सफाई से होती है। साइट सरकारी जैसी दिखती है, अशोक स्तंभ लगा होता है,
        &ldquo;नई सूची जारी&rdquo; लिखा होता है। कुछ निशानियां याद रखिए:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li><strong>डोमेन gov.in नहीं है।</strong> सरकारी पोर्टल हमेशा gov.in या nic.in पर होता है।</li>
        <li><strong>OTP मांगा जा रहा है।</strong> लिस्ट देखने के लिए OTP की जरूरत कभी नहीं पड़ती।</li>
        <li><strong>कोई फीस या QR code।</strong> ₹99, ₹200, कुछ भी। सरकारी लिस्ट मुफ्त है।</li>
        <li><strong>&ldquo;फॉर्म भरो, कर्ज माफ होगा&rdquo;।</strong> महाराष्ट्र जैसी योजना में तो फॉर्म ही नहीं होता।</li>
        <li><strong>WhatsApp पर PDF।</strong> &ldquo;आपके गांव की लिस्ट&rdquo; वाली PDF में अक्सर APK download का लिंक होता है, जो फोन से OTP पढ़ता है।</li>
      </ul>

      <Head2>योजना नहीं है तो क्या करें. चार असली रास्ते</Head2>
      <p>
        ज्यादातर किसान इस पेज पर इस उम्मीद में आते हैं कि उनका कर्ज माफ होगा। ईमानदारी से: अगर आपका राज्य
        लिस्ट में नहीं है, तो संभावना कम है। पर कर्ज के साथ जीने के रास्ते हैं, और वे waiver से ज्यादा
        भरोसेमंद हैं।
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>
          <strong>One Time Settlement (OTS)</strong>. जब खाता NPA हो गया हो। बैंक एक बार में settle करने पर
          कुछ हिस्सा छोड़ देता है। आवेदन लिखित में दें, और settlement के बाद No Dues Certificate लेना मत
          भूलें।
        </li>
        <li>
          <strong>Restructuring / rescheduling</strong>. फसल खराब हुई हो और जिले में गिरदावरी या अन्नावरी
          घोषित हुई हो तो KCC को term loan में बदलने या moratorium देने का प्रावधान होता है। यह माफी नहीं,
          सांस लेने का वक्त है।
        </li>
        <li>
          <strong>Interest subvention</strong>. समय पर चुकाने वाले किसान को फसल ऋण 4% पर पड़ता है। पूरा
          हिसाब{' '}
          <Link href="/articles/hi/kcc-limit-kaise-badhaye" className="underline">KCC लिमिट वाले पेज</Link>{' '}
          पर है।
        </li>
        <li>
          <strong>लिमिट बढ़वाना</strong>. कई बार दिक्कत कर्ज की नहीं, कम लिमिट की होती है। जमीन के हिसाब से
          लिमिट बढ़वाने पर साहूकार से उधार लेने की मजबूरी खत्म होती है।
        </li>
      </ul>
      <div className="my-5 p-4 border-l-4 border-green-600 bg-green-50 dark:bg-green-900/20 rounded-r-xl text-sm">
        एक छोटी सी आदत बहुत काम आती है. बैंक में जो भी आवेदन दें, उसकी एक कॉपी पर ब्रांच की receiving मुहर
        लगवा लें। जब केस zonal office या grievance में जाता है, तो तारीख का सबूत आपके हाथ में होना चाहिए।
      </div>

      <Head2>घोषणा हो जाए तो पहले यह करें</Head2>
      <p>
        घोषणा और अमल के बीच अक्सर कई महीने होते हैं। उस बीच तीन काम कर लें। पहला। बैंक पासबुक और लोन
        statement की कॉपी निकाल लें, क्योंकि cut-off तारीख वाले outstanding पर ही सब तय होता है। दूसरा —
        आधार, खाता और जमीन के रिकॉर्ड में नाम एक जैसा है या नहीं, यह मिलाएं; लिस्ट से नाम छूटने की सबसे आम
        वजह mismatch होती है। तीसरा. GR या government order का नंबर नोट कर लें, क्योंकि ब्रांच में योजना का
        नंबर बोलना और &ldquo;टीवी पर देखा था&rdquo; बोलना, दोनों का असर अलग होता है।
      </p>
      <p>
        और हां. कर्ज माफी के इंतजार में चल रही किस्त रोकना सबसे महंगा फैसला है। किस्त रुकी तो ब्याज चढ़ेगा।
        खाता NPA में जाएगा। और अगला लोन? बंद। नोटिस आ चुका है तो{' '}
        <Link href="/articles/hi/recovery-notice" className="underline font-bold">recovery notice वाला पेज</Link>{' '}
        पढ़ लें. उसमें जवाब देने का तरीका लिखा है।
      </p>

      <Head2>अक्सर पूछे जाने वाले सवाल</Head2>
      <div className="space-y-4">
        {FAQS.map((f) => (
          <div key={f.q} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
            <p className="font-bold text-sm mb-2">{f.q}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <Head2>Sources</Head2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          महात्मा ज्योतिराव फुले शेतकरी कर्जमुक्ती योजना. सहकार विभाग, महाराष्ट्र शासन:{' '}
          <a href="https://mjpsky.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="underline">mjpsky.maharashtra.gov.in</a>
        </li>
        <li>
          तेलंगाना Crop Loan Waiver. कृषि विभाग:{' '}
          <a href="https://clw.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="underline">clw.telangana.gov.in</a>
        </li>
        <li>
          UP किसान ऋण मोचन योजना:{' '}
          <a href="https://upkisankarjrahat.upsdc.gov.in" target="_blank" rel="noopener noreferrer" className="underline">upkisankarjrahat.upsdc.gov.in</a>
        </li>
        <li>RBI Internal Working Group on Agricultural Credit (2019)।</li>
      </ul>

      <p className="text-xs text-gray-500 mt-6">
        अंतिम अपडेट: {new Date(article.modifiedTime).toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>
    </>
  );
}
