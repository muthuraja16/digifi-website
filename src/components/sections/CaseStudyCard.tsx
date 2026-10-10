import Image from "next/image";
import type { ReactNode } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { Card } from "@/components/ui/Card";
import type { CaseStudy } from "@/content/caseStudies";
import { industries } from "@/content/industries";

const industryName = (slug: string) =>
  industries.find((i) => i.slug === slug)?.name ?? "";

/**
 * One case study: client, trade, challenge and real results (CountUp, Geist Mono; the first,
 * "up" result in lime-text). `children` adds extra content below, e.g. the expandable story.
 */
export function CaseStudyCard({
  study,
  headingLevel: Heading = "h3",
  children,
}: {
  study: CaseStudy;
  headingLevel?: "h2" | "h3";
  children?: ReactNode;
}) {
  return (
    <Card className="flex flex-col">
      <div className="flex items-center gap-4">
        {study.logo ? (
          <span className="flex h-14 max-w-36 min-w-14 shrink-0 items-center justify-center overflow-hidden rounded-inner border border-border bg-white px-2 py-1.5">
            <Image
              src={study.logo.src}
              alt=""
              width={study.logo.width}
              height={study.logo.height}
              sizes="144px"
              className="max-h-full w-auto object-contain"
            />
          </span>
        ) : null}
        <div className="min-w-0">
          <Heading
            className="text-lg leading-snug font-bold text-navy-900"
            translate="no"
          >
            {study.client}
          </Heading>
          <p className="text-sm text-muted">
            {study.trade} · {industryName(study.industry)}
          </p>
        </div>
      </div>
      <p className="mt-5 mb-6 text-navy-900">{study.challenge}</p>
      <dl className="mt-auto flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-5">
        {study.results.map((result, i) => (
          <div key={result.label}>
            <dt className="text-sm text-body">{result.label}</dt>
            <dd
              className={`mt-1 metric ${i === 0 ? "text-lime-text" : "text-navy-900"}`}
            >
              <CountUp
                value={result.value}
                prefix={result.prefix}
                decimals={result.decimals}
              />
            </dd>
            {result.context ? (
              <dd className="text-sm text-muted">{result.context}</dd>
            ) : null}
          </div>
        ))}
      </dl>
      <p className="mt-5 metric-sm text-muted">{study.period}</p>
      {children}
    </Card>
  );
}
