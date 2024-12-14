"use client";

import React from "react";
import Image from "next/image";
import about from "public/about-us.jpg";
import webdevelopmentdesignimg03 from "public/icons/webdevelopment_design_img03.png";
import webdevelopmentdesignimg05 from "public/icons/webdevelopment_design_img05.png";
import webdevelopmentdesignimg04 from "public/icons/webdevelopment_design_img04.png";
import webdevelopmentdesignimg02 from "public/icons/webdevelopment_design_img02.png";
import canva from "public/icons/canva.png";
import html5 from "public/icons/html5.png";
import css3 from "public/icons/css3.png";
import javascript from "public/icons/javascript.png";
import nextjs from "public/icons/next-js.png";
import tailwindcss from "public/icons/tailwind-css.png";
import bootstrap from "public/icons/bootstrap.png";
import mongodb from "public/icons/mongodb.png";
import github from "public/icons/github.png";
import vercel from "public/icons/vercel.png";

export default function About() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-16 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
            <div className="w-full">
              <Image
                src={about}
                alt="about-us"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="w-full space-y-4 px-0 md:px-10">
              <h2 className="text-brand text-3xl md:text-5xl font-bold">
                Hi, Im Sunil
              </h2>
              <div className="space-y-4 text-base text-dark leading-26">
                <div>
                  Experienced UI/UX Designer with 6+ years of expertise in
                  crafting user-centered designs that enhance functionality and
                  satisfaction. Skilled in Product Design, Front & Backend UI
                  Development, Next.js, wireframing, prototyping, and design
                  systems. Adept at solving complex design challenges and
                  managing projects efficiently, delivering innovative solutions
                  that drive the success of digital products through strategic
                  thinking and meticulous design.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white pt-4 md:pt-10 pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-7 md:space-y-10">
            <h3 className="pb-3 text-black text-center text-3xl md:text-3xl font-semibold relative after:absolute after:h-0.7 after:mx-auto after:left-0 after:right-0 after:w-32 after:bg-black after:content-[''] after:bottom-0">
              Skills & Expertise
            </h3>
            <div className="w-full space-y-6 md:space-y-10 text-center">
              <ul className="flex flex-wrap gap-4 items-center justify-center">
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg03}
                    alt="webdevelopment_design_img03"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={canva}
                    alt="canva"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg05}
                    alt="webdevelopment_design_img05"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={html5}
                    alt="html5"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg04}
                    alt="webdevelopment_design_img04"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={css3}
                    alt="css3"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg02}
                    alt="webdevelopment_design_img02"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={javascript}
                    alt="javascript"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
              </ul>
              <ul className="flex flex-wrap gap-4 items-center justify-center">
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={nextjs}
                    alt="nextjs"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={tailwindcss}
                    alt="tailwindcss"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={bootstrap}
                    alt="bootstrap"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={mongodb}
                    alt="mongodb"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={github}
                    alt="github"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={vercel}
                    alt="vercel"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
