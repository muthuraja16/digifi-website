"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

type MobileMenuProps = {
  openLabel: string;
  closeLabel: string;
  menuLabel: string;
  children: ReactNode;
};

/**
 * Full-screen mobile menu on a native modal <dialog>: the browser traps focus,
 * makes the page behind it inert and closes it on Escape.
 */
export function MobileMenu({
  openLabel,
  closeLabel,
  menuLabel,
  children,
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  // Close after navigation (including back/forward).
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-label={openLabel}
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors duration-150 hover:bg-white/8 lg:hidden"
      >
        <Menu aria-hidden="true" strokeWidth={1.75} className="size-6" />
      </button>
      <dialog
        ref={dialogRef}
        aria-label={menuLabel}
        // Tapping a link closes the menu even when it points at the current page.
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a"))
            dialogRef.current?.close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-y-auto bg-navy-950 p-0 text-white opacity-0 transition-[opacity,display,overlay] transition-discrete duration-[250ms] ease-out backdrop:bg-navy-950 open:flex open:opacity-100 lg:hidden starting:open:opacity-0"
      >
        <button
          type="button"
          aria-label={closeLabel}
          onClick={() => dialogRef.current?.close()}
          className="absolute top-[calc((var(--header-h)-44px)/2)] right-4 inline-flex size-11 items-center justify-center rounded-full text-white transition-colors duration-150 hover:bg-white/8 md:right-8"
        >
          <X aria-hidden="true" strokeWidth={1.75} className="size-6" />
        </button>
        {children}
      </dialog>
    </>
  );
}
