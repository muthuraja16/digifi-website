import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
        <ButtonLink variant="primary" href={site.ctas.primaryHref}>
          {site.ctas.primary}
        </ButtonLink>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/8"
        >
          {site.notFound.homeLabel}
        </Link>
      </div>
    </PageHero>
  );
}
