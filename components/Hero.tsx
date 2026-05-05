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


function CloudPhoto({ src, width, opacity }: {
  src: string;
  width: number;
  opacity: number;
}) {
  return (
    <img
      src={src}
      width={width}
      alt=""
      style={{ display: "block", opacity, mixBlendMode: "screen", filter: "url(#clouds-warp)", willChange: "filter" }}
    />
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
    <section className="hero-cycle-text relative min-h-screen overflow-hidden">
      {/* Sky + clouds — both fade out toward the bottom of the hero */}
      <div className="hero-bg-layer absolute inset-0" aria-hidden="true">
        <div className="hero-sky-layer hero-sky-day" />
        <div className="hero-sky-layer hero-sky-night" />

        {/* Drifting real cloud photos — single filter on container */}
        <div className="absolute inset-0 pointer-events-none">
          {/* w=440, close → 80s */}
          <div className="cloud cloud-slow" style={{ top: "8%", animationDuration: "80s" }}>
            <div className="cloud-breathe">
              <CloudPhoto src="/assets/cloudsCloud-1.png" width={440} opacity={0.95} />
            </div>
          </div>
          {/* w=360, far → 160s */}
          <div className="cloud cloud-slow" style={{ top: "22%", animationDelay: "-30s", animationDuration: "160s" }}>
            <div className="cloud-breathe" style={{ animationDelay: "-4s" }}>
              <CloudPhoto src="/assets/cloudsCloud-4.png" width={360} opacity={0.85} />
            </div>
          </div>
          {/* w=520, closest → 65s */}
          <div className="cloud cloud-slow" style={{ top: "38%", animationDelay: "-65s", animationDuration: "65s" }}>
            <div className="cloud-breathe" style={{ animationDelay: "-9s" }}>
              <CloudPhoto src="/assets/cloudsCloud-7.png" width={520} opacity={0.9} />
            </div>
          </div>
          {/* w=400, mid → 115s */}
          <div className="cloud cloud-slow" style={{ top: "54%", animationDelay: "-12s", animationDuration: "115s" }}>
            <div className="cloud-breathe" style={{ animationDelay: "-2s" }}>
              <CloudPhoto src="/assets/cloudsCloud-3.png" width={400} opacity={0.8} />
            </div>
          </div>
          {/* w=300, furthest → 200s */}
          <div className="cloud cloud-slow" style={{ top: "16%", animationDelay: "-90s", animationDuration: "200s" }}>
            <div className="cloud-breathe" style={{ animationDelay: "-13s" }}>
              <CloudPhoto src="/assets/cloudsCloud-5.png" width={300} opacity={0.75} />
            </div>
          </div>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-14 px-6">
        <div className="w-full max-w-[760px] flex flex-col items-center gap-5">

          {/* Tweet card — liquid glass */}
          <div className="liquid-glass w-full p-6 md:p-8">

            {/* Avatar row */}
            <div className="mb-5">
              <div className="relative inline-block">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/60 bg-white/80 flex items-center justify-center p-1 backdrop-blur-sm">
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
                <span
                  className="font-semibold text-lg leading-snug"
                  style={{ color: "var(--hero-ink)" }}
                >
                  Cris Reyes
                </span>
                <CheckBadge />
              </div>
              <span className="text-sm" style={{ color: "var(--hero-ink-faint)" }}>
                Designer
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-[0.9375rem] leading-relaxed"
              style={{ color: "var(--hero-ink-muted)" }}
            >
              Hey, I&rsquo;m Cristian a design engineer at{" "}
              <strong className="font-semibold" style={{ color: "var(--hero-ink)" }}>
                Digital NEST
              </strong>{" "}
              🌿 based in{" "}
              <strong className="font-semibold" style={{ color: "var(--hero-ink)" }}>
                Salinas, California
              </strong>{" "}
              🌊 where I specialize in crafting polished web interfaces with a strong
              focus on accessibility, web animation, and product design.
            </p>
          </div>

          {/* Email hint below card */}
          <div className="flex items-center gap-2.5">
            <span className="text-sm" style={{ color: "black" }}>
              Press
            </span>
            <kbd
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/80 backdrop-blur-sm border border-white/60 text-xs font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)]"
              style={{ color: "black" }}
            >
              C
            </kbd>
            <span className="text-sm" style={{ color: "black" }}>
              to copy my email
            </span>
          </div>
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
