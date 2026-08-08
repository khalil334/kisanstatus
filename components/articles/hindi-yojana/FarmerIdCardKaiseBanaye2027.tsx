import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'फार्मर आईडी बनवाने के पैसे लगते हैं?',
    a: 'Online खुद करें तो बिल्कुल free। CSC पर कराएं तो service charge लग सकता है। कोई "जल्दी बनवा दूंगा" कहकर मोटी रकम मांगे तो वो fraud है — process सबके लिए एक जैसी है।',
  },
  {
    q: 'क्या फार्मर आईडी PM Kisan के लिए जरूरी है?',
    a: 'कई राज्यों में नई registration के लिए Farmer ID मांगी जाने लगी है, और पुराने beneficiaries के लिए भी यह धीरे-धीरे जरूरी होती जा रही है। अपने राज्य का ताजा rule कृषि विभाग से confirm करें — लेकिन बनवा लेना हर हाल में समझदारी है।',
  },
  {
    q: 'जमीन पिता के नाम है, मेरी आईडी बनेगी?',
    a: 'Farmer ID land record से link होती है। जमीन जिसके नाम है, आईडी उसी की बनेगी। आप खेती करते हैं लेकिन record पिता के नाम है, तो या तो उनकी आईडी बनवाएं, या record में नाम transfer/वरासत के बाद अपनी।',
  },
  {
    q: 'किरायेदार (tenant) किसान का क्या?',
    a: 'कुछ राज्यों में valid lease agreement के साथ tenant farmer भी register हो सकते हैं। यह राज्य के rules पर निर्भर है — अपने राज्य के portal या कृषि office से पूछें।',
  },
  {
    q: 'Registration के बाद ID कितने दिन में मिलती है?',
    a: 'Aadhaar OTP से verification तुरंत होता है, लेकिन land record की जांच में समय लगता है — कुछ दिनों से कुछ हफ्तों तक। Status portal पर "Check Enrollment Status" से देख सकते हैं।',
  },
  {
    q: 'आधार में mobile number link नहीं है, तो?',
    a: 'तब OTP नहीं आएगा और online registration अटक जाएगी। पहले आधार केंद्र जाकर mobile number link/update कराएं, या CSC पर biometric से registration कराएं।',
  },
  {
    q: 'ID Card कहां से download होगा?',
    a: 'Registration approve होने के बाद अपने राज्य के AgriStack portal पर login करें — profile में Farmer ID दिखेगी और card PDF में download हो जाता है। Print कराकर रखना अच्छा रहता है।',
  },
];

const RELATED = [
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Kya Hai?', emoji: '🗂️' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
];

