import type { IndustrySlug } from "./industries";
import type { ServiceSlug } from "./services";

export type CaseStudyResult = {
  label: string;
  /** Real figure supplied by DIGIFI. Shown with CountUp in Geist Mono. */
  value: number;
  prefix?: string;
  decimals?: number;
  /** Short context after the number, e.g. "in 20 days". */
  context?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  /** Path under /public; only for clients who gave logo permission. */
  logo: string | null;
  industry: IndustrySlug;
  /** The client's own trade, more specific than the industry group. */
  trade: string;
  services: ServiceSlug[];
  /** Measurement period, shown with every result. */
  period: string;
  challenge: string;
  whatWeDid: string[];
  results: CaseStudyResult[];
  /** Average enquiries per month, where the data supports it (homepage chart). */
  monthlyEnquiries?: number;
  screenshot: string | null;
  screenshotAlt: string;
};

// Real results supplied by DIGIFI (10 October 2026); client names and logos shown with permission.
// "What we did" details are still to come from DIGIFI.
export const caseStudies: CaseStudy[] = [
  {
    slug: "vision-plywoods-meta-ads",
    client: "Vision Plywoods",
    logo: "/clients/vision-plywoods.png",
    industry: "manufacturing-b2b",
    trade: "Plywood manufacturer",
    services: ["meta-ads"],
    period: "Apr–Sep 2026",
    challenge: "Not enough enquiries for their products.",
    whatWeDid: [
      "Ran Meta Ads on Facebook and Instagram to bring in product enquiries.",
      "[TBD: more detail on what DIGIFI did]",
    ],
    results: [
      { label: "Enquiries", value: 1942, context: "in 6 months" },
      { label: "Enquiries per month", value: 323, context: "on average" },
      { label: "Cost per lead", value: 7.9, prefix: "₹", decimals: 2 },
    ],
    monthlyEnquiries: 323,
    screenshot: null, // [TBD: ads dashboard screenshot from DIGIFI]
    screenshotAlt: "Meta Ads dashboard for Vision Plywoods",
  },
  {
    slug: "mukilam-academy-meta-ads",
    client: "Mukilam Academy",
    logo: "/clients/mukilam-academy.png",
    industry: "education-coaching",
    trade: "Coaching academy",
    services: ["meta-ads"],
    period: "May 2025",
    challenge: "Not enough enquiries for their courses.",
    whatWeDid: [
      "Ran Meta Ads on Facebook and Instagram to bring in course enquiries.",
      "[TBD: more detail on what DIGIFI did]",
    ],
    results: [
      { label: "Enquiries", value: 703, context: "in one month" },
      { label: "Cost per lead", value: 9.16, prefix: "₹", decimals: 2 },
    ],
    monthlyEnquiries: 703,
    screenshot: null, // [TBD: ads dashboard screenshot from DIGIFI]
    screenshotAlt: "Meta Ads dashboard for Mukilam Academy",
  },
  {
    slug: "dindigul-school-of-tnpsc-meta-ads",
    client: "Dindigul School of TNPSC",
    logo: "/clients/dindigul-school-of-tnpsc.jpg",
    industry: "education-coaching",
    trade: "TNPSC exam coaching",
    services: ["meta-ads"],
    period: "May–Jul 2025",
    challenge: "Not enough enquiries for their courses.",
    whatWeDid: [
      "Ran Meta Ads on Facebook and Instagram to bring in course enquiries.",
      "[TBD: more detail on what DIGIFI did]",
    ],
    results: [
      { label: "Enquiries per month", value: 215, context: "on average" },
      { label: "Cost per lead", value: 26.66, prefix: "₹", decimals: 2 },
    ],
    monthlyEnquiries: 215,
    screenshot: null, // [TBD: ads dashboard screenshot from DIGIFI]
    screenshotAlt: "Meta Ads dashboard for Dindigul School of TNPSC",
  },
  {
    slug: "jd-leathers-meta-ads",
    client: "JD Leathers",
    logo: "/clients/jd-leathers.webp",
    industry: "retail-lifestyle",
    trade: "Leather products showroom",
    services: ["meta-ads"],
    period: "Mar 2025",
    challenge: "Needed enquiries for their clearance sale.",
    whatWeDid: [
      "Ran Meta Ads on Facebook and Instagram for the clearance sale.",
      "[TBD: more detail on what DIGIFI did]",
    ],
    results: [
      { label: "Enquiries", value: 335, context: "in 20 days" },
      { label: "Cost per lead", value: 5.57, prefix: "₹", decimals: 2 },
    ],
    screenshot: null, // [TBD: ads dashboard screenshot from DIGIFI]
    screenshotAlt: "Meta Ads dashboard for JD Leathers",
  },
];

export function getCaseStudy(slug: string): CaseStudy {
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}

/** Clients whose logos may be shown (written permission from DIGIFI, 10 October 2026). */
export const clientLogos = caseStudies
  .filter((c): c is CaseStudy & { logo: string } => c.logo !== null)
  .map((c) => ({ client: c.client, logo: c.logo }));

export const resultsSection = {
  eyebrow: "Results",
  heading: "Real results for local businesses",
  intro: "Numbers from our clients' ad dashboards. No made-up figures, ever.",
  linkLabel: "See all results",
  costPerLeadNote:
    "Cost per lead is the ad spend divided by the number of enquiries.",
  disclaimer: "Results vary by business, budget and market.",
};
