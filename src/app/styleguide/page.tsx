import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip, ChipButton } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  Checkbox,
  FormField,
  Input,
  RadioGroup,
  Select,
  Textarea,
} from "@/components/ui/Form";
import { IconTile } from "@/components/ui/IconTile";
import { MetricBadge, MetricNumber } from "@/components/ui/Metric";
import { RisingDots } from "@/components/ui/RisingDots";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { faqs } from "@/content/faqs";
import { industries } from "@/content/industries";
import { pages } from "@/content/pages";
import { quizQuestions } from "@/content/quiz";
import { services } from "@/content/services";
import { whatsappHref } from "@/content/site";

// Internal reference page (noindex; excluded from the sitemap in Stage 13). Demo labels and
// numbers here are illustrative, never shown on public pages; real copy comes from src/content.

export const metadata: Metadata = {
  title: "Styleguide | DIGIFI",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "navy-950", hex: "#060A24", swatch: "bg-navy-950" },
  { name: "navy-900", hex: "#0A1340", swatch: "bg-navy-900" },
  { name: "navy-800", hex: "#131E57", swatch: "bg-navy-800" },
  { name: "blue-600", hex: "#0064F8", swatch: "bg-blue-600" },
  { name: "blue-700", hex: "#0058DB", swatch: "bg-blue-700" },
  { name: "sky-300", hex: "#4FB3FF", swatch: "bg-sky-300" },
  { name: "blue-50", hex: "#EEF4FF", swatch: "bg-blue-50" },
  { name: "lime-400 (data only)", hex: "#C6F432", swatch: "bg-lime-400" },
  { name: "lime-50", hex: "#F3FCD6", swatch: "bg-lime-50" },
  { name: "lime-text", hex: "#4D6B00", swatch: "bg-lime-text" },
  { name: "whatsapp", hex: "#25D366", swatch: "bg-whatsapp" },
  { name: "whatsapp-hover", hex: "#1EBE5A", swatch: "bg-whatsapp-hover" },
  { name: "surface", hex: "#F5F7FB", swatch: "bg-surface" },
  { name: "white", hex: "#FFFFFF", swatch: "bg-white" },
  { name: "border", hex: "#E3E8F2", swatch: "bg-border" },
  { name: "text-body", hex: "#4A5578", swatch: "bg-body" },
  { name: "text-muted", hex: "#6B7494", swatch: "bg-muted" },
  { name: "text-on-dark", hex: "#A9B4D6", swatch: "bg-on-dark" },
];

const typeStyles = [
  {
    name: "Display · type-display",
    className: "type-display text-navy-900",
    sample: "More enquiries",
  },
  {
    name: "H2 · type-h2",
    className: "type-h2 text-navy-900",
    sample: "Real results for local businesses",
  },
  {
    name: "H3 · type-h3",
    className: "type-h3 text-navy-900",
    sample: "Google Business Profile",
  },
  {
    name: "Body large · type-body-lg",
    className: "type-body-lg",
    sample: "Plain language, every month.",
  },
  {
    name: "Body",
    className: "",
    sample: "Short sentences, confident and friendly.",
  },
  {
    name: "Eyebrow · eyebrow",
    className: "eyebrow text-blue-600",
    sample: "Transparent reporting",
  },
  {
    name: "Metric · metric",
    className: "metric text-navy-900",
    sample: "1,240",
  },
  {
    name: "Small numbers · metric-sm",
    className: "metric-sm text-navy-900",
    sample: "₹12,000/month",
  },
];

