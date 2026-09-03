"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoFrame() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="animate-floaty relative mx-auto w-fit">
      <div
        className="animate-morph relative aspect-square w-[min(340px,78vw)] overflow-hidden border-[6px] border-surface shadow-[0_20px_60px_-15px_rgb(227_28_79_/_30%)]"
        style={{
          borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%",
          background: "linear-gradient(150deg, var(--navy), var(--cherry-dark))",
        }}
      >
        {!errored ? (
          <Image
            src="/riham.jpg"
            alt="Riham Awol"
            fill
            sizes="340px"
            className="z-10 object-cover"
            onError={() => setErrored(true)}
            priority
          />
        ) : (
          <div className="font-display absolute inset-0 z-10 grid place-items-center bg-gradient-to-br from-cherry to-navy text-6xl font-bold text-white">
            RA
          </div>
        )}
        <div
          className="absolute -inset-3.5 z-0 animate-[spin_30s_linear_infinite] rounded-[inherit] border-2 border-dashed border-cherry opacity-40"
          aria-hidden="true"
        />
      </div>

      <div className="absolute right-[-6%] bottom-[6%] z-20 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-[0.78rem] font-bold whitespace-nowrap text-text shadow-[0_10px_30px_-12px_rgb(0_0_0_/_60%)]">
        <span className="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-navy-light" />
        Open to new opportunities
      </div>
    </div>
  );
}
