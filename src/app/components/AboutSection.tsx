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

    <section id="about" className="w-full z-10 h-full bg-custom-gray-950">

    <Sensor onChange={(visible: boolean) => {
        if(visible){
            setVisible(true);
        }
    }}>

        <FadeIn visible={getVisible}>
        <div className="flex flex-col w-full h-full justify-center items-center p-5">
            <div className="flex flex-col md:flex-row-reverse lg:flex-row  h-full py-10 items-start justify-center gap-10">
            <img
                className="rounded-full w-[150px] shadow-xl"
                src="https://media.licdn.com/dms/image/v2/D4E03AQGi4fkymgKNfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718394791937?e=1731542400&v=beta&t=sZRk2XFdF3EzG4rUwBcTeNVEDErEVgZkmN9vLUQUHEY"
            ></img>

            <div className="flex flex-col justify-center w-[90%] md:w-[60%] lg:w-[40%] border-l-2 p-4 z-10 bg-custom-gray-950 rounded-r-lg gap-5">
                <p className="text-2xl lg:text-2xl sm:text-xl  text-white font-black">
                About Me
                </p>
                <p className="text-md text-custom-gray-400 leading-8">
                Hi! I&apos;m, Alejandro an Innovative Software Engineer with over three
                years of experience specializing in C# development, fullstack
                solutions, and production environment optimization. Skilled in
                building scalable applications, custom ERP systems, and
                multiplayer games with a strong focus on performance and
                reliability. Adept at working in live production environments and
                addressing real-time challenges. Eager to leverage my technical
                expertise.
                </p>

                <div className="flex flex-col z-10 gap-5">
                <p className="text-xl lg:text-xl sm:text-xl  text-white font-black">
                Contact Details
                </p>

                <div className="flex flex-col md:flex-row lg:flex-row  gap-[100px]">
                    <div className="flex flex-col gap-5 pl-3">
                        <a
                        href="https://www.linkedin.com/in/alejandro-hernandez-921975210/"
                        target="_blank"
                        className="flex flex-row gap-4"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#417296"
                            className="social-icons b transition duration-500 hover:scale-125 "
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>

                        <div className="text-custom-gray-400">alejandro-hernandez</div>
                        </a>

                        <a
                        href="https://github.com/AlexRak2"
                        target="_blank"
                        className="flex flex-row gap-4"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="white"
                            className="social-icons b transition duration-500 hover:scale-125 "
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>

                        <div className="text-custom-gray-400">AlexRak2</div>
                        </a>

                        <a
                        href="mailto: alejandrorak2@gmail.com"
                        className="flex flex-row gap-4"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="white"
                            className="social-icons b transition duration-500 hover:scale-125 "
                            viewBox="0 0 32 16"
                        >
                            <path
                            fill="#ea4435"
                            d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                            ></path>
                            <path
                            fill="#00ac47"
                            d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                            transform="rotate(180 26.5 16)"
                            ></path>
                            <path
                            fill="#ffba00"
                            d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                            ></path>
                            <path
                            fill="#4285f4"
                            d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                            ></path>
                            <path
                            fill="#c52528"
                            d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                            ></path>
                        </svg>

                        <div className="text-custom-gray-400">Alejandrorak2@gmail.com</div>
                        </a>
                    </div>

                <a href="/resume.pdf" target="_blank" className="bg-custom-gray-600 flex flex-row items-center gap-5 h-[65px] px-8 rounded hover:bg-brand-500"><PiDownloadFill size={25} /> <p className="">Download Resume</p></a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </FadeIn>

            
    </Sensor>

    </section>
  );
};

export default AboutSection;
