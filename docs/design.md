# DIGIFI design system

The single design reference for the DIGIFI website. Source: the approved Design DNA
(`docs/design-dna.md`, "Growth Dashboard + Local Journey"). If anything here ever disagrees with the
Design DNA, the Design DNA wins and this file gets fixed.

Tokens live in `src/app/globals.css`. Class names below are the Tailwind classes they generate.

---

## 1. Concept and mood

**Concept:** Results first. The site feels like opening a client's monthly growth report: clear numbers,
calm confidence, real proof. A 4-step journey section explains how DIGIFI's four services work together.

**Mood words:** confident, data-driven, warm, clear.

**Who it is for:** local business owners in the Dindigul–Madurai–Trichy corridor whose main fear is
"Will I actually get results?" Every section answers one of: What does DIGIFI do? Why should I trust
DIGIFI? What results can DIGIFI create? What should I do next?

---

## 2. Logo usage

"Rising dots" logo (final, October 2026). The wordmark is "digifi" in lowercase Bricolage Grotesque
ExtraBold, navy `#0A1340`; the dots of the three i's are electric blue `#0064F8` rounded squares rising
in equal steps left to right, like a growth chart. The symbol is a navy rounded-square tile with three
rising rounded squares (blue, blue, white highest). Tagline "innovate. impact. inspire." in Bricolage
Grotesque Medium, same width as the wordmark. All text in the files is outlined; no font needed.

| File (in `public/brand/`) | Use |
|---|---|
| `digifi-wordmark-reversed.svg` | Site header and footer (navy backgrounds). Wordmark + tagline, no symbol tile |
| `digifi-wordmark-light.svg` | Wordmark on white or light backgrounds |
| `digifi-logo-horizontal-reversed.svg` | Full lockup (symbol + wordmark + tagline) on navy: large moments only |
| `digifi-logo-horizontal-light.svg` | Full lockup on light backgrounds: large moments only |
| `digifi-symbol.svg` | Symbol tile alone: social avatars, small spots |
| `digifi-symbol-on-navy.svg` | Symbol tile on navy backgrounds (tile `#131E57`) |
| `favicon.svg`, `favicon-16.png`, `favicon-32.png` | Favicon (squares enlarged for small sizes) |
| `apple-touch-icon-180.png` | Phone home-screen icon |
| `icon-512.png` | Large icon (social profiles, Google Business Profile, OG fallback) |

Rules:
- **Clear space:** at least the width of one blue dot on every side.
- **Never** recolor, stretch, rotate, add shadows or gradients, or move the dots. Scale proportionally only.
- SVGs on the website; PNGs only where SVG is not accepted (WhatsApp, social, documents, email).
- **The rising dots are the site's visual motif:** charts, step indicators, bullet markers and the hero
  report card echo the three rising squares.

---

## 3. The 10 design axes

| # | Axis | Choice | Why |
|---|---|---|---|
| 1 | Layout archetype | **Bento grid**: mixed-size rounded cards arranged like a dashboard, on a 12-column grid (max width 1200px) | Prospects worry about results; a dashboard layout makes proof the structure of the page, and it matches DIGIFI's reporting USP |
| 2 | Hero concept | **Headline + animated report card**: headline, sub-line, two CTAs left; on the right a "monthly report" card with 3 metrics (leads, cost per lead, Google ranking) and a small chart that draws in | Delivers "experts who get results" in the first 5 seconds; uses real case study numbers or is labelled "Sample report" |
| 3 | Typography | **Bricolage Grotesque** (headings 700–800, body 400–500) + **Geist Mono** (all numbers: metrics, prices, stats, step numbers) | Bricolage continues the expo.digifi.in style; mono numerals make results feel measured and factual, like a report |
| 4 | Color strategy | **Navy + electric blue from the logo, growth lime for data only, WhatsApp green only for WhatsApp**: dark navy hero and footer, light gray and white content sections | Blue is the brand and primary action; lime appears only in data, so it always means "this number went up"; WhatsApp green makes the WhatsApp action instantly recognizable |
| 5 | Shape language | **Soft rounded**: cards 20px, inner elements 12px, buttons and chips fully pill-shaped, 1px light borders | Matches expo.digifi.in; friendly but precise, avoids the "too corporate" feel |
| 6 | Icon system | **Lucide**, stroke 1.75, 20–24px, inside 40px rounded tiles with a light blue tint (dark tiles on navy sections) | Same family as expo.digifi.in; tiles give icons weight without clutter |
| 7 | Imagery treatment | **Real photos in rounded frames** (20px), no overlays or filters; website portfolio inside a minimal browser-window frame; no stock photos of handshakes or laptops | Real faces and real client work build trust; the browser frame makes portfolio screenshots look premium |
| 8 | Motion signature | **(a)** counters ticking up from 0 when visible, **(b)** chart lines and progress bars drawing on scroll, **(c)** bento cards rising in a staggered sequence | All three express "growth you can measure"; moderate, never decorative for its own sake |
| 9 | Section patterns | Client strip under hero; bento services grid; **4-step pinned journey** (Get found → Get enquiries → Follow up fast → Build trust); "What your monthly report looks like" sample report; results case cards with before/after numbers; industries as 6 cards with client names; FAQ accordion; navy CTA band with two buttons | Each section answers one of the four core questions |
| 10 | Micro-interactions | Card lift (2px) with a soft blue glow border on hover; arrow nudge on CTA hover; button fill sweep on primary CTA; WhatsApp button gentle pulse once after 8 seconds; scroll progress bar in the header (solid blue-600) | Small rewards that make the site feel alive and premium without being busy |

