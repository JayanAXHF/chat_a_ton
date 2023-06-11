"use client";

import Chat from "@/components/Chat/Chat";
import HistoryModal from "@/components/HistoryModal/Modal";
import { useAppContext } from "@/context/context";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const { loggedIn } = useAppContext();

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="<generated>"
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
        {loggedIn ? (
          <Chat />
        ) : (
          <div className="prose lg:prose-xl dark:prose-invert justify-center flex flex-col">
            <h1>Login To Continue</h1>
            <div className="flex flew-col items-start justify-center gap-x-4 prose lg:prose-xl">
              <Link
                href="/signup"
                type="button"
                className="px-4 py-2 font-medium text-sm bg-blue-600 text-white border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 dark:ring-offset-slate-900 dark:bg-blue-600 dark:text-white dark:border-transparent "
              >
                SignUp
              </Link>
              <Link
                href="/signin"
                type="button"
                className="px-4 py-2 font-medium text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 dark:ring-offset-slate-900 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent
                          "
              >
                SignIn
              </Link>
            </div>
          </div>
        )}
        {loggedIn ? <HistoryModal /> : null}
      </div>
    </div>
  );
}