export default function FarmerIdCardKaiseBanaye2027({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        देश के करोड़ों किसानों का data अब एक digital registry में जुड़ रहा है — और उसकी चाबी है एक unique
        number, जिसे सरकार <strong>Farmer ID</strong> या किसान पहचान पत्र कह रही है। आधार जैसा ही समझिए,
        बस खेती के लिए। जिस किसान की यह आईडी बन गई, उसका नाम, जमीन का record और बैंक — तीनों एक जगह verified
        हैं। और जिसकी नहीं बनी? आने वाले समय में scheme-दर-scheme दिक्कत बढ़ती जाएगी।
      </p>
      <p>
        यह guide उसी सवाल का जवाब है जो आजकल हर गांव में पूछा जा रहा है — <em>फार्मर आईडी कैसे बनाएं, कहां
        बनाएं, और क्या-क्या लगेगा?</em> बिना घुमाए, seedha process।
      </p>

      <SH>यह आईडी है क्या चीज?</SH>
      <p>
        केंद्र सरकार के <strong>AgriStack</strong> (Digital Agriculture Mission) के तहत हर राज्य अपनी{' '}
        <strong>Farmer Registry</strong> बना रहा है। इसमें किसान की तीन चीजें आपस में जोड़ी जाती हैं:
      </p>
      <StepList>
        <SI n={1}><strong>पहचान</strong> — आधार से verified नाम और details।</SI>
        <SI n={2}><strong>जमीन</strong> — खसरा/खतौनी वाला land record।</SI>
        <SI n={3}><strong>बैंक</strong> — DBT के लिए account details।</SI>
      </StepList>
      <p>
        इन तीनों के मिलान के बाद एक unique <strong>Farmer ID</strong> generate होती है। फायदा साफ है — बार-बार
        कागज जमा करने का झंझट खत्म। Subsidy, बीमा (PMFBY), KCC loan, PM Kisan — हर जगह यही एक आईडी काम
        करेगी। AgriStack की पूरी background हमने{' '}
        <Link href="/articles/AgriStackKyaHai2026">AgriStack क्या है</Link> वाले article में detail से समझाई
        है।
      </p>

      <SH>पहले यह 5 चीजें तैयार रखिए</SH>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">Document</th>
              <th className="border border-[var(--color-border)] p-2 text-left">क्यों चाहिए</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2">आधार कार्ड</td>
              <td className="border border-[var(--color-border)] p-2">पहचान verify करने के लिए — इसी से OTP आएगा</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">आधार से linked mobile number</td>
              <td className="border border-[var(--color-border)] p-2">OTP इसी पर आता है — link नहीं है तो पहले कराएं</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">जमीन के कागज (खसरा/खतौनी)</td>
              <td className="border border-[var(--color-border)] p-2">Land record मिलान के लिए</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">बैंक पासबुक</td>
              <td className="border border-[var(--color-border)] p-2">DBT payment के लिए account details</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">Passport size photo</td>
              <td className="border border-[var(--color-border)] p-2">कुछ राज्यों के portal पर मांगी जाती है</td>
            </tr>
          </tbody>
        </table>
      </div>
      <WB>
        सबसे common अड़चन पहले ही बता दें — <strong>land record में नाम की spelling आधार से अलग होना</strong>।
        &quot;राम कुमार&quot; आधार में और &quot;रामकुमार&quot; खतौनी में — बस, verification अटक गया। Registration
        से पहले दोनों record मिला लें; फर्क हो तो पहले तहसील से ठीक कराएं।
      </WB>

      <SH>Online registration — घर बैठे, step-by-step</SH>
      <p>
        हर राज्य का अपना portal है, लेकिन ढांचा एक जैसा — main portal{' '}
        <a href="https://agristack.gov.in" target="_blank" rel="noopener noreferrer">agristack.gov.in</a> से
        अपने राज्य की Farmer Registry चुनिए (जैसे UP के लिए upfr.agristack.gov.in, महाराष्ट्र के लिए
        mhfr.agristack.gov.in)। आगे का process:
      </p>
      <StepList>
        <SI n={1}>
          Portal खोलकर <strong>Farmer</strong> option चुनें, फिर <strong>Create New User Account</strong> पर
          जाएं।
        </SI>
        <SI n={2}>
          12 अंकों का आधार नंबर डालें, consent box tick करें, submit करें। आधार-linked mobile पर OTP आएगा —
          उसे डालकर verify करें।
        </SI>
        <SI n={3}>
          Username-password बनाएं (mobile number ही username रहता है ज्यादातर जगह)। फिर उसी से login करें।
        </SI>
        <SI n={4}>
          Dashboard पर <strong>Register as Farmer</strong> दबाएं। आधार से आपकी basic details अपने आप भर
          जाएंगी — address, category जैसी बची जानकारी खुद भरें।
        </SI>
        <SI n={5}>
          <strong>Land details</strong> डालें — जिला, तहसील, गांव, खसरा नंबर। Portal land record से मिलान
          करेगा।
        </SI>
        <SI n={6}>बैंक details भरें — account number, IFSC।</SI>
        <SI n={7}>
          सब check करके <strong>Submit</strong>। बस। अब verification का इंतजार — approve होते ही Farmer ID
          generate हो जाएगी और card PDF में download कर पाएंगे।
        </SI>
      </StepList>

      <GovLink
        href="https://agristack.gov.in"
        label="AgriStack — Farmer Registry Portal"
        guide="agristack.gov.in खोलें"
        portalName="agristack.gov.in"
      />

      <SH>Online नहीं हो पा रहा? CSC वाला रास्ता</SH>
      <p>
        सच बताएं तो हर किसान के लिए online form भरना आसान नहीं — network की दिक्कत, आधार में mobile link
        नहीं, या बस portal समझ नहीं आ रहा। कोई बात नहीं। नजदीकी <strong>CSC (जन सेवा केंद्र)</strong> पर
        जाइए, ऊपर वाले documents साथ ले जाइए। वहां biometric से आधार verification हो जाता है, mobile-link की
        जरूरत भी नहीं पड़ती। कई राज्यों में गांव-गांव <strong>camp</strong> भी लग रहे हैं जहां पटवारी/कृषि
        विभाग की team मौके पर ही registration करती है — अपने ग्राम पंचायत से पूछते रहिए।
      </p>
      <IB>
        एक अनुभव field से — MP के एक गांव में camp लगा तो जिन किसानों के land record पहले से साफ-सुथरे थे,
        उनकी आईडी उसी हफ्ते बन गई। जिनके record में वरासत दर्ज नहीं थी (जमीन अब भी दादा के नाम), वो महीनों
        अटके रहे। सीख: <strong>record पहले सुधारो, registration बाद में</strong> — उल्टा करोगे तो इंतजार ही
        मिलेगा।
      </IB>

      <SH>Status कैसे check करें?</SH>
      <p>
        अपने राज्य के portal पर <strong>Check Enrollment Status</strong> का option होता है — आधार नंबर या
        registered mobile डालिए, OTP verify कीजिए, स्थिति सामने। Status अगर लंबे समय तक pending दिखे तो
        अपने क्षेत्र के कृषि अधिकारी या पटवारी से मिलिए — अटकने की वजह लगभग हमेशा land record का मिलान होती
        है।
      </p>

      <SH>PM Kisan से इसका क्या रिश्ता है?</SH>
      <p>
        सीधा रिश्ता। PM Kisan की नई registration में कई राज्यों में अब Farmer ID मांगी जाने लगी है, और
        आगे यह पूरे DBT system की रीढ़ बनने वाली है। मतलब — जो किसान PM Kisan की{' '}
        <Link href="/articles/PmKisanMasterGuide2026">किस्त लेते हैं</Link> या{' '}
        <Link href="/articles/KisanCreditCardOnlineApply2026">KCC</Link> बनवाना चाहते हैं, उनके लिए यह आईडी
        आज नहीं तो कल जरूरी होगी ही। जल्दी बनवा लेने में ही फायदा है — बाद में भीड़ और server, दोनों का बोझ
        बढ़ेगा।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Sources: प्रक्रिया{' '}
        <a href="https://agristack.gov.in" target="_blank" rel="noopener noreferrer">agristack.gov.in</a>{' '}
        (Ministry of Agriculture &amp; Farmers Welfare) और राज्य Farmer Registry portals (जैसे
        upfr.agristack.gov.in) के registration flow पर आधारित है। राज्य-विशेष rules बदलते रहते हैं — अपने
        राज्य के portal पर verify करें। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
