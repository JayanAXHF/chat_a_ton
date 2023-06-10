"use client";

import { createContext, useContext, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";
const AppContext = createContext<any>("");

export const AppProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>();

  const auth = getAuth(app);

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

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userData,
        signUpUser,
        signInUser,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
