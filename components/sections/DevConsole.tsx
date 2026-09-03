import Reveal from "@/components/Reveal";
import Terminal from "@/components/Terminal";

export default function DevConsole() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div>
            <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">
              Try it yourself
            </p>
            <h2 className="font-display mb-4 text-2xl font-bold text-text">Poke around my terminal</h2>
            <p className="mb-5 max-w-[440px] text-[0.98rem] leading-relaxed text-text-soft">
              Type a command to jump straight to a section — try <code className="text-cherry-light">help</code> to
              see what&apos;s available.
            </p>
            <Terminal />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="self-start lg:mt-[86px]">
          <div className="rounded-[20px] border border-border bg-surface p-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-2 text-[0.75rem] font-bold text-text">
              🚧 Currently building
            </div>
            <h3 className="font-display mb-2 text-lg text-text">5C Mentorship Platform</h3>
            <p className="text-[0.92rem] leading-relaxed text-text-soft">
              A responsive web app for mentorship tracking, with REST APIs, secure auth, dynamic profiles, and
              real-time messaging — alongside the Meweda matrimonial matchmaking site.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
