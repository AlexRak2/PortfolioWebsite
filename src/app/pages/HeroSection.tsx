"use client";

import React, { useEffect, useState } from "react";
import '../styles/hero.css';
import useWindowDimensions from "@/hooks/useWindowSize";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";

const HeroSection = () => {

  const [getVisible, setVisible] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
      setVisible(width < 1000);
  }, [width])
  
  return (

    <section id="home" className="w-full h-[80vh] ">

      <div className="absolute w-full -top-14 h-[80vh] -skew-y-2 bg-gradient-to-tr from-[#5ea8b8] to-[#233cb4] z-20"></div>

      <div className="w-full h-full flex flex-row items-center z-10 pl-[15%] pt-[5%]" >
        

        <div className="w-[700px] z-20">
          <h1 className="text-4xl font-bold mb-8 drop-shadow-lg mb-12 wider">Secure Cloud Based Dashboards </h1>

          <p className="drop-shadow-lg text-lg mb-12 tracking-wider leading-8">
          We create custom dashboards to represent your data and processes to meet your needs. Read & Control.
          </p>

          <button type="submit" className="p-4 bg-brand-900 mt-10 px-5 text-white rounded duration-300 hover:scale-105 tracking-wider">Learn More</button>

        </div>

        <img src="/iot.png" className="absolute w-full left-[400px] z-20 scale-50 drop-shadow-[10px_10px_15px_rgba(0,0,0,0.5)]"></img>


      </div>
    </section>
  );
}

export default HeroSection;
 


{/* <section id="home" className="w-full hero-image hero">


<div className="w-full h-full flex flex-row items-center just gap-40 z-10 hero-image pl-[15%] " >


<div className="w-[700px] z-20">
  <h1 className="text-7xl font-bold mb-8 drop-shadow-lg mb-12 wider">Remote. Monitoring. Solved.</h1>

  <p className="drop-shadow-lg text-lg mb-12 tracking-wider leading-8">
  SPI provides a single integrated remote read and control solution: hardware, software, and cloud hosting, powered with a dashboard, daily email reports, and alarm notifications. 
  Our unique technology offers low monthly data plans that cannot be matched by our competition. With 800+ units connected in four timezones, we are enabling customers to reach unprecedented growth.
  </p>

  <button type="submit" className="p-4 bg-brand-900 mt-10 px-5 text-white rounded duration-300 hover:scale-105 tracking-wider">Learn More</button>

</div>

<div className="absolute bg-gradient-to-r from-[#000315] to-transparent w-full h-full left-0"></div>
<div className="absolute bg-gradient-to-r from-transparent to-[#000315]/60 w-full h-full right-0"></div>

<RiArrowLeftSFill size={35} className=" absolute left-20 text-white z-20 scale-125 font-bold animate-bounce hover:animate-none" />
<RiArrowRightSFill size={35} className=" absolute right-20 text-white z-20 scale-125 font-bold animate-bounce hover:animate-none" />


</div>
</section> */}