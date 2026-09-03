import Reveal from "@/components/Reveal";

const SKILL_GROUPS = [
  {
    icon: "🖥️",
    title: "Frontend",
    blurb: "Building fast, accessible interfaces that feel good to use.",
    chips: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3"],
  },
  {
    icon: "🎬",
    title: "Animation & UI",
    blurb: "The details that make a static page feel alive.",
    chips: ["Framer Motion", "Tailwind CSS", "Responsive Design", "UI/UX"],
  },
  {
    icon: "📱",
    title: "Mobile & Backend",
    blurb: "Data, auth, and the logic that powers the interface.",
    chips: ["Flutter", "Firebase", "Node.js", "C++"],
  },
  {
    icon: "🛠️",
    title: "Tools",
    blurb: "What keeps projects organized from first commit to deploy.",
    chips: ["Git & GitHub", "VS Code", "Figma", "Vercel"],
  },
];

const CURRENTLY_LEARNING = ["Next.js App Router", "Server Components", "Cloud deployment", "Accessibility (a11y)"];

export default function Skills() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-[130px] pb-24 md:pt-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">
          What I work with
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">Skills &amp; Tools</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mb-10 max-w-[620px] text-[1.05rem] text-text-soft">
          The languages, frameworks, and tools I reach for most — grouped by
          where they show up in a project, from interface to infrastructure.
        </p>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-[20px] border border-border bg-surface p-7 transition-all hover:-translate-y-2 hover:border-cherry/40 hover:shadow-[0_20px_45px_-15px_rgb(227_28_79_/_30%)]">
              <div className="mb-3 text-[1.8rem]">{group.icon}</div>
              <h3 className="mb-1.5 text-[1.05rem] text-text">{group.title}</h3>
              <p className="mb-3.5 text-[0.85rem] leading-relaxed text-text-soft">{group.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-surface-2 px-3 py-1.5 text-[0.78rem] font-bold text-text-soft transition-all hover:-translate-y-0.5 hover:bg-cherry hover:text-white"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 rounded-[20px] border border-border bg-surface p-8">
          <h2 className="font-display mb-1.5 text-xl text-text">Currently learning</h2>
          <p className="mb-4 text-[0.94rem] text-text-soft">
            What I&apos;m actively digging into right now — this portfolio was
            actually built while learning most of it.
          </p>
          <div className="flex flex-wrap gap-2">
            {CURRENTLY_LEARNING.map((item) => (
              <span key={item} className="rounded-full bg-cherry/14 px-3 py-1.5 text-[0.78rem] font-bold text-cherry-light">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
