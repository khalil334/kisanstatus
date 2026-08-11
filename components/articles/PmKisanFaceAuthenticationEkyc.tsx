import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-07-01T13:47:00+05:30';
const MODIFIED = '2026-08-11T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanEkycOnline2026', title: 'Normal eKYC Guide', emoji: '🔐' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Fix', emoji: '💸' },
  { slug: 'PmKisanCscRegistrationCharges', title: 'CSC Registration', emoji: '🏪' },
];

const FAQS_DATA = [
  {
    q: 'Face authentication ke liye kaunsa app use karein?',
    a: 'Sirf official PMKisan app, aur uske saath AadhaarFaceRD app (dono Play Store par sarkari publisher se). Play Store par milte-julte naam ki koi third-party app dikhe toh usse door raho — wo aapka data chura sakti hain.',
  },
  {
    q: 'Bina OTP ke eKYC ho sakti hai?',
    a: 'Haan. Chehre wale tarike mein OTP ki koi zaroorat nahi. Camera ke samne aana hai, screen par jo instructions aayein (palak jhapkana waghera) wo follow karni hain — bas.',
  },
  {
    q: 'Face scan fail ho raha hai, kya karein?',
    a: '90% cases mein roshni ki kami hoti hai. Khidki ke paas jakar try karo, chashma utaar do, aur background mein koi aur insaan na ho. Net bhi stable hona chahiye.',
  },
  {
    q: 'Kya CSC jakar bhi karwa sakte hain?',
    a: 'Haan, nazdiki CSC center par biometric device se yahi kaam ho jata hai. ₹20 se ₹30 lag sakte hain. 5 minute mein ho jata hai.',
  },
  {
    q: 'Chehra verify hone ke baad kya karein?',
    a: '2-3 din wait karo taaki database update ho. Phir beneficiary list mein apna naam check karo. Wahan eKYC status "YES" ya "Active" dikhna chahiye.',
  },
  {
    q: 'Agar Aadhaar mein photo bahut purani hai toh?',
    a: 'Aise mein chehra match nahi ho pata. Pehle nazdiki Aadhaar center jakar photo update karwao, uske baad hi dobara try karna.',
  },
];

