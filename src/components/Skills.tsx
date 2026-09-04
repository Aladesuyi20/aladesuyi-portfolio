import { useState } from "react";
import { skillCategories, softSkills } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [toolIndex, setToolIndex] = useState(0);

  const category = skillCategories[categoryIndex];
  const tool = category.tools[toolIndex];

  function selectCategory(i: number) {
    setCategoryIndex(i);
    setToolIndex(0);
  }

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="What I actually know how to do."
        subtitle="Click a tool to see specifically what I use it for — no made-up proficiency percentages."
      />

      <div className="mt-12">
        <div className="flex gap-2">
          {skillCategories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => selectCategory(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                i === categoryIndex
                  ? "bg-gradient-to-r from-accent to-accent2 text-ink"
                  : "glass text-muted hover:text-white"
              }`}
            >
              {c.name.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl glass p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {category.tools.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setToolIndex(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium border transition-colors ${
                  i === toolIndex
                    ? "border-accent text-accent bg-accent/10"
                    : "border-line text-muted hover:text-white hover:border-white/30"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-line">
            <div className="text-sm text-muted mb-3">What I use {tool.name} for:</div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {tool.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-white/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted">Also:</span>
          {softSkills.map((s) => (
            <span key={s} className="text-sm rounded-full bg-white/5 px-4 py-1.5">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}