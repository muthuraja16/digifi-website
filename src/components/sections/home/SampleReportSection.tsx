import { DrawLine } from "@/components/motion/DrawLine";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home } from "@/content/home";

// Illustrative shapes only: no numbers, because this shows the report *format*, not real data.
const sourceWidths = [82, 64, 46, 30]; // % of panel width, one per source
const callsAndChats = [
  [30, 44],
  [42, 58],
  [52, 74],
]; // [calls, chats] heights per month, rising
const costTrend = "8,20 70,34 132,30 194,52 256,64 312,74"; // falls left to right = cheaper leads

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-inner border border-white/8 bg-navy-900 p-5">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function SampleReportSection() {
  const { sampleReport: r } = home;
  return (
    <section className="on-dark bg-navy-900 section-y">
      <div className="container-site grid-site items-center gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeading
            eyebrow={r.eyebrow}
            title={r.heading}
            intro={r.intro}
          />
          <ul className="mt-8 grid gap-3">
            {r.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-white">
                <RisingDots className="mt-1.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="col-span-12 lg:col-span-7">
          <div className="rounded-card border border-white/8 bg-navy-800 p-5 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge>{r.sampleLabel}</Badge>
              <p className="text-xs text-on-dark">{r.illustrativeNote}</p>
            </div>
            <DrawLine className="mt-5 grid gap-4 sm:grid-cols-2">
              <Panel title={r.panels.leadsBySource}>
                <ul className="grid gap-3">
                  {r.sources.map((source, i) => (
                    <li key={source}>
                      <span className="text-xs text-on-dark">{source}</span>
                      <svg
                        viewBox="0 0 100 8"
                        preserveAspectRatio="none"
                        className="mt-1 h-2 w-full"
                        aria-hidden="true"
                      >
                        <line
                          data-draw
                          x1={0}
                          x2={sourceWidths[i]}
                          y1={4}
                          y2={4}
                          strokeWidth={8}
                          className="stroke-lime-400"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              </Panel>

              <Panel title={r.panels.costPerLead}>
                <svg
                  viewBox="0 0 320 84"
                  className="h-24 w-full"
                  aria-hidden="true"
                >
                  <polyline
                    data-draw
                    points={costTrend}
                    fill="none"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-sky-300"
                  />
                </svg>
              </Panel>

              <Panel title={r.panels.callsAndChats}>
                <svg
                  viewBox="0 0 300 84"
                  className="h-24 w-full"
                  aria-hidden="true"
                >
                  {callsAndChats.map(([calls, chats], month) => (
                    <g key={month}>
                      <line
                        data-draw
                        x1={40 + month * 100}
                        x2={40 + month * 100}
                        y1={84}
                        y2={84 - calls}
                        strokeWidth={22}
                        className="stroke-sky-300"
                      />
                      <line
                        data-draw
                        x1={66 + month * 100}
                        x2={66 + month * 100}
                        y1={84}
                        y2={84 - chats}
                        strokeWidth={22}
                        className="stroke-lime-400"
                      />
                    </g>
                  ))}
                </svg>
                <p className="mt-3 flex gap-4 text-xs text-on-dark">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-xs bg-sky-300"
                      aria-hidden="true"
                    />
                    {r.channels[0]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-xs bg-lime-400"
                      aria-hidden="true"
                    />
                    {r.channels[1]}
                  </span>
                </p>
              </Panel>

              <Panel title={r.panels.ranking}>
                <div className="flex h-24 items-end">
                  <RisingDots
                    variant="steps"
                    count={5}
                    active={5}
                    className="h-20 w-auto"
                  />
                </div>
              </Panel>
            </DrawLine>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
