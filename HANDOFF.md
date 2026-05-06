# Portfolio Handoff

**Stack:** Next.js, Tailwind CSS, Geist Sans  
**Path:** `/Users/cris/Desktop/Claude/portfolio`  
**Branch:** `feat/gradual-blur` (off `main`)

---

## Design System

- **Max width:** `max-w-[760px] mx-auto px-6`
- **Colors:** canvas `#ffffff`, ink `#0f0f0f`, muted `#555`/`#888`, border `#e8e8e6`
- **Card pattern:** outer `rounded-3xl border p-3 shadow-sm`, inner `rounded-2xl`
- **Section labels:** `text-sm font-medium` in brackets e.g. `[About]`

---

## File Map

```
app/
  page.tsx              — Home (Navbar + Hero + Cases + About + Footer)
  layout.tsx            — Root layout, Geist font, GradualBlur
  about/page.tsx        — About page
  cases/page.tsx        — Cases index (Twitter timeline style)
  cases/svaec/page.tsx  — SVAEC case study

components/
  Navbar.tsx            — Fixed top nav, dropdown pills
  Hero.tsx              — Vanta.js cloud hero, press C to copy email
  Cases.tsx             — Home page cases preview
  About.tsx             — Home page about preview + marquee
  Footer.tsx            — Live clock, email + socials
  Marquee.tsx           — Scrolling tool icons
  CtaLink.tsx           — Reusable CTA pill link
  ExperienceAccordion.tsx — Collapsible experience/education
  GradualBlur.tsx/.css  — Page-fixed scroll blur at viewport bottom
```

---

## Hero — Vanta.js Cloud Background

Powered by `VANTA.CLOUDS` + `three`. SSR-safe via `await import()` in `useEffect`.

**60-second day/night cycle:**
- 0–20s: Day hold → 20–30s: transition → 30–50s: Night hold → 50–60s: transition back
- Smoothstep easing on transitions; 3 pre-allocated `THREE.Color` objects (no GC per frame)

**Color palettes:**

| | Day | Night |
|---|---|---|
| backgroundColor | `#ffffff` | `#000000` |
| skyColor | `#c1e9ff` | `#1b1570` |
| cloudColor | `#bce2ff` | `#c6c9ff` |
| cloudShadowColor | `#316d94` | `#42468c` |
| sunColor | `#ffad22` | `#b8bafc` |
| sunGlareColor | `#ff7a33` | `#c9d8fc` |
| sunlightColor | `#ffa82b` | `#d6cefc` |

**Card:** `.liquid-glass` — `blur(10px) saturate(180%)`. Background + border driven by `--glass-bg` / `--glass-border` CSS vars updated each frame.  
**Text:** `--hero-ink` var — white at day, near-black at night.  
**Fallback:** `bg-gradient-to-b from-[#c1e9ff] to-[#ffffff]` shows if WebGL fails.  
**Bottom fade:** Separate `h-48` overlay fades scene into `#ffffff`.  
⚠️ Don't put `-z-10` on `vantaRef` — it hides Vanta's canvas behind the page.

---

## Liquid Glass Card (`.liquid-glass`)

Defined in `app/globals.css`. `backdrop-filter: blur(10px) saturate(180%)`. Background + border use CSS vars (`--glass-bg`, `--glass-border`) so the Hero animation loop can update them in sync with the sky.

---

## Placeholders — SVAEC Case Study

Still waiting for real assets (in `app/cases/svaec/page.tsx`):

| Section | Asset |
|---|---|
| Research Process | Ease of Navigation chart |
| Our Solution | Style tiles set 2, Wireframes, Hi-fi annotated |
| Site Improvements | Improved user flow (video), Old Resource Page, Components 2 & 3 |
| Results | Final desktop design |

Footer social links (`/Footer.tsx`) still use placeholder `href` values — need real LinkedIn + Instagram URLs.

---

## Deployment

- `output: "export"` + `images.unoptimized: true` in `next.config.ts` → static `out/` dir
- `wrangler.jsonc` → Cloudflare Pages, `assets.directory: "./out"`
- Domain `crisui.com` — if blocked by Cisco Umbrella, submit recategorization at `support.umbrella.com`
