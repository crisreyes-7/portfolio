import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Case = {
  href: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  stats: { replies: string; reposts: string; likes: string; views: string };
};

const cases: Case[] = [
  {
    href: "/cases/svaec",
    image: "/svaec/case-thumbnail.webp",
    category: "Web/UX Design",
    title: "Salinas Valley Adult Education Consortium",
    description:
      "When we first looked at the SVAEC website, it was clear the information people needed was technically there, but almost impossible to actually find. So we redesigned it.",
    tags: ["WebDesign", "UXResearch", "Education"],
    date: "Mar 2024",
    stats: { replies: "12", reposts: "48", likes: "284", views: "5.2K" },
  },
  {
    href: "/cases/adobe-video-series",
    image: "/adobe/hero.png.webp",
    category: "Content Design / Video Production",
    title: "Adobe Express Tutorial Series",
    description:
      "Adobe needed nonprofits to actually use Express — so we made tutorials that felt like a coworker showing you the ropes, not a manual. 9 videos, 11K views, and a door that kept opening.",
    tags: ["ContentDesign", "VideoProduction", "UXResearch"],
    date: "Aug 2024",
    stats: { replies: "8", reposts: "31", likes: "197", views: "11K" },
  },
];

export const metadata = {
  title: "Cases — Cris Reyes",
  description: "Selected design and UX work by Cris Reyes.",
};

function CheckBadge() {
  return (
    <img src="/assets/varifyicon.png" alt="Verified" width={16} height={16} className="inline-block" />
  );
}

function StatIcon({ type }: { type: "reply" | "repost" | "like" | "view" }) {
  const icons = {
    reply: (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
    repost: (
      <path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
    like: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="none" stroke="currentColor" strokeWidth="2" />
    ),
    view: (
      <path d="M3 3v18h18M7 14l4-4 4 4 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function CaseTweet({ c }: { c: Case }) {
  return (
    <Link
      href={c.href}
      className="group block px-7 py-6 hover:bg-[#f7f9fa] transition-colors duration-150 border-b border-[#e8e8e6] last:border-b-0"
    >
      <div>
        {/* Header line */}
        <div className="flex items-center gap-1 text-[15px] flex-wrap mb-1">
          <span className="font-bold text-[#0f0f0f] truncate">Cris Reyes</span>
          <CheckBadge />
          <span className="text-[#536471]">@crisreyes</span>
          <span className="text-[#536471]">·</span>
          <span className="text-[#536471]">{c.date}</span>
        </div>

        {/* Category tag */}
        <p className="text-xs font-medium text-[#1D9BF0] mb-3">{c.category}</p>

        {/* Avatar + Title row — avatar centered with title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#e8e8e6] bg-white flex items-center justify-center p-1">
              <Image
                src="/assets/avatar.webp"
                alt="Cris Reyes avatar"
                width={48}
                height={48}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          </div>
          <h2 className="font-bold text-[#0f0f0f] text-lg leading-snug tracking-tight flex-1 min-w-0">
            {c.title}
          </h2>
        </div>

        <div>
          <p className="text-[15px] text-[#0f0f0f] leading-relaxed mb-3">
            {c.description}{" "}
            {c.tags.map((tag) => (
              <span key={tag} className="text-[#1D9BF0] hover:underline">
                #{tag}{" "}
              </span>
            ))}
          </p>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-[#e8e8e6] mb-3" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src={c.image}
              alt={`${c.title} project cover`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              unoptimized
            />
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-between text-[#536471] w-full">
            <div className="flex items-center gap-1.5 text-[13px] group-hover:text-[#1D9BF0] transition-colors duration-150">
              <StatIcon type="reply" />
              <span>{c.stats.replies}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] group-hover:text-[#00BA7C] transition-colors duration-150">
              <StatIcon type="repost" />
              <span>{c.stats.reposts}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] group-hover:text-[#F91880] transition-colors duration-150">
              <StatIcon type="like" />
              <span>{c.stats.likes}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] group-hover:text-[#1D9BF0] transition-colors duration-150">
              <StatIcon type="view" />
              <span>{c.stats.views}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CasesPage() {
  return (
    <main className="bg-white text-[#0f0f0f] overflow-x-hidden">
      <Navbar />

      {/* Page label */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-[760px] mx-auto flex justify-center">
          <span className="text-sm font-medium text-[#0f0f0f]">[Cases]</span>
        </div>
      </section>

      {/* Header */}
      <section className="pb-8 px-6">
        <div className="max-w-[760px] mx-auto text-center">
          <h1 className="font-bold tracking-[-0.02em] text-[#0f0f0f] leading-tight text-[clamp(1.75rem,4vw,2.5rem)]">
            Work that opens doors.
          </h1>
          <p className="mt-3 text-[#536471] text-[15px] leading-relaxed">
            A collection of projects focused on accessibility, usability, and visual clarity.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16 px-6">
        <div className="max-w-[760px] mx-auto rounded-2xl border border-[#e8e8e6] overflow-hidden bg-white">
          {/* Sticky tab header (Twitter-style "For you") */}
          <div className="px-7 py-4 border-b border-[#e8e8e6] bg-white/80 backdrop-blur-md">
            <p className="font-bold text-base text-[#0f0f0f]">Latest Work</p>
          </div>

          {/* Feed */}
          <div className="flex flex-col">
            {[...cases]
              .sort((a, b) => +new Date(`1 ${b.date}`) - +new Date(`1 ${a.date}`))
              .map((c) => (
                <CaseTweet key={c.href} c={c} />
              ))}

            {/* End of feed marker */}
            <div className="px-7 py-10 text-center text-sm text-[#536471]">
              You&rsquo;re all caught up · more cases coming soon
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
