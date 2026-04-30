"use client";

import { useState } from "react";

type Entry = {
  id: string;
  org: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
};

const entries: Entry[] = [
  {
    id: "digital-nest",
    org: "Digital NEST",
    role: "Design Associate / Adobe Fellow",
    date: "Aug 2024 – Current",
    location: "Salinas CA, United States",
    bullets: [
      "Lead a small design team, guiding visual and UX decisions across projects.",
      "Conduct UX research to improve website navigation, usability, and engagement.",
      "Created and led workshops to simplify Adobe tools for learners.",
    ],
  },
  {
    id: "sjsu",
    org: "San Jose State\nUniversity",
    role: "Design Studies B.A.",
    date: "May 2023 – May 2024",
    location: "California, United States",
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
    location: "California, United States",
    bullets: [
      "Built a strong foundation in typography, color theory, and layout using industry-standard tools.",
      "Gained hands-on experience with Adobe Creative Suite including Illustrator, Photoshop, and InDesign.",
      "Completed projects focused on visual hierarchy, print production, and digital composition techniques.",
    ],
  },
];

function Pill({ children, open }: { children: React.ReactNode; open: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm transition-colors duration-300 ${
        open
          ? "border border-[#2d4fa0] text-[#cce8f5]"
          : "border border-[#d0d0ce] text-[#555] group-hover:border-[#2d4fa0] group-hover:text-[#cce8f5]"
      }`}
    >
      {children}
    </span>
  );
}

export default function ExperienceAccordion() {
  const [open, setOpen] = useState<string>("digital-nest");

  return (
    <div className="rounded-3xl border border-[#e8e8e6] p-3 flex flex-col gap-3">
      {entries.map((entry) => {
        const isOpen = open === entry.id;

        return (
          <button
            key={entry.id}
            onClick={() => setOpen(isOpen ? "" : entry.id)}
            className={`group w-full text-left rounded-2xl transition-colors duration-300 overflow-hidden ${
              isOpen
                ? "bg-[#1e3a8a]"
                : "bg-white border border-[#e8e8e6] hover:bg-[#1e3a8a] hover:border-[#1e3a8a]"
            }`}
          >
            {/* Header — always visible */}
            <div className="px-5 sm:px-6 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-x-6 md:gap-y-2">
              <p
                className={`font-bold text-lg md:w-[160px] md:flex-shrink-0 whitespace-pre-line transition-colors duration-300 ${
                  isOpen ? "text-white" : "text-[#0f0f0f] group-hover:text-white"
                }`}
              >
                {entry.org.replace("\n", " ")}
              </p>
              <p
                className={`text-sm md:flex-1 transition-colors duration-300 ${
                  isOpen ? "text-[#cce8f5]" : "text-[#555] group-hover:text-[#cce8f5]"
                }`}
              >
                {entry.role}
              </p>
              <div className="flex gap-2 flex-wrap">
                <Pill open={isOpen}>{entry.date}</Pill>
                <Pill open={isOpen}>{entry.location}</Pill>
              </div>
            </div>

            {/* Expandable bullets */}
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#2d4fa0]">
                  <ul className="flex flex-col divide-y divide-[#2d4fa0] mt-3">
                    {entry.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#cce8f5] flex-shrink-0" />
                        <span className="text-sm text-[#cce8f5] leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
