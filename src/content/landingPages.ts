import type { ServiceSlug } from "./services";

// Ad landing pages (/lp/[slug], noindex). Stage 10 adds headline, offer, proof and form fields.
export type LandingPage = {
  slug: string;
  service: ServiceSlug;
};

export const landingPages: LandingPage[] = [
  { slug: "meta-ads", service: "meta-ads" },
];
