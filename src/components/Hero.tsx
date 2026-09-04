import { profile, stats } from "../data/profile";
import ResumeMenu from "./ResumeMenu";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 px-4 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {profile.availability}
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl font-semibold leading-[1.08]">
          {profile.tagline}
        </h1>

        <p className="mt-6 mx-auto max-w-xl text-muted text-base sm:text-lg">
          {profile.heroSubtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-accent to-accent2 text-ink font-medium px-6 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
          <ResumeMenu />
          <a
            href="#contact"
            className="rounded-full glass px-6 py-3 text-sm hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
