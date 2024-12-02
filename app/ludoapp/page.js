"use client";

import React from "react";
import Image from "next/image";
import ludoapp from "public/ludoapp/main_view.png";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function LudoApp() {
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
                  Ludo Classic Fun Board Game
                </h2>
                <p className="space-y-4 text-xl text-dark leading-9 font-normal">
                  "Ludo Classic Fun Board Game: Experience timeless
                  entertainment with friends and family. Roll the dice,
                  strategize, and race your tokens to the finish line in this
                  beloved classic!"
                </p>
                <div className="inline-block w-full">
                  <span className="pr-1 inline-block">www.</span>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.synarion.NewLudo"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-700 underline"
                  >
                    Ludo Classic
                  </Link>
                </div>
              </div>
              <div className="w-full relative">
                <Image
                  src={ludoapp}
                  alt="ludoapp"
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
                  <div>(3 Days. total)</div>
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
                src="./ludoapp/screen01.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./ludoapp/screen02.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./ludoapp/screen03.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./ludoapp/screen04.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
            <div>
              <img
                src="./ludoapp/screen05.webp"
                alt="imgtow"
                className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
              />
            </div>
          </Carousel>
        </div>

        <div className="bg-white pt-12 pb-6 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto w-full md:w-2/3 space-y-10 md:space-y-24">
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                  01. Overview
                </h3>
                <div className="text-lg md:text-base leading-8 md:leading-7 md:font-normal text-gray-700">
                  Ludo Classic Fun Board Game brings timeless entertainment to
                  your gatherings. Gather friends and family for an exhilarating
                  race to the finish line. Roll the dice, strategize your moves,
                  and navigate your tokens through the twists and turns of the
                  board. With its simple rules and unpredictable outcomes, Ludo
                  offers endless fun for players of all ages. Whether you're
                  reliving fond childhood memories or introducing new players to
                  the excitement, this beloved classic never fails to create
                  moments of laughter and friendly competition. Embrace the
                  nostalgia and create unforgettable moments with Ludo Classic
                  Fun Board Game.
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
      </div>
    </>
  );
}
