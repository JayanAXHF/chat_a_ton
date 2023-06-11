"use client";

import Button from "@/base-ui/Button/Button";
import React from "react";
import { Incoming, Outgoing } from "../Message";
import SendIcon from "@mui/icons-material/Send";
import { useAppContext, Message } from "@/context/context";

const Chat = () => {
  const {
    messages,
    sendMessage,
    userData,
  }: { messages: Message[]; sendMessage: any; userData: any } = useAppContext();

  const [inputData, setInputData] = React.useState("");

  const messageComponent = messages.map((message: Message, index: number) => {
    if (message.uid === userData.uid) {
      return (
        <Outgoing
          uid={message.uid}
          pfp={message.profilePicture}
          username={message.username}
          timestamp={message.timestamp}
          key={index}
        >
          {message.message}
        </Outgoing>
      );
    } else {
      return (
        <Incoming
          uid={message.uid}
          pfp={message.profilePicture}
          username={message.username}
          timestamp={message.timestamp}
          key={index}
        >
          {message.message}
        </Incoming>
      );
    }
  });

  return (
    <div className="2 border border-slate-400 dark:border-slate-600 rounded-3xl flex flex-col relative col-span-12 sm:col-span-6 max-h-[48rem] bg-white dark:bg-gray-900 lg:max-w-[36rem] md:max-w-96  max-w-screen-sm w-80 md:w-auto overflow-y-hidden xl:h-[48rem]">
      <div className="w-full dark:bg-gray-800 py-5 rounded-t-3xl pl-5 text-3xl font-[karla] border-b  border-slate-400 dark:border-slate-700">
        Chat
      </div>
      <div className="px-10 py-5 overflow-auto h-auto sm:h-60 flex flex-col gap-y-4 lg:h-full overflow-x-hidden max-h-72 lg:max-h-full">
        <Incoming
          uid="sad"
          pfp="https://api.dicebear.com/6.x/identicon/svg"
          username="sdf"
          timestamp={1686467790964}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          explicabo quaerat eveniet asperiores ipsam, ratione perspiciatis porro
          ullam odio maiores beatae, voluptatum autem qui laborum ex ducimus
          accusamus consectetur error.
        </Incoming>
        <Outgoing
          uid="sad"
          pfp="https://api.dicebear.com/6.x/identicon/svg"
          username="sdf"
          timestamp={1686467790964}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          explicabo quaerat eveniet asperiores ipsam, ratione perspiciatis porro
          ullam odio maiores beatae, voluptatum autem qui laborum ex ducimus
          accusamus consectetur error.
        </Outgoing>
        {messageComponent}
      </div>
      <div className="flex flex-row mb-10 gap-4 px-2 mt-3 mx-auto w-full justify-center">
        <input
          className=" bottom-5 w-full left-5  rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-none dark:border-gray-700 dark:bg-gray-800 border dark:text-gray-200 py-2 px-5 ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 dark:ring-offset-slate-900 dark:border-transparent rounded-r-sm"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button
          primary={false}
          onClick={() => {
            sendMessage(inputData);
            setInputData("");
          }}
          styles="rounded-l-sm"
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
