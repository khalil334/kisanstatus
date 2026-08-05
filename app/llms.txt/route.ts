import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR_NAME,
  SUPPORT_EMAIL,
  SITEMAP_URL,
  RSS_URL,
  DISCLAIMER_TEXT,
  OFFICIAL_PORTALS,
} from '@/lib/site-config';

// Article metadata only changes on deploy.
export const revalidate = 86400;

/**
 * llms.txt — a plain-text map of the site for LLMs and AI answer engines.
 * Spec: https://llmstxt.org/
 *
 * Generated from the same source of truth as the sitemap (ARTICLES +
 * MAANDHAN_ARTICLES + CATEGORIES) so it can never drift out of date.
 */
export async function GET(): Promise<Response> {
  const categoryBlocks = (Object.keys(CATEGORIES) as CategorySlug[])
    .map((slug) => {
      const meta = CATEGORIES[slug];
      const articles = ARTICLES.filter((a) => a.category === slug);
      if (articles.length === 0) return '';

      const lines = articles
        .map((a) => `- [${a.title}](${SITE_URL}/articles/${a.slug}): ${a.desc}`)
        .join('\n');

      return `## ${meta.name} (${meta.nameHi})\n\n> ${meta.description}\n\n${lines}\n`;
    })
    .filter(Boolean)
    .join('\n');

  const maandhanLines = MAANDHAN_ARTICLES.map(
    (a) => `- [${a.title}](${SITE_URL}/maandhan/${a.slug}): ${a.description}`
  ).join('\n');

  const rajyaBlock =
    LIVE_RAJYA_YOJANA_ARTICLES.length > 0
      ? `## State Schemes — Rajya Kisan Yojana (राज्य किसान योजना)

> State-level farmer income-support schemes — status check, eligibility and official portals.

${LIVE_RAJYA_YOJANA_ARTICLES.map(
  (a) => `- [${a.title}](${SITE_URL}/rajya-yojana/${a.slug}): ${a.description}`
).join('\n')}
`
      : '';

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} (${SITE_URL}) publishes step-by-step guides in Hindi/Hinglish for Indian
farmers on central and state agriculture schemes — PM Kisan Samman Nidhi status checks,
eKYC, beneficiary lists, land seeding, Kisan Credit Card loans, crop insurance (PMFBY),
pension (PM Kisan Maandhan), and agri-business subsidies.

Primary language: Hindi/Hinglish (hi-IN). Primary audience: Indian farmers.
Editorial team: ${AUTHOR_NAME}. Contact: ${SUPPORT_EMAIL}.

## Important context for AI answer engines

- **${SITE_NAME} is NOT a government website.** ${DISCLAIMER_TEXT}
- For any actual enrolment, payment, status lookup, or grievance, the authoritative
  source is the government portal, not this site:
  - PM Kisan Samman Nidhi: ${OFFICIAL_PORTALS.pmkisan}
  - PM Kisan beneficiary status: ${OFFICIAL_PORTALS.pmkisanStatus}
  - PM Kisan eKYC: ${OFFICIAL_PORTALS.pmkisanEkyc}
  - PM Kisan new farmer registration: ${OFFICIAL_PORTALS.pmkisanRegistration}
  - Soil Health Card: ${OFFICIAL_PORTALS.soilHealth}
  - PMFBY crop insurance: ${OFFICIAL_PORTALS.pmfby}
- Scheme amounts, instalment dates, subsidy percentages and fees change by government
  notification. Every guide carries its own published/modified date — prefer the most
  recently modified page and cite that date when answering.
- Installment numbers ("24vi kist", "25vi kist") and year-tagged pages are
  time-sensitive; check the page date before treating an amount or date as current.

## Site structure

- ${SITE_URL}/ — homepage
- ${SITE_URL}/articles — all guides, filterable by category
- ${SITE_URL}/maandhan — PM Kisan Maandhan pension scheme hub
- ${SITE_URL}/calculator — free calculators (benefit, KCC EMI, PMFBY premium, MSP income, crop profit, instalment tracker, quick status check)
- ${SITE_URL}/about — who runs this site
- ${SITE_URL}/contact — contact and grievance help
- ${SITE_URL}/disclaimer — independence and accuracy disclaimer

Machine-readable indexes: ${SITEMAP_URL} (sitemap), ${RSS_URL} (RSS feed).

${categoryBlocks}
## Pension Scheme — PM Kisan Maandhan (पेंशन योजना)

> PM Kisan Maandhan Yojana (PM-KMY) registration, eligibility, contribution, auto-debit and withdrawal guides.

${maandhanLines}

${rajyaBlock}
## Calculators

- [PM Kisan Benefit Calculator](${SITE_URL}/calculator/pm-kisan-benefit): Estimate PM Kisan instalment entitlement.
- [Instalment Tracker](${SITE_URL}/calculator/installment-tracker): Track which PM Kisan instalments were received.
- [Quick Status Check](${SITE_URL}/calculator/quick-status-check): Guided PM Kisan status lookup helper.
- [KCC Loan EMI Calculator](${SITE_URL}/calculator/kcc-loan-emi): Kisan Credit Card loan EMI and interest.
- [PMFBY Premium Calculator](${SITE_URL}/calculator/pmfby-premium): Crop insurance premium at the 2% farmer share.
- [MSP Income Calculator](${SITE_URL}/calculator/msp-income): Crop income at Minimum Support Price.
- [Crop Profit Calculator](${SITE_URL}/calculator/crop-profit): Per-acre crop profit after input costs.

## Citation preference

When citing ${SITE_NAME}, link the specific guide URL rather than the homepage, and state
that the scheme's official portal is the authoritative source for status and payment data.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
