import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'आधार बैंक से link है, फिर भी पैसा क्यों नहीं आया?',
    a: 'Link होना और NPCI mapper में seeded होना — दो अलग चीजें हैं। Link सिर्फ KYC है; DBT का पैसा NPCI mapper देखकर जाता है। बैंक जाकर साफ शब्दों में कहें: "आधार seeding NPCI mapper में करनी है, DBT के लिए" — सिर्फ "link कर दो" कहने पर कई बार आधा काम होता है।',
  },
  {
    q: 'मेरे दो बैंक खाते हैं — पैसा किसमें आएगा?',
    a: 'उसी में जो NPCI mapper में सबसे बाद में (last seeded) दर्ज हुआ है। आधार कई खातों से link हो सकता है, पर DBT के लिए active mapping एक ही खाते की होती है। कौन सा खाता active है, यह myAadhaar के Bank Seeding Status से दिख जाता है।',
  },
  {
    q: 'Seeding status "Inactive" दिखा रहा है — क्या करूं?',
    a: 'अपने बैंक की शाखा जाकर Aadhaar Seeding Consent Form भरें और DBT enable करने को कहें। खाता बंद/frozen हो तो पहले उसे चालू कराना होगा। Form जमा करने के कुछ दिन बाद status दोबारा जांचें।',
  },
  {
    q: 'SMS से status देखने का कोई तरीका?',
    a: 'हां — आधार-registered mobile से *99*99*1# dial करें, आधार number भरें। यह USSD सेवा बता देती है कि आधार किसी खाते से mapped है या नहीं। बिना internet वाले phone पर भी चलती है।',
  },
  {
    q: 'खाता बदलना है — पुराने की जगह नए खाते में पैसा चाहिए?',
    a: 'नए बैंक में seeding consent form भरकर NPCI mapper में नया खाता seed करवा दें — आखिरी seeded खाता ही active हो जाता है, पुराना अपने आप हट जाता है। Portal के record में खाता बदलने की अलग प्रक्रिया हमारी bank account change guide में है।',
  },
  {
    q: 'Post Office / India Post Payments Bank का खाता चलेगा?',
    a: 'चलेगा — IPPB खाते भी NPCI mapper से जुड़ते हैं और कई किसान उसी में किस्त पाते हैं। शर्त वही है: उस खाते की आधार seeding active होनी चाहिए।',
  },
];

