import Link from 'next/link';
import { SI, StepList, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-08-18T15:05:50+05:30';
const MODIFIED = '2026-08-20T10:53:58+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Ka Full Form & Matlab' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed, 7 Fixes' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Mein Naam Check' },
];

const FAQS_DATA = [
  {
    q: 'FTO is Generated ke baad paisa kab aata hai?',
    a: 'Koi official timeline nahi hai. Lekin zyadatar kisano ko FTO banne ke baad kuch hi dino mein DBT se credit mil jata hai. Har bank apni internal processing apni raftar se karta hai, isliye ek hi gaon mein kisi ko pehle aur kisi ko baad mein aana normal hai. Practical rule: 15 din tak intezaar karo, uske baad hi kuch karne ki zaroorat hai.',
  },
  {
    q: 'FTO generate ho gaya lekin 15 din baad bhi paisa nahi aaya, ab kya karein?',
    a: 'Pehle bank jakar do cheezein verify karao: account active hai aur NPCI Aadhaar seeding hui hai. Phir pmkisan.gov.in par payment status dekho, "Payment Failed" dikhe to wajah wahi likhi hogi. Fail hui payment wajah theek karne ke baad agli batch mein dobara process hoti hai.',
  },
  {
    q: 'Paisa aa gaya ya nahi. Bina bank jaye kaise pata karein?',
    a: 'Char tarike hain: (1) bank ka SMS. Lekin SMS aana guaranteed nahi hai, mobile number bank record mein purana ho to SMS kahin aur jayega; (2) bank ke missed-call balance number par call karke; (3) UPI app (PhonePe/Google Pay/BHIM) mein balance check karke; (4) gaon ke CSC ya banking correspondent ke paas AePS se, angutha lagakar balance nikal aata hai. Bank ki line mein lagna aakhri option rakho.',
  },
  {
    q: 'Kya FTO cancel bhi ho sakta hai?',
    a: 'FTO khud cancel nahi hota, lekin usme shaamil individual payment fail ho sakti hai. Account band, NPCI mapping missing, ya naam mismatch par. Fail hui payment ka status "Payment Failed" dikhta hai aur wajah theek karne ke baad wo agli batch ke FTO mein dobara chali jaati hai. Aapko naya form nahi bharna padta.',
  },
];

