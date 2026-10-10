import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { PlansSection } from "@/components/sections/PricingCards";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faqs";
import { home } from "@/content/home";
import { pages, seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.growthAssessment);

const copy = pages.growthAssessment;

// The Digital Health Check quiz (#health-check) and the assessment form (#assessment-form)
// are added in Stage 9; the free assessment's what-you-get, steps and the paid options are here.
export default function GrowthAssessmentPage() {
  return (
    <>
      <PageHero {...copy.hero} whatsappMessage={site.whatsapp.defaultMessage} />

      <section className="bg-white section-y">
        <div className="container-site grid-site gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading title={copy.whatYouGet.heading} />
            <ul className="mt-8 grid gap-4">
              {copy.whatYouGet.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 type-body-lg text-navy-900"
                >
                  <RisingDots className="mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading title={copy.steps.heading} />
            <ol className="mt-8 grid gap-4">
              {copy.steps.items.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-card border border-border bg-surface p-6"
                >
                  <RisingDots
                    variant="steps"
                    count={copy.steps.items.length}
                    active={i + 1}
                    className="mt-1"
                  />
                  <div>
                    <h3 className="type-h3 text-navy-900">{step.title}</h3>
                    <p className="mt-2">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PlansSection
        offering="digital-growth-assessment"
        eyebrow={copy.paidAssessment.eyebrow}
      />
      <PlansSection
        offering="digital-foundation"
        eyebrow={pages.servicePage.plansEyebrow}
        className="bg-white"
      />
      <FaqSection items={faqs} />
      <FinalCtaBand {...home.finalCta} />
    </>
  );
}
