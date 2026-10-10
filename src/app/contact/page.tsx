import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { FormTrustLine } from "@/components/sections/TrustElements";
import { Card } from "@/components/ui/Card";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { home } from "@/content/home";
import { pages, seo } from "@/content/pages";
import { site, whatsappHref } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.contact);

const copy = pages.contact;
const { contact } = site;

function Channel({
  icon,
  title,
  body,
  action,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  action: ReactNode;
}) {
  return (
    <Card className="flex flex-col">
      <span className="inline-flex size-10 items-center justify-center rounded-inner bg-blue-50 text-blue-600">
        {icon}
      </span>
      <h2 className="mt-5 type-h3 text-navy-900">{title}</h2>
      <p className="mt-1 text-sm text-muted">{body}</p>
      <div className="mt-auto pt-5">{action}</div>
    </Card>
  );
}

const actionLink =
  "inline-flex min-h-11 items-center font-semibold text-blue-600 hover:underline";

// The contact form (Stage 9) goes below the channels, with <FormTrustLine /> under it.
export default function ContactPage() {
  return (
    <>
      <PageHero {...copy.hero} whatsappMessage={site.whatsapp.defaultMessage} />
      <section className="bg-surface section-y">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Channel
              icon={<WhatsAppIcon className="size-5" />}
              title={copy.channels.whatsapp.title}
              body={copy.channels.whatsapp.body}
              action={
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${actionLink} metric-sm`}
                >
                  {contact.whatsappDisplay}
                </a>
              }
            />
            <Channel
              icon={
                <Phone
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-5"
                />
              }
              title={copy.channels.phone.title}
              body={copy.channels.phone.body}
              action={
                <a
                  href={contact.phoneHref}
                  className={`${actionLink} metric-sm`}
                >
                  {contact.phoneDisplay}
                </a>
              }
            />
            <Channel
              icon={
                <Mail
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-5"
                />
              }
              title={copy.channels.email.title}
              body={copy.channels.email.body}
              action={
                <a href={`mailto:${contact.email}`} className={actionLink}>
                  {contact.email}
                </a>
              }
            />
            <Channel
              icon={
                <MapPin
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-5"
                />
              }
              title={copy.channels.location.title}
              body={copy.channels.location.body}
              action={
                <address className="font-semibold text-navy-900 not-italic">
                  {site.location.display}
                </address>
              }
            />
          </div>
          <p className="mt-8 max-w-2xl text-body">{copy.officeNote}</p>
          <FormTrustLine className="mt-4" />
        </div>
      </section>
      <FinalCtaBand {...home.finalCta} />
    </>
  );
}
