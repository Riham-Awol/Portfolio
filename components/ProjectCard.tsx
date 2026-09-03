"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 45px -15px rgb(90 74 51 / 35%)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[20px] border border-line bg-white"
    >
      <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-sage to-brown transition-transform duration-[400ms] group-hover:scale-x-100" />
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col gap-3.5 p-[26px]">
        <div className="flex items-start justify-between gap-2.5">
          <div className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-xl bg-beige text-[1.6rem]">
            {project.icon}
          </div>
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line text-brown-dark transition-all group-hover:translate-x-1 group-hover:border-sage-dark group-hover:bg-sage-dark group-hover:text-white">
            →
          </span>
        </div>
        <h3 className="font-display text-xl text-brown-dark">{project.name}</h3>
        <p className="grow text-[0.94rem] leading-relaxed text-ink-soft">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-sage/14 px-2.5 py-1 text-[0.72rem] font-bold text-sage-dark">
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
