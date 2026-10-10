import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies, resultsSection } from "@/content/caseStudies";

export function ResultsSection() {
  return (
    <section className="bg-surface section-y">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={resultsSection.eyebrow}
            title={resultsSection.heading}
            intro={resultsSection.intro}
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
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </StaggerGroup>

        <p className="mt-8 max-w-3xl text-sm text-muted">
          {resultsSection.enquiryNote} {resultsSection.costPerLeadNote}{" "}
          {resultsSection.disclaimer}
        </p>
      </div>
    </section>
  );
}
