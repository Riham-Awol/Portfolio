import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Riham Awol",
  description: "Get in touch with Riham Awol via the contact form, email, or GitHub.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
