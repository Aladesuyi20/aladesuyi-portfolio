import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Skills" title="The stack behind the insights." />

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-2xl glass p-6">
            <h3 className="font-display font-semibold mb-5">{group.category}</h3>
            <div className="space-y-4">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/90">{s.name}</span>
                    <span className="text-muted">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
