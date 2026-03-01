"use client";

import Link from "next/link";
import React from "react";
import logo from "public/logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove class when component unmounts or isOpen changes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full transition-all fixed z-50 bg-[#ffffff30] duration-300 backdrop-blur-lg">
        <div className="py-3 px-4 sm:py-3 sm:px-10">
          <nav className="">
            <div className="flex flex-wrap items-center justify-between mx-auto">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src={logo}
                  alt="Logo"
                  width={30}
                  height={36}
                  priority
                  draggable="false"
                />
              </Link>
              <button
                onClick={toggleNavbar}
                data-collapse-toggle="navbar-default"
                type="button"
                className="z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-0 focus:ring-gray-200 "
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">
                  {isOpen ? "Close main menu" : "Open main menu"}
                </span>
                {isOpen ? (
                  <svg
                    className="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } w-full md:block md:w-auto fixed h-screen md:relative md:h-auto bg-white sm:bg-transparent inset-0 z-10 flex items-center justify-center`}
                id="navbar-default"
              >
                <ul className="hidden md:flex text-[17px] flex-col p-4 md:p-0 mt-4 md:flex-row space-x-0 md:space-x-8 md:mt-0 md:border-0 bg-transparent md:text-left text-center space-y-5 md:space-y-0 items-center">
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 text-gray-800 md:p-0 font-normal hover:text-red-700"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block py-2 px-3 text-gray-800 md:p-0 font-normal hover:text-red-700"
                      aria-current="page"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#allprojects"
                      className="block py-2 px-3 text-gray-800 md:p-0 font-normal hover:text-red-700"
                      aria-current="page"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activity"
                      className="block py-2 px-3 text-gray-800 md:p-0 font-normal hover:text-red-700"
                      aria-current="page"
                    >
                      Activity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/9680024968"
                      target="_blank"
                      className="py-0.5 px-5 text-white hover:bg-gray-200 transition-all hover:text-black font-normal bg-black h-12 flex items-center justify-center rounded-full space-x-1.5"
                    >
                      <MdAlternateEmail size={18} />
                      <span>Let's Talk</span>
                    </Link>
                  </li>
                </ul>
                <ul className="flex md:hidden text-base flex-col p-4 md:p-0 mt-4 md:flex-row space-x-0 md:space-x-8 md:mt-0 md:border-0 md:bg-white md:text-left text-center space-y-6 md:space-y-0">
                  <li className="flex items-center justify-center space-x-3">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 text-brand md:p-0 font-normal hover:text-blue-600"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 text-brand md:p-0 font-normal hover:text-blue-600"
                      aria-current="page"
                    >
                      About Me
                    </Link>
                    <Link
                      href="/#allprojects"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 font-normal text-brand md:p-0"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/activity"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 font-normal text-brand md:p-0"
                    >
                      Activity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/9680024968"
                      target="_blank"
                      className="py-0.5 px-5 text-white hover:bg-gray-200 transition-all hover:text-black font-normal bg-black h-12 flex items-center justify-center rounded-full space-x-1.5"
                    >
                      <MdAlternateEmail size={18} />
                      <span>Let's Talk</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
