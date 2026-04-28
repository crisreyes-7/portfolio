const icons = [
  { name: "Figma",     file: "/icons/figma.png" },
  { name: "Adobe CC",  file: "/icons/adobeCC.png" },
  { name: "Asana",     file: "/icons/asanaicon.svg" },
  { name: "Claude",    file: "/icons/Claude.png" },
  { name: "GitHub",    file: "/icons/github.png" },
];

const Track = () => (
  <div className="flex items-center gap-6 pr-6">
    {icons.map((icon) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={icon.name}
        src={icon.file}
        alt={icon.name}
        className="flex-shrink-0 w-7 h-7 object-contain"
      />
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div
      className="overflow-hidden w-full group"
      aria-hidden="true"
      style={{ maskImage: "linear-gradient(to right, transparent, black 35%, black 65%, transparent)" }}
    >
      <div className="flex w-max animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
