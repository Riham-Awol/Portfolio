import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Riham Awol — Full-Stack Developer",
  description:
    "Riham Awol — Full-Stack Developer. Building modern, high-quality web applications with clean code and considered UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased selection:bg-sage-light selection:text-brown-dark">
        <BlobBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
