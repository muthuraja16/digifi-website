"use client";

import { useRef } from "react";
import { duration, ease, gsap, motionOK, onceInView, useGSAP } from "./gsap";

type CountUpProps = {
  /** The real, final number. Rendered as-is on the server and under reduced motion. */
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

const format = (n: number, decimals: number) =>
  n.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Counts from 0 to `value` (1.4s, Geist Mono) the first time it scrolls into view.
 * Screen readers get the final value once; the ticking digits are hidden from them.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = `${prefix}${format(value, decimals)}${suffix}`;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        const counter = { n: 0 };
        const render = () => {
          el.textContent = `${prefix}${format(counter.n, decimals)}${suffix}`;
        };
        render();
        gsap.to(counter, {
          n: value,
          duration: duration.counter,
          ease: ease.out,
          onUpdate: render,
          scrollTrigger: onceInView(el),
        });
        // Under reduced motion (or on revert) show the final value.
        return () => {
          el.textContent = final;
        };
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [value, prefix, suffix, decimals] },
  );

  return (
    <span className={`font-mono tabular-nums ${className}`}>
      <span ref={ref} aria-hidden="true">
        {final}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
