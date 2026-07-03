// File ke top par add karo (TRANCHE_CONFIG ke baad):

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Agrarian Welfare Tranche Tracker 2026',
  url: 'https://kisanstatus.com/calculator/installment-tracker',
  applicationCategory: 'FinanceApplication',
  description: '4 sawaalon mein pata karo ki tranche kyun ruki hai — digital verification, NPCI mapping, zameen record linking check karo',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
};

// Return statement mein add karo:
return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    {/* ... baaki code */}
  </>
);