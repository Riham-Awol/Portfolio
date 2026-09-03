import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";

const VALUES = [
  {
    icon: "🧹",
    title: "Clean code first",
    text: "I'd rather write something simple and readable than something clever that nobody — including future me — can maintain.",
  },
  {
    icon: "🎯",
    title: "User-first design",
    text: "A feature isn't done when it works — it's done when it's clear, fast, and pleasant to actually use.",
  },
  {
    icon: "📚",
    title: "Always learning",
    text: "Every project is a chance to pick up something new — this portfolio itself was a good excuse to dig deeper into Next.js.",
  },
  {
    icon: "🔍",
    title: "Detail-oriented",
    text: "Spacing, states, edge cases — the small things are usually what separate a good product from a great one.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-[130px] pb-24 md:pt-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">About me</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">
          A little about my journey
        </h1>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.1}>
          <div className="grid gap-5 text-[1.1rem] leading-[1.85] text-text-soft">
            <p>
              I&apos;m a Computer Science student and full-stack developer who enjoys
              turning real problems into practical, well-crafted digital products.
              My recent work spans B2B e-commerce platforms, payment simulation
              systems, HR scheduling tools, matrimonial platforms, and business
              management dashboards — always with an eye for clean code and a
              polished, user-friendly interface.
            </p>
            <p>
              Most of what I build starts the same way: a real, specific problem
              someone actually has, not a feature for its own sake. I like
              projects with enough moving parts to be interesting — auth, data
              modeling, a dashboard that has to stay usable as it grows — and I
              care as much about how a product feels to use as how it&apos;s built
              underneath.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="grid gap-4">
          <StatCounter target={10} label="Featured projects" />
          <StatCounter target={23} label="Public repositories" />
          <StatCounter target={12} label="Core technologies" />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <h2 className="font-display mt-20 mb-8 text-2xl text-text">How I work</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 0.05}>
            <div className="h-full rounded-[20px] border border-border bg-surface p-7 transition-all hover:-translate-y-1.5 hover:border-cherry/40 hover:shadow-[0_20px_45px_-15px_rgb(227_28_79_/_25%)]">
              <div className="mb-3 text-[1.7rem]">{value.icon}</div>
              <h3 className="mb-2 text-[1.05rem] text-text">{value.title}</h3>
              <p className="text-[0.94rem] leading-relaxed text-text-soft">{value.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 rounded-[20px] border border-border bg-surface p-8">
          <h2 className="font-display mb-3 text-xl text-text">Beyond the code</h2>
          <p className="text-[1rem] leading-relaxed text-text-soft">
            Outside of shipping projects, I&apos;m usually chasing clean UI
            inspiration, tinkering with a new framework, or fueling the next
            build with iced coffee. If it&apos;s well-designed and well-built, I
            probably want to know how it works.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
