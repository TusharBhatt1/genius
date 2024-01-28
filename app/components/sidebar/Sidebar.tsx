"use client";
import React, { useState } from "react";
import SideMenu from "./SideMenu";
import { CiHome } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiText } from "react-icons/ci";
import { IoClose, IoMenuSharp } from "react-icons/io5";

export default function Sidebar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className="bg-black hidden shadow-md  md:flex flex-col justify-start items-start gap-7 p-1 z-20  text-white h-[91vh] w-[25vw] py-12">
        <SideMenu
          label="Home"
          icon={<CiHome size={18} />}
          color={"white"}
          href={"/"}
        />
        <SideMenu
          label="Text Generation"
          icon={<CiText size={18} />}
          color={"green-400"}
          href={"/text"}
        />
        <SideMenu
          label="Image Generation"
          icon={<CiImageOn size={18} />}
          color={"pink-400"}
          href={"/image"}
        />
      </div>

      {/* mobile view */}
      <div>
        {!showSideBar && (
          <button
            onClick={() => setShowSideBar(true)}
            className="absolute right-2 top-18 md:hidden "
          >
            <IoMenuSharp size={28} />
          </button>
        )}
        {showSideBar && (
          <div className="bg-black flex w-[100vw] relative  md:hidden flex-col justify-start items-start p-1 text-white h-[90vh] py-12">
            <div className="flex flex-col gap-4 px-4 w-full" onClick={() => setShowSideBar(false)}>
              <IoClose size={18} />

              <SideMenu
                label="Home"
                icon={<CiHome size={18} />}
                color={"white"}
                href={"/"}
              />
              <SideMenu
                label="Text Generation"
                icon={<CiText size={18} />}
                color={"green-400"}
                href={"/text"}
              />
              <SideMenu
                label="Image Generation"
                icon={<CiImageOn size={18} />}
                color={"pink-400"}
                href={"/image"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
