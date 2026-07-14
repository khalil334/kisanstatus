import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide',
  description: 'PM FME Yojana ka complete guide. Janein micro food processing subsidy kaise lein, ODOP benefits, loan process, aur real ground reality.',
  keywords: [
    'pm fme yojana',
    'micro food processing subsidy',
    'fme scheme benefits',
    'food business loan',
    'udyam registration',
    'fssai license'
  ],
  authors: [{ name: 'KisanStatus Team' }],
  openGraph: {
    title: 'PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide',
    description: 'PM FME Yojana ka complete guide. Janein micro food processing subsidy kaise lein, ODOP benefits, loan process, aur real ground reality.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    images: [
      {
        url: '/images/kisanguides/pmfhero.webp',
        width: 1200,
        height: 630,
        alt: 'Small Food Processing Unit Making Pickle - PM FME Yojana Subsidy Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM FME Yojana 2026: Complete Guide',
    description: 'Janein micro food processing subsidy kaise lein, ODOP benefits, aur loan process ki ground reality.',
    images: ['/images/kisanguides/pmfhero.webp'],
  },
};

// ── Schema Markup (JSON-LD) ───────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kisanstatus.com/#organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kisanstatus.com/logo.webp',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kisanstatus.com/articles/pm-fme-yojana/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'PM FME Yojana' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/pm-fme-yojana/#article',
      headline: 'PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide',
      description: 'PM FME Yojana ka complete guide. Janein micro food processing subsidy kaise lein, ODOP benefits, loan process, aur real ground reality.',
      author: {
        '@type': 'Organization',
        name: 'KisanStatus Team',
        url: 'https://kisanstatus.com/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'KisanStatus.com',
        logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' },
      },
      datePublished: '2026-01-15',
      dateModified: '2026-07-14',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://kisanstatus.com/articles/pm-fme-yojana/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/pm-fme-yojana/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kya rented jagah par kaam karne walon ko PM FME subsidy milti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, lekin shart yeh hai ki rent agreement valid ho. Subsidy kiraye (rent) par nahi milti, lekin agar aap us rented space mein renovation, electrical work, ya machinery installation karte hain, toh un expenses par 35% subsidy claim ki ja sakti hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Agar bank loan reject ho jaye, toh kya PM FME subsidy mil sakti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nahi. PM FME ek "credit-linked" subsidy scheme hai. Iska matlab hai ki subsidy tabhi release hoti hai jab bank aapka loan approve aur disburse kar deta hai. Bina loan sanction ke subsidy claim nahi ki ja sakti.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya PM FME mein working capital ke liye alag se collateral (girvi) dena padta hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zyadatar cases mein nahi. PM FME ke under working capital loan CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) ke cover mein aata hai, jisme ₹2 crore tak ke loan par collateral ki requirement waive ho sakti hai. Lekin final decision bank ki internal credit policy par depend karta hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya purani machinery ko replace karne par bhi subsidy milti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, PM FME "Technology Upgradation" ko bhi support karti hai. Agar aap purani, inefficient machinery ki jagah nayi, automated, ya food-safe equipment lagate hain, toh uski cost par bhi 35% subsidy claim ki ja sakti hai.',
          },
        },
      ],
    },
  ],
};

