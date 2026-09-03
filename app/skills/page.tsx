import type { Metadata } from "next";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills — Riham Awol",
  description: "Skills and tools Riham Awol works with — frontend, animation, mobile, backend, and more.",
};

export default function SkillsPage() {
  return <Skills />;
}
