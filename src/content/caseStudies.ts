import type { IndustrySlug } from "./industries";
import type { ServiceSlug } from "./services";

export type CaseStudyResult = {
  label: string;
  /** Real figure only, e.g. "+212%" or "₹84". "[TBD: real figure]" until provided. */
  value: string;
  /** Measurement period, e.g. "Jan–Mar 2026". */
  period: string;
  /** "up" = number increased; "down" = number decreased (e.g. cost per lead). */
  trend: "up" | "down";
  /** True when the change is an improvement (lime badge); false shows it neutrally. */
  improvement: boolean;
};

export type CaseStudy = {
  slug: string;
  /** "placeholder" until DIGIFI supplies real, verified numbers. Placeholders must be labelled on the page. */
  status: "placeholder" | "verified";
  client: string;
  industry: IndustrySlug | null;
  services: ServiceSlug[];
  challenge: string;
  whatWeDid: string[];
  results: CaseStudyResult[];
  screenshot: string;
  screenshotAlt: string;
};

const tbdResult = (label: string, trend: "up" | "down"): CaseStudyResult => ({
  label,
  value: "[TBD: real figure]",
  period: "[TBD: period]",
  trend,
  improvement: true,
});

// Structure only. Every client, number and screenshot is [TBD] until DIGIFI provides real data.
export const caseStudies: CaseStudy[] = [
  {
    slug: "meta-ads-case-study",
    status: "placeholder",
    client: "[TBD: client name]",
    industry: null,
    services: ["meta-ads", "whatsapp-marketing"],
    challenge: "[TBD: the client's problem in one line]",
    whatWeDid: [
      "[TBD: what DIGIFI did, step 1]",
      "[TBD: what DIGIFI did, step 2]",
    ],
    results: [
      tbdResult("Enquiries per month", "up"),
      tbdResult("Cost per lead", "down"),
      tbdResult("WhatsApp conversations", "up"),
    ],
    screenshot: "[TBD: /images/case-studies/meta-ads.png]",
    screenshotAlt: "[TBD: describe the screenshot]",
  },
  {
    slug: "google-business-profile-case-study",
    status: "placeholder",
    client: "[TBD: client name]",
    industry: null,
    services: ["google-business-profile"],
    challenge: "[TBD: the client's problem in one line]",
    whatWeDid: [
      "[TBD: what DIGIFI did, step 1]",
      "[TBD: what DIGIFI did, step 2]",
    ],
    results: [
      tbdResult("Google Maps ranking", "up"),
      tbdResult("Calls from Google", "up"),
      tbdResult("Direction requests", "up"),
    ],
    screenshot: "[TBD: /images/case-studies/google-business-profile.png]",
    screenshotAlt: "[TBD: describe the screenshot]",
  },
  {
    slug: "vision-plywoods-website",
    status: "placeholder",
    client: "Vision Plywoods",
    industry: "manufacturing-b2b",
    services: ["website-design"],
    challenge: "[TBD: the client's problem in one line]",
    whatWeDid: [
      "[TBD: what DIGIFI did, step 1]",
      "[TBD: what DIGIFI did, step 2]",
    ],
    results: [
      tbdResult("Website enquiries per month", "up"),
      tbdResult("[TBD: second metric]", "up"),
    ],
    screenshot: "[TBD: /images/case-studies/vision-plywoods.png]",
    screenshotAlt: "Vision Plywoods website on desktop and phone",
  },
];

export const resultsSection = {
  eyebrow: "Results",
  heading: "Real results for local businesses",
  intro: "Numbers from our own client reports. No made-up figures, ever.",
  placeholderLabel: "Sample: real figures coming soon",
  linkLabel: "See all results",
  disclaimer: "Results vary by business, budget and market.",
};
