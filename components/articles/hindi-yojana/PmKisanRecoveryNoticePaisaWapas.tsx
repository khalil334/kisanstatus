import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'Notice मिला है पर मैं पात्र हूं — क्या फिर भी लौटाना पड़ेगा?',
    a: 'नहीं — पहले आपत्ति दर्ज कराइए। कृषि विभाग/तहसील में जाकर अपने कागज (खतौनी, आधार, यह प्रमाण कि आप tax payer नहीं हैं) दिखाइए। गलती से नाम अपात्र सूची में जुड़ने के मामले पलटे भी गए हैं। बिना पड़ताल पैसे मत लौटाइए, और बिना जवाब दिए notice मत दबाइए।',
  },
  {
    q: 'पूरा पैसा एक साथ नहीं है — किस्तों में लौटा सकते हैं?',
    a: 'Online refund में जितनी किस्तें चुनेंगे उतनी ही लौटती हैं — यानी हिस्सों में लौटाना तकनीकी रूप से संभव है। पर district recovery के मामलों में शर्तें स्थानीय प्रशासन तय करता है, वहीं से लिखित में पूछना ठीक रहेगा।',
  },
  {
    q: 'वापस न करूं तो क्या होगा?',
    a: 'राज्यों को अपात्र लाभार्थियों से वसूली का साफ आदेश है। टालने पर मामला भू-राजस्व वसूली की तरह आगे बढ़ सकता है और भविष्य की सरकारी सुविधाओं में अड़चन आ सकती है। पात्र नहीं हैं तो सीधा रास्ता ही सस्ता पड़ता है।',
  },
  {
    q: 'Income tax एक बार भर दिया था, उसी साल का notice आया — गिनती कैसे होती है?',
    a: 'नियम यह है कि किसान परिवार (पति-पत्नी-नाबालिग बच्चे) में कोई income tax payer हो तो वह परिवार अपात्र है। जांच पिछले assessment years के record से होती है। किस अवधि की किस्तें वसूली में गिनी गईं, यह notice में लिखा होता है — वही आधार है।',
  },
  {
    q: 'Refund कर दिया — proof क्या रहेगा?',
    a: 'Online payment की receipt/transaction number संभाल कर रखें और portal पर Refund Status में entry दिखने लगे, उसका screenshot भी। आगे कोई पत्र आए तो यही आपका बचाव है।',
  },
  {
    q: 'पैसा लौटाने के बाद भी recovery का message आ रहा है?',
    a: 'भुगतान दर्ज होने में समय लगता है। हफ्ते-दो हफ्ते बाद भी status न बदले तो receipt लेकर कृषि विभाग में और portal की grievance में — दोनों जगह record सुधारने की request डालें।',
  },
  {
    q: 'Notice पर न कोई मुहर है, न अधिकारी का नाम — क्या यह असली है?',
    a: 'शक करने की पूरी वजह है। असली notice में जारी करने वाले कार्यालय का नाम, अवधि, रकम और जवाब देने की प्रक्रिया लिखी होती है। बिना पहचान वाला कागज या सिर्फ WhatsApp-message लेकर ब्लॉक के कृषि अधिकारी से पुष्टि करें — पैसा तब तक कहीं न भेजें।',
  },
  {
    q: 'पति और पत्नी दोनों को किस्तें मिलती रहीं — वसूली किससे होगी?',
    a: 'नियम से एक परिवार में एक ही लाभार्थी हो सकता है। ऐसे मामलों में आम तौर पर बाद वाली/दोहरी entry की किस्तें वसूली में गिनी जाती हैं। कौन सी entry रखनी है और किसका surrender करना है — यह तहसील/कृषि विभाग में record दिखाकर तय करवाएं।',
  },
  {
    q: 'जमीन बंटवारे में चली गई थी, फिर भी किस्तें आती रहीं — यह भी recovery बनेगा?',
    a: 'बन सकता है — पात्रता जमीन के record से जुड़ी है। जिस अवधि में जमीन आपके नाम नहीं थी, उस अवधि की किस्तें जांच में अपात्र गिनी जा सकती हैं। खतौनी की तारीखें देखकर ही notice का जवाब दें; अंदाजे से न लौटाएं, न इनकार करें।',
  },
  {
    q: 'क्या refund करने के बाद दोबारा योजना में जुड़ सकते हैं?',
    a: 'अगर अपात्रता की वजह अब खत्म हो गई है (जैसे नौकरी छूट गई, या record की गलती सुधर गई) तो नए सिरे से आवेदन का रास्ता खुला है — पर पात्रता की शर्तें उसी दिन से पूरी होनी चाहिए। पुराना refund इसमें बाधा नहीं है, बल्कि साफ record मदद ही करता है।',
  },
  {
    q: 'Notice का जवाब देने की कोई समय-सीमा होती है?',
    a: 'Notice में लिखी होती है — वही मान्य है। लिखी न हो तो भी टालें नहीं; जितनी जल्दी आपत्ति या भुगतान दर्ज होगा, उतना मामला हल्का रहेगा। हर जवाब लिखित में दें और received-मुहर वाली copy अपने पास रखें।',
  },
  {
    q: 'वकील करना पड़ेगा या खुद निपट सकते हैं?',
    a: 'ज्यादातर मामले — गलत entry की आपत्ति, refund, record सुधार — कृषि विभाग/तहसील के स्तर पर खुद निपट जाते हैं, कोई फीस भी नहीं लगती। वकील की जरूरत तभी है जब मामला भू-राजस्व वसूली की कानूनी कार्रवाई तक पहुंच जाए।',
  },
];

