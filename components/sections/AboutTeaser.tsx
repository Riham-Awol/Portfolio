import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">About me</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mb-4 text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold text-text">
              Full-Stack Developer, Computer Science student
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-6 max-w-[540px] text-[1.02rem] leading-[1.8] text-text-soft">
              I turn real problems into practical, well-crafted digital
              products — from e-commerce platforms to HR tools and business
              dashboards, always with an eye for clean code and a polished
              interface.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="inline-flex rounded-full border-2 border-border px-6 py-3 font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
            >
              More about me →
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="grid gap-4">
          <StatCounter target={10} label="Featured projects" />
          <StatCounter target={23} label="Public repositories" />
          <StatCounter target={12} label="Core technologies" />
        </Reveal>
      </div>
    </section>
  );
}
