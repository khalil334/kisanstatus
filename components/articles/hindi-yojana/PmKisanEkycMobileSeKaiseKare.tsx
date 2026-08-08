import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या phone से यह काम बिल्कुल free है?',
    a: 'हां। Portal पर OTP से हो या PM-KISAN app में Face Auth से — दोनों में एक रुपया नहीं लगता। पैसा सिर्फ तब लगता है जब CSC पर biometric कराने जाते हैं, और वहां भी मामूली service charge होता है।',
  },
  {
    q: 'OTP नहीं आ रहा — बार-बार try कर लिया?',
    a: 'OTP उस नंबर पर जाता है जो आधार में registered है, न कि उस पर जो आप अभी चला रहे हैं। दोनों अलग हैं तो OTP कभी नहीं आएगा। पहले Aadhaar Seva Kendra जाकर आधार में नया नंबर डलवाएं (करीब ₹50 का शुल्क), फिर यह process करें।',
  },
  {
    q: 'माता-पिता की eKYC उनके बिना मेरे phone से हो सकती है?',
    a: 'हो सकती है — OTP उनके आधार-linked नंबर पर आएगा, वह आपको बता दें तो आप भर सकते हैं। Face Auth के लिए तो app में दूसरे beneficiary का चेहरा scan करने का विकल्प ही दिया गया है — बुजुर्गों के लिए यही बना है।',
  },
  {
    q: '"eKYC is already done" लिखा आ रहा है, अब?',
    a: 'बधाई — कुछ नहीं करना। यह message तभी आता है जब record में eKYC पहले से पूरी हो। Status page पर eKYC: YES दिखेगा, वही पक्का सबूत है।',
  },
  {
    q: '"Record not found with given Aadhaar" का मतलब?',
    a: 'दो ही वजहें होती हैं — या तो आप योजना में registered ही नहीं हैं, या आधार number गलत/किसी और record से जुड़ा है। पहले Know Your Status में अपना registration check करें; record है ही नहीं तो पहले नई registration होगी, eKYC बाद की बात है।',
  },
  {
    q: 'Smartphone नहीं है, सिर्फ keypad वाला phone है — कोई रास्ता?',
    a: 'Phone से नहीं होगा — OTP वाले तरीके के लिए भी browser चाहिए। ऐसे में नजदीकी CSC पर fingerprint से करवा लें, या परिवार में किसी के smartphone से ऊपर वाला तरीका अपनाएं। OTP आपके keypad phone पर ही आ जाएगा।',
  },
  {
    q: 'eKYC के बाद किस्त कितने दिन में आ जाती है?',
    a: 'eKYC कोई payment trigger नहीं है — यह सिर्फ शर्त पूरी करता है। पैसा तभी आता है जब सरकार किस्त release करती है। हां, eKYC अधूरी रही तो release होने पर भी आपका भुगतान रुक जाएगा।',
  },
];

