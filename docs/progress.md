# DIGIFI website: build progress

- [x] Stage 0: Project setup, toolkit check, and CLAUDE.md
- [x] Stage 1: design.md and design tokens
- [x] Stage 2: brief.md (page-by-page plan and content)
- [x] Stage 3: Foundation, layout, and rendering strategy
- [x] Stage 4: Design system components and animation utilities
- [ ] Stage 5: Homepage (premium)
- [ ] Stage 6: Service pages, Results, Industries, About
- [ ] Stage 7: Trust pages and trust elements
- [ ] Stage 8: Supabase setup
- [ ] Stage 9: Forms, quiz, and Resend email notifications
- [ ] Stage 10: Lead dashboard and lead-generation features
- [ ] Stage 11: Google Maps integration (DEFERRED until after the office move)
- [ ] Stage 12: Google Reviews integration (prepared, switched off)
- [ ] Stage 13: Complete SEO
- [ ] Stage 14: Analytics, tracking, and consent
- [ ] Stage 15: Performance and accessibility
- [ ] Stage 16: Security hardening
- [ ] Stage 17: Complete QA
- [ ] Stage 18: Deployment and go-live
- [ ] Stage 19: Monitoring, maintenance, and handover

## Stage 0 notes (2026-10-09)

- Next.js 16.4.0 (latest stable on npm), React 19.3.0, Tailwind CSS 4, TypeScript strict, ESLint 9, src/ dir, `@/*` alias.
- Scaffolded with create-next-app 16.4.0 in a temp folder (the CLI refuses a folder that already has `docs/`), then moved in.
- Logo files were in `docs/brand/digifi-logo-files/` (zip unpacked one level deeper than the pack expects); copied from there to `public/brand/`.
- `docs/brief.md` and `docs/qa-report.md` are created in Stages 2 and 15/17, not now.

### Toolkit check

| Item | Status |
|---|---|
| frontend-design, security-guidance, playwright plugins | installed |
| gsap-skills, supabase, postgres-best-practices plugins | installed |
| context7 plugin | installed, **MCP needs authentication** (run `/mcp` in a `claude` terminal). Fallback used: npm registry for the version, `create-next-app --help`, bundled Next docs |
| Vercel agent-skills (react-best-practices, composition-patterns, web-design-guidelines) | installed |
| Resend skills (resend, react-email, email-best-practices) | installed |
| next-devtools, chrome-devtools, playwright MCP | connected |
| supabase, resend, vercel, sentry MCP | added, **need authentication** before Stages 8, 9, 18, 19 |
| webapp-testing skill | **missing** — Stages 6/10/17 will use the Playwright plugin instead |
| context-engineering plugin (not in the pack) | fails to load (manifest conflict); unrelated, ignored |

## Stage 1 notes (2026-10-09)

- `docs/design.md` written from the Design DNA (all sections + "How to apply").
- Tokens in `src/app/globals.css` via Tailwind 4 `@theme`: 18 color tokens as `--color-*` CSS variables and classes; Tailwind's default palette disabled (`--color-*: initial`), so `bg-blue-500` etc. don't exist. Radius (`rounded-card`, `rounded-inner`), shadows (`shadow-card`, `shadow-hover`), easing (`ease-out`, `ease-in-out`), duration/stagger CSS variables.
- Utilities: `container-site`, `grid-site`, `section-y`, `type-display`, `type-h2`, `type-h3`, `type-body-lg`, `eyebrow`, `metric`, `metric-sm`.
- Color class names: DNA tokens `text-body` / `text-muted` / `text-on-dark` are `--color-body` / `--color-muted` / `--color-on-dark` so the classes read `text-body`, not `text-text-body`.
- Fonts: Bricolage Grotesque variable (400–800 + `opsz` axis) and Geist Mono 500 via next/font, `display: swap`, exposed as `--font-sans` / `--font-mono`. Measured CLS on the page: 0.
- Default Next.js page, styles and public SVGs removed; `src/app/icon.svg` (copy of the brand favicon) replaces the Next.js favicon until Stage 3. Placeholder home page reads from `src/content/site.ts`.
- Context7 still not connected in this session; used the Next.js docs bundled in `node_modules/next/dist/docs/` and the next/font type definitions.
- Gotcha: after changing `globals.css`, a `next build` reused a stale Turbopack cache and shipped the old CSS. If tokens look missing, delete `.next/` and rebuild.

## Stage 2 notes (2026-10-09)

- `docs/brief.md`: business summary, KPIs, audience, sitemap, every page (purpose, sections in order, question answered, CTAs, SEO, keyword), conversion paths, lead routing, SEO targets, full [TBD] / [confirm] list.
- Content files in `src/content/`: site, services, industries, caseStudies, packages, faqs, quiz, about, home, plus `pages.ts` (SEO for every route and copy for Results, Industries, Growth Assessment, Contact, form labels and errors).
- No invented numbers: case studies are `status: "placeholder"` with [TBD] figures; hero/sample report values are [TBD] and labelled "Sample report".
- FAQs with a [confirm] marker have `confirmed: false` and stay hidden until confirmed.
- **Review point:** read `docs/brief.md` §11 and the content files; edit wording now.

### Stage 2 update: real plans and prices (2026-10-09)

