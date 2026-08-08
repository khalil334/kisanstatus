import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'इस season गेहूं का MSP कितना है?',
    a: 'Rabi Marketing Season 2026-27 के लिए केंद्र ने गेहूं का MSP ₹2,585 प्रति क्विंटल तय किया है। कुछ राज्य ऊपर से bonus देते हैं — जैसे MP में ₹40 bonus मिलाकर किसानों को ₹2,625 प्रति क्विंटल मिला।',
  },
  {
    q: 'मंडी में दाम MSP से नीचे मिल रहा है — बेचूं या नहीं?',
    a: 'अगर आपने सरकारी खरीद के लिए registration किया है तो MSP केंद्र पर बेचना सीधा फायदा है। नहीं किया, और मंडी भाव MSP से काफी नीचे है, तो या तो registration की अगली window पकड़ें या भंडारण की सोचें। घाटे में जल्दबाजी की बिक्री तभी करें जब पैसे की मजबूरी हो।',
  },
  {
    q: 'MSP पर बेचने के लिए क्या करना पड़ता है?',
    a: 'हर राज्य में खरीद से पहले online registration होता है — आधार, बैंक details, जमीन का record और बुवाई का प्रमाण लगता है। Registration window और slot booking की तारीखें राज्य ही घोषित करता है, जिला खाद्य/कृषि विभाग या अपनी मंडी से पूछ लें।',
  },
  {
    q: 'आज का सही मंडी भाव कहां देखें?',
    a: 'सबसे भरोसेमंद जगह Agmarknet (agmarknet.gov.in) है — देश भर की मंडियों के दैनिक भाव वहां दर्ज होते हैं। eNAM पर भी registered मंडियों के rate दिखते हैं। WhatsApp पर घूमते rate की पुष्टि किए बिना उस पर सौदा न करें।',
  },
  {
    q: 'MSP और मंडी भाव में फर्क क्यों रहता है?',
    a: 'MSP सरकारी खरीद की गारंटी-दर है; मंडी भाव मांग-आपूर्ति से बनता है। अच्छी quality और कम आवक के समय मंडी भाव MSP से ऊपर भी चला जाता है; बंपर पैदावार के समय नीचे। इसीलिए बेचने से पहले दोनों देखना जरूरी है।',
  },
  {
    q: 'भुगतान कितने दिन में आता है?',
    a: 'सरकारी खरीद का पैसा आधार-linked बैंक खाते में DBT से आता है — राज्य आमतौर पर कुछ ही दिनों का लक्ष्य रखते हैं। खाते की NPCI seeding active न हो तो यही भुगतान अटकता है, इसलिए बेचने से पहले वह जांच लें।',
  },
];

