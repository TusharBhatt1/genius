"use client"
import Lottie from "lottie-react";
import React from "react";
import { FaCode, FaCog, FaLink } from "react-icons/fa";
import animation from "@/public/Animation - 1706103272804.json"

export default function page() {
  return (
    <div className="w-full flex p-4 py-7">
      <div className="flex flex-col gap-10">
       
        <div className="text-slate-400 flex flex-col items-start gap-2">
          <span className="flex items-center gap-2" >
            under construction, partially completed.
          </span>
          <span className="h-40 w-40">
            <Lottie animationData={animation}/>
          </span>
        </div>

        <div className="flex flex-col gap-7">
          <p>
            <span className="text-2xl font-bold">Genius</span> is an AI-powered
            application for instant smart answers and captivating image
            responses,
            <br />
            powered by Next.js, React, and TypeScript.
          </p>
          <div className="flex gap-2 items-center text-blue-700 font-bold">
            <FaCode /> Engineered by {" "}

            <a href="https://new-portfolio-theta-jade.vercel.app/" className="flex items-center gap-2"  target="_blank">
            Tushar Bhatt <FaLink />
            </a>{" "}
          
            <FaCode />
          </div>
        </div>
      </div>
    </div>
  );
}
