const links = [
  { href: "#menu", label: "Menu", mobile: true },
  { href: "#story", label: "Story", mobile: false },
  { href: "#visit", label: "Visit", mobile: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-950/10 bg-[#fffaf4]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-black tracking-tight text-orange-950">
          Harbour Brew
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-orange-950/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-orange-950">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#visit"
          className="rounded-full bg-orange-950 px-5 py-2.5 text-sm font-bold text-orange-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Find us
        </a>
      </nav>
    </header>
  );
}
