"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CSS_INK    = "--hero-ink";
const CSS_GLASS  = "--glass-bg";
const CSS_BORDER = "--glass-border";
const CSS_ICON_INVERT = "--icon-invert";

function CheckBadge() {
  return (
    <img src="/assets/varifyicon.png" alt="Verified" width={20} height={20} className="inline-block" style={{ filter: "invert(var(--icon-invert, 0))" }} />
  );
}

export default function Hero() {
  const [toastState, setToastState] = useState<"hidden" | "in" | "out">("hidden");
  const vantaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let effect: any;
    let animationFrameId: number;
    let cancelled = false;
    const cycleDuration = 60000;

    const initVanta = async () => {
      if (!vantaRef.current) return;

      const [THREE, VantaClouds] = await Promise.all([
        import("three"),
        // @ts-expect-error — no types for vanta
        import("vanta/dist/vanta.clouds.min"),
      ]);

      if (cancelled) return;

      const CLOUDS = VantaClouds.default || VantaClouds;

      const day = {
        backgroundColor: new THREE.Color(0xffffff),
        skyColor:        new THREE.Color(0xc1e9ff),
        cloudColor:      new THREE.Color(0xbce2ff),
        cloudShadowColor:new THREE.Color(0x316d94),
        sunColor:        new THREE.Color(0xffad22),
        sunGlareColor:   new THREE.Color(0xff7a33),
        sunlightColor:   new THREE.Color(0xffa82b),
      };

      const night = {
        backgroundColor: new THREE.Color(0x000000),
        skyColor:        new THREE.Color(0x1b1570),
        cloudColor:      new THREE.Color(0xc6c9ff),
        cloudShadowColor:new THREE.Color(0x42468c),
        sunColor:        new THREE.Color(0xb8bafc),
        sunGlareColor:   new THREE.Color(0xc9d8fc),
        sunlightColor:   new THREE.Color(0xd6cefc),
      };

      // Pre-allocate reusable colors — avoids GC pressure from per-frame allocations
      const inkDay    = new THREE.Color(0xfafafa);
      const inkNight  = new THREE.Color(0x0f0f0f);
      const scratch   = new THREE.Color();
      const inkScratch = new THREE.Color();

      const opts = {
        backgroundColor: 0, skyColor: 0, cloudColor: 0,
        cloudShadowColor: 0, sunColor: 0, sunGlareColor: 0, sunlightColor: 0,
      };

      effect = CLOUDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundColor:  day.backgroundColor.getHex(),
        skyColor:         day.skyColor.getHex(),
        cloudColor:       day.cloudColor.getHex(),
        cloudShadowColor: day.cloudShadowColor.getHex(),
        sunColor:         day.sunColor.getHex(),
        sunGlareColor:    day.sunGlareColor.getHex(),
        sunlightColor:    day.sunlightColor.getHex(),
      });

      const startTime = Date.now();
      let prevProgress = -1;

      const animateColors = () => {
        const t = (Date.now() - startTime) % cycleDuration;

        let progress = 0;
        if (t < 20000) {
          progress = 0;
        } else if (t < 30000) {
          const p = (t - 20000) / 10000;
          progress = p * p * (3 - 2 * p);
        } else if (t < 50000) {
          progress = 1;
        } else {
          const p = (t - 50000) / 10000;
          progress = 1 - p * p * (3 - 2 * p);
        }

        if (progress !== prevProgress) {
          prevProgress = progress;

          opts.backgroundColor  = scratch.copy(day.backgroundColor).lerp(night.backgroundColor, progress).getHex();
          opts.skyColor         = scratch.copy(day.skyColor).lerp(night.skyColor, progress).getHex();
          opts.cloudColor       = scratch.copy(day.cloudColor).lerp(night.cloudColor, progress).getHex();
          opts.cloudShadowColor = scratch.copy(day.cloudShadowColor).lerp(night.cloudShadowColor, progress).getHex();
          opts.sunColor         = scratch.copy(day.sunColor).lerp(night.sunColor, progress).getHex();
          opts.sunGlareColor    = scratch.copy(day.sunGlareColor).lerp(night.sunGlareColor, progress).getHex();
          opts.sunlightColor    = scratch.copy(day.sunlightColor).lerp(night.sunlightColor, progress).getHex();
          effect.setOptions(opts);

          if (heroRef.current) {
            // Snap ink through the grey zone quickly — avoids grey-on-grey at mid-transition
            const inkP = Math.max(0, Math.min(1, (progress - 0.35) / 0.30));
            const inkProgress = inkP * inkP * (3 - 2 * inkP);
            heroRef.current.style.setProperty(CSS_INK, inkScratch.copy(inkDay).lerp(inkNight, inkProgress).getStyle());
            heroRef.current.style.setProperty(CSS_ICON_INVERT, String(inkProgress));

            const glassA   = 0.35 + 0.07 * progress;
            const glassRGB = Math.round(255 * progress);
            heroRef.current.style.setProperty(CSS_GLASS, `rgba(${glassRGB},${glassRGB},${glassRGB},${glassA})`);
            heroRef.current.style.setProperty(CSS_BORDER, `rgba(255,255,255,${(0.15 + 0.40 * progress).toFixed(3)})`);
          }
        }

        animationFrameId = requestAnimationFrame(animateColors);
      };

      animateColors();

      const onResize = () => effect?.resize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    };

    initVanta();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrameId);
      if (effect) effect.destroy();
    };
  }, []);

  useEffect(() => {
    let outTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey) return;
      if (e.key !== "c") return;

      navigator.clipboard.writeText("CristianReyesDesign@gmail.com").catch(() => {});

      clearTimeout(outTimer);
      clearTimeout(hideTimer);
      setToastState("in");

      outTimer  = setTimeout(() => setToastState("out"), 1800);
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
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Vanta Clouds Background — fallback gradient shows until WebGL loads */}
      <div
        ref={vantaRef}
        className="absolute inset-0 bg-gradient-to-b from-[#c1e9ff] to-[#ffffff]"
        aria-hidden="true"
      />

      {/* Bottom fade — blends hero into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)" }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-14 px-6">
        <div className="w-full max-w-[760px] flex flex-col items-center gap-5">

          {/* Tweet card — liquid glass */}
          <div className="liquid-glass w-full p-6 md:p-8" style={{ color: `var(${CSS_INK}, #0f0f0f)` }}>

            {/* Avatar */}
            <div className="relative inline-block mb-5">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/60 bg-white/80 flex items-center justify-center p-1 backdrop-blur-sm">
                <Image
                  src="/assets/avatar.webp"
                  alt="Cris Reyes avatar"
                  width={56}
                  height={56}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  priority
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            {/* Name + verified */}
            <div className="flex flex-col gap-0.5 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-lg leading-snug">Cris Reyes</span>
                <CheckBadge />
              </div>
              <span className="text-sm">Designer</span>
            </div>

            {/* Bio */}
            <p className="text-[0.9375rem] leading-relaxed">
              Hey, I&rsquo;m Cristian a design engineer at{" "}
              <strong className="font-semibold">Digital NEST</strong>{" "}
              <img src="/assets/nestbug.png" alt="Digital NEST" className="inline-block w-6 h-6 align-middle rounded-md" />{" "}based in{" "}
              <strong className="font-semibold">Salinas, California</strong>{" "}
              <span className="inline-flex items-center justify-center w-6 h-6 align-middle rounded-md bg-[#14531A] text-sm leading-none overflow-hidden">🥬</span>{" "}where I specialize in crafting polished web interfaces with a strong
              focus on accessibility, web animation, and product design.
            </p>
          </div>

          {/* Email hint below card */}
          <div className="flex items-center gap-2.5">
            <span className="text-sm text-black">Press</span>
            <kbd className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/80 backdrop-blur-sm border border-white/60 text-xs font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)] text-black">
              C
            </kbd>
            <span className="text-sm text-black">to copy my email</span>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toastState !== "hidden" && (
        <div
          className={`fixed bottom-8 left-1/2 z-50 flex items-center gap-2.5 bg-[#0f0f0f] text-white px-5 py-3 rounded-full text-sm font-medium shadow-xl ${
            toastState === "in" ? "toast-in" : "toast-out"
          }`}
        >
          <span className="text-base">✉️</span>
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
