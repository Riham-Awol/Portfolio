"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

const FILTERS = ["All", "Full-Stack", "Web"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    if (active === "Full-Stack") return projects.filter((p) => p.tags.includes("Full-Stack"));
    return projects.filter((p) => !p.tags.includes("Full-Stack"));
  }, [active, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-[0.85rem] font-bold transition-all ${
              active === f
                ? "bg-gradient-to-br from-cherry to-navy text-white shadow-[0_8px_20px_-10px_rgb(232_93_158_/_55%)]"
                : "border border-border bg-surface text-text-soft hover:border-cherry/40 hover:text-text"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="rounded-[20px] border border-border bg-surface p-8 text-center text-text-soft">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
