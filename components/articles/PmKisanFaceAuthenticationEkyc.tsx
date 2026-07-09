'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanEkycOnline2026', title: 'Normal eKYC Guide', emoji: '🔐' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Fix', emoji: '💸' },
  { slug: 'PmKisanCscRegistrationCharges', title: 'CSC Registration', emoji: '🏪' },
];

const FAQS_DATA = [
  {
    q: 'Face authentication ke liye kaunsa app use karein?',
    a: 'Official PMKisan App (pmkisan.gov.in se download karo). Koi third party app use mat karna.',
  },
  {
    q: 'Bina OTP ke eKYC ho sakti hai?',
    a: 'Haan, face authentication mein OTP ki zaroorat nahi padti. Bas camera ke samne aana hai.',
  },
  {
    q: 'Face scan fail ho raha hai, kya karein?',
    a: 'Roshni achhi rakho, chashma utaar do, aur background plain rakho. Net bhi tez hona chahiye.',
  },
  {
    q: 'Kya CSC jakar bhi karwa sakte hain?',
    a: 'Haan, CSC wale biometric device se karwa sakte hain. ₹20-30 lag sakte hain.',
  },
  {
    q: 'Face authentication ke baad kya karein?',
    a: 'Authentication successful hone ke baad 2-3 din wait karo. Phir beneficiary list mein apna naam check karo. Status active dikhna chahiye.',
  },
  {
    q: 'Agar photo purani hai toh?',
    a: 'Agar Aadhaar mein photo bahut purani hai toh face authentication fail ho sakta hai. Aise pehle Aadhaar center jakar photo update karo, phir face authentication karo.',
  },
];

