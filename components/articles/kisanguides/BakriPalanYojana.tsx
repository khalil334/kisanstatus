'use client';

import ExternalLinkButton from '@/components/ExternalLinkButton';
import Image from 'next/image';
import Link from 'next/link';

export default function BakriPalanYojanaNLMS() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Bakri Palan Yojana NLM Subsidy 2024: 50% तक सब्सिडी, पूरी जानकारी और सही आवेदन प्रक्रिया
      </h1>

      <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>जरूरी जानकारी:</strong> National Livestock Mission (NLM-EDP) के तहत goat farming के लिए 50% capital subsidy 
          मिलती है - maximum ₹50 lakh तक, सही portal है nlm.udyamimitra.in। पूरी प्रक्रिया जानिए।
        </p>
      </div>

      <Image 
        src="/images/kisanguides/bakri-palan-nlm-subsidy.webp"
        alt="Bakri Palan Yojana NLM Subsidy - Goat Farming Scheme India"
        width={800}
        height={450}
        className="rounded-lg shadow-md mb-8 w-full"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">
        NLM Bakri Palan Subsidy - असलियत क्या है?
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Department of Animal Husbandry and Dairying, Government of India 2014-15 से National Livestock Mission चला रहा है, 2021-22 में revise होकर 2026 तक extend हो गया।
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        50% capital subsidy मिलती है NLM-EDP के तहत। ₹50 lakh maximum limit है। दो installments में पैसा आता है।
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Subsidy Amount और Unit Size - सही Calculation
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Unit size बड़ी होगी तो subsidy भी बड़ी मिलेगी - proportional system है यह, छोटे unit पर कम, बड़े पर ज्यादा।
      </p>

      <Image 
        src="/images/kisanguides/nlm-subsidy-calculation.webp"
        alt="NLM Subsidy Calculation for Goat Farming Unit Size"
        width={800}
        height={450}
        className="rounded-lg shadow-md mb-6 w-full"
      />

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Unit Size</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Female + Male</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left text-gray-900 dark:text-gray-100">Subsidy (50%)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Minimum Unit</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">100 + 5</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">₹10 Lakh</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Medium Unit</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">200-300 + 10-15</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">₹20-30 Lakh</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Maximum Unit</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">500 + 25</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">₹50 Lakh</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        100 female goats + 5 male से start करके 500 female + 25 male तक का unit बना सकते हैं, subsidy proportionally बढ़ती जाती है।
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        कौन Apply कर सकता है? Eligibility Criteria
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aapko ye pata hona chahiye ki individual farmers ही नहीं, groups भी eligible हैं इस scheme में।
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Eligible Categories:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>✓ Individual Farmers</li>
            <li>✓ Self-Help Groups (SHG)</li>
            <li>✓ Farmer Producer Companies (FPC)</li>
            <li>✓ Farmer Co-operative Societies</li>
            <li>✓ Joint Liability Groups (JLG)</li>
            <li>✓ Section 8 Companies</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Basic Requirements:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Indian Citizen</li>
            <li>• Valid land documents (owned or lease)</li>
            <li>• Active bank account</li>
            <li>• Detailed Project Report (DPR)</li>
            <li>• GIS location of project site</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Required Documents - क्या-क्या चाहिए?
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Documents ka jhanjhat hai, but zaroori hai - properly arrange karke rakho sab kuch.
      </p>

      <Image 
        src="/images/kisanguides/nlm-required-documents.webp"
        alt="Documents Required for NLM Goat Farming Subsidy Application"
        width={800}
        height={450}
        className="rounded-lg shadow-md mb-6 w-full"
      />

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg">
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li><strong>Aadhaar Card</strong> - Identity verification के लिए</li>
          <li><strong>PAN Card</strong> - Financial transactions के लिए mandatory</li>
          <li><strong>Land Documents</strong> - Registry, खतौनी या lease agreement (clear और updated)</li>
          <li><strong>Bank Passbook</strong> - Active account की copy</li>
          <li><strong>Cancelled Cheque</strong> - Bank account verification के लिए</li>
          <li><strong>Bank Mandate Form</strong> - Direct Benefit Transfer के लिए</li>
          <li><strong>Detailed Project Report (DPR)</strong> - Complete business plan</li>
          <li><strong>GIS Location</strong> - Project site की geographic location</li>
          <li><strong>Passport Size Photos</strong> - Recent photographs</li>
        </ol>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        DPR बनाने में help चाहिए तो nearest Animal Husbandry Department office से contact कर लो।
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Online Application Process - Step by Step
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        पूरी तरह online process है यह, सही portal use करना बहुत important है - गलत जगह apply किया तो समय बर्बाद।
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold">
          Official Application Portal: <a href="https://nlm.udyamimitra.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://nlm.udyamimitra.in</a>
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          General Information: <a href="https://dahd.gov.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">dahd.gov.in</a> या <a href="https://www.dahd.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.dahd.nic.in</a>
        </p>
      </div>

      <div className="space-y-4 my-8">
        <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Portal पर Registration
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              nlm.udyamimitra.in पर जाकर register करें, mobile number और email verify करने के बाद OTP confirmation होगा।
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Application Form भरें
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Form खोलो। Details fill करो। Personal, land, project - सब carefully।
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Documents Upload
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Scanned copies upload करें, file size guidelines follow करनी होंगी, PDF format preferred है।
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            4
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Submit और Acknowledgment
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Submit करो। Number milega। Save kar lo - tracking ke liye chahiye.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Approval Process - कैसे मिलती है subsidy?
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Lengthy process है लेकिन transparent है - State Level Executive Committee (SLEC) application review करती है, Central Executive Committee (CEC) final approval देती है।
      </p>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border border-purple-200 dark:border-purple-800">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-700 dark:text-purple-300">1.</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>SLEC Approval:</strong> State Level Executive Committee आपकी application review करती है
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-700 dark:text-purple-300">2.</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>CEC Approval:</strong> Central Executive Committee final approval देती है
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-700 dark:text-purple-300">3.</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>SIDBI Fund Release:</strong> SIDBI funds को lender/bank को release करता है
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-700 dark:text-purple-300">4.</span>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>Bank Transfer:</strong> Bank subsidy amount को beneficiary के account में transfer करता है
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        दो installments में पैसा आता है। पहली installment project start पर। दूसरी progress report submit करने के बाद।
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        क्या Cover होता है और क्या नहीं?
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Bahut se log galat assumptions le lete hain, ye samajhna zaroori hai ki subsidy mein kya cover hota hai aur kya nahi.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">✓ Covered Items:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Goat/Sheep purchase (breeding stock)</li>
            <li>• Shed construction</li>
            <li>• Feeding equipment</li>
            <li>• Veterinary infrastructure</li>
            <li>• Breeding management setup</li>
            <li>• Basic infrastructure development</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">❌ NOT Covered:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Land cost या rent</li>
            <li>• Vehicles purchase</li>
            <li>• Working capital</li>
            <li>• Operational expenses</li>
            <li>• Salary payments</li>
            <li>• Marketing expenses</li>
          </ul>
        </div>
      </div>

      <Image 
        src="/images/kisanguides/goat-farming-shed-construction.webp"
        alt="Goat Farming Shed Construction under NLM Subsidy"
        width={800}
        height={450}
        className="rounded-lg shadow-md mb-6 w-full"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Common Mistakes - Rejection के मुख्य कारण
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Applications reject ho jaati hain - chhoti-chhoti galtiyan hoti hain jo avoid ki ja sakti hain.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-red-600 dark:text-red-400">Incomplete Documentation:</strong> एक भी document missing है तो application hold पर चली जाती है।
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-red-600 dark:text-red-400">Wrong Portal:</strong> nlm.gov.in पर apply करना - सही portal nlm.udyamimitra.in है, ye yaad rakho.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-red-600 dark:text-red-400">Unrealistic DPR:</strong> Project report में unrealistic targets या wrong calculations
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-red-600 dark:text-red-400">Land Issues:</strong> Land documents clear नहीं हैं या lease agreement valid नहीं है
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4 my-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Q1. क्या backyard goat farming के लिए भी subsidy मिलती है?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            NLM-EDP में minimum unit size 100 female + 5 male है, छोटे backyard units के लिए अलग-अलग states की schemes check करें।
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Q2. Subsidy मिलने में कितना time लगता है?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            SLEC और CEC approval में 2-3 महीने लगते हैं। Fund release aur bank transfer mein additional time. Total 4-6 months realistic hai.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Q3. क्या loan भी ले सकते हैं subsidy के साथ?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            हां, subsidy 50% है, बाकी 50% के लिए bank से term loan ले सकते हैं।
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Q4. क्या मैं पहले से existing farm expand कर सकता हूं?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            NLM-EDP primarily new units के लिए है। Existing farm expansion ke liye state Animal Husbandry Department se confirm karo - state-wise variations ho sakte hain.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Q5. Application reject होने पर दोबारा apply कर सकते हैं?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            हां। Reason pata karo. Corrections karo. Dobara apply karo. Koi restriction nahi hai.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Official Resources और Help
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Confusion ya doubt ho to official sources se hi information lo - galat jagah se puchoge to galat jawab milenge.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
          Verified Official Links:
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Application Portal:</strong><br />
            <ExternalLinkButton 
              url="https://nlm.udyamimitra.in"
              label="Apply Online - NLM Udyamimitra Portal"
            />
          </li>
          <li className="mt-4">
            <strong>General Information:</strong><br />
            <a href="https://dahd.gov.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
              dahd.gov.in (Department of Animal Husbandry and Dairying)
            </a>
          </li>
          <li className="mt-2">
            <a href="https://www.dahd.nic.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
              www.dahd.nic.in (Alternative portal)
            </a>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Helpline ke liye nearest Animal Husbandry and Veterinary Department office se contact karo. State-wise officers available hain.
      </p>

      <Image 
        src="/images/kisanguides/nlm-application-help.webp"
        alt="NLM Application Help and Support Resources"
        width={800}
        height={450}
        className="rounded-lg shadow-md mb-6 w-full"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Final Thoughts
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Goat farming viable business option hai, NLM subsidy ise aur feasible bana deti hai, patience rakhna padega kyonki process mein time lagta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sahi planning karo. Documentation prepare karo. Guidelines follow karo.
      </p>

      {/* Related Articles Section - Stylish UI/UX */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">📚</span>
          Related Articles on KisanStatus
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Agar aap animal husbandry aur farming subsidies mein interested hain, toh ye articles bhi padhein:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Animal Husbandry Category */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">
                🐃
              </div>
              <h4 className="text-lg font-bold text-green-800 dark:text-green-300">
                Animal Husbandry Guides
              </h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/kisanguides/murrah-bhains-palan" 
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                >
                  <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                  <div>
                    <div className="font-semibold">Murrah Bhains Palan</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete buffalo farming guide</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/kisanguides/poultry-farming-subsidy" 
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                >
                  <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                  <div>
                    <div className="font-semibold">Poultry Farming Subsidy 2024</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Chicken farming with government support</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Subsidy Schemes Category */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                💰
              </div>
              <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">
                Government Subsidy Schemes
              </h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/kisanguides/fisheries-subsidy-scheme" 
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  <div>
                    <div className="font-semibold">Fisheries Subsidy Scheme</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Matsya Palan - PM Matsya Sampada</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/kisanguides/organic-farming-guide" 
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  <div>
                    <div className="font-semibold">Organic Farming Guide</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Step-by-step organic certification</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            More Farming Resources
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link 
              href="/kisanguides/drip-sprinkler-irrigation" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <span className="text-purple-600">💧</span>
              <span className="font-medium">Drip & Sprinkler Irrigation</span>
            </Link>
            <Link 
              href="/kisanguides/vermi-compost-business" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <span className="text-purple-600">🪱</span>
              <span className="font-medium">Vermi Compost Business</span>
            </Link>
            <Link 
              href="/kisanguides/mushroom-kheti" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <span className="text-purple-600">🍄</span>
              <span className="font-medium">Mushroom Kheti Guide</span>
            </Link>
            <Link 
              href="/kisanguides/madhumakhi-palan" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <span className="text-purple-600">🐝</span>
              <span className="font-medium">Madhumakhi Palan (Beekeeping)</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          यह information educational purpose के लिए है। Scheme details state-wise aur time-wise change ho sakti hain. Latest aur exact figures ke liye official NLM guidelines ya apne state Animal Husbandry Department se verify zaroor karein. Article last updated: 2024
        </p>
      </div>
    </article>
  );
}