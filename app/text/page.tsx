"use client";
import Typewriter from "typewriter-effect";
import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import SendButton from "../components/SendButton";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FiCopy, FiUser } from "react-icons/fi";

import getTextResponse from "../server/getTextResponse";
//@ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ChatProps {
  user: string | null;
  genius: string | null;
}

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCopiedText, setCopiedText] = useState(false);
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
      const response = await getTextResponse(prompt);

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
      <div className="flex flex-col  justify-between h-full w-[100vw] md:w-[80vw] p-5 py-7">
        <div
          ref={chatContainerRef}
          className="w-full max-h-[70vh] overflow-y-auto"
        >
          <p className="flex items-center  gap-2">
            <Image src={logo} height={18} width={18} alt="Genius" /> How may I
            assist You ?
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
                      <p className="flex flex-col gap-2">
                        <span className="bg-slate-100 p-2 rounded-xl mr-4">
                          <Typewriter
                            onInit={(typewriter) => {
                              typewriter
                                .typeString(chat.genius || "")
                                .changeDelay(20)
                                .start();
                            }}
                            options={{
                              cursor: "",
                              autoStart: true,
                            }}
                          />
                        </span>
                        <CopyToClipboard text={chat.genius || ""}>
                          <button
                            type="button"
                            onClick={() => {
                              setCopiedText(true);
                              setTimeout(() => {
                                setCopiedText(false);
                              }, 1000);
                            }}
                            className="text-blue-500 rounded-full"
                          >
                            <FiCopy className="hover:text-blue-700 " />
                          </button>
                        </CopyToClipboard>
                      </p>
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
        <div>
          {showCopiedText && (
            <span className=" absolute top-1/2 right-1/2 bg-slate-200 text-green-400 p-2 rounded-xl">
              Copied!
            </span>
          )}
          <div className="flex w-full">
            <Input
              value={prompt}
              placeholder="Ready for the experience ?"
              onChange={(e) => setPrompt(e.target.value)}
            />
            <SendButton onClick={handleSend} disabled={prompt === ""} />
          </div>
        </div>
      </div>
    </form>
  );
}
