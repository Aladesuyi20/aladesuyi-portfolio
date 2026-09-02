import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm text-ink">
            {profile.initial}
          </span>
          {profile.shortName}
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-white text-ink text-sm font-medium px-4 py-2 hover:bg-white/90 transition-colors"
        >
          Hire me
        </a>

        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-4 py-4 flex flex-col gap-4 text-sm text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-white font-medium">
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
