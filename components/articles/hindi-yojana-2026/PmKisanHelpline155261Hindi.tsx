import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'हेल्पलाइन पर phone ही नहीं लगता — क्या करूं?',
    a: 'किस्त release वाले हफ्ते में lines सबसे busy होती हैं। सुबह 9-10 बजे try कीजिए, 155261 न लगे तो 011-24300606 लगाइए, और सबसे पक्का रास्ता — pmkisan.gov.in के Help Desk (Query Form) में online शिकायत डालिए। Online query का ticket number मिलता है, जो phone call से ज्यादा काम का है।',
  },
  {
    q: 'शिकायत के कितने दिन में जवाब आता है?',
    a: 'कोई fixed public deadline नहीं है। आम तौर पर online query पर 2-4 हफ्ते में update आ जाता है, पर मामला राज्य के पास हो (land seeding, state approval) तो ज्यादा भी लग सकता है। Ticket number संभालकर रखिए और Help Desk में "Know the Query Status" से check करते रहिए।',
  },
  {
    q: 'क्या हेल्पलाइन से नया registration हो जाएगा?',
    a: 'नहीं। हेल्पलाइन सिर्फ जानकारी और शिकायत के लिए है। नया registration pmkisan.gov.in के Farmers Corner से, CSC से या कृषि विभाग से होता है। Correction (नाम, bank, आधार) भी portal या CSC पर होता है, phone पर नहीं।',
  },
  {
    q: 'खुद online करना मुश्किल है — CSC से शिकायत हो जाएगी?',
    a: 'हां, नजदीकी CSC (जन सेवा केंद्र) से Help Desk query डलवा सकते हैं। बस ticket/reference number अपने पास लिखवाकर जरूर रखें, ताकि status खुद track कर सकें। गांव में network न हो तो block के कृषि विभाग office में लिखित शिकायत भी एक रास्ता है।',
  },
  {
    q: 'एक साथ कितनी शिकायतें डाल सकते हैं?',
    a: 'एक problem की एक ही query डालें। एक ही बात की कई queries डालने से record उलझता है और जवाब देर से आता है। हां, दो अलग-अलग दिक्कतें हैं — eKYC भी और payment भी — तो दोनों की अलग query ठीक है।',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function Head2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold mt-8 mb-3 leading-snug">{children}</h2>;
}

