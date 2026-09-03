"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TRAITS = [
  { label: "Problem Solving", value: 90 },
  { label: "Frontend", value: 85 },
  { label: "Backend", value: 80 },
  { label: "UI/UX", value: 75 },
  { label: "Curiosity", value: 95 },
];

export default function DeveloperDNA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="grid gap-4">
      {TRAITS.map((trait, i) => (
        <div key={trait.label}>
          <div className="mb-1.5 flex items-center justify-between text-[0.85rem]">
            <span className="font-semibold text-text">{trait.label}</span>
            <span className="font-bold text-cherry-light">{trait.value}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-surface-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cherry to-cherry-light"
              initial={{ width: 0 }}
              animate={inView ? { width: `${trait.value}%` } : { width: 0 }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
