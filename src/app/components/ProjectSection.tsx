"use client";

import React from "react";
// import '../styles/about.css';
import { FaSteam } from "react-icons/fa";
import Project from "./Project";

const ProjectSection= () => {
  
  return (
    <section id="projects" className="w-full z-10 h-full bg-custom-gray-900">
            
          <div className="flex flex-col items-center h-100 gap-2 z-10 p-10">
          <p className="text-2xl lg:text-2xl sm:text-xl  text-white font-black">
              Projects
            </p>
            <div className="flex flex-col lg:flex-row gap-2 h-full items-center justify-center content-center z-10 ">

              <Project title="SyncChat" skills="ASP.NET - C# - SQL" link="https://github.com/AlexRak2/Chat-Application" imgUrl="https://raw.githubusercontent.com/AlexRak2/Chat-Application/main/Content/chatpage.png" 
                description="A real-time chat app where you can join rooms and chat with anyone from around the world.">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" className="social-icons b transition duration-500 hover:scale-125 fill-gray-300" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
               </Project>

               <Project title="Authentication" skills="ASP.NET - C# - SQL" link="https://github.com/AlexRak2/AuthenticationApp" imgUrl="https://raw.githubusercontent.com/AlexRak2/AuthenticationApp/main/Content/register.png" 
               description="A custom login authentication app which manages various login edge cases, 
                    including manual and Google-based login, email verification, password resets, and more. All functionality is exposed via API for external integration.">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" className="social-icons b transition duration-500 hover:scale-125 fill-gray-300" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                          </svg>
               </Project>

               <Project title="Bank App" skills="ASP.NET - C# - SQL" link="https://github.com/AlexRak2/Bank-App" imgUrl="https://raw.githubusercontent.com/AlexRak2/Bank-App/main/Screenshots/Dashboard_2.png" description=" simple banking application built with ASP.NET Web App, following the MVC pattern. 
                    This app allows users to track their income, expenses, and manage their finances.">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" className="social-icons b transition duration-500 hover:scale-125 fill-gray-300" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                          </svg>
               </Project>

               <Project title="Havoc" skills="C# - UNITY - MIRROR" link="https://store.steampowered.com/app/2149290/Havoc/" imgUrl="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2149290/header.jpg?t=1722028886" 
                description="A Competitive shooter made with unity utilizing C# and Mirror networking. 200,000 Downloads, Over 1,000$ in revenue.">
                    <FaSteam />

               </Project>

            </div>

            <div className="flex flex-row gap-2 h-full items-center justify-center content-center z-10 ">

              <Project title="Avanced Co-op System" skills="C# - UNITY - FISHNET" link="https://github.com/AlexRak2/Unity-Fishnet-Steam-COOP-Party-System" imgUrl="https://raw.githubusercontent.com/AlexRak2/Unity-Fishnet-Steam-COOP-Party-System/refs/heads/main/Images/party.png" 
                description="This is an advanced cooperative party system template designed for Unity, utilizing Fishnet for networking and Facepunch Steamworks for Steam integration.">
                    <FaSteam />
               </Project>


            </div>

            <a href="https://github.com/AlexRak2" target="_blank" className="bg-custom-gray-600 flex flex-row items-center gap-5 h-[65px] px-8 rounded hover:bg-brand-500 mt-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="" className=" social-icons b transition duration-500 hover:scale-125 fill-gray-300" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
             <p className="">Check Out More</p></a>
          </div>

    
        </section>
  );
}

export default ProjectSection;
 