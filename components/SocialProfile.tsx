"use client";

import { useState } from "react";
import Image from "next/image";

type Entry = {
  id: string;
  org: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  type: "work" | "edu";
};

const entries: Entry[] = [
  {
    id: "digital-nest",
    org: "Digital NEST",
    role: "Design Associate / Adobe Fellow",
    date: "Aug 2024 – Current",
    location: "Salinas, CA",
    type: "work",
    bullets: [
      "Lead a small design team, guiding visual and UX decisions across projects.",
      "Conduct UX research to improve website navigation, usability, and engagement.",
      "Created and led workshops to simplify Adobe tools for learners.",
    ],
  },
  {
    id: "sjsu",
    org: "San Jose State University",
    role: "Design Studies B.A.",
    date: "May 2023 – May 2024",
    location: "San Jose, CA",
    type: "edu",
    bullets: [
      "Developed visual communication systems and brand identity frameworks across multi-platform projects.",
      "Applied user research methods and design thinking principles to solve complex interface problems.",
      "Produced a senior capstone exploring accessible design patterns for underserved digital audiences.",
    ],
  },
  {
    id: "hartnell",
    org: "Hartnell College",
    role: "Studio Arts A.A.",
    date: "May 2022 – May 2023",
    location: "Salinas, CA",
    type: "edu",
    bullets: [
      "Built a strong foundation in typography, color theory, and layout using industry-standard tools.",
      "Gained hands-on experience with Adobe Creative Suite including Illustrator, Photoshop, and InDesign.",
      "Completed projects focused on visual hierarchy, print production, and digital composition techniques.",
    ],
  },
];