const RELATED = [
  { slug: 'PmKisanVoluntarySurrenderGuide', title: 'Voluntary Surrender Guide', emoji: '🙏' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status — Re-apply', emoji: '🔁' },
  { slug: 'hindi/helpline-shikayat', title: 'हेल्पलाइन और शिकायत', emoji: '📞' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
];

export default function PmKisanRecoveryNoticePaisaWapas({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        संसद में दिया गया आंकड़ा है — देश भर में अपात्र लाभार्थियों से <strong>₹416 करोड़ से ज्यादा</strong>{' '}
        की वसूली हो चुकी है (कृषि मंत्री का{' '}
        <a
          href="https://timesofindia.indiatimes.com/india/pm-kisan-rs-416cr-recovered-from-ineligible-tillers/articleshow/119503444.cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          लोकसभा में लिखित उत्तर
        </a>
        )। यानी recovery notice कोई
        इक्का-दुक्का घटना नहीं — यह योजना की सफाई-प्रक्रिया का हिस्सा है, जो income tax, UIDAI और PFMS के
        record मिलाकर चल रही है। अगर आपके पास ऐसा notice आया है, तो घबराने से पहले यह समझ लीजिए कि यह
        आता क्यों है और आपके पास रास्ते क्या हैं।
      </p>
      <p>
        इस guide का ढांचा एक फैसले जैसा है। पहले जांचेंगे कि notice असली है या ठगी। फिर तीन रास्तों में से
        अपना रास्ता चुनेंगे — notice गलत है तो आपत्ति, सही है तो refund, और समझ न आए तो पड़ताल। हर रास्ते
        का तरीका, कागज और सावधानी नीचे क्रम से लिखी है। बीच से न पढ़ें — पहला section ही तय करेगा कि आगे
        कौन सा हिस्सा आपके काम का है।
      </p>

      <SH>सबसे पहले — यह notice असली भी है?</SH>
      <p>
        वसूली का डर ठगों का सबसे चमकदार औजार है, इसलिए पहला काम भुगतान नहीं, <strong>पहचान</strong> है।
        असली notice में ये चीजें लिखी मिलेंगी — जारी करने वाले कार्यालय का नाम (कृषि विभाग/जिला प्रशासन),
        आपका registration से जुड़ा विवरण, किस अवधि की कितनी किस्तें वसूली में गिनी गईं, कुल रकम, और जवाब
        या भुगतान की प्रक्रिया। इनमें से कुछ भी गायब हो — खासकर अगर "इस number पर UPI करो" जैसा निर्देश
        हो — तो रुक जाइए।
      </p>
      <WB>
        ठगों का पसंदीदा मौसम यही है। "Recovery notice आया है, इस number पर पैसा भेजो वरना FIR होगी" —
        ऐसे call/WhatsApp fraud हैं। सरकारी वसूली या तो portal के Refund Online से होती है या लिखित
        सरकारी प्रक्रिया से — किसी के निजी खाते/UPI पर कभी नहीं। शक हो तो notice लेकर सीधे ब्लॉक के कृषि
        अधिकारी के पास जाइए — पुष्टि मुफ्त है, जल्दबाजी महंगी।
      </WB>

      <SH>Notice आता किसे है?</SH>
      <p>
        योजना शुरू में भरोसे पर चली थी — self-certification से नाम जुड़े। बाद में database की जांच income
        tax record, आधार और दूसरी सरकारी सूचियों से होने लगी, और जो परिवार नियम से बाहर निकले, उनसे मिली
        रकम वापस मांगी जाने लगी। मोटे तौर पर ये श्रेणियां हैं:
      </p>
      <StepList>
        <SI n={1}><strong>Income tax भरने वाले</strong> — परिवार में कोई भी tax payer हो, परिवार अपात्र।</SI>
        <SI n={2}><strong>सरकारी सेवा</strong> — केंद्र/राज्य/PSU के कार्यरत या retired कर्मचारी (चतुर्थ श्रेणी/multi-tasking staff छोड़कर), और ₹10,000+ मासिक pension वाले।</SI>
        <SI n={3}><strong>पेशेवर</strong> — registered doctor, engineer, वकील, CA, architect जो practice में हों।</SI>
        <SI n={4}><strong>संवैधानिक पद</strong> — वर्तमान/पूर्व सांसद, विधायक, मंत्री, मेयर वगैरह।</SI>
        <SI n={5}><strong>दोहरी entry / जमीन नहीं</strong> — एक परिवार से दो नाम, या record में खेती की जमीन ही नहीं।</SI>
      </StepList>

      <IB>
        और एक बात साफ कर दें — अगर आपकी किस्त सिर्फ <em>रुकी</em> है (eKYC या verification की वजह से),
        तो वह recovery का मामला नहीं है। वसूली सिर्फ उनसे होती है जो नियम से अपात्र निकले। रुकी किस्त वालों
        के लिए <Link href="/articles/hindi/payment-stopped-by-state">यह guide</Link> है।
      </IB>

      <SH>अब फैसला — आपके सामने तीन रास्ते हैं</SH>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">आपकी स्थिति</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">रास्ता</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">पहला कदम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">नियम से पात्र हैं, notice गलती से आया</td>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">आपत्ति (objection)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">कागज जोड़कर कृषि विभाग/तहसील में लिखित जवाब</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">सच में अपात्र निकले (tax, नौकरी, दोहरी entry…)</td>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Refund</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Portal का Refund Online (नीचे तरीका)</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">समझ नहीं आ रहा कि अपात्र क्यों गिने गए</td>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">पड़ताल</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Notice लेकर ब्लॉक कृषि अधिकारी से वजह लिखवाएं</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        तीसरा रास्ता सबसे ज्यादा अनदेखा होता है, जबकि होना पहला चाहिए। वसूली की वजह जाने बिना न आपत्ति ठोस
        बनती है, न refund की रकम पक्की होती है। इसलिए असमंजस में हैं तो पहले वजह — फिर फैसला।
      </p>

      <SH>रास्ता 1 — पात्र हैं तो आपत्ति ऐसे कीजिए</SH>
      <p>
        गलत entry के मामले असल में होते हैं — नाम-मिलान की चूक, हमनाम व्यक्ति का tax record आपसे जुड़ जाना,
        या पुरानी नौकरी की गलत जानकारी। आपत्ति का वजन कागजों से बनता है, बहस से नहीं। साथ ले जाइए:
      </p>
      <StepList>
        <SI n={1}><strong>Notice की copy</strong> — उसी पर लिखा होगा कि किस आधार पर अपात्र गिने गए।</SI>
        <SI n={2}><strong>खतौनी/जमीन का ताजा record</strong> — अगर वजह जमीन से जुड़ी बताई गई है।</SI>
        <SI n={3}><strong>आधार card</strong> और registration का विवरण।</SI>
        <SI n={4}><strong>Tax न भरने का प्रमाण</strong> — अगर वजह income tax बताई गई है (हमनाम की गड़बड़ी यहीं पकड़ी जाती है)।</SI>
        <SI n={5}>अपना लिखित जवाब — दो प्रतियों में, ताकि एक पर received की मुहर लगवाकर वापस ले सकें।</SI>
      </StepList>
      <p>
        जवाब ब्लॉक/जिला कृषि कार्यालय में दें और उसी दिन portal की grievance (Help Desk) में भी entry डाल
        दें — एक ही बात दो record में दर्ज हो तो आगे "हमें मिला ही नहीं" वाली दीवार नहीं उठती। सुनवाई में
        समय लगे तो शिकायत का number लेकर ऊपर की सीढ़ी है — जिला कृषि अधिकारी, फिर राज्य का Nodal Officer।
      </p>

      <SH>रास्ता 2 — पैसा online लौटाने का तरीका</SH>
      <StepList>
        <SI n={1}>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a>{' '}
          खोलें — Farmers Corner में <strong>Refund Online</strong> का विकल्प है।
        </SI>
        <SI n={2}>"If not paid earlier…" वाला विकल्प चुनें (पहली बार लौटा रहे हैं तो यही आपका रास्ता है)।</SI>
        <SI n={3}>आधार number / खाता number / mobile — किसी एक से अपना record खोलें, captcha भरें।</SI>
        <SI n={4}>Screen पर अब तक मिली किस्तें दिखेंगी — जो लौटानी हैं, उन्हें tick करें, email और contact भरें।</SI>
        <SI n={5}>Details confirm करें, बैंक चुनकर online भुगतान करें, और <strong>receipt संभालकर रखें</strong>।</SI>
      </StepList>
      <p>
        कुछ राज्यों में वसूली district प्रशासन के जरिए अलग खाते में भी होती है — notice में जो तरीका लिखा
        है, वही मान्य है। असमंजस हो तो notice लेकर ब्लॉक के कृषि अधिकारी से पुष्टि कर लें; बीच के किसी आदमी
        के हाथ में नकद कभी न दें।
      </p>
      <p>
        भुगतान से पहले एक मिनट रुककर रकम का हिसाब जरूर मिला लें — notice में लिखी रकम और portal पर दिख
        रही किस्तों का जोड़ बराबर बैठना चाहिए। फर्क दिखे — जैसे notice में ज्यादा किस्तें गिनी गई हों — तो
        पहले कृषि विभाग से मिलान करवाएं, फिर भुगतान करें। एक बार लौटाई रकम का सुधार लंबी प्रक्रिया है —
        सही गिनती पहले कर लेना आसान है।
      </p>

      <SH>Refund के बाद के तीन काम — यहीं आधे लोग चूकते हैं</SH>
      <p>
        भुगतान हो जाना कहानी का अंत नहीं है। पहला काम — transaction receipt की photo अपने phone के साथ-साथ
        कागज पर भी रखिए; सरकारी record में भुगतान चढ़ने में समय लगता है और उस बीच का एकमात्र सबूत यही है।
        दूसरा — हफ्ते-दो हफ्ते बाद portal पर Refund Status देखिए कि entry दिखने लगी; दिखे तो screenshot
        रख लीजिए। तीसरा — अगर आगे किस्तें नहीं लेनी हैं तो voluntary surrender भी दर्ज करवा दीजिए, वरना
        अगली release पर फिर वही चक्र शुरू हो सकता है।
      </p>

      <SH>तीन राज्य, तीन कहानियां — वसूली जमीन पर कैसी दिखती है</SH>
      <p>
        Recovery की खबरें अखबारों में आती रहती हैं, पर तीन मामले खास तौर पर पढ़ने लायक हैं — क्योंकि
        तीनों में सबक अलग है।
      </p>
      <p>
        <strong>पहली कहानी — Bihar, जहां बैंक खाते तक freeze हुए।</strong> राज्य के कृषि विभाग की जांच में{' '}
        <a
          href="https://economictimes.indiatimes.com/news/economy/agriculture/over-81000-farmers-deemed-ineligible-for-pm-kisan-scheme-in-bihar/articleshow/103555468.cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          81,595 किसान अपात्र पाए गए
        </a>{' '}
        — इनमें 45,879 वे थे जो 2020 के बाद income tax भर रहे थे, बाकी 35,716 दूसरी वजहों से। कुल वसूली की
        रकम करीब ₹81.6 करोड़ बनी, और विभाग ने बैंकों से कहा कि जरूरत पड़े तो ऐसे लाभार्थियों के खाते freeze
        कर दिए जाएं। खबर छपने तक करीब ₹10.3 करोड़ की वसूली हो भी चुकी थी। सबक साफ है — यह मान लेना कि
        "कौन पीछे पड़ेगा", अब पुरानी बात है; वसूली का रास्ता सीधे आपके बैंक तक पहुंचता है।
      </p>
      <p>
        <strong>दूसरी कहानी — UP, जहां गिनती लाखों में निकली।</strong> राज्य के कृषि मंत्री ने खुद बताया था कि
        प्रदेश में चुने गए 2.85 करोड़ लाभार्थियों की जांच में{' '}
        <a
          href="https://www.ndtv.com/india-news/pm-kisan-scheme-21-lakh-farmers-selected-in-up-found-ineligible-3324528"
          target="_blank"
          rel="noopener noreferrer"
        >
          21 लाख किसान अपात्र मिले
        </a>{' '}
        और उनसे मिली रकम वापस ली जाएगी। इनमें बड़ी संख्या उन घरों की थी जहां पति-पत्नी दोनों किस्तें ले रहे
        थे — यानी वही दोहरी-entry वाली श्रेणी जो ऊपर की सूची में पांचवें नंबर पर है। बहुत से परिवारों को पता
        भी नहीं था कि नियम "एक परिवार, एक लाभार्थी" कहता है। अनजाने में हुई गलती भी वसूली से नहीं बचाती —
        हां, आगे का रास्ता (refund या आपत्ति) जरूर आसान रहता है अगर आप खुद कागज लेकर पहुंचें।
      </p>
      <p>
        <strong>तीसरी कहानी — Tamil Nadu, जहां किसान नहीं, ठग पकड़े गए।</strong> Cuddalore और आसपास के जिलों
        में login credentials चुराकर फर्जी लाभार्थी portal पर चढ़ा दिए गए थे। कृषि मंत्री ने संसद में बताया कि
        राज्य ने{' '}
        <a
          href="https://www.ndtv.com/india-news/centre-says-transferred-rs-38-282-crore-to-farmers-between-april-and-august-2295945"
          target="_blank"
          rel="noopener noreferrer"
        >
          ₹47 करोड़ वसूल किए, CB-CID ने 10 मामले दर्ज कर 16 आरोपी पकड़े
        </a>{' '}
        और 19 संविदा कर्मियों की सेवाएं खत्म की गईं। इस कहानी का सबक अलग है — अगर आपने कभी आवेदन ही नहीं
        किया और फिर भी recovery का कागज आ गया, तो हो सकता है आपके नाम पर किसी और ने खेल किया हो। ऐसे में
        पैसा लौटाना नहीं, FIR और कृषि विभाग में लिखित शिकायत पहला कदम है।
      </p>

      <SH>एक किसान की refund-यात्रा — दिन-ब-दिन</SH>
      <p>
        प्रक्रिया किताब में जितनी सीधी दिखती है, जमीन पर उसका समय-चक्र समझना उतना ही जरूरी है। एक आम
        मामला कुछ ऐसे चलता है:
      </p>
      <StepList>
        <SI n={1}>
          <strong>दिन 1</strong> — notice मिला। उसी दिन उसकी photo खींचकर रख ली और ब्लॉक कृषि कार्यालय में
          जाकर वजह की पुष्टि कर ली (हमारे उदाहरण में वजह income tax निकली, जो सही थी)।
        </SI>
        <SI n={2}>
          <strong>दिन 2-3</strong> — portal पर Refund Online खोला, किस्तों का जोड़ notice की रकम से मिलाया।
          जोड़ बराबर बैठा, online भुगतान किया, receipt का print और photo दोनों रखे।
        </SI>
        <SI n={3}>
          <strong>हफ्ता 2</strong> — Refund Status में entry दिखने लगी। साथ ही voluntary surrender भी दर्ज
          करवा दिया ताकि अगली release पर नई किस्त आकर नया बकाया न बना दे।
        </SI>
        <SI n={4}>
          <strong>महीना 2</strong> — एक reminder-पत्र आया (record में भुगतान देर से चढ़ा था)। receipt की copy
          के साथ लिखित जवाब दिया, received-मुहर ली — मामला वहीं बंद।
        </SI>
      </StepList>
      <p>
        चौथा कदम ध्यान से पढ़िए — भुगतान के <em>बाद</em> भी एक बार कागजी झंझट आ सकता है, और उससे निपटने
        का एकमात्र हथियार वही receipt है जो दिन 2-3 पर संभाली गई थी। जो लोग receipt नहीं रखते, उनके लिए यही
        reminder महीनों की भाग-दौड़ बन जाता है।
      </p>

      <SH>राज्य बदलते ही तरीका बदल जाता है — इसे नजरअंदाज न करें</SH>
      <p>
        केंद्र का portal एक है, पर वसूली का जमीनी अमल राज्य करते हैं — और तरीके अलग-अलग हैं। Bihar
        में बैंकों को आगे करके वसूली हुई; कई राज्यों में तहसील/जिला प्रशासन अलग खाते में जमा करवाता है;
        कहीं सिर्फ portal का Refund Online ही मान्य है। इसीलिए दो नियम पक्के रखिए: पहला — जो तरीका
        आपके notice में लिखा है वही आपके लिए अंतिम है, किसी और जिले के रिश्तेदार का अनुभव आप पर लागू नहीं
        होगा। दूसरा — तरीका चाहे जो हो, भुगतान सरकारी खाते/portal में ही जाएगा — नकद मांगने वाला हर
        बिचौलिया आपकी जेब का रास्ता खोज रहा है।
      </p>

      <SH>Notice दबा देने की कीमत — टालने वालों के लिए दो शब्द</SH>
      <p>
        कुछ किसान notice पढ़कर सोचते हैं — "अभी तो सिर्फ कागज है, देखा जाएगा।" यह सोच महंगी पड़ती है।
        वसूली का मामला दर्ज हो चुका है, और जवाब न देने का मतलब system की नजर में यह है कि आपको कहना
        कुछ नहीं। इसके बाद की सीढ़ियां भारी होती जाती हैं — पहले reminder, फिर मामला भू-राजस्व वसूली की तरह
        आगे बढ़ने का प्रावधान, और उस बीच आपकी अगली किस्तें तो रुकती ही हैं, दूसरी सरकारी योजनाओं के
        verification में भी यह बकाया record सामने आ सकता है।
      </p>
      <p>
        इसके उलट, जवाब देने वाले का record हमेशा हल्का रहता है — चाहे जवाब आपत्ति हो या refund। सरकारी
        प्रक्रिया में सबसे मजबूत स्थिति उसकी होती है जिसके पास हर कदम का लिखित सबूत है: notice की copy,
        received-मुहर वाला जवाब, grievance का number, भुगतान की receipt। एक पुरानी file बनाकर सब एक
        जगह रखिए — यह आदत सिर्फ इस notice में नहीं, आगे हर सरकारी काम में काम आएगी।
      </p>

      <SH>अपात्र हैं पर notice अभी नहीं आया — तो?</SH>
      <p>
        बेहतर है खुद आगे बढ़कर नाम हटवा लें — portal पर voluntary surrender की सुविधा है, जिससे आगे की
        किस्तें बंद हो जाती हैं और मामला बढ़ने से पहले सुलझ जाता है। तरीका{' '}
        <Link href="/articles/PmKisanVoluntarySurrenderGuide">surrender guide</Link> में है। सच कहें तो
        यही सबसे इज्जतदार रास्ता है — वसूली का पत्र आने का इंतजार करने से कहीं अच्छा। फर्क समझ लीजिए:
        surrender आगे की किस्तें रोकता है, refund पिछली किस्तें लौटाता है — अपात्र व्यक्ति के लिए पूरा
        समाधान अक्सर दोनों मिलाकर बनता है।
      </p>

      <DB>
        ऊपर की UP वाली कहानी का दूसरा पहलू भी याद रखिए — जांच में अपात्र निकले लाखों लोगों में बहुतों को
        पता ही नहीं था कि income tax भरने से पात्रता चली जाती है। नियम पढ़े बिना योजना में बने रहना ही
        जोखिम है — पात्रता की पूरी सूची{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide</Link> में देख लें।
      </DB>

      <SH>Notice मिलने के बाद उठने वाले सवाल — सीधे जवाब</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        वसूली का राष्ट्रीय आंकड़ा (₹416 करोड़+) कृषि मंत्री के लोकसभा में दिए{' '}
        <a
          href="https://timesofindia.indiatimes.com/india/pm-kisan-rs-416cr-recovered-from-ineligible-tillers/articleshow/119503444.cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          लिखित उत्तर (Times of India)
        </a>{' '}
        से, Bihar की वसूली{' '}
        <a
          href="https://economictimes.indiatimes.com/news/economy/agriculture/over-81000-farmers-deemed-ineligible-for-pm-kisan-scheme-in-bihar/articleshow/103555468.cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Economic Times (PTI)
        </a>{' '}
        से, और UP व Tamil Nadu के मामले NDTV की रिपोर्टों से लिए गए हैं। Refund की online प्रक्रिया{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        Refund Online flow से। राज्य-स्तरीय वसूली प्रक्रिया अलग हो सकती है — notice में लिखा तरीका ही
        अंतिम है। यह जानकारी {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} तक जांची गई है।
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
