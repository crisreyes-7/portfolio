import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import CountUp from "@/components/CountUp";

export const metadata = {
  title: "Adobe Express Tutorial Series — Cris Reyes",
  description: "A 9-video tutorial series for Adobe for Nonprofits, produced at Digital NEST and published on Adobe Express's YouTube channel.",
};

// ─── Case study data ─────────────────────────────────────────────────────────

const cs = {
  number: "02",
  title: "Adobe Express Tutorial Series",
  category: "Content Design / Video Production",
  headline: "Adobe needed nonprofits to actually use Express. So we made tutorials that felt like a coworker showing you the ropes.",
  subheadline: "Most users didn't just need help using the tool. They needed help understanding how it fits into their everyday work.",
  meta: {
    type: "Content Design / Video Production",
    role: "Graphic Design Associate",
    company: "Digital NEST × Adobe for Nonprofits",
    platforms: "YouTube",
    timeline: "May 2024 – August 2024",
    tools: [
      { name: "Figma",           icon: "/icons/Figmaicon.png" },
      { name: "Adobe Premiere",  icon: "/icons/AdobeCCicon.png" },
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
      <span className="text-xs text-[#aaa] font-medium text-center px-4">{label}</span>
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

export default function AdobeVideoSeriesPage() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <Navbar />

      {/* ── Hero header ── */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-[760px] mx-auto">
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

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-sm text-[#555]">
            <span>4-month project</span>
            <span className="text-[#d0d0ce]">·</span>
            <span>9 videos produced</span>
            <span className="text-[#d0d0ce]">·</span>
            <span><CountUp value={11044} formatType="k-floor" suffix="+" duration={2400} /> YouTube views</span>
          </div>

          <div className="flex justify-center">
            <a
              href="https://youtu.be/wBxaklqbCzs?si=anQJwEgZb9I1I3Xc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f0f0f] bg-[#fce4e4] hover:bg-[#c0392b] hover:text-white border border-transparent rounded-full px-4 py-1.5 transition-colors duration-200"
            >
              View on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Cover image ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/adobe/hero.png.webp"
              alt="Adobe Express Tutorial Series cover"
              className="w-full h-full object-cover"
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
                  Adobe partnered with Digital NEST to produce a 9-video getting-started series for Adobe Express,
                  aimed at nonprofit organizations. I led content strategy, ran user research, and handled
                  end-to-end production, from storyboards through editing and thumbnails, for a series
                  that now lives on Adobe Express&rsquo;s YouTube channel.
                </p>
              </div>

              <div>
                <SectionLabel>[Problem Statement]</SectionLabel>
                <div className="flex flex-col gap-4 text-[#555] leading-relaxed text-sm">
                  <p>
                    Nonprofit teams run lean. One person might be doing outreach, managing social, writing copy,
                    and designing materials, all before lunch. Adobe Express is built to be accessible,
                    but &ldquo;accessible&rdquo; only goes so far when you&rsquo;re already overwhelmed.
                  </p>
                  <p>
                    During our interviews, one nonprofit had a single marketing coordinator handling all
                    their design and content work. She wasn&rsquo;t afraid of the tool. She was afraid of
                    adding one more thing to learn. That feeling was everywhere.
                  </p>
                  <p>
                    Adobe for Nonprofits needed tutorials that didn&rsquo;t just explain features.
                    They needed to show people <em>why it was worth their time</em>.
                  </p>
                </div>
              </div>

              <div>
                <SectionLabel>[Goals &amp; Objectives]</SectionLabel>
                <p className="text-[#555] text-sm mb-4 leading-relaxed">
                  We aligned on four goals that shaped every content decision:
                </p>
                <ul className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  {[
                    ["Make Adobe Express approachable", "introduce the platform in a way that feels simple and low-stakes for beginners."],
                    ["Demonstrate real use cases", "show how nonprofits use it for outreach, storytelling, and day-to-day content."],
                    ["Keep learning quick and actionable", "short tutorials people can follow and apply immediately."],
                    ["Encourage adoption", "help nonprofit teams feel confident enough to actually integrate it into their workflow."],
                  ].map(([bold, rest]) => (
                    <li key={bold} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                      <span><strong className="text-[#0f0f0f]">{bold}:</strong> {rest}</span>
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
                  <p className="text-xs font-semibold text-[#888] mb-2">[Company]</p>
                  <MetaPill>{cs.meta.company}</MetaPill>
                </CardSection>
                <CardSection className="!py-5">
                  <p className="text-xs font-semibold text-[#888] mb-2">[Platform]</p>
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
                            i < 1 ? "group-hover/tool:rotate-[-12deg]" : "group-hover/tool:rotate-[12deg]"
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
                  <p className="text-xs text-[#aaa] mt-3">Also: FigJam, Miro, QuickTime</p>
                </CardSection>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Process ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <SectionLabel>[Research Process]</SectionLabel>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Guiding Questions</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Before planning a single video, we needed to understand how nonprofit teams actually
                create content. We went in with three questions:
              </p>
              {[
                ["How", "do teams currently create and manage their content?"],
                ["Where", "do they get stuck, and what makes them avoid new tools?"],
                ["What", "would make Adobe Express feel relevant to their actual work?"],
              ].map(([bold, rest], i, arr) => (
                <p key={bold} className={`text-sm text-[#555] py-3 leading-relaxed ${i < arr.length - 1 ? "border-b border-[#e8e8e6]" : ""}`}>
                  <strong className="text-[#0f0f0f]">{bold}</strong> {rest}
                </p>
              ))}
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Interviews</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                I led interviews with three nonprofits across different sizes and missions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { org: "R.O.C.K. SF", size: "Small", focus: "Community programs" },
                  { org: "100 Cameras", size: "Mid-sized", focus: "Photography & storytelling" },
                  { org: "Doctors Without Borders", size: "Large", focus: "Global humanitarian aid" },
                ].map((o) => (
                  <div key={o.org} className="rounded-xl border border-[#e8e8e6] p-4">
                    <p className="font-bold text-sm text-[#0f0f0f] mb-1">{o.org}</p>
                    <p className="text-xs text-[#888] mb-2">{o.size} · {o.focus}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                <Lightbox src="/adobe/MiroPersona.png" alt="Miro persona ideation board" className="w-full h-auto" />
              </div>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Key Findings</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                A few things came up in every conversation:
              </p>
              <ul className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                {[
                  ["Context over features:", "Users didn't struggle to learn the tool. They struggled to see how it applied to their work. Feature walkthroughs weren't the answer."],
                  ["Capacity anxiety:", "Most teams are stretched thin. Any new tool feels like a risk if the learning curve isn't clear upfront."],
                  ["Visual confidence gap:", "Many team members didn't consider themselves designers. They needed permission to feel like they could use a design tool."],
                ].map(([bold, rest]) => (
                  <li key={bold as string} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                    <span><strong className="text-[#0f0f0f]">{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <SectionLabel>[Personas]</SectionLabel>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            The interviews surfaced three distinct user types. We built a persona around each one to keep the content strategy grounded in real needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  emoji: "👩‍💻",
                  name: "Maya Torres",
                  org: "Small Nonprofit",
                  quote: "I'm the designer, the marketer, and the social media person. I need something I can actually learn fast.",
                  tags: ["Speed", "Simplicity"],
                  needs: "She wears every hat. Tutorials need to show her how to do something useful in under 5 minutes.",
                  bg: "#fde8d8", border: "#f5c9a8",
                },
                {
                  emoji: "👨‍🎨",
                  name: "Jordan Kim",
                  org: "Mid-Sized Nonprofit",
                  quote: "We have a small team but a lot of content to push out. I need something scalable.",
                  tags: ["Efficiency", "Scalability"],
                  needs: "Has a small team but high output demands. Needs workflows they can repeat without starting from scratch.",
                  bg: "#ede8fe", border: "#d4c6fc",
                },
                {
                  emoji: "👩‍💼",
                  name: "Sarah Patel",
                  org: "Large Nonprofit",
                  quote: "We have staff across multiple regions. Consistency is everything for us.",
                  tags: ["Consistency", "Collaboration"],
                  needs: "Needs brand guardrails and team features. Tutorials should address templates and sharing.",
                  bg: "#fef9d8", border: "#f5e49a",
                },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl overflow-hidden" style={{ backgroundColor: p.bg, border: `1px solid ${p.border}` }}>
                  <CardSection>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#e8e8e6] flex items-center justify-center flex-shrink-0 text-xl">
                        {p.emoji}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#0f0f0f] leading-tight">{p.name}</p>
                        <p className="text-xs text-[#888]">{p.org}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#555] leading-relaxed italic mb-3">&ldquo;{p.quote}&rdquo;</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] font-medium border border-[#d0d0ce] rounded-full px-2 py-0.5 text-[#555]">{t}</span>
                      ))}
                    </div>
                    <p className="text-xs text-[#888] leading-relaxed">{p.needs}</p>
                  </CardSection>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── Content Strategy ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <SectionLabel>[Content Strategy]</SectionLabel>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Use Cases Over Features</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                The research made one thing clear: a tutorial called &ldquo;How to use the resize tool&rdquo;
                lands differently than &ldquo;How to repurpose your content for Instagram.&rdquo; Same feature,
                totally different frame.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-5">
                Using the personas, I proposed a 9-video series structured around nonprofit workflows, not Adobe features. Each video had to answer: <em>&ldquo;When would I actually use this?&rdquo;</em>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { theme: "Social Content",    desc: "Creating posts, stories, and visual assets for outreach", bg: "#fde8e8", border: "#f5c6c6" },
                  { theme: "Brand Consistency", desc: "Using templates and brand kits across your team",         bg: "#e8f0fe", border: "#c2d4fc" },
                  { theme: "Team Collaboration",desc: "Sharing assets and working across multiple contributors", bg: "#e8faf0", border: "#b6eecf" },
                ].map((t) => (
                  <div key={t.theme} className="rounded-xl p-4" style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}>
                    <p className="font-bold text-sm text-[#0f0f0f] mb-1">{t.theme}</p>
                    <p className="text-xs text-[#555] leading-snug">{t.desc}</p>
                  </div>
                ))}
              </div>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Storyboarding</p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1 flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  <p>
                    My team and I storyboarded every video before touching the recording software.
                    We mapped out each workflow step-by-step, focusing on clarity over comprehensiveness. If it didn&rsquo;t directly serve the use case, it got cut.
                  </p>
                  <p>
                    We focused on showing, not telling. Every step had a screen action behind it.
                    Adobe reviewed and approved all concepts before we moved to production.
                  </p>
                </div>
                <div className="w-full sm:w-[45%] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                    <Lightbox src="/adobe/storyboarding.png" alt="Storyboard frame" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">Production</p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1 flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                  <p>
                    Videos were shot in a screen recording + voiceover format, with short live-action intros
                    to set the use-case context before diving into the tool.
                  </p>
                  <p>I handled recording (QuickTime), voiceover, editing in Premiere Pro, and thumbnails
                    for all 9 videos. The live-action intros were produced with the video team.</p>
                </div>
                <div className="w-full sm:w-[45%] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                    <Lightbox src="/adobe/filming.JPG" alt="Production photoshoot" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── The Series ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <SectionLabel>[The Series]</SectionLabel>

          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">9 Videos, 9 Use Cases</p>
              <p className="text-sm text-[#555] leading-relaxed mb-5">
                Each thumbnail was designed to feel approachable, on-brand with Adobe Express, and
                scannable at YouTube thumbnail scale. Here&rsquo;s the full series:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { title: "Getting Started",          src: "/adobe/Thumbnail_GettingStarted.png" },
                  { title: "UI Navigation",             src: "/adobe/Thumbnail_UINav.png" },
                  { title: "Create a Post",             src: "/adobe/Thumbnail_CreatePost.png" },
                  { title: "Resize Tool",               src: "/adobe/Thumbnail_Resize.png" },
                  { title: "Brand Kit",                 src: "/adobe/Thumbnail_BrandKit.png" },
                  { title: "Documents",                 src: "/adobe/Thumbnail_Documents.png" },
                  { title: "Video & Motion",            src: "/adobe/Thumbnail_Video&Motion.png" },
                  { title: "Generative AI",             src: "/adobe/Thumbnail_GenAI.png" },
                  { title: "Collaboration & Efficiency",src: "/adobe/Thumbnail_Collab&Efficiency.png" },
                ].map((video, i) => (
                  <div key={i} className="group/thumb flex flex-col gap-1.5">
                    <div className="rounded-xl overflow-hidden border border-[#e8e8e6] aspect-video">
                      <Lightbox src={video.src} alt={video.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-[#555] font-medium leading-snug px-0.5">{video.title}</p>
                  </div>
                ))}
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
            <CardSection>
              <p className="text-xs font-semibold text-[#888] mb-4">[Outcomes]</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 11044, formatType: "comma"     as const, suffix: "+", label: "Total views across the series" },
                  { value: 2700,  formatType: "decimal-k" as const, suffix: "+", label: "Views on top video: Resize Tool" },
                  { value: 9,     formatType: "integer"   as const, label: "Videos produced, approved, and published" },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl bg-[#f5f5f4] border border-[#e8e8e6] p-4">
                    <CountUp value={m.value} formatType={m.formatType} suffix={"suffix" in m ? m.suffix : ""} className="font-bold text-2xl text-[#c0392b] leading-tight mb-1 block" />
                    <p className="text-xs text-[#555] leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </CardSection>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">What Happened After</p>
              <div className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed mb-6">
                <p>
                  The series shipped on Adobe Express&rsquo;s YouTube channel and got strong positive feedback
                  from the Adobe for Nonprofits team, specifically around the quality and the training approach.
                </p>
                <p>
                  More than the view count, what we were proud of was the response from the nonprofits
                  we interviewed. The framing worked. Showing a real use case before the feature made
                  the tool feel less intimidating.
                </p>
                <p>
                  The success of the series led to continued collaboration with the Adobe for Nonprofits
                  team, expanding the relationship beyond this initial project.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                  <Lightbox src="/adobe/Adobeteam1.JPEG" alt="Adobe for Nonprofits team" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e8e8e6]">
                  <Lightbox src="/adobe/Adobeteam2.JPG" alt="Adobe for Nonprofits team" className="w-full h-auto" />
                </div>
              </div>
            </CardSection>
          </Card>
        </div>
      </section>

      {/* ── Reflections ── */}
      <section className="px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <SectionLabel>[Reflections]</SectionLabel>
          <Card>
            <CardSection>
              <p className="font-bold text-base text-[#0f0f0f] mb-3">What I Learned</p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                This project reinforced something I keep coming back to: context is the actual design problem.
                Users don&rsquo;t just need to know how a tool works. They need to understand why it matters to them.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-[#555] leading-relaxed">
                {[
                  ["Context over completeness", "Covering every feature isn't the goal. Helping someone understand where to start is. The most effective tutorials weren't the most thorough. They were the most grounded in a real scenario."],
                  ["Research makes creative decisions easier", "Having real user voices behind the content strategy meant we could push back on generic feature walkthroughs with confidence. The personas weren't decoration. They were a decision-making tool."],
                  ["Production quality is trust", "Nonprofit users are skeptical of anything that feels like filler. Clean audio, paced well, no fluff. That's what made the series feel credible and worth watching."],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                    <span><strong className="text-[#0f0f0f]">{bold}:</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </CardSection>
          </Card>
        </div>
      </section>

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
