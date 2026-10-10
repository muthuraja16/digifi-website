"use client";

import { type ComponentProps, useRef } from "react";
import { duration, ease, gsap, motionOK, onceVisible, useGSAP } from "./gsap";

/**
 * Draws every SVG stroke marked `data-draw` inside it (chart lines, and bars drawn as thick
 * stroked lines) when it scrolls into view, once, over 1.2s. Only stroke-dashoffset animates.
 * Server-rendered fully drawn, so charts are complete without JavaScript or with reduced motion.
 */
export function DrawLine(props: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const strokes = gsap.utils.toArray<SVGGeometryElement>(
        "[data-draw]",
        root,
      );
      if (!strokes.length) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        strokes.forEach((el) => {
          const length = el.getTotalLength();
          gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
        });
        gsap.to(strokes, {
          strokeDashoffset: 0,
          duration: duration.chart,
          stagger: duration.stagger,
          ease: ease.out,
          scrollTrigger: onceVisible(root),
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return <div ref={ref} {...props} />;
}