Hero chart: the Design DNA says "a small line chart"; the prompt pack (Stage 5) specifies three rising
bars echoing the logo dots. Both are data visuals in lime/sky-300 on the report card; Stage 5 uses the
three rising bars.

---

## 4. Color tokens

Every color is a CSS variable on `:root` (`--color-<name>`) and a Tailwind color (`bg-<name>`,
`text-<name>`, `border-<name>`, ...). **Tailwind's default palette is switched off**: classes like
`bg-blue-500`, `text-zinc-600` or `bg-black` do not exist in this project.

| Token | Hex | CSS variable | Use |
|---|---|---|---|
| `navy-950` | `#060A24` | `--color-navy-950` | Deepest backgrounds (hero base, footer) |
| `navy-900` | `#0A1340` | `--color-navy-900` | Brand navy: headings on light, dark sections |
| `navy-800` | `#131E57` | `--color-navy-800` | Cards on dark sections |
| `blue-600` | `#0064F8` | `--color-blue-600` | Primary: buttons, links, active states, focus rings |
| `blue-700` | `#0058DB` | `--color-blue-700` | Primary hover |
| `sky-300` | `#4FB3FF` | `--color-sky-300` | Accent text and chart lines on dark backgrounds |
| `blue-50` | `#EEF4FF` | `--color-blue-50` | Icon tiles, tinted cards |
| `lime-400` | `#C6F432` | `--color-lime-400` | **Data only:** rising chart bars, "+%" numbers, "up" badges (report card, results cards, sample report). Never on buttons, headlines, underlines, icons or decoration |
| `lime-50` | `#F3FCD6` | `--color-lime-50` | Lime tint behind "up" badges on light sections (navy text) |
| `lime-text` | `#4D6B00` | `--color-lime-text` | Lime-family text on white or light gray (e.g. "+212%") |
| `whatsapp` | `#25D366` | `--color-whatsapp` | WhatsApp buttons and icon ONLY, with navy text or icon |
| `whatsapp-hover` | `#1EBE5A` | `--color-whatsapp-hover` | WhatsApp button hover |
| `surface` | `#F5F7FB` | `--color-surface` | Light section background |
| `white` | `#FFFFFF` | `--color-white` | Cards on light sections |
| `border` | `#E3E8F2` | `--color-border` | Card and divider borders |
| `text-body` | `#4A5578` | `--color-body` → `text-body` | Body text on light |
| `text-muted` | `#6B7494` | `--color-muted` → `text-muted` | Captions, labels |
| `text-on-dark` | `#A9B4D6` | `--color-on-dark` → `text-on-dark` | Body text on navy |

Transparent tints of a token use Tailwind's opacity modifier on the same token, e.g. `border-white/8`
(dark card border, `rgba(255,255,255,0.08)`) or `border-blue-600/30` (hover border).

**No gradients.** The logo is flat two-color, so the site is flat: solid fills only. The single exception
is the hero: one very soft, large radial glow of blue-600 at 12% opacity behind the report card.

The magenta accent `#F8087F` mentioned in `docs/client-summary.md` was an approximation made before the
SVG logo existed. It is **not** in the final logo or the token list and is not used.

