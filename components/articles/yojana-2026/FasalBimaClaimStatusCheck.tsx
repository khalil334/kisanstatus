import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { Yojana2026ArticleMeta } from '@/lib/yojana-2026-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'PmfbyCropInsurance2026', title: 'PMFBY Policy Kaise Li Jati Hai' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'DBT Payment Failed Fix' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'State Nodal Officer List' },
];

const FAQS_DATA = [
  {
    q: 'Fasal bima ka paisa kitne din me aata hai?',
    a: 'Rule: yield data final hone ke baad lagbhag 2 mahine me settle. Kharif 2024 se der par insurance company ya state par 12% penalty ka provision bhi hai. Zameen par kai baar 3-6 mahine lagte hain. Sabse badi wajah state ke crop cutting data ki deri. 2 mahine se zyada ho jaye to complaint karo.',
  },
  {
    q: 'Claim status check karne ke liye kya chahiye?',
    a: 'Receipt number ya policy number, jo enrollment ke waqt mila tha. Bas. Loanee ho aur receipt na mili? Bank branch se policy copy maang lo, usme application number likha hota hai.',
  },
  {
    q: 'Status me "approved" dikh raha hai par paisa nahi aaya, kyun?',
    a: 'Aksar wajah: bank-Aadhaar seeding. NPCI seeding active nahi to DBT transfer wapas laut jaata hai. Seeding check karo, phir dono ko inform karo, bank bhi, insurance company bhi.',
  },
  {
    q: '72 ghante ka rule kis nuksan par lagta hai?',
    a: 'Sirf localized nuksan par, olaavrishti, jal-bharav, landslide, ya katai ke baad 14 din ke andar bemausam baarish. In cases me khud 72 ghante me intimation do. Sookha-baadh jaise widespread nuksan me zaroori nahi; wahan poore area ka assessment CCE se hota hai.',
  },
  {
    q: '72 ghante nikal gaye, ab claim milega ya nahi?',
    a: 'Localized calamity me late intimation claim reject hone ki sabse aam wajah hai. Phir bhi haath par haath rakh kar mat baitho, likhit me intimation do, deri ki wajah (network nahi tha, aspataal me the) ke saboot ke saath, aur krishi vibhag me bhi copy jama karo. Kuch cases me insurer genuine wajah maan leta hai, par iski guarantee nahi hai.',
  },
  {
    q: 'Claim reject ho gaya, ab kahan jaayein?',
    a: 'Pehle rejection ki wajah likhit me maango, ye aapka haq hai. Phir teen seedhiyan: insurance company ke district office me written complaint, phir District Level Grievance Redressal (district agriculture officer ke through), aur phir state level. 14447 par call karke bhi grievance number le sakte ho. Har jagah application number, policy copy aur intimation ka saboot saath rakho.',
  },
  {
    q: 'Premium kata tha par status me policy hi nahi dikh rahi?',
    a: 'Ye serious hai. Loanee kisano me kabhi-kabhi bank premium kaat leta hai par data insurance company tak samay par nahi pahunchta. Turant bank jao, premium katne ka passbook entry ya statement dikhao, aur likhit me poocho ki policy number kya hai. Bank ki galti se policy nahi bani to nuksan ki bharpai bank ko karni padti hai. Ye rules me saaf likha hai.',
  },
  {
    q: 'Kya WBCIS ka claim bhi aise hi check hota hai?',
    a: 'Haan, wahi pmfby.gov.in ke National Crop Insurance Portal se. Farq itna: WBCIS ka hisaab weather station ke data se automatic hota hai. Na survey, na 72 ghante ki intimation. Aur payout aam taur par season ke ant me ek saath aate hain.',
  },
  {
    q: 'Fasal Bima app se status dekh sakte hain kya?',
    a: 'Haan. Ministry of Agriculture ka official Crop Insurance / Fasal Bima app Play Store par hai. Login registered mobile se, policy details aur claim status dono dikh jaate hain. Crop loss report bhi wahi se hoti hai. Publisher me Ministry of Agriculture likha ho, tabhi lo.',
  },
];

