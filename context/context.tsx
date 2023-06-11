"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { app } from "../firebase";

const AppContext = createContext<any>("");

export interface Message {
  message: string;
  uid: string;
  username: string;
  profilePicture: string;
  timestamp: number;
}

export const AppProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  const auth = getAuth(app);

  const fetchMessages = async () => {
    const snapshot = await get(child(ref(db), `messages`));

    if (snapshot.exists()) {
      const rawData = snapshot.val();
      const arrayOfData = Object.values(rawData);
      const keysOfData = Object.keys(rawData);
      const formattedData: Message[] = arrayOfData.map(
        (data: any, index: number) => {
          return { timestamp: keysOfData[index], ...data };
        }
      );
      setMessages(formattedData);
    }
  };

  useEffect(() => {
    fetchMessages();
  });

  const signUpUser = async (
    email: string,
    password: string,
    username: string
  ) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = { userCredentials };

    const profilePicture = `https://api.dicebear.com/6.x/identicon/svg?seed=${username.replace(
      " ",
      ""
    )}`;

    set(ref(db, "users/" + userCredentials.user.uid), {
      username,
      email,
      profilePicture,
    });
    setUserData({
      username,
      email,
      profilePicture,
      uid: userCredentials.user.uid,
    });
    setLoggedIn(true);
    return user;
  };
  const signInUser = async (email: string, password: string) => {
    await setPersistence(auth, browserLocalPersistence);

    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    get(child(ref(db), `users/${userCredentials.user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setUserData({
            ...snapshot.val(),
            uid: userCredentials.user.uid,
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    const user = { userCredentials };
    setLoggedIn(true);
    return user;
  };

  const sendMessage = async (message: string) => {
    const newMessage: Message = {
      message,
      uid: userData.uid,
      username: userData.username,
      profilePicture: userData.profilePicture,
      timestamp: Date.now(),
    };
    try {
      await set(ref(db, `messages/${Date.now().toString()}`), {
        message,
        uid: userData.uid,
        username: userData.username,
        profilePicture: userData.profilePicture,
        timestamp: Date.now(),
      });

      setMessages((prevMessages: Message[]) => {
        return [...prevMessages, newMessage];
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userData,
        signUpUser,
        signInUser,
        setUserData,
        sendMessage,
        messages,
        setMessages,
        openHistoryModal,
        setOpenHistoryModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
