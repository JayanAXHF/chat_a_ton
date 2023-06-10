"use client";

import Chat from "@/components/Chat/Chat";

export default function Home() {
  return (
    <div className="grid grid-flow-row md:grid-flow-col md:justify-between md:px-72 md:mt-14 gap-14">
      {/* <div className="2xl:block hidden prose lg:prose-2xl dark:prose-invert ">
        <h1>Chat-a-Ton</h1>
        <p className="text-justify ">
          Chat-a-Ton is one of my hardest pet projects yet. It is an app where
          users can login and send messages into a shared chat. There is a
          censor that removes messages which contain swears and inappropriate
          language. I hope you like it and as always, it is completely
          open-source and your can find the source code on GitHub.
        </p>
      </div> */}
      <Chat />
    </div>
  );
}
