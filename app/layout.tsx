import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import GradualBlur from "@/components/GradualBlur";

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
        {children}
        <GradualBlur
          position="bottom"
          height="5rem"
          strength={1.5}
          divCount={8}
          curve="bezier"
          exponential={true}
          target="page"
        />
      </body>
    </html>
  );
}
