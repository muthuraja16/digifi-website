import { PageHero } from "@/components/sections/PageHero";
import { about } from "@/content/about";
import { seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.about);

// Placeholder until Stage 6.
export default function AboutPage() {
  return (
    <PageHero {...about.hero} whatsappMessage={site.whatsapp.defaultMessage} />
  );
}
