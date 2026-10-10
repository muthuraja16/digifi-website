"use client";

import { type ComponentProps, useRef } from "react";
import { duration, ease, gsap, motionOK, onceInView, useGSAP } from "./gsap";

/**
 * Fades and rises its content 24px when it scrolls into view, once.
 * Server-rendered visible, so it works without JavaScript and under reduced motion.
 * Never on the hero headline (LCP). Above the fold, set `hiddenUntilReady` so the content starts
 * hidden by CSS (motion allowed only; <noscript> in the layout shows it) instead of flashing.
 */
export function Reveal({
  delay = 0,
  hiddenUntilReady = false,
  ...props
}: ComponentProps<"div"> & { delay?: number; hiddenUntilReady?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: duration.reveal,
            delay,
            ease: ease.out,
            scrollTrigger: onceInView(el),
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      data-reveal-hidden={hiddenUntilReady || undefined}
      {...props}
    />
  );
}
