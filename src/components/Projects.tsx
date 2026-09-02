import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work."
        subtitle="A mix of analytics dashboards and modern web builds."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl glass p-6 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              <div className="flex gap-2 shrink-0">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                    className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    <GithubIcon />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-2 text-sm text-muted flex-1">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full bg-white/5 px-3 py-1 text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
