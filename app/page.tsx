import Hero from "@/components/sections/Hero";
import DevConsole from "@/components/sections/DevConsole";
import AboutTeaser from "@/components/sections/AboutTeaser";
import SkillsTeaser from "@/components/sections/SkillsTeaser";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <DevConsole />
      <AboutTeaser />
      <SkillsTeaser />
      <FeaturedWork />
      <Contact />
    </>
  );
}
