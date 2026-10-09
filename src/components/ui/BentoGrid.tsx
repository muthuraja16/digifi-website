import type { ComponentProps, ReactNode } from "react";
import { HoverLift } from "@/components/motion/HoverLift";
import { Card } from "./Card";

/** 12-column bento grid (see .grid-site). Children are <BentoCard>s. */
export function BentoGrid({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`grid-site ${className}`} {...props} />;
}

// Full static class strings so Tailwind can see them.
const spans = {
  sm: "col-span-12 md:col-span-6 lg:col-span-4",
  md: "col-span-12 md:col-span-6",
  lg: "col-span-12 lg:col-span-8",
  full: "col-span-12",
} as const;

const rowSpans = {
  1: "",
  2: "lg:row-span-2",
} as const;

type BentoCardProps = {
  span?: keyof typeof spans;
  rows?: keyof typeof rowSpans;
  className?: string;
  children: ReactNode;
};

/**
 * Grid cell + hover-lift card. The outer cell is the target for scroll reveals (GSAP);
 * the inner HoverLift owns the hover transform (Motion), so the two never animate the same element.
 */
export function BentoCard({
  span = "sm",
  rows = 1,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div className={`${spans[span]} ${rowSpans[rows]}`}>
      <HoverLift className="h-full">
        <Card className={className}>{children}</Card>
      </HoverLift>
    </div>
  );
}
