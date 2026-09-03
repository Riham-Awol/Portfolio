import Reveal from "@/components/Reveal";
import ResumeViewToggle from "@/components/ResumeViewToggle";
import TerminalDisplay from "@/components/TerminalDisplay";

const DOCUMENTS = [
  {
    title: "Resume / CV",
    description: "Full-Stack Web & Mobile Developer — experience, projects, education, and skills at a glance.",
    thumb: "/resume/resume-thumb.jpg",
    file: "/resume/riham-awol-resume.pdf",
    downloadName: "Riham-Awol-Resume.pdf",
  },
  {
    title: "Temporary Degree Certificate",
    description: "Temporary Certificate of Graduation — Bachelor of Science in Computer Science, HiLCoE School of Computer Science & Technology.",
    thumb: "/resume/degree-thumb.jpg",
    file: "/resume/riham-awol-degree.pdf",
    downloadName: "Riham-Awol-Degree-Certificate.pdf",
  },
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-[130px] pb-24 md:pt-24">
      <Reveal>
        <p className="mb-2.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">Documents</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display mb-4 text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-text">Resume &amp; Credentials</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mb-12 max-w-[640px] text-[1.05rem] text-text-soft">
          View, download, or print my resume and my temporary degree
          certificate directly below — no sign-in required.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display mb-6 text-2xl text-text">Interactive resume</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <ResumeViewToggle />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 mb-14 flex justify-center">
          <TerminalDisplay
            command="cat experience.json"
            title="riham@resume: ~"
            output={[
              "{",
              '  "role": "Full-Stack Web & Mobile Developer",',
              '  "skills": ["React.js", "Node.js", "JavaScript", "Flutter/Dart", "MongoDB", "Firebase"],',
              '  "location": "Addis Ababa, Ethiopia",',
              '  "status": "open_to_opportunities"',
              "}",
            ]}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display mb-6 text-2xl text-text">Documents</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {DOCUMENTS.map((doc, i) => (
          <Reveal key={doc.title} delay={i * 0.06}>
            <div className="overflow-hidden rounded-[20px] border border-border bg-surface">
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-border bg-surface-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doc.thumb}
                  alt={`${doc.title} preview`}
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                />
              </a>
              <div className="p-6">
                <h2 className="font-display mb-2 text-lg text-text">{doc.title}</h2>
                <p className="mb-5 text-[0.9rem] leading-relaxed text-text-soft">{doc.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-cherry to-navy px-5 py-2.5 text-[0.85rem] font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    View &amp; Print
                  </a>
                  <a
                    href={doc.file}
                    download={doc.downloadName}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-[0.85rem] font-bold text-text transition-all hover:-translate-y-0.5 hover:border-cherry hover:bg-cherry/10"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-[0.85rem] text-text-soft">
          Tip: opening a document uses your browser&apos;s built-in PDF viewer — use its print icon (or Ctrl/Cmd + P) to print directly.
        </p>
      </Reveal>
    </section>
  );
}
