"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode, useRef, useState } from "react";
import {
  duration,
  ease,
  gsap,
  motionOK,
  onceInView,
  ScrollTrigger,
  useGSAP,
} from "@/components/motion/gsap";
import { IconTile } from "@/components/ui/IconTile";
import { RisingDots } from "@/components/ui/RisingDots";

// Pin only where all four steps fit on screen; everywhere else, a stepper with fade-ins.
const pinnable = "(min-width: 768px) and (min-height: 800px)";
const notPinnable = `(max-width: 767px) and ${motionOK}, (max-height: 799px) and ${motionOK}`;

export type JourneyStep = {
  step: string;
  body: string;
  service: string;
  href: string;
  icon: string;
};

/**
 * The 4-step journey. Desktop (768px+ wide, 800px+ tall so all four steps fit): the section pins
 * and steps advance as you scroll, with a rising-dots progress indicator. Phones and short
 * screens: a plain vertical stepper whose steps fade in.
 * Reduced motion or no JavaScript: every step fully visible, nothing pinned.
 */
export function JourneySteps({
  heading,
  steps,
  stepLabel,
  linkLabel,
}: {
  heading: ReactNode;
  steps: JourneyStep[];
  stepLabel: string;
  linkLabel: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLOListElement>(null);
  // null = all steps shown as active (phones, reduced motion, before hydration).
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const list = stepsRef.current;
      if (!section || !list) return;
      const mm = gsap.matchMedia();

      mm.add(`${pinnable} and ${motionOK}`, () => {
        setActive(0);
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 1.6}`,
          pin: true,
          onUpdate: (self) =>
            setActive(
              Math.min(
                steps.length - 1,
                Math.floor(self.progress * steps.length),
              ),
            ),
        });
        return () => setActive(null);
      });

      mm.add(`${notPinnable}`, () => {
        gsap.utils.toArray<HTMLElement>(list.children).forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 24,
            duration: duration.reveal,
            ease: ease.out,
            scrollTrigger: onceInView(item),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const current = active ?? steps.length - 1;

  return (
    <div
      ref={sectionRef}
      className="flex items-center bg-white py-16 [@media(min-width:768px)_and_(min-height:800px)]:min-h-dvh [@media(min-width:768px)_and_(min-height:800px)]:pt-[calc(var(--header-h)+32px)] [@media(min-width:768px)_and_(min-height:800px)]:pb-12"
    >
      <div className="container-site grid-site w-full items-center gap-y-10">
        <div className="col-span-12 md:col-span-5">
          {heading}
          <div
            className="mt-8 hidden items-center gap-4 md:flex"
            aria-hidden="true"
          >
            <RisingDots
              variant="steps"
              count={steps.length}
              active={current + 1}
            />
            <span className="metric-sm text-muted">
              {stepLabel} {current + 1}/{steps.length}
            </span>
          </div>
        </div>

        <ol ref={stepsRef} className="col-span-12 grid gap-4 md:col-span-7">
          {steps.map((step, i) => {
            const isActive = active === null || active === i;
            return (
              <li
                key={step.step}
                data-active={isActive || undefined}
                className="flex gap-4 rounded-card border border-border bg-white p-5 opacity-55 transition-[opacity,translate,border-color,box-shadow] duration-[250ms] ease-out data-active:translate-x-0 data-active:border-blue-600/30 data-active:opacity-100 data-active:shadow-card md:translate-x-2"
              >
                <span className="w-8 shrink-0 pt-2 metric-sm text-blue-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconTile name={step.icon} className="mt-0.5" />
                <div className="min-w-0">
                  <h3 className="type-h3 text-navy-900">
                    <Link
                      href={step.href}
                      aria-label={`${step.step}: ${linkLabel} ${step.service}`}
                      className="inline-flex min-h-11 items-center gap-2 hover:text-blue-600"
                    >
                      {step.step}
                      <ArrowRight
                        aria-hidden="true"
                        strokeWidth={1.75}
                        className="size-5 text-blue-600"
                      />
                    </Link>
                  </h3>
                  <p className="mt-1">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
