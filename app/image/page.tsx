"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import SendButton from "../components/SendButton";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FiUser, FiEye } from "react-icons/fi";

//@ts-ignore

import getImageResponse from "../server/getImageResponse";

interface ChatProps {
  user: string | null;
  genius: string | null;
}

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDownload, setShowDownloaded] = useState(false);
  const [chats, setChats] = useState<ChatProps[]>([
    {
      user: "",
      genius: "",
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsProcessing(true);

    let updatedChats: ChatProps[] = [...chats];

    updatedChats[updatedChats.length - 1].user = prompt;

    setChats(updatedChats);

    setPrompt("");

    try {
      const response = await getImageResponse(prompt);

      console.log(response);
      //@ts-ignore
      updatedChats[updatedChats.length - 1].genius = response;
      updatedChats = [...updatedChats, { user: "", genius: "" }];

      setChats(updatedChats);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <form onSubmit={handleSend}>
      <div className="flex flex-col  justify-between h-full w-[100vw] md:w-[80vw] py-7 p-5">
        <div
          ref={chatContainerRef}
          className="w-full max-h-[70vh] overflow-y-auto"
        >
          <p className="flex items-center  gap-2">
            <Image src={logo} height={18} width={18} alt="Genius" />
            Get any image with just a prompt !
          </p>

          <div className="flex flex-col">
            {chats.map((chat, index) => (
              <div key={index} className="flex flex-col gap-3 mt-12">
                <>
                  {chat.user && (
                    <p className="flex items-start gap-3 ">
                      <FiUser size={18} />
                      {chat.user}
                    </p>
                  )}
                </>

                <>
                  {chat.genius && (
                    <div className="flex gap-2 items-start">
                      <Image src={logo} height={18} width={18} alt="Genius" />
                      <div className="cursor-pointer">
                        <a href={chat.genius} target="_blank" className="flex gap-2">
                          <Image
                            loading="eager"
                            className="hover:cursor"
                            src={chat.genius}
                            alt="data"
                            height={120}
                            width={120}
                          />
                       

                        <button
                          type="button"
                          onClick={() => {
                            setShowDownloaded(true);
                            setTimeout(() => {
                              setShowDownloaded(false);
                            }, 1000);
                          }}
                          className="text-blue-500 rounded-full"
                        >
                         
                            <FiEye className="hover:text-blue-700 " />
                         
                        </button>
                        </a>
                      </div>
                    </div>
                  )}
                </>
              </div>
            ))}
          </div>
          {isProcessing && (
            <div className="flex gap-2 items-start mt-2">
              <Image
                className="animate-spin"
                src={logo}
                height={18}
                width={18}
                alt="Genius"
              />
              <span className="p-2 rounded-md mr-4 text-white">
                Genius is Thinking
              </span>
            </div>
          )}
        </div>

        <div className="flex w-full">
          <Input
            value={prompt}
            placeholder="Ready for the experience ?"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <SendButton onClick={handleSend} disabled={prompt === ""} />
        </div>
      </div>
    </form>
  );
}
