import { services } from "../data/services";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Services" title="What I can build for you." />

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl glass p-6 flex flex-col">
            <h3 className="font-display font-semibold text-lg">{s.title}</h3>
            <p className="mt-3 text-sm text-muted flex-1">{s.description}</p>
            <a href="#contact" className="mt-5 text-sm text-accent hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
