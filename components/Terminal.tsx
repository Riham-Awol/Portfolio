"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Line = { type: "input" | "output" | "link"; text: string; href?: string };

const HELP_TEXT = [
  "Available commands:",
  "  about      — who I am",
  "  skills     — what I work with",
  "  projects   — what I've built",
  "  resume     — CV & degree",
  "  contact    — get in touch",
  "  whoami     — quick identity check",
  "  clear      — clear the screen",
];

export default function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "riham-os v1.0 — type 'help' to get started" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function push(newLines: Line[]) {
    setLines((prev) => [...prev, ...newLines]);
  }

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    push([{ type: "input", text: raw }]);
    if (!cmd) return;

    switch (cmd) {
      case "help":
        push(HELP_TEXT.map((t) => ({ type: "output", text: t })));
        break;
      case "about":
        push([
          { type: "output", text: "Full-Stack Web & Mobile Developer, CS student, based in Addis Ababa, Ethiopia." },
          { type: "link", text: "→ open /about", href: "/about" },
        ]);
        break;
      case "skills":
        push([
          { type: "output", text: "React.js, Next.js, Node.js, Flutter, MongoDB, MySQL, Firebase, and more." },
          { type: "link", text: "→ open /skills", href: "/skills" },
        ]);
        break;
      case "projects":
        push([
          { type: "output", text: "10 featured projects — e-commerce, fintech, HR tools, dashboards, and more." },
          { type: "link", text: "→ open /projects", href: "/projects" },
        ]);
        break;
      case "resume":
        push([
          { type: "output", text: "Resume and temporary degree certificate, ready to view or download." },
          { type: "link", text: "→ open /resume", href: "/resume" },
        ]);
        break;
      case "contact":
        push([
          { type: "output", text: "Email, phone, GitHub, or the contact form — all one click away." },
          { type: "link", text: "→ open /contact", href: "/contact" },
        ]);
        break;
      case "whoami":
        push([{ type: "output", text: "riham-awol — full-stack developer" }]);
        break;
      case "sudo hire-me":
        push([
          { type: "output", text: "Permission granted. Redirecting to /contact…" },
        ]);
        setTimeout(() => router.push("/contact"), 700);
        break;
      case "clear":
        setLines([]);
        return;
      default:
        push([{ type: "output", text: `command not found: ${cmd} — type 'help' for a list of commands` }]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    run(input);
    setHistory((h) => [...h, input]);
    setHistoryIndex(-1);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-border bg-[#0a0e18] shadow-[0_20px_60px_-15px_rgb(0_0_0_/_70%)]"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-cherry" />
        <span className="h-2.5 w-2.5 rounded-full bg-cherry-light" />
        <span className="h-2.5 w-2.5 rounded-full bg-navy-light" />
        <span className="ml-2 font-mono text-[0.72rem] text-text-soft">riham@portfolio: ~</span>
      </div>

      <div ref={scrollRef} className="h-[260px] overflow-y-auto px-4 py-3.5 font-mono text-[0.82rem] leading-relaxed">
        {lines.map((line, i) =>
          line.type === "input" ? (
            <p key={i} className="text-text">
              <span className="text-cherry-light">➜</span> <span className="text-navy-light">~</span> {line.text}
            </p>
          ) : line.type === "link" ? (
            <button
              key={i}
              onClick={() => line.href && router.push(line.href)}
              className="block cursor-pointer text-left text-cherry-light underline decoration-dotted hover:text-cherry"
            >
              {line.text}
            </button>
          ) : (
            <p key={i} className="whitespace-pre-wrap text-text-soft">
              {line.text}
            </p>
          )
        )}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 text-text">
          <span className="text-cherry-light">➜</span>
          <span className="text-navy-light">~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
            className="flex-1 bg-transparent outline-none"
          />
        </form>
      </div>
    </div>
  );
}
