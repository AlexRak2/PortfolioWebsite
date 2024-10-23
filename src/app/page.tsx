"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ResumeSection from "./components/ResumeSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ContactSection from "./components/ContactSection";

export default function Home() {

  return (
    <main className="">
          <Navbar />

          <div className="flex flex-col h-full ">
            <HeroSection />
          </div>

          <div className="flex flex-col h-full">
            <AboutSection />
          </div>   
            
          <div className="flex flex-col h-full">
            <ProjectSection />
          </div>

          <div className="flex flex-col h-full">
            <ResumeSection />
          </div>

          <div className="flex flex-col h-full">
            <ContactSection />
          </div>
          
          <Footer />
    </main>
  );
}
 