# DIGIFI Website: Claude Code Prompt Pack

**Client:** DIGIFI (own agency website) · **Domain:** digifi.in · **Launch target:** Wednesday 14 October 2026
**Stack:** Next.js (App Router, TypeScript) + Tailwind CSS · Supabase · Resend · GSAP + Motion · Vercel

---

## How to use this pack

1. Create an empty folder on your computer, e.g. `digifi-website`, and open Claude Code in it.
2. Put these three files in a `docs/` subfolder before Stage 0:
   - `docs/design-dna.md` ← **digifi-design-dna.md**
   - `docs/client-summary.md` ← **digifi-client-summary.md**
   - `docs/brand/` ← unzip **digifi-logo-files.zip** here
3. Run the **Toolkit setup** once, then paste **one stage prompt at a time, in order**. Wait for each stage to pass its checks and commit before the next.
4. After each visual stage, open the site (`npm run dev` → http://localhost:3000) and look at it on desktop and phone width. If something is off, say so in plain words before moving on.
5. **Office move:** DIGIFI is moving to a new office this month. Until then the site shows "Dindigul, Tamil Nadu" with no street address and no map. **Stage 11 (Maps) is skipped for now**, and Stage 12 (Reviews) is built but switched off. Both are switched on next month after the Google Business Profile is created at the new office (see "After the office move" at the end).
6. Anything marked `[TBD: …]` is information only you can provide. The build continues with clearly marked placeholders; replace them before Stage 17.

---

## Toolkit setup (run once on your computer)

Run these in your terminal (not inside a project). Skip any you already have.

```bash
# Skills and plugins
claude plugin install frontend-design@claude-plugins-official
claude plugin install security-guidance@claude-plugins-official
claude plugin install playwright@claude-plugins-official
claude plugin marketplace add greensock/gsap-skills
claude plugin marketplace add supabase/agent-skills
claude plugin install supabase@supabase-agent-skills
claude plugin install postgres-best-practices@supabase-agent-skills
claude plugin marketplace add upstash/context7
claude plugin install context7@context7-marketplace
npx skills add vercel-labs/agent-skills
npx skills add resend/resend-skills

# MCP servers
claude mcp add next-devtools npx next-devtools-mcp@latest
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
claude mcp add --transport http supabase https://mcp.supabase.com/mcp
claude mcp add --transport http resend https://mcp.resend.com/mcp
claude mcp add --transport http vercel https://mcp.vercel.com
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

Inside Claude Code you can also install the GSAP skills with `/plugin marketplace add greensock/gsap-skills` and then pick them from `/plugin`. Check everything with `/plugin` and `/mcp`.

## Accounts and keys checklist

Create these before the stage that needs them (Stage number in brackets):

| Account | Needed for | Stage |
|---|---|---|
| GitHub (private repo `digifi-website`) | Code backup, Vercel deploys | 0 |
| Vercel | Hosting, SSL, previews | 0 / 18 |
| Supabase (project in region **Mumbai, ap-south-1**) | Leads, quiz results, dashboard login | 8 |
| Resend (domain `mail.digifi.in`) | Lead alerts and auto-replies | 9 |
| Cloudflare Turnstile (free) | Form spam protection | 9 |
| Google Cloud: Maps Embed API (restricted key) | Contact page map (next month, after the move) | 11 |
| Google Tag Manager + GA4 property | Analytics | 14 |
| Microsoft Clarity | Heatmaps, session recordings | 14 |
| Meta Business: Pixel + Conversions API token | Ad tracking | 14 |
| Google Search Console + Bing Webmaster Tools | SEO | 13 / 18 |
| Sentry | Error tracking | 19 |
| UptimeRobot | Uptime alerts | 19 |
| GoDaddy DNS access for digifi.in | Domain, email records | 9 / 18 |

---

## Stage 0: Project setup, toolkit check, and CLAUDE.md

**Run after:** Toolkit setup · **What I need ready:** empty folder with `docs/` files from step 2 above, GitHub account

```text
GOAL
Set up the DIGIFI website project with a clean, production-grade Next.js foundation and a CLAUDE.md that guides every later stage.

SKILLS & TOOLS
Context7 (current create-next-app and Next.js App Router docs), Vercel react-best-practices and composition-patterns skills. Check the toolkit: run /plugin and /mcp and list what is installed. If anything is missing, note it in docs/progress.md and continue (fallback: rely on Context7 docs).

READ FIRST
docs/design-dna.md, docs/client-summary.md, docs/brand/README.txt

TASKS
1. Create a Next.js app in this folder (keep the existing docs/ folder): App Router, TypeScript strict mode, Tailwind CSS, ESLint, src/ directory, import alias @/*. Use the latest stable Next.js version (check with Context7).
2. Add Prettier (with prettier-plugin-tailwindcss), and npm scripts: dev, build, start, lint, typecheck (tsc --noEmit), format.
3. Folder structure:
   src/app/            routes
   src/components/ui/        reusable UI (buttons, cards, inputs)
   src/components/sections/  page sections
   src/components/motion/    animation helpers
   src/lib/            utilities, supabase, resend, analytics, validation
   src/content/        all site copy and data as typed TS files (services, industries, case studies, FAQs, packages)
   public/brand/       logo files
   docs/               design-dna.md, client-summary.md, brief.md, progress.md, qa-report.md
4. Copy the website logo files from docs/brand/ into public/brand/: all digifi-*.svg files, favicon.svg, favicon-16.png, favicon-32.png, apple-touch-icon-180.png, icon-512.png.
5. Create .env.example listing every environment variable the project will need (Supabase URL, anon key, service role key; Resend API key; Turnstile site key and secret; GTM ID; GA4 ID; Clarity ID; Meta Pixel ID and CAPI token; Google Maps embed key; Sentry DSN; SITE_URL=https://www.digifi.in; LEAD_ALERT_EMAIL=hello@digifi.in; WHATSAPP_NUMBER=918892834327). Create .env.local from it (empty values). Make sure .env.local is in .gitignore.
6. Initialise git, first commit, and tell me the command to push to a new private GitHub repo named digifi-website.
7. Write CLAUDE.md at the project root containing:
   - Project summary (DIGIFI agency website, goal: Free Digital Growth Assessment bookings and WhatsApp chats)
   - Stack and versions
   - Commands
   - Folder rules (above)
   - Coding standards: TypeScript strict, server components by default, "use client" only where interaction is needed, small focused components, no duplicated code, typed props, Zod validation for all form input and external data, no secrets in client code, all copy in src/content (never hard-coded inside components), accessible markup (real buttons, links, labels)
   - Design rule: ALWAYS read docs/design-dna.md and docs/brief.md before any UI work; use only the design tokens; follow the banned patterns list
   - Content rule: never invent facts, numbers, testimonials, client logos or reviews; use [TBD: ...] placeholders
   - Installed skills and MCP servers, and which stages use each
   - Definition of done for every stage: lint, typecheck and build pass; docs/progress.md updated; git commit

CONSTRAINTS
- Do not install UI kits or component libraries (no shadcn, MUI, Chakra). We build our own components from the design tokens.
- Do not add any animation code yet.

ACCEPTANCE CRITERIA
- [ ] npm run dev shows the default page without errors
- [ ] npm run lint, npm run typecheck and npm run build all pass
- [ ] Folder structure, .env.example and CLAUDE.md exist as described
- [ ] public/brand/ contains the logo files

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Create docs/progress.md with a checklist of Stages 0–19 and tick Stage 0. Commit: "chore: project setup and CLAUDE.md".
```

---

## Stage 1: design.md and design tokens

**Run after:** Stage 0 · **What I need ready:** nothing

```text
GOAL
Turn the approved Design DNA into the project's design system: docs/design.md plus working design tokens.

SKILLS & TOOLS
frontend-design skill (use it to sharpen the visual direction, but the approved Design DNA always wins), Context7 for Tailwind CSS and next/font docs.

READ FIRST
docs/design-dna.md (the approved, final design decisions), docs/client-summary.md

TASKS
1. Write docs/design.md as the single design reference for this project. Include, from the Design DNA: concept and mood; logo usage (which file where, clear space, never recolor or stretch); the 10 design axes; all color tokens with hex values and the color rules (two action colors only: blue-600 for every CTA, WhatsApp green #25D366 for WhatsApp only with navy text; lime #C6F432 for data only); contrast table; typography scale; spacing, radius, shadow; motion tokens and motion rules; premium quality markers; banned patterns; homepage section order. Add a short "How to apply" section with do/don't examples.
2. Implement the tokens:
   - CSS variables in src/app/globals.css for every color token
   - Tailwind theme extension that maps to those variables (colors, font families, radius, shadows, spacing where useful)
   - Fonts with next/font/google: Bricolage Grotesque (weights 400, 500, 600, 700, 800; use the optical size axis if available) and Geist Mono (500). Expose as CSS variables --font-sans and --font-mono. Use font-display: swap.
   - Utility classes or components for: section container (max-width 1200px, 12-column grid, 16px mobile gutters), section padding (64px mobile, 112px desktop), eyebrow label, metric number (Geist Mono)
3. Remove the default Next.js page content and styles.

CONSTRAINTS
- Only colors from the token list. No #3B82F6 or any default Tailwind palette color in the UI.
- No gradients (except the single soft radial glow allowed in the hero).

ACCEPTANCE CRITERIA
- [ ] docs/design.md exists and matches the Design DNA exactly
- [ ] Tokens available as CSS variables and Tailwind classes
- [ ] Both fonts load via next/font with no layout shift
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: design tokens and design.md".
```

---

## Stage 2: brief.md (page-by-page plan and content)

**Run after:** Stage 1 · **What I need ready:** nothing (content is drafted for your approval)

```text
GOAL
Write docs/brief.md: the complete page-by-page plan and draft copy for the DIGIFI website, plus typed content files the pages will read from.

SKILLS & TOOLS
None required. Write like a senior conversion copywriter for local businesses in Tamil Nadu: plain English, short sentences, confident, friendly, direct. No jargon, no hype words ("leverage", "unlock", "seamless", "revolutionary").

READ FIRST
docs/client-summary.md, docs/design.md

CORE CONVERSION PRINCIPLE (apply to every section)
Each section answers one of: What does DIGIFI do? Why should I trust DIGIFI? What results can DIGIFI create? What should I do next? Primary CTA everywhere: "Book a free Growth Assessment" (blue). Secondary: "Chat on WhatsApp" (WhatsApp green).

TASKS
1. docs/brief.md with:
   - Business summary, goals and KPIs (5–10 qualified leads/month), audience (local business owners; main fear: "Will I actually get results?")
   - Sitemap and URLs:
     /                         Home
     /services/meta-ads        Meta Ads
     /services/google-business-profile   Google Business Profile
     /services/whatsapp-marketing        WhatsApp Marketing
     /services/website-design  Website Design (secondary goal: website enquiries)
     /results                  Results / case studies
     /industries               Industries
     /growth-assessment        Free Growth Assessment (main conversion page, includes the Digital Health Check quiz)
     /about                    About
     /contact                  Contact
     /privacy-policy, /terms   Legal
     /lp/[slug]                Ad landing pages (template, noindex)
     /dashboard                Lead dashboard (private, noindex)
   - For every page: purpose, section list in order, the question each section answers, CTA placement, SEO title and meta description draft, primary keyword
   - Homepage section order exactly as in docs/design.md
   - Conversion paths: every route to the assessment form and to WhatsApp
   - Lead routing: email alerts to hello@digifi.in; WhatsApp chats to +91 88928 34327; all leads saved in Supabase and visible in /dashboard
   - SEO targets: digital marketing agency Dindigul / Madurai / Trichy, Meta ads agency, Google Business Profile management, WhatsApp marketing, website design Dindigul
   - Full placeholder list (below)
2. Draft all site copy into typed content files in src/content/: site.ts (name, tagline "innovate. impact. inspire.", contact details, social links [TBD]), services.ts, industries.ts, caseStudies.ts, packages.ts, faqs.ts, quiz.ts, about.ts, home.ts.

FACTS YOU MAY USE (and nothing beyond them)
- DIGIFI, digital marketing agency in Dindigul, Tamil Nadu, serving the Dindigul–Madurai–Trichy corridor
- 3 years in business; 35+ clients served; 10+ industries; 15+ years of combined IT and marketing experience
- Services: Meta Ads, Google Business Profile, WhatsApp Marketing, Website Design
- Packages: Local Starter, Local Growth, Local Dominance, shown as "Starting from ₹[TBD]/month"
- USP: local market expertise, Tamil-friendly communication, industry knowledge, AI-powered execution, transparent reporting
- Phone/WhatsApp +91 88928 34327; email hello@digifi.in; expo landing page expo.digifi.in stays separate
- Website portfolio: Vision Plywoods, Wave Power Tech (live sites)
- Industries (6 groups) and clients:
  1. Education & Coaching: Mukilam Academy, Vanji Academy, Dindigul School of TNPSC, Tamil Info Technology, London Kids
  2. Construction & Real Estate: Raj Shree Builders, Sanya Builders, SRK Promoters, Hi Tech Promoters, Star Promoters
  3. Retail & Lifestyle: Aishwaryam Jewellers, Isha Boutique, Royal Oak Furniture
  4. Manufacturing & B2B: Vision Plywoods, Wave Power Tech
  5. Local Services: Poetic Tales Studio, Kuttyz Pixel Studio, U Clean Laundry
  6. Automotive & EV: Murugu Motors
- Client names may be shown as text; client LOGOS only where permission is confirmed [TBD]

FAQ DRAFTS (rewrite naturally; keep [confirm] markers visible in the content file until I confirm)
How soon will I see results? · What ad budget do I need? [confirm minimum] · Do I have to sign a long contract? [confirm terms] · How will I know it's working? (monthly report in plain language) · Do you work with businesses like mine? (yes, 10+ industries) · Can you talk to me in Tamil? (yes) · Do you work outside Dindigul? [confirm service area] · What happens in the free Growth Assessment? · Who owns my ad account and page? [confirm: recommended "You do, always"]

DIGITAL HEALTH CHECK QUIZ (draft in quiz.ts)
6 multiple-choice questions covering: Google Business Profile status, reviews, social/ads activity, WhatsApp response time, website status, how they track enquiries. Score 0–100 with three result bands (each with a short, honest recommendation and the CTA to book the full assessment). No fake benchmarks or statistics.

CASE STUDIES
Create the structure for 2–4 case studies (client, industry, challenge, what DIGIFI did, results as numbers with period, screenshot path). Fill every number with [TBD: real figure]. Never invent results.

ACCEPTANCE CRITERIA
- [ ] docs/brief.md covers every page and section
- [ ] All copy lives in typed src/content files
- [ ] No invented numbers, testimonials or logos; every unknown is [TBD: ...]
- [ ] Typecheck passes

VERIFY
npm run lint && npm run typecheck

FINISH
List all [TBD] and [confirm] items at the end of docs/brief.md. Update docs/progress.md. Commit: "docs: brief and draft content".
```

**Your review point:** read `docs/brief.md` and the content files. Edit wording you don't like now; it's much cheaper than after the pages are built.

---

## Stage 3: Foundation, layout, and rendering strategy

**Run after:** Stage 2 · **What I need ready:** nothing

```text
GOAL
Build the site shell: root layout, header, footer, mobile navigation, sticky mobile CTA bar, and the rendering strategy for every route.

SKILLS & TOOLS
Vercel react-best-practices and composition-patterns skills; frontend-design skill for the header and footer; Next.js DevTools MCP to check routes and runtime errors; Context7 for App Router docs. Fallback if an MCP is unavailable: run the dev server and check the browser console manually.

READ FIRST
CLAUDE.md, docs/design.md, docs/brief.md, src/content/site.ts

TASKS
1. Root layout: fonts, metadata base (https://www.digifi.in), lang="en", skip-to-content link, favicon set from public/brand (favicon.svg, favicon-32.png, apple-touch-icon-180.png), theme-color #0A1340.
2. Header (sticky, navy #0A1340 background on scroll, transparent over the dark hero at the top):
   - Logo: public/brand/digifi-wordmark-reversed.svg (white letters, blue rising dots) on navy; use the wordmark WITHOUT the symbol tile
   - Nav: Services (dropdown with 4 services), Results, Industries, About, Contact
   - Primary CTA button: "Free Growth Assessment" (blue-600, pill)
   - Thin scroll progress bar at the very top in blue-600
3. Mobile navigation: full-screen navy menu, large tap targets (min 44px), CTA buttons at the bottom; close on route change and Escape; focus trapped while open.
4. Sticky mobile CTA bar (below 768px only): two buttons side by side: "Free Assessment" (blue-600) and "WhatsApp" (#25D366 with navy text and WhatsApp icon). Hide it while the mobile menu is open.
5. Footer (navy-950 #060A24): reversed wordmark + tagline, short description, service links, company links, contact (phone, email, WhatsApp), location "Dindigul, Tamil Nadu", social links [TBD], legal links, copyright with current year.
6. Placeholder pages for every route in the sitemap with correct titles, so navigation works end to end.
7. Rendering strategy (document it in docs/brief.md):
   - Static (SSG) for all marketing pages
   - ISR only where data changes (results/case studies if they move to Supabase later)
   - Dynamic and noindex: /dashboard
   - Server components by default; client components only for menu, quiz, forms, animations
8. Custom 404 page in the brand style with links back to Home and the assessment.

CONSTRAINTS
- No animation libraries yet (simple CSS transitions for menu and header only).
- Header and footer copy comes from src/content.

ACCEPTANCE CRITERIA
- [ ] Every sitemap URL loads with header and footer
- [ ] Mobile menu works with keyboard and touch; sticky CTA bar shows only on mobile
- [ ] WhatsApp button opens https://wa.me/918892834327 with a pre-filled message: "Hi DIGIFI, I'd like to know how you can help my business grow."
- [ ] No console errors (check with Next.js DevTools MCP)
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: layout, header, footer, navigation".
```

---

## Stage 4: Design system components and animation utilities

**Run after:** Stage 3 · **What I need ready:** nothing

```text
GOAL
Build every reusable UI component and the animation utilities, and show them on a private /styleguide page.

SKILLS & TOOLS
frontend-design skill; GSAP skills: gsap-core, gsap-react, gsap-scrolltrigger, gsap-plugins; Context7 for Motion (package "motion", import from "motion/react"); Vercel web-design-guidelines skill to review the components at the end.

READ FIRST
CLAUDE.md, docs/design.md

TASKS
1. UI components in src/components/ui (typed props, accessible, all states: default, hover, focus-visible ring in blue-600, active, disabled, loading):
   - Button: variants primary (blue-600, white text), whatsapp (#25D366, navy text, WhatsApp icon), secondary (outline), ghost; sizes; works as link or button
   - Card (light and dark versions, 20px radius), BentoGrid and BentoCard
   - SectionHeading (eyebrow + H2 + intro), Eyebrow
   - IconTile (Lucide icon in a 40px rounded tile, blue-50 tint on light, navy-800 on dark)
   - MetricNumber (Geist Mono) and MetricBadge ("+X%": lime-50 tint with navy text on light; lime #C6F432 on dark)
   - RisingDots (the logo motif as a small decorative element: three rising rounded squares; used for bullets, step indicators and dividers)
   - Accordion (FAQ), Tabs, Input, Textarea, Select, Checkbox, RadioGroup, FormField with label, hint and error
   - BrowserFrame (for website portfolio screenshots)
   - Badge, Chip (pill)
2. Icons: install lucide-react; stroke width 1.75; sizes 20–24px.
3. Animation utilities in src/components/motion:
   - GSAP setup with ScrollTrigger registered once, using the useGSAP hook with proper cleanup
   - Reveal (fade + 24px rise), StaggerGroup (80ms stagger for card grids)
   - CountUp (Geist Mono number counting from 0 to target once in view, 1.4s)
   - DrawLine (SVG chart line/bar drawing on scroll, 1.2s)
   - Motion variants for hover lift (2px), tap, accordion, page transitions
   - useReducedMotion fallback everywhere: final state instantly, no movement
4. /styleguide page (noindex, excluded from sitemap) showing every component, color token, type style and animation.

CONSTRAINTS
- Animate only transform, opacity and SVG stroke.
- GSAP and Motion never animate the same property on the same element.
- Lime appears only in MetricBadge and data visuals.

ACCEPTANCE CRITERIA
- [ ] All components render on /styleguide in light and dark section contexts
- [ ] Keyboard navigation and visible focus on every interactive component
- [ ] With "reduce motion" turned on in the OS, nothing moves and counters show final values
- [ ] web-design-guidelines review run; issues fixed
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: design system components and motion utilities".
```

---

## Stage 5: Homepage (premium)

**Run after:** Stage 4 · **What I need ready:** ideally your case study numbers and client logo permissions (otherwise placeholders are used)

```text
GOAL
Build the DIGIFI homepage: a premium, results-first "growth dashboard" page that makes a local business owner think within 5 seconds: "These are experts who understand businesses like mine and can deliver results."

SKILLS & TOOLS
frontend-design skill; GSAP skills: gsap-scrolltrigger, gsap-timeline, gsap-react, gsap-performance; Chrome DevTools MCP to screenshot desktop (1440px) and mobile (390px), check console errors and record a performance trace; Vercel web-design-guidelines skill for a final review. Fallback: manual browser checks.

READ FIRST
CLAUDE.md, docs/design.md, docs/brief.md, src/content/home.ts and related content files

SECTIONS (in this order; all copy from src/content)
1. HERO (dark, navy-950 with one soft radial blue glow behind the report card)
   - Left: eyebrow "Digital marketing for local businesses · Dindigul · Madurai · Trichy"; H1 (from brief); one-line subheading; two CTAs: "Book a free Growth Assessment" (blue) and "Chat on WhatsApp" (WhatsApp green, navy text); a trust line: "35+ local businesses · 10+ industries · 15+ years of combined IT and marketing experience"
   - Right: the "monthly report" card (navy-800, 20px radius): title "Monthly growth report"; three metrics (Enquiries, Cost per lead, Google ranking) with Geist Mono numbers and lime "+%" badges; a small bar chart of three rising bars echoing the logo's rising dots, drawn with SVG. Use real numbers from caseStudies.ts if present; otherwise label the card clearly "Sample report" and use neutral placeholder values marked [TBD].
   - Hero headline renders immediately (it is the LCP element, never animated in). The report card animates after load: card rises, counters tick up, bars grow.
2. CLIENT STRIP: "Trusted by 35+ local businesses across 10+ industries" with client names (or permitted logos) in a slow, pausable marquee; respects reduced motion (static wrap instead).
3. SERVICES BENTO (light): 4 services in a bento grid (one large card for Meta Ads, others sized by importance), each with icon tile, one outcome line, 2–3 bullets with RisingDots markers, link to the service page. Website Design card mentions the portfolio.
4. THE 4-STEP JOURNEY (light, pinned on desktop): "How DIGIFI grows your business": 1 Get found (Google Business Profile) → 2 Get enquiries (Meta Ads) → 3 Follow up fast (WhatsApp Marketing) → 4 Build trust (Website). Desktop: section pins and steps advance on scroll with a rising-dots progress indicator. Below 768px: no pinning, a simple vertical stepper with fade-ins.
5. RESULTS (light): 2–4 case study cards: client, industry, challenge in one line, 2–3 result metrics (Geist Mono, CountUp, lime badges on the "up" numbers), "See all results" link. Placeholders clearly marked [TBD] until real numbers arrive.
6. "WHAT YOUR MONTHLY REPORT LOOKS LIKE" (dark): a larger sample report showing leads by source, cost per lead trend, calls and WhatsApp clicks, ranking. Clearly labelled "Sample report". Copy explains transparent, plain-language monthly reporting.
7. INDUSTRIES (light): 6 cards (from industries.ts) with icon, industry name and client names. CTA "Don't see your industry? Let's talk."
8. DIGITAL HEALTH CHECK TEASER: "How strong is your business online? Find out in 60 seconds." Button to /growth-assessment#health-check.
9. WHY DIGIFI (light): local presence across the corridor, Tamil-friendly communication, industry knowledge, AI-powered execution (faster turnaround), transparent reporting, 15+ years of combined IT and marketing experience.
10. FAQ (light): accordion from faqs.ts (show [confirm] items only after I confirm them; until then hide those questions).
11. FINAL CTA BAND (dark): strong closing line, both CTAs, reassurance line ("No obligation. Practical recommendations, not a generic report.").

DESIGN AND MOTION RULES
- Exactly two action colors: blue-600 for every CTA, WhatsApp green only on WhatsApp buttons. Never place a lime element next to a WhatsApp button.
- Lime only in data: badges, chart bars, "up" numbers.
- Section rhythm: dark hero → light → light → light → dark → light → light → light → light → dark.
- Moderate motion: Reveal and StaggerGroup on section content, CountUp on metrics, DrawLine on charts, hover lift on cards. Nothing loops except the client marquee.
- next/image for all images with correct sizes; no layout shift.

ACCEPTANCE CRITERIA
- [ ] All 11 sections built in order, all copy from src/content
- [ ] Looks premium and uncluttered at 1440px, 1024px, 768px and 390px (screenshots via Chrome DevTools MCP)
- [ ] Hero headline visible immediately; Largest Contentful Paint under 2.5s in a performance trace
- [ ] Reduced motion: no movement, final values shown
- [ ] No console errors; no invented numbers
- [ ] web-design-guidelines review run and issues fixed

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Save desktop and mobile screenshots to docs/screenshots/. Update docs/progress.md. Commit: "feat: homepage".
```

**Your review point:** this is the most important stage. Spend time on it: check the homepage on your phone, read every line, and ask for changes until you're proud of it. The other pages will follow its style.

---

## Stage 6: Service pages, Results, Industries, About

**Run after:** Stage 5 (approved) · **What I need ready:** case study details if available; team photos if available

```text
GOAL
Build all inner pages so they feel like the homepage's family but never repeat it section for section.

SKILLS & TOOLS
frontend-design skill; GSAP skills (gsap-react, gsap-scrolltrigger); webapp-testing skill to click through every page; Chrome DevTools MCP for mobile screenshots and console errors.

READ FIRST
CLAUDE.md, docs/design.md, docs/brief.md, src/content/*

TASKS
1. Service page template, used by 4 pages (/services/meta-ads, /services/google-business-profile, /services/whatsapp-marketing, /services/website-design). Sections: dark hero (service promise + both CTAs) → the problem local businesses face → what DIGIFI does (step list with RisingDots markers) → what's included → results for this service (relevant case studies) → who it's for (industries) → package "starting from" pricing for relevant packages → service-specific FAQs → final CTA band.
   - Website Design page adds: portfolio with Vision Plywoods and Wave Power Tech in BrowserFrame (screenshots [TBD], links to the live sites), the build process, and a CTA "Get a website quote" that opens the assessment form with service preset to Website Design.
2. /results: intro, filter by service (Meta Ads, Google Business Profile, WhatsApp, Website), all case study cards, each expandable into challenge → what we did → results; honest note: "Results vary by business, budget and market." Placeholders until real numbers arrive.
3. /industries: the 6 industry groups as large cards (problem, how DIGIFI helps, client names), plus "Don't see your industry?" CTA.
4. /about: DIGIFI story (founded 3 years ago in Dindigul), approach (local, transparent, AI-powered), numbers (35+ clients, 10+ industries, 15+ years combined experience), team section with photos [TBD] (no stock photos; until photos arrive, use initials avatars), values, CTA.
5. Packages: a reusable PricingCards component (Local Starter, Local Growth, Local Dominance; "Starting from ₹[TBD]/month"; what's included [TBD where unknown]; CTA to the assessment). Use it on service pages and the assessment page.
6. Internal links between related services, industries and results.

CONSTRAINTS
- Same tokens, components and motion rules as the homepage; vary layouts so pages don't feel copy-pasted.
- No invented results, prices, team members or testimonials.

ACCEPTANCE CRITERIA
- [ ] All inner pages complete and linked
- [ ] Every page has both CTAs visible without scrolling far (hero + final band + sticky mobile bar)
- [ ] webapp-testing click-through passes with no broken links
- [ ] Mobile screenshots look clean at 390px
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: service, results, industries and about pages".
```

---

## Stage 7: Trust pages and trust elements

**Run after:** Stage 6 · **What I need ready:** your registered business name and address for the legal pages

```text
GOAL
Add the legal pages and strengthen trust signals across the site.

SKILLS & TOOLS
frontend-design skill; Vercel web-design-guidelines skill for readability.

READ FIRST
CLAUDE.md, docs/design.md, docs/brief.md

TASKS
1. /privacy-policy: written for an Indian business under the Digital Personal Data Protection Act 2023: what data the forms and quiz collect (name, business name, WhatsApp number, email, city, business category, answers), why, where it is stored (Supabase), who receives it (DIGIFI only), retention period [TBD], analytics and cookies used (GA4, Clarity, Meta Pixel), how to request deletion (hello@digifi.in), grievance contact.
2. /terms: website terms of use. Add a short "No guaranteed results" clause: marketing results depend on budget, market and business factors.
3. Mark both pages at the top (in a code comment and in docs/brief.md, not visibly): "Draft — to be reviewed by a legal professional before launch."
4. Readable legal layout: max 720px text column, table of contents, last-updated date.
5. Trust elements across the site:
   - Contact details (phone, WhatsApp, email, "Dindigul, Tamil Nadu") in the footer and on /contact
   - "Your data stays private. No spam calls." line under every form
   - Client names strip reused on service pages
   - Google rating badge component prepared but hidden until the Google Business Profile exists and has reviews [TBD]
   - Testimonial component prepared but hidden until real testimonials are provided [TBD]

CONSTRAINTS
- No fake reviews, testimonials, awards, certifications or media mentions.

ACCEPTANCE CRITERIA
- [ ] Both legal pages live and linked in the footer
- [ ] Trust lines visible near every form
- [ ] Hidden components clearly documented in docs/brief.md with what's needed to switch them on
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: trust pages and trust elements".
```

---

## Stage 8: Supabase setup

**Run after:** Stage 7 · **What I need ready:** Supabase project created (region Mumbai), project URL, anon key and service role key in .env.local

```text
GOAL
Set up the database for leads and quiz results, secured with Row Level Security, plus an admin login for the lead dashboard.

SKILLS & TOOLS
supabase and postgres-best-practices skills; Supabase MCP to apply migrations, check RLS policies and generate TypeScript types; security-guidance plugin. Fallback: Supabase CLI and the SQL editor.

READ FIRST
CLAUDE.md, docs/brief.md

TASKS
1. SQL migrations (in supabase/migrations/):
   - leads: id (uuid), created_at, name, business_name, whatsapp (E.164, +91…), email (optional), city, business_category, services_interested (text[]), message, source_page, form_type ('assessment' | 'contact' | 'website_quote' | 'landing_page'), quiz_score (nullable), utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, fbclid, referrer, consent (boolean, required true), status ('new' | 'contacted' | 'qualified' | 'won' | 'lost', default 'new'), notes
   - quiz_results: id, created_at, answers (jsonb), score, band, lead_id (nullable fk to leads)
   - indexes on created_at, status, form_type
2. Row Level Security ON for both tables:
   - No public read access at all
   - Inserts happen only from server code using the service role key (never exposed to the browser)
   - Authenticated admin users (allow-list in an admins table, initially hello@digifi.in) can select and update
3. Supabase Auth: email magic-link sign-in for the dashboard; disable public sign-ups.
4. Typed helpers in src/lib/supabase: server client (service role, server-only import guard), browser/session client for the dashboard, generated database types.
5. Data retention note in docs/brief.md [TBD period].

CONSTRAINTS
- The service role key is used only in server files (add the "server-only" package).
- No personal data in logs.

ACCEPTANCE CRITERIA
- [ ] Migrations applied; tables and policies visible in Supabase
- [ ] Supabase MCP check: anonymous select on leads returns nothing; anonymous insert is rejected
- [ ] Types generated and used
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: supabase schema, RLS and auth".
```

---

## Stage 9: Forms, quiz, and Resend email notifications

**Run after:** Stage 8 · **What I need ready:** Resend account; DNS records for mail.digifi.in added in GoDaddy (Claude Code will list them); Cloudflare Turnstile site and secret keys

```text
GOAL
Make every form and the Digital Health Check quiz work end to end: validate, protect from spam, save to Supabase, email alerts to DIGIFI and a friendly auto-reply to the visitor.

SKILLS & TOOLS
resend, react-email and email-best-practices skills; Resend MCP to verify the domain and send test emails; supabase skill; security-guidance plugin; Context7 for Server Actions and Cloudflare Turnstile docs.

READ FIRST
CLAUDE.md, docs/design.md, docs/brief.md, src/content/quiz.ts

TASKS
1. Resend domain: sending domain mail.digifi.in (a subdomain, so the existing hello@digifi.in mailbox hosted at GoDaddy is NOT affected). List the exact DNS records (SPF, DKIM, DMARC, return path) for me to add in GoDaddy, then verify with the Resend MCP. Sender: "DIGIFI <hello@mail.digifi.in>", reply-to hello@digifi.in.
2. Forms (Server Actions + Zod, shared FormField components):
   - Growth Assessment form on /growth-assessment: name*, business name*, WhatsApp number* (+91 prefix, 10 digits), email (optional), city*, business category* (select from the industries list + "Other"), services interested (checkboxes), current marketing (short select), message (optional), consent checkbox* ("I agree to be contacted by DIGIFI about my enquiry" + privacy policy link)
   - Contact form on /contact: name, WhatsApp, email, message, consent
   - Website quote: the assessment form with service preset to Website Design
3. Spam protection: Cloudflare Turnstile (invisible/managed), honeypot field, and rate limiting (max 5 submissions per IP per hour).
4. Capture source data: UTM parameters, gclid, fbclid, referrer and landing page (store first-touch in a cookie for 30 days; read on submit).
5. On submit: save to Supabase first; then send emails. If email sending fails, the lead is still saved and the error is logged; the visitor still sees success.
6. React Email templates in the DIGIFI style (navy header with the reversed wordmark image hosted on the site, clean body):
   - Lead alert to hello@digifi.in: subject "New lead: {business name} ({city})", all fields, source and UTMs, quiz score if any, buttons: "Open dashboard" and "WhatsApp them" (wa.me link to their number)
   - Auto-reply to the visitor (only if email given): thanks, what happens next (DIGIFI reviews their online presence and contacts them on WhatsApp within [TBD: e.g. 1 working day]), WhatsApp button
7. Digital Health Check quiz on /growth-assessment#health-check: 6 questions, one per step (Motion step transitions, progress shown with RisingDots), instant score with band and recommendations, then the assessment form prefilled with the score. Save quiz_results whether or not they submit the form.
8. Success state: a thank-you panel with next steps and a WhatsApp button; fire the conversion event hook (wired up in Stage 14).

CONSTRAINTS
- No personal or business details in URLs, analytics events or email subject lines beyond business name and city.
- Error messages are friendly and specific ("Enter a 10-digit WhatsApp number").

ACCEPTANCE CRITERIA
- [ ] Resend domain verified (MCP check)
- [ ] Test submission from each form appears in Supabase with source data
- [ ] Lead alert arrives at hello@digifi.in in the inbox (not spam); auto-reply arrives at a test address
- [ ] Turnstile, honeypot and rate limit block automated submissions
- [ ] Quiz works on mobile, saves results, and prefills the form
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: forms, quiz and email notifications".
```

---

## Stage 10: Lead dashboard and lead-generation features

**Run after:** Stage 9 · **What I need ready:** nothing

```text
GOAL
Give DIGIFI a private lead dashboard and make every page a lead-capture page.

SKILLS & TOOLS
supabase skill; frontend-design skill; webapp-testing skill to test every CTA at 390px width; security-guidance plugin.

READ FIRST
CLAUDE.md, docs/design.md, docs/brief.md

TASKS
1. /dashboard (noindex, auth required via Supabase magic link; only allow-listed admins):
   - Lead list: newest first, columns name, business, category, city, form type, source, quiz score, status, date
   - Filters: status, form type, source, date range; search by name or business
   - Lead detail drawer: all fields, notes, status change, "WhatsApp" button (wa.me link with a friendly pre-filled message), "Call" button
   - Summary tiles: leads this month, by source, by status (lime only on "up" numbers)
   - Export to CSV
2. WhatsApp everywhere: floating WhatsApp button on desktop (bottom right, WhatsApp green, navy icon, one gentle pulse after 8 seconds, never covers content), the mobile sticky bar from Stage 3, and per-page pre-filled messages (e.g. on the Meta Ads page: "Hi DIGIFI, I'm interested in Meta Ads for my business.").
3. Click-to-call links (tel:+918892834327) on contact and footer.
4. Ad landing page template /lp/[slug]: one focused page per ad campaign, defined in src/content/landingPages.ts (headline, offer, service, proof block, short form, WhatsApp). No header navigation (logo only), noindex, form_type 'landing_page' with the slug stored. Create one example landing page for Meta Ads.
5. Conversion event hooks (a single trackEvent function) called on: form submit success, quiz complete, WhatsApp click, call click, assessment CTA click. Wired to analytics in Stage 14.

CONSTRAINTS
- The dashboard never exposes the service role key; all queries go through the authenticated session with RLS.

ACCEPTANCE CRITERIA
- [ ] Only allow-listed admins can open /dashboard; others are redirected
- [ ] Status changes and notes save; CSV export works
- [ ] Every CTA works on mobile; floating button never overlaps the sticky bar
- [ ] Example landing page works end to end and stores its slug
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: lead dashboard, WhatsApp, landing pages".
```

---

## Stage 11: Google Maps integration (DEFERRED: run next month, after the office move)

**Skip this stage at launch.** Run it after you move into the new office and create the Google Business Profile there. Go straight from Stage 10 to Stage 12.

**Run after:** the office move and Google Business Profile creation · **What I need ready:** Google Maps Embed API key (restricted to digifi.in); the new office address exactly as it appears on the Google Business Profile

```text
GOAL
Add a fast, privacy-friendly map and directions to the contact page.

SKILLS & TOOLS
Context7 for the Google Maps Embed API; Chrome DevTools MCP to confirm the map loads only when needed.

READ FIRST
CLAUDE.md, docs/design.md, src/content/site.ts

TASKS
1. On /contact: a static map placeholder (styled card with address and a "Load map" button, or load automatically when scrolled into view) that then loads the Google Maps Embed iframe with loading="lazy" and a descriptive title.
2. "Get directions" button (opens Google Maps directions to the office address).
3. Name, address and phone shown exactly as they will appear on the Google Business Profile (NAP consistency) [TBD: exact address].
4. Restrict the key to the domains digifi.in and *.digifi.in plus localhost; document this in docs/brief.md.

CONSTRAINTS
- The map never blocks page load; no Google requests until the map is needed.

ACCEPTANCE CRITERIA
- [ ] Network panel (Chrome DevTools MCP) shows no Google Maps requests before interaction or scroll
- [ ] Map and directions work on mobile
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: contact map and directions".
```

---

## Stage 12: Google Reviews integration (prepared, switched on later)

**Run after:** Stage 10 (Stage 11 is deferred) · **What I need ready:** nothing now; later, your Google Business Profile Place ID and a Places API key

```text
GOAL
Prepare a Google Reviews section that can be switched on as soon as DIGIFI's Google Business Profile is live and has reviews.

SKILLS & TOOLS
Context7 for Google Places API (New) docs; Vercel react-best-practices skill for caching; security-guidance plugin for the API key.

READ FIRST
CLAUDE.md, docs/design.md

TASKS
1. Server-side fetch of place rating, review count and recent reviews via Places API (New), cached with revalidation every 24 hours.
2. Reviews component: overall rating, review count, 3–6 recent reviews, required Google attribution, "Read all reviews" and "Write a review" links. Matches the design system.
3. Feature flag: NEXT_PUBLIC_SHOW_GOOGLE_REVIEWS=false by default. When false, nothing renders and no API calls are made.
4. Graceful failure: if the API fails or returns no reviews, the section hides itself.
5. Document in docs/brief.md exactly how to switch it on (Place ID, key, flag).

CONSTRAINTS
- Never fabricate, edit or cherry-pick reviews misleadingly. Show what Google returns.
- API key server-side only, restricted to the Places API.

ACCEPTANCE CRITERIA
- [ ] With the flag off: no section, no API calls
- [ ] With a test Place ID: section renders correctly with attribution
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: google reviews (feature-flagged)".
```

---

## Stage 13: Complete SEO

**Run after:** Stage 12 · **What I need ready:** nothing (the old site must still be live, since we read its pages for redirects)

```text
GOAL
Make every page fully optimized for search, especially local searches across Dindigul, Madurai and Trichy, and protect existing Google rankings when the old site is replaced.

SKILLS & TOOLS
Context7 for the Next.js Metadata API, sitemap, robots and OG image docs; Chrome DevTools MCP to inspect rendered head tags; Google Rich Results Test for JSON-LD (give me the URLs to test after deploy).

READ FIRST
CLAUDE.md, docs/brief.md (SEO titles, descriptions, keywords)

TASKS
1. Canonical domain: https://www.digifi.in (the current site uses www, so this preserves existing links). The apex digifi.in redirects to www (set in Stage 18).
2. Metadata for every page: unique title (under 60 characters, "| DIGIFI" suffix), meta description (under 155 characters, includes a CTA), canonical URL, Open Graph and Twitter tags.
3. Dynamic OG images with next/og in the brand style: navy background, wordmark, page title, three rising dots motif.
4. src/app/sitemap.ts (all public pages; excludes /dashboard, /styleguide and /lp/*) and src/app/robots.ts (disallow /dashboard, /styleguide, /lp/; link the sitemap).
5. JSON-LD structured data:
   - Organization + ProfessionalService on Home: name DIGIFI, url, logo, telephone +91-8892834327, email, address with only addressLocality "Dindigul", addressRegion "Tamil Nadu", addressCountry "IN" (no street address until the office move), areaServed Dindigul, Madurai, Trichy, sameAs [TBD social links]. Keep the address in one place (src/content/site.ts) so it can be completed next month
   - Service on each service page
   - FAQPage on pages with FAQs (only confirmed FAQs)
   - BreadcrumbList on inner pages
6. Headings: exactly one H1 per page, logical H2/H3 order; descriptive alt text for every image; descriptive link text.
7. Internal linking: services ↔ industries ↔ results ↔ assessment.
8. Redirects from the old site: fetch the current www.digifi.in sitemap or crawl its pages NOW (before the domain moves), list every URL in docs/redirects.md, map each to the best new URL, and add permanent (308) redirects in next.config. Anything without a match goes to the closest service page or Home.
9. Steps for me (write in docs/brief.md): verify www.digifi.in in Google Search Console (DNS TXT record in GoDaddy) and Bing Webmaster Tools, submit the sitemap after launch.

ACCEPTANCE CRITERIA
- [ ] Every page has unique title, description, canonical and OG image (check rendered head with Chrome DevTools MCP)
- [ ] sitemap.xml and robots.txt correct
- [ ] JSON-LD valid (no errors in a schema validator)
- [ ] docs/redirects.md lists every old URL with its redirect; redirects work locally
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: complete SEO, structured data and redirects".
```

---

## Stage 14: Analytics, tracking, and consent

**Run after:** Stage 13 · **What I need ready:** GTM container ID, GA4 measurement ID, Clarity project ID, Meta Pixel ID and Conversions API access token

```text
GOAL
Measure every lead and its source accurately, respecting visitor consent and privacy.

SKILLS & TOOLS
Context7 for Google Tag Manager, GA4, Microsoft Clarity and Meta Conversions API docs; Chrome DevTools MCP to confirm tags fire (network requests) and that nothing fires before consent.

READ FIRST
CLAUDE.md, docs/brief.md, src/lib (trackEvent from Stage 10)

TASKS
1. Consent banner (brand style, small, bottom of screen, not blocking content): "Accept" and "Only essential" with equal prominence, link to the privacy policy. Store the choice. Use Google Consent Mode v2 defaults (denied) until accepted.
2. Google Tag Manager loaded with next/script (afterInteractive); GA4 configured through GTM.
3. Microsoft Clarity and Meta Pixel load only after consent.
4. Meta Conversions API from the server on lead submission (event "Lead"), deduplicated with the browser Pixel event using a shared event_id. Hash email and phone as Meta requires; send only after consent.
5. Wire trackEvent to these events (GA4 recommended names where possible):
   - generate_lead (form submit success; parameters: form_type, service, source page)
   - quiz_complete (score band only)
   - whatsapp_click (page)
   - phone_click (page)
   - assessment_cta_click (location on page)
   Mark generate_lead, whatsapp_click and phone_click as conversions in GA4 (write the steps in docs/brief.md).
6. No personal data (names, phone numbers, emails, business names) in any analytics event or URL.
7. Test plan in docs/qa-report.md: GA4 DebugView, Meta Test Events, Clarity live view.

ACCEPTANCE CRITERIA
- [ ] Before consent: no GA4, Clarity or Meta requests (verified in the network panel)
- [ ] After consent: all events fire once per action, with correct parameters
- [ ] Lead event deduplicated between Pixel and Conversions API
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Update docs/progress.md. Commit: "feat: analytics, conversions and consent".
```

---

## Stage 15: Performance and accessibility

**Run after:** Stage 14 · **What I need ready:** nothing

```text
GOAL
Make the site fast on an average Android phone on 4G and usable by everyone.

SKILLS & TOOLS
Chrome DevTools MCP (performance traces with mobile throttling, Core Web Vitals); Lighthouse CI (npx @lhci/cli autorun); gsap-performance and Vercel react-best-practices skills; Vercel web-design-guidelines skill for accessibility; bundle analyzer.

READ FIRST
CLAUDE.md, docs/design.md

TASKS
1. Run Lighthouse (mobile) on every page; target 90+ in Performance, Accessibility, Best Practices and SEO. Save results to docs/qa-report.md.
2. Core Web Vitals: LCP under 2.5s, CLS under 0.1, INP under 200ms in performance traces with mobile throttling.
3. Images: next/image everywhere, correct sizes attribute, AVIF/WebP, priority only on the hero's LCP image (if any).
4. JavaScript: analyze the bundle; load GSAP and ScrollTrigger only on pages and sections that use them (dynamic import); keep the homepage first-load JS as small as possible; no unused dependencies.
5. Third-party scripts (GTM, Clarity, Pixel, Turnstile, Maps) never block rendering.
6. Accessibility (WCAG 2.1 AA): color contrast per docs/design.md (lime never as text on light backgrounds; navy text on WhatsApp green), visible focus states, keyboard access to menus, accordion, quiz, forms and dashboard, form labels and error announcements (aria-live), alt text, reduced-motion support, 44px touch targets, page language set.

ACCEPTANCE CRITERIA
- [ ] Lighthouse mobile 90+ in all four categories on every public page (scores recorded)
- [ ] Core Web Vitals targets met in traces
- [ ] Full keyboard walkthrough passes; no contrast failures
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build && npx @lhci/cli autorun

FINISH
Update docs/progress.md. Commit: "perf: performance and accessibility pass".
```

---

## Stage 16: Security hardening

**Run after:** Stage 15 · **What I need ready:** nothing

```text
GOAL
Close every common security gap before launch.

SKILLS & TOOLS
/security-review command; security-guidance plugin; Supabase MCP to re-check RLS; npm audit.

READ FIRST
CLAUDE.md

TASKS
1. Security headers in next.config: Content-Security-Policy (allow only the domains actually used: GTM, GA4, Clarity, Meta, Turnstile, Google Maps, Supabase, Sentry), Strict-Transport-Security, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy (disable camera, microphone, geolocation).
2. Environment variables audit: no secret in any client bundle (search the build output); only NEXT_PUBLIC_ variables that are safe to expose.
3. Re-check with Supabase MCP: RLS on all tables, anonymous access denied, admin allow-list working.
4. Server Actions: input validation with Zod everywhere, rate limits in place, Turnstile verified server-side.
5. Dashboard: session required on every request, no lead data in the static build.
6. npm audit: fix high and critical issues.
7. Run /security-review and fix everything it reports.

ACCEPTANCE CRITERIA
- [ ] Security headers present (check response headers)
- [ ] No secrets in client bundles
- [ ] /security-review clean or remaining items explained in docs/qa-report.md
- [ ] npm audit: no high or critical issues
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build && npm audit --audit-level=high

FINISH
Update docs/progress.md. Commit: "security: headers, secrets audit and hardening".
```

---

## Stage 17: Complete QA

**Run after:** Stage 16 · **What I need ready:** all [TBD] items replaced if possible (see the placeholder list below)

```text
GOAL
Test everything a visitor or DIGIFI could do, fix every issue, and write a QA report.

SKILLS & TOOLS
Playwright plugin and webapp-testing skill; Chrome DevTools MCP; Lighthouse CI; Resend MCP to confirm email delivery; Vercel web-design-guidelines skill for a final UI audit.

READ FIRST
CLAUDE.md, docs/brief.md, docs/design.md, docs/qa-report.md

TASKS
1. Playwright smoke tests (tests/e2e): homepage loads with no console errors; navigation to every page; assessment form submits (test mode) and shows success; quiz completes; WhatsApp links have the correct number and message; 404 page works; dashboard redirects when signed out.
2. Content check: search the codebase for "[TBD" and "[confirm" and list every remaining item in docs/qa-report.md. Spelling and grammar pass on all copy. Brand names spelled exactly as in docs/client-summary.md.
3. Visual check at 390px, 768px, 1024px and 1440px on every page (Chrome DevTools MCP screenshots saved to docs/screenshots/qa/).
4. Cross-browser: Chrome, Safari (iPhone), Firefox, Edge. List anything to check manually on a real iPhone and a real Android phone.
5. Forms end to end: Supabase row created, lead alert in hello@digifi.in inbox (not spam), auto-reply received, dashboard shows the lead.
6. Links: no broken internal or external links; all redirects from docs/redirects.md work.
7. SEO: titles, descriptions, canonicals, sitemap, robots, structured data.
8. Analytics: events fire correctly after consent, nothing before.
9. Lighthouse mobile scores for every page.
10. Fix everything found, re-test, and write docs/qa-report.md: what was tested, results, fixes, remaining items for me.

ACCEPTANCE CRITERIA
- [ ] All Playwright tests pass
- [ ] No [TBD] left on public pages (or each one listed and approved by me)
- [ ] Every checklist item in docs/qa-report.md passed
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build && npx playwright test

FINISH
Update docs/progress.md. Commit: "test: full QA pass and report".
```

---

## Stage 18: Deployment and go-live

**Run after:** Stage 17 · **What I need ready:** Vercel account; GoDaddy DNS access; all production environment variables

```text
GOAL
Launch www.digifi.in on Vercel with SSL, without breaking the existing email or expo.digifi.in.

SKILLS & TOOLS
Vercel MCP and Vercel CLI; vercel-optimize skill; Resend MCP for a final domain check.

READ FIRST
CLAUDE.md, docs/brief.md, docs/redirects.md

TASKS
1. Link the GitHub repo to a new Vercel project; region closest to India (Mumbai, bom1) if available on the plan.
2. Add all environment variables for Production and Preview (separate Supabase keys if a preview project exists).
3. Deploy to a preview URL; run the Playwright smoke tests against it.
4. Domain: add www.digifi.in (primary) and digifi.in (redirect to www) in Vercel. Give me the exact GoDaddy DNS changes:
   - Only change the records for the root (@) and www
   - DO NOT touch MX records or any email-related TXT records (hello@digifi.in must keep working)
   - DO NOT touch the expo subdomain record
   - Keep the Resend records for mail.digifi.in
   Before I change anything, list the current GoDaddy records I should screenshot as a backup.
5. After DNS changes: confirm SSL is issued, www and apex redirect correctly, old URLs redirect per docs/redirects.md, expo.digifi.in still loads, and a test email to hello@digifi.in still arrives.
6. Submit sitemap in Google Search Console and Bing Webmaster Tools; request indexing for the homepage.
7. Go-live checklist in docs/qa-report.md, all ticked.

ACCEPTANCE CRITERIA
- [ ] https://www.digifi.in live with valid SSL
- [ ] https://digifi.in redirects to www; old URLs redirect
- [ ] expo.digifi.in and hello@digifi.in email unaffected
- [ ] Production form submission tested end to end
- [ ] Sitemap submitted

VERIFY
Production smoke test: npx playwright test against https://www.digifi.in (read-only tests only, no form spam)

FINISH
Update docs/progress.md. Commit: "chore: production launch".
```

---

## Stage 19: Monitoring, maintenance, and handover

**Run after:** Stage 18 · **What I need ready:** Sentry and UptimeRobot accounts

```text
GOAL
Keep the site healthy after launch and make it easy to run month to month.

SKILLS & TOOLS
Sentry MCP; Vercel MCP for deployments and logs; Lighthouse CI for the monthly check.

READ FIRST
CLAUDE.md, docs/qa-report.md

TASKS
1. Sentry: install for Next.js (client, server and edge), source maps uploaded on build, personal data scrubbing on, alerts to hello@digifi.in.
2. Vercel Analytics and Speed Insights enabled.
3. UptimeRobot: monitors for https://www.digifi.in and https://www.digifi.in/growth-assessment (5-minute checks, alerts by email and to +91 88928 34327 via SMS or app if available). Write the setup steps for me.
4. docs/maintenance.md, a monthly checklist: dependency updates (npm outdated, safe minor updates), npm audit, Lighthouse run on key pages, broken link check, test form submission end to end, check Supabase usage and backups, review Sentry errors, review GA4 conversions by source, update case studies and results.
5. docs/how-to.md, a plain-language guide for me: how to read and manage leads in /dashboard, how to add a new ad landing page (edit src/content/landingPages.ts and ask Claude Code), how to add a case study, how to update prices and FAQs, how to switch on Google Reviews, who to contact if something breaks (Vercel, Supabase, Resend dashboards).
6. Monthly lead report template (docs/monthly-report-template.md): leads by source, cost per lead from ads, WhatsApp and call clicks, top pages, quiz completions, conversion rate.

ACCEPTANCE CRITERIA
- [ ] A test error appears in Sentry
- [ ] Uptime monitors active
- [ ] maintenance.md, how-to.md and the report template exist
- [ ] Build passes

VERIFY
npm run lint && npm run typecheck && npm run build

FINISH
Tick every stage in docs/progress.md. Commit: "chore: monitoring and handover docs".
```

---

## Placeholder list: what only you can provide

| # | Item | Needed by | Where it goes |
|---|---|---|---|
| 1 | 2–4 case studies with real numbers and screenshots (Meta Ads results, Google profile rankings) | Stage 5 | caseStudies.ts, hero report card |
| 2 | Client logos + written permission for each client shown | Stage 5 | Client strip, industries |
| 3 | Starting price for Local Starter, Local Growth, Local Dominance, and what each includes | Stage 6 | packages.ts |
| 4 | Team, office or event photos | Stage 6 | About page |
| 5 | FAQ answers: minimum ad budget, contract terms, service area, account ownership | Stage 5 | faqs.ts |
| 6 | Social media links | Stage 3 | Footer, JSON-LD |
| 7 | New office address (as it will appear on Google) | **Next month, after the move** | Contact, map, JSON-LD |
| 8 | Registered business name and data retention period | Stage 7 | Privacy policy, terms |
| 9 | Response-time promise for auto-replies (e.g. "within 1 working day") | Stage 9 | Emails, thank-you panel |
| 10 | Portfolio screenshots of Vision Plywoods and Wave Power Tech | Stage 6 | Website Design page |
| 11 | DIGIFI Google Business Profile, created at the new office | **Next month, after the move** | Reviews section, map, JSON-LD |

## Suggested 7-day timeline (launch Wednesday 14 October)

| Day | Date | Stages | Your parallel work |
|---|---|---|---|
| 1 | Thu 8 Oct | 0, 1, 2 · review brief.md | Collect case study numbers |
| 2 | Fri 9 Oct | 3, 4 | Client logo permissions; decide package prices |
| 3 | Sat 10 Oct | 5 (homepage), review and refine | Team photos; FAQ answers |
| 4 | Sun 11 Oct | 6, 7 | Social links, address, legal details |
| 5 | Mon 12 Oct | 8, 9, 10 | Supabase, Resend, Turnstile accounts; add Resend DNS records |
| 6 | Tue 13 Oct | 12, 13, 14, 15, 16 (Stage 11 deferred) | GTM, GA4, Clarity, Meta Pixel IDs |
| 7 | Wed 14 Oct | 17, 18, 19 · launch | DNS change in GoDaddy; final checks |

This is tight. If the case studies or prices aren't ready by Day 3, launch with "Sample report" labels and add real results within the first week rather than inventing anything.

## After the office move (next month)

1. Create DIGIFI's Google Business Profile at the new office. Write the address once, in the exact format you want, and use that same format everywhere (website, Google, social profiles, visiting cards).
2. Paste this into Claude Code in the project:

```text
DIGIFI has moved to a new office and created its Google Business Profile.
New address (exactly as on Google): [paste address]
Google Business Profile link: [paste link]
Place ID: [paste Place ID]

1. Update the address in src/content/site.ts, the footer, the contact page and the JSON-LD (full PostalAddress with street and postal code, plus geo coordinates).
2. Run Stage 11 (Google Maps) from the prompt pack.
3. In Stage 12's Google Reviews section, add the Place ID and Places API key, and set NEXT_PUBLIC_SHOW_GOOGLE_REVIEWS=true once the profile has at least 5 reviews.
4. Add the Google Business Profile link to sameAs in the JSON-LD and to the footer.
5. Run lint, typecheck, build and the Playwright tests, then commit and deploy.
```

3. Ask your clients for Google reviews as soon as the profile is verified.

## Design Registry entry (add to digifi-design-registry.md after launch)

### DIGIFI | Digital marketing agency, Dindigul | October 2026
- Logo: "Rising dots" wordmark (three i-dots rising like a growth chart) + navy tile symbol
- Layout + hero: Bento-grid dashboard layout; dark navy hero with headline left and animated "monthly report" metrics card right; pinned 4-step journey section
- Typography: Bricolage Grotesque (headings 800, body 400) + Geist Mono for all numbers
- Colors: Navy #0A1340 / #060A24 dark sections, light #F5F7FB sections, electric blue #0064F8 primary, growth lime #C6F432 for data only, WhatsApp green #25D366 for WhatsApp only; flat, no gradients
- Shape + icons + imagery: Soft rounded (cards 20px, pill buttons), Lucide icons in tinted rounded tiles, real photos in rounded frames, portfolio in browser frames
- Motion signature: GSAP counters, chart and progress lines drawing on scroll, staggered card rise, pinned journey; Motion for hover, accordion, quiz; scroll progress bar