export default function PmKisanFaceAuthenticationEkyc() {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Face eKYC</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">New Feature</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Face Authentication eKYC 2026: Bina OTP Ke Ghar Baithe Photo Verification
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span> Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/face-auth-hero.webp"
            alt="PM Kisan face authentication app screen showing face scan process for kisan eKYC"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Chehre se eKYC — bina OTP ke
          </p>
        </div>

        <section className="mb-8">
          <SH>OTP vs Face vs Biometric — Aapke Liye Kaunsa Tarika Sahi Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            eKYC karne ke teen raaste hain, aur galat raasta pakadne mein hi zyadatar logon ka time barbaad hota hai. Isliye pehle 30 second mein ye decide karo ki aapka case kaunsa hai. Face authentication unhi ke liye bana hai jinke paas baaki do raaste band hain.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Aapki Situation</th>
                  <th className="p-3 text-left">Best Tarika</th>
                  <th className="p-3 text-left">Kahan Hoga</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mobile number Aadhaar se link hai, OTP aa jata hai', 'OTP wali eKYC', 'pmkisan.gov.in par khud, free'],
                  ['Number link nahi / OTP nahi aa raha, smartphone hai', 'Chehre se verification', 'PMKisan app se khud, free'],
                  ['Smartphone nahi hai ya camera kharab hai', 'Biometric (fingerprint)', 'CSC center, ₹20-30'],
                  ['Aadhaar ki photo 10+ saal purani hai', 'Pehle Aadhaar photo update, phir koi bhi tarika', 'Aadhaar Seva Kendra'],
                ].map(([sit, best, where], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text)]">{sit}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-medium text-green-700 dark:text-green-400">{best}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pehli line wale ho? Toh ye page aapke liye nahi hai — seedha <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">normal eKYC guide</Link> kholo, OTP se 2 minute mein kaam ho jayega. Doosri line wale yahin ruko. Roz aise messages aate hain — "Bhaiya OTP hi nahi aa raha, kya karein?" Number purana band ho gaya, naya Aadhaar se link nahi karaya. Unhi ke liye ye poora page hai.
          </p>

          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/face-scan-screen.webp"
            alt="Face authentication screen in PM Kisan app showing live face scan process"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Ek Jeeta Jaagta Case:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Patna ke Rajesh Kumar ji ka experience: "Mera mobile number 5 saal pehle band ho gaya tha. Naya number liya lekin Aadhaar se link nahi karaya. Jab PM Kisan ke liye apply kiya toh OTP nahi aaya. Chehre wale tarike se 5 minute mein eKYC ho gayi. Ab har 4 mahine mein paisa aa raha hai."
            </p>
          </DB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Ye kaam karta kaise hai? Simple biometric verification hai — jaise fingerprint se Aadhaar verify hota hai, waise hi camera aapka chehra scan karke Aadhaar database ki photo se milata hai. Match hua toh verified. Sarkari system hai, data UIDAI ke through hi jata hai. Bas ek shart hai: sirf official app use karni hai, koi milti-julti third-party app nahi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Do App Chahiye — PMKisan + AadhaarFaceRD (Setup Aur Install Errors)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Yahan zyadatar log atakte hain, kyunki koi batata nahi ki app <strong>ek nahi, do</strong> chahiye. PMKisan app toh sabko pata hai, lekin chehra scan asal mein <strong>AadhaarFaceRD</strong> naam ki UIDAI wali app karti hai — wo background mein chalti hai, uska koi icon-screen nahi dikhta. Agar wo install nahi hai, toh scan shuru hote hi error aa jata hai aur log samajhte hain ki unka phone kharab hai.
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li><strong>PMKisan app</strong> — Play Store se, publisher "Government of India" check karo. Play Store par na mile toh pmkisan.gov.in se APK download karo.</li>
            <li><strong>AadhaarFaceRD</strong> — Play Store par isi naam se hai, publisher UIDAI. Install karke bhoolo — kholne ki zaroorat nahi, ye service ki tarah kaam karti hai.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Install ke waqt jo errors aate hain, unka seedha fix:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Error Message</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['"RD service not found" / "FaceRD not installed"', 'AadhaarFaceRD app missing hai', 'Play Store se AadhaarFaceRD install karo, phone restart karo, dobara try karo'],
                  ['"App not compatible with your device"', 'Android version purana hai', 'Kisi ghar wale ke naye phone se karo — aapka Aadhaar, phone kisi ka bhi chalega'],
                  ['"Capture failed"', 'Scan beech mein toot gaya', 'Camera permission check karo (Settings > Apps > PMKisan > Permissions), phir dobara'],
                  ['Download hi nahi ho raha / "Pending"', 'Play Store ka storage/net issue', 'Phone storage khali karo (1GB+), WiFi par try karo'],
                ].map(([err, meaning, fix], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-medium text-red-600 dark:text-red-400">{err}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Kaam Shuru Karne Se Pehle:</strong> Dono app free hain. Koi app ya website is kaam ke paise maange (khud karne par), toh wo fraud hai. CSC par karwane ka charge alag baat hai — uski receipt milti hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Scan Kaise Karein — Step by Step</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dono app install ho gayi? Ab asli kaam. Poora process 5 minute ka hai:
          </p>
          <StepList>
            <SI n={1}>
              <strong>PMKisan app kholo:</strong> Home screen par "Face Authentication" ka option dikhega. Us par tap karo. (Option na dikhe toh app update karo — purane version mein ye feature nahi tha.)
            </SI>
            <SI n={2}>
              <strong>Aadhaar number daalo:</strong> Apna 12 digit ka Aadhaar number daalo. Dhyan se — ek number bhi galat hua toh error aayega. "Search" dabao.
            </SI>
            <SI n={3}>
              <strong>Details confirm karo:</strong> Screen par tumhara naam aur photo dikhegi. Check karo ki ye aap hi ho. Photo purani hai lekin pehchan mein aa rahi hai toh "Yes" dabao.
            </SI>
            <SI n={4}>
              <strong>Camera on hoga:</strong> Chehra frame ke gol ghere mein rakho. Roshni saamne se aani chahiye, peeche se nahi. Background plain rakho.
            </SI>
            <SI n={5}>
              <strong>Instructions follow karo:</strong> Screen par likha aayega "Blink your eyes" — palak jhapkao. Ye isliye taaki koi photo dikha kar verify na kar le; system live insaan check karta hai.
            </SI>
            <SI n={6}>
              <strong>Success message:</strong> Sab sahi hua toh "Successfully Authenticated" aayega, green tick ke saath. Screenshot le lo apne record ke liye.
            </SI>
          </StepList>

          <WB>
            <strong>Zaroori Tips:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Din mein khidki ke paas karo — andhere mein scan fail ho jata hai</li>
              <li>Chashma utaar do scan ke time</li>
              <li>Net tez hona chahiye (4G/WiFi)</li>
              <li>3 baar fail ho toh 1 ghanta ruko — bar-bar try karne se attempt block ho sakta hai</li>
            </ul>
          </WB>

          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/step-by-step-screens.webp"
            alt="Step by step screenshots of PMKisan app face authentication process"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Green tick ke baad kaam khatam nahi hota. 2-3 din mein database update hota hai — phir <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">list wale page</Link> mein naam check karo, eKYC "YES" dikhna chahiye. Agar hai, toh agli kist mein aapka paisa rukega nahi. Nahi dikha ek hafte tak, toh helpline <strong>155261</strong> par reference ke saath baat karo.
          </p>
        </section>

        <section className="mb-8">
          <SH>Ghar Ke Buzurg Ya Feature-Phone Wale Kisan — Aapka Raasta Alag Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sach baat: 60-65 saal ke kisan ke liye app download, permission, scan — ye sab jhanjhat hai. Aur jinke paas button wala phone hai, unke liye ye tarika hai hi nahi. Aise mein do practical raaste:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>
              <strong>Ghar ke kisi jawaan ka smartphone use karo.</strong> App mein login aapke Aadhaar se hota hai, phone kiska hai isse fark nahi padta. Beta/beti/pota — kisi ka bhi phone, 5 minute ka kaam. Kai gharon mein ek hi phone se dada, dadi, chacha sabki eKYC hui hai — ye bilkul allowed hai.
            </li>
            <li>
              <strong>Ya seedha <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC seva kendra</Link> jao.</strong> Aadhaar card original le jao. Operator biometric device se fingerprint ya chehra scan karega. ₹20-30 lagenge, receipt zaroor lo. 5 minute mein kaam hota hai — line ka time alag.
            </li>
          </ul>
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/csc-face-auth.webp"
            alt="CSC center operator doing PM Kisan face authentication for farmer with biometric device"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <IB>
            <strong>CSC par ye zaroor bolna:</strong> "PM Kisan ki eKYC karni hai." Operator ko pata hota hai kaunsa portal kholna hai. Receipt lena mat bhoolna — baad mein dikkat aayi toh yahi proof hai.
          </IB>
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/who-should-use.webp"
            alt="Farmer using face authentication on mobile phone for PM Kisan kisan eKYC"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
        </section>

        <section className="mb-8">
          <SH>"Photo Match Nahi Ho Raha" — Asli Kaaran Aur Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            App sahi chal rahi hai, scan bhi ho raha hai, lekin aakhir mein fail — "Authentication failed" ya "Face not matched". Iske gine-chune kaaran hote hain:
          </p>
          <div className="space-y-3">
            {[
              {
                error: 'Aadhaar ki photo bahut purani hai',
                fix: 'Ye sabse bada kaaran hai. 10-15 saal purani photo se aaj ka chehra system match nahi kar pata — umar, daadhi, chashma, sab badal jata hai. Iska ek hi ilaaj: Aadhaar Seva Kendra jakar photo update karwao (₹50 ki official fees), 2-4 din mein update hota hai, phir scan karo.',
              },
              {
                error: 'Face not detected — chehra pakad hi nahi raha',
                fix: 'Roshni ka issue hai. Khidki ke paas jao, roshni chehre par ho (peeche se nahi). Camera ka lens saaf karo. Topi/gamchha hatao, chashma utaro.',
              },
              {
                error: 'Blink karne par bhi aage nahi badh raha',
                fix: 'Phone ko sthir pakdo (table par kohni tika lo), aankhein saaf dikhni chahiye. Dhoop ka chashma toh bilkul nahi.',
              },
              {
                error: 'Network timeout',
                fix: 'Scan ke waqt data UIDAI tak jata hai — net toota toh fail. WiFi ya achha 4G pakdo. Gaon mein subah 6-8 baje network sabse khali hota hai.',
              },
              {
                error: 'Baar-baar fail — 3+ attempts',
                fix: 'Ab zid mat karo, attempt lock ho sakta hai. Seedha CSC jao aur fingerprint se karwa lo — wahan chehre ki zaroorat hi nahi.',
              },
            ].map(({ error, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {error}</p>
                <p className="text-xs text-[var(--color-text-muted)]"><strong className="text-green-700 dark:text-green-400">✅ Fix:</strong> {fix}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/success-screen.webp"
            alt="Successful PM Kisan face authentication confirmation screen with green tick"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Ek aur cheez jo log miss karte hain: app ka version. Purani version mein bugs the jo ab fix ho chuke hain — Play Store kholkar update check kar lo, cache clear kar lo (Settings &gt; Apps &gt; PMKisan &gt; Storage &gt; Clear Cache). Aur agar kuch bhi kaam na kare, toh helpline <strong>155261</strong> ya apne <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-green-700 dark:text-green-400">state nodal officer</Link> se baat karo. Poori process ki detail ke liye <Link href="/articles/PmKisanMasterGuide2026" className="underline text-green-700 dark:text-green-400">Master Guide</Link> bhi hai.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Face eKYC — Har Sawal Ka Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Chehre se eKYC — FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="App Download Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 Normal eKYC' },
          { href: '/articles/PmKisanPaymentFailedFix2026', l: '💸 Payment Fix' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
