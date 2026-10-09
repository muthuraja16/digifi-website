import { PageHero } from "@/components/sections/PageHero";
import { home } from "@/content/home";
import { site } from "@/content/site";

// Placeholder until the homepage is built in Stage 5.
export default function HomePage() {
  return (
    <PageHero
      eyebrow={home.hero.eyebrow}
      headline={home.hero.headline}
      subheading={home.hero.subheading}
      whatsappMessage={site.whatsapp.defaultMessage}
    />
  );
}
