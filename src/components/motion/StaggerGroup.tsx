"use client";

import { type ComponentProps, useRef } from "react";
import { duration, ease, gsap, motionOK, onceInView, useGSAP } from "./gsap";

/**
 * Reveals its direct children one after another (80ms apart) when the group scrolls into view.
 * Give it the grid classes so it *is* the grid, e.g. <StaggerGroup className="grid-site">.
 * Children must not run their own Motion transform on the same element (BentoCard is safe:
 * GSAP moves the grid cell, Motion lifts the card inside it).
 */
export function StaggerGroup(props: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        gsap.from(el.children, {
          opacity: 0,
          y: 24,
          duration: duration.reveal,
          stagger: duration.stagger,
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
