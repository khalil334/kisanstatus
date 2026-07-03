/**
 * /disclaimer — KisanStatus.com
 * Legal Notice & Affiliation Disclaimer — SEO optimized
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Disclaimer – KisanStatus.com is NOT an Official Government Portal',
  description:
    'Legal notice for KisanStatus.com — This portal is NOT affiliated with the Government of India or any agrarian welfare scheme. For official information, visit pmkisan.gov.in.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/disclaimer' },
  robots: { index: true, follow: false },
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-amber-600 py-8">
        <div className="container-site">
          <nav className="text-amber-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Legal Notice</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Legal Notice & Disclaimer</h1>
          <p className="text-amber-100 text-sm mt-1">Important notice about this portal</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Big disclaimer alert */}
          <div className="rounded-xl border-2 border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-800 p-6 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
            <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3">
              NOT AN OFFICIAL GOVERNMENT PORTAL
            </h2>
            <p className="text-red-900 dark:text-red-200 text-sm leading-relaxed max-w-xl mx-auto">
              <strong>This website is NOT affiliated with, endorsed by, or connected to
              the Government of India, Ministry of Agriculture, or any agrarian welfare
              scheme</strong> in any way.
            </p>
            <div className="mt-4">
              <a
                href="https://pmkisan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-red-700 hover:!bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Visit Official Portal: pmkisan.gov.in ↗
              </a>
            </div>
          </div>

          {/* Purpose */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Purpose of This Portal</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              This is an <strong>independent, informational website</strong> created to
              help Indian cultivators understand how to check their agrarian welfare scheme
              beneficiary status. We provide:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Easy-to-understand guides for checking status on the official government portal',
                'Information about tranche dates and payment amounts',
                'Step-by-step instructions for digital verification',
                'General eligibility information about cultivator benefit programs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What we are NOT */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">What This Portal Does NOT Do</h2>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'We do NOT check your scheme status directly — all verification is done on pmkisan.gov.in',
                'We do NOT collect your biometric credential, bank account, or any personal financial details',
                'We do NOT process, approve, or reject any government applications',
                'We do NOT transfer or handle any government payments or funds',
                'We do NOT represent the Government of India in any capacity',
                'We do NOT guarantee accuracy of all information — always verify on pmkisan.gov.in',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5" aria-hidden="true">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Accuracy disclaimer */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Accuracy of Information</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Hum poori koshish karte hain ki information sahi rahe,
              lekin we make no warranties or representations about the completeness, accuracy, or
              reliability of any content on this portal. Government schemes may change
              without notice. Always verify current information on the official government
              website <strong>pmkisan.gov.in</strong>.
            </p>
          </section>

          {/* External links */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">External Links</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              This portal contains links to external government websites including pmkisan.gov.in.
              These links are provided for your convenience and information only. We have no control
              over the content of those sites and accept no responsibility for them.
            </p>
          </section>

          {/* Liability */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Limitation of Liability</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              This website and its operators shall not be liable for any loss, damage, or
              inconvenience arising from your use of this portal or reliance on information
              published here. Any action you take based on content from this site is
              strictly at your own risk. For official assistance, contact the agrarian welfare
              helpline at <strong>155261</strong>.
            </p>
          </section>

          {/* Copyright */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Copyright Notice</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              The original content, design, and code on this portal is copyright © 2026. All rights reserved. Government data,
              scheme names, and related
              information belong to the Government of India.
            </p>
          </section>

          {/* Advertising */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Advertising</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              This portal may display third-party advertisements through Google AdSense.
              These advertisements help us maintain this free informational service.
              Advertisements do not constitute endorsement of any products or services.
              We are not responsible for the content of any advertisements displayed on
              this site.
            </p>
          </section>

          {/* Contact */}
          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Contact</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
              For questions or concerns about this portal:
            </p>
            <p className="text-sm">
              📧{' '}
              <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                kisanstatus.support@gmail.com
              </a>
            </p>
          </section>

          {/* Official links box */}
          <div className="news-box">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              🔗 Official Government Resources
            </h3>
            <ul className="text-sm text-green-900 dark:text-green-200 space-y-1">
              <li>
                <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  Agrarian Welfare Official Portal — pmkisan.gov.in ↗
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  Beneficiary Verification ↗
                </a>
              </li>
              <li>
                <a href="https://agriculture.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  Ministry of Agriculture & Farmers Welfare ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}