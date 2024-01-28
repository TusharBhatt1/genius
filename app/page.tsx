"use client";
import Lottie from "lottie-react";
import React from "react";
import {
  FaBrain,
  FaSearch,
  FaImages,
  FaRocket,
  FaCode,
  FaLink,
} from "react-icons/fa";
import animation from "@/public/Animation - 1706103272804.json";

export default function HomePage() {
  return (
    <div className="w-full flex p-4 py-7">
      <div className="flex flex-col gap-10">
        <div className="text-slate-400 flex flex-col items-start gap-2">
          <span className="text-sm">under construction.</span>
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-lg">
            <span className="text-2xl font-bold">Genius </span> an AI-powered app built with Next.js and React.
          </p>
          <div className="flex gap-2 items-center text-blue-700 font-bold">
            <FaCode />Engineered by{" "}
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

        <div className="grid grid-cols-2 gap-7 text-center">
          <div className="flex items-center gap-2 text-green-500 shadow-md p-3 rounded-lg">
            <FaBrain size={20} />
            <span className="font-bold">Smart Answers</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500 shadow-md p-3 rounded-lg">
            <FaSearch size={20} />
            <span className="font-bold">Search Engine</span>
          </div>
          <div className="flex items-center gap-2 text-purple-500 shadow-md p-3 rounded-lg">
            <FaImages size={20} />
            <span className="font-bold">Image Responses</span>
          </div>
          <div className="flex items-center gap-2 text-orange-500 shadow-md p-3 rounded-lg">
            <FaRocket size={20} />
            <span className="font-bold">Fast & Efficient</span> 
          </div>
        </div>
        <span className="hidden sm:block h-40 w-40">
          <Lottie animationData={animation} />
        </span>
      </div>
    </div>
  );
}
