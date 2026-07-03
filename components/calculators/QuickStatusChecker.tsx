// File ke top par add karo (imports ke baad):

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Agrarian Welfare Quick Verification Tool 2026',
  url: 'https://kisanstatus.com/calculator/quick-status-check',
  applicationCategory: 'FinanceApplication',
  description: 'Biometric credential, contact ya enrollment ID se 23vi tranche ka real status verify karein — seedha official portal par',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
};

// Return statement mein add karo:
return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/40 py-8 md:py-12">
      {/* ... baaki code */}
    </div>
  </>
);