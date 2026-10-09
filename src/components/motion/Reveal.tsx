"use client";

import { type ComponentProps, useRef } from "react";
import { duration, ease, gsap, motionOK, onceInView, useGSAP } from "./gsap";

/**
 * Fades and rises its content 24px when it scrolls into view, once.
 * Server-rendered visible, so it works without JavaScript and under reduced motion.
 * Use below the fold only: never on the hero headline (LCP).
 */
export function Reveal({
  delay = 0,
  ...props
}: ComponentProps<"div"> & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: duration.reveal,
          delay,
          ease: ease.out,
          scrollTrigger: onceInView(el),
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return <div ref={ref} {...props} />;
}
