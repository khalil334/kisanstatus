import Link from 'next/link';
import HindiRelatedFooter from '@/components/HindiRelatedFooter';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'महाराष्ट्र के किसान को कुल कितना पैसा मिलता है?',
    a: 'केंद्र की PM Kisan से ₹6,000 सालाना और राज्य की नमो शेतकरी महासन्मान निधि से ₹6,000 — कुल ₹12,000। राज्य सरकार ने रकम बढ़ाने की घोषणा भी की है, लेकिन बढ़ी हुई रकम आपकी किस्त में कब से दिखेगी, यह official portal/घोषणा से ही confirm करें।',
  },
  {
    q: 'क्या नमो शेतकरी के लिए अलग आवेदन करना पड़ता है?',
    a: 'नहीं। योजना PM Kisan के database पर ही चलती है — महाराष्ट्र का जो किसान PM Kisan का verified beneficiary है, वह नमो शेतकरी का भी हकदार है। अलग form भरने की जरूरत नहीं। नया किसान पहले PM Kisan में registration कराए, राज्य की किस्त अपने आप जुड़ती है।',
  },
  {
    q: 'किस्त का status कहां देखें?',
    a: 'NSMNY portal (nsmny.mahait.org) पर Beneficiary Status option है — registered mobile number या registration number डालकर OTP से status दिखता है। केंद्र वाली (PM Kisan) किस्तों का status इस portal पर नहीं दिखता — उसके लिए pmkisan.gov.in खोलना होगा।',
  },
  {
    q: 'नमो शेतकरी की किस्त नहीं आई पर PM Kisan आ गई — क्यों?',
    a: 'आम तौर पर तीन कारण मिलते हैं: eKYC अधूरी, बैंक खाता आधार से linked/DBT-enabled नहीं, या land record verification pending। चौथा कारण schedule का है — राज्य की किस्तें PM Kisan के साथ-साथ नहीं, अपने कार्यक्रम से release होती हैं। पहले NSMNY portal पर status देखें, फिर कृषि सहायक/तलाठी से मिलें।',
  },
  {
    q: 'नमो शेतकरी की किस्तें कब-कब आती हैं?',
    a: 'PM Kisan की तरह ही ₹2,000 की तीन किस्तों का ढांचा है, पर release की तारीखें राज्य सरकार तय करती है — कई बार PM Kisan की किस्त के आसपास, कई बार अलग से। Exact date की सिर्फ official घोषणा मानें, WhatsApp forward नहीं।',
  },
  {
    q: 'क्या यह योजना मराठी में ही है? हिंदी वाले किसान का क्या?',
    a: 'Portal मराठी और अंग्रेजी में है, पर process हर भाषा में एक जैसी है — आधार, mobile OTP, status check। भाषा से हक पर फर्क नहीं पड़ता; महाराष्ट्र का PM Kisan beneficiary होना ही शर्त है।',
  },
  {
    q: 'पति-पत्नी दोनों किसान हैं — दोनों को नमो शेतकरी मिलेगी?',
    a: 'नहीं। PM Kisan की तरह यह भी परिवार-आधारित योजना है — इकाई व्यक्ति नहीं, परिवार है (पति + पत्नी + नाबालिग बच्चे)। लाभ उस इकाई में किसी एक को ही मिलता है। दोनों ने ले लिया तो आगे recovery notice आने का जोखिम है।',
  },
  {
    q: 'NSMNY portal पर “eKYC pending” दिख रहा है — eKYC कहां करनी है, NSMNY पर या PM Kisan पर?',
    a: 'PM Kisan पर। नमो शेतकरी अपना अलग eKYC नहीं कराती — वह PM Kisan का verified record ही पढ़ती है। pmkisan.gov.in पर OTP या Face App से eKYC पूरी करें; कुछ दिन में NSMNY का status भी update हो जाता है।',
  },
  {
    q: 'किस्त किसी पुराने/बंद खाते में चली गई — अब क्या करूं?',
    a: 'DBT का transfer NPCI mapper के record से तय होता है, form में लिखे खाते से नहीं — जो खाता सबसे बाद में seed हुआ, रकम वहीं पहुंचती है। इसलिए जिस खाते में पैसा चाहिए, उसी branch में NPCI seeding form भर दीजिए। बंद खाते वाला transfer fail होकर अगले payment cycle में नए खाते पर री-ट्राई होता है।',
  },
  {
    q: 'शिकायत कहां करें अगर सब कुछ सही होने पर भी पैसा न आए?',
    a: 'पहला स्तर — गांव का कृषि सहायक या तलाठी। दूसरा — तालुका कृषि अधिकारी का दफ्तर। PM Kisan वाली किस्त के लिए केंद्रीय helpline (155261) अलग है। शिकायत का नंबर/पावती जरूर लें — बिना रसीद की मौखिक शिकायत का कोई रिकॉर्ड नहीं बनता।',
  },
  {
    q: 'क्या बटाईदार (दूसरे की जमीन जोतने वाला) किसान यह पैसा पा सकता है?',
    a: 'नहीं — योजना उन्हीं किसानों के लिए है जिनके नाम जमीन का record है, क्योंकि यह PM Kisan के नियमों पर ही चलती है। बटाईदारी का अलग से कोई प्रावधान इस योजना में नहीं है।',
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

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Hd({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-3 pb-2 border-b-2 border-orange-200 dark:border-orange-900">
      {children}
    </h2>
  );
}

function Note({ tone, children }: { tone: 'green' | 'amber'; children: React.ReactNode }) {
  const cls =
    tone === 'green'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600'
      : 'bg-amber-50 dark:bg-amber-900/20 border-amber-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm leading-relaxed text-[var(--color-text)] ${cls}`}>
      {children}
    </div>
  );
}

