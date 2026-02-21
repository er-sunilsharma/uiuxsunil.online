"use client";

import React from "react";
import Link from "next/link";
import { GiClothes } from "react-icons/gi";
import { SkillsExpertise } from "@/comps/common";

export default function About() {
  return (
    <>
      <div className="w-full bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-3 md:space-y-7 text-left">
            <h1 className="text-3xl md:text-6xl font-normal gradient-text">
              About Me
            </h1>
            <div className="leading-8 text-[19px] max-w-6xl mx-auto text-gray-600 space-y-1.5">
              <p>
                Hi, I’m Sunil Sharma — a Senior UI/UX Designer with 8+ years of
                experience designing intuitive, scalable digital products across
                web and mobile platforms. I specialize in user research,
                information architecture, wireframing, and high-fidelity
                prototyping using Figma, creating design systems that bring
                clarity to complex problems.
              </p>
              <p>
                Beyond design, I bridge strategy and execution through hands-on
                UI development in Webflow, HTML, CSS, and JavaScript. My
                approach is simple: craft purposeful, user-centered experiences
                that are not only visually refined but also functional and
                performance-driven.
              </p>
            </div>
            <ul className="flex items-center justify-start space-x-2 pt-2 relative">
              <li>
                <Link
                  href="/#allprojects"
                  className="text-center bg-black text-white px-5 space-x-1.5 rounded-full h-12 hover:scale-105 transition-all flex items-center"
                >
                  <span className="inline-block w-full text-base font-normal">
                    View All Works
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/9680024968"
                  target="_blank"
                  className="flex items-center text-center bg-gray-200 text-black space-x-1.5 px-5 h-12 rounded-full hover:scale-105 transition-all"
                >
                  <span className="inline-block w-full text-base font-normal">
                    Contact Me
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f7f7f7] py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-6 sm:space-y-12">
            <h2 className="text-2xl sm:text-5xl lg:text-[40px] text-gray-900 leading-8 font-normal">
              Experience & Education
            </h2>
            <div className="space-y-2.5">
              <div className="w-full">
                <div className="flex flex-col sm:flex-row px-4 space-y-3 sm:space-y-0 sm:px-6 py-4 rounded-2xl overflow-hidden items-start sm:items-center h-min relative w-full bg-[#7430f7] text-white">
                  <div className="h-auto min-w-full sm:min-w-72 relative whitespace-pre-wrap w-px flex-1 flex justify-start text-lg sm:text-[19px]">
                    Team Lead - UI/UX & Web Design, UI Development
                  </div>
                  <div className="flex items-start space-y-2 sm:space-y-0 sm:items-center h-min flex-1 overflow-visible relative flex-col sm:flex-row justify-between w-full">
                    <div className="text-[15px] sm:text-base">
                      BDA Tech & Media (BDA Corp) · Full-time
                    </div>
                    <div className="text-[15px] sm:text-base">
                      Feb 2020 - Present
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 px-4 sm:px-6 py-4 rounded-2xl overflow-hidden items-start sm:items-center h-min relative w-full bg-white">
                  <div className="h-auto min-w-full sm:min-w-72 relative whitespace-pre-wrap w-px flex-1 flex justify-start text-lg sm:text-[19px] text-[##111]">
                    Ui/Ux Designer, Ui Developer, Graphic Design
                  </div>
                  <div className="flex items-start space-y-2 sm:space-y-0 sm:items-center h-min flex-1 overflow-visible relative flex-col sm:flex-row justify-between w-full">
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      Synarion IT Solutions · Full-time
                    </div>
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      Dec 2018 - Jan 2020
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 px-4 sm:px-6 py-4 rounded-2xl overflow-hidden items-start sm:items-center h-min relative w-full bg-white">
                  <div className="h-auto min-w-full sm:min-w-72 relative whitespace-pre-wrap w-px flex-1 flex justify-start text-lg sm:text-[19px] text-[##111]">
                    Web Designer, Ui Developer
                  </div>
                  <div className="flex items-start space-y-2 sm:space-y-0 sm:items-center h-min flex-1 overflow-visible relative flex-col sm:flex-row justify-between w-full">
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      BR Softech Pvt. Ltd. · Full-time
                    </div>
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      Dec 2017 - Nov 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 px-4 sm:px-6 py-4 rounded-2xl overflow-hidden items-start sm:items-center h-min relative w-full bg-white">
                  <div className="h-auto min-w-full sm:min-w-72 relative whitespace-pre-wrap w-px flex-1 flex justify-start text-lg sm:text-[19px] text-[##111]">
                    Web Design, Ui Development
                  </div>
                  <div className="flex items-start space-y-2 sm:space-y-0 sm:items-center h-min flex-1 overflow-visible relative flex-col sm:flex-row justify-between w-full">
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      Creative Web Pixel - Jaipur
                    </div>
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      Jun 2017 · Nov 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 px-4 sm:px-6 py-4 rounded-2xl overflow-hidden items-start sm:items-center h-min relative w-full bg-white">
                  <div className="h-auto min-w-full sm:min-w-72 relative whitespace-pre-wrap w-px flex-1 flex justify-start text-lg sm:text-[19px] text-[##111]">
                    Bachelor of Computer Applications
                  </div>
                  <div className="flex items-start space-y-2 sm:space-y-0 sm:items-center h-min flex-1 overflow-visible relative flex-col sm:flex-row justify-between w-full">
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      Central University of Rajasthan - Jaipur
                    </div>
                    <div className="text-[15px] sm:text-base text-[#575c63]">
                      2015 - 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SkillsExpertise />
        </div>
      </div>
    </>
  );
}
