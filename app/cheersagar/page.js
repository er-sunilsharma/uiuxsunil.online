"use client";

import React from "react";
import Image from "next/image";
import mockupdesktop from "public/mockup--desktop--browser--light--rounded.svg";
import mainview from "public/cheersagar/main_view.png";
import imgtow from "public/cheersagar/img_tow.png";
import imgthree from "public/cheersagar/img_three.jpg";
import Link from "next/link";

export default function CheerSagar() {
  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full pt-12 md:pt-20 pb-12 md:pb-20">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-7 md:gap-10 items-center">
              <div className="w-full text-left space-y-4 md:space-y-7">
                <h2 className="text-gray-700 text-3xl md:text-5xl font-bold">
                  Cheer Sagar
                </h2>
                <p className="space-y-4 text-xl text-dark leading-9 font-normal">
                  A website redesign for a beauty-focused sleepwear brand
                  showcasing versatile products that utilize the science of deep
                  touch pressure.
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

        <div className="bg-white py-12 md:py-20 text-center">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  Role
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>Project Designer</div>
                  <div>UI Developer</div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  Project Lead
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>Mr. Nikhar Sharma</div>
                  <div>Manager.</div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="uppercase text-xl md:text-lg text-gray-700 font-semibold pb-2.5">
                  DURATION
                </h4>
                <div className="space-y-2.5 text-lg md:text-base text-gray-600 font-medium italic">
                  <div>(5 mo. total)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <img
            src="./cheersagar/img_tow.png"
            alt="imgtow"
            className="w-full h-auto"
          />
        </div>

        <div className="bg-white pt-12 md:pt-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-10 md:space-y-24">
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  01. Overview
                </h3>
                <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                  Nodpod is a beauty-focused sleepwear brand that believes in
                  the science of deep touch pressure to promote relaxation and
                  restful sleep. Their signature product, the Nodpod Sleep Mask,
                  is a unique and innovative weighted eye mask designed to
                  provide gentle pressure to the eyes, promoting a sense of calm
                  and relaxation. Nodpod came to Adspace Agency seeking a
                  responsive website redesign that would help them better
                  showcase their products, educate customers about the benefits
                  of deep touch pressure, promote their mission to spread
                  awareness about the importance of self-care, and ultimately
                  increase conversion rate.
                </div>
              </div>
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  02. Technology
                </h3>
                <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                  Prior to their redesign, Nodpod faced a number of challenges
                  with their website that were hindering their ability to
                  effectively promote their brand and connect with customers.
                  Their previous website was outdated, generic, difficult to
                  navigate, not optimized for mobile devices, and lacked the
                  modern e-commerce features necessary to drive sales.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-4 md:space-y-5 text-center">
              <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                View the Live Site
              </h3>
              <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                Discover the enhanced educational journey firsthand at{" "}
                <Link
                  href="https://www.cheersagar.com/"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-700 underline"
                >
                  cheersagar.com
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