### Color rules

- Blue-600 is the primary action color: "Free Growth Assessment" buttons, links, focus rings.
- WhatsApp green appears only on WhatsApp actions, never as decoration.
- **Lime is for data only**: it always means "this number went up". Never on buttons, headlines, links,
  icons or decoration, and **never next to the WhatsApp button** (two greens side by side look muddy).
- Exactly **two action colors**: blue-600 (Free Growth Assessment and every other CTA) and WhatsApp
  green (WhatsApp only).
- Never white text on lime or on WhatsApp green: use navy `#0A1340`.

### Contrast (WCAG AA)

| Pair | Ratio | Result |
|---|---|---|
| White on blue-600 | 5.03 | ✓ |
| Blue-600 on white | 5.03 | ✓ |
| Blue-600 on surface | 4.69 | ✓ |
| Body `#4A5578` on surface | 6.84 | ✓ |
| Muted `#6B7494` on white | 4.61 | ✓ |
| `#A9B4D6` on navy-900 | 8.63 | ✓ |
| White on navy-900 | 17.8 | ✓ |
| Lime `#C6F432` on navy-900 | 13.89 | ✓ |
| Navy text on lime | 13.89 | ✓ |
| **Lime on white** | **1.28** | **✗ never lime text on light backgrounds**; use `#4D6B00` (6.14 ✓) or a lime-50 badge with navy text (16.7 ✓) |
| Navy text on WhatsApp green | 8.97 | ✓ |
| **White text on WhatsApp green** | **1.98** | **✗ WhatsApp buttons use navy text and icon** |

---

## 5. Typography

Fonts load with `next/font/google` in `src/app/layout.tsx` (self-hosted, `display: swap`, size-adjusted
fallback, so no layout shift):

- **Bricolage Grotesque**: variable font (covers weights 400, 500, 600, 700, 800) plus the optical-size
  axis `opsz`. CSS variable `--font-sans`, class `font-sans` (default on `<body>`).
- **Geist Mono** 500. CSS variable `--font-mono`, class `font-mono`. All numbers: metrics, prices,
  stats, step numbers.

| Role | Font | Size (mobile → desktop) | Weight | Letter-spacing | Class |
|---|---|---|---|---|---|
| Display (hero H1) | Bricolage Grotesque | 40 → 72px | 800 | -0.03em | `type-display` |
| H2 | Bricolage Grotesque | 30 → 48px | 800 | -0.025em | `type-h2` |
| H3 | Bricolage Grotesque | 20 → 24px | 700 | -0.01em | `type-h3` |
| Body large | Bricolage Grotesque | 18 → 20px | 400 | 0 | `type-body-lg` |
| Body | Bricolage Grotesque | 16px | 400 | 0 | default on `<body>` |
| Label / eyebrow | Bricolage Grotesque | 13px uppercase | 600 | 0.08em | `eyebrow` |
| Metric (big numbers) | Geist Mono | 36 → 56px | 500 | -0.02em | `metric` |
| Small numbers, prices, steps | Geist Mono | 14 → 16px | 500 | 0 | `metric-sm` |

Line height: headings 1.05–1.15, body 1.6. "Desktop" sizes apply from the `md` breakpoint (768px).
Numbers use tabular figures so counters don't jitter.

---

## 6. Layout, spacing, radius, shadow

- **Grid:** 12 columns, max width 1200px, 16px gutters on mobile (24px from `md`).
  - `container-site`: centered, max-width 1200px content, 16px side padding (32px from `md`).
  - `grid-site`: 12-column grid with the gutter gap. Children use `col-span-*`.
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. These are Tailwind's default spacing
  steps 1, 2, 3, 4, 6, 8, 12, 16, 24, 32 (e.g. `gap-6` = 24px). Don't use off-scale values.
- **Section padding:** 64px mobile, 112px desktop: class `section-y`.
- **Radius:** cards 20px `rounded-card`; inner elements 12px `rounded-inner`; buttons and chips
  999px `rounded-full`.
- **Shadow (light sections):** `shadow-card` = `0 1px 2px rgba(10,19,64,0.04), 0 8px 24px rgba(10,19,64,0.06)`
- **Hover shadow:** `shadow-hover` = `0 12px 32px rgba(0,100,248,0.12)` plus border blue-600 at 30%
  (`border-blue-600/30`).
- **Dark section cards:** no shadow; 1px border `rgba(255,255,255,0.08)` (`border-white/8`).

