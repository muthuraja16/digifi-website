# DIGIFI Design DNA: "Growth Dashboard + Local Journey"

**Concept:** Results first. The site feels like opening a client's monthly growth report: clear numbers, calm confidence, real proof. A 4-step journey section explains how DIGIFI's four services work together.

**Mood words:** confident, data-driven, warm, clear.

## Logo: "Rising dots" (final, October 2026)

- **Wordmark:** "digifi" in lowercase Bricolage Grotesque ExtraBold, navy #0A1340. The dots of the three letter i's are electric blue #0064F8 rounded squares that rise in equal steps left to right, like a growth chart.
- **Symbol:** a navy rounded-square tile with three rising rounded squares: blue, blue, white (highest).
- **Tagline:** "innovate. impact. inspire." in Bricolage Grotesque Medium, same width as the wordmark.
- **Files:** `digifi-logo-files.zip` (all SVG masters + PNGs + favicon set). Website uses the SVGs.
- **Usage:** wordmark + tagline for the site header and footer (reversed on navy); symbol alone for favicon, social avatars and small spots; full lockup for large moments only.
- **The logo's rising dots are the site's visual motif:** charts, step indicators, bullet markers and the hero report card echo the three rising squares.

---

## 1. The 10 axes

| # | Axis | Choice | Why |
|---|---|---|---|
| 1 | Layout archetype | **Bento grid**: mixed-size rounded cards arranged like a dashboard, on a 12-column grid (max width 1200px) | Prospects worry about results; a dashboard layout makes proof the structure of the page, and it matches DIGIFI's reporting USP |
| 2 | Hero concept | **Headline + animated report card**: headline, sub-line, two CTAs left; on the right a "monthly report" card with 3 metrics (leads, cost per lead, Google ranking) and a small line chart that draws in | Delivers "experts who get results" in the first 5 seconds; uses real case study numbers or is labelled "Sample report" |
| 3 | Typography | **Bricolage Grotesque** (headings 700–800, body 400–500) + **Geist Mono** (all numbers: metrics, prices, stats, step numbers) | Bricolage continues the expo.digifi.in style; mono numerals make results feel measured and factual, like a report |
| 4 | Color strategy | **Navy + electric blue from the logo, growth lime for data only, WhatsApp green only for WhatsApp**: dark navy hero and footer, light gray and white content sections | Blue is the brand and primary action; lime appears only in data (rising chart bars, "+%" results numbers, the report card), so it always means "this number went up"; WhatsApp green makes the WhatsApp action instantly recognizable |
| 5 | Shape language | **Soft rounded**: cards 20px, inner elements 12px, buttons and chips fully pill-shaped, 1px light borders | Matches expo.digifi.in; friendly but precise, avoids the "too corporate" feel |
| 6 | Icon system | **Lucide**, stroke 1.75, 20–24px, inside 40px rounded tiles with a light blue tint (dark tiles on navy sections) | Same family as expo.digifi.in for brand consistency; tiles give icons weight without clutter |
| 7 | Imagery treatment | **Real photos in rounded frames** (20px), no overlays or filters; website portfolio shown inside a minimal browser-window frame; no stock photos of handshakes or laptops | Real faces and real client work build trust; the browser frame makes portfolio screenshots look premium |
| 8 | Motion signature | **(a)** counters ticking up from 0 when visible, **(b)** chart lines and progress bars drawing on scroll, **(c)** bento cards rising in a staggered sequence | All three express "growth you can measure"; moderate, never decorative for its own sake |
| 9 | Section patterns | Client logo strip under hero; bento services grid; **4-step pinned journey** (Get found → Get enquiries → Follow up fast → Build trust); "What your monthly report looks like" sample report; results case cards with before/after numbers; industries as 6 cards with client names; FAQ accordion; navy CTA band with two buttons | Each section answers one of the four core questions: what, why trust, what results, what next |
| 10 | Micro-interactions | Card lift (2px) with a soft blue glow border on hover; arrow nudge on CTA hover; button fill sweep on primary CTA; WhatsApp button gentle pulse once after 8 seconds; scroll progress bar in the header (solid blue-600) | Small rewards that make the site feel alive and premium without being busy |

---

