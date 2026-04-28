"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Cases", href: "/cases" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[760px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold bg-white/50 backdrop-blur-md text-[#0f0f0f] px-4 py-2 rounded-xl border border-white/40 hover:bg-white/70 hover:border-white/50 hover:text-[#1e3a8a] transition-colors duration-200"
        >
          [Cris Reyes]
        </Link>

        {/* Menu button + dropdown anchored together */}
        <div className="relative flex flex-col items-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 bg-[#cce8f5]/70 backdrop-blur-md text-[#0f0f0f] text-sm font-semibold px-4 py-2 rounded-xl border border-transparent hover:bg-[#1e3a8a] hover:text-white transition-colors duration-200 group"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span>[Menu]</span>
            {open ? (
              <span className="text-base leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="block w-3.5 h-[1.5px] bg-[#0f0f0f] group-hover:bg-white rounded-full transition-colors duration-200" />
                <span className="block w-3.5 h-[1.5px] bg-[#0f0f0f] group-hover:bg-white rounded-full transition-colors duration-200" />
              </span>
            )}
          </button>

          {/* Pills drop from directly below the button */}
          <div className="absolute top-full right-0 pt-2 flex flex-col items-end gap-2">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              const delay = open ? i * 60 : (navLinks.length - 1 - i) * 60;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    transition: `transform 250ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 200ms ease ${delay}ms`,
                    transform: open ? "translateY(0)" : "translateY(-6px)",
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                  }}
                  className={`text-sm font-semibold px-4 py-2 rounded-xl border whitespace-nowrap backdrop-blur-md transition-colors duration-200 ${
                    isActive
                      ? "bg-[#1e3a8a] text-white border-transparent"
                      : "bg-[#cce8f5]/70 text-[#0f0f0f] border-transparent hover:bg-[#1e3a8a] hover:text-white"
                  }`}
                >
                  [{link.label}]
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
