import Link from "next/link";
import Reveal from "@/components/Reveal";
import TypedRole from "@/components/TypedRole";
import PhotoFrame from "@/components/PhotoFrame";
import TechOrbit from "@/components/TechOrbit";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-[1160px] grid-cols-1 items-center gap-12 px-6 py-24 pt-[130px] md:grid-cols-[1.15fr_0.85fr] md:pt-24">
      <div className="order-2 text-center md:order-1 md:text-left">
        <Reveal>
          <p className="mb-2 font-semibold text-cherry-light">Hello, I&apos;m</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.05] font-bold text-text">
            Riham Awol
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-2.5 mb-[22px] min-h-[1.6em] text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium text-navy-light italic">
            <TypedRole />
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mb-[34px] max-w-[540px] text-[1.06rem] leading-[1.75] text-text-soft md:mx-0">
            A Full-Stack Developer and Computer Science student who turns real
            problems into clean, reliable web applications — from e-commerce
            platforms and payment systems to HR tools and management
            dashboards. I care about clean code, considered UI, and building
            things that hold up in production.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mb-[30px] flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-br from-cherry to-navy px-[26px] py-3.5 font-bold text-white shadow-[0_8px_24px_-10px_rgb(232_93_158_/_55%)] transition-transform hover:-translate-y-0.5"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-border px-[26px] py-3.5 font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="flex justify-center gap-3.5 md:justify-start">
            <a
              href="https://github.com/Riham-Awol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-border bg-surface text-text transition-all hover:-translate-y-1 hover:-rotate-6 hover:bg-cherry hover:text-white"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                />
              </svg>
            </a>
            <a
              href="mailto:rihamha1920@gmail.com"
              aria-label="Email"
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-border bg-surface text-text transition-all hover:-translate-y-1 hover:-rotate-6 hover:bg-cherry hover:text-white"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.06 5.6a1.2 1.2 0 0 0 1.48 0l7.06-5.6a.6.6 0 0 0-.3-1.05H4.5a.6.6 0 0 0-.3 1.05Z"
                />
              </svg>
            </a>
            <a
              href="https://riham-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-border bg-surface text-text transition-all hover:-translate-y-1 hover:-rotate-6 hover:bg-cherry hover:text-white"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.19a15.6 15.6 0 0 0-1.19-5.6A8.02 8.02 0 0 1 19.93 11ZM12 4c.83 1.09 1.85 3.11 2.02 7h-4.04C10.15 7.11 11.17 5.09 12 4ZM4.07 11a8.02 8.02 0 0 1 4.38-5.6A15.6 15.6 0 0 0 7.26 11H4.07Zm0 2h3.19c.16 2.13.63 4.05 1.19 5.6A8.02 8.02 0 0 1 4.07 13ZM12 20c-.83-1.09-1.85-3.11-2.02-7h4.04C13.85 16.89 12.83 18.91 12 20Zm2.74-1.4c.56-1.55 1.03-3.47 1.19-5.6h3.19a8.02 8.02 0 0 1-4.38 5.6Z"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="order-1 mb-5 md:order-2 md:mb-0">
        <TechOrbit>
          <PhotoFrame />
        </TechOrbit>
      </Reveal>
    </section>
  );
}
