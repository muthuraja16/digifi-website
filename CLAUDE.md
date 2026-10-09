@AGENTS.md

# DIGIFI website

DIGIFI's own agency website (www.digifi.in): a digital marketing agency in Dindigul serving the
Dindigul–Madurai–Trichy corridor. **Goal:** Free Digital Growth Assessment bookings and WhatsApp chats
(target 5–10 qualified leads/month). Launch: Wednesday 14 October 2026. Approver: Muthuraja.

The build follows `docs/prompt-pack.md`, one stage at a time, in order.

## Stack

| Layer       | Choice                                                                                             |
| ----------- | -------------------------------------------------------------------------------------------------- |
| Framework   | Next.js 16.4.0 (App Router, Turbopack), React 19.3, TypeScript 5 (strict)                          |
| Styling     | Tailwind CSS 4 (CSS-first config in `src/app/globals.css`), Prettier + prettier-plugin-tailwindcss |
| Data / auth | Supabase (region ap-south-1 Mumbai), from Stage 8                                                  |
| Email       | Resend via `mail.digifi.in` + React Email, from Stage 9                                            |
| Motion      | GSAP + ScrollTrigger (scroll/data motion), Motion `motion/react` (UI states), from Stage 4         |
| Hosting     | Vercel (bom1), from Stage 18                                                                       |

`next.config.ts` has `cacheComponents` and `partialPrefetching` enabled (create-next-app 16.4 defaults).
Next 16 differs from older training data: read `node_modules/next/dist/docs/` before using an unfamiliar API.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run lint
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write .
```

## Folders

```
src/app/                  routes
src/components/ui/        reusable UI (buttons, cards, inputs)
src/components/sections/  page sections
src/components/motion/    animation helpers
src/lib/                  utilities, supabase, resend, analytics, validation
src/content/              all site copy and data as typed TS files
public/brand/             logo files (copied from docs/brand/, never edited)
docs/                     design-dna.md, client-summary.md, brief.md, progress.md, qa-report.md, prompt-pack.md
```

## Coding standards

- TypeScript strict. Typed props on every component. No `any`.
- Server components by default. `"use client"` only where interaction is needed (menu, quiz, forms, animations).
- Small, focused components. No duplicated code: reuse what is in `src/components` and `src/lib` first.
- Zod validation for all form input and all external data.
- No secrets in client code. Only `NEXT_PUBLIC_*` variables reach the browser; service keys stay in server files (`server-only`).
- All copy lives in `src/content/` — never hard-code text inside components.
- Accessible markup: real `<button>` and `<a>`, labels on every input, visible focus, `alt` on every image.
- No UI kits or component libraries (no shadcn, MUI, Chakra). Components are built from the design tokens.

## Design rule

**Always read `docs/design-dna.md`, `docs/design.md` and `docs/brief.md` before any UI work** (design.md
and brief.md are created in Stages 1 and 2). Use only the design tokens. Follow the banned patterns list.
Key rules: blue-600 `#0064F8` for every CTA; WhatsApp green `#25D366` only on WhatsApp actions, with navy
text; lime `#C6F432` for data only and never next to a WhatsApp button; no gradients except the single hero glow.

## Content rule

Never invent facts, numbers, results, testimonials, reviews, prices, team members or client logos.
Use only facts in `docs/client-summary.md` and the prompt pack. Anything unknown is a visible
`[TBD: ...]` placeholder; unconfirmed answers keep a `[confirm]` marker.

## Skills and MCP servers

| Tool                                                                                              | Used in stages                | Status (Stage 0 check)                                                                                     |
| ------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Context7 MCP (current library docs)                                                               | 0, 1, 3, 4, 9, 11–14          | installed, **needs auth** (`/mcp`); fallback: next-devtools `nextjs_docs` + `node_modules/next/dist/docs/` |
| Next.js DevTools MCP                                                                              | 3, 5                          | connected                                                                                                  |
| Chrome DevTools MCP                                                                               | 5, 6, 11, 13, 14, 15, 17      | connected                                                                                                  |
| Playwright plugin + MCP                                                                           | 6, 10, 17, 18                 | connected                                                                                                  |
| frontend-design skill                                                                             | 1, 3–7, 10                    | installed                                                                                                  |
| GSAP skills (core, react, scrolltrigger, timeline, plugins, performance)                          | 4, 5, 6, 15                   | installed                                                                                                  |
| Vercel skills: react-best-practices, composition-patterns, web-design-guidelines, vercel-optimize | 0, 3, 4, 5, 7, 12, 15, 17, 18 | installed                                                                                                  |
| supabase + postgres-best-practices skills                                                         | 8, 9, 10                      | installed                                                                                                  |
| Supabase MCP                                                                                      | 8, 16                         | installed, **needs auth**                                                                                  |
| resend, react-email, email-best-practices skills                                                  | 9                             | installed                                                                                                  |
| Resend MCP                                                                                        | 9, 17, 18                     | installed, **needs auth**                                                                                  |
| security-guidance plugin, `/security-review`                                                      | 8, 9, 10, 12, 16              | installed                                                                                                  |
| Vercel MCP                                                                                        | 18, 19                        | installed, **needs auth**                                                                                  |
| Sentry MCP                                                                                        | 19                            | installed, **needs auth**                                                                                  |
| webapp-testing skill                                                                              | 6, 10, 17                     | **not installed** — fallback: Playwright plugin/MCP                                                        |

## Definition of done (every stage)

1. `npm run lint && npm run typecheck && npm run build` all pass.
2. `docs/progress.md` updated (stage ticked, notes on anything skipped or pending).
3. Git commit with the stage's commit message.
