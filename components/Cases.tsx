"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaLink from "./CtaLink";

const cases = [
  {
    href: "/cases/svaec",
    image: "/svaec/case-thumbnail.webp",
    alt: "Salinas Valley Adult Education Consortium project",
    category: "Web/UX Design",
    title: "Salinas Valley Adult Education Consortium",
    description: "When we first looked at the SVAEC website, it was clear the information people needed was technically there, but almost impossible to actually find.",
    tags: ["Web Design", "UX Research", "Education"],
  },
  {
    href: "/cases/adobe-video-series",
    image: "/adobe/hero.png.webp",
    alt: "Adobe Express Tutorial Series",
    category: "Content Design / Video Production",
    title: "Adobe Express Tutorial Series",
    description: "Adobe needed nonprofits to actually use Express. So we made tutorials that felt like a coworker showing you the ropes, not a manual.",
    tags: ["Content Design", "Video Production", "UX Research"],
  },
];

type Case = typeof cases[0];

function CaseCard({ c }: { c: Case }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const imgRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      href={c.href}
      ref={imgRef}
      className="group relative bg-white rounded-xl border border-[#e8e8e6] hover:border-[#1D9BF0] p-3 flex flex-col sm:flex-row gap-3 transition-colors duration-200"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span
        className={`absolute pointer-events-none z-10 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-[#d0d0ce] text-xs font-semibold text-[#0f0f0f] px-3 py-1.5 rounded-full whitespace-nowrap transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ left: pos.x, top: pos.y + 16 }}
      >
        [view project]
      </span>

      <div className="relative w-full sm:w-[50%] flex-shrink-0 rounded-xl overflow-hidden bg-[#e8e8e6] aspect-[4/3] sm:aspect-auto sm:min-h-[280px]">
        <Image
          src={c.image}
          alt={c.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          unoptimized
        />
      </div>

      <div className="flex flex-col justify-end gap-4 p-2 sm:p-4 flex-1">
        <span className="text-sm text-[#888] group-hover:text-[#1D9BF0] transition-colors duration-200">{c.category}</span>
        <h3 className="font-bold text-2xl leading-tight tracking-[-0.02em] text-[#0f0f0f]">
          {c.title}
        </h3>
        <p className="text-[#666] text-sm leading-relaxed">{c.description}</p>
        <div className="flex flex-wrap gap-2">
          {c.tags.map((tag, i) => (
            <span key={tag} className={`text-sm border rounded-full px-4 py-1.5 transition-colors duration-200 ${
              i % 4 === 0 ? "text-[#555] border-[#d0d0ce] group-hover:text-[#1D9BF0] group-hover:border-[#1D9BF0]" :
              i % 4 === 1 ? "text-[#555] border-[#d0d0ce] group-hover:text-[#00BA7C] group-hover:border-[#00BA7C]" :
              i % 4 === 2 ? "text-[#555] border-[#d0d0ce] group-hover:text-[#F91880] group-hover:border-[#F91880]" :
                            "text-[#555] border-[#d0d0ce] group-hover:text-[#1D9BF0] group-hover:border-[#1D9BF0]"
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Cases() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[760px] mx-auto">
        <span className="block text-sm font-semibold text-[#0f0f0f] mb-4">
          [Cases]
        </span>

        <div className="rounded-2xl border border-[#e8e8e6] bg-[#f5f5f4] shadow-sm p-4 flex flex-col gap-3">
          {cases.map((c) => (
            <CaseCard key={c.href} c={c} />
          ))}

          <CtaLink href="/cases" label="View All Cases" />
        </div>
      </div>
    </section>
  );
}
