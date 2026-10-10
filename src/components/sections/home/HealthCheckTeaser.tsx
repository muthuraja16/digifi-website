import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RisingDots } from "@/components/ui/RisingDots";
import { home } from "@/content/home";

export function HealthCheckTeaser() {
  const { healthCheckTeaser: t } = home;
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site">
        <Reveal className="flex flex-col gap-8 rounded-card border border-blue-600/20 bg-blue-50 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex items-start gap-6">
            <RisingDots variant="steps" className="mt-2 hidden sm:block" />
            <div>
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h2 className="mt-3 type-h2 text-navy-900">{t.heading}</h2>
              <p className="mt-3 type-body-lg text-body">{t.body}</p>
            </div>
          </div>
          <Button
            href={t.href}
            size="lg"
            arrow
            className="shrink-0 self-start md:self-auto"
          >
            {t.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
