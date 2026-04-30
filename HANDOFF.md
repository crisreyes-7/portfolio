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
