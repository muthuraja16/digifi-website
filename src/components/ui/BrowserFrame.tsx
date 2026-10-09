import type { ReactNode } from "react";

/** Minimal browser window for website portfolio screenshots (pass a next/image with `fill`). */
export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  /** Shown in the address bar, e.g. "visionplywoods.com". */
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-card border border-border bg-white shadow-card on-dark:border-white/8 on-dark:bg-navy-800 on-dark:shadow-none ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3 on-dark:border-white/8">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-border on-dark:bg-white/15" />
          <span className="size-2.5 rounded-full bg-border on-dark:bg-white/15" />
          <span className="size-2.5 rounded-full bg-border on-dark:bg-white/15" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-surface px-3 py-1 text-center text-xs text-muted on-dark:bg-navy-900 on-dark:text-on-dark">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-surface on-dark:bg-navy-900">
        {children}
      </div>
    </figure>
  );
}