---

## 7. Motion

### Tokens

| Token | Value | CSS variable / class |
|---|---|---|
| Ease out | `cubic-bezier(0.22, 1, 0.36, 1)` | `--ease-out`, `ease-out` |
| Ease in-out | `cubic-bezier(0.65, 0, 0.35, 1)` | `--ease-in-out`, `ease-in-out` |
| Micro | 150ms | `--duration-micro` |
| UI | 250ms | `--duration-ui` |
| Reveal | 600ms | `--duration-reveal` |
| Counters | 1.4s | `--duration-counter` |
| Chart draw | 1.2s | `--duration-chart` |
| Stagger | 80ms between cards | `--stagger` |

### Rules

- **GSAP + ScrollTrigger:** counters, chart and progress drawing, the pinned 4-step journey section,
  staggered bento reveals.
- **Motion (`motion/react`):** hover and tap states, FAQ accordion, quiz step transitions, mobile menu,
  form states.
- Never animate the same property on the same element with both libraries.
- Every animation respects `prefers-reduced-motion`: show the final state instantly (counters show the
  final number, charts fully drawn).
- Nothing animates before first paint of the hero headline (LCP stays fast); the hero report card
  animates after load.
- Mobile: the pinned journey becomes a simple vertical stepper with fade-ins; no pinning under 768px.
- Animate only `transform` and `opacity` (and SVG stroke for charts).

---

## 8. Premium quality markers

- Generous white space; one clear message per section.
- Strong typographic hierarchy: big confident headlines, short readable body text.
- Consistent 12-column grid and spacing scale everywhere.
- Real photography and real client work only.
- Every interactive element has hover, focus (visible blue ring), active, loading and disabled states.
- Forms show inline validation, clear success and error states.
- Numbers always in Geist Mono, always sourced from real data.

## 9. Banned patterns

- Generic stock hero with centered text over a dark photo overlay
- Three identical icon cards as the only services section
- Default Tailwind blue (`#3B82F6`) or any color outside the token list
- Full-page or random rainbow gradients
- Emoji used as icons
- Lorem ipsum or invented statistics, testimonials or logos
- Stock photos of handshakes, laptops on desks, or people pointing at screens
- Busy layouts with more than one competing CTA style per section

---

## 10. Homepage section order

| # | Section | Background |
|---|---|---|
| 1 | **Hero**: headline + report card (lime only on its rising numbers and chart bars) + two CTAs: blue "Free Growth Assessment" and WhatsApp-green "Chat on WhatsApp" | dark |
| 2 | **Client strip**: "Trusted by 35+ local businesses across 10+ industries" | light |
| 3 | **Services bento**: 4 services, each with one outcome line and a link | light |
| 4 | **The 4-step journey** (pinned scroll): Get found → Get enquiries → Follow up fast → Build trust | light |
| 5 | **Results**: 2–4 case study cards with before/after numbers | light |
| 6 | **"What your monthly report looks like"**: sample report = transparency USP | dark |
| 7 | **Industries**: 6 cards with client names | light |
| 8 | **Digital Health Check quiz teaser**: "Score your business online in 60 seconds" | light |
| 9 | **Why DIGIFI**: local presence, Tamil-friendly, industry knowledge, AI speed, 15+ years | light |
| 10 | **FAQ** | light |
| 11 | **Final CTA band**: Free Growth Assessment + WhatsApp | dark |

---

## 11. How to apply

**Do**

- Primary CTA: `rounded-full bg-blue-600 text-white hover:bg-blue-700`.
- WhatsApp button: `rounded-full bg-whatsapp text-navy-900 hover:bg-whatsapp-hover` with the WhatsApp icon.
- Light section: `<section class="bg-surface section-y"><div class="container-site">…`; cards inside are
  `rounded-card border border-border bg-white shadow-card`.
- Dark section: `bg-navy-900` (or `bg-navy-950` for hero/footer), body text `text-on-dark`, cards
  `rounded-card border border-white/8 bg-navy-800`, no shadow.
- A result that went up on a light card: `rounded-full bg-lime-50 text-navy-900` badge with
  `metric-sm` "+38%", or `text-lime-text` inline. On a dark card: `text-lime-400` or a `bg-lime-400
  text-navy-900` badge.
- Every number (metric, price, step) in `font-mono` (`metric` / `metric-sm`).
- Unknown figures stay visible as `[TBD: ...]`; a sample report is labelled "Sample report".

