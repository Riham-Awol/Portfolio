import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About — Riham Awol",
  description: "About Riham Awol — Full-Stack Developer and Computer Science student.",
};

export default function AboutPage() {
  return <About />;
}