function Block({
  title,
  dark = false,
  children,
}: {
  title: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={
        dark ? "on-dark bg-navy-900 py-16" : "bg-surface py-16 even:bg-white"
      }
    >
      <div className="container-site">
        <h2 className="eyebrow text-muted on-dark:text-on-dark">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

function Buttons() {
  return (
    <div className="grid gap-4">
      <Row>
        <Button href="/growth-assessment" arrow>
          Book a free Growth Assessment
        </Button>
        <Button variant="whatsapp" href={whatsappHref()}>
          Chat on WhatsApp
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </Row>
      <Row>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg" arrow>
          Large
        </Button>
        <Button loading>Sending…</Button>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </Row>
    </div>
  );
}

function Pieces() {
  return (
    <div className="grid gap-8">
      <Row>
        {services.map((s) => (
          <IconTile key={s.slug} name={s.icon} />
        ))}
      </Row>
      <Row>
        <MetricNumber>1,240</MetricNumber>
        <MetricBadge value="+38%" label="demo value" />
        <MetricBadge
          value="-21%"
          trend="down"
          label="demo value, cost per lead"
        />
        <MetricNumber size="sm">₹20,000/month</MetricNumber>
      </Row>
      <Row>
        <RisingDots variant="bullet" />
        <RisingDots variant="steps" active={1} />
        <RisingDots variant="steps" active={2} />
        <RisingDots variant="steps" active={3} />
        <RisingDots variant="divider" />
      </Row>
      <Row>
        <Badge>Sample report</Badge>
        <Badge tone="brand">Most popular</Badge>
        <Badge tone="outline">No lock-in</Badge>
        <Chip>Mukilam Academy</Chip>
        <ChipButton aria-pressed="true">All</ChipButton>
        <ChipButton aria-pressed="false">Meta Ads</ChipButton>
      </Row>
      <ul className="grid gap-2">
        {services[0].bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <RisingDots variant="bullet" className="mt-1.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cards() {
  return (
    <div className="grid gap-8">
      <SectionHeading
        eyebrow="Section heading"
        title="Four services that work together"
        intro="Eyebrow, H2 and intro."
      />
      <BentoGrid>
        {services.map((s, i) => (
          <BentoCard key={s.slug} span={i === 0 ? "lg" : i === 1 ? "sm" : "md"}>
            <IconTile name={s.icon} />
            <h3 className="mt-5 type-h3 text-navy-900 on-dark:text-white">
              {s.name}
            </h3>
            <p className="mt-2">{s.outcome}</p>
          </BentoCard>
        ))}
      </BentoGrid>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <Eyebrow>Plain card</Eyebrow>
          <p className="mt-2">No hover lift.</p>
        </Card>
        <BrowserFrame url="visionplywoods.com">
          <p className="absolute inset-0 grid place-items-center text-sm text-muted on-dark:text-on-dark">
            [TBD: screenshot]
          </p>
        </BrowserFrame>
      </div>
    </div>
  );
}

function Interactive() {
  const confirmed = faqs.filter((f) => f.confirmed).slice(0, 3);
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <Accordion
        items={confirmed.map((f) => ({
          id: f.id,
          title: f.question,
          content: <p>{f.answer}</p>,
        }))}
      />
      <Tabs
        label="Industries"
        items={industries.slice(0, 3).map((ind) => ({
          id: ind.slug,
          label: ind.name,
          content: <p>{ind.howWeHelp}</p>,
        }))}
      />
    </div>
  );
}

function Forms() {
  const f = pages.growthAssessment.form.fields;
  const q = quizQuestions[0];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField label={f.name.label}>
        <Input name="name" autoComplete="name" />
      </FormField>
      <FormField
        label={f.whatsapp.label}
        hint={f.whatsapp.hint}
        error={pages.growthAssessment.form.errors.whatsapp}
      >
        <Input
          name="whatsapp"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          leading={f.whatsapp.prefix}
          defaultValue="98765"
        />
      </FormField>
      <FormField label={f.businessCategory.label}>
        <Select
          name="category"
          placeholder="Choose a category"
          options={industries.map((i) => i.name)}
        />
      </FormField>
      <FormField label={f.city.label} hint="Disabled state">
        <Input name="city" disabled placeholder={f.city.placeholder} />
      </FormField>
      <FormField label={f.message.label} className="md:col-span-2">
        <Textarea name="message" />
      </FormField>
      <RadioGroup
        name="demo-quiz"
        legend={q.question}
        options={q.options.map((o) => ({ value: o.id, label: o.label }))}
      />
      <div>
        <Checkbox label={f.consent.label} name="consent" />
        <Checkbox
          label="Checkbox with an error"
          name="consent-error"
          error={pages.growthAssessment.form.errors.consent}
        />
        <Checkbox label="Disabled checkbox" name="consent-disabled" disabled />
      </div>
    </div>
  );
}

function MotionDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Reveal>
        <Card>
          <Eyebrow>Reveal</Eyebrow>
          <p className="mt-2">Fades in and rises 24px once in view.</p>
        </Card>
      </Reveal>
      <Card>
        <Eyebrow>CountUp (demo value)</Eyebrow>
        <p className="mt-3 metric text-navy-900 on-dark:text-white">
          <CountUp value={1240} />
        </p>
        <p className="mt-2 metric-sm text-navy-900 on-dark:text-white">
          <CountUp value={84.5} prefix="₹" decimals={1} />
        </p>
      </Card>
      <HoverLift className="h-full">
        <Card>
          <Eyebrow>HoverLift</Eyebrow>
          <p className="mt-2">Lifts 2px with a blue glow border on hover.</p>
        </Card>
      </HoverLift>
      <Card className="md:col-span-3">
        <Eyebrow>DrawLine (demo data)</Eyebrow>
        <DrawLine className="mt-4">
          <svg
            viewBox="0 0 600 160"
            className="h-40 w-full"
            role="img"
            aria-label="Demo chart: three rising bars and a rising line"
          >
            {[0, 1, 2].map((i) => (
              <line
                key={i}
                data-draw
                x1={60 + i * 90}
                x2={60 + i * 90}
                y1={150}
                y2={110 - i * 40}
                className="stroke-lime-400"
                strokeWidth={36}
              />
            ))}
            <polyline
              data-draw
              points="340,140 400,120 460,90 520,60 580,20"
              fill="none"
              className="stroke-sky-300"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DrawLine>
      </Card>
      <StaggerGroup className="grid gap-4 md:col-span-3 md:grid-cols-4">
        {industries.slice(0, 4).map((ind) => (
          <Card key={ind.slug}>
            <IconTile name={ind.icon} />
            <p className="mt-3 font-semibold text-navy-900 on-dark:text-white">
              {ind.name}
            </p>
          </Card>
        ))}
      </StaggerGroup>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <>
      <section className="on-dark bg-navy-950 pt-[calc(var(--header-h)+48px)] pb-16">
        <div className="container-site">
          <SectionHeading
            as="h1"
            eyebrow="Internal"
            title="Styleguide"
            intro="Every token, type style, component and animation, in light and dark sections. Turn on reduce motion in your OS to check the fallbacks."
          />
        </div>
      </section>

      <Block title="Colour tokens">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {colors.map((c) => (
            <li key={c.name}>
              <span
                className={`block h-16 rounded-inner border border-border ${c.swatch}`}
              />
              <span className="mt-2 block text-sm font-semibold text-navy-900">
                {c.name}
              </span>
              <span className="block metric-sm text-muted">{c.hex}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Type styles">
        <dl className="grid gap-6">
          {typeStyles.map((t) => (
            <div
              key={t.name}
              className="grid gap-1 md:grid-cols-[220px_1fr] md:items-baseline"
            >
              <dt className="text-sm text-muted">{t.name}</dt>
              <dd className={t.className}>{t.sample}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Buttons · light">
        <Buttons />
      </Block>
      <Block title="Buttons · dark" dark>
        <Buttons />
      </Block>

      <Block title="Tiles, metrics, rising dots, badges, chips · light">
        <Pieces />
      </Block>
      <Block title="Tiles, metrics, rising dots, badges, chips · dark" dark>
        <Pieces />
      </Block>

      <Block title="Cards and bento · light">
        <Cards />
      </Block>
      <Block title="Cards and bento · dark" dark>
        <Cards />
      </Block>

      <Block title="Accordion and tabs · light">
        <Interactive />
      </Block>
      <Block title="Accordion and tabs · dark" dark>
        <Interactive />
      </Block>

      <Block title="Form controls · light">
        <Forms />
      </Block>
      <Block title="Form controls · dark" dark>
        <Forms />
      </Block>

      <Block title="Motion · light">
        <MotionDemo />
      </Block>
      <Block title="Motion · dark" dark>
        <MotionDemo />
      </Block>
    </>
  );
}
