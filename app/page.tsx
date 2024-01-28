"use client";
import Lottie from "lottie-react";
import React from "react";
import { FaBrain, FaSearch, FaImages, FaRocket, FaCode, FaCog, FaLink } from "react-icons/fa";
import animation from "@/public/Animation - 1706103272804.json";

export default function HomePage() {
  return (
    <div className="w-full flex p-4 py-7">
      <div className="flex flex-col gap-10">

        <div className="text-slate-400 flex flex-col items-start gap-2">
          <span className="font-bold text-lg">
            under Construction - work in Progress
          </span>
         
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-xl font-bold">
            <span className="text-3xl">Genius</span> - Your AI Companion
          </p>
          <div className="flex gap-2 items-center text-blue-700 font-bold">
            <FaCode /> Crafted by {" "}
            <a
              href="https://new-portfolio-theta-jade.vercel.app/"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tushar Bhatt <FaLink />
            </a>{" "}
            <FaCode />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-green-500">
            <FaBrain size={24} />
            <span className="font-bold">Smart Answers:</span> Instant and intelligent responses powered by AI.
          </div>
          <div className="flex items-center gap-2 text-blue-500">
            <FaSearch size={24} />
            <span className="font-bold">Search Engine:</span> Ready to make a search? Genius has got you covered.
          </div>
          <div className="flex items-center gap-2 text-purple-500">
            <FaImages size={24} />
            <span className="font-bold">Image Responses:</span> Captivating visuals generated on-the-fly.
          </div>
          <div className="flex items-center gap-2 text-orange-500">
            <FaRocket size={24} />
            <span className="font-bold">Fast and Efficient:</span> Rocket-powered performance for seamless interactions.
          </div>
        </div>
        <span className="h-40 w-40">
            <Lottie animationData={animation} />
          </span>
      </div>
    </div>
  );
}
