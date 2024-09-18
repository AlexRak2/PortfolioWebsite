"use client";

import React, { useEffect, useState } from "react";
import { SiCsharp } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

import Experience from "./Experience";
import Sensor from "react-visibility-sensor";
import FadeIn from "react-fade-in";
import useWindowDimensions from "@/hooks/useWindowSize";

// import '../styles/about.css';

const AboutSection = () => {
    
  const [getVisible, setVisible] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
      setVisible(width < 1000);
  }, [width])

  return (

    <section
    id="resume"
    className="w-[100vw] z-10 h-[100%] pt-[80px] mb-[80px]"
  >
    <Sensor
      onChange={(visible: boolean) => {
        if (visible) {
          setVisible(true);
        }
      }}
    >
      <FadeIn visible={getVisible}>

          <div className="flex flex-col-reverse lg:flex-row-reverse w-full h-[100%] justify-center mt-10">
            {/* SKILLSS */}

            <div className="flex flex-col h-[100%] w-[280px] items-start text-wrap bg-custom-gray-950  ml-5 lg:ml-0">
              <p className="text-brand-500 font-bold text-2xl  tracking-wider mb-2">
                SKILLS
              </p>
              <div className="w-[30%] bg-brand-600 h-[1px] mb-4"></div>

              <div className="flex flex-col justify-start gap-3 pl-3 mb-2">
                <div className=" rounded-xl flex flex-row items-center">
                  <SiCsharp size={25} />
                  <p className="text-sm pl-2">C#</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <AiOutlineDotNet  size={25} />
                  <p className="text-sm pl-2">ASP.NET</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <SiPython size={25} />
                  <p className="text-sm pl-2">Python</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                    <IoLogoJavascript size={30} />
                  <p className="text-sm pl-2">Javascript</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <SiTypescript size={25} />
                  <p className="text-sm pl-2">Typescript</p>
                </div>

       
                <div className=" rounded-xl flex flex-row items-center">
                  <FaHtml5  size={25} />
                  <p className="text-sm pl-2">HTML</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <BiSolidFileCss   size={25} />
                  <p className="text-sm pl-2">CSS</p>
                </div>               
                
                <div className=" rounded-xl flex flex-row items-center">
                  <FaDatabase size={25} />
                  <p className="text-sm pl-2">SQL</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <IoLogoNodejs size={30} />
                  <p className="text-sm pl-2">NodeJS</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <FaServer  size={30} />
                  <p className="text-sm pl-2">Rest API</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <FaReact  size={30} />
                  <p className="text-sm pl-2">React</p>
                </div>

                <div className=" rounded-xl flex flex-row items-center">
                  <RiNextjsFill  size={30} />
                  <p className="text-sm pl-2">NextJS</p>
                </div>
            </div>
            </div>

            {/* EXPERIENCE */}
            <div className="flex flex-col h-[100%] w-[280px] lg:w-[1200px] items-end text-wrap ml-5 lg:ml-0">
              <div className="flex flex-col justify-start w-100 h-100 items-start mr-5 rounded-xl">
                <p className="text-brand-500 font-bold text-2xl tracking-widest">
                  EXPERIENCE
                </p>
                <div className="w-[100px] bg-brand-600 h-[1px] mb-10"></div>

                <Experience
                  job="Avante Health Solutions, Concord, NC"
                  title="Development Associate"
                  date="April 2024 - Present"
                  description={[
                    "Customized ERP solutions using C#, enhancing functionality for hundreds of end users in a live production environment.",
                    "Wrote complex SQL scripts for custom database views and mass data imports, improving data accessibility.",
                    "Managed tasks through a ticket system, boosting team efficiency by 30%.",
                  ]}
                />

                <Experience
                  job="S.P.I. (Secure Process Intelligence), Fort Mill, SC"
                  title="Software Developer"
                  date="April 2023 - April 2024"
                  description={[
                    "Developed data analytics dashboards using HTML, CSS, JavaScript, and Python for real-time data visualization",
                    "Automated monthly reporting for over 100 customers, reducing reporting time by 40%.",
                    "Created tools for attribute updates and automatic label printing, streamlining operational workflows.",
                  ]}
                />

                <Experience
                  job="Havoc - Game Development, Remote"
                  title="Game Programmer"
                  date="January 2021 - August 2024"
                  description={[
                    "Developed a multiplayer FPS game in Unity with C# and Mirror networking, achieving 180,000+ downloads on Steam and generative over 1200$ in revenue.",
                    "Integrated Steamworks API for online matchmaking, leaderboards, and achievements.",
                  ]}
                />

                <Experience
                  job="uBreakiFix / CPR CellPhone Repair, Tallahassee, FL / Rock Hill, SC"
                  title="Repair Technician"
                  date="October 2020-November 2023"
                  description={[
                    "Certified technician for Apple/Samsung, repairing smartphones, tablets, laptops, and game consoles.",
                    "Performed diagnostics and repairs using specialized tools, maintaining a high success rate.",
                  ]}
                />
              </div>
            </div>
          </div>
      </FadeIn>
    </Sensor>
    </section>

  );
};

export default AboutSection;
