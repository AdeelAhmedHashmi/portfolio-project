import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
// import Portfolio from "../components/Portfolio";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillsSection";
import { Portfolio } from "../components/Portfolio";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>
        <HeroSection />
        <Services />
        <AboutMe />
        <SkillsSection />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
