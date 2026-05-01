"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function CheckBadge() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Verified"
    >
      <circle cx="12" cy="12" r="12" fill="#1D9BF0" />
      <path
        d="M9.5 16.5L5.5 12.5L6.91 11.09L9.5 13.67L17.09 6.08L18.5 7.5L9.5 16.5Z"
        fill="white"
      />
    </svg>
  );
}

export default function Hero() {
  const [toastState, setToastState] = useState<"hidden" | "in" | "out">("hidden");

  useEffect(() => {
    let outTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey) return;
      if (e.key !== "c") return;

      navigator.clipboard.writeText("CristianReyesDesign@gmail.com").catch(() => { });

      clearTimeout(outTimer);
      clearTimeout(hideTimer);
      setToastState("in");

      outTimer = setTimeout(() => setToastState("out"), 1800);
      hideTimer = setTimeout(() => setToastState("hidden"), 2100);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(outTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-14 px-6 bg-white">
      <div className="w-full max-w-[760px] flex flex-col items-center gap-5">

        {/* Tweet card */}
        <div className="w-full bg-white rounded-[20px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] p-6 md:p-8">

          {/* Avatar row */}
          <div className="mb-5">
            <div className="relative inline-block">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#e8e8e6] bg-white flex items-center justify-center p-1">
                <Image
                  src="https://framerusercontent.com/images/l7C4iE4BN6f4m1NhoOvRjV4DA.png"
                  alt="Cris Reyes avatar"
                  width={56}
                  height={56}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
              {/* Online dot */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>
          </div>

          {/* Name + verified */}
          <div className="flex flex-col gap-0.5 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[#0f0f0f] text-lg leading-snug">
                Cris Reyes
              </span>
              <CheckBadge />
            </div>
            <span className="text-[#888] text-sm">Designer</span>
          </div>

          {/* Bio */}
          <p className="text-[#555] text-[0.9375rem] leading-relaxed">
            Hey, I&rsquo;m Cristian a design engineer at{" "}
            <strong className="font-semibold text-[#0f0f0f]">Digital NEST</strong>{" "}
            🌿 based in{" "}
            <strong className="font-semibold text-[#0f0f0f]">Salinas, California</strong>{" "}
            🌊 where I specialize in crafting polished web interfaces with a strong
            focus on accessibility, web animation, and product design.
          </p>
        </div>

        {/* Email hint below card */}
        <div className="flex items-center gap-2.5">
          <span className="text-sm text-[#888]">Press</span>
          <kbd className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-[#e0e0de] text-xs font-semibold text-[#555] shadow-[0_1px_0_0_#d0d0ce]">
            C
          </kbd>
          <span className="text-sm text-[#888]">to copy my email</span>
        </div>
      </div>

      {/* Toast */}
      {toastState !== "hidden" && (
        <div
          className={`fixed bottom-8 left-1/2 z-50 flex items-center gap-2.5 bg-[#0f0f0f] text-white px-5 py-3 rounded-full text-sm font-medium shadow-xl ${toastState === "in" ? "toast-in" : "toast-out"
            }`}
        >
          <span className="text-base">✉️</span>
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
