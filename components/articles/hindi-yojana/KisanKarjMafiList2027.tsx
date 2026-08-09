import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या पूरे देश के लिए कोई एक कर्ज माफी योजना है?',
    a: 'नहीं। कर्ज माफी राज्य सरकारों का फैसला होता है — हर राज्य की अपनी scheme, अपनी शर्तें, अपनी list। केंद्र की तरफ से आखिरी nationwide scheme 2008 (ADWDRS) थी। अभी कोई अखिल भारतीय माफी योजना चालू नहीं है।',
  },
  {
    q: 'महाराष्ट्र की नई कर्ज माफी में कितना माफ होगा?',
    a: 'March 2026 के बजट में सरकार ने ₹2 लाख तक के overdue crop loans (September 2025 तक बकाया) माफ करने की घोषणा की है। साथ में नियमित कर्ज चुकाने वालों को ₹50,000 तक incentive की बात है। लागू होने की details और list सरकारी GR से confirm करें।',
  },
  {
    q: 'लिस्ट में नाम कैसे check करें?',
    a: 'जिस राज्य की scheme है, उसी के official portal पर — आधार नंबर या loan account number से। Portal का link हमेशा राज्य सरकार की site से लें, WhatsApp के forward से नहीं। जब तक official list जारी नहीं होती, कोई भी "list" fake है।',
  },
  {
    q: 'KCC का loan भी माफ होता है क्या?',
    a: 'निर्भर करता है scheme की शर्तों पर। ज्यादातर माफी योजनाएं short-term crop loan cover करती हैं — जिनमें KCC से लिया crop loan भी आ सकता है। Tractor loan, dairy loan जैसे term loans आम तौर पर बाहर रहते हैं। अपनी scheme का GR पढ़ें।',
  },
  {
    q: 'कोई agent बोल रहा है पैसे देकर नाम डलवा देगा — सच है?',
    a: 'बिल्कुल fraud है। कर्ज माफी की list बैंक record से बनती है — कोई नाम "डलवा" नहीं सकता। पैसे देने से सिर्फ पैसे जाएंगे। ऐसे agent की शिकायत police में करें।',
  },
  {
    q: 'माफी के बाद CIBIL score ठीक हो जाता है?',
    a: 'Loan settle होने से default का दाग हल्का जरूर होता है, लेकिन record में waiver का जिक्र रह सकता है। नया loan लेते समय बैंक पूरी history देखता है। इसलिए हो सके तो नियमित repayment ही best रास्ता है — कई राज्य उसका इनाम भी दे रहे हैं।',
  },
  {
    q: 'नाम list में आ गया — अब मुझे क्या करना होगा?',
    a: 'ज्यादातर schemes में आधार से biometric सत्यापन कराना पड़ता है — पिछली फुले कर्जमुक्ती में यह CSC/बैंक पर होता था। सत्यापन के बाद रकम सीधे loan account में jama होती है। आपके हाथ में cash नहीं आता — जो कहे “माफी का पैसा निकालने में मदद करूंगा”, वह ठग है।',
  },
  {
    q: 'Loan settle होने के बाद कौन सा कागज लेना जरूरी है?',
    a: 'बैंक से NOC (No Objection Certificate) या loan closure letter जरूर लें और संभाल कर रखें। जमीन गिरवी रखी थी तो उसके कागज वापस लेना न भूलें। आगे नया loan लेते समय यही कागज सबूत होगा कि पुराना खाता साफ है।',
  },
  {
    q: 'मेरा loan दो बैंकों में है — दोनों माफ होंगे?',
    a: 'Scheme की शर्तों पर निर्भर है — ज्यादातर में प्रति किसान/परिवार एक सीमा (जैसे ₹2 लाख तक) तय होती है, चाहे खाते कितने भी हों। दोनों खातों का मिलाकर बकाया सीमा से ज्यादा है तो बचा हिस्सा आपको खुद चुकाना होगा। GR में family-unit की परिभाषा ध्यान से पढ़ें।',
  },
];