**Don't**

- ✗ `text-lime-400` on a white or surface background (1.28 contrast).
- ✗ White text on a WhatsApp-green button.
- ✗ A lime badge sitting next to a WhatsApp button.
- ✗ Lime on a button, headline, link underline, icon or divider.
- ✗ A third CTA color (outline/ghost buttons are fine; they stay blue/navy).
- ✗ `bg-gradient-*` anywhere except the one hero glow.
- ✗ Arbitrary hex values in class names (`bg-[#3B82F6]`). Add a token to this file and `globals.css`
  first, or don't use the color.
- ✗ Numbers in Bricolage Grotesque, or an invented number to fill a layout.

---

## 12. Components and motion utilities (Stage 4)

Live reference: **/styleguide** (noindex). Every component works in light and dark sections.

**Dark context:** put the class `on-dark` on any navy section. Components inside switch to their dark
styles through the `on-dark:` Tailwind variant (defined in `globals.css`), so no component takes a
`dark` prop. The header, footer, mobile bar and `PageHero` already set it.

| Component | File | Notes |
|---|---|---|
| Button | `ui/Button.tsx` | `variant`: primary (fill sweep), whatsapp (navy text + icon), secondary (outline), ghost. `size`: sm, md, lg (all ≥44px). `arrow` adds the nudging arrow. `loading`, `disabled`. Renders `<Link>`/`<a>` with `href`, else `<button>`. External http links open in a new tab |
| Card | `ui/Card.tsx` | 20px radius; navy-800 with hairline border on dark |
| BentoGrid, BentoCard | `ui/BentoGrid.tsx` | 12-col grid; `span` sm/md/lg/full, `rows` 1/2; card has hover lift |
| SectionHeading, Eyebrow | `ui/SectionHeading.tsx`, `ui/Eyebrow.tsx` | Eyebrow + H2 (or H1) + intro |
| IconTile, Icon | `ui/IconTile.tsx`, `ui/Icon.tsx` | Register any new Lucide icon in `Icon.tsx` |
| MetricNumber, MetricBadge | `ui/Metric.tsx` | Badge: lime-50/navy on light, lime-400/navy on dark; `trend` up/down |
| RisingDots | `ui/RisingDots.tsx` | `variant` bullet, steps (`active` 0–3), divider |
| Accordion | `ui/Accordion.tsx` | Answers stay in the HTML when closed (crawlable); Motion fade on open |
| Tabs | `ui/Tabs.tsx` | Arrow keys, Home/End |
| FormField, Input, Textarea, Select, Checkbox, RadioGroup | `ui/Form.tsx` | FormField wires label, hint and error ids into its control. `Input leading="+91"` |
| BrowserFrame | `ui/BrowserFrame.tsx` | Portfolio screenshots (`next/image` with `fill` inside) |
| Badge, Chip, ChipButton | `ui/Badge.tsx`, `ui/Chip.tsx` | ChipButton uses `aria-pressed` for filters |

**Form errors:** the token list has no red. Errors are shown with an icon, bold navy (white on dark)
text and a 2px navy border, never by colour alone. If a dedicated error colour is wanted, add it to the
token list first.

**Motion utilities** (`src/components/motion/`):

| Utility | Library | Use |
|---|---|---|
| `gsap.ts` | GSAP | The only place GSAP is imported; registers ScrollTrigger, useGSAP and the DIGIFI eases once |
| Reveal | GSAP | Fade + 24px rise once in view. Below the fold only |
| StaggerGroup | GSAP | Children reveal 80ms apart; give it the grid classes |
| CountUp | GSAP | 0 → value over 1.4s once in view; server-rendered final value |
| DrawLine | GSAP | Draws every `[data-draw]` stroke inside over 1.2s; bars are thick stroked lines |
| HoverLift | Motion | 2px lift + tap press; gives `<Card>` its hover glow |
| `variants.ts` | Motion | hoverLift, tap, accordion, pageTransition (quiz steps, panels; not whole pages) |
| MotionProvider | Motion | In the root layout: `LazyMotion` (use `m.*`) + `reducedMotion="user"` |

Rules: GSAP animates grid cells and data; Motion animates the element inside (BentoCard does this).
Every GSAP utility runs inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")` and is
server-rendered in its final state, so reduced motion (or no JavaScript) shows final numbers, drawn
charts and visible content.
