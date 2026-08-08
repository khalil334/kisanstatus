import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, GovLink, CalcBanner, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या सिर्फ मोबाइल नंबर से स्टेटस देख सकते हैं?',
    a: 'सीधे नहीं। Portal अब registration number मांगता है। लेकिन मोबाइल नंबर से आप अपना registration number निकाल सकते हैं (Know your registration no. option से), और OTP भी उसी mobile पर आता है। तो practically पूरा काम मोबाइल नंबर से ही हो जाता है।',
  },
  {
    q: 'OTP नहीं आ रहा, क्या करूं?',
    a: 'पहले network check करें और 2-3 मिनट रुकें। फिर भी न आए तो हो सकता है आपका पुराना नंबर registered हो। SIM बंद हो चुका है तो पहले नंबर update कराना पड़ेगा — इसका तरीका हमारी mobile number change guide में है।',
  },
  {
    q: 'Registration number भूल गया हूं, कहां मिलेगा?',
    a: 'Know Your Status page पर ही "Know your registration no." का link है। वहां मोबाइल नंबर या आधार डालकर OTP verify करें — registration number screen पर आ जाएगा। कहीं लिखकर रख लें।',
  },
  {
    q: 'eKYC में NO दिख रहा है, इसका मतलब?',
    a: 'मतलब आपकी eKYC pending है और अगली किस्त रुक सकती है। OTP से eKYC portal पर ही हो जाती है, या CSC पर biometric से। यह आपके हाथ का काम है — शिकायत से नहीं, खुद करने से होगा।',
  },
  {
    q: 'Status में सब YES है फिर भी पैसा नहीं आया?',
    a: 'FTO processed देखिए। अगर FTO generate हो गया है तो payment रास्ते में है — बैंक तक पहुंचने में कुछ दिन लगते हैं। अगर हफ्तों बाद भी नहीं आया, तो बैंक में NPCI आधार seeding check कराएं।',
  },
  {
    q: 'क्या किसी app से भी check हो सकता है?',
    a: 'हां, PM-KISAN GoI का official app है (Google Play पर)। Face authentication से eKYC भी उसमें हो जाती है। लेकिन app सिर्फ official store से लें — मिलते-जुलते नाम वाले fake apps बहुत हैं।',
  },
  {
    q: 'पति और पत्नी दोनों का एक ही मोबाइल नंबर registered है — status अलग-अलग कैसे देखें?',
    a: 'एक नंबर पर एक से ज्यादा आवेदन जुड़े हों तो "Know your registration no." में OTP के बाद list दिख सकती है, या पहला record ही खुलता है। पक्का तरीका यह है कि registration number अलग-अलग निकाल कर संभाल लें, और status हर बार registration number से देखें — नंबर से नहीं। ध्यान रखें, योजना का लाभ परिवार में एक ही सदस्य को मिलता है।',
  },
  {
    q: 'Captcha बार-बार गलत बता रहा है, जबकि मैं सही डाल रहा हूं।',
    a: 'यह लगभग हमेशा browser का पुराना page होता है। Page को refresh करें ताकि नया captcha बने, फिर छोटे-बड़े अक्षरों का ध्यान रखकर डालें। एक बार में न बने तो browser का cache साफ करके या दूसरे browser से खोलें।',
  },
  {
    q: 'गांव के CSC वाले status check करने के ₹50-100 लेते हैं — यह ठीक है?',
    a: 'Status देखना portal पर मुफ्त है, यह काम आप खुद phone से कर सकते हैं। CSC पर biometric eKYC जैसी सेवाओं की तय सरकारी फीस होती है, लेकिन सिर्फ status दिखाने का कोई शुल्क नहीं बनता। दो मिनट खुद देख लेना सबसे सस्ता है।',
  },
  {
    q: 'Status में मेरा नाम गलत spelling में दिख रहा है — क्या पैसा रुक जाएगा?',
    a: 'रुक सकता है, क्योंकि आधार, बैंक खाते और आवेदन का नाम मिलान होता है। इसे अनदेखा न करें — correction का रास्ता portal के correction form से या कृषि विभाग/CSC के जरिए है। जितनी जल्दी सुधरेगा, उतना कम इंतजार।',
  },
  {
    q: 'मैं दूसरे राज्य में मजदूरी करता हूं, वहीं से status देख सकता हूं?',
    a: 'हां। Portal internet पर है, कहीं से भी खुलेगा — शर्त एक ही है कि registered मोबाइल नंबर वाला SIM आपके पास चालू हो, क्योंकि OTP उसी पर आएगा। घर से बाहर निकलने से पहले वह SIM साथ रखना या नंबर update करा लेना समझदारी है।',
  },
  {
    q: 'कितने दिन में एक बार status देखना चाहिए?',
    a: 'किस्त के आसपास हफ्ते में एक बार काफी है। रोज देखने से न किस्त जल्दी आती है और न कोई field अपने आप YES होता है। समय उस field पर लगाइए जो NO दिखा रहा है।',
  },
];

