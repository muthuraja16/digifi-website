/**
 * The logo motif: three rounded squares rising left to right, in equal steps.
 * - bullet: list marker
 * - steps: progress indicator; `count` squares (default 3), the first `active` filled
 * - divider: wider separator between blocks
 * Decorative only (aria-hidden); always pair with real text.
 */
const geometry = {
  bullet: { size: 6, gap: 2, rise: 4, radius: 1.5 },
  steps: { size: 12, gap: 4, rise: 8, radius: 3 },
  divider: { size: 10, gap: 10, rise: 5, radius: 2.5 },
} as const;

export function RisingDots({
  variant = "bullet",
  count = 3,
  active = count,
  className = "",
}: {
  variant?: keyof typeof geometry;
  count?: number;
  active?: number;
  className?: string;
}) {
  const { size, gap, rise, radius } = geometry[variant];
  const width = 2 + count * size + (count - 1) * gap;
  const height = 2 + size + (count - 1) * rise;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 text-blue-600 on-dark:text-sky-300 ${className}`}
    >
      {Array.from({ length: count }, (_, i) => {
        const filled = i < active;
        return (
          <rect
            key={i}
            x={1 + i * (size + gap)}
            y={height - 1 - size - i * rise}
            width={size}
            height={size}
            rx={radius}
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={filled ? 0 : 1.5}
            strokeOpacity={0.5}
          />
        );
      })}
    </svg>
  );
}
