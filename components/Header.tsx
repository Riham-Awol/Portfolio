"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (doc.scrollTop / scrollable) * 100)) : 0);
    }
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-[100] bg-bg/80 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-b border-border shadow-[0_8px_24px_-18px_rgb(0_0_0_/_60%)]" : "border-b border-transparent"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-cherry to-navy-light transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-display text-2xl font-bold text-text">
          Riham<span className="text-cherry">.</span>
        </Link>

        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-[22px] rounded-full bg-text transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-[22px] rounded-full bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-[22px] rounded-full bg-text transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        <ul
          className={`flex-col gap-1 rounded-3xl border border-border bg-surface p-3.5 shadow-lg md:static md:flex md:flex-row md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "absolute left-4 right-4 top-[68px] flex" : "hidden md:flex"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-full px-3.5 py-2 text-[0.94rem] font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-cherry/18 text-cherry-light"
                    : "text-text-soft hover:bg-surface-2 hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full bg-gradient-to-br from-cherry to-navy px-5 py-2.5 text-[0.88rem] font-bold text-white shadow-[0_8px_20px_-8px_rgb(227_28_79_/_50%)] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
