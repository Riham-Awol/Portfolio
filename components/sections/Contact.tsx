import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-cherry-dark via-[#3a1330] to-navy-dark px-6 py-16 text-center text-white sm:px-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(circle at 80% 20%, rgb(255 107 143 / 20%), transparent 55%)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">Get in touch</p>
            <h2 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-white">
              Let&apos;s build something great
            </h2>
            <p className="mx-auto mb-3 max-w-[560px] text-[1.05rem] text-white/80">
              Have an idea, a role, or a project in mind? My inbox is always open —
              I&apos;ll get back to you as soon as I can.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:rihamha1920@gmail.com"
                className="rounded-full bg-white px-[26px] py-3.5 font-bold text-cherry-dark shadow-md transition-transform hover:-translate-y-0.5"
              >
                rihamha1920@gmail.com
              </a>
              <a
                href="https://github.com/Riham-Awol"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/40 px-[26px] py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
