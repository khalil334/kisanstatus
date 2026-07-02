import Image from 'next/image';
import Link from 'next/link';
import type { ArticleMeta } from '@/lib/articles-data';

export default function PmKisanSelfRegisteredStatusCheck({ article }: { article: ArticleMeta }) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6 not-prose" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-green-600">Home</Link></li>
          <li><span className="mx-2">›</span></li>
          <li><Link href="/articles" className="hover:text-green-600">Articles</Link></li>
          <li><span className="mx-2">›</span></li>
          <li className="text-gray-900 font-medium truncate max-w-xs">{article.title}</li>
        </ol>
      </nav>

      <header className="mb-8 not-prose">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
          <span className="font-semibold text-blue-600">Author: KisanStatus Team</span>
          <span>|</span>
          <span>Last Updated: June 28, 2026</span>
          <span>|</span>
          <span className="text-green-600 font-medium">✓ Verified</span>
        </div>
      </header>

      {/* IMAGE 1: Tool Interface */}
      <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 not-prose">
        <Image
          src="/images/pm-kisan-status-check-tool-interface.webp"
          alt="Scheme verification tool interface showing biometric credential and mobile input fields"
          width={1200}
          height={630}
          className="w-full h-auto"
          priority
        />
        <p className="text-center text-sm text-gray-600 mt-2 italic px-4 pb-2">
          Scheme Verification Tool — Official Portal Interface
        </p>
      </div>

      {/* Quick Answer Box */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg not-prose">
        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>⚡</span> Quick Answer
        </h2>
        <p className="text-gray-700 leading-relaxed mb-0">
          <strong>Self-Enrolled Beneficiary Verification</strong> karne ke liye <strong>pmkisan.gov.in</strong> par jayein → <strong>Farmers Corner</strong> section kholein → <strong>&quot;Status of Self Registered Farmer/CSC Farmer&quot;</strong> option select karein → apna <strong>12-digit biometric credential number</strong> dalein → Captcha verify karein → <strong>Get Data</strong> button dabayein.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 not-prose">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>📋</span> Is Article Mein Kya Hai?
        </h2>
        <nav>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="#self-registered-matlab" className="hover:text-green-600 hover:underline">1. Self-Enrolled Beneficiary ka Matlab</a></li>
            <li><a href="#status-check-steps" className="hover:text-green-600 hover:underline">2. Verification Check Karne ka Tarika (6 Steps)</a></li>
            <li><a href="#status-types" className="hover:text-green-600 hover:underline">3. Application Verification ke Types aur Matlab</a></li>
            <li><a href="#common-problems" className="hover:text-green-600 hover:underline">4. Common Problems aur Solutions</a></li>
            <li><a href="#related-articles" className="hover:text-green-600 hover:underline">5. Related Articles</a></li>
            <li><a href="#faqs" className="hover:text-green-600 hover:underline">6. FAQs</a></li>
          </ul>
        </nav>
      </div>

      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          Namaste kisan bhaiyon! Aaj hum ek bahut zaroori topic par baat karenge. Kai kisanon ko yeh confusion hoti hai ki <strong>&quot;Maine khud agrarian welfare scheme ke liye apply kiya tha, lekin ab pata nahi chal raha ki mera application approve hua ya nahi?&quot;</strong>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Is article mein hum detail mein samjhenge ki <strong>Self-Enrollment</strong> kya hai aur kaise verification check karein.
        </p>
      </section>

      <section id="self-registered-matlab" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📱 1. Self-Enrolled Beneficiary ka Matlab Kya Hai?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Agrarian welfare scheme mein enrollment ke do tarike hain:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4 not-prose">
          <h3 className="font-semibold text-lg mb-3">Pehla Tarika: CSC Enrollment</h3>
          <p className="text-gray-700 mb-0">
            Aap apne najdiki <strong>CSC (Common Service Center)</strong> yani Jan Seva Kendra jakar enrollment karvate hain.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg mb-4 not-prose">
          <h3 className="font-semibold text-lg mb-3">Dusra Tarika: Self-Enrollment</h3>
          <p className="text-gray-700 mb-0">
            Aap <strong>apne ghar se</strong> online pmkisan.gov.in website par jakar apna enrollment karte hain. Ise hi <strong>Self-Enrollment</strong> kehte hain.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4 not-prose">
          <p className="text-gray-800 mb-0">
            <strong>💡 Common Problem:</strong><br/>
            Kai kisanon ko lagta hai ki enrollment ke baad sab theek ho gaya. Lekin 4 mahine tak monetary credit nahi aata. Jab verification check karte hain to pata chalta hai ki application &quot;Pending&quot; tha kyunki biometric credential aur bank account link nahi tha. <strong>Verification check karna bahut zaroori hai!</strong>
          </p>
        </div>
      </section>

      <section id="status-check-steps" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 2. Verification Check Karne ka Sahi Tarika (6 Steps)</h2>

        {/* IMAGE 2: Steps Infographic */}
        <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 not-prose">
          <Image
            src="/images/pm-kisan-status-check-steps-infographic.webp"
            alt="Step by step infographic showing 4 steps to check scheme verification online"
            width={1200}
            height={630}
            className="w-full h-auto"
          />
          <p className="text-center text-sm text-gray-600 mt-2 italic px-4 pb-2">
            Step-by-Step Verification Check Process Infographic
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg not-prose">
            <h3 className="font-bold text-xl text-blue-700 mb-3">✅ Step 1: Official Website Par Jayen</h3>
            <p className="text-gray-700 mb-3">Browser mein type karein:</p>
            <div className="bg-blue-100 p-3 rounded font-mono text-blue-800 font-semibold text-center">pmkisan.gov.in</div>
            <p className="text-gray-700 mt-3"><strong>⚠️ Dhyan Dein:</strong> Hamesha official website ka hi istemal karein. Fake websites se bachein.</p>
          </div>

          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg not-prose">
            <h3 className="font-bold text-xl text-blue-700 mb-3">✅ Step 2: Farmers Corner Mein Jayen</h3>
            <p className="text-gray-700 mb-0">Homepage par <strong>&quot;Farmers Corner&quot;</strong> section dhundhein.</p>
          </div>

          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg not-prose">
            <h3 className="font-bold text-xl text-blue-700 mb-3">✅ Step 3: Verification Option Select Karein</h3>
            <p className="text-gray-700 mb-0"><strong>&quot;Status of Self Registered Farmer/CSC Farmer&quot;</strong> par click karein.</p>
          </div>

          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg not-prose">
            <h3 className="font-bold text-xl text-blue-700 mb-3">✅ Step 4: Biometric Credential Number Dalein</h3>
            <p className="text-gray-700 mb-3">12-digit biometric credential number bina space ke enter karein.</p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-gray-800 mb-2 font-semibold">📝 Dhyan Rakhne Wali Baatein:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-0">
                <li>Biometric credential number dalte waqt koi space na dein</li>
                <li>Sahi number dalein, varna &quot;No Record Found&quot; error aayega</li>
                <li>Galti hone par: <Link href="/articles/pm-kisan-name-correction-online-2026" className="text-blue-600 underline hover:text-blue-800">Identity Rectification Guide →</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg not-prose">
            <h3 className="font-bold text-xl text-blue-700 mb-3">✅ Step 5: Captcha Verify Karein</h3>
            <p className="text-gray-700 mb-0">Image captcha type karein aur <strong>&quot;Get Data&quot;</strong> button dabayein.</p>
          </div>

          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg not-prose">
            <h3 className="font-bold text-xl text-blue-700 mb-3">✅ Step 6: Verification Dekhein</h3>
            <p className="text-gray-700 mb-3">Aapka application verification screen par dikhega.</p>
          </div>
        </div>
      </section>

      <section id="status-types" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 3. Application Verification ke Types aur Matlab</h2>

        {/* IMAGE 3: Farmer Checking Phone */}
        <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 not-prose">
          <Image
            src="/images/indian-farmer-checking-phone-status.webp"
            alt="Indian farmer checking scheme application verification on smartphone in wheat field"
            width={1200}
            height={630}
            className="w-full h-auto"
          />
          <p className="text-center text-sm text-gray-600 mt-2 italic px-4 pb-2">
            Kisan bhai apna verification mobile par check kar rahe hain
          </p>
        </div>

        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-green-50">
              <tr>
                <th className="text-left p-3 font-bold text-green-900">Verification</th>
                <th className="text-left p-3 font-bold text-green-900">Matlab</th>
                <th className="text-left p-3 font-bold text-green-900">Kya Karein</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 font-semibold text-green-700">✅ Approved</td>
                <td className="p-3 text-gray-700">Enrollment safal — monetary credit aana shuru hogi</td>
                <td className="p-3 text-gray-700">Digital verification complete karein</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-amber-700">⏳ Pending</td>
                <td className="p-3 text-gray-700">Authentication chal raha hai</td>
                <td className="p-3 text-gray-700">7-15 din wait karein</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-red-700">❌ Rejected</td>
                <td className="p-3 text-gray-700">Koi galti mili hai</td>
                <td className="p-3 text-gray-700"><Link href="/articles/pm-kisan-rejected-list-2026" className="text-blue-600 underline">Application Rejection Fix Guide →</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="common-problems" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 4. Common Problems aur Solutions</h2>
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 not-prose">
            <p className="font-bold text-red-800 mb-1">❌ &quot;No Record Found&quot; Error</p>
            <p className="text-sm text-red-700">Biometric credential number galat hai ya enrollment submit nahi hua. Dobara check karein ya CSC center jayein.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 not-prose">
            <p className="font-bold text-amber-800 mb-1">⏳ 15 Din Se Zyada Pending</p>
            <p className="text-sm text-amber-700">Helpline 155261 par call karein ya District Agriculture Office visit karein.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 not-prose">
            <p className="font-bold text-purple-800 mb-1">✏️ Identity Mismatch</p>
            <p className="text-sm text-purple-700"><Link href="/articles/pm-kisan-name-correction-online-2026" className="underline font-semibold">Identity Rectification Guide →</Link> follow karein.</p>
          </div>
        </div>
      </section>

      {/* Related Articles + Official Source */}
      <section id="related-articles" className="mb-8 not-prose">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-sm">📚 Zaroor Padhein:</h3>
            <a
              href="https://pmkisan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
            >
              🏛️ Official Source: pmkisan.gov.in ↗
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '📆 23vi Installment Verification Guide' },
              { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 Digital Verification Kaise Karein' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Credit Transfer Failed Fix' },
              { href: '/articles/pm-kisan-name-correction-online-2026', label: '✏️ Identity Rectification' },
              { href: '/articles/pm-kisan-rejected-list-2026', label: '❌ Application Rejection Fix' },
              { href: '/articles/pm-kisan-registration-online-2026', label: '📝 New Enrollment Guide' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-8 not-prose">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 6. Frequently Asked Questions — Real Questions, Direct Answers</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="font-bold text-gray-900 mb-2">Q: Self-Enrolled Beneficiary Verification kaise kare?</p>
            <p className="text-sm text-gray-700">pmkisan.gov.in → Farmers Corner → Status of Self Registered Farmer → Biometric credential dalein → Get Data.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="font-bold text-gray-900 mb-2">Q: Pending verification ka kya matlab hai?</p>
            <p className="text-sm text-gray-700">Authentication chal raha hai. 7-10 din wait karein. 15 din se zyada ho toh helpline 155261 par call karein.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="font-bold text-gray-900 mb-2">Q: Rejected hone par kya kare?</p>
            <p className="text-sm text-gray-700">Rejection reason pata karein, galti sudharein, dobara apply karein. <Link href="/articles/pm-kisan-rejected-list-2026" className="text-blue-600 underline">Application Rejection Fix Guide →</Link></p>
          </div>
        </div>
      </section>

      {/* Help Contact */}
      <section id="help-contact" className="mb-8 not-prose">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-green-900 mb-3">📞 Help Ke Liye Sampark Karein</h3>
          <div className="space-y-2 text-sm text-green-800">
            <p>📞 <strong>Scheme Helpline:</strong> 155261 (Toll Free)</p>
            <p>📞 <strong>Alternate:</strong> 1800-115-526</p>
            <p>📧 <strong>Email:</strong> pmkisan-krishi@gov.in</p>
            <p className="text-xs text-green-600 mt-2">⏰ Monday-Saturday, 9 AM - 6 PM</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-amber-50/80 border border-amber-200/60 rounded-xl text-[11px] text-amber-800 text-center leading-relaxed not-prose">
        ⚠️ Yeh article independent research par based hai. Official verification sirf <strong>pmkisan.gov.in</strong> par hi check karein. KisanStatus.com Government of India ka official platform nahi hai.
      </div>
    </article>
  );
}