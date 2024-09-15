"use client";

import React, { useEffect, useState } from "react";
import Sensor from "react-visibility-sensor";
import FadeIn from "react-fade-in";
import useWindowDimensions from "@/hooks/useWindowSize";

// import '../styles/about.css';

const Experience = (props: {
  job: string;
  title: string;
  date: string;
  description: string[];
}) => {
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
      <FadeIn visible={getVisible}>
        <div className="flex flex-col lg:flex-row items-start ">
          <div className="flex flex-row h-full">
            <p className="text-brand-500 w-[170px]">{props.date}</p>
          </div>

          <div className="w-[100%] lg:w-[900px] border-l-2 pl-3 mb-4">
            <p className="text-brand-500 text-lg font-bold">{props.title}</p>
            <p className="text-custom-gray-400 text-sm">{props.job}</p>
            <br></br>
            <FadeIn visible={getVisible}delay={250}>
                {props.description.map((x: string) => {
                return (

                    <div key={x} className="flex flex-row mb-2">
                    <div className=" mt-[5px] mr-2 w-[5px] h-[5px] rounded-full bg-custom-gray-600"></div>
                    <p className="text-white align-text-top w-[95%]">{x}</p>
                    </div>
                );
                })}
            </FadeIn>

          </div>
        </div>
      </FadeIn>
    </Sensor>
  );
};

export default Experience;
