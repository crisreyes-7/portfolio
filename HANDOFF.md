# Portfolio Handoff — Session 2026-04-27

## Project

Cris Reyes personal portfolio — Next.js app in `/Users/cris/Desktop/Claude/portfolio`.  
Live stack: Next.js, Tailwind CSS, Geist Sans font.

---

## Design System

All pages share these layout rules (established this session):

- **Max width:** `max-w-[760px] mx-auto`
- **Horizontal padding:** `px-6`
- **Primary navy:** `#1e3a8a`
- **Light blue accent:** `#cce8f5`
- **Text dark:** `#0f0f0f`
- **Text muted:** `#555`, `#888`, `#aaa`
- **Border:** `border-[#e8e8e6]`
- **Card pattern:** outer card `rounded-3xl border p-3 shadow-sm`, inner cards `rounded-2xl`
- **Section labels:** `text-sm font-medium text-[#0f0f0f]` in brackets e.g. `[About]`
- **CTA pill:** `CtaLink` component — light blue → navy on hover with rotating ↗ arrow

---

## File Map

```
app/
  page.tsx              — Home (Navbar + Hero + Cases + About + Footer)
  layout.tsx            — Root layout, Geist font, metadata
  about/page.tsx        — About page (server component)
  cases/page.tsx        — Cases index page
  cases/svaec/page.tsx  — SVAEC case study (long-form, ~630 lines)

components/
  Navbar.tsx            — Fixed top nav, animated dropdown menu pills
  Hero.tsx              — Tweet-card style hero, press C to copy email
  Cases.tsx             — Home page cases preview card
  About.tsx             — Home page about preview card with marquee
  Footer.tsx            — Live clock, fit-text "[The End]", email + socials
  Marquee.tsx           — Scrolling tool icons (Figma, Adobe CC, Asana, Claude, GitHub)
  CtaLink.tsx           — Reusable CTA pill link
  ExperienceAccordion.tsx — Collapsible experience/education accordion (client component)
```

---

## What Changed This Session

### Global
- Standardized all pages to `max-w-[760px] mx-auto px-6` — About and Cases were previously using `max-w-7xl` with `md:px-12`

### About Page (`app/about/page.tsx`)
Complete redesign of the page structure:

1. **Page label** — centered `[About]` label with 100px vertical padding above the card
2. **Hero card** — outer card (`rounded-3xl`, `p-3`) containing two inner cards:
   - Left (60%): `[About me]` label, bio paragraphs, quote with large decorative `"` mark
   - Right (40%): photo from `/assets/s2YLoaQtVeH52Y0ydh0xNGpvI.jpg.webp` (local asset)
3. **[What Can I Do]** — three stacked cards: beige / navy / light blue
4. **[Experience/Education]** — `ExperienceAccordion` component (see below)
5. **[Tools & Skills]** — pill tags row
6. Removed the redundant `[Currently]` section (duplicated accordion content)

### ExperienceAccordion (`components/ExperienceAccordion.tsx`)
New client component. Three entries:

| Entry | Type | Dates |
|---|---|---|
| Digital NEST | Work — Design Associate / Adobe Fellow | Aug 2024 – Current |
| San Jose State University | Education — Design Studies B.A. | May 2023 – May 2024 |
| Hartnell College | Education — Studio Arts A.A. | May 2022 – May 2023 |

Behavior:
- One entry open at a time; Digital NEST defaults open
- Expanded: navy blue card, white/light-blue text, bullet points slide in via CSS grid-rows transition
- Collapsed: white card with border; hover → navy blue
- All collapsed cards are fixed `h-[80px]` for consistent sizing
- SJSU name uses `\n` + `whitespace-pre-line` to break across two lines

### Code Audits
- **Footer.tsx** — removed unused `import Link`
- **Marquee.tsx** — removed unnecessary `"use client"` directive
- **About page** — removed dead `pt-28` overridden by `py-[100px]`, removed redundant `max-w-3xl`
- **SVAEC page** — removed dead default `aspect="16/9"` on `Placeholder`, removed obvious comment

---

## Outstanding / Placeholders

The SVAEC case study still has several `<Placeholder>` components waiting for real assets:

| Location | Label |
|---|---|
| Research Process | Ease of Navigation chart |
| Our Solution | Style tiles set 2 |
| Our Solution | Wireframes + lo-fi |
| Our Solution | Hi-fi annotated |
| Site Improvements | Improved user flow (video) |
| Site Improvements | Old Resource Page |
| Site Improvements | Components 2 & 3 |
| Results | Final desktop design |

