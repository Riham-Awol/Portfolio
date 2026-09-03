import type { Metadata } from "next";
import ResumePage from "@/components/sections/ResumePage";

export const metadata: Metadata = {
  title: "Resume — Riham Awol",
  description: "View, download, or print Riham Awol's resume and temporary degree certificate.",
};

export default function Resume() {
  return <ResumePage />;
}
