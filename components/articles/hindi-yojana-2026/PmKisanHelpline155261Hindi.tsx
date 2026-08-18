import Link from 'next/link';
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
    q: 'Call पर क्या-क्या ready रखना चाहिए?',
    a: 'Registration number (न हो तो आधार number), आधार card, और अपनी problem एक line में। Beneficiary status का screenshot हो तो और अच्छा — उसमें जो error लिखा है वही बताना सबसे तेज काम करता है।',
  },
  {
    q: 'Email बेहतर है या phone?',
    a: 'दोनों से बेहतर portal का Help Desk form है — शिकायत system में register होती है और status track होता है। Email (pmkisan-ict@gov.in) तब काम आता है जब documents attach करने हों। Email में registration number और problem साफ लिखिए।',
  },
  {
    q: 'राज्य-स्तर की problem हो तो Delhi वाली हेल्पलाइन क्या करेगी?',
    a: 'सच यह है कि land seeding, state approval जैसी problems राज्य के पास अटकी होती हैं और central helpline सिर्फ forward कर सकती है। ऐसे में जिला कृषि अधिकारी या राज्य के nodal officer से सीधा संपर्क ज्यादा तेज होता है।',
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

      <Head2>बात न बने तो ऊपर कैसे जाएं</Head2>
      <p>
        District level पर कृषि अधिकारी (DAO) के office में लिखित application दीजिए — साथ में status का
        printout और ticket number। उससे ऊपर हर राज्य का nodal officer होता है; किस्त न आने की हर स्थिति की
        पूरी guide <Link href="/articles/hi/helpline-shikayat" className="underline font-bold">शिकायत वाले
        हिंदी article</Link> में भी है। लिखित शिकायत की copy अपने पास रखिए — अगली बार वही काम आती है।
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
