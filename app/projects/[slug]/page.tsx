import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { projects, getProject, getAdjacentProjects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Riham Awol`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-[130px] pb-24 md:pt-24">
      <Reveal>
        <Link
          href="/projects"
          className="mb-7 inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-text-soft transition-all hover:-translate-x-0.5 hover:text-cherry-light"
        >
          ← All projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mb-[26px] flex flex-wrap items-start gap-5">
          <div className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[20px] border border-border bg-surface text-[2.4rem] shadow-[0_10px_30px_-12px_rgb(0_0_0_/_60%)]">
            {project.icon}
          </div>
          <div>
            <h1 className="font-display mb-2 text-[clamp(1.8rem,4vw,2.6rem)] text-text">{project.name}</h1>
            <p className="max-w-[560px] text-[1.05rem] text-text-soft">{project.tagline}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-[30px] mb-[46px] flex flex-wrap gap-3.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-cherry to-navy px-[26px] py-3.5 font-bold text-white shadow-[0_8px_24px_-10px_rgb(232_93_158_/_55%)] transition-transform hover:-translate-y-0.5"
          >
            View source on GitHub ↗
          </a>
          <Link
            href="/contact"
            className="rounded-full border-2 border-border px-[26px] py-3.5 font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
          >
            Discuss this project
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div
          className="relative mb-14 aspect-video w-full overflow-hidden rounded-[20px] shadow-[0_20px_60px_-15px_rgb(232_93_158_/_25%)]"
          style={{ background: "linear-gradient(135deg, var(--navy), var(--cherry-dark))" }}
        >
          <div className="absolute top-0 right-0 left-0 h-[34px] bg-black/20" />
          <span className="absolute top-2.5 left-4 text-[0.65rem] tracking-[4px] text-white/70">● ● ●</span>
          <div className="absolute inset-0 grid place-items-center pt-[34px] text-[5rem] opacity-90">{project.icon}</div>
        </div>
      </Reveal>

      <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal delay={0.1}>
          <div>
            <h2 className="font-display mb-4 text-xl text-text">Overview</h2>
            <p className="text-[1.05rem] leading-[1.85] text-text-soft">{project.description}</p>

            <h2 className="font-display mt-9 mb-4 text-xl text-text">Key features</h2>
            <ul className="grid gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="relative pl-[26px] text-[0.98rem] leading-relaxed text-text-soft">
                  <span
                    className="absolute top-2 left-0 h-2.5 w-2.5 rounded-[3px]"
                    style={{ background: "linear-gradient(135deg, var(--cherry), var(--navy-light))" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid gap-6">
          <aside className="rounded-[20px] border border-border bg-surface p-[26px]">
            <h3 className="mb-3.5 text-[0.9rem] font-bold tracking-[0.08em] text-cherry-light uppercase">Built with</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-cherry/14 px-2.5 py-1 text-[0.72rem] font-bold text-cherry-light">
                  {t}
                </span>
              ))}
            </div>
          </aside>

          <aside className="rounded-[20px] border border-border bg-surface p-[26px]">
            <h3 className="mb-4 text-[0.9rem] font-bold tracking-[0.08em] text-cherry-light uppercase">Stack flow</h3>
            <ArchitectureDiagram tech={project.tech} />
          </aside>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <nav className="mb-5 grid grid-cols-1 gap-5 border-t border-border pt-9 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="rounded-xl border border-border bg-surface px-[22px] py-5 transition-all hover:-translate-y-1 hover:border-cherry/40 hover:shadow-[0_10px_30px_-12px_rgb(232_93_158_/_25%)]"
          >
            <span className="mb-1.5 block text-[0.75rem] font-extrabold tracking-[0.08em] text-cherry-light uppercase">← Previous</span>
            <span className="font-display text-[1.05rem] text-text">{prev.name}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="rounded-xl border border-border bg-surface px-[22px] py-5 text-right transition-all hover:-translate-y-1 hover:border-cherry/40 hover:shadow-[0_10px_30px_-12px_rgb(232_93_158_/_25%)] sm:text-right"
          >
            <span className="mb-1.5 block text-[0.75rem] font-extrabold tracking-[0.08em] text-cherry-light uppercase">Next →</span>
            <span className="font-display text-[1.05rem] text-text">{next.name}</span>
          </Link>
        </nav>
      </Reveal>
    </section>
  );
}
