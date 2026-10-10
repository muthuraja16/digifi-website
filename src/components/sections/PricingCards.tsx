import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NumberText } from "@/components/ui/NumberText";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  offerings,
  type OfferingSlug,
  type Plan,
  plansFor,
  pricingLabels as labels,
} from "@/content/packages";
import { site, whatsappHref } from "@/content/site";

const rupees = (digits: string) => Number(digits.replace(/,/g, ""));

const columns = {
  1: "max-w-xl",
  2: "md:grid-cols-2",
  3: "lg:grid-cols-3",
} as const;

function PlanPrice({ plan }: { plan: Plan }) {
  return (
    <div className="mt-6">
      {plan.priceFrom ? (
        <p className="text-sm text-muted">{labels.startsFrom}</p>
      ) : null}
      <p className="flex items-baseline gap-2 text-navy-900">
        <span className="metric">
          <NumberText value={rupees(plan.price)} prefix="₹" />
        </span>
        <span className="text-sm text-body">
          {plan.billing === "monthly" ? labels.perMonth : labels.oneTime}
        </span>
      </p>
      {plan.priceNote ? (
        <p className="mt-2 text-sm text-muted">{plan.priceNote}</p>
      ) : null}
      {plan.adBudget ? (
        <p className="mt-3 text-sm text-body">
          {labels.adBudget}:{" "}
          <span className="metric-sm text-navy-900">
            <NumberText value={rupees(plan.adBudget)} prefix="₹" />
          </span>
          {labels.adBudgetSuffix}
        </p>
      ) : null}
      {plan.terms ? (
        <p className="mt-2 text-sm font-semibold text-navy-900">{plan.terms}</p>
      ) : null}
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card
      className={`flex flex-col ${plan.badge ? "ring-2 ring-blue-600/30" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="type-h3 text-navy-900">{plan.name}</h3>
        {plan.badge ? <Badge tone="brand">{plan.badge}</Badge> : null}
      </div>
      <p className="mt-2 text-navy-900">{plan.tagline}</p>
      <PlanPrice plan={plan} />

      <p className="mt-6 text-sm font-semibold text-navy-900">
        {labels.bestFor}
      </p>
      <ul className="mt-2 grid gap-2">
        {plan.bestFor.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <RisingDots className="mt-1" />
            {item}
          </li>
        ))}
      </ul>

      <details className="group mt-6 border-t border-border pt-2">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-semibold text-blue-600 [&::-webkit-details-marker]:hidden">
          {labels.seeIncluded}
          <ChevronDown
            aria-hidden="true"
            strokeWidth={1.75}
            className="size-5 transition-transform duration-[250ms] group-open:rotate-180"
          />
        </summary>
        <div className="grid gap-5 pb-2 text-sm">
          {plan.includesPrevious ? (
            <p className="font-semibold text-navy-900">
              {plan.includesPrevious}
            </p>
          ) : null}
          {plan.features.map((group) => (
            <div key={group.heading}>
              <p className="font-semibold text-navy-900">{group.heading}</p>
              <ul className="mt-2 grid gap-2">
                {group.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <RisingDots className="mt-1" />
                    <span>
                      <span className="text-navy-900">{item.title}</span>
                      {item.detail ? (
                        <span className="block text-muted">{item.detail}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {plan.addOns?.length ? (
            <div>
              <p className="font-semibold text-navy-900">{labels.addOns}</p>
              <p className="mt-1 text-muted">{plan.addOns.join(" · ")}</p>
            </div>
          ) : null}
          {plan.delivery ? (
            <p>
              <span className="font-semibold text-navy-900">
                {labels.delivery}:
              </span>{" "}
              {plan.delivery}
            </p>
          ) : null}
        </div>
      </details>

      <div className="mt-auto pt-6">
        <p className="mb-4 text-sm text-body">{plan.summary}</p>
        <Button
          variant="whatsapp"
          href={whatsappHref(plan.whatsappMessage)}
          className="w-full"
        >
          {labels.cta}
        </Button>
      </div>
    </Card>
  );
}

/** Plan cards for one offering (packages.ts). */
export function PricingCards({ plans }: { plans: Plan[] }) {
  const cols = columns[Math.min(plans.length, 3) as 1 | 2 | 3];
  return (
    <div className={`grid items-stretch gap-5 ${cols}`}>
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

/**
 * Plans section: heading, the offering's plan cards and its note, optional extra content
 * (e.g. the custom website quote card) and the "not sure" assessment CTA.
 */
export function PlansSection({
  offering,
  eyebrow,
  className = "bg-surface",
  children,
}: {
  offering: OfferingSlug;
  eyebrow: string;
  className?: string;
  children?: ReactNode;
}) {
  const { name, intro, note } = offerings[offering];
  return (
    <section className={`section-y ${className}`}>
      <div className="container-site">
        <SectionHeading eyebrow={eyebrow} title={name} intro={intro} />
        <div className="mt-12">
          <PricingCards plans={plansFor(offering)} />
        </div>
        {note ? (
          <p className="mt-6 max-w-3xl text-sm text-body">{note}</p>
        ) : null}
        {children}
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-semibold text-navy-900">
            {labels.notSure}
          </p>
          <Button href={site.ctas.primaryHref} arrow className="shrink-0">
            {site.ctas.primary}
          </Button>
        </div>
      </div>
    </section>
  );
}
