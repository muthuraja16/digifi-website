import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { serviceSeo } from "@/content/pages";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

// Every valid slug is prerendered by generateStaticParams. Allowing this segment to block
// (instead of streaming params behind <Suspense>) keeps a real 404 status for unknown slugs.
export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = findService((await params).slug);
  return service ? pageMetadata(serviceSeo[service.slug]) : {};
}

// Placeholder until the service page template is built in Stage 6.
export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = findService((await params).slug);
  if (!service) notFound();
  return (
    <PageHero {...service.hero} whatsappMessage={service.whatsappMessage} />
  );
}
