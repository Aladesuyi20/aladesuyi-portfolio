import profileImg from "../assets/profile.jpg";
import { profile, education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="About"
        title={profile.bioHeading}
        subtitle={profile.bioLead}
      />

      <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-10 items-start">
        <div className="mx-auto md:mx-0">
          <img
            src={profileImg}
            alt={profile.name}
            className="w-56 h-56 md:w-full md:h-auto rounded-2xl object-cover border border-line"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            {profile.bioTags.map((t) => (
              <span key={t} className="text-xs rounded-full glass px-3 py-1 text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-muted leading-relaxed max-w-xl">{profile.bio}</p>

          <div className="mt-8 space-y-4">
            {education.map((e) => (
              <div key={e.title} className="flex gap-4 rounded-xl glass p-4">
                <div className="text-xs text-accent shrink-0 w-28">{e.year}</div>
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-sm text-muted">{e.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
