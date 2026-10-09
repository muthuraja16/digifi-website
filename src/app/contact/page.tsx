import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.contact);

// Placeholder until the contact form is built in Stage 9.
export default function ContactPage() {
  return (
    <PageHero
      {...pages.contact.hero}
      whatsappMessage={site.whatsapp.defaultMessage}
    />
  );
}
