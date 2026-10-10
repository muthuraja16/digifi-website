import { numberParts } from "@/lib/numbers";

/** A formatted figure with tightened separators (see lib/numbers.ts). Put it inside a mono style. */
export function NumberText({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <>
      {prefix}
      {numberParts(value, decimals).map((part, i) =>
        part.separator ? (
          <span key={i} className="num-sep">
            {part.text}
          </span>
        ) : (
          part.text
        ),
      )}
      {suffix}
    </>
  );
}
