import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { site, whatsappHref } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeaderShell } from "./HeaderShell";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";
import { ServicesMenu } from "./ServicesMenu";

const { nav, ctas } = site;

const desktopLink =
  "inline-flex min-h-11 items-center rounded-full px-3 text-[15px] font-medium text-white/85 transition-colors duration-150 hover:bg-white/8 hover:text-white aria-[current=page]:text-white";

const mobileLink =
  "flex min-h-14 items-center text-[22px] font-bold tracking-[-0.01em] text-white aria-[current=page]:text-sky-300";

function Wordmark({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0 rounded-inner">
      <Image
        src="/brand/digifi-wordmark-reversed.svg"
        alt={site.name}
        width={68}
        height={44}
        priority={priority}
        className="h-11 w-auto"
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="container-site flex h-(--header-h) items-center justify-between gap-4">
        <Wordmark priority />

        <nav aria-label={nav.labels.main} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <ServicesMenu label={nav.services.label}>
                <ul className="grid grid-cols-2 gap-1 rounded-card border border-white/8 bg-navy-800 p-2 shadow-hover">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <NavLink
                        href={service.href}
                        className="flex gap-3 rounded-inner p-3 transition-colors duration-150 hover:bg-white/6 aria-[current=page]:bg-white/6"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-inner bg-navy-900 text-sky-300">
                          <Icon name={service.icon} className="size-5" />
                        </span>
                        <span>
                          <span className="block font-semibold text-white">
                            {service.name}
                          </span>
                          <span className="mt-0.5 block text-sm leading-snug text-on-dark">
                            {service.outcome}
                          </span>
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </ServicesMenu>
            </li>
            {nav.main.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} className={desktopLink}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button variant="primary" href={ctas.primaryHref}>
              {ctas.primaryShort}
            </Button>
          </div>
          <MobileMenu
            openLabel={nav.labels.openMenu}
            closeLabel={nav.labels.closeMenu}
            menuLabel={nav.labels.mobileMenu}
          >
            <div className="container-site flex h-(--header-h) shrink-0 items-center">
              <Wordmark />
            </div>
            <nav
              aria-label={nav.labels.main}
              className="container-site flex-1 py-6"
            >
              <p className="eyebrow text-on-dark">{nav.services.label}</p>
              <ul className="mt-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <NavLink href={service.href} className={mobileLink}>
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 border-t border-white/8 pt-4">
                {nav.main.map((link) => (
                  <li key={link.href}>
                    <NavLink href={link.href} className={mobileLink}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container-site grid shrink-0 gap-3 pt-4 pb-[max(24px,env(safe-area-inset-bottom))]">
              <Button
                variant="primary"
                href={ctas.primaryHref}
                className="w-full"
              >
                {ctas.primary}
              </Button>
              <Button
                variant="whatsapp"
                href={whatsappHref()}
                className="w-full"
              >
                {ctas.whatsapp}
              </Button>
            </div>
          </MobileMenu>
        </div>
      </div>
    </HeaderShell>
  );
}
