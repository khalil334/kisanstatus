import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या सिर्फ मोबाइल नंबर से स्टेटस देख सकते हैं?',
    a: 'सीधे नहीं। Portal अब registration number मांगता है। लेकिन मोबाइल नंबर से आप अपना registration number निकाल सकते हैं (Know your registration no. option से), और OTP भी उसी mobile पर आता है। तो practically पूरा काम mobile number से ही हो जाता है।',
  },
  {
    q: 'OTP नहीं आ रहा, क्या करूं?',
    a: 'पहले network check करें और 2-3 मिनट रुकें। फिर भी न आए तो हो सकता है आपका पुराना नंबर registered हो। SIM बंद हो चुका है तो पहले नंबर update कराना पड़ेगा — इसका तरीका हमारी mobile number change guide में है।',
  },
  {
    q: 'Registration number भूल गया हूं, कहां मिलेगा?',
    a: 'Know Your Status page पर ही "Know your registration no." का link है। वहां mobile number या आधार डालकर OTP verify करें — registration number screen पर आ जाएगा। कहीं लिखकर रख लें।',
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
];

const RELATED = [
  { slug: 'PmKisanMobileNumberChangeUpdate', title: 'Mobile Number Change/Update', emoji: '📱' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Ka Matlab', emoji: '💳' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
];

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

      <IB>
        <strong>छोटा जवाब:</strong>{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> →{' '}
        <strong>Know Your Status</strong> → registration number न हो तो{' '}
        <strong>Know your registration no.</strong> → mobile number + OTP → registration number मिला → अब
        status देखें। कुल 5 मिनट का काम।
      </IB>

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
      <FAQBlock faqs={FAQS} />

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
