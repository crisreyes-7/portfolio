import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

export const metadata = {
  title: "SVAEC — Cris Reyes",
  description: "Web/UX redesign of the Salinas Valley Adult Education Consortium website.",
};

// ─── Case study data ─────────────────────────────────────────────────────────

const cs = {
  number: "01",
  title: "Salinas Valley Adult Education Consortium",
  category: "Web Design",
  heroImage: "/svaec/Header.png.avif",
  headline: "Website redesign to improve usability and accessibility for adult learners.",
  subheadline: "The previous site's structure and content issues limited usability for adult learners",
  meta: {
    type: "Web Design",
    role: "Lead Designer",
    platforms: "Desktop and Android",
    timeline: "January 2024 – March 2024",
    tools: [
      { name: "Figma",     icon: "/icons/Figmaicon.png" },
      { name: "Adobe Suite",  icon: "/icons/AdobeCCicon.png" },
      { name: "WordPress", icon: "/icons/Wordpressicon.png" },
      { name: "Asana",     icon: "/icons/asanaicon.png" },
    ],
  },
};

// ─── Shared primitives ───────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-[#0f0f0f] mb-4">{children}</p>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-[#e8e8e6] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function CardSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 border-t border-[#e8e8e6] first:border-t-0 ${className}`}>
      {children}
    </div>
  );
}

function Placeholder({ label, aspect }: { label: string; aspect: string }) {
  return (
    <div
      className="w-full rounded-xl bg-[#f5f5f4] border border-[#e8e8e6] flex items-center justify-center"
      style={{ aspectRatio: aspect }}
    >
      <span className="text-xs text-[#aaa] font-medium">{label}</span>
    </div>
  );
}

function MetaPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-[#d0d0ce] rounded-full px-3 py-1 text-sm text-[#0f0f0f] max-w-full break-words">
      {children}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SVAECPage() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <Navbar />

      {/* ── Hero header ── */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-[760px] mx-auto">
          {/* Back + case number row */}
          <div className="relative flex justify-center items-center mb-8">
            <Link
              href="/cases"
              className="absolute left-0 flex items-center gap-1.5 text-sm font-medium text-[#0f0f0f] border border-[#e8e8e6] rounded-lg px-3 py-1.5 hover:bg-[#f5f5f4] transition-colors duration-150"
            >
              ← Back
            </Link>
            <span className="text-sm font-semibold text-[#0f0f0f]">[Case {cs.number}]</span>
          </div>

          <h1 className="text-center font-bold text-[clamp(2rem,6vw,3.25rem)] leading-tight tracking-tight text-[#0f0f0f] mb-3">
            {cs.title}
          </h1>
          <p className="text-center text-[#888] text-base mb-6">{cs.category}</p>

          {/* Hero stat strip — restore when timeline/sample/scope are known */}
          {false && (
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-sm text-[#555]">
            <span>[FILL IN: e.g. 3-month redesign]</span>
            <span className="text-[#d0d0ce]">·</span>
            <span>[FILL IN: e.g. 58 learners surveyed]</span>
            <span className="text-[#d0d0ce]">·</span>
            <span>[FILL IN: e.g. 4 partner schools]</span>
          </div>
          )}

          {/* Live site link */}
          <div className="flex justify-center">
            <a
              href="https://svaec.org/schools-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f0f0f] bg-[#cce8f5] hover:bg-[#1e3a8a] hover:text-white border border-transparent rounded-full px-4 py-1.5 transition-colors duration-200"
            >
              View live site ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Cover image ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src={cs.heroImage}
              alt={`${cs.title} cover`}
              fill
              sizes="760px"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── Overview + sidebar ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[13fr_7fr] gap-8 items-start">

            {/* Left: main copy */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-bold text-[1.4rem] leading-snug tracking-tight text-[#0f0f0f] mb-3">
                  {cs.headline}
                </h2>
                <p className="font-semibold text-sm text-[#555] leading-relaxed">
                  {cs.subheadline}
                </p>
              </div>

              <div>
                <SectionLabel>[Project Overview]</SectionLabel>
                <p className="text-[#555] leading-relaxed text-sm">
                  Complete overhaul of the SVAEC website, including restructuring content,
                  clarifying navigation, modernizing the visual system, and improving
                  accessibility for adult learners across partner schools.
                </p>
              </div>

              <div>
                <SectionLabel>[Problem Statement]</SectionLabel>
                <div className="flex flex-col gap-4 text-[#555] leading-relaxed text-sm">
                  <p>
                    When we first looked at the SVAEC website, it was clear the information
                    people needed was technically there, but almost impossible to actually find.
                  </p>
                  <p>
                    The site was full of outdated content, broken links, and long paragraphs that
                    made navigation overwhelming, especially for the audience who relied on it
                    most: adult learners, many from older age groups and with varying literacy
                    levels.
                  </p>
                </div>
              </div>

              <div>
                <SectionLabel>[Goals &amp; Objectives]</SectionLabel>
                <p className="text-[#555] text-sm mb-4 leading-relaxed">
                  Going into the project, our team aligned on a few core goals to guide every decision:
                </p>
                <ul className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  {[
                    ["Simplify navigation", "to help learners easily find programs, and resources."],
                    ["Improve scannability", "by chunking content and using clear visual hierarchy."],
                    ["Add prominent CTAs", "guiding users step-by-step toward enrollment."],
                    ["Refresh the visual identity", "to feel modern, welcoming, and on-brand."],
                  ].map(([bold, rest]) => (
                    <li key={bold} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                      <span><strong className="text-[#0f0f0f]">{bold}</strong> {rest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: sticky sidebar */}
            <div className="lg:sticky lg:top-20">
              <Card className="!overflow-visible">
                <CardSection className="!py-5">
                  <p className="text-xs font-semibold text-[#888] mb-2">[Project type]</p>
                  <MetaPill>{cs.meta.type}</MetaPill>
                </CardSection>
                <CardSection className="!py-5">
                  <p className="text-xs font-semibold text-[#888] mb-2">[My Role]</p>
                  <MetaPill>{cs.meta.role}</MetaPill>
                </CardSection>
                <CardSection className="!py-5">
                  <p className="text-xs font-semibold text-[#888] mb-2">[Platforms]</p>
                  <MetaPill>{cs.meta.platforms}</MetaPill>
                </CardSection>
                <CardSection className="!py-5">
                  <p className="text-xs font-semibold text-[#888] mb-2">[Timeline]</p>
                  <MetaPill>{cs.meta.timeline}</MetaPill>
                </CardSection>
                <CardSection className="!py-5 overflow-visible">
                  <p className="text-xs font-semibold text-[#888] mb-3">[Tools]</p>
                  <div className="flex gap-2 flex-wrap">
                    {cs.meta.tools.map((tool, i) => (
                      <div key={tool.name} className="relative group/tool flex flex-col items-center">
                        <div
                          className={`w-11 h-11 rounded-xl bg-[#f5f5f4] border border-[#e8e8e6] flex items-center justify-center overflow-hidden transition-transform duration-200 ease-out group-hover/tool:scale-125 ${
                            i < 2 ? "group-hover/tool:rotate-[-12deg]" : "group-hover/tool:rotate-[12deg]"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-[#0f0f0f] bg-white border border-[#e8e8e6] rounded-lg px-2 py-1 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 pointer-events-none">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardSection>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Persona ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <SectionLabel>[Persona]</SectionLabel>
          <Card>
            {/* Header */}
            <CardSection className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex items-start gap-4 flex-1">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#e8e8e6] flex items-center justify-center flex-shrink-0 text-2xl">
                  👩
                </div>
                <div>
                  <p className="font-bold text-lg text-[#0f0f0f] leading-snug">Maria Hernandez</p>
                  <p className="text-sm text-[#888] mb-1">Restaurant Server</p>
                  <p className="text-sm text-[#555] leading-relaxed">
                    I want to go back to school, but I don&rsquo;t want to feel lost trying to figure it out.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                {["Age: 39", "Location: Salinas, CA", "Tech Proficiency: Beginner"].map((tag) => (
                  <MetaPill key={tag}>{tag}</MetaPill>
                ))}
              </div>
            </CardSection>

            {/* Goal + Frustrations */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <CardSection>
                <p className="text-xs font-semibold text-[#888] mb-3">[Goal]</p>
                <div className="bg-white rounded-xl border border-[#e8e8e6]">
                  {[
                    "Find a class that fits her work schedule.",
                    "Understand enrollment requirements without needing to call multiple offices.",
                    "Improve her skills to qualify for higher-paying jobs.",
                  ].map((item, i, arr) => (
                    <p key={i} className={`px-4 py-3 text-sm text-[#555] leading-relaxed ${i < arr.length - 1 ? "border-b border-[#e8e8e6]" : ""}`}>
                      {item}
                    </p>
                  ))}
                </div>
              </CardSection>
              <CardSection className="sm:border-l sm:border-t-0 border-t border-[#e8e8e6]">
                <p className="text-xs font-semibold text-[#888] mb-3">[Frustrations]</p>
                <div className="bg-white rounded-xl border border-[#e8e8e6]">
                  {[
                    "Overwhelmed by dense text and unclear instructions.",
                    "Difficulty understanding which school offers which program.",
                    "Confusion around enrollment steps, and deadlines.",
                  ].map((item, i, arr) => (
                    <p key={i} className={`px-4 py-3 text-sm text-[#555] leading-relaxed ${i < arr.length - 1 ? "border-b border-[#e8e8e6]" : ""}`}>
                      {item}
                    </p>
                  ))}
                </div>
              </CardSection>
            </div>
          </Card>
        </div>
      </section>

      {/* ── Research Process ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <SectionLabel>[Research Process]</SectionLabel>

          {/* Guiding Questions */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Guiding Questions</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Before we made any decisions, we wanted to deeply understand what learners were struggling with.
                To guide the redesign, we focused on answering <strong>three core questions:</strong>
              </p>
              {[
                ["Who", "are our users? (age range, tech comfort levels)"],
                ["What", "information do they care about most?"],
                ["How", "easily can they navigate the current site to find it?"],
              ].map(([bold, rest], i, arr) => (
                <p key={bold} className={`text-sm text-[#555] py-3 leading-relaxed ${i < arr.length - 1 ? "border-b border-[#e8e8e6]" : ""}`}>
                  <strong className="text-[#0f0f0f]">{bold}</strong> {rest}
                </p>
              ))}
            </CardSection>
          </Card>

          {/* Research Methods */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Research Methods</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                To answer these questions, we used a <strong>survey research</strong>:
              </p>
              <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Quantitative Survey (58 learners):</p>
              <p className="text-sm text-[#555] leading-relaxed mb-5">
                We collected responses through a Google Form that asked learners about their age range, what
                information they prioritize, and how easy the current site is to navigate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-[#e8e8e6] overflow-hidden">
                  <Lightbox src="/svaec/CPSV3ry4OfEUlTjxb7xw0abAI.svg" alt="Age Range chart" />
                </div>
                <div className="rounded-xl border border-[#e8e8e6] overflow-hidden">
                  <Lightbox src="/svaec/3WzK9rWdss2hUH31Jf8Zr5qUk.svg" alt="Top Information Needs chart" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                  <Lightbox src="/svaec/easeofnav.svg" alt="Ease of navigation chart" />
                </div>
              </div>
            </CardSection>
          </Card>

          {/* Key Findings */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Key Findings</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">As we dug into the data, a few things stood out:</p>
              <ul className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed mb-6">
                {[
                  ["Age + Tech literacy:", "Our users span a wide age range, with most between 35–54 and many 55+, which meant we needed to keep things simple, structured, and tech-friendly."],
                  ["Clear information priorities:", "Users cared most about course info, followed by career exploration and resources/services."],
                  ["Navigation barriers:", "Dense text, unclear hierarchy, and hidden CTAs made it hard for learners to find what they needed or complete tasks."],
                ].map(([bold, rest]) => (
                  <li key={bold as string} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                    <span><strong className="text-[#0f0f0f]">{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                <Lightbox src="/svaec/dBgzzdaMoBzeRlEVkswpFGn4o.png.webp" alt="Old homepage with annotated usability issues" />
              </div>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── Our Solution ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <SectionLabel>[Our Solution]</SectionLabel>

          {/* Guided Simplicity */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Guided Simplicity</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Our goal wasn&rsquo;t to just &ldquo;make it look better.&rdquo; We wanted to create a site that
                truly supported learners, guiding them, not confusing them.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-4">
                <div className="flex-1 flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  <p><strong className="text-[#0f0f0f]">We rebuilt the SVAEC website around a simple idea:</strong><br />
                    Help users find what they need in as few steps (and as little text) as possible.</p>
                  <p>This meant reorganizing content, restructuring pathways, reducing cognitive load, and redesigning
                    patterns that would support the way adult learners actually browse.</p>
                </div>
                <div className="w-full sm:w-[45%] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                    <Lightbox src="/svaec/EkbhCf0W6tIhiTqrQ0WzqQ9YcY.png.webp" alt="Site map / information architecture" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">
                The result is a modern, intuitive, and accessible website that helps learners move from curiosity
                ➡ clarity ➡ action without feeling lost.
              </p>
            </CardSection>
          </Card>

          {/* Visual Direction */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Visual Direction</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Once we aligned on the research and structure, we explored multiple visual directions.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-5">
                My team and I developed four style tile options to help the client choose the tone that best
                reflected the organization from typography and color all the way down to the feel of the site.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                  <Lightbox src="/svaec/8O7qLFKxi568cvLZjKQyGvmk4gU.png.webp" alt="Style tiles set 1" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6] aspect-[4/3]">
                  <Lightbox src="/svaec/exploration.webp" alt="Style tiles set 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </CardSection>
          </Card>

          {/* Wireframes */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Wireframes/Lo-Fi Designs</p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1 flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  <p>With the sitemap finalized, I guided my team through building low-fidelity wireframes that
                    focused purely on structure, content flow, and usability. We shared these with the client early
                    to make sure everyone was aligned before moving forward.</p>
                  <p>These conversations helped catch potential issues before we invested time in polish and
                    ultimately made the hi-fi phase much more efficient.</p>
                </div>
                <div className="w-full sm:w-[45%] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                    <Lightbox src="/svaec/lofi.png.webp" alt="Wireframes and lo-fi designs" />
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* Hi-Fidelity */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Hi-Fidelity Designs</p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1 flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  <p>Once lo-fi layouts were approved, we created the high-fidelity designs for both web and
                    mobile. These included refined typography, accessibility improvements, and updated layout
                    patterns. We iterated closely with the client to incorporate feedback while keeping
                    usability at the center.</p>
                </div>
                <div className="w-full sm:w-[45%] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                    <Lightbox src="/svaec/hifi.png.webp" alt="Hi-fidelity annotated designs" />
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── Site Improvements ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <SectionLabel>[Site Improvements]</SectionLabel>

          {/* Improved User Flow */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Improved User Flow</p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1 flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  <p>We reordered the landing page and introduced large, visual pathways that make the site
                    easier to use for learners with varying reading abilities.</p>
                  <p>Users can now browse classes visually, see which schools offer them, and quickly jump to
                    the correct enrollment page, all in a logical, step-by-step flow.</p>
                </div>
                {/* Video — restore when asset is ready */}
                {false && (
                <div className="w-full sm:w-[45%] flex-shrink-0">
                  <div className="w-full rounded-xl bg-[#f5f5f4] border border-[#e8e8e6] flex flex-col items-center justify-center gap-2 py-10">
                    <span className="text-2xl">▶</span>
                    <span className="text-xs text-[#aaa] font-medium text-center px-4">
                      Improved user flow — video coming soon
                    </span>
                  </div>
                </div>
                )}
              </div>
            </CardSection>
          </Card>

          {/* Resources */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Resources</p>
              <p className="text-sm text-[#555] leading-relaxed mb-2">
                We centralized essential information programs, partner schools, and resources into a clean,
                scannable structure.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-5">
                The old site depended heavily on scattered PDFs and broken links.<br />
                The new site makes everything discoverable in just a few clicks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                  <Lightbox src="/svaec/oldresource.png.webp" alt="Old resource page" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                  <Lightbox src="/svaec/gZoXYaOBzGuokGgkqq6DTeNPOB0.png.webp" alt="New resource page design" />
                </div>
              </div>
            </CardSection>
          </Card>

          {/* Components */}
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Components</p>
              <p className="text-sm text-[#555] leading-relaxed mb-2">
                We designed reusable components with clear titles and images. They make the site easier to
                scan, and more consistent.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-5">
                This was especially important for users with lower literacy levels who rely on visual cues to
                navigate.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="group/comp flex items-center justify-center p-1">
                  <div className="rounded-[4px] overflow-visible w-full transition-transform duration-200 ease-out group-hover/comp:scale-110 group-hover/comp:-rotate-[4deg]">
                    <Lightbox src="/svaec/component1.png.webp" alt="Component 1" className="w-full h-auto rounded-[4px]" />
                  </div>
                </div>
                <div className="group/comp flex items-center justify-center p-1">
                  <div className="rounded-[4px] overflow-visible w-full transition-transform duration-200 ease-out group-hover/comp:scale-110 group-hover/comp:rotate-[4deg]">
                    <Lightbox src="/svaec/component2.png.webp" alt="Component 2" className="w-full h-auto rounded-[4px]" />
                  </div>
                </div>
                <div className="group/comp flex items-center justify-center p-1">
                  <div className="rounded-[4px] overflow-visible w-full transition-transform duration-200 ease-out group-hover/comp:scale-110 group-hover/comp:-rotate-[4deg]">
                    <Lightbox src="/svaec/component3.png.webp" alt="Component 3" className="w-full h-auto rounded-[4px]" />
                  </div>
                </div>
                <div className="group/comp flex items-center justify-center p-1">
                  <div className="rounded-[4px] overflow-visible w-full transition-transform duration-200 ease-out group-hover/comp:scale-110 group-hover/comp:rotate-[4deg]">
                    <Lightbox src="/svaec/component4.png.webp" alt="Component 4" className="w-full h-auto rounded-[4px]" />
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <SectionLabel>[Results]</SectionLabel>
          <Card>
            {/* Metrics row — restore when outcome numbers are known */}
            {false && (
            <CardSection>
              <p className="text-xs font-semibold text-[#888] mb-4">[Outcomes]</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { stat: "[FILL IN: e.g. 85%]", label: "[FILL IN: metric label — e.g. task completion rate]" },
                  { stat: "[FILL IN: e.g. 3 → 1]", label: "[FILL IN: metric label — e.g. clicks to enrollment]" },
                  { stat: "[FILL IN: e.g. 4.6/5]", label: "[FILL IN: metric label — e.g. learner satisfaction]" },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl bg-[#f5f5f4] border border-[#e8e8e6] p-4">
                    <p className="font-bold text-2xl text-[#1e3a8a] leading-tight mb-1">{m.stat}</p>
                    <p className="text-xs text-[#555] leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </CardSection>
            )}
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Impact in Action</p>
              <div className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed mb-6">
                <p>
                  The client loved the new look, clean, modern, and still true to their brand. They were so happy
                  with the outcome that they even asked about future work with our team.
                </p>
                <p>
                  Internally, our quick task tests showed clear improvements: learners could find classes and find
                  resources much faster thanks to the simplified flow. Mobile navigation, which had been a major
                  struggle before, became straightforward and easy to use.
                </p>
                <p>
                  Overall, the redesign made the site feel lighter, more modern, and far more supportive of the
                  learners who rely on it.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6] aspect-[4/3]">
                  <Lightbox src="/svaec/impactinaction1.png.webp" alt="Impact in action — desktop" className="w-full h-full object-cover object-top" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6] aspect-[4/3]">
                  <Lightbox src="/svaec/impactinaction2.png.webp" alt="Impact in action — mobile" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── Reflections — restore when content is ready ── */}
      {false && (
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <SectionLabel>[Reflections]</SectionLabel>
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">What I Learned</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                [FILL IN: 1–2 sentence intro about what this project taught you as a designer.]
              </p>
              <ul className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                {[
                  ["[FILL IN: lesson 1 title]", "[FILL IN: 1–2 sentences on what you learned and how it shaped your approach.]"],
                  ["[FILL IN: lesson 2 title]", "[FILL IN: 1–2 sentences on what you learned and how it shaped your approach.]"],
                  ["[FILL IN: lesson 3 title — e.g. 'What I'd do differently']", "[FILL IN: 1–2 sentences on what you'd change with hindsight.]"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                    <span><strong className="text-[#0f0f0f]">{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </CardSection>
          </Card>
        </div>
      </section>
      )}

      {/* ── Back to cases ── */}
      <section className="px-6 pb-20">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f0f0f] group"
          >
            <span className="transition-transform duration-150 group-hover:-translate-x-0.5">←</span>
            <span className="group-hover:underline underline-offset-4">Back to all cases</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