- DIGIFI supplied service sheets (Digital Growth Assessment™, Digital Foundation™, GBP, Meta Ads, WhatsApp). `packages.ts` rewritten with every plan, price and feature; Local Starter/Growth/Dominance dropped.
- Decisions: free Growth Assessment stays the main CTA, ₹4,999 Digital Growth Assessment™ shown as the paid full audit; full plan prices shown; custom websites quote-only.
- Resolved [confirm] items: ad budget, account ownership, timelines, no lock-in (GBP/WhatsApp monthly). Unverified claims from the sheets left out (listed in brief.md §12).

## Stage 3 notes (2026-10-09)

- Root layout: fonts, metadataBase https://www.digifi.in, lang="en", skip link, favicon set from `public/brand`, theme-color #0A1340. Header, `<main id="main">`, footer and mobile CTA bar live in the root layout, so 404 pages get them too.
- Header: fixed, transparent at top and navy-900 once scrolled, blue scroll progress bar, reversed wordmark, Services dropdown (4 services), Results/Industries/About/Contact, "Free Growth Assessment" CTA (md+). Desktop nav from 1024px; hamburger below.
- Mobile menu: native modal `<dialog>` (focus trap, Escape, inert page), 44px+ targets, CTAs at the bottom, closes on navigation and link tap, page scroll locked.
- Mobile CTA bar below 768px: "Free Assessment" + "WhatsApp" (navy text, WhatsApp icon); hidden while the menu is open.
- Footer: wordmark + tagline, blurb, services, company, contact, location, social links (visible [TBD]), legal links, © year.
- Placeholder pages for every sitemap route use real hero copy from `src/content`; `/dashboard`, `/lp/*` and 404 are noindex. Custom brand 404.
- Rendering strategy documented in `docs/brief.md` §7.12. Build: every route static.
- Verified: every route 200 with header + footer and its own title; unknown service/lp slugs 404; dropdown (click, Escape, outside click); mobile menu (real Escape key, link navigation, focus inside, bar hidden); WhatsApp link https://wa.me/918892834327 with the default message; Next.js DevTools MCP: no errors.
- Fixes found while testing: ButtonLink class clashes (header CTA showed on phones), Tailwind was generating classes from docs/ examples (now `@source not "../../docs"`), Cache Components warnings on dynamic routes (`instant = false`).
- `lucide-react` installed now (planned for Stage 4) for the header icons. WhatsApp glyph is inline SVG (Simple Icons).
- Screenshots weren't possible this session (browser pane not drawing while the app window is hidden); checks were done with scripted DOM tests. Please eyeball the header and menu at http://localhost:3000.

## Stage 4 notes (2026-10-10)

- Installed gsap 3.15.0, @gsap/react 2.1.2, motion 14.0.0 (lucide-react was added in Stage 3).
- Components in `src/components/ui`: Button (replaces Stage 3 ButtonLink), Card, BentoGrid/BentoCard, SectionHeading, Eyebrow, IconTile, MetricNumber, MetricBadge, RisingDots, Accordion, Tabs, FormField/Input/Textarea/Select/Checkbox/RadioGroup, BrowserFrame, Badge, Chip/ChipButton. Inventory in `docs/design.md` §12.
- Dark context via an `on-dark` class + `on-dark:` Tailwind variant instead of per-component dark props.
- Motion utilities in `src/components/motion`: gsap.ts (ScrollTrigger, useGSAP, CustomEase registered once; design-token eases), Reveal, StaggerGroup, CountUp, DrawLine, HoverLift, variants.ts, MotionProvider (LazyMotion + reducedMotion="user") in the root layout.
- /styleguide: every token, type style, component (light + dark) and animation; noindex. Must be excluded from sitemap/robots in Stage 13.
- Verified in Chrome (DevTools MCP): CountUp ticks to final, DrawLine draws, accordion/tabs keyboard, all 72 interactive elements show the 2px blue-600 focus ring, 44px targets, no console errors. Reduced motion (matchMedia emulated): counters final immediately, charts fully drawn, no reveal styles, no hover lift.
- web-design-guidelines review: fixed overscroll-contain on the mobile menu, touch-action/tap highlight, scroll-padding-bottom for the mobile bar, min-w-0 on truncated URL, color-scheme on dark form controls, focus ring colour fading in (outline colour now always blue-600). Not changed on purpose: Title Case (brief uses sentence case), URL state for tabs/accordion.
- Open for Stage 9: form submit must focus the first error and announce errors (aria-live).
- Open question for Muthuraja: add an error colour token? (none in the Design DNA; errors currently use icon + bold text + heavier border.)

## Inputs received (2026-10-10)

- Real case studies (Meta Ads): Vision Plywoods 1,942 enquiries Apr–Sep 2026 (avg 323/month, ₹7.90 CPL); Mukilam Academy 703 in May 2025 (₹9.16); Dindigul School of TNPSC avg 215/month May–Jul 2025 (₹26.66); JD Leathers 335 in 20 days, Mar 2025 (₹5.57). `caseStudies.ts` rewritten; homepage report card reads from it. No before/after figures, so no "+%" badges.
- Logos with permission in `public/clients/` (Vision Plywoods trimmed of white space). JD Leathers added to Retail & Lifestyle.
- Headline approved. Meta Ads terms: 3-month minimum, then 1 month's notice (FAQ + plan cards). AI-turnaround line confirmed. Error colour tokens added: `error` #C62828, `error-on-dark` #FF8A80.
- "What DIGIFI did" written for all four from Muthuraja's process description (research → creatives on pain points → data-led improvement). Still to come: ads dashboard screenshots.
