import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { BentoCard } from "@/components/ui/BentoGrid";
import { IconTile } from "@/components/ui/IconTile";
import { NumberText } from "@/components/ui/NumberText";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCaseStudy } from "@/content/caseStudies";
import { home } from "@/content/home";
import { type Service, services, servicesSection } from "@/content/services";

// Bento by importance: Meta Ads leads row one, Website Design (with the portfolio) row two.
const span = {
  "meta-ads": "lg",
  "google-business-profile": "sm",
  "whatsapp-marketing": "sm",
  "website-design": "lg",
} as const;

// Real proof on the Meta Ads card, from the same case study as the hero card.
const proof = getCaseStudy(home.hero.reportCard.caseStudy);

function ServiceCard({ service }: { service: Service }) {
  const featured = service.slug === "meta-ads";
  return (
    <div className="flex h-full flex-col">
      <IconTile name={service.icon} />
      <h3 className="mt-5 type-h3 text-navy-900">
        {/* Stretched link: the whole card is clickable, the title is the accessible name. */}
        <Link
          href={service.href}
          className="after:absolute after:inset-0 after:rounded-card"
        >
          {service.name}
        </Link>
      </h3>
      <p className={`mt-2 text-navy-900 ${featured ? "type-body-lg" : ""}`}>
        {service.outcome}
      </p>
      <ul className="mt-5 grid gap-2.5">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <RisingDots className="mt-1.5" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {featured ? (
        <div className="mt-8 rounded-inner bg-surface p-5">
          <p className="text-sm text-muted">
            {proof.client} · {proof.period}
          </p>
          <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
            {proof.results.map((r, i) => (
              <div key={r.label}>
                <dt className="text-sm text-body">{r.label}</dt>
                <dd
                  className={`mt-1 metric-md ${i === 0 ? "text-lime-text" : "text-navy-900"}`}
                >
                  <NumberText
                    value={r.value}
                    decimals={r.decimals}
                    prefix={r.prefix}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-blue-600">
        {servicesSection.linkLabel}
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-4 transition-transform duration-150 group-hover/lift:translate-x-1"
        />
      </span>
    </div>
  );
}

export function ServicesBento() {
  return (
    <section className="bg-surface section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.heading}
          intro={servicesSection.intro}
        />
        <StaggerGroup className="mt-12 grid-site">
          {services.map((service) => (
            <BentoCard
              key={service.slug}
              span={span[service.slug]}
              className="relative"
            >
              <ServiceCard service={service} />
            </BentoCard>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
