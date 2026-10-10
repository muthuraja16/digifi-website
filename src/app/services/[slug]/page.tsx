import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { PlansSection } from "@/components/sections/PricingCards";
import {
  ServiceIncluded,
  ServiceIndustries,
  ServicePortfolio,
  ServicePriceFrom,
  ServiceProblem,
  ServiceProcess,
  ServiceResults,
} from "@/components/sections/ServiceSections";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { faqs, serviceFaqs } from "@/content/faqs";
import { home } from "@/content/home";
import { pricingLabels } from "@/content/packages";
import { pages, serviceSeo } from "@/content/pages";
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

/**
 * Service page template. Order: hero → problem → how we work → included → results (or, for
 * Website Design, the portfolio) → who it's for → plans → FAQs → final CTA.
 */
export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = findService((await params).slug);
  if (!service) notFound();
  const isWebsite = service.slug === "website-design";

  return (
    <>
      <PageHero {...service.hero} whatsappMessage={service.whatsappMessage}>
        <ServicePriceFrom service={service} />
        {service.extraCta ? (
          <div className="mt-4">
            <Button variant="secondary" href={service.extraCta.href} arrow>
              {service.extraCta.label}
            </Button>
          </div>
        ) : null}
      </PageHero>
      <ClientStrip />
      <ServiceProblem service={service} />
      <ServiceProcess service={service} />
      <ServiceIncluded service={service} />
      {isWebsite ? <ServicePortfolio /> : <ServiceResults service={service} />}
      <ServiceIndustries service={service} />
      {service.plans.map((offering) => (
        <PlansSection
          key={offering}
          offering={offering}
          eyebrow={pages.servicePage.plansEyebrow}
        >
          {isWebsite && service.extraCta ? (
            <Card className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="type-h3 text-navy-900">
                  {pricingLabels.customWebsite.heading}
                </h3>
                <p className="mt-2 max-w-2xl">
                  {pricingLabels.customWebsite.body}
                </p>
              </div>
              <Button
                variant="secondary"
                href={service.extraCta.href}
                arrow
                className="shrink-0 self-start md:self-auto"
              >
                {pricingLabels.customWebsite.cta}
              </Button>
            </Card>
          ) : null}
        </PlansSection>
      ))}
      <FaqSection
        items={[...serviceFaqs[service.slug], ...faqs]}
        className="bg-white"
      />
      <FinalCtaBand
        {...home.finalCta}
        whatsappMessage={service.whatsappMessage}
      />
    </>
  );
}
