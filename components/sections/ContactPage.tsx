import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import TerminalDisplay from "@/components/TerminalDisplay";

export default function ContactPageContent() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-[130px] pb-24 md:pt-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">Get in touch</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">
          Let&apos;s build something great
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mb-12 max-w-[620px] text-[1.05rem] text-text-soft">
          Have an idea, a role, or a project in mind? Send a message below and
          I&apos;ll get back to you as soon as I can — or reach out directly
          through email or GitHub.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1}>
          <div className="rounded-[20px] border border-border bg-surface p-7 sm:p-9">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid gap-4 self-start">
          <div className="rounded-[20px] border border-border bg-surface p-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-2 text-[0.78rem] font-bold text-text">
              <span className="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-navy-light" />
              Open to new opportunities
            </div>
            <h3 className="font-display mb-3 text-lg text-text">Prefer direct contact?</h3>
            <ul className="grid gap-3">
              <li>
                <a
                  href="mailto:rihamha1920@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3 text-[0.9rem] font-semibold text-text transition-colors hover:border-cherry/40 hover:text-cherry-light"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0">
                    <path
                      fill="currentColor"
                      d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.06 5.6a1.2 1.2 0 0 0 1.48 0l7.06-5.6a.6.6 0 0 0-.3-1.05H4.5a.6.6 0 0 0-.3 1.05Z"
                    />
                  </svg>
                  rihamha1920@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251970646644"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3 text-[0.9rem] font-semibold text-text transition-colors hover:border-cherry/40 hover:text-cherry-light"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0">
                    <path
                      fill="currentColor"
                      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z"
                    />
                  </svg>
                  +251 970 646 644
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Riham-Awol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3 text-[0.9rem] font-semibold text-text transition-colors hover:border-cherry/40 hover:text-cherry-light"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0">
                    <path
                      fill="currentColor"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                    />
                  </svg>
                  github.com/Riham-Awol
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-[20px] border border-border bg-surface p-7">
            <h3 className="font-display mb-2 text-lg text-text">Response time</h3>
            <p className="text-[0.92rem] leading-relaxed text-text-soft">
              I typically reply within a day or two. For anything urgent, email is fastest.
            </p>
          </div>

          <TerminalDisplay
            command="connect Riham"
            title="riham@contact: ~"
            output={["✓ Email", "✓ Phone", "✓ GitHub", "✓ Location — Addis Ababa, Ethiopia"]}
          />
        </Reveal>
      </div>
    </section>
  );
}
