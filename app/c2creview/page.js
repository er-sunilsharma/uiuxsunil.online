"use client";

import React from "react";
import Image from "next/image";
import mockupdesktop from "public/mockup--desktop--browser--light--rounded.svg";
import mainview from "public/c2creview/main_view.png";
import Link from "next/link";

export default function C2CReview() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full pt-12 md:pt-20 pb-12 md:pb-20">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-7 md:gap-10 items-center">
              <div className="w-full text-left space-y-4 md:space-y-7">
                <h2 className="text-gray-700 text-3xl md:text-5xl font-bold">
                  C2Creview
                </h2>
                <p className="space-y-4 text-xl text-dark leading-9 font-normal">
                  B2B & B2C Review's for Top IT Technologies. C2CReview offers
                  services to boost up the reputation of your companies or earn
                  more ROI.
                </p>
                <div className="inline-block w-full">
                  <span className="pr-1 inline-block">www.</span>
                  <Link
                    href="https://c2creview.co/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-700 underline"
                  >
                    c2creview.co
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
                  <div>Mr. Ram Sharma</div>
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
            src="./c2creview/img_tow.png"
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
                  C2C is in the field of developing the best of its kind
                  software for the firms as well as providing the most requisite
                  information regarding how to increase the market share,
                  improvising the stats along with creating brand awareness.
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
                      <span className="text-blue-700">Adobe Photoshop</span>
                    </li>
                    <li>
                      <span className="text-gray-700">UI frameworks:</span>{" "}
                      <span className="text-blue-700">
                        HTML, CSS, Bootstrap, JavaScript
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-700">
                        Programming languages:
                      </span>{" "}
                      <span className="text-blue-700">PHP</span>
                    </li>
                    <li>
                      <span className="text-gray-700">Web frameworks:</span>{" "}
                      <span className="text-blue-700">CodeIgniter</span>
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
