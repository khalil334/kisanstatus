/**
 * Footer Component — KisanStatus.com
 * Disclaimer, contact, copyright, navigation links
 */
import Link from 'next/link';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Disclaimer banner */}
      <div className="bg-accent-dark text-white text-sm text-center py-3 px-4">
        ⚠️ <strong>Disclaimer:</strong> KisanStatus.com is NOT an official Government of India website.
        For official information, visit{' '}
        <a
          href="https://pmkisan.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-yellow-300 transition-colors"
        >
          pmkisan.gov.in ↗
        </a>
      </div>

      {/* Main footer content */}
      <div className="container-site py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-lg">KisanStatus.com</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              PM Kisan ki sahi aur up-to-date jankari ke liye ek bharosemand jagah. Status check, kist ki taareekh, aur beneficiary list — sab ek hi website par.
            </p>
            {/* Author Credit */}
            <div className="flex items-center gap-2 py-2 px-3 bg-white/5 rounded-lg border border-white/10">
              <span className="text-xl" aria-hidden="true">🌾</span>
              <div>
                <p className="text-xs text-gray-400">Author &amp; Expert</p>
                <p className="text-sm font-semibold text-white">Sidhu Singh</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              📧{' '}
              <a href="mailto:kisanstatus.support@gmail.com" className="hover:text-green-400 transition-colors">
                kisanstatus.support@gmail.com
              </a>
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/author" className="hover:text-green-400 transition-colors">
                  Author — Sidhu Singh
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-green-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Official resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-base">Official Government Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://pmkisan.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  PM Kisan Official Portal ↗
                </a>
              </li>
              <li>
                <a
                  href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  Check Beneficiary Status ↗
                </a>
              </li>
              <li>
                <a
                  href="https://pmkisan.gov.in/RegistrationForm.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  New Registration ↗
                </a>
              </li>
              <li>
                <a
                  href="https://pmkisan.gov.in/eKYC.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  eKYC Update ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} <a href="/about" className="hover:text-gray-300 transition-colors">KisanStatus.com</a> by <strong className="text-gray-400">Sidhu Singh</strong> — Informational purposes only.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
