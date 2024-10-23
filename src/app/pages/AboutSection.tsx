"use client";

import React, { useEffect, useState } from "react";
import { PiDownloadFill } from "react-icons/pi";
import Sensor from "react-visibility-sensor"
import FadeIn from "react-fade-in";

import "../styles/hero.css";
import useWindowDimensions from "@/hooks/useWindowSize";

const AboutSection = () => {

    const [getVisible, setVisible] = useState(false);
    
    const { width } = useWindowDimensions();

    useEffect(() => {
        setVisible(width < 1000);
    }, [width])

  return (

    <section id="about" className="w-full z-10 h-[100vh] bg-white">

        <div className="flex flex-col items-center gap-20 pt-10">
            <h1 className="text-black text-5xl font-bold">Custom Dashboards</h1>
            <p className="text-black text-xl">We create custom dashboards to represent your data and processes
            to meet your needs. Read & Control.</p>
        </div>

    {/* <Sensor onChange={(visible: boolean) => {
        if(visible){
            setVisible(true);
        }
    }}>

        <FadeIn visible={getVisible}>

        </FadeIn>

            
    </Sensor> */}

    </section>
  );
};

export default AboutSection;
