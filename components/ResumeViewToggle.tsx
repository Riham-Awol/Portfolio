"use client";

import { useState } from "react";

const RECRUITER = {
  sections: [
    {
      title: "Experience",
      items: [
        "Freelance Full-Stack Developer — 5C Mentorship Platform & Meweda Matrimonial Site (Present)",
        "Software Engineering Intern — WeTech PLC, Das Homes Call Center Project (2026)",
        "Web Developer Intern — Tofi Tech Solutions (June 2024 – November 2024)",
      ],
    },
    {
      title: "Education",
      items: ["B.Sc. Computer Science, University of Technology and Innovation (Expected September 2026)"],
    },
    {
      title: "Key Projects",
      items: ["Driver's License Renewal System (Capstone)", "UniMate — Campus Management App", "Inventory Management System"],
    },
    {
      title: "Highlights",
      items: ["Available for Full-Stack, Web & Mobile engineering opportunities", "Active GitHub portfolio & production deployments"],
    },
  ],
};

const TECHNICAL = {
  sections: [
    {
      title: "Tech Stack",
      items: ["React.js", "Node.js", "JavaScript", "Flutter / Dart", "HTML5 / CSS3", "Express.js"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB", "Firebase (Realtime)"],
    },
    {
      title: "APIs & Architecture",
      items: ["REST API design & integration", "Full-stack web architectures", "Mobile app frameworks"],
    },
    {
      title: "Tools & Deployment",
      items: ["Git & GitHub", "Agile / Scrum", "Vercel"],
    },
  ],
};

export default function ResumeViewToggle() {
  const [view, setView] = useState<"recruiter" | "technical">("recruiter");
  const data = view === "recruiter" ? RECRUITER : TECHNICAL;

  return (
    <div className="rounded-[20px] border border-border bg-surface p-7 sm:p-9">
      <div className="mb-7 inline-flex rounded-full border border-border bg-surface-2 p-1">
        <button
          onClick={() => setView("recruiter")}
          className={`rounded-full px-4 py-2 text-[0.85rem] font-bold transition-all ${
            view === "recruiter" ? "bg-gradient-to-br from-cherry to-navy text-white" : "text-text-soft hover:text-text"
          }`}
        >
          Recruiter View
        </button>
        <button
          onClick={() => setView("technical")}
          className={`rounded-full px-4 py-2 text-[0.85rem] font-bold transition-all ${
            view === "technical" ? "bg-gradient-to-br from-cherry to-navy text-white" : "text-text-soft hover:text-text"
          }`}
        >
          Technical View
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-2.5 text-[0.8rem] font-extrabold tracking-[0.08em] text-cherry-light uppercase">{section.title}</h3>
            <ul className="grid gap-1.5">
              {section.items.map((item) => (
                <li key={item} className="text-[0.88rem] leading-relaxed text-text-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
