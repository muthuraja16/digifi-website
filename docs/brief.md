# DIGIFI website brief

The page-by-page plan for www.digifi.in. **All site copy lives in `src/content/*.ts`**. This brief says
what each page is for and how it's built; the content files hold the words. Design rules:
`docs/design.md`. Facts allowed: `docs/client-summary.md` and the prompt pack only.

Status: draft for Muthuraja's approval (Stage 2, 9 October 2026).

---

## 1. Business summary

DIGIFI is a digital marketing agency in Dindigul, Tamil Nadu, serving the Dindigul–Madurai–Trichy
corridor. 3 years in business, 35+ clients served across 10+ industries, 15+ years of combined IT and
marketing experience.

- **Services:** Meta Ads, Google Business Profile, WhatsApp Marketing, Website Design.
- **Plans and prices** (from DIGIFI's service sheets, October 2026; all in `src/content/packages.ts`):

  | Offering | Plans |
  |---|---|
  | Free Growth Assessment | Free: quick review + call. The site's main CTA |
  | Digital Growth Assessment™ | ₹4,999 one-time (starts from): full written audit, 9 areas, PDF, 30-day plan, 30-min call |
  | Digital Foundation™ | ₹19,999 one-time (starts from): 6 platforms + one-page website, 5–7 business days |
  | Meta Ads | Start ₹12,000/mo · Grow ₹20,000/mo · Dominate ₹30,000/mo; recommended ad budget ₹5,000+ / ₹10,000+ / ₹20,000+, paid directly to Meta |
  | Google Business Profile | GBP Launch ₹6,000 one-time · Maps Growth System ₹5,000/mo (no lock-in) |
  | WhatsApp | API Setup from ₹6,000 · Automation from ₹10,000 (one-time) · WhatsApp Marketing ₹5,000/mo (no lock-in) |
  | Custom websites | Quote only |

  The prompt pack's Local Starter / Local Growth / Local Dominance packages are **replaced** by these
  plans (decision 9 October 2026). Full plan prices are shown on the site.
- **USP:** local market expertise, Tamil-friendly communication, industry knowledge, AI-powered
  execution, transparent reporting.
- **Contact:** phone and WhatsApp +91 88928 34327, hello@digifi.in. expo.digifi.in stays a separate site.
- **Location:** "Dindigul, Tamil Nadu" only (no street address or map until the office move next month).

## 2. Goals and KPIs

| Goal | Measure | Target |
|---|---|---|
| Primary: Free Growth Assessment bookings | `generate_lead` (form_type `assessment`) | 5–10 qualified leads per month (all sources combined) |
| Primary: WhatsApp conversations | `whatsapp_click` | Tracked from launch; target set after month 1 |
| Secondary: website design enquiries | form_type `website_quote` | Tracked from launch |
| Supporting: Digital Health Check completions | `quiz_complete` | Tracked from launch |
| Supporting: calls | `phone_click` | Tracked from launch |

Average client value is about ₹25,000 (internal planning figure; never shown on the site).

## 3. Audience

Local business owners in Dindigul, Madurai and Trichy who want more visibility, enquiries and
measurable growth: academies, builders and promoters, jewellers and retailers, manufacturers, local
service businesses, vehicle dealers. Mostly browsing on phones. Comfortable in Tamil and English.

**Main fear:** "Will I actually get results?" Every page answers it with proof (results, sample
report, client names, plain-language reporting) and an honest, low-risk next step (free assessment, no
obligation).

**Desired first impression:** "These are experts who understand businesses like mine and can deliver
results."

## 4. Voice

Plain English, short sentences, confident, friendly, direct. Sentence case. Talk to "you" (the owner),
about "your business". No jargon, no hype ("leverage", "unlock", "seamless", "revolutionary"). Never a
promise of guaranteed results. Numbers only when real.

## 5. Core conversion principle

Every section answers one of four questions: **What** does DIGIFI do? Why should I **trust** DIGIFI?
What **results** can DIGIFI create? What should I do **next**? (In the tables below: What / Trust /
Results / Next.)

- **Primary CTA everywhere:** "Book a free Growth Assessment" (blue-600) → `/growth-assessment`.
  Short forms: "Free Growth Assessment" (header), "Free Assessment" (mobile bar).
- **Secondary CTA:** "Chat on WhatsApp" (WhatsApp green, navy text) → `wa.me/918892834327` with a
  page-specific pre-filled message.
- Every page: CTAs in the hero, in the final CTA band, and in the sticky mobile bar (below 768px).

---

## 6. Sitemap

| URL | Page | Index | Content file |
|---|---|---|---|
| `/` | Home | yes | `home.ts` + services, industries, caseStudies, faqs |
| `/services/meta-ads` | Meta Ads | yes | `services.ts` |
| `/services/google-business-profile` | Google Business Profile | yes | `services.ts` |
| `/services/whatsapp-marketing` | WhatsApp Marketing | yes | `services.ts` |
| `/services/website-design` | Website Design (secondary goal: website enquiries) | yes | `services.ts` |
| `/results` | Results / case studies | yes | `caseStudies.ts`, `pages.ts` |
| `/industries` | Industries | yes | `industries.ts`, `pages.ts` |
| `/growth-assessment` | Free Growth Assessment (main conversion page, includes the Digital Health Check quiz) | yes | `pages.ts`, `quiz.ts` |
| `/about` | About | yes | `about.ts` |
| `/contact` | Contact | yes | `pages.ts`, `site.ts` |
| `/privacy-policy` | Privacy policy | yes | written in Stage 7 |
| `/terms` | Terms of use | yes | written in Stage 7 |
| `/lp/[slug]` | Ad landing pages (template) | **noindex** | `landingPages.ts` (Stage 10) |
| `/dashboard` | Lead dashboard (private) | **noindex**, auth | — |

SEO titles, descriptions and keywords for every page are in `src/content/pages.ts` (`seo`). All
titles are under 60 characters with "| DIGIFI"; all descriptions under 155 characters with a CTA.

---

## 7. Pages

### 7.1 Home `/`

**Purpose:** in 5 seconds, show that DIGIFI gets local businesses results; move visitors to the
assessment or WhatsApp. Section order exactly as `docs/design.md` §10.

| # | Section | Bg | Answers | Content | CTA |
|---|---|---|---|---|---|
| 1 | Hero: headline, subheading, trust line, "Growth report" card with real Vision Plywoods results and a rising-bars chart of average monthly enquiries (DST, Vision Plywoods, Mukilam Academy) | dark | What + Results | `home.hero`, `site.trustLine`, `caseStudies` | Both CTAs |
| 2 | Client strip: "Trusted by 35+ local businesses across 10+ industries": 4 permitted logos (`clientLogos`) + client names marquee | light | Trust | `home.clientStrip`, `clientLogos`, `industries[].clients` | — |
| 3 | Services bento: 4 services (Meta Ads large), outcome line, bullets, link | light | What | `services`, `servicesSection` | Link per service |
| 4 | 4-step journey (pinned on desktop): Get found → Get enquiries → Follow up fast → Build trust | light | What | `home.journey`, `services[].journey` | — |
| 5 | Results: 2–4 case study cards | light | Results | `caseStudies`, `resultsSection` | "See all results" |
| 6 | "What your monthly report looks like" (Sample report) | dark | Trust | `home.sampleReport` | — |
| 7 | Industries: 6 cards with client names | light | Trust | `industries`, `industriesSection` | "Don't see your industry? Let's talk." → WhatsApp |
| 8 | Digital Health Check teaser | light | Next | `home.healthCheckTeaser` | "Take the free health check" → `/growth-assessment#health-check` |
| 9 | Why DIGIFI: 6 reasons | light | Trust | `home.whyDigifi` | — |
| 10 | FAQ (confirmed answers only) | light | Trust | `faqs`, `faqSection` | "Ask us on WhatsApp" |
| 11 | Final CTA band + reassurance line | dark | Next | `home.finalCta`, `site.ctas.reassurance` | Both CTAs |

- **SEO:** "Digital Marketing Agency in Dindigul | DIGIFI". Keyword: *digital marketing agency Dindigul*
  (secondary: Madurai, Trichy in the description and copy).
- **H1 draft:** "More enquiries for your business. Proof you can see every month."

### 7.2 Service pages `/services/*` (one template, four pages)

**Purpose:** explain one service in owner language, prove it works, and route to the assessment.

| # | Section | Bg | Answers | Content (`services.ts`) | CTA |
|---|---|---|---|---|---|
| 1 | Hero: service promise | dark | What | `hero` | Both CTAs (page WhatsApp message) |
| 2 | The problem local businesses face | light | Why it matters | `problem` | — |
| 3 | What DIGIFI does: step list with RisingDots markers | light | What | `process` | — |
| 4 | What's included | light | What | `included` | — |
| 5 | Results for this service (matching case studies) | light | Results | `caseStudies` filtered by `services` | "See all results" |
| 6 | Who it's for (industries) | light | Trust | `industries` (slugs) | Links to `/industries` |
| 7 | Plans and prices for this service (plan cards, "Most popular" badge, ad budget note on Meta Ads) | light | Next | `plansFor(service.plans[i])`, `offerings` | Plan card: "Get started" → WhatsApp with the plan's message; band: "Book a free Growth Assessment" |
| 8 | Service FAQs + general FAQs (confirmed only) | light | Trust | `serviceFaqs[slug]`, `faqs` | — |
| 9 | Final CTA band | dark | Next | `home.finalCta` | Both CTAs |

**Website Design adds:** portfolio (Vision Plywoods, Wave Power Tech in BrowserFrame, screenshots
[TBD], links to the live sites [TBD URLs]) from `websitePortfolio`, the build process (= `process`),
and "Get a website quote" → `/growth-assessment?service=website-design#assessment-form` (form preset
to Website Design, form_type `website_quote`). Its plans section shows **Digital Foundation™** (₹19,999,
includes a one-page website) plus a "Need a bigger website? Get a quote" card (`pricingLabels.customWebsite`).

| Page | SEO title | Primary keyword | H1 draft | WhatsApp message |
|---|---|---|---|---|
| Meta Ads | Meta Ads Agency in Dindigul and Madurai \| DIGIFI | Meta ads agency | Turn Facebook and Instagram into a steady source of enquiries. | "Hi DIGIFI, I'm interested in Meta Ads for my business." |
| Google Business Profile | Google Business Profile Management \| DIGIFI | Google Business Profile management | Be the business people find first on Google Maps. | "Hi DIGIFI, I'd like help with my Google Business Profile." |
| WhatsApp Marketing | WhatsApp Marketing for Local Businesses \| DIGIFI | WhatsApp marketing | Stop losing enquiries in your WhatsApp inbox. | "Hi DIGIFI, I'd like to know more about WhatsApp marketing for my business." |
| Website Design | Website Design in Dindigul \| DIGIFI | website design Dindigul | A website that makes people trust you, then makes it easy to enquire. | "Hi DIGIFI, I'd like a quote for a new website." |

### 7.3 Results `/results`

**Purpose:** proof. Show real outcomes, honestly.

| # | Section | Answers | Content | CTA |
|---|---|---|---|---|
| 1 | Hero | Results | `pages.results.hero` | Both CTAs |
| 2 | Filter by service (All, Meta Ads, Google Business Profile, WhatsApp, Website) | — | `pages.results` | — |
| 3 | Case study cards, each expandable: challenge → what we did → results | Results | `caseStudies` | — |
| 4 | Honest note: "Results vary by business, budget and market." | Trust | `pages.results.disclaimer` | — |
| 5 | Final CTA band | Next | `home.finalCta` | Both CTAs |

Placeholder case studies (`status: "placeholder"`) are labelled "Sample: real figures coming soon".
SEO: "Client Results and Case Studies | DIGIFI". Keyword: *digital marketing results Tamil Nadu*.

### 7.4 Industries `/industries`

**Purpose:** "they understand businesses like mine".

| # | Section | Answers | Content | CTA |
|---|---|---|---|---|
| 1 | Hero | Trust | `pages.industries.hero` | Both CTAs |
| 2 | 6 large industry cards: challenge, how DIGIFI helps, client names, related services | Trust + What | `industries` | Links to service pages |
| 3 | "Don't see your industry? Let's talk." | Next | `industriesSection` | WhatsApp |
| 4 | Final CTA band | Next | `home.finalCta` | Both CTAs |

SEO: "Digital Marketing for Local Industries | DIGIFI". Keyword: *digital marketing agency Madurai*.

### 7.5 Free Growth Assessment `/growth-assessment` (main conversion page)

**Purpose:** convert. Every CTA on the site lands here.

| # | Section | Answers | Content | CTA |
|---|---|---|---|---|
| 1 | Hero | What + Next | `pages.growthAssessment.hero` | "Book" scrolls to the form; WhatsApp |
| 2 | What you get | What | `whatYouGet` | — |
| 3 | Digital Health Check quiz (`#health-check`): 6 questions, one per step, score 0–100, band + recommendations | Next | `quiz.ts` | Result → "Book a free Growth Assessment" (form prefilled with score) |
| 4 | How it works: 3 steps | Trust | `steps` | — |
| 5 | Assessment form (`#assessment-form`) + privacy line | Next | `form` | Submit |
| 6 | Paid option: Digital Growth Assessment™ (₹4,999, full written audit) | What | `pages.growthAssessment.paidAssessment`, `plansFor("digital-growth-assessment")` | "Get started" → WhatsApp |
| 6b | Digital Foundation™ for businesses starting from zero | What | `plansFor("digital-foundation")` | "Get started" → WhatsApp |
| 7 | FAQ (confirmed only) | Trust | `faqs` | — |
| 8 | Success state (replaces the form): thank you, next steps, WhatsApp | Next | `success` | WhatsApp |

SEO: "Free Digital Growth Assessment | DIGIFI". Keyword: *free digital marketing assessment*.

### 7.6 About `/about`

| # | Section | Answers | Content | CTA |
|---|---|---|---|---|
| 1 | Hero | Trust | `about.hero` | Both CTAs |
| 2 | Story | Trust | `about.story` | — |
| 3 | How we work: local, transparent, AI-powered | What | `about.approach` | — |
| 4 | Numbers: 3 years, 35+ clients, 10+ industries, 15+ years combined experience | Trust | `about.numbers` | — |
| 5 | Team (initials avatars until real photos; no stock photos) | Trust | `about.team` | — |
| 6 | Values | Trust | `about.values` | — |
| 7 | CTA band | Next | `about.cta` | Both CTAs |

SEO: "About Us: Local Marketing Team in Dindigul | DIGIFI". Keyword: *digital marketing agency Trichy*.

### 7.7 Contact `/contact`

| # | Section | Answers | Content | CTA |
|---|---|---|---|---|
| 1 | Hero | Next | `pages.contact.hero` | WhatsApp, call |
| 2 | Contact channels: WhatsApp, phone (`tel:+918892834327`), email, location "Dindigul, Tamil Nadu" | Next | `pages.contact.channels`, `site.contact` | — |
| 3 | Office move note (no address, no map yet) | Trust | `pages.contact.officeNote` | — |
| 4 | Contact form: name, WhatsApp, email, message, consent | Next | `pages.contact.form` | Submit |
| 5 | Nudge to the assessment | Next | `site.ctas` | "Book a free Growth Assessment" |

SEO: "Contact Us in Dindigul | DIGIFI". Keyword: *DIGIFI contact*. Map and directions: Stage 11
(next month).

### 7.8 Legal `/privacy-policy`, `/terms`

Written in Stage 7 (DPDP Act 2023; "no guaranteed results" clause). Readable 720px column, table of
contents, last-updated date. Linked from the footer and every form's consent line.

### 7.9 Ad landing pages `/lp/[slug]` (Stage 10)

One focused page per ad campaign, from `src/content/landingPages.ts`: headline, offer, service, proof
block, short form, WhatsApp. Logo only (no navigation), noindex, excluded from the sitemap. Form saves
form_type `landing_page` with the slug. First example: Meta Ads.

### 7.10 Dashboard `/dashboard` (Stage 10)

Private, noindex, Supabase magic-link login for allow-listed admins (initially hello@digifi.in). Lead
list, filters, detail drawer with status and notes, WhatsApp and call buttons, summary tiles, CSV export.

### 7.11 404

Brand-styled, copy in `site.notFound`, links to Home and the assessment.

---

## 7.12 Rendering strategy (Stage 3)

Next.js 16 with Cache Components and Partial Prefetching (see `next.config.ts`).

| Routes | Rendering | Notes |
|---|---|---|
| `/`, `/results`, `/industries`, `/growth-assessment`, `/about`, `/contact`, `/privacy-policy`, `/terms`, 404 | **Static (SSG)**, prerendered at build | All content comes from `src/content`; a deploy updates it |
| `/services/[slug]`, `/lp/[slug]` | **Static (SSG)** for every slug in `generateStaticParams` | `instant = false` so unknown slugs return a real 404 status instead of a streamed soft 404 |
| `/results` (later) | **ISR** only if case studies move to Supabase: cache the query with `"use cache"` + `cacheLife` | Not needed while case studies live in `caseStudies.ts` |
| `/dashboard` | **Dynamic, noindex** | Static placeholder today; Stage 10's Supabase sign-in reads cookies, which makes it per-request |

- Server components by default. Client components only where there is interaction: header scroll
  state (`HeaderShell`), Services dropdown (`ServicesMenu`), mobile menu (`MobileMenu`), active nav
  links (`NavLink`); later the quiz, forms and animations.
- The footer copyright year is stamped at build time (`BUILD_YEAR` in `next.config.ts`): a request-time
  `new Date()` would make every page dynamic. It updates on every deploy.
- Every page starts with a dark section (`PageHero` or the home hero), because the header is
  transparent over the top of the page until it scrolls.

## 8. Conversion paths

**To the assessment form** (`/growth-assessment#assessment-form`):

1. Header CTA "Free Growth Assessment" (every page except `/lp/*`)
2. Hero primary CTA (every page)
3. Final CTA band (every page)
4. Sticky mobile bar "Free Assessment" (every page, below 768px)
5. Homepage health check teaser → quiz → result → form prefilled with the score
6. Plans section band CTA (service pages, assessment page)
7. Website Design "Get a website quote" → form preset to Website Design
8. 404 page link
9. Ad landing pages: their own short form (form_type `landing_page`)

**To WhatsApp** (`wa.me/918892834327`, page-specific message):

1. Hero secondary CTA (every page)
2. Final CTA band (every page)
3. Sticky mobile bar "WhatsApp" (below 768px)
4. Floating WhatsApp button (desktop, Stage 10)
5. "Don't see your industry? Let's talk." (Home, Industries)
6. FAQ "Ask us on WhatsApp"
7. Contact page channel
8. Footer contact
9. Form success panel ("Want to talk sooner?")
10. Plan cards: "Get started" with a plan-specific message (service pages, assessment page)

**To a call:** `tel:+918892834327` on Contact and in the footer.

## 9. Lead routing

| Channel | Goes to |
|---|---|
| Every form (assessment, contact, website quote, landing page) | Saved in Supabase `leads` first, then email alert to **hello@digifi.in** (Resend, from `hello@mail.digifi.in`) and an auto-reply to the visitor if they gave an email |
| Quiz results | Saved in Supabase `quiz_results` (linked to the lead if they submit the form) |
| WhatsApp | Chats go to **+91 88928 34327** |
| Calls | +91 88928 34327 |
| All leads | Visible and managed in **/dashboard** |

Source data saved with every lead: UTM parameters, gclid, fbclid, referrer, landing page (first touch,
30-day cookie).

## 10. SEO targets

| Keyword | Page |
|---|---|
| digital marketing agency Dindigul | Home |
| digital marketing agency Madurai | Industries (+ Home description, About) |
| digital marketing agency Trichy | About (+ Home description, Industries) |
| Meta ads agency | Meta Ads |
| Google Business Profile management | Google Business Profile |
| WhatsApp marketing | WhatsApp Marketing |
| website design Dindigul | Website Design |

Madurai and Trichy don't have their own pages at launch. If they matter for ranking, add one honest
location page each after launch (no doorway pages with swapped city names).

---

## 11. Free vs paid assessment

Two offers with similar names, kept clearly apart in the copy:

- **Free Growth Assessment** (main CTA everywhere): a quick review of the business online and a call
  about first steps. Lead form on `/growth-assessment`.
- **Digital Growth Assessment™** (₹4,999, paid): the full written audit. Shown as an upgrade section on
  `/growth-assessment` and explained in the FAQ "How is the free assessment different…". Booked via WhatsApp.

## 12. Claims from the service sheets left off the website

These appear in DIGIFI's service sheets but are unverified statistics or guarantees, which the content
rule forbids. Don't add them back without a source:

- "98% open rate — highest of any marketing channel" (WhatsApp)
- "Ban-proof" (WhatsApp API)
- "Optimised to appear in Google's top 3" (GBP)
- "Every rupee tracked", "Scale without limits", "Zero manual work"
- "What separates DIGIFI from freelancers" (comparison with others)
- Fixed broadcast times ("8–9 AM, 12:30 PM, 7–9 PM") — kept as "scheduled for when your customers read messages"

## 13. Placeholders and items to confirm

Every unknown in the content files is a visible `[TBD: ...]`; every drafted answer that needs
Muthuraja's sign-off carries `[confirm]`. FAQs with `confirmed: false` are hidden on the site until
confirmed. Search the code for `[TBD` and `[confirm` to find them.

### [TBD]: information only DIGIFI can provide

| # | Item | Where | Needed by |
|---|---|---|---|
| 1 | Case studies: **figures received** (Vision Plywoods, Mukilam Academy, Dindigul School of TNPSC, JD Leathers). "What DIGIFI did" written from Muthuraja's process description. Still needed: the ads dashboard screenshots | `caseStudies.ts` | Stage 6 |
| 2 | "What your monthly report looks like" section: sample report values (stays labelled "Sample report") | `home.ts` | Stage 5 |
| 3 | Client logos: **4 received with permission** (JD Leathers, Dindigul School of TNPSC, Mukilam Academy, Vision Plywoods). Others shown as names only. A larger Mukilam Academy logo would be sharper (current file 250px) | `public/clients/` | Stage 5 |
| 4 | Team members: names, roles, real photos; one line about the team | `about.ts` | Stage 6 |
| 5 | Portfolio: Vision Plywoods and Wave Power Tech live URLs and screenshots | `services.ts` | Stage 6 |
| 6 | Custom websites: support period after launch | `services.ts` | Stage 6 |
| 7 | Social media links (and which platforms DIGIFI actually uses) | `site.ts` | Stage 3 |
| 8 | Registered business name | `site.ts` | Stage 7 |
| 9 | Data retention period | privacy policy | Stage 7 |
| 10 | Response time for follow-ups, e.g. "1 working day" | `pages.ts` (form intro, success panel) | Stage 9 |
| 11 | Calling hours | `pages.ts` (contact) | Stage 9 |
| 12 | New office street address and postal code | `site.ts` | Next month |
| 13 | DIGIFI Google Business Profile | Reviews, map, JSON-LD | Next month |

### [confirm]: drafted answers to approve

| # | Item | Where |
|---|---|---|
| 4 | FAQ: how clients update their website | `faqs.ts` |
| 5 | About: founding story details (who founded DIGIFI and why) | `about.ts` |
| 7 | Website Design page: custom website process and "what's included" list (drafted; plans for GBP, Meta Ads and WhatsApp now come from DIGIFI's sheets) | `services.ts` |
| 8 | Industry cards: "the challenge" and "how we help" text for each group | `industries.ts` |
| 9 | Plan copy: the plan features are DIGIFI's sheets rewritten in plain English (e.g. "Hook → Offer → CTA" became "hook, offer, call to action"). Check nothing lost its meaning | `packages.ts` |

Resolved by the service sheets (9 October 2026): minimum ad budget (₹5,000+/month, paid to Meta),
account ownership ("You own everything"), package prices and contents, Digital Foundation and
assessment timelines (5–7 business days), "no lock-in" on monthly GBP and WhatsApp plans.
Resolved by Muthuraja (10 October 2026): case study figures and logo permissions (above); homepage
headline approved; Meta Ads plans have a 3-month minimum then 1 month's notice; the "AI-powered: changes
happen in days, not weeks" line is accurate; a red error colour is added to the tokens; JD Leathers added
to the Retail & Lifestyle clients.
Resolved by Muthuraja (9 October 2026): service area has no restriction (Dindigul–Madurai–Trichy
stays the focus in copy and SEO); clients keep their current WhatsApp Business number on the API.
