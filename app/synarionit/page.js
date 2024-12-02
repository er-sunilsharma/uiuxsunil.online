"use client";

import React from "react";
import Image from "next/image";
import mockupdesktop from "public/mockup--desktop--browser--light--rounded.svg";
import mainview from "public/synarionit/main_view.png";
import Link from "next/link";

export default function Synarionit() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full pt-12 md:pt-20 pb-12 md:pb-20">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-7 md:gap-10 items-center">
              <div className="w-full text-left space-y-4 md:space-y-7">
                <h2 className="text-gray-700 text-3xl md:text-5xl font-bold">
                  Synarion IT Solutions
                </h2>
                <p className="space-y-4 text-xl text-dark leading-9 font-normal">
                  Synarion IT Solutions is the best mobile app and web, software
                  and game development company in India, USA. Develop your own
                  mobile apps and website with our expert team.
                </p>
                <div className="inline-block w-full">
                  <span className="pr-1 inline-block">www.</span>
                  <Link
                    href="https://www.synarionit.com/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-700 underline"
                  >
                    synarionit.com
                  </Link>
                </div>
              </div>
              <div className="w-full relative shadow-xl">
                <div className="absolute inset-0 z-10 h-945 w-998 mt-04">
                  <Image
                    src={mainview}
                    alt="mainview"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="relative">
                  <Image
                    src={mockupdesktop}
                    alt="mockupdesktop"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto max-w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-12 md:py-14 text-center">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  Role
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>Ui/Ux Designing</div>
                  <div>Ux Research</div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  Project Lead
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>Ayushi Sharma</div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  DURATION
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>(6 mo. total)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <img
            src="./synarionit/img_tow.png"
            alt="imgtow"
            className="w-full h-auto"
          />
        </div>

        <div className="bg-white pt-12 pb-6 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-10 md:space-y-24">
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  01. Overview
                </h3>
                <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                  Our group is very particular in bringing their uniqueness and
                  efficacy into the light and provokes each other to build the
                  unique decisions. In the collection, we are a bunch of smart
                  ideas, and lucrative solutions, that challenge their
                  limitations and create a path to walk ahead of time. We are a
                  set of new learning and technology with innovation that is a
                  step ahead of advanced tech and drives a better world with a
                  classy touch of renounce.
                </div>
              </div>
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  02. Technology
                </h3>
                <div className="text-lg md:text-lg leading-8 md:leading-7 text-gray-700 font-medium">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="text-gray-700">Design Tool:</span>{" "}
                      <span className="text-blue-700">
                        Adobe Photoshop, Figma
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-700">UI frameworks:</span>{" "}
                      <span className="text-blue-700">
                        HTML, CSS, Bootstrap, JavaScript
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
