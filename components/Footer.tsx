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

          {/* Quick Links - RESTORED */}
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

          {/* Official Government Links - YOUR ADDITION */}
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

          {/* Helpline Section - YOUR ADDITION */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">📞</span>
              24/7 Helpline
            </h4>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 mb-4">
              <p className="text-xs text-gray-400 mb-3">
                PM Kisan ki kisi bhi problem ke liye call karein
              </p>
              <div className="space-y-2">
                <a href="tel:155261" className="block text-center bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                  📱 155261 (Toll-Free)
                </a>
                <a href="tel:01124300606" className="block text-center bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
                  📞 011-24300606
                </a>
              </div>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <p>🌐 pmkisan.gov.in</p>
              <p>⏰ Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - WITH AUTHOR CREDIT */}
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