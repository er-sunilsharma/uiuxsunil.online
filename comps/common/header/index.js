"use client";

import Link from "next/link";
import React from "react";
import logo from "public/logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  // active class
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full border-b border-solid bg-white border-gray-100 transition-all z-10 duration-300 ${
          isScrolled ? "fixed shadow-lg" : "relative"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image src={logo} alt="Logo" width={34} height={40} priority />
              </Link>
              <button
                onClick={toggleNavbar}
                data-collapse-toggle="navbar-default"
                type="button"
                className="z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">
                  {isOpen ? "Close main menu" : "Open main menu"}
                </span>
                {isOpen ? (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                } w-full md:block md:w-auto fixed h-screen md:relative md:h-auto bg-white inset-0 z-10 flex items-center justify-center`}
                id="navbar-default"
              >
                <ul className="hidden md:flex text-sm flex-col p-4 md:p-0 mt-4 md:flex-row space-x-0 md:space-x-8 md:mt-0 md:border-0 md:bg-white md:text-left text-center space-y-5 md:space-y-0">
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 text-black md:p-0 font-semibold hover:text-red-700 uppercase"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block py-2 px-3 text-black md:p-0 font-semibold hover:text-red-700 uppercase"
                      aria-current="page"
                    >
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/system-design"
                      className="block py-2 px-3 text-black md:p-0 uppercase hover:text-red-700 font-semibold"
                    >
                      System Design
                    </Link>
                  </li>
                </ul>
                <ul className="flex md:hidden text-base flex-col p-4 md:p-0 mt-4 md:flex-row space-x-0 md:space-x-8 md:mt-0 md:border-0 md:bg-white md:text-left text-center space-y-5 md:space-y-0">
                  <li>
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 text-brand md:p-0 font-semibold hover:text-blue-600"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 text-brand md:p-0 font-semibold hover:text-blue-600"
                      aria-current="page"
                    >
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/system-design"
                      onClick={toggleNavbar}
                      className="block py-2 px-3 font-semibold text-brand md:p-0"
                    >
                      System Design
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
