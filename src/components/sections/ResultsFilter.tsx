"use client";

import { type ReactNode, useState } from "react";
import { ChipButton } from "@/components/ui/Chip";

type FilterOption = { value: string; label: string };
type FilterItem = { id: string; tags: string[]; node: ReactNode };

/**
 * Service filter for the results grid. Cards are server-rendered and only shown or hidden here.
 * Shows `empty` when a filter has no matches.
 */
export function ResultsFilter({
  label,
  countLabel,
  options,
  items,
  empty,
}: {
  label: string;
  /** Announced after filtering, e.g. "case studies shown". */
  countLabel: string;
  options: FilterOption[];
  items: FilterItem[];
  empty: ReactNode;
}) {
  const [active, setActive] = useState(options[0]?.value);
  const isAll = active === options[0]?.value;
  const visible = items.filter((item) => isAll || item.tags.includes(active));

  return (
    <>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((option) => (
          <ChipButton
            key={option.value}
            aria-pressed={active === option.value}
            onClick={() => setActive(option.value)}
          >
            {option.label}
          </ChipButton>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {countLabel}
      </p>
      {visible.length ? (
        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {visible.map((item) => (
            <li key={item.id}>{item.node}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-10">{empty}</div>
      )}
    </>
  );
}
