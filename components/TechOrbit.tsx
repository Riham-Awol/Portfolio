import type { ReactNode } from "react";

const TECHS = [
  { icon: "⚛️", label: "React" },
  { icon: "▲", label: "Next.js" },
  { icon: "🟢", label: "Node.js" },
  { icon: "📱", label: "Flutter" },
  { icon: "🍃", label: "MongoDB" },
  { icon: "🔥", label: "Firebase" },
];

const RADIUS = 195;
const DURATION = 26;

export default function TechOrbit({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto grid h-[min(340px,78vw)] w-[min(340px,78vw)] place-items-center md:h-[460px] md:w-[460px]">
      <div
        className="pointer-events-none absolute hidden rounded-full border border-dashed border-border/70 md:block"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
        aria-hidden="true"
      />

      {children}

      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {TECHS.map((t, i) => {
          const delay = -((DURATION / TECHS.length) * i);
          return (
            <div
              key={t.label}
              className="absolute inset-0"
              style={{ animation: `orbit-rotate ${DURATION}s linear infinite`, animationDelay: `${delay}s` }}
            >
              <div
                className="absolute top-1/2 left-1/2"
                style={{ transform: `translate(-50%, -50%) translateY(-${RADIUS}px)` }}
              >
                <div style={{ animation: `orbit-rotate-reverse ${DURATION}s linear infinite`, animationDelay: `${delay}s` }}>
                  <span
                    title={t.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-lg shadow-[0_10px_25px_-10px_rgb(0_0_0_/_70%)]"
                  >
                    {t.icon}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
