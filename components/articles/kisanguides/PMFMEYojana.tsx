import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

// ⚠️ DEAD CODE — Next.js is metadata export ko ignore karta hai.
// `export const metadata` sirf app/**/page.tsx ya layout.tsx mein kaam karta hai;
// ye ek client-imported article component hai, isliye ye block render HI nahi hota.
// Live <title>/description/canonical/OG `app/articles/[slug]/page.tsx` ke
// generateMetadata() se aate hain, jo lib/articles-data.ts padhta hai.
// >>> Title/description/canonical badalna hai to lib/articles-data.ts edit karo. <<<
// Yahan edit karne se live page pe KUCHH nahi badlega. (Ref: fixplan.md BUG-3)
export const metadata: Metadata = {
  title: 'PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide',
  description: 'PM FME Yojana complete guide. Janein micro food processing subsidy kaise lein, ODOP benefits, loan process, aur real ground reality.',
  keywords: [
    'pm fme yojana',
    'micro food processing subsidy',
    'fme scheme benefits',
    'food business loan',
    'udyam registration',
    'fssai license',
    'odop scheme'
  ],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide',
    description: 'PM FME Yojana complete guide. Janein micro food processing subsidy kaise lein, ODOP benefits, loan process, aur real ground reality.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/pm-fme-yojana-food-processing',
    images: [
      {
        url: 'https://kisanstatus.com/images/kisanguides/pmfhero.webp',
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
    images: ['https://kisanstatus.com/images/kisanguides/pmfhero.webp'],
  },
  alternates: {
    canonical: 'https://kisanstatus.com/articles/pm-fme-yojana-food-processing',
  },
};

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
      '@id': 'https://kisanstatus.com/articles/pm-fme-yojana-food-processing/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'Farming', item: 'https://kisanstatus.com/articles/category/farming' },
        { '@type': 'ListItem', position: 4, name: 'PM FME Yojana' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/pm-fme-yojana-food-processing/#article',
      headline: 'PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide',
      description: 'PM FME Yojana complete guide. Janein micro food processing subsidy kaise lein, ODOP benefits, loan process, aur real ground reality.',
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
      dateModified: '2026-08-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://kisanstatus.com/articles/pm-fme-yojana-food-processing/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/pm-fme-yojana-food-processing/#faq',
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
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {}
      <Image 
        src="/images/kisanguides/pmfhero.webp" 
        alt="Small Food Processing Unit Making Pickle - PM FME Yojana Subsidy Guide" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        PM FME Yojana 2026: Chhote Food Business Ke Liye 35% Subsidy Guide
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Sach kahoon toh:</strong> Bharat mein hazaron chhote food businesses (jaise achar, papad, bakery, ya namkeen) sirf isliye local market tak seemit reh jate hain kyunki unke paas proper branding, FSSAI license, ya modern packaging ka budget nahi hota. Aksar dekha jata hai ki jab aise micro units ko thoda financial support aur technical guidance milta hai, toh unka turnover 3-4 guna tak badh sakta hai.
        </p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        PM FME (PM Formalisation of Micro food processing Enterprises) Yojana ka maqsad bilkul yahi hai. Yeh scheme specifically un logon ke liye design ki gayi hai jo pehle se chhote level par kaam kar rahe hain, lekin ab apne business ko ek proper brand mein badalna chahte hain. Isme 35% tak ki credit-linked subsidy milti hai, jo ek chhote entrepreneur ke liye game-changer sabit ho sakti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        PM FME Kya Hai? Aur Kaun Apply Kar Sakta Hai?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM FME Yojana 2020 mein launch hui thi, jiska mukhya uddeshya unregistered micro food processing units ko formal economy mein lana hai. India mein 2.5 crore se zyada aise chhote units hain, lekin unmein se 90% se zyada bina kisi legal registration ya quality certification ke chal rahe hain. Iska seedha asar unki earning par padta hai, kyunki bina FSSAI license ke wo bade retailers ya online platforms par apna product nahi bech sakte.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-semibold">
        Eligibility: Kaun apply kar sakta hai?
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Individual entrepreneurs:</strong> Jo pehle se food processing ka kaam kar rahe hain.</li>
        <li><strong>SHGs (Self Help Groups):</strong> 4-10 mahilaon ka registered group.</li>
        <li><strong>FPOs (Farmer Producer Organizations):</strong> Kisaanon ka registered collective.</li>
        <li><strong>Cooperatives:</strong> Registered cooperative societies.</li>
        <li><strong>Existing MSME units:</strong> Jo Udyam registered hain aur food sector mein hain.</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek bahut important condition yeh hai ki aapka business already chal raha hona chahiye. Yeh scheme naya business zero se start karne ke liye nahi hai, balki existing business ko upgrade, formalize, aur expand karne ke liye hai. Agar aapne abhi tak kuch nahi kiya, toh pehle chhote level par shuruat karein, phir is scheme ke liye apply karein.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        ODOP: Ek Zila, Ek Utpaad - Iska Kya Matlab Hai?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM FME ka sabse unique aur powerful feature hai ODOP (One District One Product) concept. Iske tahat, har district ne ek specific food product choose kiya hai jo wahan traditionally banta hai ya jiske liye wahan ka raw material sabse achha hai.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Examples of ODOP Products:</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Bihar:</strong> Makhana (fox nuts) processing</li>
          <li><strong>Madhya Pradesh:</strong> Chana dal, Til (sesame) products</li>
          <li><strong>Rajasthan:</strong> Besan products, Papad</li>
          <li><strong>Maharashtra:</strong> Mango products, Cashew processing</li>
          <li><strong>Uttar Pradesh:</strong> Banana chips, Aloo bhujia</li>
          <li><strong>Punjab:</strong> Wheat products, Dairy processing</li>
          <li><strong>West Bengal:</strong> Fish processing, Mango pickle</li>
        </ul>
      </div>

      {}
      <Image 
        src="/images/kisanguides/odop-products.webp" 
        alt="ODOP Regional Food Products - Makhana, Papad, Pickle Display" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap apne district ka ODOP product process karte hain, toh aapko extra benefits milte hain:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Branding support:</strong> ₹50,000 tak brand name, logo, aur packaging design ke liye.</li>
        <li><strong>Marketing support:</strong> Exhibitions aur trade fairs mein participate karne ke liye financial help.</li>
        <li><strong>Priority approval:</strong> ODOP products ki applications district level par jaldi process hoti hain.</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Apne district ka ODOP product pata karne ke liye official <a href="https://pmfme.mofpi.gov.in/odop" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">PM FME ODOP list</a> check karein, ya apne zila ke District Industries Center (DIC) se pata karein.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Subsidy Kitni Milti Hai? Realistic Numbers
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM FME ke under 35% credit-linked subsidy milti hai. "Credit-linked" ka matlab yeh hai ki pehle aapko bank se loan lena padega, aur jab bank loan disburse karega, tab government aapko 35% amount subsidy ke roop mein wapas karegi (jo bank aapke loan principal mein adjust kar dega).
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: Neeche diye gaye numbers estimated ranges hain. Actual project cost aur subsidy amount aapke business model, state policies, aur bank ke hisaab se badal sakti hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-200 border-b border-blue-200 dark:border-blue-800 pb-2">Subsidy Structure:</h3>
        <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
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

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Example:</strong> Agar aapka total project cost ₹20 lakh hai (machinery, packaging, working capital), toh:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li>Bank se loan liya: ₹20 lakh</li>
        <li>35% subsidy claim ki: ₹7 lakh</li>
        <li>Net loan burden (jo aapko chukana hai): ₹13 lakh</li>
        <li>Effective interest rate kam ho jata hai, jisse EMI manageable rehti hai.</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Yeh subsidy capital expenditure (machinery, equipment, packaging) aur working capital dono ko cover karti hai. Par zameen ya building ki khareed par yeh subsidy nahi milti.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kis Kis Cheez Par Subsidy Milti Hai?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM FME ke under yeh sab expenses cover hote hain:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Expense Category</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Examples</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Covered?</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Plant & Machinery</td>
              <td className="py-3 px-4">Processing machines, packaging machines</td>
              <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">Yes</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Technology Upgradation</td>
              <td className="py-3 px-4">New equipment, automation</td>
              <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">Yes</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Packaging</td>
              <td className="py-3 px-4">Packaging machines, materials</td>
              <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">Yes</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Working Capital</td>
              <td className="py-3 px-4">Raw material, labor (up to 6 months)</td>
              <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">Yes</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Marketing & Branding</td>
              <td className="py-3 px-4">Logo, website, exhibitions</td>
              <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">Yes (ODOP)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">FSSAI License</td>
              <td className="py-3 px-4">Registration fees</td>
              <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">Yes</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Land/Building Purchase</td>
              <td className="py-3 px-4">Zameen ya building khareedna</td>
              <td className="py-3 px-4 font-bold text-red-600 dark:text-red-400">No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek important point: agar aap rented space mein kaam karte hain, toh rent par subsidy nahi milti. Par usi rented space ki renovation, electrical work, ya plumbing par mil sakti hai, bas rent agreement valid hona chahiye.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Application Process: Step-by-Step Ground Reality
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM FME ke under apply karne ka process thoda detailed hai, lekin agar aap step-by-step follow karein, toh mushkil nahi hai. Poore process mein 4-6 mahine lag sakte hain, isliye patience rakhein.
      </p>

      {}
      <Image 
        src="/images/kisanguides/application-process.webp" 
        alt="Entrepreneur Applying for PM FME Loan at Bank Branch" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Udyam Registration Karwayein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Sabse pehle aapka business MSME registered hona chahiye. <a href="https://udyamregistration.gov.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">Udyam Registration</a> bilkul free hai aur online ho jata hai. 1 din mein certificate mil jata hai. Yeh PM FME ke liye mandatory hai.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">FSSAI License Lein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Food business ke liye FSSAI license mandatory hai. <a href="https://foscos.fssai.gov.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">FSSAI registration</a> ke liye apply karein. Basic registration ₹100 saal ka hai, jabki state license ₹2,000 - ₹7,500 saal ka (turnover ke hisaab se) hota hai. Isme 30-45 din lag sakte hain.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Project Report (DPR) Banwayein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Kisi CA ya registered consultant se Detailed Project Report (DPR) banwayein. Isme hona chahiye:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Business overview aur ODOP alignment</li>
              <li>Machinery list with cost quotations</li>
              <li>5-year financial projection</li>
              <li>Break-even analysis</li>
            </ul>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Cost: ₹5,000 - ₹15,000. Kuch banks khud bhi bana dete hain.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Bank Se Loan Apply Karein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Apni nazdeeki bank branch jayein. PM FME ke under loan apply karein. Documents chahiye: Udyam certificate, FSSAI license, DPR, Aadhaar, PAN, bank statements (last 1 year), aur machinery quotations. Loan approval mein 30-60 din lag sakte hain. Agar aap working capital ke liye kam interest wala loan chahte hain, toh <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC) online apply karne ka tarika</Link> bhi zaroor padhein.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">PM FME Portal Par Register Karein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300"><a href="https://pmfme.mofpi.gov.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">PM FME official portal</a> par jaakar registration karein. Apni details bharein, loan sanction letter upload karein, aur application submit karein.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Verification aur Approval</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">District Industries Center (DIC) ke officers aapke unit ka physical visit karenge. Wo verify karenge ki business actually chal raha hai ya nahi. Report positive aane par approval milta hai.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">7</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Loan Disbursement aur Subsidy Claim</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bank loan disburse karega. Aap machinery khareedenge aur kaam start karenge. Phir bank subsidy amount adjust kar dega - aapko sirf net amount (loan minus subsidy) ki EMI chukani hogi.</p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Application fee ₹1,000 - ₹2,000 lagti hai (non-refundable). Process ko jaldi complete karne ke liye apne saare documents pehle se ready rakhein.
      </p>

      <ExternalLinkButton 
        url="https://pmfme.mofpi.gov.in/" 
        label="PM FME Official Portal - Apply Karein" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Ground Reality: PM FME Se Business Kaise Transform Hota Hai
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sirf theory nahi, ek typical scenario dekhte hain jo field mein aksar dekha jata hai:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
          <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Scenario 1: Ghar Ka Achar Unit</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Pehle:</strong> Ghar mein achar banta tha, ₹10,000 - ₹15,000 mahina kamai hoti thi. Product simple plastic pouches mein becha jata tha, jiski shelf life kam thi.</p>
          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>PM FME ke baad:</strong> ₹8 lakh ki subsidy mili. Ek chhoti packaging machine li gayi, aur product ko glass jars mein pack kiya gaya. FSSAI license aur ek catchy brand name register kiya gaya. Ab monthly turnover ₹2 - ₹3 lakh tak pahunch gaya hai, aur product local supermarkets mein bhi milta hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
          <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Scenario 2: SHG Papad Unit</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Pehle:</strong> 5 mahilaon ka group manual rolling karta tha. Production slow thi aur monthly income ₹20,000 - ₹25,000 ke aas-paas thi.</p>
          <p className="text-sm text-gray-700 dark:text-gray-300"><strong>PM FME ke baad:</strong> ₹10 lakh ki subsidy se automatic papad making machine li gayi. Production 5 guna badh gayi. Branded packaging start ki, aur ab monthly turnover ₹1.5 - ₹2 lakh hai.</p>
        </div>
      </div>

      {}
      <Image 
        src="/images/kisanguides/packaged-products.webp" 
        alt="Branded Packaged Food Products Ready for Market - PM FME Success" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Yeh examples dikhate hain ki PM FME se waqai business transform ho sakta hai. Par yeh tabhi hota hai jab aap quality maintain karte hain aur marketing par dhyan dete hain. Sirf subsidy lene se business apne aap nahi chalta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Documents Required: Complete Checklist
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM FME application ke liye yeh documents chahiye:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Personal Documents:</h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
          <li>✓ Aadhaar card (all applicants/partners)</li>
          <li>✓ PAN card</li>
          <li>✓ Passport-size photos</li>
          <li>✓ Address proof</li>
          <li>✓ Caste certificate (if SC/ST/OBC)</li>
        </ul>

        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Business Documents:</h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
          <li>✓ Udyam Registration Certificate</li>
          <li>✓ FSSAI License</li>
          <li>✓ GST Registration (if applicable)</li>
          <li>✓ Trade License / NOC from local body</li>
          <li>✓ Bank account statement (last 1 year)</li>
          <li>✓ ITR (last 2 years, if applicable)</li>
        </ul>

        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Project Documents:</h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>✓ Detailed Project Report (DPR)</li>
          <li>✓ Quotation for machinery/equipment</li>
          <li>✓ Business plan</li>
          <li>✓ Photos of existing unit (if any)</li>
          <li>✓ Rent agreement (if rented space)</li>
        </ul>
      </div>

      {}
      <Image 
        src="/images/kisanguides/documents-checklist.webp" 
        alt="PM FME Application Documents - Aadhaar, FSSAI, Udyam Certificate" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Sab documents self-attested hone chahiye. Original documents verification time par dikhane padenge.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Common Mistakes Jo Applicants Karte Hain
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kai applications sirf chhoti chookon ki wajah se reject ho jati hain. In common mistakes se bachein:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">1. Business Actually Nahi Chal Raha</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">PM FME existing business ko upgrade karne ke liye hai. Verification mein officers dekhenge ki unit actually kaam kar rahi hai ya nahi. Fake bills ya dummy units pakde jate hain.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">2. FSSAI License Nahi Hai</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Food business ke liye FSSAI mandatory hai. Bina FSSAI ke application seedha reject ho jayegi. Pehle FSSAI lein, phir apply karein.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">3. DPR Weak Ya Unrealistic Hai</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Project report mein financial projections realistic hone chahiye. Agar numbers bahut unrealistic hain (jaise 1 mahine mein ₹10 lakh profit dikhana), toh officers doubt karenge. Hamesha professional CA se DPR banwayein.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">4. Bank CIBIL Score Kharab Hai</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Agar aapka CIBIL score 650 se neeche hai, toh loan approval mushkil hai. Pehle CIBIL check karein, aur agar koi old default hai toh use clear karein.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        PM FME vs PMEGP: Kaunsi Scheme Better Hai?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Do similar schemes hain - PM FME aur PMEGP. Dono mein confusion hota hai. Clear karte hain:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Feature</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">PM FME</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">PMEGP</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Target</td>
              <td className="py-3 px-4">Existing micro food units</td>
              <td className="py-3 px-4">New entrepreneurs</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Subsidy %</td>
              <td className="py-3 px-4">35%</td>
              <td className="py-3 px-4">25-35%</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Max Subsidy</td>
              <td className="py-3 px-4">₹10 lakh</td>
              <td className="py-3 px-4">₹7.5 lakh (manufacturing)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Max Project Cost</td>
              <td className="py-3 px-4">₹28.57 lakh</td>
              <td className="py-3 px-4">₹25 lakh (manufacturing)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Sector</td>
              <td className="py-3 px-4">Food processing only</td>
              <td className="py-3 px-4">Any manufacturing/service</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Existing Business</td>
              <td className="py-3 px-4 font-semibold text-blue-700 dark:text-blue-400">Required</td>
              <td className="py-3 px-4">Not required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Simple rule:</strong> Agar aapka food business already chal raha hai aur aap usko upgrade karna chahte hain, toh PM FME apply karein. Agar aap naya business start karna chahte hain (food ya non-food), toh official <a href="https://www.pmegp.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">PMEGP portal</a> par apply karein. Food processing ke alawa doosri subsidy-based schemes bhi dekhna chahte hain, toh <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM Kusum solar subsidy</Link> aur <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">vermi-compost business guide</Link> ise related options hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Already food processing business chala rahe hain (chahe chhote level par).</li>
            <li>• Business ko formal banana chahte hain (FSSAI, GST, branding).</li>
            <li>• Machinery ya technology upgrade karna chahte hain.</li>
            <li>• ₹5 - ₹25 lakh ki investment (loan ke through) kar sakte hain.</li>
            <li>• Long-term vision hai (5+ saal ka plan).</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Abhi tak koi business nahi kiya (pehle PMEGP try karein).</li>
            <li>• Food processing mein interested nahi hain.</li>
            <li>• Loan lene ki capacity ya willingness nahi hai.</li>
            <li>• Quick money chahte hain (process 4-6 months ka hai).</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Meri advice:</strong> Pehle apne district ka ODOP product pata karein. Agar aap wahi product process karte hain, toh extra benefits milenge. Phir Udyam registration aur FSSAI lein. Uske baad bank jayein, loan apply karein, aur phir PM FME portal par apply karein. Apne nazdeeki District Industries Center (DIC) ke officers se zaroor consult karein, wo application mein bahut help kar sakte hain.
      </p>

      {}
      <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">1. Kya rented jagah par kaam karne walon ko PM FME subsidy milti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Haan, lekin shart yeh hai ki rent agreement valid ho. Subsidy kiraye (rent) par nahi milti, lekin agar aap us rented space mein renovation, electrical work, ya machinery installation karte hain, toh un expenses par 35% subsidy claim ki ja sakti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">2. Agar bank loan reject ho jaye, toh kya PM FME subsidy mil sakti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Nahi. PM FME ek "credit-linked" subsidy scheme hai. Iska matlab hai ki subsidy tabhi release hoti hai jab bank aapka loan approve aur disburse kar deta hai. Bina loan sanction ke subsidy claim nahi ki ja sakti.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3. Kya PM FME mein working capital ke liye alag se collateral (girvi) dena padta hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Zyadatar cases mein nahi. PM FME ke under working capital loan CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) ke cover mein aata hai, jisme ₹2 crore tak ke loan par collateral ki requirement waive ho sakti hai. Lekin final decision bank ki internal credit policy par depend karta hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">4. Kya purani machinery ko replace karne par bhi subsidy milti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Haan, PM FME "Technology Upgradation" ko bhi support karti hai. Agar aap purani, inefficient machinery ki jagah nayi, automated, ya food-safe equipment lagate hain, toh uski cost par bhi 35% subsidy claim ki ja sakti hai.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Related Guides & Financial Support
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            💳 Kisan Credit Card (KCC)
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Working capital aur setup cost ke liye low-interest loan. Timely repayment par sirf 4% effective interest.</p>
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 text-sm font-medium flex items-center gap-1">
            KCC Online Apply Guide <span>→</span>
          </Link>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            ☀️ PM Kusum Solar Subsidy
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Solar pump aur solar plant lagane par bhaari subsidy. Bijli ka kharcha kam karein.</p>
          <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-amber-700 hover:underline dark:text-amber-400 text-sm font-medium flex items-center gap-1">
            PM Kusum Details Dekhein <span>→</span>
          </Link>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            🐛 Vermi Compost Business
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Kam lagat wala organic khaad business. Setup, licensing aur marketing ka poora guide.</p>
          <Link href="/articles/vermi-compost-business-guide" className="text-green-600 hover:underline dark:text-green-400 text-sm font-medium flex items-center gap-1">
            Vermi Compost Guide Padhein <span>→</span>
          </Link>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            🍄 Mushroom Kheti (NHB Subsidy)
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Chhoti jagah mein high-value mushroom farming. NHB subsidy aur training ki jankari.</p>
          <Link href="/articles/mushroom-kheti-nhb-subsidy" className="text-purple-700 hover:underline dark:text-purple-400 text-sm font-medium flex items-center gap-1">
            Mushroom Kheti Guide <span>→</span>
          </Link>
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border border-rose-200 dark:border-rose-800 hover:shadow-md transition-shadow md:col-span-2">
          <h4 className="font-semibold text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-2">
            👵 PM Kisan Maandhan Pension
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Chhote kisanon ke liye ₹3000 monthly pension scheme. Eligibility aur registration ka process.</p>
          <Link href="/articles/PmKisanMaandhanYojanaPension" className="text-rose-700 hover:underline dark:text-rose-400 text-sm font-medium flex items-center gap-1">
            Maandhan Pension Guide Padhein <span>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article general information ke liye hai. PM FME ki guidelines aur eligibility criteria change ho sakti hain. Latest information ke liye hamesha official website pmfme.mofpi.gov.in ya apne zila ke District Industries Center se confirm karein. Kisi bhi financial decision lene se pehle qualified professionals (CAs, business consultants) se consult karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}