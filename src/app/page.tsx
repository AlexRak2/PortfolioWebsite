"use client";

import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ContactSection from "./pages/ContactSection";

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
            <ContactSection />
          </div>
          
          <Footer />
    </main>
  );
}
 