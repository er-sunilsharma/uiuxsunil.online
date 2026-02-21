"use client";
import { useState } from "react";

import { ProjectPortfolio, PortfolioHero, FigmaGrid } from "@/comps/common";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAccess = () => {
    if (password === "sunil9192") {
      window.open("https://www.linkedin.com/in/sunilsharma-uiux/", "_blank");
    } else {
      alert("🔐 Wrong password 🔐");
    }
  };
  return (
    <>
      <div className="w-full bg-white pb-0 md:pb-16 pt-16 sm:pt-28">
        <div className="mx-auto max-w-5xl px-4">
          <div className="w-full space-y-3 md:space-y-7 text-center">
            <h1 className="text-3xl md:text-6xl font-normal">
              <span className="text-gray-500 gradient-text">
                Hey, I’m Sunil.
              </span>{" "}
              I solve problems through design.
            </h1>
            <p className="leading-8 text-[19px] max-w-2xl mx-auto text-gray-600">
              I design intuitive digital experiences that solve real user
              problems. <span className="font-medium text-black">8+ years</span>{" "}
              of turning complex ideas into simple, usable, and impactful
              products.
            </p>
            <ul className="flex items-center justify-center space-x-2 pt-2 relative">
              <li>
                <div className="flex flex-col items-center gap-3">
                  {!showInput ? (
                    <button
                      onClick={() => setShowInput(true)}
                      className="text-center bg-linkedin text-white px-5 space-x-1.5 rounded-full h-12 hover:scale-105 transition-all flex items-center"
                    >
                      <FaLinkedinIn size={24} className="mx-auto" />
                      <span className="inline-block w-full text-base font-normal">
                        Visit My LinkedIn
                      </span>
                    </button>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                      />
                      <button
                        onClick={handleAccess}
                        className="text-center bg-linkedin text-white px-5 space-x-1.5 rounded-full h-12 hover:scale-105 transition-all flex items-center justify-center"
                      >
                        Unlock Profile
                      </button>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="https://dribbble.com/ersunilsharma"
                  target="_blank"
                  className="flex items-center text-center bg-gray-200 text-black space-x-1.5 px-5 h-12 rounded-full hover:scale-105 transition-all"
                >
                  <span className="inline-block w-full text-base font-normal">
                    Dribbble
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <PortfolioHero />
      </div>
      <div className="w-full bg-[#f7f7f7] py-16 sm:py-28" id="allprojects">
        <div className="mx-auto max-w-6xl px-4">
          <ProjectPortfolio />
        </div>
      </div>
      <div className="w-full bg-white py-16 sm:py-28" id="design">
        <div className="mx-auto max-w-6xl px-4 space-y-10 md:space-y-14">
          <div className="w-full">
            <FigmaGrid />
          </div>
        </div>
      </div>
    </>
  );
}
