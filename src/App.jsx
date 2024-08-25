import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App bg-[#2B2D33]">
      <HeroSection />
      <ProjectSection />
      <FeatureSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
