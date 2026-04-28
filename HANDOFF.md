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
