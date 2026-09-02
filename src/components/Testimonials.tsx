import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Testimonials" title="Kind words." />

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl glass p-6 flex flex-col">
            <p className="text-sm text-white/90 flex-1">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm text-ink font-medium">
                {t.initial}
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted">{t.place}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
