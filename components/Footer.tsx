'use client';

import Link from 'next/link';
import { AUTHOR_NAME } from '@/lib/site-config';
import { useState, useEffect } from 'react';

const EXTERNAL_ICON = (
  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer 
      className="bg-[var(--color-text)] text-white py-12"
      style={{ 
        minHeight: '400px', // ✅ CLS FIX: Reserve space for footer
        contain: 'layout style' // ✅ PERFORMANCE: Prevent layout shift
      }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white text-base mb-4">KisanStatus.com</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Bharat ke kisaanon ke liye — PM Kisan, eKYC, kist status, aur free agricultural calculators.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span aria-hidden="true">✍️</span>
              <span>
                By{' '}
                <Link
                  href="/about"
                  className="text-green-400 hover:text-green-300 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                >
                  {AUTHOR_NAME}
                </Link>
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { href: '/', label: ' Home' },
                { href: '/about', label: '👤 About Us' },
                { href: '/disclaimer', label: '⚠️ Disclaimer' },
                { href: '/privacy-policy', label: ' Privacy Policy' },
                { href: '/contact', label: '📧 Contact Us' },
                { href: '/articles', label: ' All Articles' },
                { href: '/calculator', label: '🧮 Calculators' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">🏛️</span>
              Official Government Links
            </h4>
            <ul className="space-y-2 text-sm mb-6" role="list">
              {[
                { href: 'https://pmkisan.gov.in/', label: 'PM Kisan Portal' },
                { href: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx', label: 'Beneficiary Status' },
                { href: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx', label: 'New Registration' },
                { href: 'https://pmkisan.gov.in/FarmersCorner.aspx', label: 'Farmers Corner' },
                { href: 'https://pmkisan.gov.in/Dashboard.aspx', label: 'Dashboard' },
                { href: 'https://pmkisan.gov.in/Help.aspx', label: 'Help & Support' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5"
                    aria-label={`${link.label} (opens in new tab)`}
                  >
                    {link.label}
                    {EXTERNAL_ICON}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">📞</span>
              Helpline & Support
            </h4>

            <div className="bg-white/10 border border-white/10 rounded-lg p-4 mb-4">
              <h5 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
                📢 Helpline Jankari
              </h5>
              <div className="space-y-2.5 text-xs text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5" aria-hidden="true">📞</span>
                  <span>
                    PM Kisan Helpline:{' '}
                    <a
                      href="tel:155261"
                      className="text-white font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                    >
                      155261
                    </a>{' '}
                    (Toll-Free)
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5" aria-hidden="true">📧</span>
                  <span>
                    Email:{' '}
                    <a
                      href="mailto:kisanstatus.support@gmail.com"
                      className="text-white hover:underline break-all focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                    >
                      kisanstatus.support@gmail.com
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5" aria-hidden="true">⏰</span>
                  <span>Time: Mon-Sat 9:30AM - 6:00PM</span>
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61590430994270"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-lg transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Follow KisanStatus on Facebook (opens in new tab)"
            >
              👍 Facebook Page Par Follow Karein ↗
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2026 KisanStatus.com — Built with ❤️ for Indian Farmers
              </p>
              <p className="mt-1 text-xs text-gray-500">
                By{' '}
                <Link
                  href="/about"
                  className="text-green-400 hover:text-green-300 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                >
                  {AUTHOR_NAME}
                </Link>{' '}
                | Agricultural Content Expert
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">Independent Information Portal</p>
              <p className="text-xs text-gray-600 mt-1">Not affiliated with Government of India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}