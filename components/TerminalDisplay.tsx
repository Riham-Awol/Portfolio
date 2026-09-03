"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function TerminalDisplay({ command, output, title = "riham@portfolio: ~" }: { command: string; output: string[]; title?: string }) {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const started = useRef(false);

  function startTyping() {
    if (started.current) return;
    started.current = true;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 250);
      }
    }, 35);
  }

  return (
    <motion.div
      onViewportEnter={startTyping}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-border bg-[#0a0e18] shadow-[0_20px_60px_-15px_rgb(0_0_0_/_70%)]"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-cherry" />
        <span className="h-2.5 w-2.5 rounded-full bg-cherry-light" />
        <span className="h-2.5 w-2.5 rounded-full bg-navy-light" />
        <span className="ml-2 font-mono text-[0.72rem] text-text-soft">{title}</span>
      </div>
      <div className="px-4 py-4 font-mono text-[0.82rem] leading-relaxed">
        <p className="text-text">
          <span className="text-cherry-light">$</span> {typed}
          {!showOutput && <span className="animate-blink text-cherry">▌</span>}
        </p>
        {showOutput && (
          <div className="mt-1.5 whitespace-pre-wrap text-text-soft">
            {output.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
