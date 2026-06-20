/**
 * Terms of Service — KisanStatus.com
 * Required for Google AdSense approval
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service – KisanStatus.com',
  description:
    'Terms of Service for KisanStatus.com — Rules and guidelines for using our PM Kisan information website.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/terms-of-service' },
  robots: { index: true, follow: false },
};

const lastUpdated = '7 June 2026';

export default function TermsPage() {
  return (
    <>
      <div className="bg-primary-600 py-8">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Terms of Service</h1>
          <p className="text-green-200 text-sm mt-1">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-sm text-amber-900">
            <strong>⚠️ Zaruri Suchna:</strong> KisanStatus.com ek independent informational website hai.
            Yeh Government of India ya PM Kisan Samman Nidhi scheme se affiliated nahi hai.
            Official kaam ke liye{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
              pmkisan.gov.in ↗
            </a>{' '}
            use karein.
          </div>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              By accessing and using <strong>KisanStatus.com</strong> ("Site", "we", "us", "our"),
              you accept and agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our Site. These terms apply to all visitors and users
              of the Site.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              KisanStatus.com provides <strong>free, informational content</strong> about the
              PM Kisan Samman Nidhi Yojana scheme for Indian farmers. Our services include:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              {[
                'Guides on how to check PM Kisan beneficiary status on the official portal',
                'Information about installment dates and payment amounts (estimated/expected)',
                'Step-by-step eKYC and registration guides',
                'State-wise beneficiary list information',
                'Articles on PM Kisan related problems and solutions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              We make every effort to provide accurate and up-to-date information. However:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Installment dates marked as "Expected" or "Not Confirmed" are estimates based on past patterns — they are NOT official government announcements.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                We do not guarantee the accuracy, completeness, or timeliness of any information.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Always verify important decisions with the official PM Kisan portal at pmkisan.gov.in.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                We are not responsible for any losses or problems resulting from reliance on our content.
              </li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Not a Government Website</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>KisanStatus.com is NOT an official government website.</strong> We are not
              affiliated with, endorsed by, or connected to the Government of India, the Ministry
              of Agriculture & Farmers Welfare, or the PM Kisan Samman Nidhi Yojana scheme in any
              official capacity. We do not collect your Aadhaar number, bank account, or any
              personal government data. For official services, always use{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">
                pmkisan.gov.in ↗
              </a>
              .
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. User Responsibilities</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">By using our Site, you agree to:</p>
            <ul className="text-sm text-gray-700 space-y-2">
              {[
                'Use the Site for lawful purposes only',
                'Not misuse or attempt to harm the Site or its services',
                'Not copy or redistribute our content without permission',
                'Verify all important PM Kisan information from official sources',
                'Not rely solely on our Site for official government decisions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              All original content on KisanStatus.com — including articles, guides, and website
              design — is the property of KisanStatus.com and is protected by copyright law.
              You may not reproduce, distribute, or republish our content without prior written
              permission. Linking to our website is permitted and encouraged.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Advertising</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              KisanStatus.com may display advertisements through Google AdSense and other
              advertising networks. These ads help us maintain and improve the website for free.
              Advertisements are clearly separated from editorial content. We do not endorse
              products or services advertised on our Site. For information about how ads use
              your data, see our{' '}
              <Link href="/privacy-policy" className="text-primary-600 underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our Site contains links to external websites, including the official government
              portal pmkisan.gov.in. These links are provided for convenience. We are not
              responsible for the content, accuracy, or privacy practices of any third-party
              websites. Visiting external links is at your own risk.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              KisanStatus.com and its author (Sidhu Singh) shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from your use of the Site,
              including reliance on any information provided. Our total liability to you for any
              claim shall not exceed zero, as our services are provided free of charge.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Changes to Terms</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes will
              be posted on this page with an updated date. Continued use of the Site after any
              changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">11. Governing Law</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              These Terms of Service are governed by the laws of India. Any disputes shall be
              subject to the jurisdiction of courts in India.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">12. Contact</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Questions about these Terms? Contact us:
            </p>
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>📧 Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-primary-600 underline">kisanstatus.support@gmail.com</a></p>
              <p>🌐 Website: <a href="https://kisanstatus.com" className="text-primary-600 underline">kisanstatus.com</a></p>
              <p>👤 Author: <Link href="/about" className="text-primary-600 underline">Sidhu Singh</Link></p>
            </div>
          </section>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/privacy-policy" className="btn-secondary text-sm">Privacy Policy →</Link>
            <Link href="/disclaimer" className="btn-secondary text-sm">Disclaimer →</Link>
            <Link href="/contact" className="btn-secondary text-sm">Contact Us →</Link>
          </div>

          <p className="text-xs text-gray-500 text-center">
            These Terms of Service were last updated on {lastUpdated}.
          </p>

        </div>
      </div>
    </>
  );
}
