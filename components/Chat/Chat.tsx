import React from "react";

const Chat = () => {
  return (
    <div className="2 border border-slate-400 dark:border-slate-400 rounded-3xl flex flex-col relative col-span-12 sm:col-span-6">
      <div className="w-full bg-gray-800 py-5 rounded-t-3xl pl-5 text-3xl font-[karla] border-b  border-slate-400 dark:border-slate-400">
        Chat
      </div>
      <div className="px-10"></div>
      <input className="absolute bottom-5 w-5/6 left-5  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2" />
    </div>
  );
};

export default Chat;
