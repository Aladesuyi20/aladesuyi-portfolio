import { Link } from "react-router-dom";
import { workCategories, workItems } from "../data/work";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Work"
        title="Selected work."
        subtitle="A mix of analytics dashboards and modern web builds — click into any project for the full story."
      />

      <div className="mt-12 space-y-16">
        {workCategories.map((category) => {
          const items = workItems.filter((w) => w.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="font-display text-xl font-semibold mb-6">{category}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {items.map((w) => (
                  <Link
                    key={w.slug}
                    to={`/work/${w.slug}`}
                    className="group rounded-2xl glass p-6 flex flex-col hover:bg-white/[0.06] transition-colors"
                  >
                    <h4 className="font-display font-semibold text-lg">{w.title}</h4>
                    <p className="mt-2 text-sm text-muted flex-1">{w.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {w.tags.map((t) => (
                        <span key={t} className="text-xs rounded-full bg-white/5 px-3 py-1 text-muted">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 text-sm text-accent inline-flex items-center gap-1.5">
                      View case study
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
