# DIGIFI website: build progress

- [x] Stage 0: Project setup, toolkit check, and CLAUDE.md
- [x] Stage 1: design.md and design tokens
- [ ] Stage 2: brief.md (page-by-page plan and content)
- [ ] Stage 3: Foundation, layout, and rendering strategy
- [ ] Stage 4: Design system components and animation utilities
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
