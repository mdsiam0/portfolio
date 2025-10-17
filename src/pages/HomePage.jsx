import React from 'react';
import HeroSection from '../component/HeroSection';
import Projects from '../component/Projects';
import SkillsSection from '../component/SkillsSection';
import Footer from '../component/Footer';



const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            
            <Projects></Projects>
            <SkillsSection></SkillsSection>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;