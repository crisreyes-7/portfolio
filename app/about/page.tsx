import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceAccordion from "@/components/ExperienceAccordion";

export const metadata = {
  title: "About — Cris Reyes",
  description: "Design engineer at Digital NEST specializing in web interfaces, accessibility, and product design.",
};

const tools = [
  "Figma", "Framer", "Webflow", "Next.js", "Tailwind CSS",
  "Adobe Illustrator", "After Effects", "Notion",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#0f0f0f] overflow-x-hidden">
      <Navbar />

      {/* Page label */}
      <section className="py-[100px] px-6">
        <div className="max-w-[760px] mx-auto flex justify-center">
          <span className="text-sm font-medium text-[#0f0f0f]">[About]</span>
        </div>
      </section>

      {/* Hero card */}
      <section className="pb-16 px-6">
        <div className="max-w-[760px] mx-auto">
          {/* Outer card */}
          <div className="rounded-3xl border border-[#e8e8e6] shadow-[0_2px_24px_0_rgba(0,0,0,0.06)] p-3 flex flex-col sm:flex-row gap-3">

            {/* Left inner card: text */}
            <div className="sm:w-[60%] rounded-2xl bg-[#fafafa] border border-[#e8e8e6] flex flex-col justify-between p-7 gap-10 min-w-0">
              <span className="text-sm font-medium text-[#888]">[About me]</span>

              <div className="flex flex-col gap-4">
                <p className="text-[#555] text-[0.9375rem] leading-relaxed font-semibold">
                  <strong className="text-[#0f0f0f]">Hi, I&rsquo;m Cris Reyes,</strong>{" "}
                  a UX and brand designer passionate about crafting intuitive, cohesive digital experiences.
                </p>
                <p className="text-[#888] text-[0.9375rem] leading-relaxed font-semibold">
                  I think of design like a door. A well designed door goes unnoticed, you just move through it.
                </p>
                <p className="text-[#888] text-[0.9375rem] leading-relaxed font-semibold">
                  That&rsquo;s how I approach my work: striving to create frictionless experiences that help people move forward.
                </p>
              </div>

              <div className="relative">
                <span
                  className="absolute -top-2 -left-1 text-[5rem] leading-none font-serif text-[#e0e0de] select-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
                <div className="pt-8">
                  <p className="text-[1.4rem] font-bold leading-snug text-[#bbb] tracking-tight">
                    Simplicity is the ultimate sophistication.
                  </p>
                  <p className="mt-2 text-sm text-[#aaa]">–Leonardo da Vinci</p>
                </div>
              </div>
            </div>

            {/* Right inner card: photo */}
            <div className="relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-0 sm:w-[40%] flex-shrink-0">
              <Image
                src="/assets/s2YLoaQtVeH52Y0ydh0xNGpvI.jpg.webp"
                alt="Photo of Cris Reyes"
                fill
                sizes="260px"
                className="object-cover object-top"
                unoptimized
              />
            </div>

          </div>
        </div>
      </section>

      {/* What Can I Do */}
      <section className="py-16 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block text-sm font-medium text-[#0f0f0f] mb-8">[What Can I Do]</span>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-[#e8e6e1] px-7 py-6">
              <h3 className="font-bold text-2xl text-[#1e3a8a] mb-2">Human-Centered Approach</h3>
              <p className="text-[#555] text-sm leading-relaxed">Designing experiences that prioritize user needs and behaviors.</p>
            </div>
            <div className="rounded-2xl bg-[#1e3a8a] px-7 py-6">
              <h3 className="font-bold text-2xl text-white mb-2">Problem-Solving Expertise</h3>
              <p className="text-[#cce8f5] text-sm leading-relaxed">Transforming challenges into simple, impactful solutions.</p>
            </div>
            <div className="rounded-2xl bg-[#cce8f5] px-7 py-6">
              <h3 className="font-bold text-2xl text-[#1e3a8a] mb-2">Leadership in Design</h3>
              <p className="text-[#555] text-sm leading-relaxed">Guiding teams and projects with clarity and vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Education */}
      <section className="py-16 px-6">
        <div className="max-w-[760px] mx-auto">
          <span className="block text-sm font-medium text-[#0f0f0f] mb-8">[Experience/Education]</span>
          <ExperienceAccordion />
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 px-6 border-b border-[#e8e8e6]">
        <div className="max-w-[760px] mx-auto">
          <span className="block text-sm font-medium text-[#888] tracking-widest uppercase mb-10">
            [Tools & Skills]
          </span>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#f5f5f4] text-sm font-medium text-[#555] border border-[#e8e8e6]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

<Footer />
    </main>
  );
}
