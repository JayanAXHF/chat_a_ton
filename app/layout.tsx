import "./globals.css";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Navbar/Navbar";
import { AppProvider } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat-a-Ton",
  description:
    "Chat-a-Ton is one of my hardest pet projects yet. It is an app where users can login and send messages into a shared chat. There is a censor that removes messages which contain swears and inappropriate language. I hope you like it and as always, it is completely open-source and your can find the source code on GitHub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={` bg-white dark:bg-main-dark-bg`}>
          <Navbar />
          {children}
        </body>
      </html>
    </AppProvider>
  );
}
