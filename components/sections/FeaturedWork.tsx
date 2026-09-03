import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function FeaturedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1160px] px-6 py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">My work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">Featured Projects</h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Link
            href="/projects"
            className="inline-flex rounded-full border-2 border-border px-[26px] py-3.5 font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
          >
            View all projects →
          </Link>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
