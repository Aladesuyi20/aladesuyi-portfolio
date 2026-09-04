import { Link, useParams } from "react-router-dom";
import { workItems } from "../data/work";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

export default function CaseStudy() {
  const { slug } = useParams();
  const work = workItems.find((w) => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1 grid place-items-center px-4 text-center pt-16">
          <div>
            <h1 className="font-display text-3xl font-semibold">Project not found</h1>
            <p className="mt-3 text-muted">That case study doesn't exist (yet).</p>
            <Link to="/" className="mt-6 inline-block text-accent hover:underline">
              ← Back home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 px-4 py-16 pt-32">
      <div className="mx-auto max-w-3xl">
        <Link to="/#work" className="text-sm text-muted hover:text-white inline-flex items-center gap-1.5">
          ← Back to Work
        </Link>

        <div className="mt-6 text-sm text-accent font-medium">{work.category}</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">{work.title}</h1>
        <p className="mt-4 text-lg text-muted">{work.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {work.live && (
            <a
              href={work.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 text-ink font-medium px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          {work.repo && (
            <a
              href={work.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
            >
              <GithubIcon /> View Code
            </a>
          )}
        </div>

        <div className="mt-14 space-y-12">
          {work.problem && (
            <section>
              <h2 className="font-display text-xl font-semibold">Problem</h2>
              <p className="mt-3 text-muted leading-relaxed">{work.problem}</p>
            </section>
          )}

          {work.approach && (
            <section>
              <h2 className="font-display text-xl font-semibold">My Approach</h2>
              <p className="mt-3 text-muted leading-relaxed">{work.approach}</p>
            </section>
          )}

          {work.builtWith.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-semibold">Built With</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {work.builtWith.map((t) => (
                  <span key={t} className="text-sm rounded-full glass px-4 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {work.challenges.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-semibold">Challenges</h2>
              <ul className="mt-3 space-y-2">
                {work.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {work.whatLearned && (
            <section>
              <h2 className="font-display text-xl font-semibold">What I Learned</h2>
              <p className="mt-3 text-muted leading-relaxed">{work.whatLearned}</p>
            </section>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-wrap gap-3">
          {work.live && (
            <a
              href={work.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:underline inline-flex items-center gap-1.5"
            >
              LIVE DEMO →
            </a>
          )}
          {work.repo && (
            <a
              href={work.repo}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:underline inline-flex items-center gap-1.5"
            >
              VIEW CODE →
            </a>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
