import Reveal from "@/components/Reveal";

const SKILL_GROUPS = [
  {
    icon: "🖥️",
    title: "Frontend",
    chips: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: "🎬",
    title: "Animation & UI",
    chips: ["Framer Motion", "Next.js", "Responsive Design", "UI/UX"],
  },
  {
    icon: "📱",
    title: "Mobile & Backend",
    chips: ["Flutter", "Firebase", "Node.js", "C++"],
  },
  {
    icon: "🛠️",
    title: "Tools",
    chips: ["Git & GitHub", "VS Code", "Figma", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1160px] px-6 py-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-sage-dark uppercase">
          What I work with
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-brown-dark">Skills &amp; Tools</h2>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-[20px] border border-line bg-white p-7 transition-all hover:-translate-y-2 hover:border-sage-light hover:shadow-[0_20px_45px_-15px_rgb(90_74_51_/_35%)]">
              <div className="mb-3 text-[1.8rem]">{group.icon}</div>
              <h3 className="mb-3.5 text-[1.05rem] text-brown-dark">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-beige px-3 py-1.5 text-[0.78rem] font-bold text-brown-dark transition-all hover:-translate-y-0.5 hover:bg-sage hover:text-white"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
