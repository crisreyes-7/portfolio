import Link from "next/link";

export default function CtaLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between bg-[#cce8f5] hover:bg-[#1e3a8a] px-5 py-3 rounded-full transition-colors duration-200"
    >
      <span className="text-sm font-semibold text-[#3d4a6b] group-hover:text-[#cce8f5] transition-colors duration-200">
        {label}
      </span>
      <span className="w-8 h-8 rounded-full bg-[#1e3a8a] group-hover:bg-[#cce8f5] flex items-center justify-center text-white group-hover:text-[#1e3a8a] text-sm flex-shrink-0 transition-colors duration-200">
        <span className="inline-block group-hover:rotate-90 transition-transform duration-300 ease-in-out">↗</span>
      </span>
    </Link>
  );
}
