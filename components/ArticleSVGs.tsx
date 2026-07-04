// ── lib/article-svgs-usage.ts ──────────────────────────────
// Track which SVGs are actually imported by articles
// Unused SVGs can be removed to reduce bundle size

export const SVG_USAGE_MAP = {
  // Currently used in refactored articles:
  'SvgFAQ': ['pm-kisan-correction-deactivate-block-guide-2026'],
  'SvgDocuments': ['pm-kisan-registration-online-2026'],
  
  // Previously used but replaced by shared components/real images:
  // SvgPortalHomepage → replaced by hero Image
  // SvgBeneficiaryStatus → replaced by StepList + table
  // SvgAadhaarCheck → replaced by StepList
  // SvgMobileCheck → replaced by StepList
  // SvgPaymentStatus → replaced by status table
  // SvgFarmerMobile → replaced by hero Image
  // SvgEkycStatus → replaced by grid cards
  // SvgPaymentSuccess → replaced by hero Image
  // SvgCorrectionProcess → replaced by StepList
  // SvgAadhaarCorrection → replaced by StepList
  // SvgDeactivate → replaced by grid cards
  // SvgReactivate → replaced by StepList
  // SvgBlockStatus → replaced by grid cards
  // SvgRftSigned → replaced by flow diagram
  // SvgRegistrationId → replaced by StepList
  // SvgNameCorrection → replaced by before/after cards
  // SvgMobileUpdate → replaced by grid cards
  // SvgFaqCorrection → replaced by FAQBlock
  // SvgBeneficiaryList → replaced by state grid
  // SvgCorrection → replaced by correction cards
  // SvgCropInsurance → replaced by hero Image
  // SvgInstallmentHistory → replaced by timeline table
  // SvgInstallmentStatus → replaced by status cards
  // SvgKisanLoan → replaced by loan cards
  // SvgLandSeeding → replaced by StepList
  // SvgPaymentFailed → replaced by error cards
  // SvgProblemsSolution → replaced by problem cards
  // SvgRegistration → replaced by StepList
  // SvgRejectedList → replaced by rejection cards
  // SvgTractorLoan → replaced by loan table
} as const;

// Only 2 SVGs still actively used after refactor
export const ACTIVE_SVGS = ['SvgFAQ', 'SvgDocuments'] as const;

// 26 SVGs can be safely removed
export const DEPRECATED_SVGS = [
  'SvgPortalHomepage', 'SvgBeneficiaryStatus', 'SvgAadhaarCheck',
  'SvgMobileCheck', 'SvgPaymentStatus', 'SvgFarmerMobile',
  'SvgEkycStatus', 'SvgPaymentSuccess', 'SvgCorrectionProcess',
  'SvgAadhaarCorrection', 'SvgDeactivate', 'SvgReactivate',
  'SvgBlockStatus', 'SvgRftSigned', 'SvgRegistrationId',
  'SvgNameCorrection', 'SvgMobileUpdate', 'SvgFaqCorrection',
  'SvgBeneficiaryList', 'SvgCorrection', 'SvgCropInsurance',
  'SvgInstallmentHistory', 'SvgInstallmentStatus', 'SvgKisanLoan',
  'SvgLandSeeding', 'SvgPaymentFailed', 'SvgProblemsSolution',
  'SvgRegistration', 'SvgRejectedList', 'SvgTractorLoan',
] as const;