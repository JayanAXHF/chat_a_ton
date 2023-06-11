import Image from "next/image";
import React from "react";

interface PropTypes {
  username: string;
  pfp: string;
  uid: string;
  children: React.ReactNode;
  timestamp: number;
}

const Incoming = ({ username, pfp, uid, children, timestamp }: PropTypes) => {
  const result = new Date(Number(timestamp)).toLocaleString();

  return (
    <div>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4">
          <img
            className="h-5 w-auto"
            src="https://api.dicebear.com/6.x/identicon/svg"
            alt=""
          />
          <div className="mb-2 text-sm flex justify-between ">
            {"<"}username{">"}
          </div>
        </div>
        <div className=" block text-sm text-right w-full">{result}</div>
      </div>
      <div>
        <div className="rounded-2xl rounded-tl-none border  p-5  col-span-12 md:max-w-md max-w-sm ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Incoming;