const RELATED = [
  { slug: 'PmKisanFaceAuthenticationEkyc', title: 'Face Auth eKYC App Guide', emoji: '🤳' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online — पूरी guide', emoji: '🔐' },
  { slug: 'hindi/status-check-mobile-se', title: 'मोबाइल से स्टेटस चेक', emoji: '📱' },
  { slug: 'PmKisanMobileNumberChangeUpdate', title: 'Mobile Number Update Guide', emoji: '☎️' },
];

export default function PmKisanEkycMobileSeKaiseKare({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        <strong>क्या घर बैठे, सिर्फ phone से, बिना CSC गए eKYC हो जाती है?</strong>
      </p>
      <p>
        हो जाती है। दस मिनट का काम है — बशर्ते एक शर्त पूरी हो: आपका mobile number आधार से जुड़ा हो। यही
        एक बात है जिस पर पूरा खेल टिका है। जुड़ा है, तो नीचे के steps में से कोई भी रास्ता पकड़िए। नहीं जुड़ा,
        तो सीधे इस लेख के आखिरी हिस्से पर जाइए — वहां उसका इलाज लिखा है।
      </p>

      <IB>
        याद रहे: बिना पूरी eKYC के किस्त का भुगतान रुक जाता है। यह नियम अब पक्का है — portal खुद होमपेज पर
        लिखता है कि eKYC सभी beneficiaries के लिए अनिवार्य है। इसीलिए यह छोटा सा काम टालने लायक नहीं।
      </IB>

      <SH>रास्ता 1 — Portal पर OTP से (सबसे सीधा)</SH>
      <StepList>
        <SI n={1}>
          Phone के browser में{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a>{' '}
          खोलें। Homepage पर ही <strong>e-KYC</strong> का box दिखेगा (Farmers Corner में)।
        </SI>
        <SI n={2}>अपना 12 अंकों का आधार number भरें और search दबाएं।</SI>
        <SI n={3}>आधार से जुड़ा mobile number मांगा जाएगा — भरिए, OTP आएगा।</SI>
        <SI n={4}>पहले mobile OTP, फिर आधार OTP — दोनों डालते ही screen पर success का message आ जाता है।</SI>
        <SI n={5}>
          पक्का करने के लिए "Know Your Status" खोलकर देख लें — eKYC के आगे <strong>YES</strong> दिखना
          चाहिए।
        </SI>
      </StepList>

      <DB>
        छोटी सलाह, अनुभव से निकली हुई: शाम 6-9 बजे portal पर भीड़ रहती है और OTP अटकते हैं। सुबह के समय
        यही काम पहली बार में हो जाता है। और OTP की validity कुछ ही मिनट की होती है — आते ही भर दें।
      </DB>

      <SH>रास्ता 2 — PM-KISAN app में Face Authentication</SH>
      <p>
        जिनके आधार में नंबर तो linked है पर OTP का झंझट नहीं चाहिए — या घर के बुजुर्ग की eKYC करनी है —
        उनके लिए सरकार ने चेहरे से पहचान वाला तरीका दिया है। Google Play Store से{' '}
        <strong>PM-KISAN GoI</strong> app (प्रकाशक: Government of India) डालिए, beneficiary की details से
        login कीजिए, और Face Auth का विकल्प चुनकर camera के सामने चेहरा scan करवाइए। App दूसरे किसानों की
        eKYC कराने की सुविधा भी देता है — यानी आपके phone से पड़ोस के 10 बुजुर्गों का काम भी निपट सकता है।
        Screen-दर-screen विवरण{' '}
        <Link href="/articles/PmKisanFaceAuthenticationEkyc">Face Auth guide</Link> में है।
      </p>

      <WB>
        Play Store पर मिलते-जुलते नाम के नकली app भी तैरते रहते हैं। Install से पहले publisher जरूर देखें —
        असली app का प्रकाशक Government of India / कृषि मंत्रालय है। कोई भी app जो eKYC के बदले पैसे या
        बैंक details मांगे, सीधा uninstall करें।
      </WB>

      <SH>और अगर आधार में mobile number linked ही नहीं है?</SH>
      <p>
        तब phone वाले दोनों रास्ते बंद हैं — यह कड़वा सच पहले ही बता देना ठीक है। अब दो विकल्प बचते हैं।
        पहला: नजदीकी CSC (Common Service Centre) जाकर fingerprint से biometric eKYC करवा लें — आधार
        card साथ ले जाएं, काम मिनटों में होता है। दूसरा, थोड़ा लंबा पर स्थायी इलाज: Aadhaar Seva Kendra में
        जाकर आधार में अपना चालू नंबर registered करवा लें (
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> से
        appointment बुक होती है) — उसके बाद हर सरकारी OTP वाला काम घर बैठे होगा, सिर्फ यह योजना नहीं।
      </p>
      <p>
        नंबर बदल गया हो तो portal के record में भी नया नंबर डलवाना समझदारी है — तरीका{' '}
        <Link href="/articles/PmKisanMobileNumberChangeUpdate">number update guide</Link> में है। वरना
        status check और शिकायत, दोनों में आगे दिक्कत आएगी।
      </p>

      <SH>काम पूरा हुआ या नहीं — आखिरी जांच</SH>
      <p>
        Success message आना और record में दर्ज होना — दोनों में कभी-कभी थोड़ा फासला होता है। इसलिए अगले
        दिन एक बार{' '}
        <Link href="/articles/hindi/status-check-mobile-se">status page</Link> खोलकर eKYC: YES देख लें। YES
        दिख गया तो यह अध्याय बंद; अब ध्यान बाकी दो चीजों पर दें — बैंक की आधार seeding और जमीन का record।
        किस्त इन्हीं तीन पहियों पर चलती है।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: प्रक्रिया{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        e-KYC flow और PM-KISAN GoI app पर आधारित; आधार में number update की जानकारी{' '}
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> से। Portal
        के option-नाम समय-समय पर बदलते हैं। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
