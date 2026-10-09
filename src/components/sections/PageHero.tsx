import type { ReactNode } from "react";
import { site, whatsappHref } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

type PageHeroProps = {
  eyebrow?: string;
  headline: string;
  subheading?: string;
  /** Pre-filled WhatsApp message for this page. Omit to hide the CTAs (legal, dashboard). */
  whatsappMessage?: string;
  children?: ReactNode;
};

/**
 * Dark page hero. Every page opens with a dark section so the transparent header
 * always sits on navy; the top padding clears the fixed header.
 */
export function PageHero({
  eyebrow,
  headline,
  subheading,
  whatsappMessage,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-navy-950 pt-[calc(var(--header-h)+48px)] pb-16 md:pt-[calc(var(--header-h)+96px)] md:pb-28">
      <div className="container-site">
        {eyebrow ? <p className="eyebrow text-sky-300">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-[18ch] type-display text-white">
          {headline}
        </h1>
        {subheading ? (
          <p className="mt-6 max-w-2xl type-body-lg text-on-dark">
            {subheading}
          </p>
        ) : null}
        {whatsappMessage ? (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink variant="primary" href={site.ctas.primaryHref}>
              {site.ctas.primary}
            </ButtonLink>
            <ButtonLink variant="whatsapp" href={whatsappHref(whatsappMessage)}>
              {site.ctas.whatsapp}
            </ButtonLink>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
