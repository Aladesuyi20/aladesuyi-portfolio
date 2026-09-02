import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="A short but focused journey."
      />

      <div className="mt-12 space-y-6">
        {experience.map((job) => (
          <div key={job.role + job.place} className="grid sm:grid-cols-[180px_1fr] gap-4 rounded-2xl glass p-6">
            <div className="text-sm text-muted">{job.period}</div>
            <div>
              <h3 className="font-display text-lg font-semibold">{job.role}</h3>
              <div className="text-sm text-accent">{job.place}</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
