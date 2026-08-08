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
        की वसूली हो चुकी है (कृषि राज्य मंत्री का लोकसभा में लिखित उत्तर)। यानी recovery notice कोई
        इक्का-दुक्का घटना नहीं — यह योजना की सफाई-प्रक्रिया का हिस्सा है, जो income tax, UIDAI और PFMS के
        record मिलाकर चल रही है। अगर आपके पास ऐसा notice आया है, तो घबराने से पहले यह समझ लीजिए कि यह
        आता क्यों है और आपके पास रास्ते क्या हैं।
      </p>

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

      <SH>पैसा online लौटाने का तरीका</SH>
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

      <WB>
        ठगों का पसंदीदा मौसम यही है। "Recovery notice आया है, इस number पर पैसा भेजो वरना FIR होगी" —
        ऐसे call/WhatsApp fraud हैं। सरकारी वसूली या तो portal के Refund Online से होती है या लिखित
        सरकारी प्रक्रिया से — किसी के निजी खाते/UPI पर कभी नहीं।
      </WB>

      <SH>अपात्र हैं पर notice अभी नहीं आया — तो?</SH>
      <p>
        बेहतर है खुद आगे बढ़कर नाम हटवा लें — portal पर voluntary surrender की सुविधा है, जिससे आगे की
        किस्तें बंद हो जाती हैं और मामला बढ़ने से पहले सुलझ जाता है। तरीका{' '}
        <Link href="/articles/PmKisanVoluntarySurrenderGuide">surrender guide</Link> में है। सच कहें तो
        यही सबसे इज्जतदार रास्ता है — वसूली का पत्र आने का इंतजार करने से कहीं अच्छा।
      </p>

      <DB>
        जमीनी उदाहरण: UP में जांच के दौरान लाखों लाभार्थी अपात्र पाए गए थे — उनमें बड़ी संख्या उन लोगों की
        थी जो income tax भरते थे और शायद यह जानते भी नहीं थे कि इससे पात्रता चली जाती है। सबक यह कि
        नियम पढ़े बिना योजना में बने रहना ही जोखिम है — पात्रता की पूरी सूची{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide</Link> में देख लें।
      </DB>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: वसूली का आंकड़ा (₹416.75 करोड़) कृषि राज्य मंत्री के लोकसभा में लिखित उत्तर (PTI, दिसंबर
        2025) से; refund की online प्रक्रिया{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        Refund Online flow पर आधारित। राज्य-स्तरीय वसूली प्रक्रिया अलग हो सकती है — notice में लिखा तरीका
        ही अंतिम है। Last verified: {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
