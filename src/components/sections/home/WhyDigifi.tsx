import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/home";

export function WhyDigifi() {
  const { whyDigifi: w } = home;
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHeading eyebrow={w.eyebrow} title={w.heading} />
        <StaggerGroup className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {w.items.map((item) => (
            <div key={item.title} className="border-t border-border pt-6">
              <IconTile name={item.icon} />
              <h3 className="mt-5 type-h3 text-navy-900">{item.title}</h3>
              <p className="mt-2">{item.body}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
