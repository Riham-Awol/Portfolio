import Link from "next/link";
import Reveal from "@/components/Reveal";

const TOP_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Flutter",
  "Firebase",
  "Node.js",
  "Git & GitHub",
];

export default function SkillsTeaser() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-20">
      <div className="rounded-[24px] border border-border bg-surface p-8 sm:p-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Reveal>
              <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">
                What I work with
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold text-text">Skills &amp; Tools</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/skills"
              className="inline-flex rounded-full border-2 border-border px-6 py-3 font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
            >
              See all skills →
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2.5">
            {TOP_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-surface-2 px-4 py-2 text-[0.85rem] font-bold text-text-soft transition-all hover:-translate-y-0.5 hover:bg-cherry hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
