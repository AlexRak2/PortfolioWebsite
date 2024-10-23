"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);

    setIsVisible(currentScrollPos < 99);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<section id="navbar" className={`fixed z-50 top-0 h-[75px] w-full py-4 px-6 flex justify-center items-center transition-all duration-300  ${ isVisible ? 'text-white top-2'  : 'text-transparent top-0'}`}>

  <div className={`absolute inset-0  z-[-1] transition-all duration-300  ${ isVisible ? 'bg-none'  : 'bg-brand-950'}`}></div>
{/*  shadow-sm shadow-blue-500/30 */}
    <div className="flex flex-row w-[60%] items-center justify-between">

      <img src="spi_logo.png" width={200} className="transition-all duration-300 hover:scale-105" />

      <div className="hidden lg:flex">
        <a href="#home" className={`navbar-button `}>Home</a>
        <a href="#about" className={`navbar-button `}>About</a>
        <a href="#projects" className={`navbar-button`}>Products</a>
        <a href="#projects" className={`navbar-button mr-14 `}>Blogs</a>
        <div className='border-l'></div>
        <a href="#contact" className={`navbar-button bg-brand-800 px-8 ml-6 rounded`}>Contact</a>
      </div>
    </div>
  </section>
  );
}

export default Navbar;
 

{/* <section id="navbar" className={`fixed z-50 top-0 h-[75px] w-full py-4 px-6 flex justify-center items-center transition-all duration-300  ${ isVisible ? 'text-white top-2'  : 'text-transparent top-0'}`}>

<div className={`absolute inset-0  z-[-1] transition-all duration-300  ${ isVisible ? 'bg-none'  : 'bg-brand-950'}`}></div>
  <div className="flex flex-row w-[90%] items-center justify-between">

    <img src="spi_logo.png" width={200} className="transition-all duration-300 hover:scale-105" />

    <div className="hidden lg:flex">
      <a href="#home" className={`navbar-button `}>Home</a>
      <a href="#about" className={`navbar-button `}>About</a>
      <a href="#projects" className={`navbar-button`}>Products</a>
      <a href="#projects" className={`navbar-button mr-20 `}>Blogs</a>
      <a href="#contact" className={`navbar-button bg-brand-800 px-6`}>Contact</a>
    </div>
  </div>
</section> */}