## 2. Design tokens

### Colors

| Token | Hex | Use |
|---|---|---|
| `navy-950` | #060A24 | Deepest backgrounds (hero base, footer) |
| `navy-900` | #0A1340 | Brand navy: headings on light, dark sections |
| `navy-800` | #131E57 | Cards on dark sections |
| `blue-600` | #0064F8 | Primary: buttons, links, active states |
| `blue-700` | #0058DB | Primary hover |
| `sky-300` | #4FB3FF | Accent text and chart lines on dark backgrounds |
| `blue-50` | #EEF4FF | Icon tiles, tinted cards |
| `lime-400` | #C6F432 | **Data only:** rising chart bars, "+%" result numbers and "up" badges, inside the report card, results cards and sample report. Never on buttons, headlines, underlines, icons or decoration |
| `lime-50` | #F3FCD6 | Lime tint behind "up" badges on light sections (navy text) |
| `lime-text` | #4D6B00 | Lime-family text on white or light gray (e.g. "+212%") |
| `whatsapp` | #25D366 | WhatsApp buttons and icon ONLY, with navy #0A1340 text or icon |
| `whatsapp-hover` | #1EBE5A | WhatsApp button hover |
| `surface` | #F5F7FB | Light section background |
| `white` | #FFFFFF | Cards on light sections |
| `border` | #E3E8F2 | Card and divider borders |
| `text-body` | #4A5578 | Body text on light |
| `text-muted` | #6B7494 | Captions, labels |
| `text-on-dark` | #A9B4D6 | Body text on navy |

**No gradients.** The logo is flat two-color, so the site is flat too: solid fills only. The hero may use one very soft, large radial glow of blue-600 at 12% opacity behind the report card, nothing else.

**Color rules:**
- Blue-600 is the primary action color: "Free Growth Assessment" buttons, links, focus rings.
- WhatsApp green appears only on WhatsApp actions, never as decoration.
- **Lime is for data only**: it always means "this number went up". It never appears on buttons, headlines, links, icons or decoration, and **never next to the WhatsApp button** (two greens side by side look muddy).
- The site has exactly two action colors: blue-600 (Free Growth Assessment and all other CTAs) and WhatsApp green (WhatsApp only).
- Never put white text on lime or on WhatsApp green: use navy.

**Contrast checks (WCAG AA):**
- White on blue-600: 5.03 ✓ · blue-600 on white: 5.03 ✓ · blue-600 on surface: 4.69 ✓
- Body #4A5578 on surface: 6.84 ✓ · Muted #6B7494 on white: 4.61 ✓
- #A9B4D6 on navy-900: 8.63 ✓ · White on navy-900: 17.8 ✓
- Lime #C6F432 on navy-900: 13.89 ✓ · Navy text on lime: 13.89 ✓ · **Lime on white: 1.28 ✗**, so never lime text on light backgrounds; use #4D6B00 (6.14 ✓) or a lime-50 badge with navy text (16.7 ✓)
- Navy text on WhatsApp green: 8.97 ✓ · **White text on WhatsApp green: 1.98 ✗**, so WhatsApp buttons use navy text and icon

### Typography scale

| Role | Font | Size (mobile → desktop) | Weight | Letter-spacing |
|---|---|---|---|---|
| Display (hero H1) | Bricolage Grotesque | 40 → 72px | 800 | -0.03em |
| H2 | Bricolage Grotesque | 30 → 48px | 800 | -0.025em |
| H3 | Bricolage Grotesque | 20 → 24px | 700 | -0.01em |
| Body large | Bricolage Grotesque | 18 → 20px | 400 | 0 |
| Body | Bricolage Grotesque | 16px | 400 | 0 |
| Label / eyebrow | Bricolage Grotesque | 13px uppercase | 600 | 0.08em |
| Metric (big numbers) | Geist Mono | 36 → 56px | 500 | -0.02em |
| Small numbers, prices, steps | Geist Mono | 14 → 16px | 500 | 0 |

Line height: headings 1.05–1.15, body 1.6.

### Spacing, radius, shadow

- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Section padding: 64px mobile, 112px desktop
- Radius: cards 20px, inner elements 12px, buttons and chips 999px
- Shadow (light sections): `0 1px 2px rgba(10,19,64,0.04), 0 8px 24px rgba(10,19,64,0.06)`
- Hover shadow: `0 12px 32px rgba(0,100,248,0.12)` plus border `blue-600` at 30% opacity
- Dark section cards: no shadow; 1px border `rgba(255,255,255,0.08)`

### Motion tokens

- Ease out: `cubic-bezier(0.22, 1, 0.36, 1)`
- Ease in-out: `cubic-bezier(0.65, 0, 0.35, 1)`
- Durations: micro 150ms, UI 250ms, reveal 600ms, counters 1.4s, chart draw 1.2s
- Stagger: 80ms between cards

---

## 3. Motion rules

- **GSAP + ScrollTrigger:** counters, chart and progress drawing, the pinned 4-step journey section, staggered bento reveals
- **Motion (`motion/react`):** hover and tap states, FAQ accordion, quiz step transitions, mobile menu, form states
- Never animate the same property on the same element with both libraries
- Every animation respects `prefers-reduced-motion`: show final state instantly (counters show final number, charts fully drawn)
- Nothing animates before first paint of the hero headline (LCP stays fast); the hero report card animates after load
- Mobile: the pinned journey becomes a simple vertical stepper with fade-ins; no pinning under 768px
- Animate only `transform` and `opacity` (and SVG stroke for charts)

---

## 4. Premium quality markers

- Generous white space; one clear message per section
- Strong typographic hierarchy: big confident headlines, short readable body text
- Consistent 12-column grid and spacing scale everywhere
- Real photography and real client work only
- Every interactive element has hover, focus (visible blue ring), active, loading, and disabled states
- Forms show inline validation, clear success and error states
- Numbers always in Geist Mono, always sourced from real data

## 5. Banned patterns

- Generic stock hero with centered text over a dark photo overlay
- Three identical icon cards as the only services section
- Default Tailwind blue (#3B82F6) or any color outside the token list
- Full-page or random rainbow gradients
- Emoji used as icons
- Lorem ipsum or invented statistics, testimonials, or logos
- Stock photos of handshakes, laptops on desks, or people pointing at screens
- Busy layouts with more than one competing CTA style per section

---

## 6. Homepage section order

1. **Hero** (dark): headline + report card (lime only on its rising numbers and chart bars) + two CTAs: blue "Free Growth Assessment" and WhatsApp-green "Chat on WhatsApp"
2. **Client logo strip**: "Trusted by 35+ local businesses across 10+ industries"
3. **Services bento** (light): 4 services, each with one outcome line and a link
4. **The 4-step journey** (pinned scroll): Get found → Get enquiries → Follow up fast → Build trust
5. **Results** (light): 2–4 case study cards with before/after numbers
6. **"What your monthly report looks like"** (dark): sample report = transparency USP
7. **Industries** (light): 6 cards with client names
8. **Digital Health Check quiz teaser**: "Score your business online in 60 seconds"
9. **Why DIGIFI** (light): local presence, Tamil-friendly, industry knowledge, AI speed, 15+ years
10. **FAQ** (light)
11. **Final CTA band** (dark): Free Growth Assessment + WhatsApp

---

## 7. Design Registry entry

### DIGIFI | Digital marketing agency, Dindigul | October 2026
- Logo: "Rising dots" wordmark (three i-dots rising like a growth chart) + navy tile symbol
- Layout + hero: Bento-grid dashboard layout; dark navy hero with headline left and animated "monthly report" metrics card right; pinned 4-step journey section
- Typography: Bricolage Grotesque (headings 800, body 400) + Geist Mono for all numbers
- Colors: Navy #0A1340 / #060A24 dark sections, light #F5F7FB sections, electric blue #0064F8 primary, growth lime #C6F432 for data only, WhatsApp green #25D366 for WhatsApp only; flat, no gradients
- Shape + icons + imagery: Soft rounded (cards 20px, pill buttons), Lucide icons in tinted rounded tiles, real photos in rounded frames, portfolio in browser frames
- Motion signature: GSAP counters, chart and progress lines drawing on scroll, staggered card rise, pinned journey; Motion for hover, accordion, quiz; scroll progress bar
