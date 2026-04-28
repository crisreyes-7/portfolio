import Image from "next/image";
import Marquee from "./Marquee";
import CtaLink from "./CtaLink";

export default function About() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[760px] mx-auto">
        <span className="block text-sm font-semibold text-[#0f0f0f] mb-4">
          [About Me]
        </span>

        <div className="rounded-2xl border border-[#e8e8e6] bg-[#f5f5f4] shadow-sm p-4">
          <div className="flex flex-col sm:flex-row gap-3">

            {/* Left: photo + marquee overlay */}
            <div className="w-full sm:w-[45%] flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden" style={{ minHeight: "466px" }}>
                <Image
                  src="https://framerusercontent.com/images/KArwdjFBUNCFO05OGNUXhQCnzw.jpg"
                  alt="Photo of Cris Reyes"
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover object-top"
                  unoptimized
                />
                {/* Marquee — bottom-right using corner.png as the container shape */}
                <div className="absolute bottom-0 right-0 w-[90%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/corner.png" alt="" className="w-full select-none pointer-events-none" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center px-4 pt-3">
                    <Marquee />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: name card + bio card + CTA */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="bg-white rounded-xl border border-[#e8e8e6] p-4">
                <p className="font-bold text-base text-[#0f0f0f] leading-snug mb-1.5">
                  Cris Reyes
                </p>
                <p className="text-sm leading-snug flex items-center gap-1.5 flex-wrap">
                  <span className="text-[#16a34a] font-medium">Design Associate</span>
                  <span className="text-[#0f0f0f]">/</span>
                  <span className="text-[#dc2626] font-medium">Adobe Fellow</span>
                  <span className="text-[#555]">@BizzNEST</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/adobeCC.png" alt="Adobe CC" className="w-5 h-5 object-contain rounded-sm" />
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#e8e8e6] p-4 flex flex-col gap-3 flex-1">
                <p className="text-[#555] text-sm leading-relaxed">
                  Hi, I&rsquo;m <strong className="text-[#0f0f0f]">Cris Reyes</strong>, a UX and brand
                  designer passionate about crafting intuitive, cohesive digital experiences.
                </p>
                <p className="text-[#555] text-sm leading-relaxed">
                  I combine strategic thinking with strong visual systems to ensure every design not
                  only looks compelling, but works seamlessly. My goal is to create thoughtful,
                  user-centered solutions that build connection and open doors.
                </p>
                <p className="font-display italic text-sm text-[#888] mt-auto pt-1">
                  Cristian Reyes
                </p>
              </div>

              <CtaLink href="/about" label="More About Me" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
