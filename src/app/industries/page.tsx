import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { IconTile } from "@/components/ui/IconTile";
import { caseStudies } from "@/content/caseStudies";
import { home } from "@/content/home";
import { industries, industriesSection } from "@/content/industries";
import { pages, seo } from "@/content/pages";
import { getService } from "@/content/services";
import { site, whatsappHref } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.industries);

const copy = pages.industries;

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...copy.hero} whatsappMessage={site.whatsapp.defaultMessage} />
      <section className="bg-surface section-y">
        <div className="container-site grid gap-6">
          {industries.map((industry) => {
            const hasResults = caseStudies.some(
              (c) => c.industry === industry.slug,
            );
            return (
              <Reveal key={industry.slug}>
                <article
                  id={industry.slug}
                  className="grid gap-8 rounded-card border border-border bg-white p-6 shadow-card md:p-10 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <IconTile name={industry.icon} />
                    <h2 className="mt-5 type-h2 text-navy-900">
                      {industry.name}
                    </h2>
                    <p className="mt-2 text-muted">{industry.covers}</p>
                    <p className="mt-6 text-sm font-semibold text-navy-900">
                      {copy.labels.clients}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2" translate="no">
                      {industry.clients.map((client) => (
                        <li key={client}>
                          <Chip>{client}</Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid content-start gap-6 lg:col-span-7">
                    <div>
                      <h3 className="eyebrow text-blue-600">
                        {copy.labels.problem}
                      </h3>
                      <p className="mt-2 type-body-lg text-navy-900">
                        {industry.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="eyebrow text-blue-600">
                        {copy.labels.howWeHelp}
                      </h3>
                      <p className="mt-2">{industry.howWeHelp}</p>
                    </div>
                    <div className="border-t border-border pt-5">
                      <h3 className="text-sm font-semibold text-navy-900">
                        {copy.labels.services}
                      </h3>
                      <ul className="mt-2 flex flex-wrap gap-x-6">
                        {industry.services.map((slug) => {
                          const service = getService(slug);
                          return (
                            <li key={slug}>
                              <Link
                                href={service.href}
                                className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-blue-600 hover:underline"
                              >
                                {service.name}
                                <ArrowRight
                                  aria-hidden="true"
                                  strokeWidth={1.75}
                                  className="size-4"
                                />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      {hasResults ? (
                        <Link
                          href="/results"
                          className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-blue-600"
                        >
                          {copy.labels.results}
                          <ArrowRight
                            aria-hidden="true"
                            strokeWidth={1.75}
                            className="size-4"
                          />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container-site flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl type-h2 text-navy-900">
            {industriesSection.ctaLine}
          </h2>
          <Button
            variant="whatsapp"
            size="lg"
            href={whatsappHref(industriesSection.whatsappMessage)}
          >
            {site.ctas.whatsapp}
          </Button>
        </div>
      </section>
      <FinalCtaBand {...home.finalCta} />
    </>
  );
}
