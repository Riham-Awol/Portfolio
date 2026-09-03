import Link from "next/link";
import { projects } from "@/lib/projects";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const featured = projects.slice(0, 4);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-surface px-6 pt-16">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
        <div>
          <Link href="/" className="font-display text-2xl font-bold text-text">
            Riham<span className="text-cherry">.</span>
          </Link>
          <p className="mt-3.5 mb-[18px] max-w-[320px] text-[0.92rem] leading-relaxed text-text-soft">
            Full-Stack Developer building clean, reliable, well-designed web applications.
          </p>
          <div className="flex gap-2.5">
            <a
              href="https://github.com/Riham-Awol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-text transition-all hover:-translate-y-0.5 hover:bg-cherry hover:text-white"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                />
              </svg>
            </a>
            <a
              href="mailto:rihamha1920@icloud.com"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-text transition-all hover:-translate-y-0.5 hover:bg-cherry hover:text-white"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.06 5.6a1.2 1.2 0 0 0 1.48 0l7.06-5.6a.6.6 0 0 0-.3-1.05H4.5a.6.6 0 0 0-.3 1.05Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base text-text">Navigation</h4>
          <ul className="space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.92rem] text-text-soft transition-colors hover:text-cherry-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base text-text">Selected Projects</h4>
          <ul className="space-y-2.5">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="text-[0.92rem] text-text-soft transition-colors hover:text-cherry-light">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base text-text">Contact</h4>
          <ul className="space-y-2.5">
            <li>
              <a href="mailto:rihamha1920@icloud.com" className="text-[0.92rem] text-text-soft transition-colors hover:text-cherry-light">
                rihamha1920@icloud.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Riham-Awol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.92rem] text-text-soft transition-colors hover:text-cherry-light"
              >
                github.com/Riham-Awol
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-3 border-t border-border py-[22px] text-[0.85rem] text-text-soft">
        <span>© {year} Riham Awol. All rights reserved.</span>
        <Link href="/" className="font-bold text-cherry-light hover:text-cherry">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
