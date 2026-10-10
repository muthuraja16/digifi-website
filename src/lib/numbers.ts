// Indian-grouped number formatting for Geist Mono figures. In a monospace font the comma and
// decimal point take a full digit width ("1 , 942"); wrapping them in .num-sep tightens them.

const formatters = new Map<number, Intl.NumberFormat>();

function formatter(decimals: number) {
  let f = formatters.get(decimals);
  if (!f) {
    f = new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    formatters.set(decimals, f);
  }
  return f;
}

export type NumberPart = { text: string; separator: boolean };

export function numberParts(value: number, decimals = 0): NumberPart[] {
  return formatter(decimals)
    .formatToParts(value)
    .map((p) => ({
      text: p.value,
      separator: p.type === "group" || p.type === "decimal",
    }));
}

/** Plain string, e.g. for aria-labels: "1,942", "7.90". */
export function formatNumber(value: number, decimals = 0) {
  return formatter(decimals).format(value);
}

/** HTML for CountUp's per-frame updates (digits and separators only, so safe to inject). */
export function numberHtml(value: number, decimals = 0) {
  return numberParts(value, decimals)
    .map((p) =>
      p.separator ? `<span class="num-sep">${p.text}</span>` : p.text,
    )
    .join("");
}
