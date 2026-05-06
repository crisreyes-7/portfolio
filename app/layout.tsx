import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";


export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Cris Reyes — Design Engineer",
  description:
    "Design engineer at Digital NEST specializing in polished web interfaces, accessibility, and product design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans antialiased">
        {/* SVG filter defs at root so CSS filter: url(#id) resolves everywhere */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <filter id="clouds-warp" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="linearRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="2" result="noise">
                <animate attributeName="baseFrequency" values="0.008 0.006;0.020 0.014;0.008 0.006" dur="8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" result="warped" />
              <feGaussianBlur in="warped" stdDeviation="2" result="blurry" />
              <feTurbulence type="fractalNoise" baseFrequency="0.025 0.018" numOctaves="1" result="blurMask">
                <animate attributeName="baseFrequency" values="0.02 0.015;0.035 0.025;0.02 0.015" dur="11s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              </feTurbulence>
              <feColorMatrix in="blurMask" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 -1 0" result="blurAlpha" />
              <feComposite in="blurry" in2="blurAlpha" operator="in" result="maskedBlur" />
              <feMerge><feMergeNode in="warped" /><feMergeNode in="maskedBlur" /></feMerge>
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
