import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Riham Awol",
  description: "Get in touch with Riham Awol.",
};

export default function ContactPage() {
  return <Contact />;
}