const RELATED = [
  { slug: 'mandi-bhav-today', title: 'Mandi Bhav Today', emoji: '📈' },
  { slug: 'hindi/npci-aadhaar-seeding', title: 'NPCI आधार सीडिंग', emoji: '🏦' },
  { slug: 'hindi/kcc-limit-kaise-badhaye', title: 'KCC लिमिट कैसे बढ़ाएं', emoji: '💳' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Rin — कहां से लें', emoji: '🏦' },
];

export default function GehuKaRateAajMspVsMandiBhav({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        मंडी के गेट पर सबसे ज्यादा दोहराया जाने वाला सवाल एक ही है — भाव क्या चल रहा है? और उसका ईमानदार
        जवाब भी एक ही है: मंडी-दर-मंडी अलग। इसलिए यह लेख आपको कोई एक "आज का रेट" नहीं थमाएगा — बल्कि
        वह तरीका देगा जिससे आप अपनी मंडी का आज का सही भाव खुद निकालें, और यह तय कर पाएं कि बेचना
        MSP केंद्र पर है या खुले बाजार में।
      </p>

      <SH>पहले पक्का आंकड़ा — इस season का MSP</SH>
      <p>
        Rabi Marketing Season 2026-27 के लिए गेहूं का न्यूनतम समर्थन मूल्य केंद्र सरकार ने{' '}
        <strong>₹2,585 प्रति क्विंटल</strong> तय किया है। यह वह दर है जिस पर सरकारी एजेंसियां registered
        किसानों से खरीद करती हैं। कुछ राज्य अपनी ओर से bonus जोड़ते हैं — MP ने इस season ₹40 प्रति
        क्विंटल का bonus दिया, यानी वहां के किसान को ₹2,625 मिले। आपके राज्य में bonus है या नहीं, यह
        राज्य की खरीद-घोषणा में लिखा होता है।
      </p>

      <IB>
        MSP गारंटी है, छत नहीं — मंडी में इससे ऊंचा दाम मिले तो खुले बाजार में बेचना बेहतर। MSP का असली
        काम तब है जब बाजार नीचे गिर जाए।
      </IB>

      <SH>अपनी मंडी का आज का भाव — 5 मिनट में</SH>
      <StepList>
        <SI n={1}>
          <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer">agmarknet.gov.in</a>{' '}
          खोलें — यह कृषि मंत्रालय का portal है जिस पर देश भर की मंडियों की दैनिक आवक और भाव दर्ज होते
          हैं।
        </SI>
        <SI n={2}>Commodity में Wheat, फिर अपना राज्य और मंडी चुनें, तारीख आज की रखें।</SI>
        <SI n={3}>
          तीन आंकड़े दिखेंगे — minimum, maximum और modal price। सौदे की असली तस्वीर{' '}
          <strong>modal price</strong> (सबसे ज्यादा सौदे जिस भाव पर हुए) से मिलती है।
        </SI>
        <SI n={4}>
          अपनी उपज की quality ईमानदारी से आंकें — चमकदार, सूखा (12% से कम नमी), साफ दाना ऊपरी छोर पाता
          है; नमी और मिट्टी वाला माल नीचे।
        </SI>
        <SI n={5}>
          आस-पास की 2-3 मंडियों के भाव मिलाएं — कई बार 30-40 km दूर की मंडी में ₹50-100 प्रति क्विंटल का
          फर्क भाड़ा निकालकर भी फायदा दे जाता है।
        </SI>
      </StepList>

      <SH>MSP पर बेचना है तो — registration पहली शर्त</SH>
      <p>
        सरकारी खरीद में walk-in नहीं चलता। हर राज्य खरीद season से पहले online registration खोलता है —
        आधार, बैंक passbook, जमीन का record (खतौनी/7-12) और बुवाई का प्रमाण लगता है; खरीद biometric
        सत्यापन के बाद होती है। उदाहरण के लिए इस season गुजरात में registration फरवरी में खुला और खरीद
        मार्च से मई के बीच चली; MP में slot booking की व्यवस्था रही। हर राज्य की तारीखें अलग हैं — अपने
        जिले के खाद्य/कृषि विभाग या मंडी समिति से window की पुष्टि करें, क्योंकि registration चूकने का
        मतलब है पूरी season खुले बाजार के भरोसे।
      </p>

      <DB>
        अनुभव की बात: जो किसान tractor-trolley मंडी में खड़ी करके भाव पूछते हैं, वे मोलभाव की ताकत गंवा
        देते हैं — बिना बिके लौटने का भाड़ा उन्हीं पर है, और आढ़ती यह जानता है। बेहतर क्रम यह है: पहले
        phone/portal से भाव, फिर बेचने का फैसला, तब गाड़ी।
      </DB>

      <WB>
        बिना तौल-पर्ची और बिना लिखित सौदे के माल कभी न छोड़ें। इलेक्ट्रॉनिक कांटे की पर्ची, quality कटौती
        का लिखित कारण, और भुगतान की समय-सीमा — ये तीनों आपका हक हैं। नकद में "आज नहीं, हफ्ते बाद" वाले
        मौखिक वादों से ही ज्यादातर विवाद निकलते हैं।
      </WB>

      <SH>बेचने के बाद — पैसा अटके नहीं, इसके लिए</SH>
      <p>
        सरकारी खरीद का भुगतान आधार-linked खाते में DBT से आता है। खाता dormant हो या NPCI mapper में
        seeding active न हो, तो तौल हो जाने के बाद भी पैसा लटक जाता है — यह जांच बेचने से{' '}
        <em>पहले</em> कर लें, तरीका{' '}
        <Link href="/articles/hindi/npci-aadhaar-seeding">NPCI seeding guide</Link> में है। रोज के भाव
        की नब्ज पकड़नी हो तो हमारा{' '}
        <Link href="/articles/mandi-bhav-today">mandi bhav page</Link> देखते रहें।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: गेहूं MSP ₹2,585/क्विंटल (RMS 2026-27) — केंद्र सरकार की घोषणा, राज्य खरीद-अधिसूचनाओं
        (गुजरात राज्य नागरिक आपूर्ति निगम, जनवरी 2026) में उद्धृत; MP का ₹40 bonus राज्य सरकार की खरीद
        व्यवस्था से। दैनिक भाव{' '}
        <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer">agmarknet.gov.in</a>{' '}
        और <a href="https://enam.gov.in" target="_blank" rel="noopener noreferrer">enam.gov.in</a> से
        देखें — यह लेख कोई live rate नहीं बताता। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
