import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'महाराष्ट्र के किसान को कुल कितना पैसा मिलता है?',
    a: 'केंद्र की PM Kisan से ₹6,000 सालाना और राज्य की नमो शेतकरी महासन्मान निधि से ₹6,000 — कुल ₹12,000। राज्य सरकार ने रकम बढ़ाने की घोषणा भी की है, लेकिन बढ़ी हुई रकम आपकी किस्त में कब से दिखेगी, यह official portal/घोषणा से ही confirm करें।',
  },
  {
    q: 'क्या नमो शेतकरी के लिए अलग आवेदन करना पड़ता है?',
    a: 'नहीं। योजना PM Kisan के database पर ही चलती है — महाराष्ट्र का जो किसान PM Kisan का verified beneficiary है, वही नमो शेतकरी का भी हकदार है। अलग form भरने की जरूरत नहीं। नया किसान पहले PM Kisan में registration कराए, राज्य की किस्त अपने आप जुड़ती है।',
  },
  {
    q: 'किस्त का status कहां देखें?',
    a: 'NSMNY portal (nsmny.mahait.org) पर Beneficiary Status option है — registered mobile number या registration number डालकर OTP से status दिखता है। PM Kisan वाली किस्तों के लिए pmkisan.gov.in का Know Your Status अलग से देखना होगा।',
  },
  {
    q: 'PM Kisan आ रही है पर नमो शेतकरी की किस्त नहीं आई — क्यों?',
    a: 'सबसे आम कारण: eKYC अधूरी, बैंक खाता आधार से linked/DBT-enabled नहीं, या land record verification pending। दूसरा कारण schedule का है — राज्य की किस्तें PM Kisan के साथ-साथ नहीं, अपने कार्यक्रम से release होती हैं। पहले NSMNY portal पर status देखें, फिर कृषि सहायक/तलाठी से मिलें।',
  },
  {
    q: 'किस्तें कब-कब आती हैं?',
    a: 'PM Kisan की तरह ही ₹2,000 की तीन किस्तों का ढांचा है, पर release की तारीखें राज्य सरकार तय करती है — कई बार PM Kisan की किस्त के आसपास, कई बार अलग से। Exact date की सिर्फ official घोषणा मानें, WhatsApp forward नहीं।',
  },
  {
    q: 'क्या यह योजना मराठी में ही है? हिंदी वाले किसान का क्या?',
    a: 'Portal मराठी और अंग्रेजी में है, पर process वही है जो ऊपर लिखी है — आधार, mobile OTP, status check। भाषा से हक पर फर्क नहीं पड़ता; महाराष्ट्र का PM Kisan beneficiary होना ही शर्त है।',
  },
  {
    q: 'पति-पत्नी दोनों के नाम जमीन है — क्या दोनों को नमो शेतकरी मिलेगी?',
    a: 'नहीं। PM Kisan की तरह यह भी परिवार-आधारित योजना है — पति, पत्नी और नाबालिग बच्चों को एक इकाई माना जाता है। परिवार में एक ही सदस्य को लाभ मिलता है। दोनों ने ले लिया तो आगे recovery notice आने का जोखिम है।',
  },
  {
    q: 'NSMNY portal पर “eKYC pending” दिख रहा है — eKYC कहां करनी है, NSMNY पर या PM Kisan पर?',
    a: 'PM Kisan पर। नमो शेतकरी अपना अलग eKYC नहीं कराती — वह PM Kisan का verified record ही पढ़ती है। pmkisan.gov.in पर OTP या Face App से eKYC पूरी करें; कुछ दिन में NSMNY का status भी update हो जाता है।',
  },
  {
    q: 'किस्त किसी पुराने/बंद खाते में चली गई — अब क्या करूं?',
    a: 'पैसा उस खाते में जाता है जो NPCI mapper में आधार से seeded है — जरूरी नहीं कि वह वही खाता हो जो आपने form में लिखा था। जिस खाते में पैसा चाहिए, उसी की branch में जाकर NPCI seeding form भरें — आखिरी seeded खाता ही active रहता है। बंद खाते में गया पैसा आम तौर पर वापस लौटकर अगली प्रक्रिया में दोबारा भेजा जाता है।',
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

const RELATED = [
  { slug: 'hindi/mp-kisan-kalyan-yojana', title: 'MP किसान कल्याण योजना ₹12000', emoji: '🌾' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'hindi/npci-aadhaar-seeding', title: 'NPCI आधार सीडिंग', emoji: '🏦' },
];

export default function NamoShetkariYojanaMaharashtra({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        सितंबर 2025 की एक press release का आंकड़ा देखिए — नमो शेतकरी योजना की 7वीं किस्त में महाराष्ट्र
        सरकार ने <strong>91 लाख से ज्यादा किसानों</strong> के खातों में करीब ₹1,892 करोड़ भेजे। एक किस्त
        में। फिर भी गांव-गांव में यही सवाल घूमता है — "PM Kisan तो आ गई, पर यह दूसरी वाली ₹2,000 किसकी
        थी? और इस बार क्यों नहीं आई?" अगर आप भी महाराष्ट्र के किसान हैं और यह हिसाब उलझा हुआ लगता है, तो
        यह guide आपके लिए है।
      </p>

      <IB>
        <strong>एक line में:</strong> महाराष्ट्र का जो किसान PM Kisan का verified beneficiary है, उसे राज्य
        सरकार <strong>नमो शेतकरी महासन्मान निधि</strong> से ₹6,000/साल और देती है — अलग आवेदन नहीं,
        ₹2,000 की तीन किस्तें, status{' '}
        <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">nsmny.mahait.org</a>{' '}
        पर।
      </IB>

      <SH>योजना क्या है — और MP वाले model से रिश्ता</SH>
      <p>
        2023-24 के महाराष्ट्र budget में घोषित यह योजना उसी formula पर चलती है जो मध्य प्रदेश ने{' '}
        <Link href="/articles/hindi/mp-kisan-kalyan-yojana">किसान कल्याण योजना</Link> से शुरू किया था —
        केंद्र की PM Kisan के ऊपर राज्य अपनी तरफ से बराबर की रकम जोड़ दे। नतीजा: महाराष्ट्र के किसान परिवार
        को सालाना <strong>₹12,000</strong> — ₹6,000 केंद्र से, ₹6,000 राज्य से।
      </p>
      <p>
        सरकार ने राज्य वाली रकम बढ़ाकर ₹9,000 करने की बात भी कही है — यानी कुल ₹15,000 का math। लेकिन
        यहां हम वही लिखेंगे जो खाते में आता दिखा है: अब तक की किस्तें ₹2,000 × 3 के हिसाब से ₹6,000/साल
        की rhythm पर आई हैं। बढ़ी हुई रकम आपकी किस्त में कब से लागू होगी, यह official घोषणा और portal से
        confirm करें — अफवाह से नहीं।
      </p>

      <SH>PM Kisan और नमो शेतकरी — एक नजर में फर्क</SH>
      <p>
        दोनों किस्तें एक ही खाते में आती हैं, इसलिए उलझन स्वाभाविक है। यह तालिका सामने रख लीजिए —
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
        सबसे काम की line तालिका की आखिरी दो हैं — release और शिकायत। PM Kisan की किस्त आ जाने का
        मतलब यह नहीं कि उसी दिन नमो शेतकरी भी आएगी — दोनों के कार्यक्रम अलग हैं। और शिकायत गलत
        दरवाजे पर करेंगे तो जवाब में सिर्फ “यह हमारा विषय नहीं” सुनने को मिलेगा।
      </p>

      <SH>पात्रता — शर्तें गिनती की हैं</SH>
      <StepList>
        <SI n={1}>किसान <strong>महाराष्ट्र का निवासी</strong> हो और उसके नाम खेती की जमीन का record हो।</SI>
        <SI n={2}><strong>PM Kisan का active beneficiary</strong> हो — यही असली शर्त है; राज्य अपनी अलग जांच नहीं करता, केंद्र का verified database ही उठाता है।</SI>
        <SI n={3}><strong>eKYC पूरी</strong> हो और बैंक खाता आधार से seeded + DBT-enabled हो।</SI>
        <SI n={4}>PM Kisan के exclusion नियम यहां भी लागू — income tax payer परिवार, सरकारी कर्मचारी, ₹10,000+ pension वाले बाहर।</SI>
      </StepList>

      <WB>
        इसका उल्टा भी उतना ही सच है — PM Kisan में किस्त रुकी (eKYC, land seeding, बैंक issue), तो नमो
        शेतकरी भी रुकेगी। एक ही जड़ से दोनों किस्तें निकलती हैं। इसलिए पहले PM Kisan की सेहत ठीक करो,
        राज्य वाली अपने आप पटरी पर आ जाती है।
      </WB>

      <SH>Status check — step by step</SH>
      <StepList>
        <SI n={1}>
          <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">nsmny.mahait.org</a>{' '}
          खोलें — यह NSMNY का official portal है।
        </SI>
        <SI n={2}><strong>Beneficiary Status</strong> option चुनें।</SI>
        <SI n={3}>Registered mobile number या registration number (वही जो PM Kisan में है) डालें, captcha भरें।</SI>
        <SI n={4}>Mobile पर आए <strong>OTP</strong> से verify करें।</SI>
        <SI n={5}>Screen पर किस्तों की history, eKYC status और आधार seeding status दिखेगा — screenshot रख लें।</SI>
      </StepList>

      <GovLink
        href="https://nsmny.mahait.org"
        label="Namo Shetkari Mahasanman Nidhi — Official Portal"
        guide="NSMNY Portal खोलो"
        guideHref="/articles/PmKisanMasterGuide2026"
        portalName="Government of Maharashtra"
      />

      <SH>किस्त नहीं आई? यह checklist चलाइए</SH>
      <p>
        7वीं किस्त के समय भी लाखों किसान ऐसे थे जिनका नाम list में था पर पैसा नहीं पहुंचा। लगभग हर मामला
        इन्हीं चार खानों में गिरता है:
      </p>
      <StepList>
        <SI n={1}>
          <strong>eKYC अधूरी</strong> — rejection का सबसे बड़ा कारण। मोबाइल से OTP या Face App से पूरी
          करें — पूरा तरीका <Link href="/articles/hindi/ekyc-mobile-se">यहां खुलेगा</Link>।
        </SI>
        <SI n={2}>
          <strong>बैंक खाता आधार से linked नहीं / DBT off</strong> — यह NPCI seeding का मामला है, branch
          जाकर form भरना पड़ता है। Seeding का पूरा खेल{' '}
          <Link href="/articles/hindi/npci-aadhaar-seeding">इस page पर समझाया है</Link>।
        </SI>
        <SI n={3}>
          <strong>Land record verification pending</strong> — तलाठी/कृषि सहायक के स्तर पर अटका होता है;
          खतौनी लेकर मिलिए।
        </SI>
        <SI n={4}>
          <strong>PM Kisan में ही registration अधूरा</strong> — तो पहले वहां का status देखें (
          <Link href="/articles/hindi/status-check-mobile-se">mobile number से status check</Link>) और वह
          ठीक कराएं।
        </SI>
      </StepList>

      <SH>गांव में घूमती तीन गलतफहमियां — और सच</SH>
      <p>
        <strong>गलतफहमी 1: “नमो शेतकरी का अलग form भरना पड़ता है, agent ₹500 में भर देगा।”</strong>{' '}
        सच — ऐसा कोई form है ही नहीं। जो agent इसके पैसे मांग रहा है, वह आपसे उस काम के पैसे ले रहा
        है जो होता ही नहीं।
      </p>
      <p>
        <strong>गलतफहमी 2: “PM Kisan की किस्त आ गई, नमो शेतकरी नहीं आई — मेरा नाम कट गया।”</strong>{' '}
        सच — ज्यादातर मामलों में नाम कटा नहीं होता; राज्य की किस्त अपने अलग कार्यक्रम से release
        होती है। पहले NSMNY portal पर status देखें, फिर परेशान हों।
      </p>
      <p>
        <strong>गलतफहमी 3: “रकम बढ़कर ₹15,000 हो गई है, इस बार से ज्यादा आएगा।”</strong> सच —
        बढ़ोतरी की घोषणा हुई है, पर आपकी किस्त में कब से दिखेगी यह official अधिसूचना से ही पक्का
        होगा। WhatsApp पर घूमते “इस तारीख को ₹3,000 आएंगे” जैसे message का स्रोत पूछें — जवाब नहीं
        मिलेगा।
      </p>

      <SH>नए किसान के लिए रास्ता</SH>
      <p>
        अलग से "नमो शेतकरी का form" ढूंढने मत जाइए — ऐसा कोई अलग आवेदन है ही नहीं। रास्ता एक ही है:
        पहले PM Kisan में registration (अब Farmer ID के साथ), eKYC और बैंक seeding पूरी कीजिए। जिस
        महीने आप PM Kisan के verified beneficiary बने, उसके बाद की राज्य किस्त से आपका नाम नमो शेतकरी
        में भी गिना जाने लगता है। Registration कदम-दर-कदम कैसे होता है, यह{' '}
        <Link href="/articles/hindi/nayi-registration">नई रजिस्ट्रेशन वाले लेख</Link> में देख लें।
      </p>

      <SH>कागज़ात की तैयारी — हाथ में क्या-क्या हो</SH>
      <p>
        चाहे नई registration हो या अटकी किस्त की शिकायत — तलाठी या कृषि सहायक के पास खाली हाथ मत
        जाइए। हर चक्कर में एक ही जवाब मिलेगा: "फलां कागज़ लेकर आओ।" एक बार में काम निपटाना है तो यह
        बंडल पहले से तैयार रखिए:
      </p>
      <StepList>
        <SI n={1}><strong>आधार कार्ड</strong> — और वह mobile number जो आधार से linked है, क्योंकि हर verification OTP उसी पर आता है।</SI>
        <SI n={2}><strong>7/12 उतारा (सातबारा)</strong> — महाराष्ट्र का land record यही है; ताजा निकालकर रखें। साथ में <strong>8-अ</strong> का उतारा भी हो तो और अच्छा — holding का पूरा हिसाब उसी में दिखता है।</SI>
        <SI n={3}><strong>बैंक passbook</strong> — उसी खाते की जो आधार से seeded है। कौन सा खाता seeded है यह याद नहीं, तो branch में पूछ लें — अंदाज़े से passbook मत उठाइए।</SI>
        <SI n={4}><strong>PM Kisan registration number</strong> — SMS, पुरानी पावती या portal से नोट कर लें; शिकायत में सबसे पहले यही पूछा जाता है।</SI>
      </StepList>
      <p>
        एक छोटा सा काम और — इन सबकी एक-एक photocopy और mobile में photo रखिए। सरकारी दफ्तर में
        original जमा नहीं होता, पर copy मांगी जाती है; और photo इसलिए कि अगली बार कोई भी portal
        भरते समय खसरा नंबर या खाता नंबर ढूंढने घर नहीं लौटना पड़े।
      </p>

      <SH>समय का हिसाब — कितने दिन में क्या होता है</SH>
      <p>
        एक आम scenario लीजिए: मान लीजिए आपने आज eKYC पूरी की, क्योंकि उसी की वजह से किस्त रुकी थी।
        अब क्या उम्मीद रखें? Portal पर eKYC का status आमतौर पर कुछ ही दिनों में update दिखने लगता है,
        लेकिन रुकी हुई रकम उसी दिन नहीं आती — वह अगली release की प्रक्रिया में जुड़कर आती है। यानी
        बीच के हफ्तों में "पैसा अब भी नहीं आया" देखकर घबराने की जरूरत नहीं है। यही बात NPCI seeding
        पर भी लागू होती है — branch में form भरने के बाद mapper में update होने में समय लगता है।
      </p>
      <p>
        इसलिए नियम यह बनाइए: गड़बड़ी ठीक कराने के बाद portal का status देखें — गड़बड़ी वाला flag हटा या
        नहीं। Flag हट गया, तो आपका काम पूरा है; अब किस्त अगले release cycle में आएगी। Flag हफ्तों बाद
        भी वहीं का वहीं है, तब दफ्तर का दूसरा चक्कर बनता है — पावती साथ लेकर।
      </p>

      <SH>साल भर की आदत — 10 मिनट, तीन काम</SH>
      <StepList>
        <SI n={1}>
          <strong>हर किस्त के बाद SMS मिलान</strong> — बैंक का credit SMS आया तो रकम नोट करें; नहीं
          आया तो पहले passbook update कराएं — कई बार पैसा आ चुका होता है, सिर्फ SMS नहीं आता।
        </SI>
        <SI n={2}>
          <strong>साल में दो बार दोनों portal पर status</strong> — बुवाई के पहले और कटाई के बाद। eKYC,
          seeding या land record का कोई flag दिखे तो उसी हफ्ते निपटाएं — किस्त के दिन लाइनों में
          खड़े होने से बेहतर है पहले से तैयार रहना।
        </SI>
        <SI n={3}>
          <strong>Mobile number बदले तो तुरंत update</strong> — OTP उसी नंबर पर आता है। पुराना नंबर बंद
          हो गया तो status देखना तक मुश्किल हो जाता है — फिर CSC के चक्कर ही बचते हैं।
        </SI>
      </StepList>

      <SH>सीधी बात</SH>
      <p>
        नमो शेतकरी कोई पहेली नहीं है — यह PM Kisan की परछाई है। वहां सब ठीक, तो यहां भी पैसा आएगा; वहां
        अटका, तो यहां भी अटकेगा। इसलिए साल में दो बार portal पर status देख लेने की आदत, eKYC-बैंक-जमीन
        तीनों record दुरुस्त, और किसी भी "किस्त दिलवाने वाले agent" से दूरी — बस इतना ही काम है। बाकी
        ₹12,000 आपका हक है, किसी की मेहरबानी नहीं।
      </p>

      <FAQBlock faqs={FAQS} />

      <RelatedArticles articles={RELATED} />
    </>
  );
}
