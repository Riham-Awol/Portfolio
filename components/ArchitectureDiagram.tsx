"use client";

import { motion } from "framer-motion";

export default function ArchitectureDiagram({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {tech.map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: i * 0.12 }}
          className="w-full"
        >
          <div className="mx-auto w-full max-w-[280px] rounded-xl border border-border bg-surface-2 py-3 text-center text-[0.9rem] font-bold text-text">
            {t}
          </div>
          {i < tech.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
              className="mx-auto h-6 w-px origin-top bg-gradient-to-b from-cherry to-navy"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