const RELATED = [
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Rin Kahan Se Le', emoji: '🏦' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'KisanTractorLoan2026', title: 'Tractor Loan Guide', emoji: '🚜' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
];

export default function KisanKarjMafiList2027({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        &quot;कर्ज माफ हो गया, लिस्ट आ गई है, अपना नाम देख लो&quot; — यह message आपको भी WhatsApp पर मिला
        होगा। Link पर click किया तो या तो कोई ad-भरी site खुली, या नाम-आधार मांगने वाला form। रुकिए। इस
        article में हम वही बताएंगे जो असल में verified है — किस राज्य में कौन सी कर्ज माफी असल में चल रही
        है, list कहां देखनी है, और किन &quot;lists&quot; से बचना है।
      </p>
      <DB>
        सबसे जरूरी बात पहले: <strong>कर्ज माफी की कोई भी list सिर्फ सरकारी portal या बैंक से confirm
        होती है।</strong> WhatsApp/YouTube वाली &quot;लिस्ट में नाम देखें&quot; sites अक्सर fake होती हैं —
        कई तो आधार details चुराने के लिए बनी हैं। पैसे मांगने वाला हर agent fraud है।
      </DB>

      <SH>पहले basics — कर्ज माफी कैसे काम करती है?</SH>
      <p>
        Loan waiver केंद्र की नहीं, <strong>राज्य सरकार की</strong> scheme होती है। राज्य घोषणा करता है,
        शर्तें तय करता है (कितनी रकम तक, किस तारीख तक का बकाया, कौन सा loan), फिर बैंक अपने records से
        eligible किसानों की list बनाते हैं। पैसा सरकार बैंक को देती है, आपका loan account settle होता है।
        इसीलिए हर राज्य की कहानी अलग है — और इसीलिए &quot;पूरे देश की कर्ज माफी list&quot; जैसी कोई चीज होती
        ही नहीं।
      </p>
      <p>
        Historical context के लिए — देश-स्तर की आखिरी बड़ी माफी 2008 की ADWDRS थी (करीब ₹52,500 करोड़)।
        उसके बाद से सब कुछ राज्यों के हाथ में है। RBI बार-बार कह चुका है कि waivers से credit culture
        बिगड़ता है, फिर भी चुनावों के आसपास घोषणाएं होती रहती हैं। किसान के लिए मतलब की बात इतनी है:{' '}
        <strong>घोषणा ≠ पैसा</strong>। घोषणा के बाद GR (शासनादेश) आता है, फिर budget, फिर list — इसमें
        महीनों लगते हैं।
      </p>

      <SH>राज्यवार स्थिति — जो verified है</SH>
      <p>
        नीचे वही लिखा है जो official announcements से confirm है। जहां हमें पक्का नहीं पता, वहां साफ लिखा है
        — अंदाजे की तारीखें और रकमें हम नहीं छापते।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">महाराष्ट्र — सबसे ताजा और सबसे बड़ी घोषणा</h3>
      <p>
        March 2026 के राज्य बजट में सरकार ने overdue crop loans की माफी घोषित की — <strong>₹2 लाख तक</strong>,
        उन किसानों के लिए जिनका crop loan September 2025 तक बकाया (overdue) था। साथ में एक समझदार twist:
        जो किसान नियमित कर्ज चुकाते रहे, उन्हें <strong>₹50,000 तक incentive</strong> मिलेगा। कुल अनुमानित
        खर्च करीब ₹35,000 करोड़ बताया गया। पहले की महात्मा ज्योतिराव फुले कर्जमुक्ती योजना (₹2 लाख तक) इसी
        राज्य में चली थी — नई scheme उसी परंपरा में है। List और implementation की timeline राज्य के GR से
        आएगी — district cooperative banks और अपने बैंक branch से पूछते रहें।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">तमिलनाडु</h3>
      <p>
        Cooperative banks से लिए गए crop loans पर <strong>₹75,000 तक</strong> की माफी की घोषणा हुई है। ध्यान
        दें — यह cooperative loans के लिए है; commercial बैंकों के loan इसमें नहीं। Details राज्य के
        cooperation department से confirm करें।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">झारखंड, MP, UP, राजस्थान — पुरानी schemes का हाल</h3>
      <p>
        इन राज्यों में पिछले सालों में माफी योजनाएं चलीं — झारखंड की ऋण माफी योजना (₹50,000 तक), MP की जय
        किसान फसल ऋण माफी, UP की 2017 वाली माफी, राजस्थान की 2018-19 वाली। इनमें से ज्यादातर की lists जारी
        होकर payments भी हो चुकी हैं। <strong>अभी इन राज्यों में कोई नई माफी की official घोषणा हमें verified
        नहीं मिली।</strong> अगर आपके राज्य में नई scheme की चर्चा है, तो उसका सच सिर्फ दो जगह मिलेगा — राज्य
        के budget documents और कृषि/सहकारिता विभाग की official site। News में &quot;जल्द होगी&quot; type की
        headlines को घोषणा मत समझिए।
      </p>
      <WB>
        Warning दोबारा — Google पर &quot;karj mafi list 2027&quot; search करने पर जो ad-heavy sites आती हैं,
        उनमें से ज्यादातर पुरानी schemes की recycled जानकारी चला रही हैं या fake list दिखा रही हैं। तारीख
        देखिए, source देखिए, तब भरोसा कीजिए।
      </WB>

      <SH>घोषणा से पैसे तक — रास्ता कितना लंबा है?</SH>
      <p>
        अनुभव के आधार पर यह क्रम समझ लीजिए — बजट/भाषण में घोषणा, फिर cabinet की मंजूरी और GR
        (शासनादेश), फिर बैंकों से data इकट्ठा करके list बनना, फिर आधार सत्यापन, और आखिर में
        खातों में रकम। पिछली फुले कर्जमुक्ती में घोषणा से पहली किस्त तक कई महीने लगे थे, और आखिरी
        किस्तों तक सालों खिंच गया था। इसलिए घोषणा सुनते ही interest का meter रुका मत समझिए —
        जब तक आपका account settle नहीं हुआ, बकाया बढ़ रहा है। यही एक बात समझ लेने से आधे गलत
        फैसले बच जाते हैं।
      </p>

      <SH>अपना नाम check करने का सही तरीका</SH>
      <p>जब आपके राज्य की list official तौर पर जारी हो, तब यह करें:</p>
      <StepList>
        <SI n={1}>
          <strong>राज्य के official portal पर जाएं</strong> — link राज्य सरकार की main site या कृषि विभाग से
          लें। महाराष्ट्र में पिछली scheme की तरह dedicated portal बनने की उम्मीद है।
        </SI>
        <SI n={2}>
          <strong>आधार नंबर या loan account number</strong> डालें — यही दो चीजें record से मिलान के लिए
          इस्तेमाल होती हैं।
        </SI>
        <SI n={3}>
          नाम मिले तो <strong>बैंक branch जाकर confirm करें</strong> — असली settlement बैंक के record में
          दिखता है, portal सिर्फ आईना है।
        </SI>
        <SI n={4}>
          नाम न मिले और आप शर्तें पूरी करते हों, तो बैंक से लिखित में कारण पूछें और राज्य की grievance
          व्यवस्था में शिकायत दर्ज करें।
        </SI>
      </StepList>
      <IB>
        एक field observation — महाराष्ट्र की पिछली फुले कर्जमुक्ती के समय सबसे ज्यादा नाम इसलिए छूटे थे कि
        loan account आधार से link नहीं था। सीख सीधी है: <strong>अपना आधार बैंक loan account से link करा कर
        रखिए</strong>, scheme आए उससे पहले। List बनती ही bank-record से है।
      </IB>

      <SH>List आने से पहले की तैयारी — आज के 3 काम</SH>
      <p>
        Scheme की घोषणा और list के बीच का समय बर्बाद मत करिए — यही वह window है जब आप अपना
        record ऐसा साफ कर सकते हैं कि नाम छूटने की नौबत ही न आए:
      </p>
      <StepList>
        <SI n={1}>
          <strong>Loan account आधार से link कराएं</strong> — branch जाकर पूछें कि आपके crop loan
          account में आधार दर्ज है या नहीं। पिछली schemes में सबसे ज्यादा नाम इसी कमी से छूटे थे।
        </SI>
        <SI n={2}>
          <strong>Loan statement निकलवाकर रखें</strong> — कितना principal, कितना interest, कब से
          overdue। List आने पर अपनी रकम का मिलान आप खुद कर पाएंगे — गलत रकम चढ़ी हो तो तुरंत
          आपत्ति कर सकेंगे।
        </SI>
        <SI n={3}>
          <strong>मोबाइल नंबर बैंक record में update रखें</strong> — सत्यापन का बुलावा SMS से आता है।
          पुराना नंबर दर्ज है तो बुलावा किसी और के phone पर जाएगा।
        </SI>
      </StepList>

      <SH>ठगी के तीन नए तरीके — पहचान कर रखिए</SH>
      <p>
        हर माफी की घोषणा के साथ ठगों का season भी शुरू होता है। तीन पैंतरे सबसे आम हैं। पहला —
        <strong> fake list site</strong>: हूबहू सरकारी जैसी दिखने वाली site जो आधार, बैंक और OTP
        मांगती है — OTP दिया नहीं कि खाता खाली। सरकारी list कभी OTP नहीं मांगती, सिर्फ देखने के
        लिए। दूसरा — <strong>“processing fee” वाला agent</strong>: “₹2,000 दो, नाम पक्का डलवा दूंगा”।
        List बैंक record से बनती है, किसी के डालने से नहीं। तीसरा — <strong>fake settlement call</strong>:
        बैंक अधिकारी बनकर phone आता है कि “माफी के लिए आपका आधार-OTP चाहिए”। बैंक कभी phone
        पर OTP नहीं मांगता। इन तीनों में से कुछ भी हो तो 1930 (cyber fraud helpline) पर शिकायत करें।
      </p>

      <SH>माफी का इंतजार बनाम अपनी planning</SH>
      <p>
        सच कहें तो कर्ज माफी lottery जैसी है — आ गई तो राहत, नहीं आई तो इंतजार में interest बढ़ता जाता है।
        Waiver की उम्मीद में EMI रोक देना सबसे महंगी गलती है, क्योंकि scheme की cut-off date आपके हाथ में
        नहीं। बेहतर रास्ते:
      </p>
      <StepList>
        <SI n={1}>
          कर्ज महंगे साहूकार से है तो पहले उसे <Link href="/articles/KisanCreditCardOnlineApply2026">KCC</Link>{' '}
          जैसे सस्ते रास्ते में shift करने की सोचें — 4% तक effective interest वाला crop loan हर हाल में
          बेहतर है।
        </SI>
        <SI n={2}>
          नया कर्ज लेना हो तो कौन सा loan कहां से और किस दर पर मिलता है, इसका पूरा तुलनात्मक हिसाब{' '}
          <Link href="/articles/KisanRinKahaSeLe2026">इस page पर देख लें</Link>।
        </SI>
        <SI n={3}>
          याद रखिए — महाराष्ट्र model में नियमित चुकाने वालों को ₹50,000 incentive मिल रहा है। यानी अब
          discipline का भी इनाम है, सिर्फ default का नहीं।
        </SI>
      </StepList>

      <SH>सवाल-जवाब — जो उलझनें सबसे ज्यादा आती हैं</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        इस लेख की जानकारी कहां से आई — महाराष्ट्र Budget 2026-27 का विश्लेषण (
        <a href="https://prsindia.org/budgets/states/maharashtra-budget-analysis-2026-27" target="_blank" rel="noopener noreferrer">
          PRS Legislative Research
        </a>
        ), farm loan waivers पर RBI Internal Working Group report (2019) की public reporting, और राज्य
        सरकारों की घोषणाओं की news coverage। योजनाओं की शर्तें GR जारी होने पर बदल सकती हैं, इसलिए
        अंतिम पुष्टि अपने बैंक और राज्य के कृषि/सहकारिता विभाग से ही करें — हमने ये तथ्य आखिरी बार{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} को मिलाए थे।
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
