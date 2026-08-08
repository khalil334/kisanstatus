import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'MP में किसान को कुल कितना पैसा मिलता है?',
    a: 'सालाना ₹12,000 — केंद्र की PM Kisan से ₹6,000 और राज्य की मुख्यमंत्री किसान कल्याण योजना से ₹6,000। दोनों DBT से सीधे बैंक account में आते हैं।',
  },
  {
    q: 'क्या अलग से आवेदन करना पड़ता है?',
    a: 'नहीं। जो किसान PM Kisan का verified beneficiary है, वही किसान कल्याण योजना का हकदार है। PM Kisan में नाम है और पटवारी verification हो गया, तो राज्य की किस्त अपने आप जुड़ जाती है। अलग form सिर्फ तब जब नया registration हो रहा हो।',
  },
  {
    q: 'Status कहां check करें?',
    a: 'राज्य की किस्त का status saara.mp.gov.in portal पर दिखता है (CM Kisan section में)। PM Kisan वाली किस्तों के लिए pmkisan.gov.in का Know Your Status ही रास्ता है।',
  },
  {
    q: 'PM Kisan आ रही है लेकिन राज्य वाली नहीं — क्यों?',
    a: 'दो आम कारण: पटवारी verification pending है, या राज्य की किस्त release ही नहीं हुई (राज्य की किस्तें अपने schedule से आती हैं, PM Kisan के साथ नहीं)। पहले saara portal पर status देखें, फिर पटवारी/तहसील से मिलें।',
  },
  {
    q: 'योजना की किस्तें कब-कब आती हैं?',
    a: 'राज्य सरकार साल में किस्तें अपने कार्यक्रम के हिसाब से release करती है — इसकी कोई PM Kisan जैसी fix rhythm नहीं है। कई बार किस्तें इकट्ठी भी आती हैं। Exact dates की official घोषणा का ही भरोसा करें।',
  },
  {
    q: 'नए किसान को क्या करना चाहिए?',
    a: 'पहले PM Kisan में registration कराएं (Farmer ID के साथ), eKYC और bank seeding पूरी करें। PM Kisan में beneficiary बनते ही राज्य योजना का रास्ता भी खुल जाता है।',
  },
];

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide', emoji: '📋' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
];

