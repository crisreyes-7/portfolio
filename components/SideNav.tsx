"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
  icon: (active: boolean) => React.ReactNode;
};

const items: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5Z" />
      </svg>
    ),
  },
  {
    id: "bio",
    label: "Bio",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6v1H4v-1Z" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

export default function SideNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section whose midpoint is closest to the viewport center band
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Page sections"
      className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-6 z-40 flex-col gap-1"
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => jumpTo(item.id)}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-4 pl-3 pr-6 py-3 rounded-2xl text-[#0f0f0f] transition-[background-color,transform] duration-200 ease-out hover:bg-black/[0.045] active:scale-[0.97] active:bg-black/[0.07]"
          >
            <span className="flex-shrink-0 transition-transform duration-200 ease-out group-hover:scale-110">
              {item.icon(isActive)}
            </span>
            <span className={`text-base transition-[font-weight] ${isActive ? "font-bold" : "font-normal"}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