export default function FtoStatusCheckPaisaKabAayega({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">FTO Status Check</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            FTO Status Check 2026: FTO Generated Ke Baad Paisa Kab Aata Hai?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          <strong>Seedha jawab pehle:</strong> FTO (Fund Transfer Order) generate hone ke baad paisa aam taur par <strong>kuch hi dino mein</strong> account mein aa jata hai, lekin iska koi official sarkari timeline nahi hai. &quot;SBI mein 8 din, Post Office mein 25 din&quot; jaise pakke numbers jo internet par milte hain, unka koi sarkari source nahi hota. Is page par sirf wahi hai jo pakka hai. Aur ek practical 15-din rule jo kaam karta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Agar aap ye samajhna chahte ho ki FTO hota kya hai aur status page ki har line ka matlab kya hai, to wo alag guide mein detail se likha hai: <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline font-medium">FTO Ka Full Form &amp; FTO Generated Ka Matlab</Link>. Ye page uska agla step hai. Order ban gaya, ab paisa kab aur na aaye to kya karna hai.
        </p>

        <WB>
          <strong>15-din rule:</strong> FTO Generated dikhne ke baad 15 din tak kuch mat karo, process normal chal raha hai. 15 din baad bhi credit nahi aaya, tabhi neeche wala checklist shuru karo.
        </WB>

        <section className="mb-8 mt-8">
          <SH>&quot;FTO Will Be Generated&quot; vs &quot;FTO Is Generated&quot;. Fark Samjho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Status page par ye do lines sabse zyada confuse karti hain:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status Line</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Aapko Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">FTO will be generated</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Record verify ho gaya, order banne ki queue mein hai</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">Kuch nahi. Wait karo</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">FTO is generated</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Payment order ban gaya, paisa transfer pipeline mein hai</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">15 din tak wait karo</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Payment Success / Credited</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Paisa account mein pahunch gaya</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">Passbook/SMS check karo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Dono hi statuses ka matlab hai ki aapki taraf se sab theek hai. Ghabrane wali line sirf ek hai. &quot;Payment Failed&quot;. Aur uska bhi ilaaj hai, neeche padho.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paisa Aane Ka Asli Process — DBT Kaise Kaam Karta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            FTO banne ke baad paisa DBT (Direct Benefit Transfer) se aapke <strong>Aadhaar-linked bank account</strong> mein seedha credit hota hai. NPCI mapping ke through. Isliye passbook par &quot;Aadhaar seeded&quot; likha hona kaafi nahi; NPCI mapping alag cheez hai aur wahi decide karti hai ki paisa kis account mein jayega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Har bank apni internal batch processing apne schedule par karta hai. Isliye release wale din kisi ko turant credit milta hai aur kisi ko hafta lag jata hai. Dono normal hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kist Release Se Credit Tak. Poora Safar Ek Nazar Mein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Paisa aapke khaate tak 5 padaav se hokar aata hai. Ye samajh lo to har status line ka
            matlab khud samajh aa jata hai:
          </p>
          <StepList>
            <SI n={1}><strong>Release announcement:</strong> sarkar kist release karti hai. Ye din
            news mein aata hai. Lekin iska matlab ye nahi ki usi din sabke khaate mein paisa gir
            gaya.</SI>
            <SI n={2}><strong>Beneficiary validation:</strong> aapka record check hota hai. EKYC done?
            Land seeding done? NPCI mapping active? Teeno clear to aap batch mein shaamil ho.</SI>
            <SI n={3}><strong>FTO generation:</strong> state/district-wise batch mein Fund Transfer
            Order banta hai. Yahi wo status hai jo aap dekh rahe ho.</SI>
            <SI n={4}><strong>Bank processing:</strong> FTO ke against paisa NPCI ke raste aapke
            Aadhaar-mapped account mein bheja jata hai. Har bank apni raftar se. Yahi wo hissa hai
            jahan din-do-din ka fark aata hai.</SI>
            <SI n={5}><strong>Credit + SMS:</strong> paisa account mein girta hai; SMS tabhi aata hai
            jab bank ke paas aapka chalu number ho.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Dhyan do, aap padaav 2 tak ka kaam khud kar sakte ho (eKYC, seeding, NPCI). Padaav 3
            se 5 tak sirf system chalta hai; wahan aapke kuch karne se raftar nahi badalti.
          </p>
        </section>

        <section className="mb-8">
          <SH>Status Dekhne Ka Sahi Tarika. Sirf Official Portal Se</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye status sirf ek hi jagah dikhta hai. <strong>pmkisan.gov.in</strong> ke &quot;Know
            Your Status&quot; page par. Registration number daalo, OTP se verify karo, aur poora
            record khul jata hai: eKYC, land seeding, bank linking aur payment ka har status ek
            saath. Registration number yaad nahi? Usi page par &quot;Know your Registration
            Number&quot; ka link hai. Mobile number ya Aadhaar se nikal aata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Do warnings, dono zaroori. Pehli: koi bhi doosri website ya app jo ye status dikhane
            ke naam par paise maange, OTP maange, ya &quot;processing fees&quot; ki baat kare. Wo
            fraud hai. Sarkari portal par status check hamesha free hai. Doosri: YouTube ya WhatsApp
            par chalne wale &quot;aaj raat 12 baje sabke khaate me paisa&quot; wale video ka status
            page se koi lena-dena nahi. Bharosa sirf portal ki apni screen par karo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Ek aur kaam ki baat: status page ka screenshot le kar rakh lo, khaas kar jab usme
            koi problem dikhe. Baad me helpline ya bank se baat karte waqt wahi screenshot aapki
            baat ka saboot ban jata hai. &quot;status me aisa likha tha&quot; kehne se zyada
            asar dikhane se hota hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>15 Din Baad Bhi Paisa Nahi Aaya. Ye 4 Kaam Karo</SH>
          <StepList>
            <SI n={1}><strong>Payment status dekho:</strong> pmkisan.gov.in → Know Your Status. &quot;Payment Failed&quot; likha hai to wajah bhi wahi dikhegi — <Link href="/articles/PmKisanPaymentFailedFix2026" className="text-[var(--color-primary)] underline">7 common wajah aur fix yahan</Link>.</SI>
            <SI n={2}><strong>Bank mein NPCI seeding verify karao:</strong> branch jakar poochho ki DBT ke liye Aadhaar mapping active hai ya nahi. Ye sabse badi wajah hai atki payment ki.</SI>
            <SI n={3}><strong>Account active hai ya nahi:</strong> lambe time se use na hua account inoperative ho jata hai. RBI rule ke hisaab se 2 saal bina transaction par. Branch se KYC update + reactivation karao (free hai).</SI>
            <SI n={4}><strong>Naam ki spelling match karo:</strong> PM Kisan registration aur bank record mein naam alag hai to payment reject hoti hai. Dono jagah ek jaisa karwao.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Wajah theek hone ke baad fail hui payment agli batch mein dobara process hoti hai. Alag se kuch apply nahi karna padta. 30 din se zyada ho gaye to escalation ka poora rasta <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline">FTO guide ke escalation section</Link> mein hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Credit Aaya Ya Nahi. Bina Bank Jaye 4 Tarike</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse mehngi galti hai roz bank ki line mein lagna. Kist ke season mein branch waale bhi
            pareshan hote hain aur aap bhi, kiraya aur dihaadi dono jaati hai. Pehle ye 4 tarike
            aazmao:
          </p>
          <StepList>
            <SI n={1}><strong>Bank ka missed-call balance number:</strong> har bade bank ka ek missed-call
            number hota hai (SBI, PNB, BOB sabka), registered mobile se call karo, SMS mein balance
            aa jata hai. Bilkul free.</SI>
            <SI n={2}><strong>UPI app se balance:</strong> PhonePe / Google Pay / BHIM mein account linked
            hai to balance wahi dikh jata hai. ₹2,000 ka fark turant pakad mein aata hai.</SI>
            <SI n={3}><strong>CSC / banking correspondent par AePS:</strong> gaon ke CSC par angutha
            lagakar Aadhaar-enabled balance enquiry ho jaati hai. Balance enquiry free honi chahiye —
            koi iske paise mange to galat hai.</SI>
            <SI n={4}><strong>SMS ka intezaar. Par bharosa mat karo:</strong> credit ka SMS tabhi aata
            hai jab bank record mein aapka chalu number ho. SMS na aana paisa na aane ka saboot nahi
            hai. Number purana hai to branch mein update karwao, aage ki har kist ke liye kaam
            aayega.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Padosi Ko Aa Gaya, Mujhe Nahi. Batch Ka Logic</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kist release hone par paisa ek saath sabko nahi jata. FTO state aur district ke hisaab se
            <strong> batches</strong> mein banta hai, aur har batch alag din process hoti hai. Uske baad
            har bank apni raftar se credit karta hai. Matlab ek hi gaon mein, ek hi din registration
            karwaye do bhai, alag-alag din paisa dekh sakte hain. Ye na system ki galti hai, na aapke
            record ki.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Chinta ki baat sirf tab hai jab aapke status mein koi verification pending dikhe, eKYC,
            land seeding ya NPCI. Wo teeno clear hain aur FTO Generated likha hai, to aapka paisa
            pipeline mein hai; batch ka number aane par credit ho jayega. Teeno mein se koi pending hai
            to <Link href="/articles/PmKisanMasterGuide2026" className="text-[var(--color-primary)] underline">Master Guide ka checklist</Link> pakdo, wahi pehle theek karna hoga.
          </p>
        </section>

        <section className="mb-8">
          <SH>eKYC Pending Hai To FTO Banega Hi Nahi. Ghar Baithe Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek galatfehmi bahut aam hai: log FTO ka wait karte rehte hain jabki unke status me eKYC
            pending likha hota hai. Saaf baat, <strong>jab tak eKYC complete nahi, aapka naam batch
            me jayega hi nahi</strong>, aur FTO kabhi generate nahi hoga. Wait karna yahan time barbaad
            karna hai; pehle eKYC nipta lo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Aur iske liye CSC ki line me lagna zaroori nahi. Official <strong>PMKisan app</strong> me
            Face Authentication ka option hai — chehra scan karke eKYC ho jati hai, OTP ki zaroorat
            bhi nahi (un buzurgon ke liye sabse kaam ki cheez jinke Aadhaar me mobile number link
            nahi hai). Do app chahiye hoti hain: PMKisan aur <strong>AadhaarFaceRD</strong> (publisher
            UIDAI). Dono Play Store se. AadhaarFaceRD install karke kholni nahi hoti, wo background
            me chalti hai. Poora step-by-step process aur common errors ka ilaaj{' '}
            <Link href="/articles/PmKisanFaceAuthenticationEkyc" className="text-[var(--color-primary)] underline">Face Authentication eKYC guide</Link> me hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>30 Din Se Zyada Ho Gaye. Shikayat Ka Seedha Rasta</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Upar wala 4-kaam checklist kar liya, sab clear hai, phir bhi mahina nikal gaya? Ab
            shikayat register karne ka waqt hai. Aur iske do free raste hain:
          </p>
          <StepList>
            <SI n={1}><strong>Helpline 155261 ya 011-24300606:</strong> call se pehle Aadhaar number,
            registration number aur bank details saamne rakh lo, operator shuru me yahi poochta
            hai. Problem note karwa kar complaint number zaroor maango.</SI>
            <SI n={2}><strong>pmkisan.gov.in ka Help Desk:</strong> portal ke Help Desk / Grievance
            section me registration number aur problem likh kar submit karo. Badle me ticket number
            milta hai jise baad me track kar sakte ho, phone par baat bhoolne ka jhanjhat nahi.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Complaint number ya ticket number mile to use kahin likh kar rakho, agli baar call
            karne par wahi number batane se puri kahani dobara sunani nahi padti, aur follow-up
            usi reference par aage badhta hai. Aur agar helpline se bhi hafton tak kuch na nikle,
            to teesra rasta bacha hai: apne state ke nodal officer ko likhna. Har state ka apna
            nodal officer hota hai jo PM Kisan ke atke cases dekhta hai. Kis state me kaun hai
            aur kaise contact karna hai, iski poori list{' '}
            <Link href="/articles/PmKisanStateNodalOfficerList" className="text-[var(--color-primary)] underline">Nodal Officer guide</Link> me di hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Timing ka context bhi samajh lo: 23vi kist 20 June 2026 ko aayi thi, aur 24vi ke liye news
            me October 2026 chal raha hai, official date abhi notify nahi hui. Matlab do kisto ke
            beech 3–4 mahine ka gap normal hai. Agar aapki pichhli kist aa chuki hai aur agli ka
            intezaar hai, to wo FTO ka issue nahi, release cycle ka hissa hai. Shikayat ki zaroorat
            sirf tab hai jab release ho chuki kist aapke account tak na pahunchi ho.
          </p>
        </section>

        <section className="mb-8">
          <SH>Fraud Se Bacho</SH>
          <DB>
            <strong>Yaad rakho:</strong> FTO status check bilkul free hai. Sirf pmkisan.gov.in par. Koi app, website ya aadmi jo &quot;jaldi payment&quot; ya status ke naam par paise mange, wo 100% fraud hai. Paisa dekar FTO jaldi banne ka koi system exist nahi karta.
          </DB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            FTO Status Ke Common Sawaal
          </h2>
          <FAQBlock faqs={FAQS_DATA} variant="inline" caption="FTO Status Check 2026. FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Apna FTO Status Yahan Check Karo"
          guide="FTO Ka Matlab. Complete Guide"
          guideHref="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="FtoStatusCheckPaisaKabAayega" />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: 'FTO Ka Matlab' },
          { href: '/articles/PmKisanPaymentFailedFix2026', l: 'Payment Failed Fix' },
          { href: '/articles/PmKisan25viKist2027', l: '25vi Kist Guide' },
        ]} />
        <Disclaimer k="FtoStatusCheckPaisaKabAayega" />
      </div>
    </>
  );
}
