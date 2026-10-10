import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RisingDots } from "@/components/ui/RisingDots";
import { site, whatsappHref } from "@/content/site";

/** Closing dark band with both CTAs. Used at the end of every marketing page. */
export function FinalCtaBand({
  eyebrow,
  heading,
  body,
  whatsappMessage,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="on-dark bg-navy-900 section-y">
      <div className="container-site">
        <RisingDots variant="divider" />
        {eyebrow ? <Eyebrow className="mt-8">{eyebrow}</Eyebrow> : null}
        <h2 className="mt-3 max-w-[20ch] type-h2 text-white">{heading}</h2>
        <p className="mt-5 max-w-2xl type-body-lg text-on-dark">{body}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={site.ctas.primaryHref} size="lg" arrow>
            {site.ctas.primary}
          </Button>
          <Button
            variant="whatsapp"
            href={whatsappHref(whatsappMessage)}
            size="lg"
          >
            {site.ctas.whatsapp}
          </Button>
        </div>
        <p className="mt-6 text-sm text-on-dark">{site.ctas.reassurance}</p>
      </div>
    </section>
  );
}
