import { ProjectPortfolio } from "@/comps/common";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

import React from "react";
import { LuFigma } from "react-icons/lu";
import { SiAdobephotoshop } from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gray-50 pb-10 md:pb-16 pt-8 md:pt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-3 md:space-y-7">
            <h1 className="text-3xl md:text-40 font-bold">Hi, I'm Sunil</h1>
            <p className="leading-7 text-base">
              Senior UI/UX & Product Designer with seven years of experience
              specializing in Figma and responsive web design; led design
              efforts for over 20 enterprise projects resulting in a 30%
              increase in user engagement; reduced development time by an
              average of effective collaboration with cross-functional teams.
              Recognized for contributions to enhancing digital experiences
              across major platforms while maintaining a focus on accessibility
              and usability testing.
            </p>
            <ul className="flex items-center justify-start space-x-4 pt-2 relative">
              <li>
                <Link
                  href="https://www.linkedin.com/in/er-sunilsharma/"
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
              UI Design & Development
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
              Mobile App Design
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 items-center">
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium">BeepShop App</h2>
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
                  <h2 className="text-lg font-medium">
                    Super Kirana App Business
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
                  <h2 className="text-lg font-medium">Student Evidence App</h2>
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

              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium">Vaccination India App</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/aGeVD5u8BiOHy3EMgMMCEU/Vaccination-India-App?node-id=0-1&t=imAlI2kGC6vsTvTx-1"
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
                  <h2 className="text-lg font-medium">Casino 2D Game Design</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://drive.google.com/drive/folders/10grlC6xSCUNnbJF289A_wlEBW8YwRmpR"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-photoshop-text bg-photoshop-color border-r border-white border-solid border-opacity-25 flex items-center justify-center">
                    <SiAdobephotoshop size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    PS Design
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-2xl font-semibold pb-5 md:pb-8">
              Dashboard & Website Design
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 items-center">
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium">
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
                  <h2 className="text-lg font-medium">BDA Official Website</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/FSIl07pxhUVORFVC1hbo4n/BDA-Media"
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
                  <h2 className="text-lg font-medium">
                    Financial Market Templates
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/qr9nzQTZjvdQBZffzEIiXE/Best-Financial-Market?node-id=0-1&t=ukEyatiiRHHAjJwI-1"
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
                  <h2 className="text-lg font-medium">
                    Braf Accident Attorney
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/oStbKGgfs1vMqYbRc7LbEK/braffaccidentattorney?node-id=0-1&t=VDXxl0YvlkvtdxAv-1"
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
                  <h2 className="text-lg font-medium">BatteryMantra Layout</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://drive.google.com/file/d/1qBG_eJhsmG2qU-4yardU9tx7oKxOG0_e/view"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-photoshop-text bg-photoshop-color border-r border-white border-solid border-opacity-25 flex items-center justify-center">
                    <SiAdobephotoshop size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    PS Design
                  </span>
                </Link>
              </div>
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium">
                    dApp Development Design
                  </h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://drive.google.com/file/d/1CNIcsK2j84BDK-HabYriieR9leD4TFBt/view"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-photoshop-text bg-photoshop-color border-r border-white border-solid border-opacity-25 flex items-center justify-center">
                    <SiAdobephotoshop size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    PS Design
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-2xl font-semibold pb-5 md:pb-8">
              Logo Design
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 items-center">
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium">BDA Corp Logo</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/Hg123e1qPfhPiMw5xIgueL/BDA-Corp-Logo?node-id=0-1&t=5VVUnLeAWLOA2Hkm-1"
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
                  <h2 className="text-lg font-medium">Cuccu Logo</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/TOo1C0MtxkTWnetWCOKJao/Cuccu-Logo-Design?node-id=0-1&t=0TOOPNGU3hXQFqGj-1"
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
                  <h2 className="text-lg font-medium">BdaTrip Logo</h2>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/proto/vBkHYpaZI0SIvtYwYP3RED/BdaTrip-Logo?page-id=0%3A1&node-id=1-13&viewport=413%2C483%2C0.69&t=BmB80v7Y1NASvEK1-1&scaling=contain&content-scaling=fixed"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-photoshop-text bg-photoshop-color border-r border-white border-solid border-opacity-25 flex items-center justify-center">
                    <SiAdobephotoshop size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    PS Design
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