const RELATED = [
  { slug: 'PmKisanMobileNumberChangeUpdate', title: 'Mobile Number Change/Update', emoji: '📱' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Ka Matlab', emoji: '💳' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
];

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-[var(--color-text)] mt-6 mb-2">{children}</h3>;
}

export default function PmKisanStatusCheckMobileNumberSe({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        <strong>आपके पास registration number नहीं है, सिर्फ mobile number है — तो क्या स्टेटस चेक हो
        सकता है?</strong>
      </p>
      <p>
        हो सकता है। और इसी सवाल पर यह पूरी guide है, क्योंकि सच यही है कि ज्यादातर किसानों को अपना
        registration number याद नहीं रहता। CSC वाले ने form भरा था, पर्ची कहीं खो गई, और अब हर किस्त के time
        वही उलझन। अच्छी बात — portal ने इसका रास्ता रखा है। आपका registered mobile number ही चाबी है: उसी से
        registration number वापस निकलता है, और उसी पर OTP आता है।
      </p>
      <p>
        नीचे पूरा रास्ता है — पहले registration number निकालना, फिर status खोलना, फिर screen पर लिखी
        अंग्रेजी lines का मतलब, और आखिर में वो हिस्सा जो असल में सबसे काम का है: कौन सा field NO दिख रहा
        है और उस पर आज क्या करना है। बीच में वो गलतियां भी लिखी हैं जिनकी वजह से लोग घंटों अटके रहते हैं।
      </p>

      <IB>
        <strong>छोटा जवाब:</strong>{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> →{' '}
        <strong>Know Your Status</strong> → registration number न हो तो{' '}
        <strong>Know your registration no.</strong> → mobile number + OTP → registration number मिला → अब
        status देखें। कुल 5 मिनट का काम।
      </IB>

      <SH>शुरू करने से पहले — तीन चीजें पास रखें</SH>
      <p>
        बहुत लोग आधे रास्ते में अटकते हैं क्योंकि कोई एक चीज हाथ में नहीं होती। दो मिनट लगाकर पहले यह तीन
        इकट्ठा कर लें, फिर काम एक ही बैठक में पूरा होगा:
      </p>
      <StepList>
        <SI n={1}>
          <strong>वह मोबाइल नंबर जो योजना में registered है</strong> — जरूरी नहीं कि यह आपका आज का मुख्य
          नंबर हो। जिस नंबर से form भरा गया था, OTP उसी पर जाएगा। SIM चालू और phone पास में हो।
        </SI>
        <SI n={2}>
          <strong>आधार कार्ड</strong> — नंबर याद न हो तो कार्ड सामने रखें। Registration number निकालने का
          दूसरा रास्ता आधार से भी है।
        </SI>
        <SI n={3}>
          <strong>बैंक passbook</strong> — status में नाम या खाते से जुड़ी गड़बड़ी दिखे तो तुरंत मिलान कर
          पाएंगे, बाद में दोबारा बैठना नहीं पड़ेगा।
        </SI>
      </StepList>
      <p>
        और हां — काम phone के साधारण browser (Chrome आदि) में हो जाता है। किसी अलग app या software की
        जरूरत नहीं।
      </p>

      <SH>Step 1 — मोबाइल नंबर से registration number निकालें</SH>
      <p>
        अगर registration number पहले से पता है, तो सीधे अगले section पर जाएं। बाकी लोग यह करें:
      </p>
      <StepList>
        <SI n={1}>
          Phone के browser में{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> खोलें।
          Page थोड़ा नीचे scroll करें — <strong>Farmers Corner</strong> में <strong>Know Your Status</strong>{' '}
          का box दिखेगा।
        </SI>
        <SI n={2}>
          उस page पर ऊपर की तरफ <strong>Know your registration no.</strong> का link है। उस पर tap करें।
        </SI>
        <SI n={3}>
          दो option मिलेंगे — <strong>Mobile Number</strong> या <strong>Aadhaar Number</strong>। Mobile
          number वाला चुनें, अपना registered नंबर डालें, captcha भरें।
        </SI>
        <SI n={4}>
          <strong>Get Mobile OTP</strong> दबाएं। OTP आएगा, उसे डालें।
        </SI>
        <SI n={5}>
          Screen पर आपका <strong>registration number</strong> आ जाएगा। इसे डायरी में या phone के notes में
          लिख लें — हर बार यही काम आएगा।
        </SI>
      </StepList>
      <WB>
        OTP उसी नंबर पर आएगा जो PM Kisan record में registered है। अगर वो SIM बंद हो चुका है, तो पहले नंबर
        बदलवाना पड़ेगा — पूरा तरीका{' '}
        <Link href="/articles/PmKisanMobileNumberChangeUpdate">mobile number update guide</Link> में step-by-step
        दिया है।
      </WB>
      <p>
        एक सलाह जो आगे बहुत बचाएगी: registration number मिलते ही उसका screenshot ले लें और phone के notes
        में भी टाइप कर दें। Screenshot gallery साफ करते वक्त डिलीट हो जाते हैं, टाइप किया नंबर टिका रहता
        है। घर में किसी और के phone पर भी लिख कर रख दें — अगली किस्त के time यही दो मिनट बचेंगे।
      </p>

      <SH>Step 2 — अब स्टेटस देखें</SH>
      <p>
        Registration number हाथ में आ गया? बढ़िया। वापस <strong>Know Your Status</strong> page पर आइए।
      </p>
      <StepList>
        <SI n={1}>Registration number वाले box में नंबर डालें।</SI>
        <SI n={2}>Captcha code भरें और <strong>Get OTP</strong> दबाएं।</SI>
        <SI n={3}>Mobile पर आया OTP डालकर submit करें।</SI>
        <SI n={4}>बस — आपका पूरा record screen पर है। नाम, राज्य, किस्तों की history, eKYC की स्थिति, सब।</SI>
      </StepList>
      <p>
        जो page खुलेगा उसमें ऊपर आपकी बुनियादी जानकारी होती है और नीचे किस्तों की सूची। सूची में हर किस्त के
        सामने उसकी स्थिति लिखी रहती है। सबसे नई entry सबसे काम की है — वहीं से पता चलता है कि इस बार का
        पैसा किस पड़ाव पर है।
      </p>

      <GovLink
        href="https://pmkisan.gov.in"
        label="PM Kisan Portal — Know Your Status"
        guide="pmkisan.gov.in खोलें"
        portalName="pmkisan.gov.in"
      />

      <SH>Screen पर जो दिख रहा है, उसका मतलब क्या है?</SH>
      <p>
        यहीं पर ज्यादातर लोग अटकते हैं। Status खुल गया, अंग्रेजी में चार-पांच lines दिख रही हैं — अब इनका
        मतलब? एक-एक करके समझते हैं।
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">Field</th>
              <th className="border border-[var(--color-border)] p-2 text-left">YES का मतलब</th>
              <th className="border border-[var(--color-border)] p-2 text-left">NO हो तो?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">eKYC Status</td>
              <td className="border border-[var(--color-border)] p-2">आधार verification पूरा — किस्त के लिए रास्ता साफ</td>
              <td className="border border-[var(--color-border)] p-2">तुरंत eKYC कराएं, वरना किस्त रुकेगी</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Land Seeding</td>
              <td className="border border-[var(--color-border)] p-2">जमीन का record योजना से जुड़ चुका है</td>
              <td className="border border-[var(--color-border)] p-2">तहसील/कृषि office में land record verification कराएं</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Aadhaar Bank Seeding</td>
              <td className="border border-[var(--color-border)] p-2">बैंक account DBT के लिए तैयार</td>
              <td className="border border-[var(--color-border)] p-2">बैंक जाकर NPCI आधार seeding form भरें</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">FTO Processed</td>
              <td className="border border-[var(--color-border)] p-2">Fund Transfer Order बन गया — पैसा रास्ते में</td>
              <td className="border border-[var(--color-border)] p-2">अभी payment queue में नहीं — बाकी तीनों field पहले check करें</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        सीधी सी बात — पैसा आने के लिए ऊपर की तीनों चीजें YES होनी चाहिए। तीनों YES हैं और FTO भी processed
        है, तो बस बैंक पहुंचने का इंतजार है। FTO वाली पूरी कहानी अलग से{' '}
        <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai">FTO generated का मतलब</Link> वाले
        article में लिखी है।
      </p>

      <H3>किस्तों की सूची में दिखने वाली आम lines</H3>
      <p>
        Field के अलावा किस्त के सामने कुछ वाक्य भी लिखे मिलते हैं। इन्हें एक बार समझ लीजिए, फिर हर बार
        किसी से पूछने की जरूरत नहीं पड़ेगी:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">Screen पर लिखा है</th>
              <th className="border border-[var(--color-border)] p-2 text-left">आपके लिए मतलब</th>
              <th className="border border-[var(--color-border)] p-2 text-left">अब क्या करें</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Rft Signed by State Government</td>
              <td className="border border-[var(--color-border)] p-2">राज्य ने आपकी request आगे बढ़ा दी है — अच्छा संकेत</td>
              <td className="border border-[var(--color-border)] p-2">कुछ नहीं, इंतजार करें</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">FTO is generated / Processed</td>
              <td className="border border-[var(--color-border)] p-2">भुगतान का आदेश बन गया, पैसा प्रक्रिया में है</td>
              <td className="border border-[var(--color-border)] p-2">बैंक SMS का इंतजार करें</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Payment stopped by State</td>
              <td className="border border-[var(--color-border)] p-2">राज्य स्तर की जांच में किस्त रोकी गई है</td>
              <td className="border border-[var(--color-border)] p-2">
                <Link href="/articles/hindi/payment-stopped-by-state">वजह पकड़ें और सुधार कराएं</Link>
              </td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">eKYC — NO</td>
              <td className="border border-[var(--color-border)] p-2">आधार verification बाकी है</td>
              <td className="border border-[var(--color-border)] p-2">
                <Link href="/articles/hindi/ekyc-mobile-se">phone से eKYC कर लें</Link>
              </td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">Aadhaar Bank Seeding — NO</td>
              <td className="border border-[var(--color-border)] p-2">खाता DBT के लिए तैयार नहीं</td>
              <td className="border border-[var(--color-border)] p-2">
                <Link href="/articles/hindi/npci-aadhaar-seeding">बैंक में NPCI seeding कराएं</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Portal समय-समय पर शब्द बदलता है, इसलिए हूबहू वही वाक्य न मिले तो घबराएं नहीं — मतलब लगभग इन्हीं
        पांच खानों में आता है।
      </p>

      <CalcBanner />

      <SH>अब असली काम — NO वाले field पर आज क्या करें</SH>
      <p>
        Status देख लेना आधा काम है। आधा यह है कि जो field NO दिखा, उस पर हाथ रखा जाए। नीचे तीनों का
        सबसे छोटा रास्ता:
      </p>

      <H3>eKYC पर NO है</H3>
      <p>
        यह अकेला काम है जो पूरी तरह आपके हाथ में है और घर बैठे हो जाता है। Portal पर OTP वाली eKYC खुद कर
        सकते हैं; उंगलियों के निशान से करानी हो तो नजदीकी CSC केंद्र पर होती है, और official app में face
        authentication का रास्ता भी है। पूरा तरीका{' '}
        <Link href="/articles/hindi/ekyc-mobile-se">phone से eKYC करने वाली guide</Link> में है। जितनी जल्दी
        यह YES होगा, उतनी जल्दी बाकी प्रक्रिया आगे बढ़ेगी।
      </p>

      <H3>Aadhaar Bank Seeding पर NO है</H3>
      <p>
        इसका मतलब आपका खाता आधार से जुड़कर DBT के लिए तैयार नहीं है। यह बैंक शाखा का काम है — passbook और
        आधार लेकर जाइए, NPCI seeding/DBT enable करने का form भरवाइए। ध्यान दें: खाते में आधार नंबर दर्ज
        होना और खाता DBT के लिए active होना, दोनों अलग बातें हैं। विस्तार से{' '}
        <Link href="/articles/hindi/npci-aadhaar-seeding">NPCI आधार सीडिंग guide</Link> देखें।
      </p>

      <H3>Land Seeding पर NO है</H3>
      <p>
        यह सबसे धीमा हिस्सा है क्योंकि इसमें जमीन के कागज देखे जाते हैं। खतौनी/जमाबंदी की नकल लेकर तहसील या
        ब्लॉक के कृषि कार्यालय जाइए और साफ पूछिए कि record में क्या अटका है — नाम दर्ज नहीं, वरासत बाकी है,
        या खाता संख्या मेल नहीं खा रही। जो कमी बताई जाए, उसका कागज पूरा कराइए। यहां जल्दबाजी काम नहीं आती,
        लगातार follow-up आता है।
      </p>

      <IB>
        क्रम याद रखिए — <strong>पहले eKYC, फिर bank seeding, फिर land record</strong>। पहले दो जल्दी
        निपटते हैं और अक्सर उतने से ही किस्त चल पड़ती है। तीनों को एक साथ पकड़ने की कोशिश में लोग थक जाते
        हैं और कुछ भी पूरा नहीं होता।
      </IB>

      <SH>OTP नहीं आ रहा — तीन common कारण</SH>
      <p>
        हमारे पास आने वाले सवालों में यह सबसे ऊपर है। एक किसान भाई ने बताया था — बेटे के phone से check करने
        बैठे, OTP का इंतजार करते रहे, आया ही नहीं। वजह निकली कि registration में उनका अपना पुराना नंबर था, जो
        recharge न होने से बंद हो चुका था। यह case बहुत आम है। कारण आम तौर पर तीन होते हैं:
      </p>
      <StepList>
        <SI n={1}>
          <strong>Network/delay</strong> — 2-3 मिनट रुकें, दोबारा try करें। शाम के time server धीमा चलता है।
        </SI>
        <SI n={2}>
          <strong>गलत नंबर डाल रहे हैं</strong> — OTP उसी नंबर पर जाता है जो record में है, उस पर नहीं जो आप
          अभी इस्तेमाल कर रहे हैं। दोनों अलग हो सकते हैं।
        </SI>
        <SI n={3}>
          <strong>Registered SIM बंद हो चुका है</strong> — यहां शिकायत काम नहीं आएगी; पहले नंबर update
          कराना होगा। <Link href="/articles/PmKisanMobileNumberChangeUpdate">यह guide</Link> देखें।
        </SI>
      </StepList>

      <H3>और चार छोटी अड़चनें, जिनका हल दो मिनट का है</H3>
      <StepList>
        <SI n={1}>
          <strong>Captcha गलत बता रहा है</strong> — page refresh करके नया captcha लें। छोटे-बड़े अक्षर
          वैसे ही डालें जैसे दिख रहे हैं।
        </SI>
        <SI n={2}>
          <strong>Page खुल ही नहीं रहा या अटक रहा है</strong> — किस्त वाले दिनों में भीड़ रहती है। सुबह जल्दी
          या देर रात कोशिश कीजिए, तब portal हल्का चलता है।
        </SI>
        <SI n={3}>
          <strong>"Invalid registration number"</strong> — नंबर दोबारा मिलाइए। शक हो तो
          &quot;Know your registration no.&quot; से फिर निकालें; कहीं आपने पुरानी पर्ची का गलत नंबर न डाल दिया हो।
        </SI>
        <SI n={4}>
          <strong>Record ही नहीं मिल रहा</strong> — हो सकता है आवेदन ही पूरा दर्ज न हुआ हो। ऐसे में
          <Link href="/articles/hindi/nayi-registration"> नई registration की प्रक्रिया</Link> देखिए और
          अपने ब्लॉक के कृषि अधिकारी से आवेदन की स्थिति पूछिए।
        </SI>
      </StepList>

      <DB>
        ठगी का सबसे आम रास्ता यही है। किसी को भी अपना OTP, आधार OTP, बैंक का PIN या खाते की details मत
        बताइए — न phone पर, न किसी लिंक में। योजना का कोई अधिकारी status दिखाने के लिए OTP नहीं मांगता, और
        किस्त &quot;जल्दी दिलाने&quot; के नाम पर पैसे मांगने वाला हर व्यक्ति ठग है। शिकायत का सही रास्ता
        portal की grievance और हेल्पलाइन <strong>155261</strong> है — पूरा तरीका{' '}
        <Link href="/articles/hindi/helpline-shikayat">शिकायत guide</Link> में लिखा है।
      </DB>

      <SH>Status देखने के तीन रास्ते — कौन कब चुनें</SH>
      <p>
        सब लोगों के लिए एक ही तरीका सबसे अच्छा नहीं होता। छोटी तुलना देख लीजिए:
      </p>
      <StepList>
        <SI n={1}>
          <strong>Portal, अपने phone के browser से</strong> — सबसे भरोसेमंद और मुफ्त। जब registered SIM
          आपके पास है, यही चुनिए। Registration number सुरक्षित रखें, हर बार यही काम आएगा।
        </SI>
        <SI n={2}>
          <strong>Official PM-KISAN app</strong> — बार-बार देखने वालों के लिए सुविधाजनक; face
          authentication वाली eKYC भी इसी में होती है। App सिर्फ official store से लीजिए, मिलते-जुलते नाम
          वाले नकली apps से बचिए।
        </SI>
        <SI n={3}>
          <strong>CSC केंद्र</strong> — जब phone पर काम न बन रहा हो, या biometric eKYC करानी हो। Status
          देखना खुद मुफ्त है, इसलिए CSC वहीं ले जाइए जहां असल में उसका काम है।
        </SI>
      </StepList>

      <SH>अगर status ठीक है फिर भी पैसा नहीं आया</SH>
      <p>
        यह स्थिति उलझन भरी लगती है, पर इसका क्रम साफ है। सबसे पहले किस्त की सूची में देखिए कि इस बार की
        entry बनी है या नहीं। बनी है और FTO वाला हिस्सा आगे बढ़ चुका है, तो पैसा प्रक्रिया में है — बैंक तक
        पहुंचने में कुछ दिन लगते हैं, और पहुंचते ही खाते का SMS आता है। SMS पर भरोसा न हो तो passbook या
        बैंक की app में entry देख लीजिए; कई बार पैसा आ चुका होता है और message ही नहीं मिलता।
      </p>
      <p>
        हफ्तों बाद भी entry न दिखे तो दो जगह देखिए — खाता जिस बैंक में है, वह आधार seeding के लिए active है
        या नहीं, और record में नाम/खाता संख्या सही है या नहीं। इनमें से कोई भी गड़बड़ हो तो भुगतान वापस
        लौट जाता है। यहां तक आकर भी बात न बने तो portal की grievance और हेल्पलाइन <strong>155261</strong> पर
        शिकायत दर्ज कराइए और शिकायत संख्या संभालकर रखिए।
      </p>

      <SH>घर के बड़े-बुजुर्ग का status देखना हो तो</SH>
      <p>
        गांव में अक्सर यही होता है — खाता पिताजी या दादाजी के नाम है, और देखने बैठता है घर का लड़का। इसमें
        कोई दिक्कत नहीं, बस दो बातें ध्यान रखिए। पहली, OTP उनके registered नंबर पर जाएगा, इसलिए वह phone
        पास में रखिए। दूसरी, उनका registration number एक बार निकाल कर घर की डायरी में लिख दीजिए, ताकि हर
        किस्त पर पूरी प्रक्रिया दोहरानी न पड़े।
      </p>
      <p>
        जो लोग पढ़ नहीं पाते, उनके लिए सबसे काम की बात यह है कि आप उन्हें पूरी screen न समझाएं — सिर्फ यह
        बताएं कि तीन में से कौन सा काम बाकी है और उसके लिए कहां जाना है। eKYC है तो phone से हो जाएगा,
        बैंक seeding है तो शाखा जाना है, जमीन का record है तो तहसील। इतना साफ हो जाए, तो आधी परेशानी खत्म।
      </p>

      <SH>एक बात साफ कर दें — यह guide किस चीज के लिए नहीं है</SH>
      <p>
        Honestly, यह article सिर्फ mobile-number वाले रास्ते पर focused है। अगर आपको पूरी योजना की A-to-Z
        जानकारी चाहिए — eligibility, नई registration, exclusion rules — तो उसके लिए हमारी{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide</Link> बनी हुई है। और अगर सवाल यह है कि
        अगली किस्त कब आएगी, तो <Link href="/articles/PmKisan24viKist2026">किस्त वाला article</Link> पढ़ें।
        यहां वो सब दोहराने का मतलब नहीं।
      </p>
      <p>
        आखिरी सलाह — status हफ्ते में एक बार देखना काफी है। रोज check करने से न किस्त जल्दी आती है, न
        eKYC अपने आप हो जाती है। जो field NO दिखा रहा है, उस पर काम कीजिए; बाकी portal पर छोड़ दीजिए।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock
        faqs={FAQS}
        caption="किसानों के सबसे ज्यादा पूछे गए सवाल — status, OTP, registration number और NO वाले field से जुड़े।"
      />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: process{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (Ministry
        of Agriculture &amp; Farmers Welfare) के Know Your Status flow पर आधारित है। Portal का layout समय-समय
        पर बदलता रहता है — options के नाम थोड़े अलग दिख सकते हैं। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
