import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cases = [
  {
    href: "/cases/svaec",
    image: "https://framerusercontent.com/images/iF4cd4YieKCtECojDL4qMFzeoJ0.png",
    category: "Web/UX Design",
    title: "Salinas Valley Adult Education Consortium",
    description:
      "When we first looked at the SVAEC website, it was clear the information people needed was technically there, but almost impossible to actually find.",
    tags: ["Web Design", "UX Research", "Education"],
  },
];

export const metadata = {
  title: "Cases — Cris Reyes",
  description: "Selected design and UX work by Cris Reyes.",
};

export default function CasesPage() {
  return (
    <main className="bg-white text-[#0f0f0f] overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block text-sm font-medium text-[#888] tracking-widest uppercase mb-6">
            [Cases]
          </span>
          <h1
            className="font-display font-bold tracking-[-0.03em] text-[#0f0f0f] leading-none max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Work that opens doors.
          </h1>
          <p className="mt-5 text-[#666] text-[1.0625rem] leading-relaxed max-w-xl">
            A collection of projects focused on accessibility, usability, and visual clarity.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-[#e8e8e6]">
        <div className="max-w-[760px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block rounded-2xl overflow-hidden bg-[#f5f5f4] hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out"
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src={c.image}
                    alt={`${c.title} project cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-[#555] rounded-full px-3 py-1 tracking-wide">
                      {c.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl md:text-2xl text-[#0f0f0f] leading-snug tracking-[-0.02em]">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-[#666] text-sm leading-relaxed">{c.description}</p>
                  <div className="mt-5 flex items-center gap-0 text-xs text-[#aaa] font-medium">
                    {c.tags.map((tag, i) => (
                      <span key={tag} className="flex items-center gap-0">
                        <span>{tag}</span>
                        {i < c.tags.length - 1 && <span className="mx-2 opacity-50">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
