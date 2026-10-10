import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, industriesSection } from "@/content/industries";
import { site, whatsappHref } from "@/content/site";

export function IndustriesSection() {
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow={industriesSection.eyebrow}
          title={industriesSection.heading}
          intro={industriesSection.intro}
        />
        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.slug}>
              <IconTile name={industry.icon} />
              <h3 className="mt-5 type-h3 text-navy-900">{industry.name}</h3>
              <p className="mt-1 text-sm text-muted">{industry.covers}</p>
              <p className="mt-5 text-sm font-semibold text-navy-900">
                {industriesSection.clientsLabel}
              </p>
              <p className="mt-1" translate="no">
                {industry.clients.join(", ")}
              </p>
            </Card>
          ))}
        </StaggerGroup>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="type-h3 text-navy-900">{industriesSection.ctaLine}</p>
          <Button
            variant="whatsapp"
            href={whatsappHref(industriesSection.whatsappMessage)}
          >
            {site.ctas.whatsapp}
          </Button>
        </div>
      </div>
    </section>
  );
}
