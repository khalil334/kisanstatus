/**
 * /terms-of-service — KisanStatus.com
 * Legal Service Conditions & User Agreement
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use – KisanStatus.com Service Conditions',
  description:
    'Terms of use for KisanStatus.com — Rules and guidelines for using our agrarian welfare information platform.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/terms-of-service' },
  robots: { index: true, follow: false },
};

const lastUpdated = '7 June 2026';

export default function TermsPage() {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Terms of Use</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Terms of Use</h1>
          <p className="text-green-200 text-sm mt-1">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-800 rounded-xl text-sm text-amber-900 dark:text-amber-200">
            <strong>⚠️ Zaruri Suchna:</strong> KisanStatus.com ek independent informational platform hai.
            Yeh Government of India ya kisi bhi agrarian welfare scheme se affiliated nahi hai.
            Official kaam ke liye{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded">
              pmkisan.gov.in ↗
            </a>{' '}
            use karein.
          </div>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              By accessing and using <strong>KisanStatus.com</strong> ("Platform", "we", "us", "our"),
              you accept and agree to be bound by these Terms of Use. If you do not agree to
              these conditions, please do not use our platform. These terms apply to all visitors and users
              of the platform.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Description of Service</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              KisanStatus.com provides <strong>free, informational content</strong> about the
              agrarian welfare scheme for Indian cultivators. Our services include:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Guides on how to check cultivator benefit status on the official portal',
                'Information about tranche dates and payment amounts (estimated/expected)',
                'Step-by-step digital verification and enrollment guides',
                'State-wise beneficiary roster information',
                'Articles on agrarian welfare related problems and solutions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Accuracy of Content</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              We make every effort to provide accurate and up-to-date content. However:
            </p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Tranche dates marked as "Expected" or "Not Confirmed" are estimates based on past patterns — they are NOT official government announcements.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                We do not guarantee the accuracy, completeness, or timeliness of any content.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                Always verify important decisions with the official agrarian welfare portal at pmkisan.gov.in.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5" aria-hidden="true">•</span>
                We are not responsible for any losses or problems resulting from reliance on our content.
              </li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Not a Government Platform</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <strong>KisanStatus.com is NOT an official government platform.</strong> We are not
              affiliated with, endorsed by, or connected to the Government of India, the Ministry
              of Agriculture & Farmers Welfare, or any agrarian welfare scheme in any
              official capacity. We do not collect your biometric credential number, bank account, or any
              personal government data. For official services, always use{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                pmkisan.gov.in ↗
              </a>
              .
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. User Responsibilities</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">By using our platform, you agree to:</p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {[
                'Use the platform for lawful purposes only',
                'Not misuse or attempt to harm the platform or its services',
                'Not copy or redistribute our content without permission',
                'Verify all important agrarian welfare content from official sources',
                'Not rely solely on our platform for official government decisions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Intellectual Property</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              All original content on KisanStatus.com — including articles, guides, and platform
              design — is the property of KisanStatus.com and is protected by copyright law.
              You may not reproduce, distribute, or republish our content without prior written
              permission. Linking to our platform is permitted and encouraged.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Advertising</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              KisanStatus.com may display advertisements through Google AdSense and other
              advertising networks. These ads help us maintain and improve the platform for free.
              Advertisements are clearly separated from editorial content. We do not endorse
              products or services advertised on our platform. For information about how ads use
              your data, see our{' '}
              <Link href="/privacy-policy" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Data Protection Notice</Link>.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Third-Party Links</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Our platform contains links to external websites, including the official government
              portal pmkisan.gov.in. These links are provided for convenience. We are not
              responsible for the content, accuracy, or privacy practices of any third-party
              websites. Visiting external links is at your own risk.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Limitation of Liability</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              KisanStatus.com and its team shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from your use of the platform,
              including reliance on any content provided. Our total liability to you for any
              claim shall not exceed zero, as our services are provided free of charge.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Changes to Terms</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              We reserve the right to update these Terms of Use at any time. Changes will
              be posted on this page with an updated date. Continued use of the platform after any
              changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Governing Law</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              These Terms of Use are governed by the laws of India. Any disputes shall be
              subject to the jurisdiction of courts in India.
            </p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">12. Contact</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Questions about these terms? Contact us:
            </p>
            <div className="mt-3 text-sm text-[var(--color-text-muted)] space-y-1">
              <p>📧 Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.support@gmail.com</a></p>
              <p>🌐 Platform: <a href="https://kisanstatus.com" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.com</a></p>
              <p>👤 Team: <Link href="/about" className="text-[var(--color-primary)] underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">KisanStatus Team</Link></p>
            </div>
          </section>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/privacy-policy" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">Data Protection Notice →</Link>
            <Link href="/disclaimer" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">Legal Notice →</Link>
            <Link href="/contact" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">Contact Us →</Link>
          </div>

          <p className="text-xs text-[var(--color-text-muted)] text-center">
            These Terms of Use were last updated on {lastUpdated}.
          </p>

        </div>
      </div>
    </>
  );
}