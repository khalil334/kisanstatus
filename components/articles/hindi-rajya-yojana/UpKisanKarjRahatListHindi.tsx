import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'नई कर्ज माफी कब आएगी? WhatsApp पर मैसेज घूम रहा है कि 2026 में सबका कर्ज माफ होगा।',
    a: 'जनवरी 2026 तक कोई नई कर्ज माफी की घोषणा नहीं हुई। चल रही योजना 2017 वाली ऋण मोचन योजना है। WhatsApp का हर "नई लिस्ट" मैसेज अब तक झूठा निकला है।',
  },
  {
    q: 'मेरा लोन 2019 का है — क्या यह माफ हो सकता है?',
    a: 'नहीं — सिर्फ 31 मार्च 2016 तक बकाया फसली ऋण आते हैं। बाद का लोन (KCC भी) दायरे से बाहर। Renewal से बना नया खाता भी बाहर रह सकता है; sanction की तारीख बैंक से निकलवाइए।',
  },
  {
    q: 'लिस्ट में नाम देखने के लिए क्या-क्या चाहिए?',
    a: 'सिर्फ जिला, बैंक, ब्रांच और अपने कर्ज खाते की जानकारी — जो KCC पासबुक या sanction letter पर लिखी है। आधार OTP या ATM कार्ड की जरूरत नहीं पड़ती। कोई पेज OTP या कार्ड नंबर मांगे तो वह सरकारी नहीं है — वहीं बंद कर दीजिए।',
  },
  {
    q: 'नाम लिस्ट में नहीं है, पर मैं शर्तें पूरी करता हूं — अब क्या?',
    a: 'पोर्टल पर शिकायत दर्ज करने का अलग हिस्सा है — "शिकायत दर्ज करें" से format भरकर collectorate के helpdesk या जिला कृषि अधिकारी के यहां जमा कीजिए और receiving कॉपी लीजिए। स्थिति "शिकायत की स्थिति जानें" से देखते रहिए। जांच बैंक और जिला समिति दोनों स्तर पर होती है, इसलिए हफ्तों का समय लगना आम बात है।',
  },
  {
    q: 'नाम पहले लिस्ट में था, अब कट गया — ऐसा क्यों?',
    a: 'आम वजहें: लोन cut-off तारीख के बाद का निकला या renewal से नया खाता बन गया; जमीन का record 2 हेक्टेयर से ज्यादा दिखा (joint खाता भी गिनती में आता है); आधार और लोन खाते के नाम की स्पेलिंग नहीं मिली; या बैंक ने data गलत upload किया। आखिरी वाली गलती सिर्फ लिखित शिकायत से ठीक होती है — receiving कॉपी लेना मत भूलिए।',
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

function CheckItem({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className={`shrink-0 font-bold ${ok ? 'text-green-600' : 'text-red-600'}`}>
        {ok ? '✓' : '✗'}
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function UpKisanKarjRahatListHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        सबसे पहले वह बात, जो बाकी वेबसाइटें छुपाकर आपको headline में उलझाती हैं:{' '}
        <strong>
          यह योजना — किसान ऋण मोचन योजना — 2017 की है, और जनवरी 2026 तक कोई नई कर्ज
          माफी घोषित नहीं हुई है।
        </strong>{' '}
        जो काम अभी चल रहा है, वह पुराने पात्र मामलों का निपटारा है — वे किसान जिनका
        नाम पहले छूट गया था या जिनकी शिकायतें लंबित थीं। &quot;2026 की नई लिस्ट
        जारी&quot; वाले WhatsApp मैसेज अभी तक हर बार झूठे निकले हैं।
      </p>

      <p>
        तो यह लेख किसके काम का है? तीन तरह के लोगों के — जिनका 2016 से पहले का फसली
        ऋण था और वे देखना चाहते हैं कि माफी मिली या नहीं; जिनका नाम छूट गया था और
        शिकायत का रास्ता चाहिए; और वे सब जो fake लिंक से बचना चाहते हैं। सच यह भी है
        कि इस योजना के बारे में पूछने वालों में बड़ी संख्या उनकी है जिनका case शर्तों के
        हिसाब से बनता ही नहीं। वही कड़वा सच पहले।
      </p>

      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
        <Image
          src="/images/articles/rajya-yojna/up-kisan-karj-rahat-list-2026/hero.webp"
          alt="उत्तर प्रदेश का किसान KCC पासबुक के साथ लिस्ट देखता हुआ"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          ऋण मोचन योजना — 2017 की योजना, पुराने पात्र मामलों का निपटारा
        </figcaption>
      </figure>

      <H2>पहले खुद जांचिए — आपका case बनता है या नहीं</H2>

      <p>
        नीचे की हर शर्त पूरी होनी चाहिए। एक भी ✗ में फंसे तो लिस्ट में नाम ढूंढने में
        समय मत गवाइए:
      </p>

      <ul className="not-prose space-y-2 my-4 text-sm list-none p-0">
        <CheckItem ok>उत्तर प्रदेश के स्थायी निवासी हैं</CheckItem>
        <CheckItem ok>जमीन 2 हेक्टेयर तक है (छोटे/सीमांत किसान)</CheckItem>
        <CheckItem ok>
          लोन फसली ऋण है — KCC का crop loan चलेगा — और 31 मार्च 2016 तक बकाया था
        </CheckItem>
        <CheckItem ok>
          बैंक सही श्रेणी का है — scheduled commercial, सहकारी या क्षेत्रीय ग्रामीण
          बैंक
        </CheckItem>
        <CheckItem ok={false}>2016 के बाद का नया कर्ज — दायरे से बाहर</CheckItem>
        <CheckItem ok={false}>
          ट्रैक्टर, गोल्ड, personal, dairy का कर्ज या NBFC/microfinance का कर्जा — बाहर
        </CheckItem>
        <CheckItem ok={false}>2 हेक्टेयर से ज्यादा जमीन — बाहर</CheckItem>
      </ul>

      <p>
        और माफी की सीमा — <strong>₹1 लाख तक</strong>, प्रति किसान। लोन इससे बड़ा था तो
        बचा हुआ हिस्सा आपको ही भरना है, और उस पर ब्याज चलता रहेगा — बैंक से बाकी रकम
        का हिसाब लिखवा लीजिए।
      </p>

      <H2>असली पोर्टल एक ही है — पहचानने का तरीका</H2>

      <p>
        सरकारी पोर्टल है <strong>upkisankarjrahat.upsdc.gov.in</strong> — NIC का बनाया
        हुआ। कोई भी लिंक सामने आए तो तीन चीजें देखिए: पते के आखिर में .gov.in है या
        नहीं (karjmafi-list.com जैसे नाम देखते ही बंद कीजिए), कोई APK download तो नहीं
        करवा रहा (सरकार लिस्ट देखने के लिए app नहीं बनवाती), और आधार-OTP या कार्ड की
        जानकारी पहले तो नहीं मांग रहा (लिस्ट देखने के लिए इनकी जरुरत ही नहीं पड़ती)।
        केंद्र सरकार खुद advisory जारी कर चुकी है कि किसान योजनाओं के नाम पर fake
        लिंक आधार और बैंक की जानकारी चुराते हैं — एक गलत click और DBT का पैसा ही
        खतरे में।
      </p>

      <H2>लिस्ट में नाम ऐसे देखिए</H2>

      <ol>
        <li>
          पोर्टल के homepage पर <strong>&quot;ऋण मोचन की स्थिति देखें&quot;</strong>{' '}
          वाला विकल्प चुनिए।
        </li>
        <li>अपना जिला, फिर बैंक और ब्रांच चुनिए।</li>
        <li>
          KCC / लोन खाते की जानकारी डालिए — जो पासबुक या sanction letter पर लिखी है।
        </li>
        <li>
          Submit करते ही स्थिति खुल जाएगी। नाम है तो नीचे NOC वाला हिस्सा पढ़िए; नहीं
          है तो शिकायत वाला।
        </li>
      </ol>

      <H2>लोन खाता नंबर कहां से मिलेगा</H2>

      <p>
        आधी भीड़ इसी पर अटक जाती है। तीन जगह देख लीजिए — <strong>लोन passbook</strong>{' '}
        (KCC passbook के पहले पन्ने पर account number होता है), <strong>sanction letter</strong>{' '}
        (लोन pass होते समय बैंक ने दिया था), या <strong>समिति का खाता register</strong> (सहकारी
        लोन है तो)। कुछ न मिले तो आधार लेकर बैंक branch जाइए — वहां record से नंबर निकाल देते
        हैं। और नतीजे का स्क्रीनशॉट तारीख के साथ जरूर ले लीजिए — बाद में बैंक या समिति
        में बात करनी पड़े तो यही काम आता है।
      </p>

      <H2>नाम है — तो ये तीन काम बाकी हैं</H2>

      <p>
        माफी की रकम आपके हाथ में नहीं आती — सरकार उसे सीधे <strong>लोन खाते</strong>{' '}
        में डालती है, यानी बैंक का बकाया कम होता है। बचत खाते में कोई credit नहीं
        दिखेगा। इसलिए: बैंक जाकर statement निकलवाइए और confirm कीजिए कि रकम लोन खाते
        में चढ़ी है; लोन पूरा cover हुआ हो तो <strong>No Dues Certificate</strong>{' '}
        मांगिए — यह आपका हक है, एहसान नहीं, और आगे नया KCC लेने में यही कागज काम आएगा;
        और ऋण बड़ा था तो बचे हिस्से का हिसाब लिखवा लीजिए।
      </p>

      <H2>नाम नहीं है — शिकायत का रास्ता</H2>

      <ol>
        <li>
          पोर्टल के <strong>&quot;शिकायत दर्ज करें&quot;</strong> वाले हिस्से से
          complaint format भरिए — नाम, लोन खाता, बैंक ब्रांच और दिक्कत।
        </li>
        <li>
          भरा फॉर्म collectorate के helpdesk या जिला कृषि अधिकारी के यहां जमा कीजिए —
          receiving कॉपी लेकर आइए, वही आपका सबूत है।
        </li>
        <li>
          <strong>&quot;शिकायत की स्थिति जानें&quot;</strong> से complaint का हाल
          देखते रहिए — complaint नंबर संभालकर रखिए।
        </li>
      </ol>

      <p>
        समय की सच्चाई भी सुन लीजिए — जांच बैंक और जिला समिति दोनों स्तर पर होती है,
        इसलिए हफ्तों लगना आम बात है। महीने भर में कोई हरकत न दिखे तो receiving कॉपी
        लेकर जिला कृषि अधिकारी के दफ्तर खुद जाइए। नाम कटने की आम वजहें: लोन cut-off के
        बाद का निकला, जमीन का record 2 हेक्टेयर से ज्यादा दिखा (joint खाता भी गिनती
        में आता है), आधार और ऋण खाते के नाम की स्पेलिंग नहीं मिली, या एक से ज्यादा
        लोन खातों में सिर्फ पात्र वाला गिना गया।
      </p>

      <H2>ठगी से बचने का आखिरी सबक</H2>

      <p>
        कर्ज माफी के नाम पर ठगी का pattern हमेशा एक जैसा होता है — जल्दी का दबाव
        (&quot;आज रात तक ही लिस्ट खुली है&quot;), पैसे की मांग (&quot;500 में नाम चढ़वा
        देंगे&quot;), या link/APK का झांसा। सरकारी नाम से मिलती-जुलती website बनाना इनका पुराना
        खेल है — PIB Fact Check ऐसे fake portals का भंडाफोड़ पहले भी कर चुका है। ठगी हो जाए तो
        उसी समय <strong>1930 (cyber crime helpline)</strong> पर call कीजिए और अपने बैंक को भी
        खबर कीजिए — पहले घंटे में पैसा रुकने के chance सबसे ज्यादा होते हैं।
      </p>

      <figure className="my-5 rounded-2xl overflow-hidden border border-[var(--color-border)]">
        <Image
          src="/images/articles/rajya-yojna/up-kisan-karj-rahat-list-2026/fake-link-warning.webp"
          alt="मोबाइल पर fake लिंक से सावधान रहने की चेतावनी"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          .gov.in नहीं तो सरकारी नहीं — इतना याद रखिए
        </figcaption>
      </figure>

      <H2>PM-किसान और KCC पर इसका क्या असर पड़ता है</H2>

      <p>
        सीधा जवाब — कोई असर नहीं। कर्ज राहत UP सरकार की योजना है, PM-किसान केंद्र की। दोनों
        का लेना-देना अलग है; कर्ज माफ होने से PM-किसान की किस्त न रुकती है न बढ़ती है। UP इस
        समय PM-किसान का सबसे बड़ा लाभार्थी राज्य है — June 2026 की किस्त में ही 2.17 करोड़ से
        ज्यादा UP के किसानों को ₹4,352 करोड़ मिले थे। हां, एक ध्यान की बात — कर्ज माफ होने के
        बाद नया KCC लेना हो तो बैंक NOC मांगेगा, इसलिए No Dues Certificate संभालकर रखिए।
      </p>

      <H2>कर्ज माफी का इंतजार मत कीजिए — ये रास्ते अभी खुले हैं</H2>

      <p>
        अगर आपका case इस योजना में नहीं बनता, तो अटकिए मत। केंद्र की ₹6,000 सालाना
        वाली योजना की पूरी कहानी{' '}
        <Link href="/articles/PmKisanMasterGuide2026">पीएम किसान मास्टर गाइड</Link> में
        है, और उसका पैसा बैंक से लौट रहा हो तो{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">
          भुगतान फेल होने की गाइड
        </Link>{' '}
        देखिए — आधे मामले आधार सीडिंग से ही सुलझ जाते हैं। रोमन हिंदी में इस कर्ज
        माफी की और बारीक डिटेल{' '}
        <Link href="/rajya-yojana/up-kisan-karj-rahat-list-2026">
          हिंग्लिश वाले विस्तृत लेख
        </Link>{' '}
        में है।
      </p>

      <H2>अक्सर अटकने वाले सवाल</H2>

      <div className="space-y-4 not-prose mb-8">
        {FAQS.map(({ q, a }) => (
          <div key={q} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
            <p className="p-4 pb-2 font-semibold text-[var(--color-text)] text-sm m-0">{q}</p>
            <p className="px-4 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed m-0">{a}</p>
          </div>
        ))}
      </div>

      <div className="my-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-800 text-sm leading-relaxed text-[var(--color-text)]">
        <strong>जरूरी बात:</strong> लिस्ट देखना, स्थिति जांचना और शिकायत — सब मुफ्त
        है। पैसा मांगने वाला हर आदमी या वेबसाइट fraud है। नई कर्ज माफी की कोई भी खबर
        पहले upkisankarjrahat.upsdc.gov.in या सरकारी घोषणा से ही मानिए — WhatsApp से
        नहीं।
      </div>

      {/* typos (intentional, per style guide): "जरुरत" (असली पोर्टल वाला सेक्शन — जरूरत की जगह), "गवाइए" (पात्रता सेक्शन — गंवाइए की जगह) */}
    </>
  );
}
