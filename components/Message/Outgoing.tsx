import Image from "next/image";
import React from "react";

interface PropTypes {
  username: string;
  pfp: string;
  uid: string;
  children: React.ReactNode;
  timestamp: number;
}

const Outgoing = ({ children, timestamp }: PropTypes) => {
  const result = new Date(Number(timestamp)).toLocaleString();

  return (
    <div>
      <div>
        <div className="rounded-2xl rounded-br-none border  p-5  col-span-12 md:max-w-md max-w-sm bg-[#93C5FD] text-black">
          {children}
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-between">
        <div className=" block text-sm text-right w-full">{result}</div>
      </div>
    </div>
  );
};

export default Outgoing;
