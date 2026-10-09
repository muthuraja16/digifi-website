import { TrendingDown, TrendingUp } from "lucide-react";
import type { ComponentProps } from "react";

const metricSizes = { lg: "metric", sm: "metric-sm" } as const;

/** Any number on the site (metrics, prices, steps) in Geist Mono with tabular figures. */
export function MetricNumber({
  size = "lg",
  className = "",
  ...props
}: ComponentProps<"span"> & { size?: keyof typeof metricSizes }) {
  return (
    <span
      className={`${metricSizes[size]} text-navy-900 on-dark:text-white ${className}`}
      {...props}
    />
  );
}

/**
 * "This number improved" badge, e.g. "+38%". With charts, the only place lime appears:
 * lime-50 with navy text on light (16.7:1), lime-400 with navy text on dark (13.9:1).
 * `trend` sets the arrow; a falling cost per lead is still an improvement.
 */
export function MetricBadge({
  value,
  trend = "up",
  label,
  className = "",
}: {
  value: string;
  trend?: "up" | "down";
  /** Screen-reader context, e.g. "compared with last quarter". */
  label?: string;
  className?: string;
}) {
  const Arrow = trend === "up" ? TrendingUp : TrendingDown;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-lime-50 px-2.5 py-0.5 metric-sm text-navy-900 on-dark:bg-lime-400 ${className}`}
    >
      <Arrow aria-hidden="true" strokeWidth={1.75} className="size-4" />
      {value}
      {label ? <span className="sr-only"> {label}</span> : null}
    </span>
  );
}
