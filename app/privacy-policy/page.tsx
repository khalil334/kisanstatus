import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy – KisanStatus.com',
  description:
    'Privacy Policy for KisanStatus.com — How we collect, use and protect your information. GDPR and Google AdSense compliant.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/privacy-policy' },
  robots: { index: true, follow: false },
};

const lastUpdated = '1 June 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-primary-600 py-8">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-green-200 text-sm mt-1">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Introduction */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Welcome to <strong>KisanStatus.com</strong> ("we", "our", or "us"). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit
              our website <strong>kisanstatus.com</strong> (the "Site"). Please read this policy carefully.
              By using our Site, you agree to the collection and use of information in accordance with
              this policy.
            </p>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-900">
              <strong>⚠️ Important:</strong> KisanStatus.com is NOT affiliated with the Government of India
              or the PM Kisan Samman Nidhi scheme. We are an independent informational website.
            </div>
          </section>

          {/* Information collected */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">2.1 Automatically Collected Data</h3>
                <p className="leading-relaxed">
                  When you visit KisanStatus.com, we may automatically collect certain information
                  about your device and usage, including:
                </p>
                <ul className="mt-2 space-y-1 pl-4">
                  {[
                    'IP address (anonymized)',
                    'Browser type and version',
                    'Operating system',
                    'Pages visited and time spent',
                    'Referring URL',
                    'Device type (mobile/desktop)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-0.5" aria-hidden="true">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2.2 Cookies</h3>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to improve your experience.
                  Cookies may be set by us (first-party) or by third-party services such as
                  Google Analytics and Google AdSense. You can control cookies through your browser settings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2.3 Information You Provide</h3>
                <p className="leading-relaxed">
                  We do NOT collect personal information such as your name, Aadhaar number, bank
                  account details, or any other sensitive personal data. We do not have any forms
                  that collect personal information directly.
                </p>
              </div>
            </div>
          </section>

          {/* How we use information */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              {[
                'To analyze website traffic and improve our content',
                'To understand how visitors use our Site (via Google Analytics)',
                'To display relevant advertisements (via Google AdSense)',
                'To ensure the Site functions properly',
                'To comply with legal obligations',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-0.5" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Google Analytics */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Google Analytics</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              We use Google Analytics 4 (GA4) to understand how visitors interact with our Site.
              Google Analytics uses cookies to collect anonymous data such as page views, session
              duration, and user behavior patterns.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Google Analytics data is processed by Google Inc. For more information, visit{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline hover:no-underline"
              >
                Google's Privacy Policy ↗
              </a>
              . You can opt-out of Google Analytics by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline hover:no-underline"
              >
                Google Analytics Opt-out Browser Add-on ↗
              </a>
              .
            </p>
          </section>

          {/* Google AdSense */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Google AdSense & Advertising</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              We may use Google AdSense to display advertisements on our Site. Google AdSense
              uses cookies to serve ads based on your prior visits to our website and other sites
              on the Internet.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5" aria-hidden="true">•</span>
                Google uses the DART cookie to serve ads based on your visit to our Site and other sites.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5" aria-hidden="true">•</span>
                You may opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">Google Ads Settings ↗</a>.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5" aria-hidden="true">•</span>
                Third-party vendors may also use cookies to serve ads. Visit{' '}
                <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">AboutAds.info ↗</a> to opt out.
              </li>
            </ul>
          </section>

          {/* Third party links */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our Site contains links to external websites including the official government portal
              <strong> pmkisan.gov.in</strong>. We are not responsible for the privacy practices of
              these third-party sites. We encourage you to review their privacy policies before
              providing any personal information.
            </p>
          </section>

          {/* Data security */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Data Security</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              the information we collect. However, no internet transmission is 100% secure.
              Since we do not collect sensitive personal data, your risk is minimal.
            </p>
          </section>

          {/* Children privacy */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our Site is not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided
              us with personal information, please contact us immediately.
            </p>
          </section>

          {/* GDPR Rights */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Your Rights (GDPR)</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              If you are a resident of the European Economic Area (EEA), you have the following rights:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              {[
                'Right to access your personal data',
                'Right to rectification of inaccurate data',
                'Right to erasure ("right to be forgotten")',
                'Right to data portability',
                'Right to object to processing',
                'Right to withdraw consent',
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5" aria-hidden="true">✓</span>
                  {right}
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>📧 Email: <a href="mailto:kisanstatus.support@gmail.com" className="text-primary-600 underline">kisanstatus.support@gmail.com</a></p>
              <p>🌐 Website: <a href="https://kisanstatus.com" className="text-primary-600 underline">kisanstatus.com</a></p>
            </div>
          </section>

          <p className="text-xs text-gray-500 text-center">
            This privacy policy was last updated on {lastUpdated}. We reserve the right to update
            this policy at any time. Changes will be posted on this page.
          </p>
        </div>
      </div>
    </>
  );
}