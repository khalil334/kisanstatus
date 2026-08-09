import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// यह article जानबूझकर self-contained है — कोई shared component import नहीं।
// Structure variant: escalation-ladder (सीढ़ी) sections + inline FAQ.

const FAQS = [
  {
    q: 'पीएम किसान का हेल्पलाइन नंबर क्या है?',
    a: 'मुख्य नंबर 155261 है। इसके अलावा दो दिल्ली लैंडलाइन भी हैं — 011-24300606 और 011-23381092। सोमवार से शनिवार, सरकारी कामकाजी घंटों में कॉल करें।',
  },
  {
    q: 'शिकायत करने के लिए क्या-क्या चाहिए?',
    a: 'आधार नंबर, बैंक अकाउंट नंबर या रजिस्टर्ड मोबाइल नंबर — इन तीनों में से कोई एक। साथ में अपनी problem की छोटी सी detail तैयार रखें — कौन सी किस्त नहीं आई, कब से।',
  },
  {
    q: 'क्या ईमेल से भी शिकायत हो सकती है?',
    a: 'हां। pmkisan-ict@gov.in पर मेल भेज सकते हैं। Subject में अपना registration number या आधार के आखिरी 4 अंक जरूर लिखें, ताकि आपका record जल्दी ढूंढा जा सके।',
  },
  {
    q: 'ऑनलाइन शिकायत कहां दर्ज होती है?',
    a: 'pmkisan.gov.in पर Farmers Corner में Help Desk (Grievance) का option है। वहां आधार, अकाउंट नंबर या मोबाइल नंबर डालकर query register कर सकते हैं — 24 घंटे, किसी भी दिन।',
  },
  {
    q: 'शिकायत का जवाब कितने दिन में आता है?',
    a: 'कोई fix समय official तौर पर घोषित नहीं है। आम तौर पर online query का status कुछ हफ्तों में update होता है। अगर लंबा समय हो जाए तो अपने राज्य के Nodal Officer से संपर्क करना बेहतर रहता है।',
  },
  {
    q: 'फोन नहीं लग रहा, अब क्या करूं?',
    a: 'किस्त release होने के आसपास lines busy रहती हैं। ऐसे में online Help Desk भरोसे लायक रास्ता है — वहां आपकी query record होती है और track भी कर सकते हैं। ईमेल भी एक option है।',
  },
  {
    q: 'क्या शिकायत करने के पैसे लगते हैं?',
    a: 'बिल्कुल नहीं। न फोन शिकायत के, न online के। अगर कोई आपसे शिकायत दर्ज कराने के पैसे मांगे, तो समझ जाइए वो fraud है। सरकारी शिकायत हमेशा free होती है।',
  },
  {
    q: 'क्या CSC से शिकायत दर्ज करा सकते हैं?',
    a: 'हां, अगर खुद online करना मुश्किल लगे तो नजदीकी CSC (जन सेवा केंद्र) से Help Desk query डलवा सकते हैं। बस reference details अपने पास लिखवाकर जरूर रखें, ताकि status खुद track कर सकें।',
  },
  {
    q: 'एक साथ कितनी शिकायतें डाल सकते हैं?',
    a: 'एक problem की एक ही query डालें। एक ही बात की कई queries डालने से record उलझता है और जवाब देर से आता है। हां, अगर दो अलग-अलग दिक्कतें हैं — eKYC भी और payment भी — तो दोनों की अलग query ठीक है।',
  },
  {
    q: 'शिकायत के लिए registered mobile जरूरी है क्या?',
    a: 'नहीं, आधार नंबर या बैंक अकाउंट नंबर से भी query register हो जाती है। लेकिन registered mobile पास हो तो updates के SMS उसी नंबर पर आते हैं, बेहतर यही है कि वो नंबर चालू रखें।',
  },
  {
    q: 'गांव में network नहीं है, phone भी नहीं लगता — क्या करें?',
    a: 'ऐसे में block के कृषि विभाग का office व्यावहारिक रास्ता है — वहां लिखित शिकायत दे सकते हैं। या हफ्ते में जब बाजार/तहसील जाना हो, तब CSC से online query डलवा लें।',
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

function Rung({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-6">
      <div className="flex items-baseline gap-3 mb-3 pb-2 border-b-2 border-[var(--color-border)]">
        <span className="text-xs font-black uppercase tracking-wide text-[var(--color-primary)] shrink-0">
          {step}
        </span>
        <h2 className="text-lg font-black text-[var(--color-text)] m-0">{title}</h2>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text)]">{children}</div>
    </section>
  );
}

