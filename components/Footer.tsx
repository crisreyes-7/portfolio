"use client";

import { useEffect, useRef, useState } from "react";

function formatDate(d: Date) {
  return (
    d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) +
    " – " +
    d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
  );
}

function FitText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement | null>(null);
  const [fontSize, setFontSize] = useState(120);

  useEffect(() => {
    // Keep probe alive for the component lifetime so resize re-uses it after fonts load
    const probe = document.createElement("span");
    probe.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;font-size:100px;font-weight:700;" +
      "white-space:nowrap;visibility:hidden;font-family:var(--font-geist-sans),Geist,sans-serif;";
    probe.textContent = text;
    document.body.appendChild(probe);
    probeRef.current = probe;

    const fit = () => {
      if (!containerRef.current || !probeRef.current) return;
      const available = containerRef.current.offsetWidth;
      const w = probeRef.current.offsetWidth;
      if (available > 0 && w > 0) setFontSize((available / w) * 100);
    };

    // Wait for fonts before first measurement
    document.fonts.ready.then(() => {
      fit();
    });

    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      document.body.removeChild(probe);
      probeRef.current = null;
    };
  }, [text]);

  return (
    <div ref={containerRef} className="w-full leading-none">
      <span
        style={{ fontSize: `${fontSize}px` }}
        className="block font-bold text-[#e8e8e6] select-none whitespace-nowrap leading-[0.85]"
      >
        {text}
      </span>
    </div>
  );
}

export default function Footer() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setDateStr(formatDate(new Date()));
    const id = setInterval(() => setDateStr(formatDate(new Date())), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="px-6 pt-12 pb-12 overflow-hidden">
      <div className="max-w-[760px] mx-auto">
        <p className="text-sm text-[#888] mb-3">
          Yay! We&rsquo;ve made it to the finish line. Say 👋 hi!
        </p>

        {/* Email + date row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-8">
          <a
            href="mailto:CristianReyesDesign@gmail.com"
            className="group inline-flex items-center gap-2 font-bold text-xl sm:text-2xl text-[#0f0f0f] tracking-tight leading-tight border-b-2 border-[#0f0f0f]"
          >
            <span className="inline-block flex-shrink-0 transition-transform duration-200 ease-in-out group-hover:-rotate-45">↘</span>
            <span className="relative overflow-hidden" style={{ display: "inline-block", height: "1.2em" }}>
              <span className="block whitespace-nowrap transition-transform duration-200 ease-in-out group-hover:translate-y-full">CristianReyesDesign@gmail.com</span>
              <span className="absolute inset-0 block whitespace-nowrap -translate-y-full transition-transform duration-200 ease-in-out group-hover:translate-y-0">Let&rsquo;s Talk</span>
            </span>
          </a>
          {dateStr && (
            <span className="text-sm text-[#aaa] flex-shrink-0">{dateStr}</span>
          )}
        </div>

        {/* Social links */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <a
            href="https://www.linkedin.com/in/cristian-reyes7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#0f0f0f] hover:text-[#555] hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            [LinkedIn]
          </a>
          <a
            href="https://github.com/crisreyes-7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#0f0f0f] hover:text-[#555] hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            [GitHub]
          </a>
        </div>

        {/* [The End] — fits exactly within the container */}
        <FitText text="[The End]" />
      </div>
    </footer>
  );
}