export default function PmKisanHelpline155261Hindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        Numbers पहले: PM किसान हेल्पलाइन <strong>155261</strong>, landline{' '}
        <strong>011-24300606</strong>, email <strong>pmkisan-ict@gov.in</strong> — सब pmkisan.gov.in के
        Contact Us page पर confirmed हैं। समय: आम तौर पर सुबह 9 से शाम 6, सोमवार से शनिवार।
      </p>
      <p>
        पर यहीं रुकिए मत। आधी calls इस helpline पर उन problems के लिए लगती हैं जो helpline हल कर ही नहीं
        सकती — eKYC, land record, bank seeding। घंटा line में लगने के बाद जवाब मिलता है &ldquo;CSC
        जाइए&rdquo; या &ldquo;तहसील में पता करो&rdquo;। इसलिए पहले यह तय कीजिए कि आपकी problem का सही
        दरवाजा कौन सा है।
      </p>

      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
        <Image
          src="/images/articles/hindi-yojna/helpline-shikayat/farmer-on-call.webp"
          alt="किसान मोबाइल से PM किसान हेल्पलाइन पर बात करता हुआ"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          155261 — पर call से पहले सही दरवाजा पहचान लीजिए
        </figcaption>
      </figure>

      <Head2>कौन सी problem, कौन सा दरवाजा</Head2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 font-bold">Problem</th>
              <th className="p-3 font-bold">सही जगह</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td className="p-3">किस्त नहीं आई, वजह नहीं पता</td><td className="p-3">पहले खुद beneficiary status देखिए — वहां लिखा error ही वजह है। फिर जरूरत हो तो 155261।</td></tr>
            <tr className="border-t"><td className="p-3">eKYC pending / fail</td><td className="p-3">OTP वाली eKYC portal/app से खुद, warna नजदीकी CSC — biometric वहीं होता है।</td></tr>
            <tr className="border-t"><td className="p-3">Land seeding &ldquo;No&rdquo;</td><td className="p-3">लेखपाल / पटवारी / तहसील — land record राज्य के पास है।</td></tr>
            <tr className="border-t"><td className="p-3">पैसा आकर वापस चला गया</td><td className="p-3">Bank branch — NPCI आधार seeding कराइए।</td></tr>
            <tr className="border-t"><td className="p-3">नाम / bank / आधार detail गलत</td><td className="p-3">Portal के Farmers Corner में correction, या CSC। Phone पर correction नहीं होती।</td></tr>
            <tr className="border-t"><td className="p-3">&ldquo;Payment Stopped by State&rdquo;</td><td className="p-3">जिला कृषि अधिकारी / राज्य nodal officer।</td></tr>
            <tr className="border-t"><td className="p-3">Registration reject</td><td className="p-3">Rejection की वजह status में देखिए, फिर जिला कृषि विभाग।</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        सात में से पांच cases में पहला कदम helpline है ही नहीं — इसीलिए यह table सबसे ऊपर है।
      </p>

      <Head2>Call से पहले 2 minute का काम</Head2>
      <p>
        pmkisan.gov.in पर Know Your Status खोलिए, registration number डालिए, OTP से देखिए। वहां तीन चीजें
        साफ दिखती हैं: eKYC हुई या नहीं, land seeding Yes है या No, और bank/NPCI seeding का हाल। जो भी
        &ldquo;No&rdquo; है — वही आपकी वजह है। NPCI वाली दिक्कत की पूरी guide{' '}
        <Link href="/articles/hi/npci-aadhaar-seeding" className="underline font-bold">यहां</Link> है।
        Status में सब Yes है, FTO भी बन गया, फिर भी पैसा नहीं आया? अब helpline का number घुमाइए — यह
        genuinely उनका case है।
      </p>

      <Head2>155261 पर कैसे बात करें कि काम बने</Head2>
      <p>
        Call से पहले तीन चीजें हाथ में: <strong>registration number</strong> (या आधार), आधार card, और
        status का screenshot या लिखा हुआ error। बात ऐसे शुरू कीजिए: &ldquo;Registration number यह है,
        status में यह error दिख रहा है, किस्त इतनी तारीख से नहीं आई।&rdquo; सीधा, number के साथ। सुबह 9-10
        के बीच call कीजिए, 155261 busy हो तो 011-24300606। शिकायत register हो तो number जरूर मांगिए, और
        जवाब न मिले तो वही बात pmkisan-ict@gov.in पर email कर दीजिए — record बन जाता है।
      </p>

      <Head2>ईमेल से शिकायत — format ऐसा रखिए</Head2>
      <p>
        Email (<strong>pmkisan-ict@gov.in</strong>) उन cases के लिए सही है जहां documents attach करने हों —
        पासबुक की photo, rejection का screenshot। Format कुछ ऐसा:
      </p>
      <div className="my-4 p-4 bg-green-50 border-l-4 border-green-600 rounded-r-xl text-sm leading-relaxed">
        <strong>Subject:</strong> PM Kisan — किस्त नहीं मिली — [आधार के आखिरी 4 अंक]<br /><br />
        महोदय,<br />
        मेरा नाम [नाम], गांव [गांव], जिला [जिला], राज्य [राज्य]।<br />
        Registration mobile number: [नंबर]<br />
        समस्या: [कौन सी किस्त, कब से, status में क्या दिख रहा है]<br />
        कृपया समाधान करें।<br />
        धन्यवाद।
      </div>
      <p>
        पूरा आधार नंबर email में मत लिखिए — आखिरी 4 अंक काफी हैं। और एक ही शिकायत बार-बार अलग-अलग email
        से मत भेजिए — process तेज नहीं होता, records उलझ जाते हैं।
      </p>

      <Head2>Online शिकायत — जो phone से ज्यादा पक्की है</Head2>
      <p>
        pmkisan.gov.in पर <strong>Help Desk / Query Form</strong> का section है। आधार, account या mobile
        number से query register कीजिए, category चुनिए, problem लिखिए — <strong>ticket number</strong>{' '}
        मिलता है। Phone की बात हवा में रहती है, ticket system में रहता है। 3-4 हफ्ते बाद &ldquo;Know the
        Query Status&rdquo; से जवाब देखिए; अधूरा लगे तो नई query में पुराना ticket number quote कीजिए।
      </p>
      <p>
        <strong>सावधान:</strong> 155261 या किसी सरकारी number से call करके कोई OTP नहीं पूछता, न
        &ldquo;processing fee&rdquo; मांगता है। ऐसी call आए तो fraud है — काट दीजिए।
      </p>

      <Head2>बात न बने तो ऊपर कैसे जाएं — पूरी सीढ़ी</Head2>
      <p>
        District level पर कृषि अधिकारी (DAO) के office में लिखित application दीजिए — साथ में status का
        printout और ticket number। लिखित शिकायत की copy अपने पास रखिए — अगली बार वही काम आती है।
      </p>
      <p>
        उससे ऊपर हर राज्य का <strong>Nodal Officer</strong> होता है जो योजना का in-charge है। PM Kisan
        central scheme जरूर है, पर verification और record correction का बड़ा हिस्सा राज्य के पास होता है।
        Online query डाले महीना हो गया, helpline बोलती है &ldquo;process में है&rdquo; — ऐसे में सीधे अपने
        राज्य के Nodal Officer के office से संपर्क अक्सर काम कर जाता है, क्योंकि record दरअसल उसी दफ्तर में
        अटका होता है। राज्यवार list{' '}
        <Link href="/articles/PmKisanStateNodalOfficerList" className="underline font-bold">इस page पर</Link> है।
      </p>
      <p>
        आखिरी हथियार — <strong>CPGRAMS</strong>, केंद्र सरकार का अपना grievance portal (pgportal.gov.in)।
        यहां दर्ज शिकायत सीधे कृषि मंत्रालय तक जाती है और registration number से track होती है। इसे पहला
        नहीं, आखिरी रास्ता समझिए — पहले Help Desk और Nodal Officer आजमाइए। पर जब महीनों बाद भी बात न बने,
        तब CPGRAMS पर पुरानी query का reference देते हुए शिकायत डालिए। मंत्रालय स्तर से आई query पर नीचे
        के office अक्सर तेजी से हिलते हैं — यह जमीनी सच है।
      </p>

      <figure className="my-5 rounded-2xl overflow-hidden border border-[var(--color-border)]">
        <Image
          src="/images/articles/hindi-yojna/helpline-shikayat/complaint-ladder.webp"
          alt="शिकायत की सीढ़ी — हेल्पलाइन से CPGRAMS तक के चार पायदान"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          Help Desk → DAO → Nodal Officer → CPGRAMS — क्रम यही रखिए
        </figcaption>
      </figure>

      <Head2>शिकायत लिखते समय ये 4 गलतियां मत कीजिए</Head2>
      <p>
        Help Desk पर हजारों queries रोज आती हैं। साफ लिखी शिकायत का record जल्दी ढूंढा जाता है, उलझी हुई
        पीछे छूट जाती है। चार गलतियां जो बार-बार दिखती हैं:
      </p>
      <p>
        <strong>गुस्से वाली लंबी कहानी।</strong> पढ़ने वाले को आपबीती नहीं, तीन चीजें चाहिए — कौन सी किस्त,
        कब से रुकी, status में क्या लिखा है। तीन लाइन काफी हैं।
      </p>
      <p>
        <strong>गलत category।</strong> Payment की दिक्कत eKYC category में डाल दी, तो query गलत desk पर
        जाएगी और लौटने में हफ्ते लगेंगे। Category दो बार पढ़कर चुनिए।
      </p>
      <p>
        <strong>Details बिना confirm किए।</strong> आधार के अंक गलत लिखे तो record मिलेगा ही नहीं। Submit
        से पहले एक बार सब मिला लीजिए।
      </p>
      <p>
        <strong>Status में जो दिख रहा है, वो न बताना।</strong> &ldquo;पैसा नहीं आया&rdquo; अधूरी बात है।
        &ldquo;Status में FTO generated लिखा है लेकिन 3 हफ्ते से payment नहीं&rdquo; — यह पूरी बात है, और
        इसका जवाब भी सटीक आता है।
      </p>

      <Head2>आपकी शिकायत ऊपर तक पहुंचती भी है — एक सबूत</Head2>
      <p>
        &ldquo;शिकायत डालने से क्या होगा, कोई पढ़ता थोड़े है&rdquo; — यह निराशा आम है, पर पूरी सच नहीं।
        अक्टूबर 2025 में केंद्रीय कृषि मंत्री ने कृषि भवन में किसानों की शिकायतों की समीक्षा बैठक की — जिसमें
        PM-Kisan portal की शिकायतें अलग category थीं। साफ निर्देश निकला: <strong>जब तक किसान खुद संतुष्ट न
        हो, शिकायत बंद न की जाए</strong>, और धीमी कार्रवाई वाले राज्यों की अलग से पहचान हो।
      </p>
      <p>
        आपके लिए निकलने वाली बात: system निगरानी में है, और <strong>record में दर्ज शिकायत ही</strong> इस
        निगरानी में गिनी जाती है। Phone पर हुई बात किसी आंकड़े में नहीं जाती — इसीलिए यह page बार-बार लिखित
        query पर जोर देता है।
      </p>

      <Head2>रात में या phone के अलावा — नए रास्ते</Head2>
      <p>
        NIC के मुताबिक PM-Kisan system में अब <strong>24×7 IVRS आधारित helpline</strong> और chatbot भी है —
        रात में भी basic status-पूछताछ recorded system से हो सकती है, भले staff से बात कामकाजी घंटों में ही
        हो। UMANG app के Kisan Suvidha से भी योजना की सेवाएं जुड़ी हैं। पहचान वाली सावधानी हर जगह एक ही है:
        OTP या bank password कोई भी सरकारी चैनल कभी नहीं मांगता।
      </p>
      <p>
        एक आखिरी practical आदत — हर call/query की एक पर्ची रखिए: तारीख, किससे बात हुई, क्या कहा गया,
        ticket number। तीन-चार entries के बाद यही पर्ची आपकी सबसे मजबूत दलील बन जाती है, क्योंकि तब आप
        अंदाज़े से नहीं, record से बात करते हैं।
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
