"use client";

import {
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";

export type TabItem = { id: string; label: string; content: ReactNode };

/**
 * WAI-ARIA tabs with automatic activation: arrow keys move between tabs, Home/End jump to the
 * ends; only the selected tab is in the Tab order.
 */
export function Tabs({
  items,
  label,
  className = "",
}: {
  items: TabItem[];
  label: string;
  className?: string;
}) {
  const [selected, setSelected] = useState(items[0]?.id);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const baseId = useId();

  const select = (index: number) => {
    const item = items[(index + items.length) % items.length];
    setSelected(item.id);
    tabRefs.current.get(item.id)?.focus();
  };

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key]);
    }
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        className="inline-flex flex-wrap gap-1 rounded-full bg-surface p-1 on-dark:bg-white/6"
      >
        {items.map((item, index) => {
          const isSelected = item.id === selected;
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) tabRefs.current.set(item.id, el);
                else tabRefs.current.delete(item.id);
              }}
              id={`${baseId}-${item.id}-tab`}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={`${baseId}-${item.id}-panel`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(item.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className="min-h-11 rounded-full px-4 text-sm font-semibold text-body transition-colors duration-150 hover:text-navy-900 aria-selected:bg-white aria-selected:text-navy-900 aria-selected:shadow-card on-dark:text-on-dark on-dark:hover:text-white on-dark:aria-selected:bg-navy-800 on-dark:aria-selected:text-white on-dark:aria-selected:shadow-none"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`${baseId}-${item.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-${item.id}-tab`}
          hidden={item.id !== selected}
          tabIndex={0}
          className="mt-6"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
