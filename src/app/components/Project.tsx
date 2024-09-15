"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Sensor from "react-visibility-sensor";
import FadeIn from "react-fade-in";
import useWindowDimensions from "@/hooks/useWindowSize";
// import '../styles/about.css';

const Experience = (props: { title: string, skills: string, description: string, link: string, imgUrl: string, children: ReactNode}) => {

  const [getVisible, setVisible] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
      setVisible(width < 1000);
  }, [width])

  return (

    <Sensor
    onChange={(visible: boolean) => {
      if (visible) {
        setVisible(true);
      }
    }}
  >
    <FadeIn visible={getVisible} delay={250} className="w-[400px] h-[400px] p-5 rounded-xl">
    <a href={props.link} target="_blank" className="hover:scale-105 transition-all duration-200">
    <div className="h-[225px] flex mb-2">
        <img className="m-auto rounded-xl" src={props.imgUrl}></img>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className ="w-full">{props.title}</div>
        <div className="w-[100%] h-[1px] bg-gray-600"></div>
          {props.children}
        </div>
      <div className="flex flex-col gap-2 justify-between ">
        <p className="text-brand-500">{props.skills}</p>
        <p className="text-sm">{props.description}</p>
      </div>
    </a>
    </FadeIn>
    </Sensor>
  );
};

export default Experience;