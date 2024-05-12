"use client";

import React from "react";
import Image from "next/image";
import famous11 from "public/famous11/main_view.png";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Famous11() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full pt-12 md:pt-20 pb-12 md:pb-20">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-7 md:gap-10 items-center">
              <div className="w-full text-left space-y-4 md:space-y-7">
                <h2 className="text-gray-700 text-3xl md:text-5xl font-bold">
                  Famous11 Fantasy Cricket
                </h2>
                <p className="space-y-4 text-xl text-dark leading-9 font-normal">
                  "Fantasy Games: Immerse yourself in magical realms, epic
                  quests, and mystical creatures. Embark on adventures, wield
                  powerful spells, and conquer challenges in fantastical worlds
                  of wonder and adventure."
                </p>
              </div>
              <div className="w-full relative">
                <Image
                  src={famous11}
                  alt="famous11"
                  width="0"
                  height="500"
                  priority
                  className="md:ml-auto md:mr-0 ml-auto mr-auto"
                />
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
                  <div>App Designing</div>
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
                  <div>(10 Days. total)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <Carousel
            responsive={responsive}
            itemClass="px-1.5 md:px-3"
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
          >
            <div>
              <img
                src="./famous11/screen01.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./famous11/screen02.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./famous11/screen03.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./famous11/screen04.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./famous11/screen05.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./famous11/screen06.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
          </Carousel>
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-10 md:space-y-24">
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  01. Overview
                </h3>
                <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                  Famouse11 is a fascinating fantasy sports platform that
                  provides a chance to earn real cash for its users on the
                  basics of skills and knowledge about fantasy games. On
                  Famous11, there are multiple leagues & contests available
                  daily which gives the participants play within a vast
                  community.
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
                      <span className="text-gray-700">
                        Development Frameworks:
                      </span>{" "}
                      <span className="text-blue-700">Android</span>
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
                  href="https://play.google.com/store/apps/details?id=com.famous11.fantasy"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-700 underline"
                >
                  famous11
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
