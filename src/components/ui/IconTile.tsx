import { Icon } from "./Icon";

/** Lucide icon in a 40px rounded tile: blue-50 on light, navy-800 on dark. */
export function IconTile({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-inner bg-blue-50 text-blue-600 on-dark:bg-navy-800 on-dark:text-sky-300 ${className}`}
    >
      <Icon name={name} className="size-5" />
    </span>
  );
}
