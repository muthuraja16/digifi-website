import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.notFound);

export default function NotFound() {
  return (
    <PageHero
      eyebrow={site.notFound.eyebrow}
      headline={site.notFound.title}
      subheading={site.notFound.body}
    >
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button variant="primary" href={site.ctas.primaryHref}>
          {site.ctas.primary}
        </Button>
        <Button variant="secondary" href="/">
          {site.notFound.homeLabel}
        </Button>
      </div>
    </PageHero>
  );
}
