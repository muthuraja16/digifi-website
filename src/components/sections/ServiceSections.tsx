import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { IconTile } from "@/components/ui/IconTile";
import { NumberText } from "@/components/ui/NumberText";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies, resultsSection } from "@/content/caseStudies";
import { industries } from "@/content/industries";
import { plansFor, pricingLabels } from "@/content/packages";
import { pages } from "@/content/pages";
import { type Service, services, websitePortfolio } from "@/content/services";
import { isTbd } from "@/lib/tbd";
import { CaseStudyCard } from "./CaseStudyCard";

const labels = pages.servicePage;

/** Lowest plan price for the hero, e.g. "From ₹12,000/month". */
export function ServicePriceFrom({ service }: { service: Service }) {
  const plans = service.plans.flatMap(plansFor);
  if (!plans.length) return null;
  const cheapest = plans.reduce((a, b) =>
    Number(a.price.replace(/,/g, "")) <= Number(b.price.replace(/,/g, ""))
      ? a
      : b,
  );
  return (
    <p className="mt-8 inline-flex items-baseline gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-on-dark">
      {labels.priceFromLabel}
      <span className="metric-sm text-white">
        <NumberText
          value={Number(cheapest.price.replace(/,/g, ""))}
          prefix="₹"
        />
      </span>
      {cheapest.billing === "monthly"
        ? pricingLabels.perMonth
        : ` ${pricingLabels.oneTime}`}
    </p>
  );
}

export function ServiceProblem({ service }: { service: Service }) {
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow={labels.problemEyebrow}
          title={service.problem.heading}
        />
        <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {service.problem.points.map((point) => (
            <p
              key={point}
              className="border-t-2 border-navy-900 pt-5 type-body-lg text-navy-900"
            >
              {point}
            </p>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function ServiceProcess({ service }: { service: Service }) {
  const { steps } = service.process;
  return (
    <section className="bg-surface section-y">
      <div className="container-site grid-site gap-y-10">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)]">
            <SectionHeading
              eyebrow={labels.processEyebrow}
              title={service.process.heading}
            />
          </div>
        </div>
        <ol className="col-span-12 grid gap-4 lg:col-span-7">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal className="flex gap-5 rounded-card border border-border bg-white p-6">
                <RisingDots
                  variant="steps"
                  count={steps.length}
                  active={i + 1}
                  className="mt-1"
                />
                <div>
                  <h3 className="type-h3 text-navy-900">{step.title}</h3>
                  <p className="mt-2">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceIncluded({ service }: { service: Service }) {
  return (
    <section className="bg-white section-y">
      <div className="container-site grid-site gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <SectionHeading
            eyebrow={labels.includedEyebrow}
            title={labels.includedHeading}
          />
        </div>
        <ul className="col-span-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-8">
          {service.included.map((item) => (
            <li key={item} className="flex items-start gap-3 text-navy-900">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Check aria-hidden="true" strokeWidth={2} className="size-4" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Case studies for this service; renders nothing until one exists. */
export function ServiceResults({ service }: { service: Service }) {
  const studies = caseStudies.filter((c) => c.services.includes(service.slug));
  if (!studies.length) return null;
  return (
    <section className="bg-surface section-y">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={labels.resultsEyebrow}
            title={labels.resultsHeading}
          />
          <Button
            variant="secondary"
            href="/results"
            arrow
            className="shrink-0 self-start md:self-auto"
          >
            {resultsSection.linkLabel}
          </Button>
        </div>
        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-2">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </StaggerGroup>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          {resultsSection.enquiryNote} {resultsSection.disclaimer}
        </p>
      </div>
    </section>
  );
}

/** Who it's for (industry links) and the related services. */
export function ServiceIndustries({ service }: { service: Service }) {
  const groups = industries.filter((i) => service.industries.includes(i.slug));
  const related = services.filter((s) => s.slug !== service.slug);
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow={labels.industriesEyebrow}
          title={labels.industriesHeading}
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {groups.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries#${industry.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-white px-4 font-medium text-navy-900 transition-colors duration-150 hover:border-blue-600/40 hover:text-blue-600"
              >
                {industry.name}
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-4"
                />
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 type-h3 text-navy-900">{labels.relatedHeading}</h3>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="flex h-full items-start gap-4 rounded-card border border-border p-5 transition-[border-color,box-shadow] duration-[250ms] hover:border-blue-600/30 hover:shadow-hover"
              >
                <IconTile name={s.icon} />
                <span>
                  <span className="block font-semibold text-navy-900">
                    {s.name}
                  </span>
                  <span className="mt-1 block text-sm">{s.outcome}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Website Design only: live sites in browser frames. */
export function ServicePortfolio() {
  return (
    <section className="bg-surface section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow={labels.portfolioEyebrow}
          title={websitePortfolio.heading}
          intro={websitePortfolio.intro}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {websitePortfolio.items.map((item) => (
            <figure key={item.client}>
              <BrowserFrame
                url={
                  isTbd(item.url)
                    ? item.url
                    : item.url.replace(/^https?:\/\//, "")
                }
              >
                {isTbd(item.screenshot) ? (
                  <p className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-muted">
                    {item.screenshot}
                  </p>
                ) : (
                  <Image
                    src={item.screenshot}
                    alt={`${item.client} website`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                )}
              </BrowserFrame>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="font-semibold text-navy-900" translate="no">
                  {item.client}
                </span>
                {isTbd(item.url) ? (
                  <Chip>{item.url}</Chip>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-blue-600 hover:underline"
                  >
                    {websitePortfolio.visitLabel}
                    <ArrowRight
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="size-4"
                    />
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
