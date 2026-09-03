import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";

export default function About() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">About me</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">
          A little about my journey
        </h2>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.1}>
          <p className="text-[1.1rem] leading-[1.85] text-text-soft">
            I&apos;m a Computer Science student and full-stack developer who enjoys
            turning real problems into practical, well-crafted digital products.
            My recent work spans B2B e-commerce platforms, payment simulation
            systems, HR scheduling tools, matrimonial platforms, and business
            management dashboards — always with an eye for clean code and a
            polished, user-friendly interface.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="grid gap-4">
          <StatCounter target={10} label="Featured projects" />
          <StatCounter target={23} label="Public repositories" />
          <StatCounter target={12} label="Core technologies" />
        </Reveal>
      </div>
    </section>
  );
}
