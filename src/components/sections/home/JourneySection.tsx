import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/home";
import { getService } from "@/content/services";
import { JourneySteps } from "./JourneySteps";

export function JourneySection() {
  const { journey } = home;
  const steps = journey.order.map((slug) => {
    const service = getService(slug);
    return {
      step: service.journey.step,
      body: service.journey.body,
      service: service.name,
      href: service.href,
      icon: service.icon,
    };
  });
  return (
    <section aria-labelledby="journey-heading">
      <JourneySteps
        steps={steps}
        stepLabel={journey.stepLabel}
        linkLabel={journey.linkLabel}
        heading={
          <div id="journey-heading">
            <SectionHeading
              eyebrow={journey.eyebrow}
              title={journey.heading}
              intro={journey.intro}
            />
          </div>
        }
      />
    </section>
  );
}
