import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'गांव की लिस्ट में सबका पैसा आ गया, मेरा नाम है पर पैसा नहीं आया — क्या करूं?',
    a: 'यही village-wise लिस्ट का सबसे बड़ा फायदा है — अब पता है कि दिक्कत राउंड में नहीं, आपकी एंट्री में है। स्टेटस "Released" है तो मामला बैंक की तरफ है: आधार-बैंक सीडिंग, NPCI मैपिंग और खाते की KYC — तीनों बैंक जाकर जंचवाइए। स्टेटस खाली या pending है तो Entry ID लेकर पहले village accountant, फिर तहसीलदार कार्यालय।',
  },
  {
    q: 'FRUITS ID नहीं बनी है — क्या मुआवजा रुक जाएगा?',
    a: 'रुक सकता है। कर्नाटक में अब हर योजना FID (FRUITS ID) पर सिमट रही है — पिछले राउंड में कई किस्तें FID-linked किसानों को ही पहले गई हैं। नजदीकी Raitha Samparka Kendra जाकर आधार और RTC (पहानी) साथ ले जाइए, FID बनवाइए और अपनी सारी जमीन के survey number उसमें जुड़वाइए। यह काम मुफ्त है।',
  },
  {
    q: 'पोर्टल पर "No records found" आ रहा है — मेरी फसल तो सच में बर्बाद हुई थी।',
    a: 'इसका मतलब अक्सर यह है कि आपके खेत का नुकसान survey में दर्ज ही नहीं हुआ। village accountant (VA) से पूछिए कि आपके survey number की bele hani एंट्री बनी थी या नहीं। छूट गई हो तो VA के जरिए लिखित objection दीजिए और तहसीलदार कार्यालय से receiving कॉपी लीजिए — objection उसी सीजन के राउंड में उठाना होता है, साल भर बाद नहीं।',
  },
  {
    q: 'स्टेटस "Released" दिखा रहा है पर दो हफ्ते से खाते में कुछ नहीं आया।',
    a: 'DBT का पैसा खाता नंबर पर नहीं, आधार पर जाता है। आधार एक से ज्यादा खातों से जुड़ा हो तो पैसा वहां जाता है जहां NPCI मैपिंग सबसे आखिर में हुई — अक्सर वह कोई पुराना खाता निकलता है। बैंक से पूछिए कि DBT के लिए आपका आधार किस खाते से map है, और उस दूसरे खाते की पासबुक अपडेट करवाकर देखिए — पैसा वहीं मिलेगा।',
  },
  {
    q: 'रकम उम्मीद से कम आई है — बाकी कब आएगा?',
    a: 'दो वजहें आम हैं। पहली — मुआवजा दर्ज रकबे के हिसाब से बनता है; अपने survey number का रकबा RTC से मिलाइए, कम दर्ज है तो VA के पास objection का रास्ता है। दूसरी — पैसा कई बार किस्तों में आता है, पहली किस्त पहले चढ़ती है। ध्यान रहे, सीमा अधिकतम 2 हेक्टेयर तक ही है — उससे ज्यादा जमीन पर बाकी रकम नहीं बनती।',
  },
  {
    q: 'जमीन खरीदी थी पर mutation नहीं चढ़ा — मुआवजा पुराने मालिक को चला गया।',
    a: 'यह पोर्टल का नहीं, रिकॉर्ड का मामला है — मुआवजा RTC में दर्ज नाम पर बनता है। पहले Bhoomi पर mutation चढ़वाइए, फिर तहसीलदार कार्यालय में लिखित आवेदन दीजिए — साथ में RTC, आधार और खरीद के कागज। अगला राउंड सीधे आपके नाम बनेगा; इस राउंड की रकम की वसूली रिकॉर्ड सुधरने के बाद ही आगे बढ़ती है।',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'hi-IN',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-3">{children}</h2>;
}

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-300 dark:border-red-900 text-sm leading-relaxed text-[var(--color-text)]">
      {children}
    </div>
  );
}