function Bubble({ q, a }: { q: string; a: string }) {
  return (
    <div className="my-4">
      <div className="flex justify-end mb-2">
        <p className="max-w-[85%] bg-[var(--color-primary)] text-white text-sm rounded-2xl rounded-br-sm px-4 py-2.5 leading-relaxed font-medium">
          {q}
        </p>
      </div>
      <div className="flex justify-start">
        <p className="max-w-[90%] bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text)] text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

function MythPanel({ myth, truth }: { myth: string; truth: React.ReactNode }) {
  return (
    <div className="my-4 border border-[var(--color-border)] rounded-xl overflow-hidden">
      <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2.5 text-sm font-semibold text-[var(--color-text)]">
         गलतफहमी: {myth}
      </div>
      <div className="px-4 py-3 text-sm text-[var(--color-text)] leading-relaxed bg-[var(--color-card)]">
         सच: {truth}
      </div>
    </div>
  );
}

export default function NamoShetkariYojanaMaharashtra({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        सितंबर 2025 की एक press release का आंकड़ा देखिए — नमो शेतकरी योजना की 7वीं किस्त में महाराष्ट्र
        सरकार ने <strong>91 लाख से ज्यादा किसानों</strong> के खातों में करीब ₹1,892 करोड़ भेजे। एक किस्त
        में। फिर भी गांव-गांव में एक ही सवाल घूमता है — &ldquo;PM Kisan तो आ गई, पर यह दूसरी वाली ₹2,000 किसकी
        थी? और इस बार क्यों नहीं आई?&rdquo; अगर आप भी महाराष्ट्र के किसान हैं और यह हिसाब उलझा हुआ लगता है, तो
        यह guide आपके लिए है।
      </p>

      <Note tone="green">
        <strong>एक line में:</strong> महाराष्ट्र का जो किसान PM Kisan का verified beneficiary है, उसे राज्य
        सरकार <strong>नमो शेतकरी महासन्मान निधि</strong> से ₹6,000/साल और देती है — अलग आवेदन नहीं,
        ₹2,000 की तीन किस्तें, status{' '}
        <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">nsmny.mahait.org</a>{' '}
        पर।
      </Note>

      <Figure
        src="/images/articles/hindi-yojna/namo-shetkari/shetkari-field.webp"
        alt="महाराष्ट्र का किसान अपने खेत में"
        caption="नमो शेतकरी — महाराष्ट्र के किसान को PM Kisan के ऊपर ₹6,000 और"
      />

      <Hd>योजना क्या है — और MP वाले model से रिश्ता</Hd>
      <p>
        2023-24 के महाराष्ट्र budget में घोषित यह योजना उसी formula पर चलती है जो मध्य प्रदेश ने{' '}
        <Link href="/articles/hi/mp-kisan-kalyan-yojana">किसान कल्याण योजना</Link> से शुरू किया था —
        केंद्र की PM Kisan के ऊपर राज्य अपनी तरफ से बराबर की रकम जोड़ दे। हासिल यह हुआ कि महाराष्ट्र के किसान परिवार
        को सालाना <strong>₹12,000</strong> मिलते हैं — ₹6,000 केंद्र से, ₹6,000 राज्य से।
      </p>
      <p>
        सरकार ने राज्य वाली रकम बढ़ाकर ₹9,000 करने की बात भी कही है — कुल ₹15,000 का math। लेकिन
        यहां हम सिर्फ उतना लिखेंगे जितना खाते में आता दिखा है: अब तक की किस्तें ₹2,000 × 3 के हिसाब से ₹6,000/साल
        की rhythm पर आई हैं। बढ़ी हुई रकम आपकी किस्त में कब से लागू होगी, यह official घोषणा और portal से
        confirm करें — अफवाह से नहीं।
      </p>

      <Hd>किस्तों का अब तक का सफर — कागज़ पर दर्ज record</Hd>
      <p>
        योजना की नींव 15/06/2023 के शासन निर्णय (GR क्र. किसानी-2023/प्र.क्र. 42/11-अ) से पड़ी थी,
        और पहली किस्त अक्टूबर 2023 में निकली — PM Kisan की 14वीं किस्त की beneficiary list के आधार पर।
        तब से किस्तें लगातार आ रही हैं — सितंबर 2025 में 7वीं किस्त (करीब ₹1,892 करोड़, 91 लाख+ किसान),
        और फिर मार्च 2026 में 8वीं किस्त।
      </p>
      <p>
        8वीं किस्त का किस्सा ध्यान से सुनिए, क्योंकि इसमें योजना की पूरी कार्यप्रणाली दिखती है। 17/03/2026
        को कृषि मंत्री दत्तात्रय भरणे ने एलान किया कि अगले हफ्ते 8वीं किस्त खातों में जाएगी — GR जारी हो चुका
        था, <strong>₹1,774 करोड़</strong> का आवंटन मंजूर था और करीब <strong>90.34 लाख किसान</strong> इसके दायरे में थे
        (IANS की{' '}
        <a
          href="https://indian.community/news/maharashtra-to-deposit-8th-instalment-of-namo-shetkari-scheme-for-farmers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          यह report
        </a>{' '}
        देखें)। खास बात — यह किस्त अगस्त से नवंबर 2025 की अवधि की थी — जिस चार-महीने का पैसा था,
        वह करीब चार महीने बाद खाते में पहुंचा। इससे सबक यह है कि राज्य की किस्त में कुछ महीनों की देरी इस
        योजना में सामान्य बात रही है — देरी का अर्थ नाम कटना नहीं होता। पहले GR/घोषणा आती है, फिर कुछ
        दिनों में DBT — यह क्रम पहचान लेंगे तो अफवाहों से बचे रहेंगे।
      </p>

      <Hd>PM Kisan बनाम नमो शेतकरी — फर्क की सीधी तालिका</Hd>
      <p>
        दोनों किस्तें एक ही खाते में आती हैं, तो उलझन स्वाभाविक है। यह तालिका सामने रख लीजिए —
        आगे कभी confusion नहीं होगा:
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">सवाल</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">PM Kisan</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">नमो शेतकरी</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">पैसा किसका?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">केंद्र सरकार</td>
              <td className="border border-[var(--color-border)] px-3 py-2">महाराष्ट्र सरकार</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">रकम</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹6,000/साल (₹2,000 × 3)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹6,000/साल (₹2,000 × 3)</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">आवेदन</td>
              <td className="border border-[var(--color-border)] px-3 py-2">pmkisan.gov.in पर registration</td>
              <td className="border border-[var(--color-border)] px-3 py-2">अलग आवेदन नहीं — PM Kisan से अपने आप</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Status कहां?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">pmkisan.gov.in → Know Your Status</td>
              <td className="border border-[var(--color-border)] px-3 py-2">nsmny.mahait.org → Beneficiary Status</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Release कौन तय करता है?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">केंद्र का कार्यक्रम</td>
              <td className="border border-[var(--color-border)] px-3 py-2">राज्य का अपना कार्यक्रम</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">शिकायत कहां?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">केंद्रीय helpline 155261</td>
              <td className="border border-[var(--color-border)] px-3 py-2">कृषि सहायक / तालुका कृषि अधिकारी</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        तालिका की आखिरी दो lines पर खास नजर रखिए — release और शिकायत। PM Kisan की किस्त आ जाने का
        अर्थ यह नहीं कि उसी दिन नमो शेतकरी भी आएगी — दोनों के कार्यक्रम अलग हैं। और शिकायत गलत
        दरवाजे पर करेंगे तो जवाब में सिर्फ &ldquo;यह हमारा विषय नहीं&rdquo; सुनने को मिलेगा।
      </p>

      <Hd>पात्रता — शर्तें गिनती की हैं</Hd>
      <ul className="my-4 space-y-2 list-none pl-0">
        <li className="flex gap-2 text-sm leading-relaxed"><span>किसान <strong>महाराष्ट्र का निवासी</strong> हो और उसके नाम खेती की जमीन का record हो।</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span><strong>PM Kisan का active beneficiary</strong> हो — यही असली शर्त है; राज्य अपनी अलग जांच नहीं करता, केंद्र का verified database ही उठाता है।</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span><strong>eKYC पूरी</strong> हो और बैंक खाता आधार से seeded + DBT-enabled हो।</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span>PM Kisan के exclusion नियम यहां भी लागू — income tax payer परिवार, सरकारी कर्मचारी, ₹10,000+ pension वाले बाहर।</span></li>
      </ul>

      <Note tone="amber">
        इसका उल्टा भी उतना ही सच है — PM Kisan में किस्त रुकी (eKYC, land seeding, बैंक issue), तो नमो
        शेतकरी भी रुकेगी। एक ही जड़ से दोनों किस्तें निकलती हैं। पहले PM Kisan की सेहत ठीक करो,
        राज्य वाली अपने आप पटरी पर आ जाती है।
      </Note>

      <Hd>Status check — क्रम से</Hd>
      <Figure
        src="/images/articles/hindi-yojna/namo-shetkari/status-portal.webp"
        alt="नमो शेतकरी योजना का beneficiary status page"
        caption="Status देखने के लिए registration नंबर या mobile नंबर काफी है"
      />
      <ol className="my-4 space-y-2 pl-5 list-decimal text-sm leading-relaxed">
        <li>
          <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">nsmny.mahait.org</a>{' '}
          खोलें — यह NSMNY का official portal है।
        </li>
        <li><strong>Beneficiary Status</strong> option चुनें।</li>
        <li>Registered mobile number या registration number (जो PM Kisan में दर्ज है) डालें, captcha भरें।</li>
        <li>Mobile पर आए <strong>OTP</strong> से verify करें।</li>
        <li>Screen पर किस्तों की history, eKYC status और आधार seeding status दिखेगा — photo save कर लें।</li>
      </ol>

      <div className="my-5 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)] shadow-sm">
        <div className="bg-green-50 dark:bg-green-900/20 border-b border-[var(--color-border)] px-4 py-2.5">
          <span className="text-green-700 dark:text-green-300 text-xs font-bold">Official portal — bookmark कर लें:</span>
        </div>
        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div>
            <p className="font-bold text-[var(--color-text)] text-sm">Namo Shetkari Mahasanman Nidhi — Official Portal</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Government of Maharashtra</p>
          </div>
          <a
            href="https://nsmny.mahait.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
          >
            NSMNY Portal खोलो ↗
          </a>
        </div>
      </div>

      <Hd>किस्त नहीं आई? यह checklist चलाइए</Hd>
      <p>
        7वीं किस्त के समय भी लाखों किसान ऐसे थे जिनका नाम list में था पर पैसा नहीं पहुंचा। लगभग हर मामला
        इन्हीं चार खानों में गिरता है:
      </p>
      <ol className="my-4 space-y-3 pl-5 list-decimal text-sm leading-relaxed">
        <li>
          <strong>eKYC अधूरी</strong> — rejection की पहली वजह यही निकलती है। मोबाइल से OTP या Face App से पूरी
          करें — पूरा तरीका <Link href="/articles/hi/ekyc-mobile-se">यहां खुलेगा</Link>।
        </li>
        <li>
          <strong>बैंक खाता आधार से linked नहीं / DBT off</strong> — यह NPCI seeding का मामला है, branch
          जाकर form भरना पड़ता है। Seeding का पूरा खेल{' '}
          <Link href="/articles/hi/npci-aadhaar-seeding">इस लेख में खोलकर बताया है</Link>।
        </li>
        <li>
          <strong>Land record verification pending</strong> — तलाठी/कृषि सहायक के स्तर पर अटका होता है;
          खतौनी लेकर मिलिए।
        </li>
        <li>
          <strong>PM Kisan में ही registration अधूरा</strong> — तो पहले वहां का status देखें (
          <Link href="/articles/hi/status-check-mobile-se">mobile number से status check</Link>) और वह
          ठीक कराएं।
        </li>
      </ol>

      <Hd>गांव में घूमती तीन गलतफहमियां — और सच</Hd>
      <MythPanel
        myth="“नमो शेतकरी का अलग form भरना पड़ता है, agent ₹500 में भर देगा।”"
        truth={<>ऐसा कोई form है ही नहीं। जो agent इसके पैसे मांग रहा है, वह आपसे उस काम के पैसे ले रहा है जो होता ही नहीं।</>}
      />
      <MythPanel
        myth="“PM Kisan की किस्त आ गई, नमो शेतकरी नहीं आई — मेरा नाम कट गया।”"
        truth={<>ज्यादातर मामलों में नाम कटा नहीं होता; राज्य की किस्त अपने अलग कार्यक्रम से release होती है। पहले NSMNY portal पर status देखें, फिर परेशान हों।</>}
      />
      <MythPanel
        myth="“रकम बढ़कर ₹15,000 हो गई है, इस बार से ज्यादा आएगा।”"
        truth={<>बढ़ोतरी की घोषणा हुई है, पर आपकी किस्त में कब से दिखेगी यह official अधिसूचना से ही पक्का होगा। WhatsApp पर घूमते &ldquo;इस तारीख को ₹3,000 आएंगे&rdquo; सरीखे message का स्रोत पूछें — जवाब नहीं मिलेगा।</>}
      />

      <Hd>नए किसान के लिए रास्ता</Hd>
      <p>
        अलग से &ldquo;नमो शेतकरी का form&rdquo; ढूंढने मत जाइए — ऐसा कोई अलग आवेदन है ही नहीं। रास्ता एक ही है:
        पहले PM Kisan में registration (अब Farmer ID के साथ), eKYC और बैंक seeding पूरी कीजिए। जिस
        महीने आप PM Kisan के verified beneficiary बने, उसके बाद की राज्य किस्त से आपका नाम नमो शेतकरी
        में भी गिना जाने लगता है। Registration कदम-दर-कदम कैसे होता है, यह{' '}
        <Link href="/articles/hi/nayi-registration">नई रजिस्ट्रेशन वाले लेख</Link> में देख लें।
      </p>

      <Hd>कागज़ात की तैयारी — हाथ में क्या-क्या हो</Hd>
      <p>
        चाहे नई registration हो या अटकी किस्त की शिकायत — तलाठी या कृषि सहायक के पास खाली हाथ मत
        जाइए। हर चक्कर में एक ही जवाब मिलेगा: &ldquo;फलां कागज़ लेकर आओ।&rdquo; एक बार में काम निपटाना है तो यह
        बंडल पहले से तैयार रखिए:
      </p>
      <ul className="my-4 space-y-2 list-none pl-0">
        <li className="flex gap-2 text-sm leading-relaxed"><span><strong>आधार कार्ड</strong> — और वह mobile number जो आधार से linked है, क्योंकि हर verification OTP उसी पर आता है।</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span><strong>7/12 उतारा (सातबारा)</strong> — महाराष्ट्र का land record यही है; ताजा निकालकर रखें। साथ में <strong>8-अ</strong> का उतारा भी हो तो और अच्छा — holding का पूरा हिसाब उसी में दिखता है।</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span><strong>बैंक passbook</strong> — उसी खाते की जो आधार से seeded है। कौन सा खाता seeded है यह याद नहीं, तो branch में पूछ लें — अंदाज़े से passbook मत उठाइए।</span></li>
        <li className="flex gap-2 text-sm leading-relaxed"><span><strong>PM Kisan registration number</strong> — SMS, पुरानी पावती या portal से नोट कर लें; शिकायत में पहला सवाल यही पूछा जाता है।</span></li>
      </ul>
      <p>
        एक छोटा सा काम और — इन सबकी एक-एक photocopy और mobile में photo रखिए। सरकारी दफ्तर में
        original जमा नहीं होता, पर copy मांगी जाती है; और photo रखने का फायदा यह कि अगली बार कोई भी portal
        भरते समय खसरा नंबर या खाता नंबर ढूंढने घर नहीं लौटना पड़े।
      </p>

      <Hd>समय का हिसाब — कितने दिन में क्या होता है</Hd>
      <p>
        एक आम scenario लीजिए: मान लीजिए आपने आज eKYC पूरी की, क्योंकि उसी की वजह से किस्त रुकी थी।
        अब क्या उम्मीद रखें? Portal पर eKYC का status आमतौर पर कुछ ही दिनों में update दिखने लगता है,
        लेकिन रुकी हुई रकम उसी दिन नहीं आती — वह अगली release की प्रक्रिया में जुड़कर आती है। बीच के
        हफ्तों में &ldquo;पैसा अब भी नहीं आया&rdquo; देखकर घबराने की जरूरत नहीं है। यह बात NPCI seeding
        पर भी लागू होती है — branch में form भरने के बाद mapper में update होने में समय लगता है।
      </p>
      <p>
        इस कारण नियम यह बनाइए: गड़बड़ी ठीक कराने के बाद portal का status देखें — गड़बड़ी वाला flag हटा या
        नहीं। Flag हट गया, तो आपका काम पूरा है; अब किस्त अगले release cycle में आएगी। Flag हफ्तों बाद
        भी जस का तस है, तब दफ्तर का दूसरा चक्कर बनता है — पावती साथ लेकर।
      </p>

      <Hd>तलाठी बनाम कृषि सहायक — किस काम के लिए किसके पास जाएं</Hd>
      <p>
        महाराष्ट्र में गांव स्तर पर दो अलग सरकारी कर्मचारी इस योजना से जुड़े हैं, और गलत आदमी के पास जाने
        से सिर्फ समय जाता है। <strong>तलाठी</strong> राजस्व विभाग का आदमी है — 7/12, 8-अ, नामांतरण (फेरफार),
        जमीन के record की हर गड़बड़ी उसी की desk पर सुलझती है। <strong>कृषि सहायक</strong> कृषि विभाग का है —
        योजना की beneficiary स्थिति, किस्त न आने की शिकायत, eKYC में मदद — यह सब उसका दायरा है।
        बैंक seeding का मसला इन दोनों में से किसी के पास नहीं — वह सिर्फ बैंक branch में सुलझता है। यह बंटवारा
        याद रखने भर से आधे चक्कर बच जाते हैं — क्योंकि हर desk दूसरे की तरफ इशारा करने में माहिर होती है।
      </p>

      <Hd>साल भर की आदत — 10 मिनट, तीन काम</Hd>
      <ol className="my-4 space-y-3 pl-5 list-decimal text-sm leading-relaxed">
        <li>
          <strong>हर किस्त के बाद SMS मिलान</strong> — बैंक का credit SMS आया तो रकम नोट करें; नहीं
          आया तो पहले passbook update कराएं — कई बार पैसा आ चुका होता है, सिर्फ SMS नहीं आता।
        </li>
        <li>
          <strong>साल में दो बार दोनों portal पर status</strong> — बुवाई के पहले और कटाई के बाद। eKYC,
          seeding या land record का कोई flag दिखे तो उसी हफ्ते निपटाएं — किस्त के दिन लाइनों में
          खड़े होने से बेहतर है पहले से तैयार रहना।
        </li>
        <li>
          <strong>Mobile number बदले तो तुरंत update</strong> — OTP उसी नंबर पर आता है। पुराना नंबर बंद
          हो गया तो status देखना तक मुश्किल हो जाता है — फिर CSC के चक्कर ही बचते हैं।
        </li>
      </ol>

      <Hd>किस्त गिनने का सही तरीका — passbook से पहचान</Hd>
      <Figure
        src="/images/articles/hindi-yojna/namo-shetkari/passbook-entry.webp"
        alt="Passbook में DBT की entry दिखाते हाथ"
        caption="केंद्र और राज्य की किस्तें passbook में अलग-अलग entry से पहचानें"
      />
      <p>
        एक व्यावहारिक उलझन जो हर सीजन सामने आती है — खाते में ₹2,000 आए, पर किसके? PM Kisan के या नमो
        शेतकरी के? दोनों की रकम एक जैसी, खाता एक ही। पहचान के तीन सुराग: पहला — passbook/statement की
        entry में लिखा narration पढ़ें; PM Kisan की entry में आमतौर पर PMKISAN जैसा संकेत होता है, राज्य
        वाली में अलग code। दूसरा — तारीख से मिलान करें: PM Kisan की release की तारीख राष्ट्रीय खबरों में होती
        है, नमो शेतकरी की राज्य की घोषणा में। तीसरा — शक रह जाए तो दोनों portal पर अपनी payment history
        खोलकर आमने-सामने रख लें — कौन सी किस्त कब credit हुई, दोनों जगह तारीख समेत दिखती है। यह पांच
        मिनट का काम आगे की हर उलझन खत्म कर देता है — और अगर कोई किस्त सचमुच missing निकली, तो शिकायत
        में आपके पास ठोस आधार होगा, अंदाज़ा नहीं।
      </p>

      <p>
        एक और छोटी पर काम की बात — शिकायत कभी भी करें, लिखित में करें और पावती लें। तालुका कृषि अधिकारी
        के दफ्तर में inward register होता है — अपने आवेदन पर inward नंबर और तारीख लिखवा लें। आगे कभी मामला
        ऊपर ले जाना पड़ा (जिला कृषि अधीक्षक तक), तो यही नंबर आपका सबूत है कि आपने सही रास्ते से कोशिश की
        थी। मौखिक शिकायत का कोई record नहीं बनता — और बिना record के follow-up सिर्फ नए चक्कर हैं।
      </p>

      <Hd>नमो शेतकरी = PM Kisan की परछाई</Hd>
      <p>
        नमो शेतकरी कोई पहेली नहीं है — यह PM Kisan की परछाई है। वहां सब ठीक, तो यहां भी पैसा आएगा; वहां
        अटका, तो यहां भी अटकेगा। साल में दो बार portal पर status देख लेने की आदत, eKYC-बैंक-जमीन
        तीनों record दुरुस्त, और किसी भी &ldquo;किस्त दिलवाने वाले agent&rdquo; से दूरी — बस इतना ही काम है। बाकी
        ₹12,000 आपका हक है, किसी की मेहरबानी नहीं।
      </p>

      <Hd>सवाल-जवाब — जैसा कि WhatsApp पर पूछे जाते हैं</Hd>
      {FAQS.map((f) => (
        <Bubble key={f.q} q={f.q} a={f.a} />
      ))}

      <HindiRelatedFooter
        heading="Related Articles — Yeh Bhi Padho"
        links={[
        { href: '/articles/hi/mp-kisan-kalyan-yojana', label: 'MP किसान कल्याण योजना ₹12000' },
        { href: '/articles/PmKisanMasterGuide2026', label: 'PM Kisan की मुख्य guide' },
        { href: '/articles/PmKisanEkycOnline2026', label: 'eKYC step-by-step process' },
        { href: '/articles/hi/npci-aadhaar-seeding', label: 'NPCI seeding — पूरा process' },
      ]}
      />
    </>
  );
}
