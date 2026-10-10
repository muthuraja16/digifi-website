import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { getCaseStudy } from "@/content/caseStudies";
import { home } from "@/content/home";
import { getService } from "@/content/services";
import { NumberText } from "@/components/ui/NumberText";
import { formatNumber } from "@/lib/numbers";

const card = home.hero.reportCard;

// Chart geometry (SVG units). Bars are thick stroked lines so DrawLine can "grow" them.
const CHART = { width: 300, height: 128, barWidth: 56, minBar: 14 };

function chartBars() {
  const studies = card.chart.caseStudies.map((slug) => {
    const study = getCaseStudy(slug);
    const enquiries = study.results.find((r) => r.label === "Enquiries");
    if (!enquiries) throw new Error(`${slug} has no "Enquiries" result`);
    return { client: study.client, value: enquiries.value };
  });
  const max = Math.max(...studies.map((s) => s.value));
  const step = CHART.width / studies.length;
  return studies.map((s, i) => ({
    ...s,
    x: step * i + step / 2,
    height: CHART.minBar + (s.value / max) * (CHART.height - CHART.minBar - 4),
  }));
}

/**
 * Hero "growth report": real results from caseStudies.ts. Rises in after load
 * (hidden until ready, so it never flashes), counters tick up and bars grow.
 * The H1 beside it is never animated: it is the LCP element.
 */
export function HeroReportCard() {
  const study = getCaseStudy(card.caseStudy);
  const service = getService(study.services[0]);
  const bars = chartBars();
  const chartDescription = `${card.chart.label}: ${bars
    .map((b) => `${b.client} ${formatNumber(b.value)}`)
    .join(", ")}`;

  return (
    <Reveal
      hiddenUntilReady
      className="rounded-card border border-white/8 bg-navy-800 p-6 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-lg font-bold text-white">{card.title}</p>
        <Badge>{card.realLabel}</Badge>
      </div>
      <p className="mt-1 text-sm text-on-dark">
        {study.client} · {service.name} · {study.period}
      </p>

      <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-white/8 py-5">
        {study.results.map((result, i) => (
          <div key={result.label} className="min-w-0">
            <dt className="text-[13px] leading-snug text-on-dark">
              {result.label}
            </dt>
            <dd
              className={`mt-2 metric-md ${i === 0 ? "text-lime-400" : "text-white"}`}
            >
              <CountUp
                value={result.value}
                prefix={result.prefix}
                decimals={result.decimals}
              />
            </dd>
            {result.context ? (
              <dd className="mt-1 text-xs text-on-dark">{result.context}</dd>
            ) : null}
          </div>
        ))}
      </dl>

      <figure className="mt-6">
        <figcaption className="text-sm font-semibold text-white">
          {card.chart.label}
        </figcaption>
        <DrawLine className="mt-4">
          <svg
            viewBox={`0 0 ${CHART.width} ${CHART.height}`}
            preserveAspectRatio="none"
            className="h-28 w-full"
            role="img"
            aria-label={chartDescription}
          >
            {bars.map((bar) => (
              <line
                key={bar.client}
                data-draw
                x1={bar.x}
                x2={bar.x}
                y1={CHART.height}
                y2={CHART.height - bar.height}
                strokeWidth={CHART.barWidth}
                className="stroke-lime-400"
              />
            ))}
          </svg>
        </DrawLine>
        <ul className="mt-3 grid grid-cols-3 text-center" aria-hidden="true">
          {bars.map((bar) => (
            <li key={bar.client} className="min-w-0 px-1">
              <span className="block metric-sm text-white">
                <NumberText value={bar.value} />
              </span>
              <span className="block truncate text-xs text-on-dark">
                {bar.client}
              </span>
            </li>
          ))}
        </ul>
      </figure>

      <p className="mt-5 text-xs leading-relaxed text-on-dark">
        {card.sourceNote}
      </p>
    </Reveal>
  );
}
