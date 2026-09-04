import { Link } from "react-router-dom";
import { profile, socials } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-line px-4 py-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm text-ink">
            {profile.initial}
          </span>
          aladesuyikolade.dev
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm text-muted">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5L6 22H2.9l8.1-9.3L1.3 2h6.6l4.5 5.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted">
        Designed &amp; Built by {profile.name.toUpperCase()} &copy; {year}
      </div>
    </footer>
  );
}
