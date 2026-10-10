import type { LegalDocument } from "@/content/legal";
import { pages } from "@/content/pages";
import { PageHero } from "./PageHero";

/**
 * Readable legal layout: dark hero, then a 720px text column with a table of contents
 * (sticky beside the text on wide screens, above it on phones) and the last-updated date.
 */
export function LegalPage({ document: doc }: { document: LegalDocument }) {
  const { lastUpdatedLabel, tocLabel } = pages.legal;
  return (
    <>
      <PageHero headline={doc.headline}>
        <p className="mt-6 metric-sm text-on-dark">
          {lastUpdatedLabel}: <time>{doc.lastUpdated}</time>
        </p>
      </PageHero>
      <div className="bg-white section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[240px_minmax(0,720px)] lg:justify-between">
          <nav aria-label={tocLabel} className="lg:order-none">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)]">
              <p className="eyebrow text-muted">{tocLabel}</p>
              <ol className="mt-4 grid gap-1 border-l border-border">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px flex min-h-9 items-center border-l-2 border-transparent pl-4 text-sm text-body transition-colors duration-150 hover:border-blue-600 hover:text-navy-900"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-[720px] text-navy-900">
            <p className="type-body-lg">{doc.intro}</p>
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-12">
                <h2 className="type-h3">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-body">
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-4 grid list-disc gap-2 pl-6 text-body marker:text-blue-600">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
