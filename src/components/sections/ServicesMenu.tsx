"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";

/** Desktop "Services" disclosure. The panel content is server-rendered and passed in. */
export function ServicesMenu({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  // Remember which page the menu was opened on, so navigating closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpenOn(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          setOpenOn(null);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpenOn(open ? null : pathname)}
        className="group inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-[15px] font-medium text-white/85 transition-colors duration-150 hover:bg-white/8 hover:text-white aria-expanded:text-white"
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-4 transition-transform duration-150 group-aria-expanded:rotate-180"
        />
      </button>
      <div
        id={panelId}
        data-open={open || undefined}
        className="invisible absolute top-full left-1/2 mt-3 w-[min(640px,calc(100vw-32px))] -translate-x-1/2 translate-y-1 opacity-0 transition-[opacity,translate,visibility] duration-150 ease-out data-open:visible data-open:translate-y-0 data-open:opacity-100"
      >
        {children}
      </div>
    </div>
  );
}
