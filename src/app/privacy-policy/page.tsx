import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.privacyPolicy);

// Placeholder until the policy is written in Stage 7.
export default function PrivacyPolicyPage() {
  return <PageHero {...pages.legal.privacyPolicy} />;
}
