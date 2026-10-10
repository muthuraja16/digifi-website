import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Faq, faqSection } from "@/content/faqs";
import { site, whatsappHref } from "@/content/site";

/** FAQ block. Only confirmed answers are shown; [confirm] items stay hidden until approved. */
export function FaqSection({
  items,
  className = "bg-surface",
}: {
  items: Faq[];
  className?: string;
}) {
  const confirmed = items.filter((faq) => faq.confirmed);
  if (!confirmed.length) return null;
  return (
    <section className={`section-y ${className}`}>
      <div className="container-site grid-site gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <SectionHeading
            eyebrow={faqSection.eyebrow}
            title={faqSection.heading}
          />
          <p className="mt-6 text-body">{faqSection.moreQuestions}</p>
          <Button variant="whatsapp" href={whatsappHref()} className="mt-4">
            {site.ctas.whatsapp}
          </Button>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Accordion
            items={confirmed.map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: <p>{faq.answer}</p>,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
