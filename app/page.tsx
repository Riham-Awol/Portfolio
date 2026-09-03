import Hero from "@/components/sections/Hero";
import AboutTeaser from "@/components/sections/AboutTeaser";
import SkillsTeaser from "@/components/sections/SkillsTeaser";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <SkillsTeaser />
      <FeaturedWork />
      <Contact />
    </>
  );
}
