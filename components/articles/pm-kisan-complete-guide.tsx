// components/articles/pm-kisan-complete-guide.tsx
import Image from "next/image";
import Link from "next/link";

export default function PMKisanCompleteGuide() {
  return (
    <div className="prose max-w-none">
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="public/images/pm-kisan-status-check-hero.webp"
          alt="Indian farmer checking PM Kisan status on mobile phone in field"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-semibold opacity-90">PM Kisan Samman Nidhi 2026</p>
          <h2 className="text-2xl md:text-3xl font-bold">Complete Problem-Solving Guide</h2>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg leading-relaxed mb-4">
          PM Kisan Samman Nidhi Yojana has transformed the lives of over 11.5 crore farmer families across India. 
          However, many farmers face challenges while checking their beneficiary status, completing e-KYC, or 
          resolving payment issues. This comprehensive guide solves all your PM Kisan-related problems with 
          step-by-step solutions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Whether you're a first-time applicant or facing installation delays, this 3000-word guide covers 
          everything from <Link href="/pm-kisan-status" className="text-green-600 underline font-semibold">status checking</Link> to 
          <Link href="/beneficiary-list" className="text-green-600 underline font-semibold"> state-wise beneficiary lists</Link>, 
          common errors, and expert solutions.
        </p>
      </section>

      {/* Problem 1: Status Check Issues */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Problem 1: Unable to Check PM Kisan Status Online
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-red-700">Common Issues:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Website showing "Invalid Mobile Number" error</li>
            <li>OTP not received on registered mobile</li>
            <li>"No Record Found" message despite registration</li>
            <li>Portal down or slow loading</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Solution: Step-by-Step Status Check</h3>
        
        <div className="bg-green-50 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Method 1: Official PM Kisan Portal</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Visit <Link href="https://pmkisan.gov.in" className="text-blue-600 underline">pmkisan.gov.in</Link> or use our 
              <Link href="/pm-kisan-status" className="text-green-600 underline font-semibold"> simplified status checker</Link></li>
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
            <li>View your registration number and payment status</li>
          </ol>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-semibold text-yellow-800">💡 Pro Tip:</p>
          <p>If your mobile number is not registered or changed, visit your nearest Common Service Center (CSC) or 
          agriculture department office to update it. Carry your Aadhaar card and land documents.</p>
        </div>
      </section>

      {/* Problem 2: e-KYC Completion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Problem 2: e-KYC Not Completed - Payment Blocked
        </h2>
        
        {/* e-KYC Image */}
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pm-kisan-ekyc-process-step.webp"
            alt="Farmer completing e-KYC at Common Service Center with fingerprint scanner"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>

        <p className="mb-4">
          Over 2.3 crore farmers still haven't completed their e-KYC, resulting in blocked payments. 
          The government made e-KYC mandatory from 2023 onwards.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Why e-KYC is Mandatory?</h3>
        <ul className="list-disc ml-5 space-y-2 mb-4">
          <li>Prevents duplicate and fake beneficiaries</li>
          <li>Ensures Aadhaar-bank account linkage</li>
          <li>Enables Direct Benefit Transfer (DBT)</li>
          <li>Reduces payment fraud and errors</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Complete e-KYC in 3 Easy Steps:</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li><strong>Online Method (Aadhaar OTP):</strong>
              <ul className="list-circle ml-5 mt-2 space-y-1">
                <li>Visit pmkisan.gov.in → Farmers Corner → e-KYC</li>
                <li>Enter Aadhaar number and registered mobile</li>
                <li>Enter OTP received on Aadhaar-linked mobile</li>
                <li>Complete biometric authentication</li>
              </ul>
            </li>
            <li><strong>Offline Method (CSC Center):</strong>
              <ul className="list-circle ml-5 mt-2 space-y-1">
                <li>Visit nearest Common Service Center</li>
                <li>Pay ₹20-30 service charge</li>
                <li>Provide Aadhaar number and fingerprint</li>
                <li>Get confirmation SMS within 24 hours</li>
              </ul>
            </li>
            <li><strong>Mobile App Method:</strong>
              <ul className="list-circle ml-5 mt-2 space-y-1">
                <li>Download "PM Kisan" app from Play Store</li>
                <li>Login with mobile number</li>
                <li>Complete e-KYC using Aadhaar OTP</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-red-700">⚠️ Common e-KYC Errors & Solutions:</p>
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
          Problem 3: PM Kisan Installment Not Received in Bank Account
        </h2>
        
        {/* Payment Success Image */}
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pm-kisan-payment-received-success.webp"
            alt="Happy farmer receiving PM Kisan payment notification on mobile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>

        <p className="mb-4">
          Missing your ₹2,000 installment? You're not alone. Thousands of farmers face payment delays 
          due to various technical and documentation issues.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Check Payment Status First</h3>
        <p className="mb-4">
          Before panicking, verify your payment status using our 
          <Link href="/pm-kisan-status" className="text-green-600 underline font-semibold"> PM Kisan Status Checker</Link> or 
          check your <Link href="/beneficiary-list" className="text-green-600 underline font-semibold">state beneficiary list</Link>.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Top 10 Reasons for Payment Failure:</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">1. Bank Account Not Aadhaar-Linked (NPCI Mapping)</h4>
            <p className="text-gray-700">Your bank account must be mapped with Aadhaar for DBT. 
            <strong> Solution:</strong> Visit your bank branch and submit Aadhaar seeding form.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">2. Incorrect Bank Account Details</h4>
            <p className="text-gray-700">Account number or IFSC code entered wrongly during registration. 
            <strong> Solution:</strong> Login to PM Kisan portal → Edit Bank Details → Submit correct information.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">3. Land Records Not Updated</h4>
            <p className="text-gray-700">Discrepancy between land records and application. 
            <strong> Solution:</strong> Visit tehsil office to update land records, then re-apply.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">4. e-KYC Pending</h4>
            <p className="text-gray-700">Mandatory e-KYC not completed. 
            <strong> Solution:</strong> Follow e-KYC steps mentioned above.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">5. Ineligible Beneficiary Category</h4>
            <p className="text-gray-700">Government employee, income tax payer, or institutional landholder. 
            <strong> Solution:</strong> If wrongly rejected, file grievance with proof.</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">📞 How to File Payment Grievance:</h4>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Call PM Kisan Helpline: <strong>155261</strong> or <strong>011-24300606</strong></li>
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
          Problem 4: Application Rejected - What to Do?
        </h2>

        {/* Rejection Fix Image */}
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pm-kisan-application-rejection-fix.webp"
            alt="Farmer reviewing documents to fix PM Kisan application rejection"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>

        <p className="mb-4">
          Application rejection can be frustrating, but most rejections happen due to correctable errors. 
          Here's how to identify and fix them.
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
              <li>Blurry or unclear documents</li>
              <li>Expired land records</li>
              <li>Name mismatch across documents</li>
              <li>Missing signature/stamp</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">✅ Re-Application Process:</h4>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Download rejection letter from PM Kisan portal</li>
            <li>Identify specific rejection reason mentioned</li>
            <li>Collect corrected/updated documents</li>
            <li>Visit CSC or agriculture office for fresh application</li>
            <li>Pay ₹30-50 application fee (if applicable)</li>
            <li>Get application receipt with tracking number</li>
            <li>Track status every 15 days</li>
          </ol>
        </div>
      </section>

      {/* State-wise Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Check Your State-wise Beneficiary List
        </h2>
        
        {/* State Map Image */}
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pm-kisan-state-beneficiary-map.webp"
            alt="India map showing PM Kisan beneficiaries across all states"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>

        <p className="mb-4">
          Each state has different land record systems and verification processes. Find your state-specific 
          information and check if your name appears in the beneficiary list.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Link href="/beneficiary-list/uttar-pradesh" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Uttar Pradesh</h4>
            <p className="text-sm text-gray-600">2.3 Crore beneficiaries</p>
          </Link>
          <Link href="/beneficiary-list/maharashtra" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Maharashtra</h4>
            <p className="text-sm text-gray-600">1.1 Crore beneficiaries</p>
          </Link>
          <Link href="/beneficiary-list/karnataka" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Karnataka</h4>
            <p className="text-sm text-gray-600">75 Lakh beneficiaries</p>
          </Link>
          <Link href="/beneficiary-list/rajasthan" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Rajasthan</h4>
            <p className="text-sm text-gray-600">68 Lakh beneficiaries</p>
          </Link>
          <Link href="/beneficiary-list/gujarat" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Gujarat</h4>
            <p className="text-sm text-gray-600">52 Lakh beneficiaries</p>
          </Link>
          <Link href="/beneficiary-list/madhya-pradesh" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <h4 className="font-bold text-blue-700">Madhya Pradesh</h4>
            <p className="text-sm text-gray-600">85 Lakh beneficiaries</p>
          </Link>
        </div>

        <p className="text-sm text-gray-600">
          <Link href="/beneficiary-list" className="text-green-600 underline font-semibold">
            View all 32 states and UTs →
          </Link>
        </p>
      </section>

      {/* Important Documents Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Essential Documents Checklist
        </h2>

        {/* Documents Image */}
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pm-kisan-documents-checklist.webp"
            alt="PM Kisan required documents - Aadhaar, land papers, bank passbook"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h3 className="font-bold mb-4">Keep These Documents Ready:</h3>
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

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Frequently Asked Questions (FAQs)
        </h2>

        {/* FAQ Support Image */}
        <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/pm-kisan-faq-support-help.webp"
            alt="PM Kisan customer support helping farmers with queries"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q1. How many installments are paid in a year?</h3>
            <p className="text-gray-700">A. PM Kisan pays ₹6,000 annually in 3 equal installments of ₹2,000 each. 
            Payments are made every 4 months (April-July, August-November, December-March).</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q2. Can I apply if I don't have land documents?</h3>
            <p className="text-gray-700">A. No, land ownership documents are mandatory. However, tenant farmers 
            can apply with lease agreement and landowner's NOC in some states.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q3. What if I sold my land after registration?</h3>
            <p className="text-gray-700">A. You must inform the agriculture department immediately. Continuing 
            to receive benefits after land sale is illegal and can lead to legal action.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q4. How long does approval take?</h3>
            <p className="text-gray-700">A. Typically 30-60 days after document verification. You can track 
            status using our <Link href="/pm-kisan-status" className="text-green-600 underline">status checker</Link>.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q5. Can I receive payment in any bank account?</h3>
            <p className="text-gray-700">A. The account must be Aadhaar-linked (NPCI mapped) and in a bank 
            that supports DBT. Most public sector banks and major private banks are enabled.</p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">Q6. Is PM Kisan taxable?</h3>
            <p className="text-gray-700">A. No, PM Kisan Samman Nidhi amount is completely tax-free and does 
            not need to be shown in income tax returns.</p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Related Resources & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/pm-kisan-status" className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2"> Check PM Kisan Status</h3>
            <p className="text-sm opacity-90">Verify your beneficiary status and payment history instantly</p>
          </Link>

          <Link href="/calculator" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">🧮 PM Kisan Calculator</h3>
            <p className="text-sm opacity-90">Calculate total benefits received and upcoming installments</p>
          </Link>

          <Link href="/beneficiary-list" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📋 State Beneficiary Lists</h3>
            <p className="text-sm opacity-90">Search your name in state-wise beneficiary databases</p>
          </Link>

          <Link href="/articles" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📚 More Articles</h3>
            <p className="text-sm opacity-90">Read guides on farming schemes, subsidies, and best practices</p>
          </Link>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Final Words
        </h2>
        
        <p className="text-lg leading-relaxed mb-4">
          PM Kisan Samman Nidhi has been a game-changer for Indian farmers, providing crucial financial 
          support for agricultural inputs and family needs. While the application and verification process 
          may seem complex, following this guide will help you overcome common obstacles.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Remember to keep your documents updated, complete e-KYC on time, and regularly check your 
          beneficiary status. If you face any issues, don't hesitate to use the helpline numbers or 
          visit your nearest agriculture office.
        </p>

        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
          <p className="font-semibold text-green-800 mb-2">📞 Need Immediate Help?</p>
          <ul className="space-y-1 text-green-700">
            <li>• PM Kisan Helpline: <strong>155261</strong> (Toll-Free)</li>
            <li>• Email Support: <strong>pmkisan-ict@gov.in</strong></li>
            <li>• Visit: <Link href="/" className="underline font-semibold">KisanStatus.com</Link> for guides and updates</li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 pt-6 border-t border-gray-300">
        <p className="text-sm text-gray-600 italic">
          <strong>Disclaimer:</strong> KisanStatus.com is an informational website and not affiliated with 
          the Government of India. For official information, always visit 
          <Link href="https://pmkisan.gov.in" className="text-blue-600 underline"> pmkisan.gov.in</Link>. 
          We provide simplified guides to help farmers understand the scheme better.
        </p>
      </section>
    </div>
  );
}