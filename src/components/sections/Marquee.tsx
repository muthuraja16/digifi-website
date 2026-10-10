"use client";

import { Pause, Play } from "lucide-react";
import { type ReactNode, useState } from "react";

/**
 * Slow horizontal loop (the only looping motion on the site). Pauses on hover, on keyboard
 * focus and with the button (WCAG 2.2.2). Under reduced motion it becomes a static,
 * wrapped list with no duplicate copy and no button.
 */
export function Marquee({
  pauseLabel,
  playLabel,
  children,
}: {
  pauseLabel: string;
  playLabel: string;
  /** <li> items. */
  children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  const list = "flex shrink-0 items-center gap-x-10 pr-10";

  return (
    <div className="flex items-center gap-4">
      <div className="group min-w-0 flex-1 overflow-hidden motion-reduce:overflow-visible">
        <div
          data-paused={paused || undefined}
          className="flex w-max animate-marquee group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] data-paused:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none"
        >
          <ul
            className={`${list} motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4 motion-reduce:pr-0`}
          >
            {children}
          </ul>
          <ul
            aria-hidden="true"
            inert
            className={`${list} motion-reduce:hidden`}
          >
            {children}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? playLabel : pauseLabel}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-navy-900 transition-colors duration-150 hover:border-navy-900/40 motion-reduce:hidden"
      >
        {paused ? (
          <Play aria-hidden="true" strokeWidth={1.75} className="size-4" />
        ) : (
          <Pause aria-hidden="true" strokeWidth={1.75} className="size-4" />
        )}
      </button>
    </div>
  );
}
