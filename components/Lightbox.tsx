"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Lightbox({ src, alt, className = "w-full h-auto" }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  function openLightbox() {
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function closeLightbox() {
    setVisible(false);
    setTimeout(() => setOpen(false), 250);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLightbox();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]`}
        onClick={openLightbox}
      />
      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: visible ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
            backdropFilter: visible ? "blur(4px)" : "blur(0px)",
            transition: "background-color 250ms ease, backdrop-filter 250ms ease",
          }}
          onClick={closeLightbox}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[80%] max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            style={{
              transform: visible ? "scale(1)" : "scale(0.92)",
              opacity: visible ? 1 : 0,
              transition: "transform 250ms cubic-bezier(0.34,1.56,0.64,1), opacity 250ms ease",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 250ms ease" }}
            onClick={closeLightbox}
          >
            ✕
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
