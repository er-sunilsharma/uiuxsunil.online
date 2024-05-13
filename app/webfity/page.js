"use client";

import React from "react";
import Image from "next/image";
import mockupdesktop from "public/mockup--desktop--browser--light--rounded.svg";
import mainview from "public/webfity/main_view.png";
import Link from "next/link";

export default function Webfity() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full pt-12 md:pt-20 pb-12 md:pb-20">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-7 md:gap-10 items-center">
              <div className="w-full text-left space-y-4 md:space-y-7">
                <h2 className="text-gray-700 text-3xl md:text-5xl font-bold">
                  Webfity
                </h2>
                <p className="space-y-4 text-xl text-dark leading-9 font-normal">
                  The platform gives you the freedom to create a professional
                  website according to your ideas, design - manage and develop
                  it the way you want.
                </p>
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
                  <div>Ui Development</div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  Project Lead
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>Mr. Rong Reu</div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  DURATION
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>(1 mo. total)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <img
            src="./webfity/img_tow.png"
            alt="imgtow"
            className="w-full h-auto"
          />
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-10 md:space-y-24">
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  01. Overview
                </h3>
                <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                  Welcome to Webfity, where we are redefining the boundaries of
                  website creation. Our mission is to empower entrepreneurs,
                  small businesses, and individuals around the world to create,
                  customize, and manage their websites with ease and confidence.
                  At Webfity, we believe that your digital footprint should not
                  be limited by your technical knowledge, and we are committed
                  to making professional website creation accessible to all.
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
                      <span className="text-blue-700">Figma</span>
                    </li>
                    <li>
                      <span className="text-gray-700">UI frameworks:</span>{" "}
                      <span className="text-blue-700">
                        Next.js Component, Tailwind CSS
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-700">
                        Programming languages:
                      </span>{" "}
                      <span className="text-blue-700">Node.js</span>
                    </li>
                    <li>
                      <span className="text-gray-700">Web frameworks:</span>{" "}
                      <span className="text-blue-700">Next.js</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-8 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-4 md:space-y-5 text-center">
              <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                View the Live Site
              </h3>
              <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                Discover the enhanced educational journey firsthand at{" "}
                <Link
                  href="https://webfity.com/"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-700 underline"
                >
                  webfity.com
                </Link>
                . Explore the revamped site to delve into the science of deep
                touch pressure, bolster brand recognition, and effortlessly
                navigate through all product features. Experience the
                transformation today!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
