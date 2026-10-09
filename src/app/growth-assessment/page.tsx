import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.growthAssessment);

// Placeholder until the quiz and form are built in Stage 9.
export default function GrowthAssessmentPage() {
  return (
    <PageHero
      {...pages.growthAssessment.hero}
      whatsappMessage={site.whatsapp.defaultMessage}
    />
  );
}
