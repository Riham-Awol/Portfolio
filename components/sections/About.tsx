import Link from "next/link";
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

const EXPERIENCE = [
  {
    role: "Freelance Full-Stack Developer",
    org: "5C Mentorship Platform & Meweda Matrimonial Site",
    period: "Present",
    points: [
      "Architecting and developing responsive web applications for mentorship tracking and matrimonial matchmaking.",
      "Implementing robust REST APIs, secure authentication, dynamic profile management, and real-time messaging.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "WeTech PLC — Das Homes Call Center Project",
    period: "2026",
    points: [
      "Built internal tracking tools and data workflows for call center tracking and property photoshoot scheduling.",
      "Engineered streamlined UI modules to enhance lead management pipelines and overall operational efficiency.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Tofi Tech Solutions",
    period: "June 2024 – November 2024",
    points: [
      "Participated in the full SDLC from requirement gathering to frontend/backend web deployment.",
      "Conducted code reviews, refactored components, and optimized user interfaces for client applications.",
    ],
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
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9rem] font-semibold text-text-soft">
              <span>📍 Addis Ababa, Ethiopia</span>
              <span aria-hidden="true">·</span>
              <Link href="/resume" className="text-cherry-light hover:text-cherry">
                View my résumé →
              </Link>
            </p>
            <p>
              I&apos;m a Full-Stack Web &amp; Mobile Developer and Computer
              Science student, committed to creating scalable platforms and
              seamless user experiences — experienced across the full
              development lifecycle from database design to high-performance
              responsive UI.
            </p>
            <p>
              My recent work spans B2B e-commerce platforms, payment
              simulation systems, HR scheduling tools, matrimonial platforms,
              and business management dashboards. Most of what I build starts
              the same way: a real, specific problem someone actually has —
              and I care as much about how a product feels to use as how
              it&apos;s built underneath.
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
        <h2 className="font-display mt-20 mb-8 text-2xl text-text">Experience</h2>
      </Reveal>
      <div className="grid gap-5">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.role + job.org} delay={i * 0.06}>
            <div className="relative rounded-[20px] border border-border bg-surface py-6 pr-7 pl-8 transition-all hover:border-cherry/40 hover:shadow-[0_20px_45px_-15px_rgb(227_28_79_/_20%)]">
              <span
                className="absolute top-6 bottom-6 left-0 w-1 rounded-full"
                style={{ background: "linear-gradient(180deg, var(--cherry), var(--navy))" }}
              />
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-text">{job.role}</h3>
                <span className="text-[0.8rem] font-bold text-cherry-light">{job.period}</span>
              </div>
              <p className="mb-3 text-[0.9rem] font-semibold text-text-soft">{job.org}</p>
              <ul className="grid gap-1.5">
                {job.points.map((point) => (
                  <li key={point} className="text-[0.92rem] leading-relaxed text-text-soft">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <h2 className="font-display mt-16 mb-8 text-2xl text-text">Education</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="rounded-[20px] border border-border bg-surface p-7">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-lg text-text">Bachelor of Science in Computer Science</h3>
            <span className="text-[0.8rem] font-bold text-cherry-light">Expected September 2026</span>
          </div>
          <p className="mb-3 text-[0.9rem] font-semibold text-text-soft">University of Technology and Innovation</p>
          <p className="text-[0.92rem] leading-relaxed text-text-soft">
            Transferred from Hawassa University (June 2021 – January 2022).
            Focus: Software Engineering, Distributed Databases, Web/Mobile
            Architectures, and UI/UX.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display mt-16 mb-8 text-2xl text-text">How I work</h2>
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
