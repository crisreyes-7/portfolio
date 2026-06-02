export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Text — left side, vertically centered */}
      <div className="absolute top-[62%] -translate-y-1/2 left-20 max-w-[24%] flex flex-col gap-6">
        <p className="text-[#0f0f0f] text-[0.9375rem] leading-relaxed font-semibold">
          <strong>Hi, I&rsquo;m Cris Reyes,</strong> a UX and brand designer passionate about crafting intuitive, cohesive digital experiences.
        </p>
        <p className="text-[#888] text-[0.9375rem] leading-relaxed font-semibold">
          I think of design like a door. A well designed door goes unnoticed, you just move through it.
        </p>
        <p className="text-[#888] text-[0.9375rem] leading-relaxed font-semibold">
          That&rsquo;s how I approach my work: striving to create frictionless experiences that help people move forward.
        </p>
      </div>

      {/* Filmstrip — right side, vertically centered */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 h-[70vh] w-[28vw] pointer-events-none">
        <img
          src="/assets/filmstrip.png"
          alt=""
          className="h-full w-auto object-cover object-left"
        />
      </div>

    </section>
  );
}
