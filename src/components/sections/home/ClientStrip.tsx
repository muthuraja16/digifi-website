import Image from "next/image";
import { clientLogos } from "@/content/caseStudies";
import { home } from "@/content/home";
import { industries } from "@/content/industries";
import { Marquee } from "./Marquee";

// Logos only where the client gave permission; every other client appears as a name.
const logoClients = new Set(clientLogos.map((l) => l.client));
const names = industries
  .flatMap((i) => i.clients)
  .filter((client) => !logoClients.has(client));

export function ClientStrip() {
  const { clientStrip } = home;
  return (
    <section className="border-b border-border bg-white py-10 md:py-12">
      <div className="container-site">
        <h2 className="text-center text-[15px] font-semibold text-navy-900">
          {clientStrip.heading}
        </h2>
        <div className="mt-6">
          <Marquee
            pauseLabel={clientStrip.pauseLabel}
            playLabel={clientStrip.playLabel}
          >
            {clientLogos.map((logo) => (
              <li
                key={logo.client}
                className="flex h-16 items-center rounded-inner border border-border bg-white px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.client}
                  width={logo.width}
                  height={logo.height}
                  sizes="160px"
                  className="h-12 w-auto max-w-40 object-contain"
                />
              </li>
            ))}
            {names.map((name) => (
              <li
                key={name}
                translate="no"
                className="text-lg font-semibold whitespace-nowrap text-body"
              >
                {name}
              </li>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
