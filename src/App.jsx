import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import TransformationModel from './components/TransformationModel';
import TechStack from './components/TechStack';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    const handleScroll = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-soft-peach text-navy overflow-x-hidden">
      <Navbar/>
     <Element name="hero"><HeroSection /></Element>
     <Element name="who-we-are"><WhoWeAre /></Element>
     <Element name="transformation"><TransformationModel /></Element>
     <Element name="tech-stack"><TechStack /></Element>
     <Element name="contact"><ContactSection /></Element>
    </div>
  );
}

export default App;