const RELATED = [
  { slug: 'PmKisanBankAccountChangeProcess', title: 'Bank Account Change Process', emoji: '🏦' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — Fix Guide', emoji: '🛠️' },
  { slug: 'hindi/payment-stopped-by-state', title: 'Payment Stopped by State', emoji: '⛔' },
  { slug: 'hindi/status-check-mobile-se', title: 'मोबाइल से स्टेटस चेक', emoji: '📱' },
];

export default function NpciAadhaarSeedingDbtPayment({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        हमारे एक पाठक की कहानी सुनिए। eKYC पूरी, जमीन का record सही, beneficiary list में नाम — फिर भी दो
        किस्तें नहीं आईं। बैंक गए तो बोले "आधार तो linked है।" Portal पर शिकायत की तो जवाब आया — Aadhaar
        not seeded with NPCI। यहीं पर ज्यादातर किसान उलझते हैं, क्योंकि <em>link</em> और <em>seeding</em>{' '}
        सुनने में एक जैसे लगते हैं, होते अलग हैं।
      </p>

      <SH>पहले यह फर्क समझ लीजिए — बाकी सब आसान है</SH>
      <p>
        बैंक में आधार link होना KYC की जरूरत है — इससे खाता चलता रहता है। लेकिन सरकारी पैसा (DBT) भेजने
        वाला system — NPCI का Aadhaar Payment Bridge — बैंक का record नहीं देखता। वह NPCI mapper
        देखता है: एक central सूची, जिसमें दर्ज होता है कि आपके आधार का DBT-पैसा किस बैंक में जाएगा। आपका
        आधार चाहे तीन खातों से linked हो, mapper में active entry एक ही होती है — जो खाता{' '}
        <strong>सबसे बाद में seed</strong> हुआ, वही।
      </p>

      <IB>
        इसीलिए portal पर payment failure के record में सबसे आम कारणों में एक यही लिखा मिलता है — Aadhaar
        seeding inactive या खाता बंद। किस्त release होने से पहले यह जांच 5 मिनट की है, और बाद में शिकायत
        महीनों की।
      </IB>

      <SH>Step 1 — अभी कौन सा खाता mapped है, यह देखें</SH>
      <StepList>
        <SI n={1}>
          <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">
            myaadhaar.uidai.gov.in
          </a>{' '}
          खोलें और login करें (आधार number + OTP — OTP आधार-registered mobile पर आएगा)।
        </SI>
        <SI n={2}>अंदर <strong>Bank Seeding Status</strong> का विकल्प चुनें।</SI>
        <SI n={3}>
          Screen पर दिखेगा — कौन सा बैंक mapped है, seeding active है या inactive, और किस तारीख से।
        </SI>
        <SI n={4}>
          Internet नहीं है? आधार-registered mobile से <strong>*99*99*1#</strong> dial करके भी यही जानकारी
          मिल जाती है।
        </SI>
      </StepList>

      <DB>
        NPCI का BASE portal (Bharat Aadhaar Seeding Enabler) mapping history भी दिखाता है — यानी आपका
        आधार पहले किन-किन बैंकों से mapped रहा। खाता बदलने के बाद पैसा पुराने बैंक में चला जाए, तो यह history
        गुत्थी सुलझा देती है।
      </DB>

      <SH>Step 2 — seeding करानी है या ठीक करानी है, तो यह तरीका</SH>
      <p>
        Seeding की request आपका <strong>बैंक</strong> ही NPCI तक पहुंचाता है — इसलिए मुख्य रास्ता शाखा से
        होकर जाता है:
      </p>
      <StepList>
        <SI n={1}>
          उस बैंक की शाखा जाएं जिस खाते में पैसा चाहिए। साथ में आधार card, passbook और आधार-registered
          mobile।
        </SI>
        <SI n={2}>
          <strong>Aadhaar Seeding / DBT Consent Form</strong> मांगें (कुछ बैंक इसे mandate form कहते हैं)।
          इसमें लिखित सहमति होती है — बिना consent के बैंक seeding कर ही नहीं सकता।
        </SI>
        <SI n={3}>Form भरकर जमा करें और <strong>acknowledgement/reference number जरूर लें</strong>।</SI>
        <SI n={4}>
          3-7 कार्यदिवस बाद Step 1 वाला तरीका दोहराकर पक्का करें कि status <strong>Active</strong> हो गया
          और बैंक का नाम वही है।
        </SI>
      </StepList>
      <p>
        कई बैंकों में यह काम net-banking या NPCI के BASE portal से online भी हो जाता है — पर हर बैंक में
        नहीं। शाखा वाला रास्ता हर जगह चलता है, इसलिए वही मुख्य बताया है।
      </p>

      <WB>
        ध्यान रहे — seeding के नाम पर OTP मांगने वाले phone call ठगी होते हैं। यह काम या तो आप खुद
        myAadhaar/बैंक की app पर करते हैं, या बैंक शाखा में। कोई अनजान व्यक्ति call करके seeding "करवा"
        नहीं सकता।
      </WB>

      <SH>Seeding हो गई — अब आगे क्या?</SH>
      <p>
        Mapper में खाता active हो जाने के बाद बची हुई कड़ियां जांच लें। योजना के record में eKYC पूरी हो (
        <Link href="/articles/hindi/ekyc-mobile-se">phone से करने का तरीका</Link>), और अगर पिछला भुगतान
        fail हुआ था तो उसका status देखें — कई राज्यों में सुधार के बाद रुका पैसा अगली किस्त के साथ आ जाता
        है। भुगतान अटकने की बाकी वजहें और इलाज{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">Payment Failed guide</Link> में एक जगह लिखे हैं।
        और अगर status में "Payment Stopped by State" जैसा message है, तो वह अलग मामला है —{' '}
        <Link href="/articles/hindi/payment-stopped-by-state">उसकी guide यहां</Link> है।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: Bank Seeding Status की प्रक्रिया{' '}
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> /
        myAadhaar portal पर आधारित; NPCI mapper और BASE की जानकारी{' '}
        <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer">npci.org.in</a> से; DBT
        व्यवस्था{' '}
        <a href="https://dbtbharat.gov.in" target="_blank" rel="noopener noreferrer">dbtbharat.gov.in</a>।
        बैंक-दर-बैंक form का नाम और online सुविधा अलग हो सकती है। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