export default function MukhyamantriKisanKalyanYojanaMp({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        मध्य प्रदेश का किसान देश में सबसे अलग स्थिति में है — उसे PM Kisan की ₹6,000 के ऊपर राज्य सरकार से{' '}
        <strong>₹6,000 और</strong> मिलते हैं। कुल ₹12,000 सालाना। यह दूसरी वाली रकम जिस योजना से आती है,
        उसका नाम है <strong>मुख्यमंत्री किसान कल्याण योजना</strong>। और मजेदार बात — बहुत से किसानों को
        ठीक-ठीक पता ही नहीं कि यह अलग योजना है, कैसे मिलती है, और जब नहीं आती तो किससे पूछना है। आज वही सब
        साफ करते हैं।
      </p>

      <IB>
        <strong>एक line में:</strong> PM Kisan के verified beneficiary को MP सरकार अपनी तरफ से ₹6,000/साल और
        देती है — अलग आवेदन की जरूरत नहीं, अलग किस्तों में आता है, status{' '}
        <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">saara.mp.gov.in</a> पर
        दिखता है।
      </IB>

      <SH>योजना की कहानी — ₹4,000 से ₹6,000 तक</SH>
      <p>
        योजना 2020 में शुरू हुई थी, तब राज्य ₹4,000 सालाना देता था। बाद में सरकार ने रकम बढ़ाकर{' '}
        <strong>₹6,000</strong> कर दी — यानी अब केंद्र + राज्य मिलाकर पूरे ₹12,000। मौजूदा सरकार भी साफ कह
        चुकी है कि योजना जारी रहेगी। पैसा किस्तों में आता है (₹2,000 की किस्तें), DBT से सीधे उसी बैंक
        account में जो PM Kisan के record में है।
      </p>
      <p>
        Design समझने लायक है — राज्य ने अपनी अलग beneficiary list नहीं बनाई। योजना PM Kisan के ढांचे पर ही
        सवार है। इसका फायदा: कागजी काम आधा। नुकसान: PM Kisan में कोई भी दिक्कत (eKYC pending, bank seeding
        fail) राज्य वाली किस्त भी रोक देती है। एक तीर से दो शिकार — उल्टी दिशा में भी।
      </p>

      <SH>कौन eligible है?</SH>
      <StepList>
        <SI n={1}>किसान <strong>मध्य प्रदेश का निवासी</strong> हो और खेती की जमीन हो।</SI>
        <SI n={2}><strong>PM Kisan Samman Nidhi का verified beneficiary</strong> हो — यही मुख्य शर्त है।</SI>
        <SI n={3}>PM Kisan के exclusion rules यहां भी लागू — income tax payer, सरकारी कर्मचारी, ₹10,000+ pension वाले बाहर।</SI>
        <SI n={4}><strong>eKYC पूरी</strong> हो — बिना इसके दोनों योजनाओं का पैसा रुकता है।</SI>
      </StepList>
      <p>
        यानी checklist छोटी है। PM Kisan में नाम + पटवारी verification + eKYC = राज्य की किस्त का रास्ता
        साफ। PM Kisan की eligibility पूरी detail में{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide</Link> में लिखी है।
      </p>

      <SH>आवेदन कैसे होता है?</SH>
      <p>
        ज्यादातर किसानों के लिए जवाब है — <strong>करना ही नहीं पड़ता</strong>। जो पहले से PM Kisan beneficiary
        हैं, वो अपने आप योजना में शामिल हैं। नए किसान के लिए क्रम यह है:
      </p>
      <StepList>
        <SI n={1}>
          पहले PM Kisan में registration — अब Farmer ID (AgriStack) के साथ process चलती है। MP का portal
          इसमें राज्य के record से जुड़ा है।
        </SI>
        <SI n={2}>पटवारी आपके land record और details verify करता है।</SI>
        <SI n={3}>eKYC और बैंक की NPCI आधार seeding पूरी करें।</SI>
        <SI n={4}>
          PM Kisan में beneficiary status active होते ही किसान कल्याण योजना की अगली किस्त में नाम जुड़ जाता
          है।
        </SI>
      </StepList>
      <WB>
        जहां ज्यादातर cases अटकते हैं — <strong>पटवारी verification</strong>। Form भर गया, महीनों से
        &quot;verification pending&quot;। ऐसे में portal refresh करते रहने से कुछ नहीं होगा; अपने हल्का के
        पटवारी या तहसील कार्यालय जाकर मिलिए। Records की physical जांच वहीं होती है।
      </WB>

      <SH>Status check — दो portal, दो काम</SH>
      <p>यहां लोग सबसे ज्यादा उलझते हैं, तो सीधा बंटवारा समझ लीजिए:</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">क्या देखना है</th>
              <th className="border border-[var(--color-border)] p-2 text-left">कहां देखना है</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2">केंद्र की किस्तें (PM Kisan ₹2,000)</td>
              <td className="border border-[var(--color-border)] p-2">pmkisan.gov.in → Know Your Status</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">राज्य की किस्तें (किसान कल्याण)</td>
              <td className="border border-[var(--color-border)] p-2">saara.mp.gov.in → CM Kisan Kalyan section</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">गांव की पूरी beneficiary list</td>
              <td className="border border-[var(--color-border)] p-2">pmkisan.gov.in → Beneficiary List (राज्य→जिला→गांव)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Saara portal पर आधार नंबर या PM Kisan ID से अपनी entry ढूंढ सकते हैं। Village-wise list निकालने का
        पूरा तरीका <Link href="/articles/PmKisanBeneficiaryList2026">beneficiary list guide</Link> में है।
      </p>

      <GovLink
        href="https://saara.mp.gov.in"
        label="SAARA Portal — CM Kisan Kalyan Yojana (MP)"
        guide="saara.mp.gov.in खोलें"
        portalName="saara.mp.gov.in"
      />

      <SH>पैसा नहीं आया — किस order में जांच करें?</SH>
      <p>
        एक MP के किसान का किस्सा सुनिए — PM Kisan की किस्तें time से आ रही थीं, लेकिन राज्य वाली एक साल से
        गायब। सबको लगा portal की गड़बड़ है। तहसील में पता चला कि पटवारी verification में जमीन का रकबा
        mismatch था — PM Kisan केंद्र से चल रही थी, राज्य की entry अटकी थी। रकबा ठीक कराया, अगली release में
        पैसा आ गया। सीख: <strong>दोनों योजनाओं की जांच अलग-अलग होती है</strong>।
      </p>
      <StepList>
        <SI n={1}>पहले pmkisan.gov.in पर देखें — eKYC, land seeding, bank seeding तीनों YES हैं?</SI>
        <SI n={2}>तीनों YES और PM Kisan आ रही है? तो मामला राज्य की तरफ है — saara portal पर status देखें।</SI>
        <SI n={3}>वहां pending/reject दिखे तो पटवारी या तहसील कार्यालय — यही असली desk है।</SI>
        <SI n={4}>
          PM Kisan भी नहीं आ रही? तो पहले उसे ठीक करें —{' '}
          <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed guide</Link> से शुरुआत करें।
          केंद्र वाली ठीक हुए बिना राज्य वाली नहीं आएगी।
        </SI>
      </StepList>
      <p>
        और एक honest बात — राज्य की किस्तें कभी-कभी schedule से late होती हैं, बजट release के हिसाब से।
        ऐसे में आपकी तरफ से कोई गलती नहीं होती; इंतजार ही इलाज है। घबराकर बिचौलियों के पास मत जाइए।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Sources: योजना की जानकारी MP शासन की घोषणाओं (राशि ₹4,000 से बढ़ाकर ₹6,000 — CM का सार्वजनिक बयान,
        IANS coverage) और{' '}
        <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">saara.mp.gov.in</a> /{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        process पर आधारित है। किस्तों का schedule सरकार के हाथ में है — exact dates official घोषणा से ही
        confirm करें। Last verified: {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
