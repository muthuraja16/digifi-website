import { CountUp } from "@/components/motion/CountUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconTile } from "@/components/ui/IconTile";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";
import { seo } from "@/content/pages";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { isTbd } from "@/lib/tbd";

export const metadata = pageMetadata(seo.about);

/** Initials for the avatar; placeholders show the rising-dots mark instead. */
function initials(name: string) {
  if (isTbd(name)) return null;
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        {...about.hero}
        whatsappMessage={site.whatsapp.defaultMessage}
      />

      {/* Story */}
      <section className="bg-white section-y">
        <div className="container-site grid-site gap-y-8">
          <div className="col-span-12 lg:col-span-5">
            <RisingDots variant="divider" />
            <h2 className="mt-6 type-h2 text-navy-900">
              {about.story.heading}
            </h2>
          </div>
          <div className="col-span-12 grid gap-5 type-body-lg text-navy-900 lg:col-span-7">
            {about.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers (dark band) */}
      <section className="on-dark bg-navy-900 section-y">
        <div className="container-site">
          <Eyebrow>{about.numbers.eyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl type-h2 text-white">
            {about.numbers.heading}
          </h2>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.numbers.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col-reverse border-t border-white/15 pt-5"
              >
                <dt className="mt-2 text-on-dark">{item.label}</dt>
                <dd className="metric text-white">
                  <CountUp value={item.value} suffix={item.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface section-y">
        <div className="container-site">
          <SectionHeading title={about.approach.heading} />
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {about.approach.items.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-border bg-white p-6 md:p-8"
              >
                <IconTile name={item.icon} />
                <h3 className="mt-5 type-h3 text-navy-900">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Team: real people and photos only; initials until photos arrive */}
      <section className="bg-white section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow={about.team.eyebrow}
            title={about.team.heading}
            intro={about.team.intro}
          />
          <ul className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {about.team.members.map((member, i) => {
              const letters = initials(member.name);
              return (
                <li key={`${member.name}-${i}`}>
                  <div
                    className="flex aspect-square items-center justify-center rounded-card bg-navy-900 text-white"
                    aria-hidden="true"
                  >
                    {letters ? (
                      <span className="text-5xl font-bold">{letters}</span>
                    ) : (
                      <RisingDots
                        variant="steps"
                        className="scale-150 text-sky-300"
                      />
                    )}
                  </div>
                  <p className="mt-4 font-semibold text-navy-900">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted">{member.role}</p>
                  {member.photo ? null : (
                    <p className="mt-1 text-xs text-muted">
                      {about.team.photoPending}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface section-y">
        <div className="container-site">
          <SectionHeading title={about.values.heading} />
          <StaggerGroup className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {about.values.items.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 border-t border-border pt-6"
              >
                <RisingDots className="mt-2" />
                <div>
                  <h3 className="type-h3 text-navy-900">{value.title}</h3>
                  <p className="mt-2">{value.body}</p>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <FinalCtaBand heading={about.cta.heading} body={about.cta.body} />
    </>
  );
}
