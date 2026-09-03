"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

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

  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("main section[id], main #home");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={`sticky top-0 z-[100] bg-cream/75 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-b border-line shadow-[0_8px_24px_-18px_rgb(90_74_51_/_40%)]" : "border-b border-transparent"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-sage to-brown transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-display text-2xl font-bold text-brown-dark">
          Riham<span className="text-sage">.</span>
        </Link>

        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-[22px] rounded-full bg-brown-dark transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-[22px] rounded-full bg-brown-dark transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-[22px] rounded-full bg-brown-dark transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        <ul
          className={`flex-col gap-1 rounded-3xl border border-line bg-white p-3.5 shadow-lg md:static md:flex md:flex-row md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "absolute left-4 right-4 top-[68px] flex" : "hidden md:flex"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-full px-3.5 py-2 text-[0.94rem] font-semibold transition-colors ${
                  isHome && activeId === item.id
                    ? "bg-sage/18 text-sage-dark"
                    : "text-ink-soft hover:bg-sage/14 hover:text-brown-dark"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden shrink-0 rounded-full bg-gradient-to-br from-sage-dark to-brown px-5 py-2.5 text-[0.88rem] font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
