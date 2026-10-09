import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.terms);

// Placeholder until the terms are written in Stage 7.
export default function TermsPage() {
  return <PageHero {...pages.legal.terms} />;
}
