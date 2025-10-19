import React from 'react';
import HeroSection from '../component/HeroSection';
import Projects from '../component/Projects';
import SkillsSection from '../component/SkillsSection';
import Footer from '../component/Footer';
import AboutMeSection from '../component/AboutMeSection';
import ContactSection from '../component/ContactSection';




const HomePage = () => {
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