export default function PmKisanFaceAuthenticationEkyc({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Face Authentication</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">New Feature</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Face Authentication eKYC: Bina OTP Ke Ghar Baithe Verification
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

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/face-auth-hero.webp"
            alt="PM Kisan face authentication app screen showing face scan process"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Face Authentication — Bina OTP Ke eKYC
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>OTP Nahi Aa Raha? Tension Mat Lo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, bahut log pareshan hain ki OTP hi nahi aa raha. Mobile number purana hai, ya network issue hai. Aise mein <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">normal eKYC</Link> ruk jaati hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sarkar ne iska hal nikala hai — <strong>Face Authentication</strong>. Ab camera ke samne aakar, bina OTP ke apni eKYC complete kar sakte ho.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/face-scan-screen.webp"
            alt="Face authentication screen in PM Kisan app showing scan process"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye feature un logon ke liye vardaan hai jinka mobile number Aadhaar se link nahi hai ya OTP receive nahi ho raha. <Link href="/beneficiary-list" className="underline text-green-700 dark:text-green-400">Beneficiary list</Link> mein naam check karne se pehle ye zaroor kar lena.
          </p>

          <DB>
            <strong>Real Example:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Patna ke Rajesh Kumar ji ka experience: "Mera mobile number 5 saal pehle band ho gaya tha. Naya number liya lekin Aadhaar se link nahi karaya. Jab PM Kisan ke liye apply kiya toh OTP nahi aaya. Face authentication se 5 minute mein eKYC ho gaya. Ab har 4 mahine mein paisa aa raha hai."
            </p>
          </DB>
        </section>

        {/* SECTION 1: What is Face Authentication */}
        <section className="mb-8">
          <SH>Face Authentication Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, pehle samajhte hain ki ye hai kya. Face authentication ek biometric verification hai. Jaise fingerprint se Aadhaar verify hota hai, waise hi ab chehra dikha kar verify kar sakte ho.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Kaise kaam karta hai?</strong>
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>App camera on karta hai</li>
            <li>Tumhara chehra scan karta hai</li>
            <li>Aadhaar database se match karta hai</li>
            <li>Agar match hua toh verified</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Ye process bilkul safe hai. Government ki official app hai. Koi third party app use mat karna.
          </p>
        </section>

        {/* SECTION 2: Who Should Use */}
        <section className="mb-8">
          <SH>Kaun Logon Ko Use Karna Chahiye?</SH>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              Face authentication un logon ke liye hai jo:
            </p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>Jinka mobile number Aadhaar se link nahi hai</li>
              <li>Jinhe OTP nahi mil raha hai</li>
              <li>Jinka number change ho gaya hai</li>
              <li>Jo gaon mein rehte hain aur network problem hai</li>
              <li>Jo CSC center nahi jaana chahte</li>
            </ul>
          </div>
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/who-should-use.webp"
            alt="Farmer using face authentication on mobile"
            width={800}
            height={450}
            className="w-full rounded-xl"
          />
        </section>

        {/* SECTION 3: Step by Step */}
        <section className="mb-8">
          <SH>Step-by-Step: Face Authentication Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, process bahut simple hai. Neeche diye gaye steps follow karo:
          </p>
          <StepList>
            <SI n={1}>
              <strong>App Download Karo:</strong> Play Store se <strong>PMKisan App</strong> download karo. Agar Play Store par nahi mil raha toh pmkisan.gov.in par jao. Wahan se APK file download karke install karo.
            </SI>
            <SI n={2}>
              <strong>App Kholo:</strong> App install hone ke baad kholo. Home screen par "Face Authentication" ka option dikhega. Us par tap karo.
            </SI>
            <SI n={3}>
              <strong>Aadhaar Number Daalo:</strong> Apna 12 digit ka Aadhaar number daalo. Dhyan se daalna, ek number bhi galat hua toh error aayega. "Search" button dabao.
            </SI>
            <SI n={4}>
              <strong>Details Confirm Karo:</strong> Screen par tumhara naam aur photo dikhegi. Check karo ki ye aap hi ho. Agar photo purani hai lekin pehchan mein aa rahi hai toh "Yes" dabao.
            </SI>
            <SI n={5}>
              <strong>Camera On Hoga:</strong> Ab camera on hoga. Apna chehra frame mein rakho. Roshni achhi honi chahiye. Peeche plain background rakho.
            </SI>
            <SI n={6}>
              <strong>Instructions Follow Karo:</strong> Screen par likha aayega "Blink your eyes" ya "Turn your head". Jaise bola waise karo. Ye security ke liye hai taaki photo se verify na ho.
            </SI>
            <SI n={7}>
              <strong>Success Message:</strong> Agar sab sahi hua toh "Successfully Authenticated" ka message aayega. Green tick dikhega. Screenshot le lo apne record ke liye.
            </SI>
          </StepList>

          <WB>
            <strong>Zaroori Tips:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Roshni achhi honi chahiye, andhere mein scan fail ho jayega</li>
              <li>Chashma (glasses) utaar do scan ke time</li>
              <li>Background plain rakho, peeche koi aur na khada ho</li>
              <li>Net connection tez hona chahiye (4G/WiFi)</li>
              <li>Camera saaf hona chahiye</li>
              <li>Agar 3 baar fail ho toh 1 ghante baad try karo</li>
            </ul>
          </WB>

          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/step-by-step-screens.webp"
            alt="Step by step screenshots of face authentication process"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />
        </section>

        {/* SECTION 4: Common Errors */}
        <section className="mb-8">
          <SH>Common Errors Aur Unka Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, kabhi kabhi error aa jata hai. Ghabrana mat. Har error ka solution hai:
          </p>
          <div className="space-y-3">
            {[
              { 
                error: 'Face not detected', 
                fix: 'Camera saaf karo aur roshni mein aao. Window ke paas jakar try karo. Agar phir bhi na ho toh torch on karke try karo.',
                extra: 'Ye sabse common error hai. 80% cases mein roshni ki kami hoti hai.'
              },
              { 
                error: 'Network timeout', 
                fix: 'WiFi ya 4G check karo. Airplane mode on karke 10 second baad off karo. Phir try karo.',
                extra: 'Gaon mein network slow hota hai. Subah 6-8 baje ya raat 10 baje ke baad try karo jab network kam busy hota hai.'
              },
              { 
                error: 'Aadhaar mismatch', 
                fix: 'Agar photo purani hai aur bilkul alag lag rahi hai, toh CSC jakar Aadhaar update karo pehle.',
                extra: 'Agar 10 saal se zyada purani photo hai toh pehle Aadhaar center jakar photo update karna padega.'
              },
              { 
                error: 'Multiple attempts fail', 
                fix: '2-3 baar fail hone par turant CSC center par chale jao. Wahan biometric device se karwa lo.',
                extra: 'Bar bar try karne se account temporarily lock ho sakta hai. 3 attempts ke baad ruk jao.'
              },
              { 
                error: 'App crash ho raha hai', 
                fix: 'App ka cache clear karo. Settings &gt; Apps &gt; PMKisan &gt; Storage &gt; Clear Cache. Phir try karo.',
                extra: 'Agar phir bhi crash ho toh app uninstall karke dobara install karo.'
              },
            ].map(({ error, fix, extra }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {error}</p>
                <p className="text-xs text-green-700 dark:text-green-400 mb-2"><strong>✅ Fix:</strong> {fix}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic"><strong>💡 Tip:</strong> {extra}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Agar phir bhi dikkat aa rahi hai, toh <Link href="/articles/PmKisanMasterGuide2026" className="underline text-green-700 dark:text-green-400">Master Guide</Link> padho ya nazdiki CSC center par chale jao.
          </p>
        </section>

        {/* SECTION 5: CSC Option */}
        <section className="mb-8">
          <SH>CSC Center Se Bhi Karwa Sakte Ho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar app se nahi ho pa raha, toh koi baat nahi. Nazdiki <Link href="/articles/PmKisanCscRegistrationCharges" className="underline text-green-700 dark:text-green-400">CSC center</Link> par jakar bhi face authentication karwa sakte ho.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>CSC Process:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1 mb-3">
              <li>Aadhaar card le jao (original)</li>
              <li>CSC wala biometric device se scan karega</li>
              <li>₹20-30 fees lag sakti hai</li>
              <li>5 minute mein ho jayega</li>
              <li>Receipt milegi, usko sambhal kar rakho</li>
            </ul>
          </div>
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/csc-face-auth.webp"
            alt="CSC center doing face authentication for farmer"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <IB>
            <strong>Important:</strong> CSC wale ko bolo ki wo "PM Kisan Face Authentication" kar raha hai. Normal eKYC mat karwana. Dono alag hain.
          </IB>
        </section>

        {/* SECTION 6: Benefits */}
        <section className="mb-8">
          <SH>Face Authentication Ke Fayde</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { icon: '🚫', title: 'No OTP Needed', desc: 'Mobile number link nahi? Koi problem nahi. Bina OTP ke ho jayega.' },
              { icon: '⚡', title: 'Fast Process', desc: '2 minute mein complete. Lambi line mein khade hone ki zaroorat nahi.' },
              { icon: '🏠', title: 'Ghar Baithe', desc: 'CSC jane ki zaroorat nahi. Mobile se hi kar lo.' },
              { icon: '✅', title: '100% Accurate', desc: 'Biometric verification hai. Galati ka chance nahi.' },
              { icon: '💰', title: 'Bilkul Free', desc: 'Agar khud karo toh ek rupya bhi nahi lagega.' },
              { icon: '🔒', title: 'Safe & Secure', desc: 'Government ki official app hai. Data safe hai.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 transition-all">
                <span className="text-2xl block mb-2">{icon}</span>
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: After Authentication */}
        <section className="mb-8">
          <SH>Authentication Ke Baad Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, face authentication successful hone ke baad kuch steps aur hain:
          </p>
          <ol className="space-y-2 mb-4">
            {[
              'Screenshot le lo confirmation ka. Future mein kaam aayega.',
              '2-3 din wait karo. Database update hone mein time lagta hai.',
              '<a href="/articles/PmKisanBeneficiaryList2026" class="underline text-green-700 dark:text-green-400">Beneficiary list</a> mein apna naam check karo.',
              'Status "Active" dikhna chahiye.',
              'Agar active hai toh agle 4 mahine mein paisa aa jayega.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] pt-0.5" dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
          <Image
            src="/images/articles/pm-kisan-face-authentication-ekyc/success-screen.webp"
            alt="Successful authentication confirmation screen"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
        </section>

        {/* SECTION 8: State Wise Availability */}
        <section className="mb-8">
          <SH>Kya Har State Mein Available Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Haan bhai, ye feature ab har state mein available hai. Lekin kuch states mein alag process hai:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['UP, Bihar, MP', '✅ Available', 'Direct app se karo'],
                  ['Maharashtra', '✅ Available', 'App + CSC dono'],
                  ['Rajasthan, Gujarat', '✅ Available', 'App se preferred'],
                  ['South States', '✅ Available', 'Sabhi states mein'],
                  ['North East', '✅ Available', 'CSC recommended'],
                ].map(([state, status, note], i) => (
                  <tr key={state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 9: Troubleshooting */}
        <section className="mb-8">
          <SH>Advanced Troubleshooting</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar basic fixes se kaam nahi bana toh ye try karo:
          </p>
          <div className="space-y-3">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">📱 Phone Settings Check Karo:</p>
              <ul className="list-disc list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>Camera permission on hai? (Settings &gt; Apps &gt; PMKisan &gt; Permissions)</li>
                <li>Storage permission on hai?</li>
                <li>Internet permission on hai?</li>
                <li>Battery optimization off karo app ke liye</li>
              </ul>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">🔄 App Update Karo:</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Purani version use kar rahe ho toh update karo. Play Store par jao aur check karo ki koi update available hai ya nahi.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">📞 Helpline Number:</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Agar kuch bhi kaam nahi kar raha toh <strong>155261</strong> par call karo. Ya <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-green-700 dark:text-green-400">state nodal officer</Link> se contact karo.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Face Authentication FAQ" />
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