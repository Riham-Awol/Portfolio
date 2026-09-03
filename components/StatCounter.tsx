"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatCounter({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.4, ease: [0.33, 1, 0.68, 1] });
      return controls.stop;
    }
  }, [inView, count, target]);

  return (
    <div className="flex items-baseline gap-3 rounded-xl border border-border bg-surface px-6 py-[22px] transition-all hover:-translate-y-1 hover:border-cherry/40 hover:shadow-[0_10px_30px_-12px_rgb(232_93_158_/_30%)]">
      <motion.span ref={ref} className="font-display text-3xl font-bold text-cherry-light">
        {rounded}
      </motion.span>
      <span className="text-sm font-semibold text-text-soft">{label}</span>
    </div>
  );
}
