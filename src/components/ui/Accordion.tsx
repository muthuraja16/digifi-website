"use client";

import { ChevronDown } from "lucide-react";
import { m } from "motion/react";
import { type ReactNode, useId, useState } from "react";
import { accordion } from "@/components/motion/variants";

export type AccordionItem = { id: string; title: string; content: ReactNode };

/**
 * FAQ accordion. Answers stay in the HTML when collapsed (`hidden`), so they're crawlable and
 * findable; opening fades the answer in with Motion. Several items can be open at once.
 */
export function Accordion({
  items,
  headingLevel: Heading = "h3",
  className = "",
}: {
  items: AccordionItem[];
  headingLevel?: "h2" | "h3" | "h4";
  className?: string;
}) {
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set());
  const baseId = useId();

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div
      className={`divide-y divide-border border-y border-border on-dark:divide-white/8 on-dark:border-white/8 ${className}`}
    >
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <Heading className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="group flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left text-lg font-semibold text-navy-900 transition-colors duration-150 hover:text-blue-600 on-dark:text-white on-dark:hover:text-sky-300"
              >
                {item.title}
                <ChevronDown
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-5 shrink-0 transition-transform duration-[250ms] ease-out group-aria-expanded:rotate-180"
                />
              </button>
            </Heading>
            <m.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              variants={accordion}
              initial={false}
              animate={isOpen ? "open" : "collapsed"}
              className="max-w-3xl pb-6 text-body on-dark:text-on-dark"
            >
              {item.content}
            </m.div>
          </div>
        );
      })}
    </div>
  );
}
