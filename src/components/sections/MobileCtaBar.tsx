import { site, whatsappHref } from "@/content/site";
import { Button } from "@/components/ui/Button";

/** Sticky two-button bar on phones (below 768px). Hidden while the mobile menu dialog is open. */
export function MobileCtaBar() {
  return (
    <div className="on-dark fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-white/8 bg-navy-950 px-4 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] md:hidden [html:has(dialog[open])_&]:hidden">
      <Button variant="primary" href={site.ctas.primaryHref} size="sm">
        {site.ctas.primaryMobile}
      </Button>
      <Button variant="whatsapp" href={whatsappHref()} size="sm">
        {site.ctas.whatsappShort}
      </Button>
    </div>
  );
}
