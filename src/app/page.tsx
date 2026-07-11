import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { JourneySection } from "@/components/sections/journey-section";
import { GithubSection } from "@/components/sections/github-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <JourneySection />
      <GithubSection />
      <ContactSection />
    </>
  );
}