Unused public assets (can be deleted if confirmed unnecessary):
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` — Next.js defaults, not used anywhere in the portfolio

Social links in Footer are placeholder `href` values (`https://linkedin.com`, `https://instagram.com`) — need real profile URLs.

---

# Session 2026-04-30 — Cloudflare deploy fix, responsive audit, SVAEC polish

## Cloudflare deployment

- Build was failing: wrangler couldn't find a config or assets directory.
- Added `output: "export"` and `images.unoptimized: true` to `next.config.ts` so `npm run build` produces a static `out/` directory.
- Created `wrangler.jsonc` pointing `assets.directory` to `./out` with `compatibility_date: 2026-04-30`.
- Site was also being blocked by Cisco Umbrella as malware on `crisui.com` — false positive on a new domain. Submit recategorization at `support.umbrella.com` and `opendns.com/main/domaintagging/`.

## Responsive audit (whole site)

- **`ExperienceAccordion`** — root cause of the overlap bug on the about page. Replaced fixed `h-[80px]` + `flex-wrap` header with `flex-col md:flex-row`. Org/role/pills now stack on mobile/tablet, sit on one row on desktop. SJSU `\n` is collapsed to a space at runtime since name no longer needs to wrap.
- **About page hero photo** — fixed `minHeight: 466px` → `min-h-[360px] sm:min-h-[466px]`.
- **About page top spacing** — `py-[100px]` was too tight under the navbar on mobile → `pt-28 pb-12 sm:py-[100px]`.
- **Cases home card image** — `minHeight: 340px` → `aspect-[4/3] sm:aspect-auto sm:min-h-[340px]`.
- **SVAEC sidebar pills** — `MetaPill` now has `max-w-full break-words` so the long timeline string can't overflow.
- **About page** — fixed stray indentation before `<Footer />`.

## SVAEC case study polish (branch `svaec-polish`)

Added net-new sections without touching any of Cris's existing copy. All filler is clearly marked `[FILL IN: ...]` so it's grep-able:

- **Hero stat strip** — three quick scannable facts under the title (timeline · sample size · scope).
- **Live site link** — pill button below the stat strip, `[FILL IN]` URL.
- **Outcomes metrics row** — three stat tiles at the top of the Results card (big number + small label) for recruiter scannability.
- **Reflections card** — new section before back-to-cases with intro + 3 bullets ("what I learned" / "what I'd do differently").
- **Tools sidebar** — wired up Figma / Adobe Suite / WordPress / Asana icons, hover scale+rotate, fades in a rounded label below the icon (15px gap). Required `overflow-visible` on the sidebar Card so labels aren't clipped.

## Cases page redesign (Twitter timeline)

`app/cases/page.tsx` rewritten as a Twitter-style feed:

- Single feed card (`max-w-[600px]`, rounded, "Latest Work" sticky header bar, "you're all caught up" footer).
- Each project renders as a `CaseTweet`: header line (Cris Reyes ✓ @crisreyes · date), category in Twitter-blue, avatar + title row (avatar centered with title, intentionally not standard Twitter layout), description with inline hashtags, embedded image, full stats row (reply / repost / like / view) with the real Twitter brand colors on hover.
- Padding bumped from default `px-5 py-4` to `px-7 py-6` per design preference. `last:border-b-0` so the final tweet has no divider before the "all caught up" footer.

## Files touched this session

- `next.config.ts` — static export + unoptimized images
- `wrangler.jsonc` — new
- `components/ExperienceAccordion.tsx` — responsive header
- `components/About.tsx` — responsive photo height
- `components/Cases.tsx` — responsive image aspect
- `app/about/page.tsx` — top spacing + indentation
- `app/cases/page.tsx` — full Twitter timeline rewrite
- `app/cases/svaec/page.tsx` — stat strip, live link, metrics, reflections, tool icons + hover labels
- `public/icons/` — added `Figmaicon.png`, `AdobeCCicon.png`, `Wordpressicon.png`, replaced `asanaicon.png`

## Branches

- `main` and `dev` are in sync at the responsive-audit commit.
- `svaec-polish` is the current working branch with the case study additions and Twitter-timeline cases page. Not yet merged.

---

# Session 2026-05-05 — GradualBlur + animated sky hero

Branch: `feat/gradual-blur` (off `main`). One commit so far (`720cbcb`); the sky/cloud work is uncommitted.

## GradualBlur (page-fixed scroll blur)

New component ported from React Bits. Lives in `components/GradualBlur.tsx` + `components/GradualBlur.css`. Component is fully self-contained (no `mathjs` despite the upstream readme — the math is plain JS).

