"use client";

import React, { useEffect, useState } from "react";
import Sensor from "react-visibility-sensor"
import FadeIn from "react-fade-in";
import { IoMailSharp } from "react-icons/io5";

import "../styles/hero.css";
import { send } from "emailjs-com";
import useWindowDimensions from "@/hooks/useWindowSize";

const ContactSection = () => {

    const [getVisible, setVisible] = useState(false);
    const [getEmailSent, setEmailSent] = useState(false);


    const { width } = useWindowDimensions();

    useEffect(() => {
        setVisible(width < 1000);
    }, [width])

    const [toSend, setToSend] = useState({
      from_name: '',
      email: '',
      subject: '',
      message: ''
  });

  const onSubmit = (e: any) => {
      e.preventDefault();
  

      if(toSend.from_name.trim() == "") return;
      if(toSend.email.trim() == "") return;
      if(toSend.subject.trim() == "") return;
      if(toSend.message.trim() == "") return;


      if(localStorage.getItem("sentEmail") === "true")
      {
        setEmailSent(true);
        clearForm();
        return;
      }
      else
      {
        localStorage.setItem("sentEmail", "true") 
      }
      send(
          'service_6608oac',
          'template_k2j1u3p',
          toSend,
          'Y8tORGKem5fp4plij'
      ).then(() => {

        clearForm();
        setEmailSent(true);
      })
      .catch((err) => {
          console.log('FAILED...', err);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setToSend({
      from_name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  return (

    <section id="contact" className="w-full z-10 h-full bg-custom-gray-900">

      <Sensor onChange={(visible: boolean) => {
          if(visible){
              setVisible(true);
          }
      }}>
        <FadeIn visible={getVisible}>
        
        <form onSubmit={onSubmit} id="email-form" className="w-full h-full flex flex-col justify-center items-start md:items-center lg:items-center p-5 mt-10 gap-5">
        
          <div className="flex flex-row justify-center items-center gap-8 h-full mb-10">
            <IoMailSharp size={50} />
            <p className="text-xl font-bold">Contact Me</p>
          </div>
          <p className={`text-md font-bold text-green-400 ${getEmailSent ? "" : "hidden"}`}>Email sent, please be patient untill i check it out.</p>
        
          <div className="flex flex-row justify-end md:justify-center items-center w-full">
            <div className="font-bold flex flex-row gap-2">Name<p className="text-brand-500">*</p></div>
            <input value={toSend.from_name} onChange={handleChange} id="from_name" name="from_name" className="bg-custom-gray-700 w-[500px] p-4"></input>
          </div>

          <div className="flex flex-row justify-end md:justify-center items-center w-full">
            <div className="font-bold flex flex-row gap-2 ">Email<p className="text-brand-500">*</p></div>
            <input value={toSend.email} onChange={handleChange} type="email" id="email" name="email" className="bg-custom-gray-700 w-[500px] p-4"></input>
          </div>

          <div className="flex flex-row justify-end md:justify-center items-center w-full">
            <div className="font-bold flex flex-row gap-2">Subject<p className="text-brand-500">*</p></div>
            <input value={toSend.subject} onChange={handleChange} type="text" id="subject" name="subject" className="bg-custom-gray-700 w-[500px] p-4"></input>
          </div>

          <div className="flex flex-row justify-end md:justify-center items-center w-full mb-4">
            <div className="font-bold flex flex-row gap-2">Message<p className="text-brand-500">*</p></div>
            <textarea value={toSend.message} onChange={handleChange} id="message" name="message" className="bg-custom-gray-700 w-[500px] p-4"></textarea>
          </div>

          <button type="submit" className="bg-custom-gray-600 flex flex-row items-center gap-5  h-[65px] px-8 rounded hover:bg-brand-500 ml-[150px] md:ml-0">Submit</button>

        </form>
        </FadeIn>

      </Sensor>
    </section>
  );
}

export default ContactSection;