export default function FasalBimaClaimStatusCheck({ article }: { article: Yojana2026ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/yojana" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Fasal Bima Claim Status</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Fasal Bima Claim Status. Paisa Kab Aur Kaise Milega
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.published)}</span>
            <span>Last Updated: {fmtDate(article.modified)}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Status check karne ke liye <strong>pmfby.gov.in</strong> kholo. Homepage par hi{' '}
          <strong>&ldquo;Application Status&rdquo;</strong> ka link hai. Us par click karo, apna receipt
          number ya policy number daalo, captcha bharo, aur <strong>Check Status</strong> dabao. Bas.
          Screen par dikh jaayega ki application kis stage par hai. Under processing, survey pending,
          claim approved, ya amount credited.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Receipt number wo hai jo enrollment ke waqt mila tha — CSC se karaya tha to us parchi par, khud
          portal se kiya tha to SMS aur email me. Number kho gaya? Loanee kisan apni bank branch se policy
          ki copy maang sakte hain, usme application number hota hai. Ek kisan ne policy number ke liye teen
          mahine idhar-udhar phone ghumaye, jabki uski branch ke record me pehle din se pada tha.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
          Doosra rasta phone ka hai. Ministry of Agriculture ka official <strong>Crop Insurance app</strong>{' '}
          (Play Store par free). Registered mobile se login karo, &ldquo;Check Claim Status&rdquo; kholo,
          policy ID daalo. Wahi kaam, chhoti screen par.
        </p>

        <IB>
          <strong>Helpline yaad rakho: 14447</strong>. Krishi Rakshak helpline. Status poochne, crop loss
          report karne aur complaint register karne, teeno kaam isi number se hote hain. WhatsApp chatbot
          bhi hai: +91 70655 14447.
        </IB>

        <SH>Claim Ka Poora Safar. Nuksan Se Khaate Tak</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Status samajhne ke liye pehle ye samajhna zaroori hai ki claim chalta kaise hai. PMFBY me do
          bilkul alag raaste hain, aur aadhi confusion isi se hoti hai ki kisan ko pata nahi hota uska case
          kaunse raaste par hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Pehla raasta, widespread nuksan.</strong> Sookha pada, poore ilaake me baadh aayi, ya
          season ka yield hi gir gaya. Aise me aapko kuch report karne ki zaroorat nahi. State ka krishi
          vibhag Crop Cutting Experiments (CCE) karta hai. Chune hue kheton me asli paidawar naapi jaati
          hai. Agar area ka yield guarantee se neeche nikla, to us area ke <em>sabhi</em> enrolled kisano ko
          apne aap claim banta hai. Isme intezaar lamba hota hai kyunki CCE katai ke baad hi ho sakte hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Doosra raasta, localized nuksan.</strong> Olaavrishti sirf aapke gaon par giri. Kheton me
          paani bhar gaya. Ya katai ke baad khet me sookh rahi fasal 14 din ke andar bemausam baarish me
          bheeg gayi. Yahan claim tabhi banega jab <strong>aap khud 72 ghante ke andar</strong> nuksan ki
          intimation do. Isi rule par agla section hai, kyunki claim reject hone ki list me sabse upar yahi
          hai.
        </p>

        <SH>72 Ghante Ka Rule. Jahan Sabse Zyada Claim Marte Hain</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Nuksan hua. Ab ghadi shuru ho gayi. 72 ghante ke andar in me se kisi ek jagah intimation deni hai:
        </p>
        <StepList>
          <SI n={1}><strong>14447 par call</strong> sabse tez. Naam, policy/application number, gaon, fasal aur nuksan ki wajah batao. Complaint ka reference number likh lo.</SI>
          <SI n={2}><strong>Crop Insurance app</strong>, &ldquo;Report Crop Loss&rdquo; section. Photo bhi laga sakte ho, jo baad me survey me kaam aati hai.</SI>
          <SI n={3}><strong>Insurance company ki helpline</strong>, policy document par number likha hota hai.</SI>
          <SI n={4}><strong>Bank branch ya krishi vibhag</strong>, likhit application, jiski ek copy par receiving lekar apne paas rakho.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Intimation ke baad insurance company ko 48 ghante me acknowledge karna hota hai, aur survey aam
          taur par 10 din ke andar hona chahiye. Survey ke waqt khet par maujood rehne ki koshish karo —
          surveyor ke saath nuksan khud dikhana hamesha behtar hai. Bhiwani ke ek kisan ka claim sirf isliye
          aadha reh gaya tha ki survey ke din wo shahar me tha aur padosi ne aadha-adhura khet dikhaya.
        </p>

        <WB>
          72 ghante nikalne ke baad ki intimation ko insurer thukra sakta hai. Chahe nuksan kitna bhi asli
          ho. Nuksan dikhte hi report karo, saboot (photo, video, akhbaar ki kating) baad me jodte raho.
        </WB>

        <SH>Status Screen Par Kya-Kya Likha Aata Hai. Matlab Samjho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Portal ya app par status ek line me dikhta hai, par us line ka matlab samajhna zaroori hai —
          warna har hafte check karke bhi kuch haath nahi aata:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-[var(--color-border)] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-bg-alt)] text-left">
                <th className="p-3 font-black text-[var(--color-text)]">Status</th>
                <th className="p-3 font-black text-[var(--color-text)]">Iska matlab + aapka kadam</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-muted)]">
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3 font-semibold">Under Processing</td>
                <td className="p-3">Application system me hai, abhi assessment baaki. Widespread case me CCE data ka intezaar chal raha hota hai. Yahan sabr ke alawa kuch nahi karna.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <td className="p-3 font-semibold">Survey Pending</td>
                <td className="p-3">Localized intimation register ho gayi, surveyor aana baaki hai. 10 din se zyada ho jayein to 14447 par reference number ke saath poochho.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3 font-semibold">Claim Approved</td>
                <td className="p-3">Raqam tay ho gayi. Ab paisa DBT se aana hai. Apne khaate ki NPCI seeding aaj hi check kar lo, wahi aakhri atkav hota hai.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <td className="p-3 font-semibold">Payment Initiated / Credited</td>
                <td className="p-3">Transfer chal gaya. 4-5 din me khaate me na dikhe to passbook update karwa kar bank se UTR number poochho.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3 font-semibold">Rejected</td>
                <td className="p-3">Wajah likhit me maango — ye aapka haq hai. Neeche wali rejection list se milao aur complaint ke raste par badho.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek aadat bana lo, jab bhi status dekho, <strong>screenshot le lo tareekh ke saath</strong>.
          Status badalta hai, aur pichhla screenshot hi saboot hota hai ki approval kab dikha tha. Complaint
          ke waqt yahi kaagaz sabse pehle kaam aata hai.
        </p>

        <SH>Claim Reject Kyun Hota Hai. 5 Asli Wajah</SH>
        <StepList>
          <SI n={1}><strong>Late intimation</strong>, localized nuksan me 72 ghante ki window miss. Rejection ki wajah number ek.</SI>
          <SI n={2}><strong>Fasal ya area notified nahi</strong>, premium kat gaya, par jo fasal boyi wo us block ke liye notified list me thi hi nahi. Enrollment ke waqt hi ye check hona chahiye tha.</SI>
          <SI n={3}><strong>Boyi fasal aur bima wali fasal alag</strong>, bank ne KCC ke saath gehu ka bima kar diya, kisan ne sarson boyi. Survey me pakda jaata hai, claim zero.</SI>
          <SI n={4}><strong>Bank record ki galti</strong>. Aadhaar mismatch, galat khasra number, premium late remit hona. In me se kai galtiyan bank ki hoti hain, aur rules ke hisaab se aisi galti ka nuksan bank ko bharna padta hai. Likhit complaint karo.</SI>
          <SI n={5}><strong>Yield guarantee se upar</strong> widespread wale raaste me agar CCE ka yield threshold se upar aaya, to claim banta hi nahi. Ye rejection nahi, scheme ka design hai. Bima nuksan ka hai, har saal milne wala bonus nahi.</SI>
        </StepList>

        <SH>Kitne Din Me Paisa Aana Chahiye</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Rules ke hisaab se yield data final hone ke baad claim lagbhag <strong>2 mahine me settle</strong>{' '}
          hona chahiye. Kharif 2024 se laagu revamped guidelines me der par insurer ya state ko{' '}
          <strong>12% penalty</strong> ka provision hai. Isliye pichhle seasons ke muqable payment tez hui
          hai. Localized claims (survey wale) isse pehle bhi nikal jaate hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Zameen ki haqeeqat thodi alag hai. State agar CCE data der se bheje, to poora settlement wahin atka
          rehta hai. Kisan ki koi galti na hote hue bhi 3 se 6 mahine lag jaate hain. Isliye ek seedha usool:{' '}
          <strong>katai ke 2 mahine baad bhi paisa na aaye to chup mat baitho.</strong> Neeche wala complaint
          ka rasta pakdo.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur haan, paisa DBT se Aadhaar-linked khaate me aata hai. Status me &ldquo;claim approved&rdquo;
          ya &ldquo;payment initiated&rdquo; dikhe aur khaate me kuch na aaye, to dikkat aksar NPCI seeding
          ki hoti hai. Ye wahi seeding hai jo PM Kisan ki kist rokti hai —{' '}
          <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline font-bold">payment failed
          fix wali guide</Link> me isko theek karne ka poora tareeka likha hai.
        </p>

        <SH>Complaint Ka Rasta. Seedhi Se Seedhi Tak</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Har seedhi par application number, policy copy, intimation ka saboot aur pichhli baat-cheet ka
          record saath rakho. Bina record ke complaint sirf shikayat hai; record ke saath wo case hai.
        </p>
        <StepList>
          <SI n={1}><strong>Insurance company</strong>, policy par likhi toll-free par call, phir district office me likhit complaint. 7-10 din ka waqt do.</SI>
          <SI n={2}><strong>14447 / Krishi Rakshak portal</strong>, grievance register karo, ticket number lo. Ye record system me pakka ho jaata hai.</SI>
          <SI n={3}><strong>District Grievance Redressal</strong> — district agriculture officer ke naam likhit application. DLMC (District Level Monitoring Committee) PMFBY ki nigraani karti hai.</SI>
          <SI n={4}><strong>State level / SLCCCI</strong>, district se hal na nikle to state krishi vibhag. Apne state ke sahi officer ka pata{' '}
            <Link href="/articles/PmKisanStateNodalOfficerList" className="underline">nodal officer list</Link> jaisi official directories se karo.</SI>
        </StepList>

        <DB>
          Kisi bhi &ldquo;claim jaldi dilwane wale&rdquo; agent ko paise mat do. Na status check ka koi
          charge hai, na complaint ka. Jo site ya aadmi &ldquo;fasal bima list me naam dekho, ₹99 do&rdquo;
          bole. Wo fraud hai. Official raaste sirf pmfby.gov.in, Crop Insurance app aur 14447 hain.
        </DB>

        <SH>Loanee Aur Non-Loanee. Status Me Farak Yahan Padta Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Loanee kisan</strong>, jinka KCC ya crop loan chal raha hai. Unka bima aksar bank
          ne khud kiya hota hai, premium loan account se kat kar. Aise kisano ke paas na receipt hoti hai
          na policy number, isliye status check ka pehla kadam hi bank branch hai: passbook me premium
          katne ki entry dikhao aur application number likhwa lo. Ye number mil gaya to aage sab kuch
          portal se ghar baithe hota hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Non-loanee kisan</strong>, jinhone CSC ya portal se khud enrollment kiya, unke paas
          receipt/SMS pehle din se hota hai, unka status check seedha hai. Par unki ek alag dikkat hoti
          hai: enrollment ke waqt khasra number ya fasal galat bhar gayi to claim ke waqt hi pata chalta
          hai. Isliye season ke shuru me hi portal par apni policy kholkar fasal, rakba aur khasra ek baar
          milaa lo, galti abhi dikhegi to insurance company se sudhrwai ja sakti hai, katai ke baad nahi.
        </p>

        <SH>WBCIS Wala Note. Agar Aapka Bima Mausam-Aadharit Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kuch states kuch faslon par PMFBY ki jagah WBCIS (Weather Based Crop Insurance Scheme) chalati
          hain. Isme claim ka hisaab weather station ke data se hota hai. Baarish kam hui, temperature seema
          se bahar gaya, to formula se payout apne aap banta hai. Na survey, na 72 ghante ki bhaag-daud.
          Status usi National Crop Insurance Portal par dikhta hai. Aapki policy kaunsi hai, ye policy
          document ke upar hi likha hota hai. Pehle wo dekh lo, warna galat process ke peeche bhaagte
          rahoge.
        </p>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Policy abhi tak li hi nahi hai, ya agle season ke liye soch rahe ho? Premium ka hisaab pehle laga
          lo, <Link href="/calculator/pmfby-premium" className="underline font-bold">fasal bima premium
          calculator</Link> se 2 minute me andaza mil jaata hai, aur enrollment ka poora process{' '}
          <Link href="/articles/PmfbyCropInsurance2026" className="underline font-bold">PMFBY guide</Link> me
          hai.
        </p>

        <FAQBlock faqs={FAQS_DATA} variant="inline" />

        <SH>Jaankari Ke Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            PMFBY. National Crop Insurance Portal, Ministry of Agriculture &amp; Farmers Welfare.{' '}
            <a href="https://pmfby.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pmfby.gov.in</a>
          </li>
          <li>
            Krishi Rakshak Portal &amp; Helpline (KRPH), 14447.
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modified} bioKey="FasalBimaClaimStatusCheck" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Aur Guides Padhein' },
          { href: '/articles/category/farming', l: 'Kheti Aur Yojana Articles' },
        ]} />
        <Disclaimer k="FasalBimaClaimStatusCheck" />
      </div>
    </>
  );
}
