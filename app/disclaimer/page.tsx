/**
 * Disclaimer Page — KisanStatus.com
 * "Not official govt site" — Required for Google AdSense approval
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer – KisanStatus.com is NOT an Official Government Website',
  description:
    'Disclaimer for KisanStatus.com — This website is NOT affiliated with the Government of India or PM Kisan Samman Nidhi scheme. For official information, visit pmkisan.gov.in.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/disclaimer' },
  robots: { index: true, follow: false },
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-amber-600 py-8">
        <div className="container-site">
          <nav className="text-amber-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Disclaimer</h1>
          <p className="text-amber-100 text-sm mt-1">Important notice about KisanStatus.com</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Big disclaimer alert */}
          <div className="rounded-xl border-2 border-red-400 bg-red-50 p-6 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
            <h2 className="text-xl font-bold text-red-800 mb-3">
              NOT AN OFFICIAL GOVERNMENT WEBSITE
            </h2>
            <p className="text-red-900 text-sm leading-relaxed max-w-xl mx-auto">
              <strong>KisanStatus.com is NOT affiliated with, endorsed by, or connected to
              the Government of India, Ministry of Agriculture, or the PM Kisan
              Samman Nidhi Yojana scheme</strong> in any way.
            </p>
            <div className="mt-4">
              <a
                href="https://pmkisan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-red-700 hover:!bg-red-800"
              >
                Visit Official Site: pmkisan.gov.in ↗
              </a>
            </div>
          </div>

          {/* Purpose */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Purpose of This Website</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              KisanStatus.com is an <strong>independent, informational website</strong> created to
              help Indian farmers understand how to check their PM Kisan Samman Nidhi Yojana
              beneficiary status. We provide:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              {[
                'Easy-to-understand guides for checking status on the official government portal',
                'Information about installment dates and payment amounts',
                'Step-by-step instructions for eKYC verification',
                'General eligibility information about the PM Kisan scheme',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What we are NOT */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What This Website Does NOT Do</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              {[
                'We do NOT check your PM Kisan status directly — all status checks are done on pmkisan.gov.in',
                'We do NOT collect your Aadhaar number, bank account, or any personal financial details',
                'We do NOT process, approve, or reject PM Kisan applications',
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
            <h2 className="text-lg font-bold text-gray-900 mb-3">Accuracy of Information</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              KisanStatus.com par jo bhi information di gayi hai usse sahi rakhne ki poori koshish ki jati hai,
              we make no warranties or representations about the completeness, accuracy, or
              reliability of any information on this Site. Government schemes may change
              without notice. Always verify current information on the official government
              website <strong>pmkisan.gov.in</strong>.
            </p>
          </section>

          {/* External links */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">External Links</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              This website contains links to external government websites including pmkisan.gov.in.
              These links are provided for your convenience and information only. We have no control
              over the content of those sites and accept no responsibility for them.
            </p>
          </section>

          {/* Liability */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Limitation of Liability</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              KisanStatus.com and its operators shall not be liable for any loss, damage, or
              inconvenience arising from your use of this website or reliance on information
              published here. Any action you take based on information from this Site is
              strictly at your own risk. For official assistance, contact the PM Kisan
              helpline at <strong>155261</strong>.
            </p>
          </section>

          {/* Copyright */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Copyright Notice</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              The original content, design, and code on KisanStatus.com is copyright ©{' '}
              {new Date().getFullYear()} KisanStatus.com. All rights reserved. Government data,
              scheme names (PM Kisan, PM-KISAN, Pradhan Mantri Kisan Samman Nidhi), and related
              information belong to the Government of India.
            </p>
          </section>

          {/* Advertising */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Advertising</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              KisanStatus.com may display third-party advertisements through Google AdSense.
              These advertisements help us maintain this free informational service.
              Advertisements do not constitute endorsement of any products or services.
              We are not responsible for the content of any advertisements displayed on
              this Site.
            </p>
          </section>

          {/* Contact */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              For questions or concerns about this website:
            </p>
            <p className="text-sm">
              📧{' '}
              <a href="mailto:kisanstatus.support@gmail.com" className="text-primary-600 underline">
                kisanstatus.support@gmail.com
              </a>
            </p>
          </section>

          {/* Official links box */}
          <div className="news-box">
            <h3 className="font-semibold text-green-800 mb-2">
              🔗 Official Government Resources
            </h3>
            <ul className="text-sm text-green-900 space-y-1">
              <li>
                <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium">
                  PM Kisan Official Portal — pmkisan.gov.in ↗
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium">
                  Beneficiary Status Check ↗
                </a>
              </li>
              <li>
                <a href="https://agriculture.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium">
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
