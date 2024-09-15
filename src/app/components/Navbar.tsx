"use client";

import clsx from "clsx";
import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;
    setIsVisible(currentScrollPos < 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="navbar" className={`fixed z-50 h-[80px] py-5 w-full px-5 items-center flex justify-between transition-all duration-200  ${ isVisible ? 'top-0'  : '-top-5'}`}>
        <div className="flex flex-row w-full items-center justify-center">
            <div className="hidden lg:flex">
              <a href="#home" className={`navbar-button ${ isVisible ? 'text-white'  : 'text-transparent'} `} >HOME</a>
              <a href="#about" className={`navbar-button ${ isVisible ? 'text-white'  : 'text-transparent'} `}>ABOUT</a>
              <a href="#projects" className={`navbar-button ${ isVisible ? 'text-white'  : 'text-transparent'} `}>PROJECTS</a>
              <a href="#resume" className={`navbar-button ${ isVisible ? 'text-white'  : 'text-transparent'} `}>RESUME</a>
              <a href="#contact" className={`navbar-button ${ isVisible ? 'text-white'  : 'text-transparent'} `}>CONTACT</a>
            </div>
        </div>
    </section>
  );
}

export default Navbar;
 