export default function PMFMEYojana() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Image 
        src="/images/kisanguides/pmfhero.webp" 
        alt="Small Food Processing Unit Making Pickle - PM FME Yojana Subsidy Guide" 
        width={1200} 
        height={630} 
        priority
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide
      </h1>
      
      <p className="text-lg mb-4 italic">
        Bharat mein hazaron chhote food businesses (jaise achar, papad, bakery, ya namkeen) sirf isliye local market tak seemit reh jate hain kyunki unke paas proper branding, FSSAI license, ya modern packaging ka budget nahi hota.
      </p>
      
      <p className="mb-6">
        Aksar dekha jata hai ki jab aise micro units ko thoda financial support aur technical guidance milta hai, toh unka turnover 3-4 guna tak badh sakta hai. PM FME (PM Formalisation of Micro food processing Enterprises) Yojana ka maqsad bilkul yahi hai. Yeh scheme specifically un logon ke liye design ki gayi hai jo pehle se chhote level par kaam kar rahe hain, lekin ab apne business ko ek proper brand mein badalna chahte hain. Isme 35% tak ki credit-linked subsidy milti hai, jo ek chhote entrepreneur ke liye game-changer sabit ho sakti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        PM FME Kya Hai? Aur Kaun Apply Kar Sakta Hai?
      </h2>
      
      <p className="mb-4">
        PM FME Yojana 2020 mein launch hui thi, jiska mukhya uddeshya unregistered micro food processing units ko formal economy mein lana hai. India mein 2.5 crore se zyada aise chhote units hain, lekin unmein se 90% se zyada bina kisi legal registration ya quality certification ke chal rahe hain. Iska seedha asar unki earning par padta hai, kyunki bina FSSAI license ke wo bade retailers ya online platforms par apna product nahi bech sakte.
      </p>

      <p className="mb-6">
        <strong>Eligibility:</strong> Kaun apply kar sakta hai?
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Individual entrepreneurs:</strong> Jo pehle se food processing ka kaam kar rahe hain.</li>
        <li><strong>SHGs (Self Help Groups):</strong> 4-10 mahilaon ka registered group.</li>
        <li><strong>FPOs (Farmer Producer Organizations):</strong> Kisaanon ka registered collective.</li>
        <li><strong>Cooperatives:</strong> Registered cooperative societies.</li>
        <li><strong>Existing MSME units:</strong> Jo Udyam registered hain aur food sector mein hain.</li>
      </ul>

      <p className="mb-6">
        Ek bahut important condition yeh hai ki aapka business already chal raha hona chahiye. Yeh scheme naya business zero se start karne ke liye nahi hai, balki existing business ko upgrade, formalize, aur expand karne ke liye hai. Agar aapne abhi tak kuch nahi kiya, toh pehle chhote level par shuruat karein, phir is scheme ke liye apply karein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        ODOP: Ek Zila, Ek Utpaad - Iska Kya Matlab Hai?
      </h2>
      
      <p className="mb-4">
        PM FME ka sabse unique aur powerful feature hai ODOP (One District One Product) concept. Iske tahat, har district ne ek specific food product choose kiya hai jo wahan traditionally banta hai ya jiske liye wahan ka raw material sabse achha hai.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">Examples of ODOP Products:</h3>
        <ul className="space-y-2">
          <li><strong>Bihar:</strong> Makhana (fox nuts) processing</li>
          <li><strong>Madhya Pradesh:</strong> Chana dal, Til (sesame) products</li>
          <li><strong>Rajasthan:</strong> Besan products, Papad</li>
          <li><strong>Maharashtra:</strong> Mango products, Cashew processing</li>
          <li><strong>Uttar Pradesh:</strong> Banana chips, Aloo bhujia</li>
          <li><strong>Punjab:</strong> Wheat products, Dairy processing</li>
          <li><strong>West Bengal:</strong> Fish processing, Mango pickle</li>
        </ul>
      </div>

      {/* Image 2: ODOP Products */}
      <Image 
        src="/images/kisanguides/odop-products.webp" 
        alt="ODOP Regional Food Products - Makhana, Papad, Pickle Display" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <p className="mb-4">
        Agar aap apne district ka ODOP product process karte hain, toh aapko extra benefits milte hain:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Branding support:</strong> ₹50,000 tak brand name, logo, aur packaging design ke liye.</li>
        <li><strong>Marketing support:</strong> Exhibitions aur trade fairs mein participate karne ke liye financial help.</li>
        <li><strong>Priority approval:</strong> ODOP products ki applications district level par jaldi process hoti hain.</li>
      </ul>

      <p className="mb-6">
        Apne district ka ODOP product pata karne ke liye <Link href="/odop-products-list" className="text-blue-600 hover:underline">ODOP products list</Link> check karein, ya apne zila ke District Industries Center (DIC) se pata karein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Subsidy Kitni Milti Hai? Realistic Numbers
      </h2>
      
      <p className="mb-4">
        PM FME ke under 35% credit-linked subsidy milti hai. "Credit-linked" ka matlab yeh hai ki pehle aapko bank se loan lena padega, aur jab bank loan disburse karega, tab government aapko 35% amount subsidy ke roop mein wapas karegi (jo bank aapke loan principal mein adjust kar dega).
      </p>

      <p className="mb-4 text-sm text-gray-600 italic">
        Note: Neeche diye gaye numbers estimated ranges hain. Actual project cost aur subsidy amount aapke business model, state policies, aur bank ke hisaab se badal sakti hai.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3">Subsidy Structure:</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Subsidy Percentage:</span>
            <span className="font-semibold">35% of project cost</span>
          </li>
          <li className="flex justify-between">
            <span>Maximum Subsidy Limit:</span>
            <span className="font-semibold">₹10 lakh per unit</span>
          </li>
          <li className="flex justify-between">
            <span>Maximum Project Cost:</span>
            <span className="font-semibold">₹28.57 lakh (35% of this = ₹10 lakh)</span>
          </li>
          <li className="flex justify-between">
            <span>Branding & Marketing Support:</span>
            <span className="font-semibold">₹50,000 (separate, for ODOP units)</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        <strong>Example:</strong> Agar aapka total project cost ₹20 lakh hai (machinery, packaging, working capital), toh:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Bank se loan liya: ₹20 lakh</li>
        <li>35% subsidy claim ki: ₹7 lakh</li>
        <li>Net loan burden (jo aapko chukana hai): ₹13 lakh</li>
        <li>Effective interest rate kam ho jata hai, jisse EMI manageable rehti hai.</li>
      </ul>

      <p className="mb-6">
        Yeh subsidy capital expenditure (machinery, equipment, packaging) aur working capital dono ko cover karti hai. Par zameen ya building ki khareed par yeh subsidy nahi milti.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kis Kis Cheez Par Subsidy Milti Hai?
      </h2>
      
      <p className="mb-4">
        PM FME ke under yeh sab expenses cover hote hain:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Expense Category</th>
              <th className="py-2 px-4 border-b text-left">Examples</th>
              <th className="py-2 px-4 border-b text-left">Covered?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Plant & Machinery</td>
              <td className="py-2 px-4 border-b">Processing machines, packaging machines</td>
              <td className="py-2 px-4 border-b text-green-600 font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Technology Upgradation</td>
              <td className="py-2 px-4 border-b">New equipment, automation</td>
              <td className="py-2 px-4 border-b text-green-600 font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Packaging</td>
              <td className="py-2 px-4 border-b">Packaging machines, materials</td>
              <td className="py-2 px-4 border-b text-green-600 font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Working Capital</td>
              <td className="py-2 px-4 border-b">Raw material, labor (up to 6 months)</td>
              <td className="py-2 px-4 border-b text-green-600 font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Marketing & Branding</td>
              <td className="py-2 px-4 border-b">Logo, website, exhibitions</td>
              <td className="py-2 px-4 border-b text-green-600 font-bold">Yes (ODOP)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">FSSAI License</td>
              <td className="py-2 px-4 border-b">Registration fees</td>
              <td className="py-2 px-4 border-b text-green-600 font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Land/Building Purchase</td>
              <td className="py-2 px-4 border-b">Zameen ya building khareedna</td>
              <td className="py-2 px-4 border-b text-red-600 font-bold">No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6">
        Ek important point: agar aap rented space mein kaam karte hain, toh rent par subsidy nahi milti. Par usi rented space ki renovation, electrical work, ya plumbing par mil sakti hai, bas rent agreement valid hona chahiye.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Application Process: Step-by-Step Ground Reality
      </h2>
      
      <p className="mb-4">
        PM FME ke under apply karne ka process thoda detailed hai, lekin agar aap step-by-step follow karein, toh mushkil nahi hai. Poore process mein 4-6 mahine lag sakte hain, isliye patience rakhein.
      </p>

      {/* Image 3: Application Process */}
      <Image 
        src="/images/kisanguides/application-process.webp" 
        alt="Entrepreneur Applying for PM FME Loan at Bank Branch" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 1: Udyam Registration Karwayein</h3>
          <p className="mt-2">
            Sabse pehle aapka business MSME registered hona chahiye. <Link href="/udyam-registration" className="text-blue-600 hover:underline">Udyam Registration</Link> bilkul free hai aur online ho jata hai. 1 din mein certificate mil jata hai. Yeh PM FME ke liye mandatory hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 2: FSSAI License Lein</h3>
          <p className="mt-2">
            Food business ke liye FSSAI license mandatory hai. <Link href="/fssai-registration" className="text-blue-600 hover:underline">FSSAI registration</Link> ke liye apply karein. Basic registration ₹100 saal ka hai, jabki state license ₹2,000 - ₹7,500 saal ka (turnover ke hisaab se) hota hai. Isme 30-45 din lag sakte hain.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 3: Project Report (DPR) Banwayein</h3>
          <p className="mt-2">
            Kisi CA ya registered consultant se Detailed Project Report (DPR) banwayein. Isme hona chahiye:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Business overview aur ODOP alignment</li>
            <li>Machinery list with cost quotations</li>
            <li>5-year financial projection</li>
            <li>Break-even analysis</li>
          </ul>
          <p className="mt-2">Cost: ₹5,000 - ₹15,000. Kuch banks khud bhi bana dete hain.</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 4: Bank Se Loan Apply Karein</h3>
          <p className="mt-2">
            Apni nazdeeki bank branch jayein. PM FME ke under loan apply karein. Documents chahiye: Udyam certificate, FSSAI license, DPR, Aadhaar, PAN, bank statements (last 1 year), aur machinery quotations. Loan approval mein 30-60 din lag sakte hain.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 5: PM FME Portal Par Register Karein</h3>
          <p className="mt-2">
            <Link href="/food-processing-license" className="text-blue-600 hover:underline">PM FME official portal</Link> par jaakar registration karein. Apni details bharein, loan sanction letter upload karein, aur application submit karein.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 6: Verification aur Approval</h3>
          <p className="mt-2">
            District Industries Center (DIC) ke officers aapke unit ka physical visit karenge. Wo verify karenge ki business actually chal raha hai ya nahi. Report positive aane par approval milta hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 7: Loan Disbursement aur Subsidy Claim</h3>
          <p className="mt-2">
            Bank loan disburse karega. Aap machinery khareedenge aur kaam start karenge. Phir bank subsidy amount adjust kar dega - aapko sirf net amount (loan minus subsidy) ki EMI chukani hogi.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Application fee ₹1,000 - ₹2,000 lagti hai (non-refundable). Process ko jaldi complete karne ke liye apne saare documents pehle se ready rakhein.
      </p>

      <ExternalLinkButton 
        url="https://pmfme.mofpi.gov.in/" 
        label="PM FME Official Portal - Apply Karein" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Ground Reality: PM FME Se Business Kaise Transform Hota Hai
      </h2>
      
      <p className="mb-4">
        Sirf theory nahi, ek typical scenario dekhte hain jo field mein aksar dekha jata hai:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold text-lg">Scenario 1: Ghar Ka Achar Unit</h3>
          <p className="mt-2">
            <strong>Pehle:</strong> Ghar mein achar banta tha, ₹10,000 - ₹15,000 mahina kamai hoti thi. Product simple plastic pouches mein becha jata tha, jiski shelf life kam thi.
          </p>
          <p className="mt-2">
            <strong>PM FME ke baad:</strong> ₹8 lakh ki subsidy mili. Ek chhoti packaging machine li gayi, aur product ko glass jars mein pack kiya gaya. FSSAI license aur ek catchy brand name register kiya gaya. Ab monthly turnover ₹2 - ₹3 lakh tak pahunch gaya hai, aur product local supermarkets mein bhi milta hai.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold text-lg">Scenario 2: SHG Papad Unit</h3>
          <p className="mt-2">
            <strong>Pehle:</strong> 5 mahilaon ka group manual rolling karta tha. Production slow thi aur monthly income ₹20,000 - ₹25,000 ke aas-paas thi.
          </p>
          <p className="mt-2">
            <strong>PM FME ke baad:</strong> ₹10 lakh ki subsidy se automatic papad making machine li gayi. Production 5 guna badh gayi. Branded packaging start ki, aur ab monthly turnover ₹1.5 - ₹2 lakh hai.
          </p>
        </div>
      </div>

      {/* Image 4: Packaged Products */}
      <Image 
        src="/images/kisanguides/packaged-products.webp" 
        alt="Branded Packaged Food Products Ready for Market - PM FME Success" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <p className="mb-6">
        Yeh examples dikhate hain ki PM FME se waqai business transform ho sakta hai. Par yeh tabhi hota hai jab aap quality maintain karte hain aur marketing par dhyan dete hain. Sirf subsidy lene se business apne aap nahi chalta.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Documents Required: Complete Checklist
      </h2>
      
      <p className="mb-4">
        PM FME application ke liye yeh documents chahiye:
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">Personal Documents:</h3>
        <ul className="space-y-2">
          <li>✓ Aadhaar card (all applicants/partners)</li>
          <li>✓ PAN card</li>
          <li>✓ Passport-size photos</li>
          <li>✓ Address proof</li>
          <li>✓ Caste certificate (if SC/ST/OBC)</li>
        </ul>

        <h3 className="font-bold text-lg mb-3 mt-4">Business Documents:</h3>
        <ul className="space-y-2">
          <li>✓ Udyam Registration Certificate</li>
          <li>✓ FSSAI License</li>
          <li>✓ GST Registration (if applicable)</li>
          <li>✓ Trade License / NOC from local body</li>
          <li>✓ Bank account statement (last 1 year)</li>
          <li>✓ ITR (last 2 years, if applicable)</li>
        </ul>

        <h3 className="font-bold text-lg mb-3 mt-4">Project Documents:</h3>
        <ul className="space-y-2">
          <li>✓ Detailed Project Report (DPR)</li>
          <li>✓ Quotation for machinery/equipment</li>
          <li>✓ Business plan</li>
          <li>✓ Photos of existing unit (if any)</li>
          <li>✓ Rent agreement (if rented space)</li>
        </ul>
      </div>

      {/* Image 5: Documents Checklist */}
      <Image 
        src="/images/kisanguides/documents-checklist.webp" 
        alt="PM FME Application Documents - Aadhaar, FSSAI, Udyam Certificate" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <p className="mb-6">
        Sab documents self-attested hone chahiye. Original documents verification time par dikhane padenge.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Common Mistakes Jo Applicants Karte Hain
      </h2>
      
      <p className="mb-4">
        Kai applications sirf chhoti chookon ki wajah se reject ho jati hain. In common mistakes se bachein:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">1. Business Actually Nahi Chal Raha</h3>
          <p className="mt-2">
            PM FME existing business ko upgrade karne ke liye hai. Verification mein officers dekhenge ki unit actually kaam kar rahi hai ya nahi. Fake bills ya dummy units pakde jate hain.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">2. FSSAI License Nahi Hai</h3>
          <p className="mt-2">
            Food business ke liye FSSAI mandatory hai. Bina FSSAI ke application seedha reject ho jayegi. Pehle FSSAI lein, phir apply karein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">3. DPR Weak Ya Unrealistic Hai</h3>
          <p className="mt-2">
            Project report mein financial projections realistic hone chahiye. Agar numbers bahut unrealistic hain (jaise 1 mahine mein ₹10 lakh profit dikhana), toh officers doubt karenge. Hamesha professional CA se DPR banwayein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">4. Bank CIBIL Score Kharab Hai</h3>
          <p className="mt-2">
            Agar aapka CIBIL score 650 se neeche hai, toh loan approval mushkil hai. Pehle CIBIL check karein, aur agar koi old default hai toh use clear karein.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        PM FME vs PMEGP: Kaunsi Scheme Better Hai?
      </h2>
      
      <p className="mb-4">
        Do similar schemes hain - PM FME aur PMEGP. Dono mein confusion hota hai. Clear karte hain:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Feature</th>
              <th className="py-2 px-4 border-b text-left">PM FME</th>
              <th className="py-2 px-4 border-b text-left">PMEGP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Target</td>
              <td className="py-2 px-4 border-b">Existing micro food units</td>
              <td className="py-2 px-4 border-b">New entrepreneurs</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Subsidy %</td>
              <td className="py-2 px-4 border-b">35%</td>
              <td className="py-2 px-4 border-b">25-35%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Max Subsidy</td>
              <td className="py-2 px-4 border-b">₹10 lakh</td>
              <td className="py-2 px-4 border-b">₹7.5 lakh (manufacturing)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Max Project Cost</td>
              <td className="py-2 px-4 border-b">₹28.57 lakh</td>
              <td className="py-2 px-4 border-b">₹25 lakh (manufacturing)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Sector</td>
              <td className="py-2 px-4 border-b">Food processing only</td>
              <td className="py-2 px-4 border-b">Any manufacturing/service</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Existing Business</td>
              <td className="py-2 px-4 border-b">Required</td>
              <td className="py-2 px-4 border-b">Not required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        <strong>Simple rule:</strong> Agar aapka food business already chal raha hai aur aap usko upgrade karna chahte hain, toh PM FME apply karein. Agar aap naya business start karna chahte hain (food ya non-food), toh <Link href="/pmegp-yojana" className="text-blue-600 hover:underline">PMEGP</Link> apply karein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        PM FME unke liye hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Already food processing business chala rahe hain (chahe chhote level par).</li>
        <li>Business ko formal banana chahte hain (FSSAI, GST, branding).</li>
        <li>Machinery ya technology upgrade karna chahte hain.</li>
        <li>₹5 - ₹25 lakh ki investment (loan ke through) kar sakte hain.</li>
        <li>Long-term vision hai (5+ saal ka plan).</li>
      </ul>

      <p className="mb-4">
        PM FME unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Abhi tak koi business nahi kiya (pehle PMEGP try karein).</li>
        <li>Food processing mein interested nahi hain.</li>
        <li>Loan lene ki capacity ya willingness nahi hai.</li>
        <li>Quick money chahte hain (process 4-6 months ka hai).</li>
      </ul>

      <p className="mb-6">
        <strong>Meri advice:</strong> Pehle apne district ka ODOP product pata karein. Agar aap wahi product process karte hain, toh extra benefits milenge. Phir Udyam registration aur FSSAI lein. Uske baad bank jayein, loan apply karein, aur phir PM FME portal par apply karein. Apne nazdeeki District Industries Center (DIC) ke officers se zaroor consult karein, wo application mein bahut help kar sakte hain.
      </p>

      {/* FAQ Section */}
      <h2 id="faq" className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Kya rented jagah par kaam karne walon ko PM FME subsidy milti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Haan, lekin shart yeh hai ki rent agreement valid ho. Subsidy kiraye (rent) par nahi milti, lekin agar aap us rented space mein renovation, electrical work, ya machinery installation karte hain, toh un expenses par 35% subsidy claim ki ja sakti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Agar bank loan reject ho jaye, toh kya PM FME subsidy mil sakti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Nahi. PM FME ek "credit-linked" subsidy scheme hai. Iska matlab hai ki subsidy tabhi release hoti hai jab bank aapka loan approve aur disburse kar deta hai. Bina loan sanction ke subsidy claim nahi ki ja sakti.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Kya PM FME mein working capital ke liye alag se collateral (girvi) dena padta hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Zyadatar cases mein nahi. PM FME ke under working capital loan CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) ke cover mein aata hai, jisme ₹2 crore tak ke loan par collateral ki requirement waive ho sakti hai. Lekin final decision bank ki internal credit policy par depend karta hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Kya purani machinery ko replace karne par bhi subsidy milti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Haan, PM FME "Technology Upgradation" ko bhi support karti hai. Agar aap purani, inefficient machinery ki jagah nayi, automated, ya food-safe equipment lagate hain, toh uski cost par bhi 35% subsidy claim ki ja sakti hai.</p>
        </div>
      </div>

      <p className="mb-6 italic text-gray-600">
        Disclaimer: Yeh article general information ke liye hai. PM FME ki guidelines aur eligibility criteria change ho sakti hain. Latest information ke liye hamesha official website pmfme.mofpi.gov.in ya apne zila ke District Industries Center se confirm karein. Kisi bhi financial decision lene se pehle qualified professionals (CAs, business consultants) se consult karein.
      </p>
    </article>
  );
}