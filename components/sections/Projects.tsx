import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-[130px] pb-24 md:pt-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">My work</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">Featured Projects</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mb-10 max-w-[640px] text-[1.05rem] text-text-soft">
          Ten applications spanning e-commerce, fintech, HR tooling, and business
          dashboards — each one solving a real, specific problem. Pulled
          straight from my GitHub, with a full write-up on every project page.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 6) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-11 text-center">
          <a
            href="https://github.com/Riham-Awol?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border-2 border-border px-[26px] py-3.5 font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
          >
            See all repositories on GitHub →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
