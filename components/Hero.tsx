"use client";

import { useEffect, useState, useRef } from "react";
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
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let effect: any;
    let animationFrameId: number;
    const cycleDuration = 60000; // 60 seconds total (20s holds, 10s transitions)

    const initVanta = async () => {
      if (!effect && vantaRef.current) {
        const THREE = await import("three");
        // @ts-ignore
        const VantaClouds = await import("vanta/dist/vanta.clouds.min");
        const CLOUDS = VantaClouds.default || VantaClouds;

        // Define Day and Night palettes
        const day = {
          backgroundColor: new THREE.Color(0xffffff),
          skyColor: new THREE.Color(0xc1e9ff), // Requested light cyan-blue
          cloudColor: new THREE.Color(0xbce2ff), // A brighter, more vibrant pastel blue
          cloudShadowColor: new THREE.Color(0x316d94),
          sunColor: new THREE.Color(0xffad22), // Warmer, bright golden-orange
          sunGlareColor: new THREE.Color(0xff7a33), // Warmer, vibrant orange glare
          sunlightColor: new THREE.Color(0xffa82b), // Warmer, golden sunlight
        };

        const night = {
          backgroundColor: new THREE.Color(0x0),
          skyColor: new THREE.Color(0x1b1570),
          cloudColor: new THREE.Color(0xc6c9ff),
          cloudShadowColor: new THREE.Color(0x42468c), // Brightened nighttime shadows
          sunColor: new THREE.Color(0xb8bafc),
          sunGlareColor: new THREE.Color(0xc9d8fc),
          sunlightColor: new THREE.Color(0xd6cefc),
        };

        effect = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: day.backgroundColor.getHex(),
          skyColor: day.skyColor.getHex(),
          cloudColor: day.cloudColor.getHex(),
          cloudShadowColor: day.cloudShadowColor.getHex(),
          sunColor: day.sunColor.getHex(),
          sunGlareColor: day.sunGlareColor.getHex(),
          sunlightColor: day.sunlightColor.getHex(),
        });
        setVantaEffect(effect);

        const startTime = Date.now();
        const currentColor = new THREE.Color();

        const animateColors = () => {
          const now = Date.now();
          const t = (now - startTime) % cycleDuration;

          let progress = 0;
          if (t < 20000) {
            // Day hold (0-20s)
            progress = 0;
          } else if (t < 30000) {
            // Transition Day to Night (20s-30s)
            const p = (t - 20000) / 10000;
            progress = p * p * (3 - 2 * p); // smoothstep easing
          } else if (t < 50000) {
            // Night hold (30s-50s)
            progress = 1;
          } else {
            // Transition Night to Day (50s-60s)
            const p = (t - 50000) / 10000;
            progress = 1 - (p * p * (3 - 2 * p)); // smoothstep easing
          }

          effect.setOptions({
            backgroundColor: currentColor.copy(day.backgroundColor).lerp(night.backgroundColor, progress).getHex(),
            skyColor: currentColor.copy(day.skyColor).lerp(night.skyColor, progress).getHex(),
            cloudColor: currentColor.copy(day.cloudColor).lerp(night.cloudColor, progress).getHex(),
            cloudShadowColor: currentColor.copy(day.cloudShadowColor).lerp(night.cloudShadowColor, progress).getHex(),
            sunColor: currentColor.copy(day.sunColor).lerp(night.sunColor, progress).getHex(),
            sunGlareColor: currentColor.copy(day.sunGlareColor).lerp(night.sunGlareColor, progress).getHex(),
            sunlightColor: currentColor.copy(day.sunlightColor).lerp(night.sunlightColor, progress).getHex(),
          });

          if (heroRef.current) {
            // Day: White text -> Night: Dark text
            heroRef.current.style.setProperty('--hero-ink', new THREE.Color(0xfafafa).lerp(new THREE.Color(0x0f0f0f), progress).getStyle());
            heroRef.current.style.setProperty('--hero-ink-muted', new THREE.Color(0xcfd6e4).lerp(new THREE.Color(0x555555), progress).getStyle());
            heroRef.current.style.setProperty('--hero-ink-faint', new THREE.Color(0x94a0b8).lerp(new THREE.Color(0x888888), progress).getStyle());

            // Day: Dark tint (0, 0.35) -> Night: White tint (255, 0.42)
            const glassA = 0.35 + (0.42 - 0.35) * progress;
            const glassRGB = Math.round(255 * progress);
            heroRef.current.style.setProperty('--glass-bg', `rgba(${glassRGB}, ${glassRGB}, ${glassRGB}, ${glassA})`);

            // Day: Faint border (0.15) -> Night: Strong border (0.55)
            const borderA = 0.15 + (0.55 - 0.15) * progress;
            heroRef.current.style.setProperty('--glass-border', `rgba(255, 255, 255, ${borderA})`);
          }

          animationFrameId = requestAnimationFrame(animateColors);
        };

        animateColors();
      }
    };
    initVanta();

    return () => {
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
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Vanta Clouds Background with a daytime fallback gradient */}
      <div
        ref={vantaRef}
        className="absolute inset-0 bg-gradient-to-b from-[#c1e9ff] to-[#ffffff]"
        aria-hidden="true"
      />

      {/* Bottom fade — fades Vanta into the page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)" }}
        aria-hidden="true"
      />

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
                  style={{ color: "var(--hero-ink, #0f0f0f)" }}
                >
                  Cris Reyes
                </span>
                <CheckBadge />
              </div>
              <span className="text-sm" style={{ color: "var(--hero-ink, #0f0f0f)" }}>
                Designer
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-[0.9375rem] leading-relaxed"
              style={{ color: "var(--hero-ink, #0f0f0f)" }}
            >
              Hey, I&rsquo;m Cristian a design engineer at{" "}
              <strong className="font-semibold" style={{ color: "var(--hero-ink, #0f0f0f)" }}>
                Digital NEST
              </strong>{" "}
              🌿 based in{" "}
              <strong className="font-semibold" style={{ color: "var(--hero-ink, #0f0f0f)" }}>
                Salinas, California
              </strong>{" "}
              🌊 where I specialize in crafting polished web interfaces with a strong
              focus on accessibility, web animation, and product design.
            </p>
          </div>

          {/* Email hint below card */}
          <div className="flex items-center gap-2.5">
            <span className="text-sm text-black">
              Press
            </span>
            <kbd
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/80 backdrop-blur-sm border border-white/60 text-xs font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)] text-black"
            >
              C
            </kbd>
            <span className="text-sm text-black">
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
