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
  console.log(pfp);
  return (
    <div>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4">
          <img className="h-5 w-auto" src={pfp} alt="" height={20} width={20} />
          <div className="mb-2 text-sm flex justify-between w-full">
            {username}
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-2xl rounded-tl-none border dark:bg-gray-700 p-5  col-span-12 md:max-w-md max-w-sm ">
          {children}
        </div>
        <div className="  text-sm text-left w-">{result}</div>
      </div>
    </div>
  );
};

export default Incoming;
