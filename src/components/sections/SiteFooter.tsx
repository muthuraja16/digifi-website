import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { site, whatsappHref } from "@/content/site";
import { isTbd } from "@/lib/tbd";

const { footer, nav, contact } = site;

const heading = "text-[15px] font-semibold text-white";
const link =
  "inline-flex min-h-11 items-center text-on-dark transition-colors duration-150 hover:text-white md:min-h-9";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-on-dark">
      <div className="container-site grid-site gap-y-10 py-16 md:py-20">
        <div className="col-span-12 lg:col-span-4">
          <Link href="/" className="inline-flex rounded-inner">
            <Image
              src="/brand/digifi-wordmark-reversed.svg"
              alt={site.name}
              width={98}
              height={64}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-sm">{footer.blurb}</p>
          <p className="mt-4 text-white">{site.location.display}</p>
        </div>

        <nav
          aria-label={nav.labels.footer}
          className="col-span-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-8"
        >
          <div>
            <h2 className={heading}>{footer.servicesHeading}</h2>
            <ul className="mt-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className={link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>{footer.companyHeading}</h2>
            <ul className="mt-3">
              {nav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>{footer.contactHeading}</h2>
            <ul className="mt-3">
              <li>
                <a href={contact.phoneHref} className={`${link} metric-sm`}>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  {site.ctas.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={heading}>{footer.socialHeading}</h2>
            <ul className="mt-3" aria-label={nav.labels.social}>
              {site.social.map((social) => (
                <li key={social.name}>
                  {isTbd(social.href) ? (
                    // Visible placeholder until DIGIFI confirms the URL.
                    <span className="inline-flex min-h-11 items-center md:min-h-9">
                      {social.href}
                    </span>
                  ) : (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link}
                    >
                      {social.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/8">
        <div className="container-site flex flex-col gap-2 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {process.env.BUILD_YEAR} {site.name}. {footer.copyright}
          </p>
          <ul className="flex gap-6">
            {nav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
