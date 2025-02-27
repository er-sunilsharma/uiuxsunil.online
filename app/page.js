import { ProjectPortfolio } from "@/comps/common";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import React from "react";
import { LuFigma } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gray-50 pb-10 md:pb-16 pt-8 md:pt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-3 md:space-y-7">
            <h1 className="text-3xl md:text-40 font-bold">Hey, I’m Sunil.</h1>
            <p className="leading-7 text-base">
              Hi, I'm Sunil Sharma, a Senior UI/UX Designer with over 6+ years
              of experience in crafting intuitive and user-centered digital
              experiences. Passionate about design thinking and problem-solving,
              I specialize in transforming ideas into seamless, functional, and
              visually compelling interfaces. With expertise in UI/UX design,
              product design, front & backend UI development, and wireframing &
              prototyping, I have successfully led and executed projects across
              various industries, including B2B, C2C platforms, healthcare, and
              e-commerce. My approach blends creativity, usability, and
              strategy, ensuring that every design enhances functionality and
              user satisfaction.
            </p>
            <ul className="flex items-center justify-start space-x-4 pt-2 relative">
              <li>
                <Link
                  href="https://www.linkedin.com/in/sunilsharma-uixd/"
                  target="_blank"
                  className="inline-block text-center bg-linkedin text-white shadow-lg px-4 pt-3 pb-2 rounded-xl hover:scale-105 transition-all"
                >
                  <FaLinkedinIn size={24} className="mx-auto" />
                  <span className="inline-block w-full pt-2 text-sm font-medium">
                    LinkedIn
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://dribbble.com/ersunilsharma"
                  target="_blank"
                  className="inline-block text-center bg-black text-white shadow-lg px-4 pt-3 pb-2 rounded-xl hover:scale-105 transition-all"
                >
                  <FaDribbble size={22} className="mx-auto" />
                  <span className="inline-block w-full pt-2 text-sm font-medium">
                    Dribbble
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white pb-10 md:pb-14 pt-7 md:pt-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full">
            <h2 className="text-black text-2xl font-semibold text-left pb-5 md:pb-8">
              Web Design & UI Development
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
              <ProjectPortfolio />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 pt-4 md:pt-12 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 space-y-10 md:space-y-14">
          <div className="w-full">
            <div className="w-full up text-2xl font-semibold pb-5 md:pb-8">
              Web & Mobile UI/UX Design
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 items-center">
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium text-black">
                    BeepShop App
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/dQgpYZeA81PnNDg4v53ODt/beepshop-e-commerce-app?node-id=0-1&t=9KHXrOoLa1TboHo4-1"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <LuFigma size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    Figma Design
                  </span>
                </Link>
              </div>
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium text-black">
                    HPulse Health Dashboard
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/WcFVpo0FLJ30OIBLqYBKFU/HPulse-Health-Dashboard?node-id=0-1&t=xYIzFLWgLMcXzQjJ-1"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <LuFigma size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    Figma Design
                  </span>
                </Link>
              </div>
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium text-black">
                    FundeX B2B – Web Platform
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/OLAmfrHysH1HE9XSDnxZGe/FundeX-B2B-(Business-to-Business)?node-id=0-1&t=0PkjVCY8X4eqi3y6-1"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <LuFigma size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    Figma Design
                  </span>
                </Link>
              </div>
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium text-black">
                    Super Kirana Business App
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/IhwObTdps693GzqwZ8QEqy/Super-Kirana-App-Business?node-id=0-1&t=bJumWpfhQIdDfHaF-1"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <LuFigma size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    Figma Design
                  </span>
                </Link>
              </div>
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium text-black">
                    Student Evidence App
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/WCvn2EdZVPPTEJ4n90Bnde/Proof-of-Evidence-Mobile-App-for-Students?node-id=0-1&t=EwhZUsgirXGfeFIm-1"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <LuFigma size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    Figma Design
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
