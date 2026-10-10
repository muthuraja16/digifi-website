import { LockKeyhole, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import {
  googleRating,
  googleRatingLabels,
  testimonials,
  testimonialsSection,
} from "@/content/trust";
import { formatNumber } from "@/lib/numbers";

/** "Your data stays private. No spam calls." Goes directly under every form (Stage 9). */
export function FormTrustLine({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex items-center gap-2 text-sm text-muted on-dark:text-on-dark ${className}`}
    >
      <LockKeyhole
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-4 shrink-0"
      />
      {site.ctas.formPrivacy}
    </p>
  );
}

/**
 * Google rating badge. Renders nothing until `googleRating` in content/trust.ts is set from
 * DIGIFI's real Google Business Profile.
 */
export function GoogleRatingBadge({ className = "" }: { className?: string }) {
  if (!googleRating) return null;
  const { rating, count, url } = googleRating;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${formatNumber(rating, 1)} out of 5 from ${count} ${googleRatingLabels.source}. ${googleRatingLabels.read}`}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm text-navy-900 hover:border-navy-900/40 on-dark:border-white/15 on-dark:bg-transparent on-dark:text-white ${className}`}
    >
      <Star
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-4 fill-current"
      />
      <span className="metric-sm">{formatNumber(rating, 1)}</span>
      <span className="text-muted on-dark:text-on-dark">
        {count} {googleRatingLabels.source}
      </span>
    </a>
  );
}

/** Client quotes. Renders nothing until real testimonials (with permission) are added. */
export function TestimonialsSection() {
  if (!testimonials.length) return null;
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.heading}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="h-full rounded-card border border-border bg-surface p-6 md:p-8">
                <blockquote className="type-body-lg text-navy-900">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span
                    className="block font-semibold text-navy-900"
                    translate="no"
                  >
                    {t.name}
                  </span>
                  <span className="text-sm text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