function Box({ tone, children }: { tone: 'info' | 'warn' | 'danger'; children: React.ReactNode }) {
  const cls =
    tone === 'info'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500'
      : tone === 'warn'
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
        : 'bg-red-50 dark:bg-red-900/20 border-red-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${cls}`}>
      {children}
    </div>
  );
}

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

function Head2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

export default function PmKisanHelplineNumberComplaint({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        सुबह के दस बजे हैं। गांव के बाकी किसानों के phone पर ₹2,000 आने का message आ चुका है — आपके phone
        पर कुछ नहीं। बैंक जाकर पासबुक entry करवाई, वहां भी खाली। अब? यही वो moment है जब हर किसान Google
        पर हेल्पलाइन नंबर ढूंढता है, और आधे लोगों को गलत नंबर मिलता है।
      </p>
      <p>
        यह guide उसी मौके के लिए लिखी गई है। यहां सिर्फ official contact details हैं — सीधे सरकारी source
        से — और साथ में यह भी कि कौन सी problem के लिए कौन सा रास्ता ठीक रहेगा। क्योंकि सच कहें तो हर
        दिक्कत phone call से solve नहीं होती। कुछ काम online query से जल्दी होते हैं, कुछ के लिए राज्य के
        अधिकारी तक जाना पड़ता है। नीचे पूरा रास्ता एक सीढ़ी की तरह रखा है — पहला डंडा आजमाइए, बात न बने तो
        अगले पर चढ़िए।
      </p>

      <Box tone="info">
        <strong>📞 सीधे काम के official नंबर:</strong> हेल्पलाइन <strong>155261</strong> · लैंडलाइन{' '}
        <strong>011-24300606</strong>, <strong>011-23381092</strong> · ईमेल{' '}
        <strong>pmkisan-ict@gov.in</strong> · Online:{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> →
        Farmers Corner → Help Desk
      </Box>

      <Figure
        src="/images/articles/hindi-yojna/helpline-shikayat/farmer-on-call.webp"
        alt="हेल्पलाइन पर बात करता किसान"
        caption="सही नंबर और तैयारी के साथ call करें — आधा काम वहीं हो जाता है"
      />

      <Head2>सीढ़ी पर चढ़ने से पहले — आपकी दिक्कत क्या है?</Head2>
      <p>
        कॉल लगाने से पहले 30 second रुकिए। नीचे वाली table देखिए। बहुत से किसान घंटों line में लगे रहते हैं
        उस काम के लिए जो खुद 5 मिनट में portal पर हो जाता।
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">आपकी समस्या</th>
              <th className="border border-[var(--color-border)] p-2 text-left">सही रास्ता</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2">किस्त नहीं आई, status में FTO generated दिख रहा है</td>
              <td className="border border-[var(--color-border)] p-2">2-3 दिन इंतजार करें, फिर online query</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">eKYC pending दिख रहा है</td>
              <td className="border border-[var(--color-border)] p-2">पहले खुद eKYC करें — शिकायत की जरूरत नहीं</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">Payment failed / bank account problem</td>
              <td className="border border-[var(--color-border)] p-2">Online Help Desk query + बैंक में आधार seeding चेक</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">Registration reject हो गया</td>
              <td className="border border-[var(--color-border)] p-2">कारण जानने के लिए helpline call, फिर re-apply</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">महीनों से कोई solution नहीं मिला</td>
              <td className="border border-[var(--color-border)] p-2">राज्य के Nodal Officer से सीधा संपर्क</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        मोटा-मोटा rule यह है — जो चीज आपके हाथ में है (eKYC, आधार seeding), वो पहले खुद ठीक करें। जो सरकार
        के हाथ में है (payment release, record correction), उसके लिए शिकायत दर्ज करें।
      </p>

      <Rung step="पहला डंडा" title="फोन से शिकायत — नंबर और तरीका">
        <p>
          सीधा रास्ता यही है। PM Kisan योजना का हेल्पलाइन नंबर <strong>155261</strong> है। यह नहीं लगे तो
          दिल्ली के दो लैंडलाइन नंबर हैं — <strong>011-24300606</strong> और <strong>011-23381092</strong>।
          सोमवार से शनिवार, कामकाजी घंटों में ही staff available रहता है। रविवार और सरकारी छुट्टी वाले दिन
          रहने दें।
        </p>
        <p>
          Call करने से पहले तीन चीजें हाथ में रखें — <strong>आधार नंबर</strong> (record ढूंढने का तेज तरीका
          यही है), <strong>बैंक अकाउंट नंबर</strong> (payment वाली शिकायतों में पूछा जाता है), और{' '}
          <strong>रजिस्टर्ड मोबाइल नंबर</strong> (जो registration के समय दिया था)।
        </p>
        <p>
          एक छोटी सी सलाह अनुभव से — किस्त release होने के हफ्ते में lines बहुत busy रहती हैं। लाखों किसान
          एक साथ call करते हैं। अगर आपका काम urgent नहीं है, तो एक-दो हफ्ते बाद call करें। और अगर urgent
          है, तो सुबह जल्दी try करें।
        </p>
      </Rung>

      <Box tone="warn">
        सावधान — YouTube videos और कुछ websites पर गलत या पुराने नंबर मिलते हैं। कुछ fraud नंबर भी घूम रहे
        हैं जो OTP मांगते हैं। याद रखें: <strong>असली helpline कभी OTP नहीं मांगती</strong>, न ही बैंक का
        password। नंबर हमेशा pmkisan.gov.in से ही confirm करें।
      </Box>

      <Rung step="दूसरा डंडा" title="Online Help Desk — query register करने का तरीका">
        <p>
          मुझे लगता है यह phone से बेहतर option है, और वजह साफ है — आपकी शिकायत लिखित में record होती है,
          एक reference मिलता है, और बाद में status track कर सकते हैं। Phone call का कोई record आपके पास
          नहीं रहता।
        </p>
        <p>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a>{' '}
          खोलें — homepage पर नीचे की तरफ <strong>Farmers Corner</strong> section मिलेगा। वहां{' '}
          <strong>Help Desk</strong> (Grievance) का option चुनें, फिर <strong>Register Query</strong> पर
          जाएं। आधार नंबर, अकाउंट नंबर या मोबाइल नंबर — कोई एक डालें और captcha भरकर details निकालें।
        </p>
        <p>
          अब अपनी problem की category चुनें और छोटा सा description लिखें — कौन सी किस्त, कब से pending,
          क्या error दिख रहा है। Submit करें। यही page बाद में <strong>Know the Query Status</strong> से
          आपकी शिकायत की स्थिति भी दिखाता है।
        </p>
        <p>
          बस इतना ही। पूरा process मुश्किल से 10 मिनट का है, और CSC जाने की भी जरूरत नहीं — घर बैठे mobile
          से हो जाता है।
        </p>
      </Rung>

      <div className="my-5 p-4 border-2 border-[var(--color-border)] rounded-2xl bg-[var(--color-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="font-bold text-[var(--color-text)] text-sm m-0">
            PM Kisan Official Portal — Help Desk
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5 mb-0">
            Government of India — pmkisan.gov.in
          </p>
        </div>
        <a
          href="https://pmkisan.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
        >
          pmkisan.gov.in खोलें ↗
        </a>
      </div>

      <Rung step="तीसरा डंडा" title="ईमेल से शिकायत कैसे लिखें?">
        <p>
          तीसरा रास्ता ईमेल है — <strong>pmkisan-ict@gov.in</strong>। यह उन cases के लिए ठीक है जहां आपको
          documents attach करने हों — पासबुक की photo या rejection का screenshot।
        </p>
        <p>Format कुछ ऐसा रखें:</p>
        <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-500 rounded-r-xl text-sm leading-relaxed">
          <strong>Subject:</strong> PM Kisan — किस्त नहीं मिली — [आधार के आखिरी 4 अंक]<br /><br />
          महोदय,<br />
          मेरा नाम [नाम], गांव [गांव], जिला [जिला], राज्य [राज्य]।<br />
          Registration mobile number: [नंबर]<br />
          समस्या: [कौन सी किस्त, कब से, status में क्या दिख रहा है]<br />
          कृपया समाधान करें।<br />
          धन्यवाद।
        </div>
        <p>
          पूरा आधार नंबर ईमेल में लिखने से बचें — आखिरी 4 अंक काफी हैं। और हां, एक ही शिकायत बार-बार
          अलग-अलग ईमेल से मत भेजिए। इससे process तेज नहीं होता, उल्टा records उलझ जाते हैं।
        </p>
      </Rung>

      <Rung step="चौथा डंडा" title="जवाब नहीं आया तो? State Nodal Officer वाला रास्ता">
        <p>
          अब वो हिस्सा जो ज्यादातर guides नहीं बताते। PM Kisan central scheme जरूर है, लेकिन verification
          और record correction का बड़ा हिस्सा राज्य सरकार के पास होता है। हर राज्य का एक{' '}
          <strong>Nodal Officer</strong> होता है जो योजना का in-charge है।
        </p>
        <p>
          मान लीजिए आपने online query डाली, एक महीना हो गया, कुछ नहीं हुआ। Helpline बोलती है &quot;process
          में है&quot;। ऐसे में सीधे अपने राज्य के Nodal Officer के office से संपर्क करना अक्सर काम कर जाता
          है — क्योंकि आपका record दरअसल उसी दफ्तर में अटका होता है। पूरी राज्यवार list{' '}
          <Link href="/articles/PmKisanStateNodalOfficerList">इस page पर मिलेगी</Link>। साथ में अपने block
          के कृषि अधिकारी (Agriculture Officer) से मिलना भी एक रास्ता है — खासकर land record वाली दिक्कतों
          में।
        </p>
      </Rung>

      <Box tone="danger">
        किसी भी हालत में बिचौलिए या &quot;agent&quot; को पैसे देकर शिकायत मत कराइए। शिकायत दर्ज करना हर step
        पर free है। जो लोग &quot;अंदर से काम करा देंगे&quot; बोलते हैं, वो सिर्फ आपकी जेब से काम कराते हैं।
      </Box>

      <Rung step="पांचवां डंडा" title="सब जगह से जवाब नहीं मिला? CPGRAMS आखिरी रास्ता है">
        <p>
          एक और दरवाजा है जिसके बारे में कम किसान जानते हैं — <strong>CPGRAMS</strong>, केंद्र सरकार का
          अपना grievance portal (
          <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer">pgportal.gov.in</a>
          )। यहां दर्ज शिकायत सीधे संबंधित मंत्रालय — कृषि मंत्रालय — तक जाती है, और हर शिकायत का एक
          registration number मिलता है जिससे status track होता है।
        </p>
        <p>
          इसे पहला नहीं, आखिरी हथियार समझिए। पहले PM Kisan के अपने Help Desk और Nodal Officer वाले रास्ते
          आजमाएं — उधर record होता है, उधर ही जल्दी solve होता है। लेकिन जब महीनों बाद भी बात न बने, तब
          CPGRAMS पर पुरानी query का reference देते हुए शिकायत डालें। मंत्रालय स्तर से आई query पर नीचे के
          office अक्सर तेजी से हिलते हैं — यह जमीनी सच है।
        </p>
      </Rung>

      <Figure
        src="/images/articles/hindi-yojna/helpline-shikayat/complaint-ladder.webp"
        alt="शिकायत की चार-स्टेप सीढ़ी — हेल्पलाइन, portal, जिला अधिकारी, email"
        caption="पहला डंडा आजमाइए, बात न बने तो अगले पर चढ़िए"
      />

      <Head2>असली case — कैसे एक payment failed शिकायत solve हुई</Head2>
      <p>
        राजस्थान के एक किसान का case लीजिए, जो हमारे एक reader ने share किया था। तीन किस्तें आईं, चौथी बंद।
        Status में &quot;payment failed&quot; दिखा। पहले उन्होंने helpline call की — बताया गया कि बैंक की
        तरफ से payment reject हुआ है। फिर बैंक गए, पता चला account आधार से link तो था, लेकिन{' '}
        <strong>NPCI seeding</strong> नहीं हुई थी — DBT के लिए वो अलग से जरूरी होती है।
      </p>
      <p>
        बैंक में seeding form भरा। दो हफ्ते बाद online Help Desk पर query डाली कि record update हो गया है।
        अगली किस्त सीधे account में आई — रुकी हुई किस्त भी बाद में process हुई। कुल समय लगा करीब दो महीने।
        सीख यह है कि शिकायत अकेली काफी नहीं — root cause भी ठीक करना पड़ता है। Payment fail होने की बाकी
        वजहें और उनके इलाज{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">अलग से detail में लिखे हैं</Link>।
      </p>

      <Head2>शिकायत लिखते समय ये 4 गलतियां मत कीजिए</Head2>
      <p>
        Help Desk पर हजारों queries रोज आती हैं। जिनकी शिकायत साफ लिखी होती है, उनका record जल्दी ढूंढा और
        आगे बढ़ाया जाता है। जिनकी उलझी होती है, वो पीछे छूट जाती हैं। चार गलतियां जो बार-बार दिखती हैं:
      </p>
      <p>
        <strong>गुस्से वाली लंबी कहानी लिखना।</strong> पढ़ने वाले को आपकी पूरी आपबीती नहीं, तीन चीजें चाहिए
        — कौन सी किस्त, कब से रुकी, status में क्या लिखा आ रहा है। तीन लाइन काफी हैं।
      </p>
      <p>
        <strong>गलत category चुनना।</strong> Payment की दिक्कत को eKYC category में डाल दिया, तो query गलत
        desk पर जाएगी और वहां से लौटने में हफ्ते लगेंगे। Category दो बार पढ़कर चुनें।
      </p>
      <p>
        <strong>Details बिना confirm किए लिखना।</strong> आधार के अंक गलत लिख दिए तो record मिलेगा ही नहीं।
        Submit से पहले एक बार सब मिला लें।
      </p>
      <p>
        <strong>Status में जो दिख रहा है, वो न बताना।</strong> &quot;पैसा नहीं आया&quot; अधूरी बात है।
        &quot;Status में FTO generated लिखा है लेकिन 3 हफ्ते से payment नहीं&quot; — यह पूरी बात है, और
        इसका जवाब भी सटीक आता है।
      </p>

      <Head2>आपकी शिकायत ऊपर तक पहुंचती भी है — एक सबूत देखिए</Head2>
      <p>
        "शिकायत डालने से क्या होगा, कोई पढ़ता थोड़े है" — यह निराशा आम है, पर पूरी सच नहीं। अक्टूबर 2025
        में केंद्रीय कृषि मंत्री शिवराज सिंह चौहान ने कृषि भवन में खास तौर पर किसानों की शिकायतों की समीक्षा
        बैठक की — जिसमें PM-Kisan portal की शिकायतें भी एक अलग category थीं।{' '}
        <a
          href="https://agritimes.co.in/livestock/anmol-feeds-sets-up-livestock-feed-unit-in-jammu/shivraj-singh-chouhan-reviews-farmers-complaints-sets-strict-timelines/search/"
          target="_blank"
          rel="noopener noreferrer"
        >
          उस बैठक की रिपोर्ट
        </a>{' '}
        के मुताबिक मंत्री ने साफ निर्देश दिया कि <strong>जब तक किसान खुद संतुष्ट न हो, शिकायत बंद न की
        जाए</strong>, अधिकारी कार्रवाई के बाद किसान से follow-up करें, और धीमी कार्रवाई वाले राज्यों की अलग
        से पहचान हो। उसी बैठक में यह भी सामने आया कि pesticide की 150 शिकायतों में से 120 पर कार्रवाई हो
        चुकी थी, 11 मामलों में FIR हुई और 8 कंपनियों के license रद्द हुए।
      </p>
      <p>
        इससे आपके लिए निकलने वाली बात यह है — शिकायत का system निगरानी में है, और record में दर्ज शिकायत ही
        इस निगरानी में गिनी जाती है। Phone पर हुई बात किसी आंकड़े में नहीं जाती — इसी कारण यह guide बार-बार
        लिखित query पर जोर देती है। जो शिकायत system में है, वह किसी न किसी समीक्षा बैठक की file तक पहुंचती
        है।
      </p>

      <Head2>फोन और portal के अलावा — जो नए रास्ते खुले हैं</Head2>
      <p>
        NIC के मुताबिक PM-Kisan system में अब <strong>24×7 IVRS आधारित helpline</strong> और chatbot
        integration भी शामिल है (स्रोत:{' '}
        <a href="https://www.nic.in/project/pm-kisan/" target="_blank" rel="noopener noreferrer">
          NIC का PM-KISAN project page
        </a>
        ) — रात में भी basic status-पूछताछ recorded system से हो सकती है, भले staff से बात कामकाजी घंटों
        में ही हो। UMANG app के Kisan Suvidha से भी योजना की सेवाएं जुड़ी हैं। इनमें से कोई भी रास्ता
        आजमाएं — पर पहचान वाली सावधानी हर जगह एक ही है: OTP या bank password कोई भी सरकारी चैनल कभी नहीं
        मांगता।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/helpline-shikayat/grievance-portal.webp"
        alt="Online grievance form का page"
        caption="Portal की online query का फायदा — लिखित record बन जाता है"
      />

      <Head2>Query का status कैसे track करें?</Head2>
      <p>
        जिस page से query register की थी, उसी page पर <strong>Know the Query Status</strong> का option है। अपना
        आधार / अकाउंट / मोबाइल नंबर डालिए, शिकायत की current स्थिति दिख जाएगी। हफ्ते में एक बार check करना
        काफी है। रोज देखने से जल्दी solve नहीं होगा — यह बात किस्त के status पर भी लागू होती है।
      </p>
      <p>
        और अगर शिकायत का जवाब आ गया लेकिन समाधान अधूरा है? तो नई query में पुरानी query का reference देकर
        दोबारा लिखें, या ऊपर बताए Nodal Officer वाले रास्ते पर जाएं।
      </p>
      <p>
        एक पैटर्न और समझ लीजिए — status में "resolved" दिखने का अर्थ हमेशा यह नहीं कि पैसा आ गया। कई बार
        इसका आशय सिर्फ इतना होता है कि आपका record आगे की process में भेज दिया गया — भुगतान अब अगली किस्त
        release के साथ आएगा। "resolved" दिखे तो Beneficiary Status भी साथ में देखें — वहां eligibility और
        payment दोनों की असली तस्वीर दिखती है। दोनों में तालमेल न हो तो पूरी बात नई query में लिखकर भेजिए।
      </p>

      <Head2>किस भाषा में बात करें, क्या पूछें — call की तैयारी</Head2>
      <p>
        Helpline पर हिंदी और अंग्रेजी दोनों में बात हो जाती है — जिस भाषा में आप सहज हैं, उसी में बोलिए।
        बात शुरू करते ही तीन चीजें बोल दें: नाम, राज्य-जिला, और आधार/registered mobile — इससे सामने वाला
        आपका record तुरंत खोल लेता है। फिर समस्या एक ही वाक्य में।
      </p>
      <p>
        Call खत्म करने से पहले दो सवाल जरूर पूछिए — पहला, "मेरी तरफ से अब क्या करना है?" (कई बार जवाब होता
        है कि आपको कुछ नहीं करना, सिर्फ इंतजार है — यह जानना भी राहत है)। दूसरा, "अगर इतने दिन में ठीक न
        हुआ तो आगे किससे बात करूं?" — इससे आपके पास अगला कदम पहले से तैयार रहता है। और call के तुरंत बाद
        तारीख, समय और जो बताया गया — तीनों कहीं लिख लीजिए। अगली बार बात करते समय यही छोटा सा note आपकी बड़ी
        ताकत होगा — "पिछली बार [तारीख] को यह बताया गया था" कहने वाले की बात टालना मुश्किल होता है।
      </p>

      <Head2>सामान्य सवाल — helpline और शिकायत पर</Head2>
      <div className="space-y-4 mb-8">
        {FAQS.map(({ q, a }) => (
          <div key={q}>
            <p className="font-semibold text-[var(--color-text)] text-sm mb-1">{q}</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <Figure
        src="/images/articles/hindi-yojna/helpline-shikayat/call-notes.webp"
        alt="Call से पहले नोटबुक में जानकारी लिखता हाथ"
        caption="Registration number और दिक्कत पहले से लिख लें — call छोटी और कामयाब रहेगी"
      />

      <Head2>फोन उठाने से पहले — यह पर्ची भर लीजिए</Head2>
      <p>
        शिकायत का परिणाम इस बात पर टिका है कि आपके पास जानकारी तैयार है या नहीं। नीचे की छह लाइनें एक कागज़
        पर लिख लें और उसी कागज़ को हाथ में रखकर call करें या query भरें — बात दोहराने और “बाद में बताइए” सुनने
        की नौबत नहीं आएगी:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li>आधार नंबर / PM Kisan registration नंबर — जो भी portal पर चल रहा है।</li>
        <li>राज्य, जिला, ब्लॉक और गांव का नाम — record इसी से खुलता है।</li>
        <li>
          समस्या एक ही वाक्य में — “beneficiary status में नाम है, पर पिछली किस्त खाते में नहीं आई” जैसा साफ
          वाक्य।
        </li>
        <li>आखिरी किस्त कब आई थी — तारीख या महीना, passbook से देखकर।</li>
        <li>अब तक क्या-क्या कोशिश की — eKYC, seeding, CSC, पहले की query का reference नंबर।</li>
        <li>Call/query की तारीख और जवाब — यह खाली छोड़िए, बात के तुरंत बाद भर दीजिए।</li>
      </ol>
      <p>
        इसी पर्ची को हर follow-up में आगे बढ़ाते जाएं — तारीख, किससे बात हुई, क्या कहा गया। तीन-चार entries
        के बाद यह पर्ची ही आपकी मजबूत दलील बन जाती है, क्योंकि तब आप अंदाज़े से नहीं, record से बात कर रहे
        होते हैं।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        एक जरूरी बात — यहां दी गई सभी contact details{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a>{' '}
        (Ministry of Agriculture &amp; Farmers Welfare, Govt. of India) की official जानकारी से ली गई हैं,
        पर नंबर समय के साथ बदल सकते हैं — call करने से पहले portal पर एक नजर जरूर डाल लें (हमने{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} को मिलाए थे)।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">इनसे भी काम बनेगा</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/PmKisanPaymentFailedFix2026">💸 Payment Failed Fix Guide</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanStateNodalOfficerList">📋 State Nodal Officer List</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanRejectedStatusReApplyGuide">🔄 Rejected Status Re-Apply</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanEkycOnline2026">🔐 eKYC Online Guide</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
