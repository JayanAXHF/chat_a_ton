"use client";

import Chat from "@/components/Chat/Chat";
import { useAppContext } from "@/context/context";
import Head from "next/head";

export default function Home() {
  const { loggedIn } = useAppContext();

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className="grid grid-flow-row md:grid-flow-col md:justify-start lg:ml-56 md:mt-14 gap-14 p-10 md:p-0">
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
        {loggedIn ? <Chat /> : null}
      </div>
    </div>
  );
}
