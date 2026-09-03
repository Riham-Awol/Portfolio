import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects — Riham Awol",
  description: "Projects built by Riham Awol — e-commerce, fintech, dashboards, and more, pulled from GitHub.",
};

export default function ProjectsPage() {
  return <Projects />;
}
