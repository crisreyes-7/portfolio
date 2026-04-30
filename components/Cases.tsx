import Image from "next/image";
import Link from "next/link";
import CtaLink from "./CtaLink";

const tags = ["Web Design", "UX Research", "Education"];

export default function Cases() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[760px] mx-auto">
        <span className="block text-sm font-semibold text-[#0f0f0f] mb-4">
          [Cases]
        </span>

        {/* Outer card */}
        <div className="rounded-2xl border border-[#e8e8e6] bg-[#f5f5f4] shadow-sm p-4 flex flex-col gap-3">

          {/* Inner card: image + content */}
          <Link href="/cases/svaec" className="group bg-white rounded-xl border border-[#e8e8e6] p-3 flex flex-col sm:flex-row gap-3">
            {/* Image with [view project] overlay */}
            <div className="relative w-full sm:w-[50%] flex-shrink-0 rounded-xl overflow-hidden bg-[#e8e8e6] aspect-[4/3] sm:aspect-auto sm:min-h-[340px]">
              <Image
                src="https://framerusercontent.com/images/iF4cd4YieKCtECojDL4qMFzeoJ0.png"
                alt="Salinas Valley Adult Education Consortium project"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                unoptimized
              />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#0f0f0f] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                [view project]
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-end gap-4 p-2 sm:p-4 flex-1">
              <span className="text-sm text-[#888]">Web/UX Design</span>
              <h3 className="font-bold text-2xl leading-tight tracking-[-0.02em] text-[#0f0f0f]">
                Salinas Valley Adult Education Consortium
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                When we first looked at the SVAEC website, it was clear the
                information people needed was technically there, but almost
                impossible to actually find.
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-[#555] border border-[#d0d0ce] rounded-full px-4 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* CTA pill */}
          <CtaLink href="/cases" label="View All Cases" />
        </div>
      </div>
    </section>
  );
}
