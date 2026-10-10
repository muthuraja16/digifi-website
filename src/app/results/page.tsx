import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ResultsFilter } from "@/components/sections/ResultsFilter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RisingDots } from "@/components/ui/RisingDots";
import {
  type CaseStudy,
  caseStudies,
  resultsSection,
} from "@/content/caseStudies";
import { home } from "@/content/home";
import { pages, seo } from "@/content/pages";
import { services } from "@/content/services";
import { site, whatsappHref } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.results);

const copy = pages.results;

/** Expandable full story: challenge → what we did → results (with the Ads Manager screenshot). */
function Story({ study }: { study: CaseStudy }) {
  const serviceLinks = services.filter((s) => study.services.includes(s.slug));
  return (
    <details className="group mt-6 border-t border-border pt-2">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-semibold text-blue-600 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">{copy.expandLabel}</span>
        <span className="hidden group-open:inline">{copy.collapseLabel}</span>
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-5 transition-transform duration-[250ms] group-open:rotate-180"
        />
      </summary>
      <div className="grid gap-6 pt-3 pb-2">
        <div>
          <h4 className="eyebrow text-blue-600">
            {copy.storyLabels.challenge}
          </h4>
          <p className="mt-2 text-navy-900">{study.challenge}</p>
        </div>
        <div>
          <h4 className="eyebrow text-blue-600">
            {copy.storyLabels.whatWeDid}
          </h4>
          <ul className="mt-2 grid gap-2">
            {study.whatWeDid.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <RisingDots className="mt-1.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow text-blue-600">{copy.storyLabels.results}</h4>
          {study.screenshot ? (
            <figure className="mt-3 overflow-hidden rounded-inner border border-border">
              <Image
                src={study.screenshot.src}
                alt={study.screenshotAlt}
                width={study.screenshot.width}
                height={study.screenshot.height}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </figure>
          ) : null}
          <p className="mt-3 text-sm text-muted">
            {resultsSection.enquiryNote}
          </p>
        </div>
        <p className="flex flex-wrap gap-x-5">
          {serviceLinks.map((s) => (
            <Button key={s.slug} variant="ghost" size="sm" href={s.href} arrow>
              {copy.serviceLink}: {s.name}
            </Button>
          ))}
        </p>
      </div>
    </details>
  );
}

export default function ResultsPage() {
  const options = [
    { value: "all", label: copy.allLabel },
    ...services.map((s) => ({ value: s.slug, label: s.name })),
  ];
  return (
    <>
      <PageHero {...copy.hero} whatsappMessage={site.whatsapp.defaultMessage} />
      <section className="bg-surface section-y">
        <div className="container-site">
          <ResultsFilter
            label={copy.filterLabel}
            countLabel={copy.countLabel}
            options={options}
            items={caseStudies.map((study) => ({
              id: study.slug,
              tags: study.services,
              node: (
                <CaseStudyCard study={study} headingLevel="h2">
                  <Story study={study} />
                </CaseStudyCard>
              ),
            }))}
            empty={
              <Card className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-navy-900">{copy.emptyState}</p>
                <Button variant="whatsapp" href={whatsappHref()}>
                  {site.ctas.whatsapp}
                </Button>
              </Card>
            }
          />
          <p className="mt-10 max-w-3xl text-sm text-muted">
            {resultsSection.costPerLeadNote} {copy.disclaimer}
          </p>
        </div>
      </section>
      <FinalCtaBand {...home.finalCta} />
    </>
  );
}
