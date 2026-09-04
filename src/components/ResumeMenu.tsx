import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

export default function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const roles = [profile.resumes.dataAnalyst, profile.resumes.webDeveloper];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="rounded-full glass px-6 py-3 text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2"
      >
        Download Resume
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl border border-line bg-panel shadow-xl overflow-hidden text-left z-20">
          {roles.map((r) => (
            <div key={r.label} className="border-b border-line last:border-0">
              <div className="px-4 pt-3 pb-1 text-xs text-muted">{r.label}</div>
              <div className="flex">
                <a
                  href={r.pdf}
                  download
                  className="flex-1 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  PDF
                </a>
                <a
                  href={r.docx}
                  download
                  className="flex-1 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors border-l border-line"
                  onClick={() => setOpen(false)}
                >
                  Word
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
