import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
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
    <section className="mx-auto max-w-[1160px] px-6 pt-14 pb-24">
      <Reveal>
        <Link
          href="/#projects"
          className="mb-7 inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-ink-soft transition-all hover:-translate-x-0.5 hover:text-sage-dark"
        >
          ← All projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mb-[26px] flex flex-wrap items-start gap-5">
          <div className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[20px] border border-line bg-white text-[2.4rem] shadow-[0_10px_30px_-12px_rgb(90_74_51_/_25%)]">
            {project.icon}
          </div>
          <div>
            <h1 className="font-display mb-2 text-[clamp(1.8rem,4vw,2.6rem)] text-brown-dark">{project.name}</h1>
            <p className="max-w-[560px] text-[1.05rem] text-ink-soft">{project.tagline}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-[30px] mb-[46px] flex flex-wrap gap-3.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-sage-dark to-brown px-[26px] py-3.5 font-bold text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            View source on GitHub ↗
          </a>
          <Link
            href="/#contact"
            className="rounded-full border-2 border-line px-[26px] py-3.5 font-bold text-brown-dark transition-all hover:-translate-y-0.5 hover:border-sage hover:bg-sage/10"
          >
            Discuss this project
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div
          className="relative mb-14 aspect-video w-full overflow-hidden rounded-[20px] shadow-[0_20px_45px_-15px_rgb(90_74_51_/_35%)]"
          style={{ background: "linear-gradient(135deg, var(--sage), var(--brown))" }}
        >
          <div className="absolute top-0 right-0 left-0 h-[34px] bg-white/16" />
          <span className="absolute top-2.5 left-4 text-[0.65rem] tracking-[4px] text-white/70">● ● ●</span>
          <div className="absolute inset-0 grid place-items-center pt-[34px] text-[5rem] opacity-90">{project.icon}</div>
        </div>
      </Reveal>

      <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal delay={0.1}>
          <div>
            <h2 className="font-display mb-4 text-xl text-brown-dark">Overview</h2>
            <p className="text-[1.05rem] leading-[1.85] text-ink-soft">{project.description}</p>

            <h2 className="font-display mt-9 mb-4 text-xl text-brown-dark">Key features</h2>
            <ul className="grid gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="relative pl-[26px] text-[0.98rem] leading-relaxed text-ink-soft">
                  <span
                    className="absolute top-2 left-0 h-2.5 w-2.5 rounded-[3px]"
                    style={{ background: "linear-gradient(135deg, var(--sage), var(--brown))" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <aside className="self-start rounded-[20px] border border-line bg-white p-[26px]">
            <h3 className="mb-3.5 text-[0.9rem] font-bold tracking-[0.08em] text-sage-dark uppercase">Built with</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-sage/14 px-2.5 py-1 text-[0.72rem] font-bold text-sage-dark">
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <nav className="mb-5 grid grid-cols-1 gap-5 border-t border-line pt-9 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="rounded-xl border border-line bg-white px-[22px] py-5 transition-all hover:-translate-y-1 hover:border-sage-light hover:shadow-[0_10px_30px_-12px_rgb(90_74_51_/_25%)]"
          >
            <span className="mb-1.5 block text-[0.75rem] font-extrabold tracking-[0.08em] text-sage-dark uppercase">← Previous</span>
            <span className="font-display text-[1.05rem] text-brown-dark">{prev.name}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="rounded-xl border border-line bg-white px-[22px] py-5 text-right transition-all hover:-translate-y-1 hover:border-sage-light hover:shadow-[0_10px_30px_-12px_rgb(90_74_51_/_25%)] sm:text-right"
          >
            <span className="mb-1.5 block text-[0.75rem] font-extrabold tracking-[0.08em] text-sage-dark uppercase">Next →</span>
            <span className="font-display text-[1.05rem] text-brown-dark">{next.name}</span>
          </Link>
        </nav>
      </Reveal>
    </section>
  );
}
