"use client";
import Button from "@/base-ui/Button/Button";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppContext } from "@/context/context";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signUpUser } = useAppContext();
  const router = useRouter();
  const handleSignUp = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (
      (formData.username &&
        formData.email &&
        formData.password &&
        formData.confirmPassword) !== ""
    ) {
      try {
        signUpUser(formData.email, formData.password, formData.username);
      } catch (error) {
        alert(error);
      }
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      router.push("/");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="grid justify-center items-center h-screen  md:overflow-y-hidden shadow-lg">
      <section className="overflow-y-none h-4/5 ">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 h-4/5">
          <section className=" flex  items-end  lg:col-span-5 lg:h-4/5 xl:col-span-6 dark:bg-[#0d1117] bg-white">
            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <Image src={Logo} alt="logo" />
              </a>
              <h2 className="mt-6 text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl">
                Welcome to Chat-a-Ton
              </h2>
              <p className="mt-4 leading-relaxed dark:text-white/90">
                Chat-a-Ton is an app where users can communicate in a central
                chat with each other via text.
              </p>
            </div>
          </section>
          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 dark:bg-gray-900 h-4/5 bg-gray-100"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <Image src={Logo} alt={""} />
                </a>
                <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                  Welcome to Chat-a-Ton
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Chat-a-Ton is an app where users can communicate in a central
                  chat with each other via text.
                </p>
              </div>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2"
                    value={formData?.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                    className="py-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 grid grid-flow-col">
                  <div>
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Password Confirmation
                    </label>
                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="confirmPassword"
                      value={formData?.confirmPassword}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    onClick={handleSignUp}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                  >
                    Create an account
                  </button>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Already have an account?
                    <Link
                      href="/signin"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      &nbsp;Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Signup;
