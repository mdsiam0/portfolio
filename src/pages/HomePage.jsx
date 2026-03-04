
import HeroSection from '../component/HeroSection';
import Projects from '../component/Projects';
import SkillsSection from '../component/SkillsSection';
import Footer from '../component/Footer';
import AboutMeSection from '../component/AboutMeSection';
import ContactSection from '../component/ContactSection';
import React, { useEffect } from "react";
import { useLocation } from "react-router";




const HomePage = () => {

    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300); // wait for page to render
      }
    }
  }, [location]);
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMeSection></AboutMeSection>
            
            <Projects></Projects>
            <SkillsSection></SkillsSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;