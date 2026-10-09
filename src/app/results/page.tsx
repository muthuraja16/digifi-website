import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.results);

// Placeholder until Stage 6.
export default function ResultsPage() {
  return (
    <PageHero
      {...pages.results.hero}
      whatsappMessage={site.whatsapp.defaultMessage}
    />
  );
}
