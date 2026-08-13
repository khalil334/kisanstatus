import Image from "next/image";
import Link from "next/link";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import { AuthorBox, FAQBlock, fmtDate } from "@/components/ArticleShared";
import { AUTHOR_NAME, AUTHOR_URL } from "@/lib/site-config";

const PUBLISHED = "2026-07-24";
const MODIFIED = "2026-08-08";

const FAQS_DATA = [
  {
    q: "PM Kisan Maandhan status online kaise check karein?",
    a: "pmkmy.gov.in pe jakar apna registered mobile number ya KPAN no. daaliye. OTP verify kijiye. Dashboard pe aapka status, contribution history, aur pension card sab dikhega.",
  },
  {
    q: "Maandhan pension card kaise download karein?",
    a: "Login karne ke baad Download KPAN Card option pe click karein. PDF format mein card download ho jayega. Isko print karke apne paas sambhal kar rakhein.",
  },
  {
    q: "Contribution history mobile se kaise dekhein?",
    a: "Mobile browser mein pmkmy.gov.in kholein. Login karke Contribution History ya Passbook section mein jayein. Har mahine ka record dikhega — success, failed, ya pending.",
  },
  {
    q: "Payment diya tha par history mein nahi dikh raha — kya karein?",
    a: "Ek hafta wait karein — record update hone mein time lagta hai. Uske baad bhi na dikhe toh receipt lekar usi CSC center jayein jahan payment kiya tha, aur wahan se solve na ho toh upar bataye escalation order (CSC → portal grievance → LIC branch) follow karein. Payment ka proof kabhi delete na karein.",
  },
  {
    q: "Portal nahi khul raha toh kya karein?",
    a: "Peak hours mein server slow hota hai. Raat ya subah try karein. Agar 2-3 din se nahi khul raha, toh apne nazdeeki CSC center jakar status verify karwayein. CSC operator ke paas special access hota hai jo directly LIC system se connected hai.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://kisanstatus.com/maandhan/pm-kisan-maandhan-status-check-online/#article",
      "headline": "PM Kisan Maandhan Status Check Online: Pension Card, Passbook, Contribution History",
      "description": "PM Kisan Maandhan Yojana mein apna status kaise verify kijiye. Pension card download, passbook check, contribution history aur missed payment ka pura process.",
      "author": { "@type": "Person", "name": AUTHOR_NAME, "url": AUTHOR_URL },
      "publisher": { "@type": "Organization", "name": "KisanStatus.com", "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.webp" } },
      "datePublished": PUBLISHED,
      "dateModified": MODIFIED,
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://kisanstatus.com/maandhan/pm-kisan-maandhan-status-check-online/" }
    }
  ]
};

