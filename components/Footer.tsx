'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">KisanStatus.com</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Bharat ke kisaanon ke liye — PM Kisan, eKYC, kist status, aur free agricultural calculators.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>✍️</span>
              <span>By <Link href="/about" className="text-green-400 hover:underline font-medium">Sidhu Singh</Link></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  👤 About Us
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-green-400 transition-colors">
                  ⚠️ Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors">
                  🔒 Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  📧 Contact Us
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-green-400 transition-colors">
                  📚 All Articles
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-green-400 transition-colors">
                  🧮 Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Government Links */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">🏛️</span>
              Official Government Links
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  PM Kisan Portal
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Beneficiary Status
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/NewFarmerRegistration.aspx" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  New Registration
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/FarmersCorner.aspx" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Farmers Corner
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/Dashboard.aspx" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Dashboard
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/Help.aspx" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Help & Support
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support - STATIC INFO CARD (Fixed) */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">📞</span>
              Helpline & Support
            </h4>
            
            {/* ✅ UPDATED: Clear Static Info Card (Option A) - No fake chat feel */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4">
              <h5 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
                📢 Helpline Jankari
              </h5>
              <div className="space-y-2.5 text-xs text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">📞</span> 
                  <span>
                    PM Kisan Helpline: <a href="tel:155261" className="text-white font-bold hover:underline">155261</a> (Toll-Free)
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">📧</span> 
                  <span>
                    Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-white hover:underline break-all">kisanstatus.support@gmail.com</a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">⏰</span> 
                  <span>Time: Mon-Sat 9:30AM - 6:00PM</span>
                </p>
              </div>
            </div>

            {/* Facebook Link (Kept as a proper secondary CTA) */}
            <a 
              href="https://www.facebook.com/profile.php?id=61590430994270" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-lg transition-colors text-xs"
            >
              👍 Facebook Page Par Follow Karein ↗
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} KisanStatus.com — Built with ❤️ for Indian Farmers
              </p>
              <p className="mt-1 text-xs text-gray-500">
                By <Link href="/about" className="text-green-400 hover:underline font-medium">Sidhu Singh</Link> | 
                Agricultural Content Expert
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">
                Independent Information Portal
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Not affiliated with Government of India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}