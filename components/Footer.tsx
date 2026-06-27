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
            <p className="text-sm text-gray-400 leading-relaxed">
              Bharat ke kisaanon ke liye — PM Kisan, eKYC, kist status, aur free agricultural calculators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-gray-400 hover:text-green-400 transition-colors">23vi Kist Status</Link></li>
              <li><Link href="/articles/pm-kisan-ekyc-online-2026" className="text-gray-400 hover:text-green-400 transition-colors">eKYC Guide</Link></li>
              <li><Link href="/calculator" className="text-gray-400 hover:text-green-400 transition-colors">Calculators</Link></li>
              <li><Link href="/articles" className="text-gray-400 hover:text-green-400 transition-colors">All Articles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 Helpline: 155261</li>
              <li>🌐 pmkisan.gov.in</li>
              <li>✍️ By Sidhu Singh</li>
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">🏛️</span>
              Official Government Links
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  PM Kisan Official Portal
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Check Beneficiary Status
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/NewFarmerRegistration.aspx" target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  New Farmer Registration
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/FarmersCorner.aspx" target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Farmers Corner (eKYC & More)
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/Dashboard.aspx" target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Dashboard (Village Wise List)
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/Help.aspx" target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5">
                  Help & Support
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
            </ul>

            {/* Helpline Card */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 mt-4">
              <h5 className="text-sm font-bold text-green-300 mb-2">📞 24/7 Helpline</h5>
              <p className="text-xs text-gray-400 mb-3">
                PM Kisan ki kisi bhi problem ke liye call karein
              </p>
              <div className="space-y-2">
                <a href="tel:155261" className="block text-center bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
                  📱 Call: 155261 (Toll-Free)
                </a>
                <a href="tel:01124300606" className="block text-center bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
                  📞 Landline: 011-24300606
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} KisanStatus.com — Built with ❤️ for Indian Farmers</p>
          <p className="mt-2 text-xs">
            By <Link href="/about" className="text-green-400 hover:underline">Sidhu Singh</Link> | 
            Independent Information Portal (Not affiliated with Government of India)
          </p>
        </div>
      </div>
    </footer>
  );
}