export default function PmKisanMaandhanStatusCheckOnline() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 not-prose">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/maandhan" className="hover:text-blue-600">Maandhan Yojana</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Status Check Online</span>
      </nav>

      <Image
        src="/images/articles/maandhan/status-check-portal-hero.webp"
        alt="Farmer using smartphone to check PM Kisan Maandhan status on official portal"
        width={1200}
        height={630}
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        PM Kisan Maandhan Status Check Online: Pension Card, Passbook, Contribution History
      </h1>

      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6 not-prose">
        <span><Link href="/about" className="underline hover:text-gray-700">{AUTHOR_NAME}</Link></span>
        <span>Published: {fmtDate(PUBLISHED)}</span>
        <span>Update: {fmtDate(MODIFIED)}</span>
      </div>

      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Aksar yahi hota hai:</strong> registration kar liya, CSC wale ne kaha ke ho gaya sab. Lekin ab pata kaise chalega ke aapka naam sach mein list mein aaya hai ya nahi? Pension card kaise milega? Kitna contribution jama hua hai? Yeh guide un farmers ke liye hai jo apna status ghar baithe mobile se dekh karna chahte hain.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        PM Kisan Maandhan Yojana mein enroll karne ke baad sabse zaroori kaam hai apna progress track karna. Kai kisanon ko yeh pata hi nahi hota ke unka account active hai ya nahi, contribution time par jaa raha hai ya miss ho raha hai, aur unka KPAN card kahan se download hoga. Official portal pmkmy.gov.in aur maandhan.in pe yeh sab information available hai, lekin interface thoda technical hai. Isliye kai farmers CSC center wale par depend reh jate hain, jabki ghar baithe 5 minute mein hi sab kuch verify ho sakta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Neeche main aapko step-by-step bataunga ke mobile se status kaise verify kijiye, KPAN pension card kaise download kijiye, contribution history kaise dekhein, aur agar koi payment miss hui ho toh uska pata kaise lagayein. Saath hi yeh bhi bataya hai ke jab online portal kaam nahi karta, toh CSC center se kya-kya karwa sakte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Status Check Karne Se Pehle Kya-Kya Tayyar Rakhein
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Portal pe login karne se pehle kuch cheezein apne paas honi chahiye. Agar yeh nahi hain, toh aap check nahi kar paoge.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Zaroori Cheezein</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">1.</span>
            <span><strong>Registered Mobile Number:</strong> Wohi number jo enrollment ke waqt diya tha. Ispe OTP aayega. Agar number change ho gaya hai, toh purane no. se hi OTP ayega ya phir CSC se update karwana hoga.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">2.</span>
            <span><strong>KPAN Number (Kisan Pension Account Number):</strong> Enrollment ke baad generate hota hai. Agar pata hai toh direct login ho jayega. Nahi hai toh mobile no. se bhi kaam chal jayega.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">3.</span>
            <span><strong>Aadhaar Number:</strong> Kuch cases mein Aadhaar se bhi status verify ho sakta hai, lekin mobile no. sabse reliable hai.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">4.</span>
            <span><strong>Stable Internet:</strong> Portal thoda heavy hai. 4G ya WiFi connection achha hona chahiye. 2G pe shayad load na ho.</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        KPAN yaad nahi? Koi baat nahi — mobile number se hi aapka poora record aa jata hai. KPAN basically aapka pension account number hai — jaise bank mein account number hota hai. Enrollment complete hone ke baad yeh generate hota hai aur registered mobile number par SMS ke zariye bata diya jata hai.
      </p>

      <Image
        src="/images/articles/maandhan/kpan-card-sample.webp"
        alt="Sample PM Kisan Maandhan KPAN pension card showing account details and farmer information"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Mobile Se Status Check Karne Ka Step-by-Step Process
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Main aapko mobile browser se dekh karne ka tareeqa bata raha hoon. Laptop pe bhi same process hai, bas screen badi hoti hai. Mobile pe sabse aasan hai kyunki har kisan ke paas phone hota hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Browser Kholein aur Official Portal Pe Jayein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Apne phone ka Chrome ya Safari browser kholein. Address bar mein type kijiye pmkmy.gov.in ya maandhan.in aur enter kijiye. Official portal khulega. Dhyan rahe — fake websites se bachein. URL sahi check kijiye. Portal ka jo official look hai usmein government of India ka logo aur LIC ka reference dikhega.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Know Your Status Pe Click Karein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Home page pe aapko Know Your Status ya Track Application jaisa option dikhega. Kuch portals mein yeh Beneficiary Login ke naam se bhi hota hai. Uspe click karein. Agar Hindi interface chahiye, toh language selector se Hindi choose kar lein.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Mobile Number Ya KPAN Dalein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Ab aapke saamne ek form aayega. Usme apna registered mobile ya KPAN no. daalein. Mobile number zyada aasan rehta hai kyunki KPAN yaad rakhna mushkil hai. Number daalne ke baad Get OTP pe click karein.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">OTP Se Verify Karein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Aapke mobile pe ek 6-digit OTP aayega. Us OTP ko box mein daal kar Verify karein. OTP kuch minuton mein expire ho jata hai, jaldi daaliye. Agar OTP nahi aata, toh Resend OTP pe click karein. Network issue ho sakta hai — thoda wait karein.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Dashboard Dekhein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Verify hone ke baad aapka dashboard khulega. Yahan aapko apna naam, KPAN number, registration date, contribution status, aur account status dikhega. Sab kuch green tick mein hona chahiye. Agar kuch red ya yellow dikhta hai, toh neeche bataye gaye steps follow karein.</p>
          </div>
        </div>
      </div>

      <Image
        src="/images/articles/maandhan/mobile-status-check-steps.webp"
        alt="Step by step mobile screenshots showing PM Kisan Maandhan portal login and status verify process"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Dashboard Pe Kya-Kya Dikhta Hai? Har Section Ka Matlab
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dashboard khulne ke baad kai sections dikhte hain. Har section ka alag matlab hota hai. Main har section ko simple bhasha mein samjha raha hoon.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Section</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Kya Dikhta Hai</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Matlab</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Account Status</td>
              <td className="py-3 px-4">Active / Inactive / Default / Dormant</td>
              <td className="py-3 px-4"><span className="text-green-600 font-semibold">Active</span> = sab theek. <span className="text-red-600 font-semibold">Default</span> = payment miss hui hai. <span className="text-gray-500 font-semibold">Dormant</span> = 6+ mahine se payment nahi gayi.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Total Contribution</td>
              <td className="py-3 px-4">Rs. amount</td>
              <td className="py-3 px-4">Aapne aaj tak kitna jama kiya hai. Government ka matching share alag se dikhta hai.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Next Due Date</td>
              <td className="py-3 px-4">Date</td>
              <td className="py-3 px-4">Agla share kab due hai. Auto-debit active hai toh payment cycle dates (1st, 11th, 21st) pe kat jayega.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Contribution History</td>
              <td className="py-3 px-4">Month-wise list</td>
              <td className="py-3 px-4">Har mahine ka record — kab kitna gaya, kab fail hua, kab successful hua.</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-medium">KPAN Card</td>
              <td className="py-3 px-4">Download option</td>
              <td className="py-3 px-4">Aapka official pension card. PDF mein download karke print karwa lein.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aapka account status Inactive dikhta hai, toh iska matlab ho sakta hai ke aapka initial verification abhi pending hai. Enrollment ke baad CSC se data LIC ko T+1 basis pe transfer hota hai, uske baad verification process hota hai jismein kuch din lag sakte hain. Agar time zyada ho gaya hai, toh apne CSC center wale se contact karein ya <Link href="/articles/PmKisanStateNodalOfficerList" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">state nodal officer</Link> se baat karein.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Pension Card (KPAN) Download Kaise Karein
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        KPAN card aapka official identity proof hai PM Kisan Maandhan Yojana mein. Ispe aapka naam, photo, KPAN number, aur scheme details hoti hain. Isko download karna bahut zaroori hai kyunki future mein kisi bhi claim, correction, ya inquiry ke liye yeh card maanga jata hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dashboard pe Download KPAN Card ya Download Pension Card ka option dikhega. Uspe click karein. Card PDF format mein download ho jayega. PDF ko apne phone ke Files/Downloads folder mein save kar lein.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Baad mein kisi cyber cafe ya print shop pe jaakar print karwa lein. Color print karwana behtar hai kyunki official documents hamesha color mein hi maange jate hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aapke phone mein PDF open nahi ho raha, toh WhatsApp pe apne aapko bhej dein ya Google Drive mein upload kar lein. Baad mein kisi aur phone ya computer pe dekh lenge.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Ek aur important baat — KPAN number ko kisi diary mein likh kar rakhein. Phone kharab ho jaye ya number change ho jaye, toh bhi aapka pension account number haath mein hona chahiye. Iske bina status verify karna mushkil ho jata hai.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg mb-8 border border-yellow-200 dark:border-yellow-800 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>Important:</strong> KPAN card download karne ke baad uska ek photocopy nikaal kar rakh lein. Original card ko safe jagah rakhein. Aur KPAN number ko apne phone ke contacts mein Maandhan KPAN ke naam se save kar lein. Emergency mein kaam ayega.
        </p>
      </div>

      <Image
        src="/images/articles/maandhan/download-kpan-card-process.webp"
        alt="Mobile screen showing PM Kisan Maandhan KPAN pension card download button and PDF preview"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Contribution History Kaise Dekhein? Missed Payment Ka Pata Kaise Lagayein
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh sabse important section hai. Contribution history se pata chalta hai ke aapka paisa time par jaa raha hai ya nahi. Agar ek bhi mahine ka share miss ho gaya, toh aapka account default ho sakta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dashboard pe Contribution History ya Passbook pe click karein. Ek table khulegi jismein har mahine ka record hoga. Har entry ke aage status dikhega.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Status</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Matlab</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Kya Karein</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-semibold text-green-600">Success</td>
              <td className="py-3 px-4">Share successfully jama ho gaya</td>
              <td className="py-3 px-4">Kuch nahi, sab theek hai</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-semibold text-yellow-600">Pending</td>
              <td className="py-3 px-4">Process mein hai, abhi confirm nahi hua</td>
              <td className="py-3 px-4">Kuch din wait karein, phir dekh karein</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-semibold text-red-600">Failed / Bounced</td>
              <td className="py-3 px-4">Auto-debit fail ho gaya — balance nahi tha ya account issue tha</td>
              <td className="py-3 px-4"><strong>Der mat karo!</strong> CSC jakar manual payment karo</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-semibold text-gray-500">Not Available</td>
              <td className="py-3 px-4">Uss mahine ka record abhi generate nahi hua</td>
              <td className="py-3 px-4">Month end ya next month dekh karein</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Failed ya Bounced dikhe to panic wali baat nahi hai — lekin delay bhi mat karein. Usi hafte apne CSC center jayein aur manual payment jama karwayein.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek baar fail hone se account default nahi hota. Agle cycle mein LIC wahi demand dobara uthati hai — yeh cycles mahine ki 1, 11 aur 21 tareekh ko chalte hain. Lekin agar payment miss hone ke baad bhi contribution successfully raise nahi hoti aur outstanding rehti hai, toh account default status mein chala jata hai. Auto-debit baar-baar fail ho raha hai aur account regularize karna hai, toh iska poora process alag guide mein step-by-step likha hai: <Link href="/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Auto-Debit Fail Hone Par Regularization Kaise Karein</Link>.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Kabhi-kabhi portal slow hota hai aur contribution history update hone mein time lagta hai. Agar aapne payment diya hai aur kuch din baad bhi Success nahi dikhta, toh tension mat lo. Hafte bhar wait karein. Uske baad bhi nahi dikhta toh CSC center mein complaint karein ya official portal (maandhan.in / pmkmy.gov.in) par diya gaya helpline number use karein.
      </p>

      <Image
        src="/images/articles/maandhan/contribution-history-dashboard.webp"
        alt="PM Kisan Maandhan portal dashboard showing month wise contribution history with success and failed status"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Portal Nahi Khul Raha? Common Problems Aur Unke Solutions
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kai baar farmers kehte hain ke portal hi nahi khulta. OTP nahi aata. Ya login ho jata hai par dashboard blank dikhta hai. Yeh problems bahut common hain.
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">OTP nahi aa raha hai</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Pehle check karein ke wohi registered mobile daala hai jo enrollment ke waqt diya tha. Agar number change ho gaya hai, toh purane no. se hi OTP ayega. Network issue ho sakta hai — 2-3 minute wait karein. Resend OTP pe click karein. Agar phir bhi nahi aata, toh thodi der baad try karein. Peak hours mein server thoda busy ho sakta hai.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Login ho gaya par dashboard blank hai</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Yeh mostly internet speed ki problem hoti hai. Portal ka data load hone mein time lagta hai. 30 second wait karein. Agar nahi khulta, toh page refresh karein. Ya browser ka cache clear karke dubara try karein. Chrome mein Incognito mode mein try karein — wahan cache ka issue nahi hota.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Website hi nahi khul rahi — error aa raha hai</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Government portals kabhi-kabhi maintenance mein hote hain. Din ke peak hours mein traffic zyada hota hai, isliye raat ya subah try karna behtar rehta hai. Agar 2-3 din se nahi khul rahi, toh ho sakta hai server down ho. Tab CSC center jana hi best option hai.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mera naam hi nahi aa raha status mein</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Ho sakta hai aapka registration abhi process mein ho. CSC wale ne form toh bhar diya, par government ke server pe abhi upload nahi hua. Kuch din wait karein. Agar uske baad bhi nahi aata, toh CSC wale se poochhiye ke unhone aapka form successfully submit kiya tha ya nahi. Kabhi-kabhi form reject ho jata hai document issues ya bank account mismatch ki wajah se.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        CSC Center Se Status Check Karwana: Jab Online Na Chale
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Maan lijiye aapke gaon mein network hi nahi hai. Ya aapke phone mein internet nahi chal raha. Ya aapko online process samajh nahi aa raha. Toh koi tension ki baat nahi hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aap apne nazdeeki CSC center ja kar bhi apna status verify karwa sakte hain. CSC center le jayein apna Aadhaar card aur woh mobile number jo enrollment ke waqt diya tha.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        CSC operator ke paas government ka special login hota hai jo directly LIC ke system se connected hai. Woh aapka position verify kar ke bata dega. Aur agar koi contribution miss hua hai, toh wahan se hi manual payment bhi karwa sakte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        CSC center jaane ka ek aur faida — agar aapka KPAN card download nahi ho raha tha, toh CSC wala aapko print kar ke de dega. Kuch CSC centers mein print ke charges alag se lagte hain, poochh lein. Saath hi agar aapko koi correction karni hai — jaise mobile number change, bank account update, ya nominee change — toh woh bhi CSC pe hi hoti hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-8 border border-blue-200 dark:border-blue-800 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>Salah:</strong> Har 3 mahine mein ek baar apna status dekh lein — chahe online ho ya CSC center ja kar. Isse pata chalta rahega ke aapka account active hai ya nahi. Aur contribution history ko screenshot le kar apne phone mein save kar lein. Future mein koi dispute ho toh proof kaam ayega.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Complaint Kahan Karein? (Escalation Ka Sahi Order)
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Status galat dikh raha hai, payment diya par record nahi aaya, ya KPAN card mein galti hai — aisi situation mein idhar-udhar bhatakne ke bajaye is order mein escalate karein:
      </p>

      <div className="space-y-3 mb-6 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Step 1 — CSC center (jahan se enroll kiya tha):</strong> Enrollment aur payment ka pehla record wahi hota hai. Receipt/transaction ID saath le jayein. Zyada tar dikkat yahi solve ho jati hai.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Step 2 — Official helpline / portal grievance:</strong> <a href="https://maandhan.in" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline dark:text-blue-400">maandhan.in</a> ke Contact Us section mein current helpline number aur grievance ka rasta diya hota hai — number time ke saath badal sakta hai, isliye hamesha portal se hi lein. Complaint karte waqt KPAN number, registered mobile aur problem ki date saath mein batayein.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Step 3 — LIC branch:</strong> Pension fund LIC manage karti hai. Contribution jama hone ke baad bhi record mein na dikhe, toh nazdeeki LIC office mein KPAN aur payment proof ke saath written complaint dein aur acknowledgement lein.</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Har step par ek cheez common hai: <strong>proof sambhal kar rakhein</strong> — payment receipt, SMS, screenshot. Bina proof ke complaint sirf zubaani reh jati hai; proof ke saath usko track karna aur resolve karwana dono aasan ho jata hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Har 3 Mahine Mein Status Check Karna Kyun Zaroori Hai
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Main har kisan se kehta hoon ke maan ke chaliye aapka Maandhan account ek bank account jaisa hai. Jaise aap bank account ka balance check karte hain, waise hi Maandhan account ka bhi verify karna chahiye. Kyunki yahan bhi aapka paisa involved hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kai baar kisan sochte hain ke Registration ho gaya, ab toh bas 60 saal ka intezaar hai. Nahi, aise nahi chalta. Agar aapka share lagatar miss hota rahe, toh account default ho jayega. Aur default hone ke baad account dubara activate nahi hota automatically — aapko khud regularize karwana padta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Official guidelines ke hisaab se, agar 6 mahine tak payment nahi hoti, toh account dormant ho jata hai. Uske baad bhi 3 saal tak SMS alerts aate rehte hain aur aap account regularize kar sakte hain — poora outstanding amount + interest jama karke. 3 saal ke baad SMS alerts band ho jate hain, lekin regularize karne ka option tab bhi rehta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Isliye main kehta hoon — har 3 mahine mein ek baar status check karo. Bas 5 minute lagte hain. Mobile pe portal kholo, OTP daalo, dashboard dekho. Sab green dikha toh theek hai. Kuch red ya yellow dikha toh usi din action lo. Yeh 5 minute aapke future ki 3000 rupees monthly pension bacha sakte hain.
      </p>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg mb-8 border border-orange-200 dark:border-orange-800 not-prose">
        <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">Reminder Calendar</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-5">
          <li><strong>Har 3 mahine:</strong> Status check on pmkmy.gov.in</li>
          <li><strong>Har 6 mahine:</strong> KPAN card ka backup banayein (PDF ko alag jagah save karein)</li>
          <li><strong>Har saal:</strong> LIC se annual statement maangein aur apne records se match karein</li>
          <li><strong>Jab bhi mobile number change ho:</strong> Usi waqt portal pe update karein ya CSC center jayein</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Related Guides
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10 not-prose">
        <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">Registration 2026</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">CSC center, bank branch ya online — 3 tareeke se kaise apply karein. Documents ki puri list.</p>
        </Link>
        <Link href="/maandhan/pm-kisan-maandhan-auto-debit-poora-sach" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">Auto Debit Ka Sach</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">PM Kisan ke 2000 mein se share kyun kat raha hai? NACH mandate ka poora process.</p>
        </Link>
      </div>

      <ExternalLinkButton
        url="https://pmkmy.gov.in/"
        label="PM Kisan Maandhan Official Portal"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kisanon Ke Asli Sawal, Seedhe Jawab
      </h2>

      <div className="not-prose mb-8">
        <FAQBlock faqs={FAQS_DATA} variant="inline" />
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Sources & Disclaimer:</strong>
          Yeh article PM Kisan Maandhan Yojana ke official operational guidelines (DAC&FW, Ministry of Agriculture & Farmers Welfare) aur maandhan.in / pmkmy.gov.in portal ke data par based hai. Portal interface, URLs, aur processes time ke saath badal sakte hain. Hamesha official pmkmy.gov.in ya maandhan.in portal hi use karein. Kisi bhi third-party website pe apna OTP ya password share na karein. Sahayata ke liye official portal par diya gaya helpline number use karein. Last verified: {fmtDate(MODIFIED)}.
        </p>
      </div>

      <AuthorBox modified={MODIFIED} bioKey="PmKisanMaandhanStatusCheckOnline" />
    </article>
  );
}
