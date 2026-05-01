"use client";

import { useEffect, useRef, useState } from "react";

type FormatType = "comma" | "decimal-k" | "k-floor" | "integer";

interface CountUpProps {
  value: number;
  formatType?: FormatType;
  suffix?: string;
  duration?: number;
  className?: string;
}

function formatValue(n: number, type?: FormatType): string {
  if (type === "decimal-k") return `${(n / 1000).toFixed(1)}K`;
  if (type === "k-floor") return `${Math.floor(n / 1000)}K`;
  if (type === "integer") return n.toString();
  return n.toLocaleString();
}

export default function CountUp({ value, formatType, suffix = "", duration = 2200, className }: CountUpProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = -(Math.cos(Math.PI * progress) - 1) / 2;
            setCurrent(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCurrent(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {formatValue(current, formatType)}{suffix}
    </span>
  );
}
