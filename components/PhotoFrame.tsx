"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoFrame() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="animate-floaty relative mx-auto w-fit">
      <div
        className="animate-morph relative aspect-square w-[min(340px,78vw)] overflow-hidden border-[6px] border-white shadow-[0_20px_45px_-15px_rgb(90_74_51_/_35%)]"
        style={{
          borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%",
          background: "linear-gradient(150deg, var(--sage-light), var(--beige))",
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
          <div className="font-display absolute inset-0 z-10 grid place-items-center bg-gradient-to-br from-sage to-brown text-6xl font-bold text-white">
            RA
          </div>
        )}
        <div
          className="absolute -inset-3.5 z-0 animate-[spin_30s_linear_infinite] rounded-[inherit] border-2 border-dashed border-sage opacity-50"
          aria-hidden="true"
        />
      </div>

      <div className="absolute right-[-6%] bottom-[6%] z-20 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[0.78rem] font-bold whitespace-nowrap text-brown-dark shadow-md">
        <span className="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-sage-dark" />
        Open to new opportunities
      </div>
    </div>
  );
}
