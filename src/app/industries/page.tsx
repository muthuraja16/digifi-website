import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.industries);

// Placeholder until Stage 6.
export default function IndustriesPage() {
  return (
    <PageHero
      {...pages.industries.hero}
      whatsappMessage={site.whatsapp.defaultMessage}
    />
  );
}
