import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoogleRatingBadge } from "@/components/sections/TrustElements";
import { RisingDots } from "@/components/ui/RisingDots";
import { home } from "@/content/home";
import { site, whatsappHref } from "@/content/site";
import { HeroReportCard } from "./HeroReportCard";

export function HeroSection() {
  const { hero } = home;
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-950 pt-[calc(var(--header-h)+40px)] pb-16 md:pt-[calc(var(--header-h)+80px)] md:pb-28">
      <div className="container-site grid-site items-center gap-y-12">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          {/* LCP element: rendered immediately, never animated in. */}
          {/* 60px between 1024 and 1279px, where the hero column is narrow; 72px from 1280px. */}
          <h1 className="mt-5 max-w-[16ch] type-display text-white lg:max-xl:text-[60px]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl type-body-lg text-on-dark">
            {hero.subheading}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={site.ctas.primaryHref} size="lg" arrow>
              {site.ctas.primary}
            </Button>
            <Button variant="whatsapp" href={whatsappHref()} size="lg">
              {site.ctas.whatsapp}
            </Button>
          </div>
          <p className="mt-8 flex items-start gap-3 text-sm text-on-dark">
            <RisingDots className="mt-0.5" />
            {site.trustLine}
          </p>
          {/* Hidden until DIGIFI's Google Business Profile has reviews (content/trust.ts). */}
          <GoogleRatingBadge className="mt-4" />
        </div>

        <div className="relative col-span-12 lg:col-span-5">
          {/* The one gradient on the site: a soft blue-600 glow at 12% behind the report card. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-blue-600)_12%,transparent),transparent)]"
          />
          <HeroReportCard />
        </div>
      </div>
    </section>
  );
}