- Wired into `app/layout.tsx` once, with `target="page"` so it's `position: fixed` at the bottom of the viewport on every route.
- Current props: `position="bottom"`, `height="5rem"`, `strength={1.5}`, `divCount={8}`, `curve="bezier"`, `exponential={true}`. The exponential curve keeps the middle of the blur soft and punches harder at the very edge.
- White-on-white kills the visible blur, so this only "works" against pages with content scrolling underneath — fine for this portfolio because every page eventually has content. Don't use `target="parent"` on a section whose visible content area is pure white.

## Animated sky hero (`components/Hero.tsx` + `app/globals.css`)

Reworked the home Hero into a "vibrant sky" scene with the existing Twitter-card content floating on top as liquid glass.

### Sky cycle
- Animated CSS gradient on `.hero-sky` running on a 120s loop.
- Phases: morning peach → midday vibrant blue (longest hold) → golden mauve/orange → night deep navy (second-longest hold) → loop.
- Keyframes deliberately use minimal hold percentages so the bulk of the cycle is crossfade — `0%/8%, 30%/50%, 65%, 78%/92%, 100%`. If you want even smoother fades, drop the duplicate hold percentages entirely.
- `--hero-ink`, `--hero-ink-muted`, `--hero-ink-faint` are declared via `@property` and animated by `hero-text-cycle` on the same 120s clock so all card text inverts to light during the night phase. Card text uses inline `style={{ color: "var(--hero-ink)" }}` rather than Tailwind classes because Tailwind v4 arbitrary `text-[var(...)]` values work but are noisier — inline reads cleaner here.

### Clouds
- Five cumulus puffs drifting via three speeds: `cloud-slow` (140s), `cloud-medium` (95s), `cloud-fast` (65s) — only slow + medium are used now.
- `PuffyCloud` component renders 5–6 overlapping circles + a base ellipse, then runs them through:
  - `feTurbulence` (fractal noise) → `feDisplacementMap` for organic, irregular edges. Three filter variants (`cloud-organic-1/2/3`) with different seeds and frequencies.
  - Radial gradient fill (`#ffffff` top → `#c9d4e3` bottom edges) for soft volumetric shading.
- Each cloud is wrapped in a `.cloud-breathe` inner div that scales `1.0 → 1.05 → 1.0` over 18s with staggered delays so they puff while drifting. Drift transform is on the outer `.cloud`, breathe transform is on the inner div — keeps them composable.
- Three silhouette templates (`wide`, `tall`, `stretched`) for shape variety.

### Liquid glass card
- `.liquid-glass` class on the Twitter card. `backdrop-filter: blur(22px) saturate(180%)` + `rgba(255,255,255,0.42)` background + glossy edge shadows.
- Two pseudo-elements:
  - `::before` — bright white radial highlights at each corner (`mix-blend-mode: overlay`) for a polished glass shine.
  - `::after` — chromatic aberration via colored inset shadows at the four corners (red/cyan/blue/yellow). This is the "refraction at corners" effect — fakes light-bending without WebGL/displacement maps (which `backdrop-filter` doesn't reliably support across browsers).
- Avatar wrapper and `kbd` background are now `bg-white/80 backdrop-blur-sm` so they sit on the sky instead of breaking the glass aesthetic.

### Bottom fade into the page
- `.hero-bg-layer` wraps sky + clouds and applies `mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%)` so the sky dissolves to transparent over the bottom 45% of the hero, blending into the white Cases section beneath. The card is centered and sits above the fade zone, so it's never in the dissolve region.

### Things to know
- **Browser support:** `@property` requires Chrome 85+ / Safari 16.4+ / Firefox 128+. Without it the text-color animation just freezes at `initial-value` (still readable, just not animated).
- **Performance:** Five SVG clouds + drift + breathe + animated gradient is fine on modern hardware but is more GPU than the rest of the site. If issues come up, drop a cloud or two, or remove `cloud-breathe`.
- **Don't recreate the sky as a fixed background** — it's intentionally absolute inside the hero so it scrolls away naturally with the rest of the page.

## Files touched this session

- `components/GradualBlur.tsx` — new (TypeScript port)
- `components/GradualBlur.css` — new
- `app/layout.tsx` — adds `<GradualBlur />` once, page-fixed
- `components/Hero.tsx` — sky/cloud layers, liquid-glass card, animated text vars
- `app/globals.css` — `@property` declarations, sky/text/drift/breathe keyframes, `.hero-sky/.hero-bg-layer/.cloud*/.liquid-glass` styles

## Status

- Committed: GradualBlur integration (`720cbcb`).
- Uncommitted: all sky/cloud/liquid-glass work in `Hero.tsx` + `globals.css`. Worth committing as a second logical change before merging the branch.
