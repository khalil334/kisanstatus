'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PMKisanCompleteGuide() {
  return (
    <div className="prose max-w-none">
      {/* ✅ FIXED: Hero Image path updated to new folder */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-200">
        <Image
          src="/images/articles/pm-kisan-complete-guide/hero.webp"
          alt="Indian farmer checking scheme status on mobile phone in field"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2310b981' width='400' height='300'/%3E%3Ctext fill='white' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EScheme Guide%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-semibold opacity-90">Cultivator Benefit Program 2026</p>
          <h2 className="text-2xl md:text-3xl font-bold">Complete Problem-Solving Guide</h2>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg leading-relaxed mb-4">
          Cultivator benefit program ne bahut se kisan families ki life badal di hai. Lekin verification check karte waqt, biometric authentication complete karte waqt, ya credit transfer issues resolve karte waqt kai farmers ko problems aati hain.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Yeh guide sab problems solve karegi — step-by-step solutions ke saath.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Chahe aap pehli baar apply kar rahe ho ya monetary credit delays face kar rahe ho — yeh guide cover karti hai sab kuch: <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-600 underline font-semibold">verification check</Link> se lekar <Link href="/beneficiary-list" className="text-green-600 underline font-semibold">state-wise eligible farmers roster</Link> tak, common errors, aur tested solutions.
        </p>
      </section>

      {/* Problem 1: Status Check Issues */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          1. Verification Check Online Nahi Ho Raha?
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-red-700">Common Issues:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Website showing "Invalid Mobile Number" error</li>
            <li>OTP not received on registered mobile</li>
            <li>"No Record Found" message despite enrollment</li>
            <li>Portal down or slow loading</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Solution: Step-by-Step Verification Check</h3>
        
        <div className="bg-green-50 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Method 1: Official Portal</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Visit <Link href="https://pmkisan.gov.in" className="text-blue-600 underline">pmkisan.gov.in</Link> ya hamara <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-600 underline font-semibold">simplified verification checker</Link> use karo</li>
            <li>Click on "Farmers Corner" → "Beneficiary Status"</li>
            <li>Enter your registered mobile number</li>
            <li>Click "Get OTP" and enter the 6-digit code</li>
            <li>View your complete payment history and status</li>
          </ol>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Method 2: Check Without OTP (Alternative)</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Go to "Beneficiary List" section</li>
            <li>Select your State, District, Sub-District, Block, and Village</li>
            <li>Click "Get Report"</li>
            <li>Search your name in the alphabetical list</li>
            <li>View your enrollment number and payment status</li>
          </ol>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-semibold text-yellow-800">💡 Pro Tip:</p>
          <p>Agar mobile number registered nahi hai ya change ho gaya hai, to nearest Common Service Center (CSC) ya agriculture department office visit karo update karne ke liye. Aadhaar card aur land documents saath le jaana.</p>
        </div>
      </section>

      {/* Problem 2: e-KYC Completion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          2. Digital Verification Pending — Credit Transfer Blocked
        </h2>
        
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
          <Image
            src="/images/articles/pm-kisan-complete-guide/ekyc-process.webp"
            alt="Farmer completing biometric authentication at Common Service Center with fingerprint scanner"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 256'%3E%3Crect fill='%2310b981' width='400' height='256'/%3E%3Ctext fill='white' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EBiometric Process%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <p className="mb-4">
          Kai farmers ne abhi tak digital verification complete nahi ki — is wajah se unka credit transfer blocked hai. Government ne 2023 se yeh mandatory kar diya hai.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Digital Verification Kyun Zaroori Hai?</h3>
        <ul className="list-disc ml-5 space-y-2 mb-4">
          <li>Prevents duplicate aur fake beneficiaries</li>
          <li>Ensures Aadhaar-bank account linkage</li>
          <li>Enables Direct Benefit Transfer (DBT)</li>
          <li>Reduces payment fraud aur errors</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Digital Verification Complete Karo — 3 Tarike:</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li><strong>Online Method (Aadhaar OTP):</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Visit pmkisan.gov.in → Farmers Corner → e-KYC</li>
                <li>Enter Aadhaar number aur registered mobile</li>
                <li>Enter OTP received on Aadhaar-linked mobile</li>
                <li>Complete biometric authentication</li>
              </ul>
            </li>
            <li><strong>Offline Method (CSC Center):</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Visit nearest Common Service Center</li>
                <li>Pay ₹20-30 service charge</li>
                <li>Provide Aadhaar number aur fingerprint</li>
                <li>Get confirmation SMS within 24 hours</li>
              </ul>
            </li>
            <li><strong>Mobile App Method:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Download "PM Kisan" app from Play Store</li>
                <li>Login with mobile number</li>
                <li>Complete digital verification using Aadhaar OTP</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-red-700">⚠️ Common Authentication Errors & Solutions:</p>
          <table className="w-full mt-3 text-sm">
            <thead className="bg-red-100">
              <tr>
                <th className="p-2 text-left">Error Message</th>
                <th className="p-2 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">"Aadhaar not linked with mobile"</td>
                <td className="p-2">Visit Aadhaar Seva Kendra to link mobile</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">"Name mismatch with bank account"</td>
                <td className="p-2">Update bank account name as per Aadhaar</td>
              </tr>
              <tr>
                <td className="p-2">"Biometric authentication failed"</td>
                <td className="p-2">Try fingerprint/iris scan at CSC center</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Problem 3: Payment Not Received */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          3. Monetary Credit Bank Account Mein Nahi Aaya?
        </h2>
        
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
          <Image
            src="/images/articles/pm-kisan-complete-guide/payment-success.webp"
            alt="Happy farmer receiving monetary credit notification on mobile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 256'%3E%3Crect fill='%2310b981' width='400' height='256'/%3E%3Ctext fill='white' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ECredit Success%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <p className="mb-4">
          ₹2,000 ka monetary credit miss ho gaya? Akele nahi ho. Hazaron farmers payment delays face karte hain various technical aur documentation issues ki wajah se.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Pehle Payment Status Check Karo</h3>
        <p className="mb-4">
          Tension lene se pehle, verify karo payment status hamare <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-600 underline font-semibold">Verification Checker</Link> se ya check karo apni <Link href="/beneficiary-list" className="text-green-600 underline font-semibold">state beneficiary list</Link>.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Top 5 Reasons for Payment Failure:</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">1. Bank Account Not Aadhaar-Linked (NPCI Mapping)</h4>
            <p className="text-gray-700">Aapka bank account Aadhaar se mapped hona chahiye DBT ke liye. <strong>Solution:</strong> Bank branch visit karo aur Aadhaar seeding form submit karo.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">2. Incorrect Bank Account Details</h4>
            <p className="text-gray-700">Account number ya IFSC code galat enter kiya gaya enrollment ke time. <strong>Solution:</strong> Login to portal → Edit Bank Details → Submit correct information.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">3. Land Records Not Updated</h4>
            <p className="text-gray-700">Discrepancy between land records aur application. <strong>Solution:</strong> Visit tehsil office to update land records, phir re-apply.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">4. Digital Verification Pending</h4>
            <p className="text-gray-700">Mandatory biometric authentication complete nahi hui. <strong>Solution:</strong> Upar diye gaye digital verification steps follow karo.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">5. Ineligible Beneficiary Category</h4>
            <p className="text-gray-700">Government employee, income tax payer, ya institutional landholder. <strong>Solution:</strong> Agar wrongly rejected, file grievance with proof.</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">📞 Payment Grievance Kaise File Karein:</h4>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Call Helpline: <strong>155261</strong> ya <strong>011-24300606</strong></li>
            <li>Email: <strong>pmkisan-ict@gov.in</strong></li>
            <li>Online Grievance: pmkisan.gov.in → Farmers Corner → Grievance</li>
            <li>Visit District Agriculture Officer with application copy</li>
            <li>Use <Link href="/calculator" className="text-green-600 underline">payment calculator</Link> to verify expected amount</li>
          </ol>
        </div>
      </section>

      {/* Problem 4: Application Rejection */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          4. Application Reject Ho Gayi — Ab Kya Karein?
        </h2>

        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
          <Image
            src="/images/articles/pm-kisan-complete-guide/rejection-fix.webp"
            alt="Farmer reviewing documents to fix application rejection"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 256'%3E%3Crect fill='%2310b981' width='400' height='256'/%3E%3Ctext fill='white' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ERejection Fix%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <p className="mb-4">
          Application rejection frustrating ho sakti hai, lekin zyaadatar rejections correctable errors ki wajah se hoti hain. Yahan hai kaise identify aur fix karein.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Common Rejection Reasons:</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">❌ Land-Related Issues</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Land not in applicant's name</li>
              <li>Disputed land ownership</li>
              <li>Land area less than state minimum</li>
              <li>Institutional/forest land</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">❌ Document Issues</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Blurry ya unclear documents</li>
              <li>Expired land records</li>
              <li>Name mismatch across documents</li>
              <li>Missing signature/stamp</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">✅ Re-Application Process:</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Download rejection letter from portal</li>
            <li>Identify specific rejection reason mentioned</li>
            <li>Collect corrected/updated documents</li>
            <li>Visit CSC ya agriculture office for fresh application</li>
            <li>Pay ₹30-50 application fee (if applicable)</li>
            <li>Get application receipt with tracking number</li>
            <li>Track status every 15 days</li>
          </ol>
        </div>
      </section>

      {/* State-wise Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          5. State-wise Eligible Farmers Roster Check Karo
        </h2>
        
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
          <Image
            src="/images/articles/pm-kisan-complete-guide/state-map.webp"
            alt="India map showing beneficiaries across all states"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 256'%3E%3Crect fill='%2310b981' width='400' height='256'/%3E%3Ctext fill='white' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EState Map%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <p className="mb-4">
          Har state ka alag land record system aur verification process hai. Apni state-specific information dhundho aur check karo ki aapka naam beneficiary list mein aata hai ya nahi.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Link href="/beneficiary-list/uttar-pradesh" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Uttar Pradesh</h4>
            <p className="text-sm text-gray-600">High beneficiary count</p>
          </Link>
          <Link href="/beneficiary-list/maharashtra" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Maharashtra</h4>
            <p className="text-sm text-gray-600">Significant coverage</p>
          </Link>
          <Link href="/beneficiary-list/karnataka" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Karnataka</h4>
            <p className="text-sm text-gray-600">Good enrollment</p>
          </Link>
          <Link href="/beneficiary-list/rajasthan" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Rajasthan</h4>
            <p className="text-sm text-gray-600">Active participation</p>
          </Link>
          <Link href="/beneficiary-list/gujarat" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Gujarat</h4>
            <p className="text-sm text-gray-600">Strong coverage</p>
          </Link>
          <Link href="/beneficiary-list/madhya-pradesh" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Madhya Pradesh</h4>
            <p className="text-sm text-gray-600">High enrollment</p>
          </Link>
        </div>

        <p className="text-sm text-gray-600">
          <Link href="/beneficiary-list" className="text-green-600 underline font-semibold">
            View all 32 states aur UTs →
          </Link>
        </p>
      </section>

      {/* Important Documents Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          6. Zaroori Documents Checklist
        </h2>

        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
          <Image
            src="/images/articles/pm-kisan-complete-guide/documents-checklist.webp"
            alt="Required documents - Aadhaar, land papers, bank passbook"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 256'%3E%3Crect fill='%2310b981' width='400' height='256'/%3E%3Ctext fill='white' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EDocuments%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h3 className="font-bold mb-4">Yeh Documents Ready Rakho:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-green-700">📄 Mandatory Documents:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Aadhaar Card (self-attested copy)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Land Registration Papers (Khatauni)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Bank Account Passbook (first page)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Mobile Number (Aadhaar-linked)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-blue-700">📋 Additional Documents:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Land Verification Certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Caste Certificate (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Passport-size Photograph</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Self-declaration Form</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section - IMAGE REMOVED */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          7. FAQ — Real Questions, Direct Answers
        </h2>

        {/* ✅ FAQ image removed - directly showing questions */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q1. Saal mein kitni installments aati hain?</h3>
            <p className="text-gray-700">A. ₹6,000 annually 3 equal installments mein — ₹2,000 each. Payments har 4 mahine mein hoti hain (April-July, August-November, December-March).</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q2. Agar land documents nahi hain to apply kar sakte hain?</h3>
            <p className="text-gray-700">A. Nahi, land ownership documents mandatory hain. Lekin tenant farmers kuch states mein lease agreement aur landowner's NOC ke saath apply kar sakte hain.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q3. Agar enrollment ke baad zameen bech di to?</h3>
            <p className="text-gray-700">A. Agriculture department ko turant inform karna zaroori hai. Land sale ke baad benefits receive karna illegal hai aur legal action ho sakta hai.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q4. Approval mein kitna time lagta hai?</h3>
            <p className="text-gray-700">A. Typically 30-60 days document verification ke baad. Status track kar sakte ho hamare <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-600 underline">verification checker</Link> se.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q5. Kisi bhi bank account mein payment le sakte hain?</h3>
            <p className="text-gray-700">A. Account Aadhaar-linked (NPCI mapped) hona chahiye aur us bank mein jo DBT support karta hai. Zyaadatar public sector banks aur major private banks enabled hain.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q6. Kya yeh taxable hai?</h3>
            <p className="text-gray-700">A. Nahi, benefit amount completely tax-free hai aur income tax returns mein show karne ki zaroorat nahi hai.</p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          8. Related Resources & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">✅ Verification Check Karo</h3>
            <p className="text-sm opacity-90">Apna beneficiary status aur payment history instantly verify karo</p>
          </Link>

          <Link href="/calculator" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">🧮 Benefit Calculator</h3>
            <p className="text-sm opacity-90">Total benefits received aur upcoming installments calculate karo</p>
          </Link>

          <Link href="/beneficiary-list" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📋 State Beneficiary Lists</h3>
            <p className="text-sm opacity-90">Apna naam state-wise beneficiary databases mein search karo</p>
          </Link>

          <Link href="/articles" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📚 More Articles</h3>
            <p className="text-sm opacity-90">Farming schemes, subsidies, aur best practices par guides padho</p>
          </Link>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          9. Final Words
        </h2>
        
        <p className="text-lg leading-relaxed mb-4">
          Cultivator benefit program Indian farmers ke liye game-changer raha hai — agricultural inputs aur family needs ke liye crucial financial support provide karta hai. Application aur verification process complex lag sakta hai, lekin yeh guide follow karke aap common obstacles overcome kar sakte ho.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Yaad rakho — documents updated rakho, digital verification time par complete karo, aur regularly apna beneficiary status check karo. Agar koi issue face ho, helpline numbers use karne mein hesitation mat karo ya nearest agriculture office visit karo.
        </p>

        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
          <p className="font-semibold text-green-800 mb-2">📞 Immediate Help Chahiye?</p>
          <ul className="space-y-1 text-green-700">
            <li>• Helpline: <strong>155261</strong> (Toll-Free)</li>
            <li>• Email Support: <strong>pmkisan-ict@gov.in</strong></li>
            <li>• Visit: <Link href="/" className="underline font-semibold">KisanStatus.com</Link> for guides aur updates</li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 pt-6 border-t border-gray-300">
        <p className="text-sm text-gray-600 italic">
          <strong>Disclaimer:</strong> KisanStatus.com ek informational website hai aur Government of India se affiliated nahi hai. Official information ke liye hamesha <Link href="https://pmkisan.gov.in" className="text-blue-600 underline">pmkisan.gov.in</Link> visit karo. Hum simplified guides provide karte hain taaki farmers scheme ko better samajh sakein.
        </p>
      </section>
    </div>
  );
}