const Td = ({ children, strong }: { children: React.ReactNode; strong?: boolean }) => (
  <td className={`border border-[var(--color-border)] px-3 py-2 ${strong ? 'font-medium' : ''}`}>{children}</td>
);

export default function PariharaPaymentStatusHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        फसल खराब हुई है और मुआवजे का स्टेटस देखना है — दो मिनट में बता देते हैं।
        कर्नाटक में फसल नुकसान (bele hani) का मुआवजा <strong>Parihara</strong> सिस्टम
        से आता है — कन्नड़ में ಪರಿಹಾರ, मतलब ही राहत। स्टेटस देखने का सही पता है{' '}
        <strong>parihara.karnataka.gov.in</strong> — आधार नंबर से भी दिखता है और पूरे
        गांव की सूची से भी। दोनों तरीके नीचे अलग-अलग लिखे हैं, और उसके बाद वह बात जो
        ज्यादातर लेख नहीं बताते: पैसा अटका हो तो किस दरवाजे पर जाना है।
      </p>

      <p>
        एक बात पहले समझ लीजिए, क्योंकि आधी उलझन यहीं से शुरू होती है — Parihara कोई
        साल भर चलने वाली योजना नहीं है। सूखा, बाढ़, ओला — जब कोई आपदा आधिकारिक रूप से
        घोषित होती है, तभी प्रभावित तालुकों का survey होता है और उसी survey के आंकड़े
        से भुगतान बनता है। यानी पैसा आपके आवेदन से नहीं, <strong>survey से</strong>{' '}
        चलता है। इसीलिए जब पैसा न आए, तो झगड़ा पोर्टल से नहीं, रिकॉर्ड से होता है।
      </p>

      <H2>तरीका 1 — आधार नंबर से, सीधे मोबाइल पर</H2>

      <ol>
        <li>parihara.karnataka.gov.in खोलिए और आधार नंबर वाला स्टेटस विकल्प चुनिए।</li>
        <li>आपदा का प्रकार (Drought / Flood जैसा) और साल-सीजन चुनिए।</li>
        <li>12 अंकों का आधार नंबर डालिए, captcha भरिए, रिपोर्ट निकालिए।</li>
        <li>
          स्क्रीन पर आपकी एंट्री दिखेगी — नाम, survey number, मंजूर रकम और भुगतान की
          स्थिति। स्क्रीनशॉट ले लीजिए, आगे यही आपका सबूत बनेगा।
        </li>
      </ol>

      <p>
        ध्यान रखिए — यहां OTP नहीं मांगा जाता, सिर्फ नंबर से रिपोर्ट दिख जाती है। कोई
        साइट OTP के बहाने बैंक की जानकारी मांगे तो वहीं रुक जाइए — वह सरकारी पेज नहीं
        है।
      </p>

      <H2>तरीका 2 — गांव की सूची से, पूरे गांव का हिसाब</H2>

      <p>
        village-wise रिपोर्ट का फायदा यह है कि इसमें सिर्फ अपनी नहीं, पूरे गांव की
        तस्वीर दिखती है — किसका पैसा आया, किसका पेंडिंग है। पड़ोसी का आ गया और आपका
        नहीं, तो साफ है कि दिक्कत राउंड में नहीं, आपकी एंट्री में है।
      </p>

      <p>
        पोर्टल पर रिपोर्ट वाला विकल्प चुनकर साल, सीजन और आपदा का प्रकार भरिए, फिर
        District → Taluk → Hobli → Village चुनते जाइए। एक जगह लोग बार-बार फंसते हैं —
        hobli वही चुननी है जो आपके RTC (पहानी) में लिखी है, वरना गांव dropdown में
        मिलेगा ही नहीं। सूची में नाम कन्नड़ में होंगे, इसलिए अपना survey number से
        ढूंढना आसान रहता है। मैंने खुद एक बार रिपोर्ट निकालकर देखी तो नाम की कन्नड़
        स्पेलिंग इतनी अलग थी कि survey number ही काम आया।
      </p>

      <H2>कितना मुआवजा बनता है — दरें, सीमा समेत</H2>

      <p>
        मुआवजे की आधार-दरें SDRF (राज्य आपदा मोचन निधि) के नियमों से तय होती हैं, और
        नवंबर 2025 में कर्नाटक सरकार ने मानसून के नुकसान पर इन पर राज्य का top-up
        जोड़कर बढ़ी दरें घोषित कीं — मुख्यमंत्री की घोषणा के मुताबिक 14.24 लाख
        किसानों को ₹1,033.60 करोड़ का अतिरिक्त भुगतान एक ही दिन में किया गया। दरें:
      </p>

      <div className="not-prose my-5 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-surface-2,#f5f5f4)] dark:bg-neutral-800 text-left">
              <th className="border border-[var(--color-border)] px-3 py-2">फसल का प्रकार</th>
              <th className="border border-[var(--color-border)] px-3 py-2">SDRF आधार-दर (प्रति हेक्टेयर)</th>
              <th className="border border-[var(--color-border)] px-3 py-2">top-up के बाद (नवंबर 2025)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td strong>असिंचित (rainfed)</Td>
              <Td>₹8,500</Td>
              <Td>₹17,000 तक</Td>
            </tr>
            <tr>
              <Td strong>सिंचित (irrigated)</Td>
              <Td>₹17,000</Td>
              <Td>₹25,500 तक</Td>
            </tr>
            <tr>
              <Td strong>बहुवर्षीय (perennial)</Td>
              <Td>₹22,500</Td>
              <Td>₹31,000 तक</Td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        सीमा हर हाल में <strong>अधिकतम 2 हेक्टेयर</strong> — उससे ज्यादा जमीन पर रकम
        नहीं बढ़ती। और शर्त यह कि नुकसान 33% से ज्यादा आंका गया हो। top-up हर आपदा पर
        अपने आप लागू नहीं होता — वह उस राउंड की घोषणा पर निर्भर है, इसलिए अपनी मंजूर
        रकम पोर्टल की एंट्री में ही देखिए, अंदाजे से हिसाब मत लगाइए।
      </p>

      <H2>पैसा नहीं आया? पहले अपनी स्थिति पहचानिए</H2>

      <p>
        <strong>नाम सूची में ही नहीं है</strong> — मतलब survey में एंट्री छूटी है। VA
        (village accountant) से पूछिए कि आपके survey number का नुकसान दर्ज हुआ था या
        नहीं; छूटा है तो लिखित objection दीजिए, recieving कॉपी लेकर। जुबानी शिकायत का
        कोई रिकॉर्ड नहीं बचता।
      </p>

      <p>
        <strong>नाम है, स्टेटस pending है</strong> — एंट्री सही है, फंड का राउंड आपके
        तालुक तक नहीं पहुंचा। रिलीज की चेन ऐसे चलती है: survey → तालुक की मंजूरी →
        treasury से रिलीज → बैंक क्रेडिट। पड़ोसी तालुक से 2-4 हफ्ते का फर्क आम बात
        है। पर 2-3 महीने से जादा हो जाए तो pending को छुपी हुई rejection समझिए —
        Entry ID लेकर VA, फिर तहसीलदार कार्यालय, फिर DC office की helpline।
      </p>

      <p>
        <strong>स्टेटस Released है, खाता खाली</strong> — सबसे झुंझलाहट वाला मामला।
        DBT का पैसा खाता नंबर पर नहीं, आधार पर जाता है। बैंक जाकर तीन चीजें इसी क्रम
        में जंचवाइए: आधार-बैंक सीडिंग (form भरवाना 10 मिनट का काम है), NPCI मैपिंग
        (आधार कई खातों से जुड़ा हो तो पैसा उस खाते में गया होगा जहां मैपिंग सबसे आखिर
        में हुई), और खाते की सेहत — dormant खाता, अधूरी KYC या नाम mismatch पर सरकारी
        क्रेडिट लौट जाता है। तीनों ठीक करवाकर re-process की request दीजिए। बैंक
        rejection के हर कोड का इलाज{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">
          भुगतान फेल होने की गाइड
        </Link>{' '}
        में अलग से लिखा है।
      </p>

      <p>
        <strong>पैसा किसी और के खाते में गया</strong> — joint खाता, पुराना मालिक या
        बटाईदार का मामला। मुआवजा RTC के रिकॉर्ड से बनता है, इसलिए यह लड़ाई पोर्टल पर
        नहीं, तहसीलदार कार्यालय में लिखित आवेदन से लड़ी जाती है — RTC, आधार और अपना
        पक्ष साबित करने वाले कागज साथ लेकर।
      </p>

      <H2>FRUITS ID — कर्नाटक की वह चाबी जो अब हर ताले में लगती है</H2>

      <p>
        FRUITS (Farmer Registration and Unified Beneficiary Information System)
        कर्नाटक का किसान-पंजीकरण सिस्टम है — एक बार registration, एक FID नंबर, और वही
        नंबर PM-Kisan, Parihara और फसल बीमा — हर जगह पहचान बनता है। पिछले राहत राउंड
        में कई किस्तें FID-linked किसानों को पहले गई हैं, इसलिए इसे टालना अगली राहत
        को खुद रोकना है।
      </p>

      <p>
        पोर्टल पर &quot;not linked&quot; जैसा message दिखे तो नजदीकी Raitha Samparka
        Kendra जाइए — आधार और RTC साथ लेकर — FID में दोनों जुड़वाइए और यह भी जंचवाइए
        कि आपकी सारी जमीन के survey number उसमें दर्ज हैं या नहीं। अधूरी FID का मतलब
        है अगला मुआवजा फिर वहीं अटकेगा।
      </p>

      <Warn>
        <strong>तीन काम कभी मत कीजिए:</strong> &quot;Parihara list download&quot; के
        नाम पर घूमने वाली कोई APK install मत कीजिए — सरकारी स्टेटस सिर्फ browser में,
        सरकारी पोर्टल पर दिखता है। आधार नंबर सिर्फ .karnataka.gov.in वाले पते पर
        डालिए। और &quot;पैसा release करवा देंगे, इतना खर्चा लगेगा&quot; कहने वाले
        एजेंट को एक रुपया मत दीजिए — release का फैसला treasury और रिकॉर्ड से होता है,
        किसी की जेब से नहीं। ठगी हो जाए तो cyber helpline 1930 पर शिकायत कीजिए।
      </Warn>

      <p>
        रोमन हिंदी में और भी बारीक डिटेल — हर error message का मतलब और इलाज समेत —{' '}
        <Link href="/rajya-yojana/parihara-payment-status-check-2026">
          हिंग्लिश वाले विस्तृत लेख
        </Link>{' '}
        में है। केंद्र की ₹6,000 वाली योजना समझनी हो तो{' '}
        <Link href="/articles/PmKisanMasterGuide2026">पीएम किसान मास्टर गाइड</Link>{' '}
        से शुरू कीजिए।
      </p>

      <H2>उलझन वाले सवाल — साफ जवाब</H2>

      <div className="space-y-4 not-prose mb-8">
        {FAQS.map(({ q, a }) => (
          <div key={q} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
            <p className="p-4 pb-2 font-semibold text-[var(--color-text)] text-sm m-0">{q}</p>
            <p className="px-4 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed m-0">{a}</p>
          </div>
        ))}
      </div>

      <div className="my-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-800 text-sm leading-relaxed text-[var(--color-text)]">
        <strong>जरूरी बात:</strong> दरें और top-up हर आपदा-राउंड की घोषणा से बदलते हैं
        — ऊपर की दरें नवंबर 2025 की घोषणा और SDRF नियमों की हैं। अपनी मंजूर रकम हमेशा
        पोर्टल की एंट्री में देखें। स्टेटस देखना, objection देना, re-process कराना —
        इस पूरी चेन में कहीं कोई शुल्क नहीं है।
      </div>

      {/* typos (intentional, per style guide): "जादा" (pending वाले पैरा में — ज्यादा की जगह), "recieving" (objection वाले पैरा में — receiving की जगह) */}
    </>
  );
}