function OrgInitial({ org, type }: { org: string; type: "work" | "edu" }) {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 ${
        type === "work"
          ? "bg-[#1e3a8a] text-white"
          : "bg-[#cce8f5] text-[#1e3a8a]"
      }`}
    >
      {org.charAt(0)}
    </div>
  );
}

function BioPost() {
  return (
    <div className="rounded-2xl border border-[#e8e8e6] bg-white overflow-hidden">
      <div className="px-5 pt-4 pb-4">
        {/* Header with avatar inside */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#e8e8e6] bg-white flex-shrink-0">
            <Image src="/assets/avatar.webp" alt="Cris Reyes" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-[#0f0f0f]">Cris Reyes</span>
              <img src="/assets/varifyicon.png" alt="Verified" width={15} height={15} className="inline-block" />
              <span className="text-xs text-[#888]">@cristian_reyes · Jun 2025</span>
            </div>
            <p className="text-xs font-medium text-[#1e3a8a]">Design Engineer / Adobe Fellow</p>
          </div>
        </div>

        {/* Bio body */}
        <div className="flex flex-col gap-2 text-sm leading-relaxed mb-3">
          <p className="text-[#555]">
            Hi, I&rsquo;m <strong className="text-[#0f0f0f]">Cris Reyes</strong>, a UX and brand designer passionate about crafting intuitive, cohesive digital experiences.
          </p>
          <p className="text-[#555]">I think of design like a door. A well designed door goes unnoticed, you just move through it.</p>
          <p className="text-[#555]">That&rsquo;s how I approach my work: striving to create frictionless experiences that help people move forward.</p>
        </div>

      </div>

      <div className="px-5 py-2.5 border-t border-[#f0f0ee] flex gap-6 text-xs text-[#ccc]">
        <span>💬 0</span>
        <span>↺ 0</span>
        <span>♡ 0</span>
        <span>↗ 0</span>
      </div>
    </div>
  );
}

function FeedCard({ entry, isLast }: { entry: Entry; isLast: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-3">
      {/* Left: avatar + thread line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <OrgInitial org={entry.org} type={entry.type} />
        {!isLast && <div className="w-px flex-1 bg-[#e8e8e6] mt-2 mb-1" />}
      </div>

      {/* Right: tweet card */}
      <div className="flex-1 pb-4 min-w-0">
        <button
          onClick={() => setOpen((v) => !v)}
          className={`group w-full text-left rounded-2xl border bg-white transition-all duration-300 overflow-hidden ${
            open
              ? "border-[#1e3a8a] shadow-[0_4px_24px_0_rgba(30,58,138,0.15)]"
              : "border-[#e8e8e6] hover:border-[#c8d8f0]"
          }`}
        >
          <div className="px-5 pt-4 pb-3">
            {/* Tweet header */}
            <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 mb-1">
              <span className="font-bold text-sm text-[#0f0f0f] leading-snug">
                <span className="font-medium text-[#aaa]">@</span>{entry.org}
              </span>
              <span className="text-xs text-[#888]">· {entry.date}</span>
            </div>

            {/* Role */}
            <p className="text-sm text-[#555] mb-1">{entry.role}</p>

            {/* Location */}
            <p className="text-xs text-[#aaa] mb-3">{entry.location}</p>

            {/* Preview bullet (collapsed) */}
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: open ? "0fr" : "1fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-xs text-[#bbb] line-clamp-2 mb-2">{entry.bullets[0]}</p>
                <span className="text-xs font-medium text-[#1e3a8a]">Show more ↓</span>
              </div>
            </div>

            {/* Expanded bullets */}
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <ul className="flex flex-col gap-2 pt-1 pb-1">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1e3a8a]/40 flex-shrink-0" />
                      <span className="text-xs text-[#555] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-xs font-medium text-[#aaa] mt-2 inline-block">Show less ↑</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-2.5 border-t border-[#f0f0ee] flex gap-5 text-xs text-[#ccc]">
            <span>♡ 0</span>
            <span>↺ 0</span>
            <span>···</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function SocialProfile() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-[760px] mx-auto">

        {/* Profile card */}
        <div id="home" className="scroll-mt-24 rounded-3xl border border-[#e8e8e6] shadow-[0_2px_24px_0_rgba(0,0,0,0.06)] overflow-hidden">

          {/* Banner */}
          <div className="relative h-36 sm:h-44 bg-[#1e3a8a] overflow-hidden">
            <Image
              src="/assets/about-photo.webp"
              alt=""
              fill
              sizes="760px"
              className="object-cover object-top opacity-40"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/60 to-[#1e3a8a]/80" />
          </div>

          {/* Profile body */}
          <div className="bg-[#fafafa] px-6 pb-6">
            <div className="-mt-8 mb-4">
              <div className="relative inline-block">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#fafafa] bg-white shadow-sm">
                  <Image src="/assets/avatar.webp" alt="Cris Reyes" width={64} height={64} className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#fafafa]" />
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-bold text-lg text-[#0f0f0f] leading-snug">Cris Reyes</span>
              <img src="/assets/varifyicon.png" alt="Verified" width={18} height={18} className="inline-block" />
            </div>
            <p className="text-sm text-[#888] mb-3">@cristian_reyes · Design Engineer</p>

            <p className="text-sm text-[#555] leading-relaxed mb-3">
              Hey, I&rsquo;m Cristian — a <strong className="text-[#0f0f0f]">design engineer</strong> at{" "}
              <strong className="text-[#0f0f0f]">Digital NEST</strong>{" "}
              <img src="/assets/nestbug.png" alt="" className="inline-block w-5 h-5 align-middle rounded-sm" />{" "}
              based in <strong className="text-[#0f0f0f]">Salinas, California</strong>. I specialize in
              polished web interfaces with a focus on accessibility, animation, and product design.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#888] mb-4">
              <span>📍 Salinas, CA</span>
              <span>🏢 Digital NEST · Adobe Fellow</span>
              <span>📅 Since Aug 2024</span>
            </div>

            <div className="flex gap-4 text-sm">
              <span><strong className="text-[#0f0f0f]">1</strong> <span className="text-[#888]">Role</span></span>
              <span><strong className="text-[#0f0f0f]">2</strong> <span className="text-[#888]">Schools</span></span>
              <span><strong className="text-[#0f0f0f]">Adobe</strong> <span className="text-[#888]">Fellow</span></span>
            </div>
          </div>
        </div>

        {/* Bio post */}
        <div id="bio" className="scroll-mt-24 mt-6 mb-6">
          <BioPost />
        </div>

        {/* Feed label */}
        <div id="experience" className="scroll-mt-24 flex items-center gap-3 mt-6 mb-5">
          <span className="text-sm font-medium text-[#0f0f0f]">[Experience / Education]</span>
          <div className="flex-1 h-px bg-[#e8e8e6]" />
        </div>

        {/* Thread feed */}
        <div className="flex flex-col">
          {entries.map((entry, i) => (
            <FeedCard key={entry.id} entry={entry} isLast={i === entries.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
}
