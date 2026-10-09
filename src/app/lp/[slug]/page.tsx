import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { landingPages } from "@/content/landingPages";
import { seo } from "@/content/pages";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.landingPage);

// Every valid slug is prerendered by generateStaticParams. Allowing this segment to block
// (instead of streaming params behind <Suspense>) keeps a real 404 status for unknown slugs.
export const instant = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

// Placeholder until the landing page template is built in Stage 10.
export default async function LandingPage({ params }: PageProps<"/lp/[slug]">) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) notFound();
  const service = getService(page.service);
  return (
    <PageHero {...service.hero} whatsappMessage={service.whatsappMessage} />
  );
}
