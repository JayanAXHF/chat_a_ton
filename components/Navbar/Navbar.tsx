"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { AppProvider, useAppContext } from "@/context/context";
import { usePathname } from "next/navigation";
import { getAuth, signOut } from "@firebase/auth";
import { app } from "@/firebase";
import Logo from "../../app/assets/Logo.png";
import Image from "next/image";
const navigation = [
  { name: "Chat", href: "/", current: true },
  { name: "Message History", href: "/history", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const { loggedIn, userData, setLoggedIn, setUserData } = useAppContext();
  const pathname = usePathname();

  const auth = getAuth(app);

  const handleSignOut = async () => {
    await signOut(auth);
    setLoggedIn(false);
    setUserData({});
  };

  return pathname !== "/signin" && pathname !== "/signup" ? (
    <AppProvider>
      <Disclosure
        as="nav"
        className="dark:bg-[#0a1929]  border-b-2 dark:border-zinc-700 bg-white border-zinc-200"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                <div className="flex flex-1 items-center  justify-start">
                  <div className=" flex-shrink-0 flex-row  items-center font-bold text-2xl  flex">
                    <Link href="/">
                      <Image src={Logo} alt="logo" className="h-14 w-auto" />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {loggedIn ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={userData?.profilePicture}
                            alt="profile picture"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                )}
                                href={"/history"}
                              >
                                My Messages
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                )}
                                onClick={handleSignOut}
                              >
                                Sign Out
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <div className="flex flew-row items-center gap-x-4">
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
                  )}
                </div>
              </div>
            </div>
            {/* {loggedIn && (
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            )} */}
          </>
        )}
      </Disclosure>
    </AppProvider>
  ) : null;
}
