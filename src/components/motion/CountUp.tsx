"use client";

import { useRef } from "react";
import { NumberText } from "@/components/ui/NumberText";
import { formatNumber, numberHtml } from "@/lib/numbers";
import { duration, ease, gsap, motionOK, onceVisible, useGSAP } from "./gsap";

type CountUpProps = {
  /** The real, final number. Rendered as-is on the server and under reduced motion. */
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

// Prefix/suffix are short content strings ("₹", "%"); escape them before injecting.
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

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
  const final = `${prefix}${formatNumber(value, decimals)}${suffix}`;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        const counter = { n: 0 };
        const finalHtml = el.innerHTML;
        const render = () => {
          el.innerHTML = `${escape(prefix)}${numberHtml(counter.n, decimals)}${escape(suffix)}`;
        };
        render();
        gsap.to(counter, {
          n: value,
          duration: duration.counter,
          ease: ease.out,
          onUpdate: render,
          scrollTrigger: onceVisible(el),
        });
        // Under reduced motion (or on revert) show the final value.
        return () => {
          el.innerHTML = finalHtml;
        };
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [value, prefix, suffix, decimals] },
  );

  return (
    <span className={`font-mono tabular-nums ${className}`}>
      <span ref={ref} aria-hidden="true">
        <NumberText
          value={value}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
        />
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
