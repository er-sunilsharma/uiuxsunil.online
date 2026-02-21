"use client";

import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { SiPolkadot } from "react-icons/si";
import { FaUserDoctor, FaBasketShopping } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { BiSolidParty } from "react-icons/bi";

export default function FigmaGrid() {
  const figma = [
    {
      id: 1,
      icon: HiShoppingBag,
      iconbg: "bg-[#ffad00]",
      iconcolor: "text-white",
      title: "Beepshop E-commerce App",
      description:
        "Designed an intuitive e-commerce mobile app enhancing product discovery, seamless checkout, usability, accessibility, and engaging overall shopping exp.",
      figmalink:
        "https://www.figma.com/design/dQgpYZeA81PnNDg4v53ODt/beepshop-e-commerce-app?node-id=0-1&t=9KHXrOoLa1TboHo4-1",
      designimage: "/BeepshopE-commerceApp.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
    {
      id: 2,
      icon: SiPolkadot,
      iconbg: "bg-white",
      iconcolor: "text-[#7430f7]",
      title: "FundeX B2B – Web Platform",
      description:
        "Designed a B2B financial platform simplifying service access through intuitive navigation, clear interface, and efficient user experience.",
      figmalink:
        "https://www.figma.com/design/OLAmfrHysH1HE9XSDnxZGe/FundeX-B2B-(Business-to-Business)?node-id=0-1&t=0PkjVCY8X4eqi3y6-1",
      designimage: "/FundeXB2BWebPlatform.png",
      bgColor: "bg-black",
      bgColor1: "bg-[#7430f7]",
      textcolor: "text-white",
      deccolor: "text-white",
    },
    {
      id: 3,
      icon: FaUserDoctor,
      iconbg: "bg-[#7b6af4]",
      iconcolor: "text-white",
      title: "Doctor Appointment App",
      description:
        "Designed a doctor appointment app enabling seamless scheduling, real-time availability, easy tracking, and smooth patient booking experience.",
      figmalink:
        "https://www.figma.com/design/5abqfAJeCrE6zWvMGuu5GM/DocSpot---Doctor-Appointment-App-Design?node-id=0-1&p=f&t=9Ll1n95N4RQSULx2-0",
      designimage: "/DocSpot.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
    {
      id: 4,
      icon: FaBasketShopping,
      iconbg: "bg-[#1fb269]",
      iconcolor: "text-white",
      title: "Super Kirana Business App",
      description:
        "Designed an intuitive dashboard for shop owners enabling efficient grocery sales, simplified inventory, orders, and customer management.",
      figmalink:
        "https://www.figma.com/design/YEfcGDfbPep4Zxo2Omu6bG/Super-Kirana-App-Business?node-id=0-1&t=p8fqQ3Ga1jVhSTCn-1",
      designimage: "/SuperKirana.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
    {
      id: 5,
      icon: MdHealthAndSafety,
      iconbg: "bg-[#008add]",
      iconcolor: "text-white",
      title: "HPulse Health Dashboard",
      description:
        "Redesigned a comprehensive health monitoring dashboard that allows users to track health-related services like CT scans, therapy, and X-rays.",
      figmalink:
        "https://www.figma.com/design/WcFVpo0FLJ30OIBLqYBKFU/HPulse-Health-Dashboard?node-id=0-1&t=I5PZoNfgfBFCi4XE-1",
      designimage: "/HPulseHealthDashboard.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
    {
      id: 6,
      icon: FaBook,
      iconbg: "bg-[#263769]",
      iconcolor: "text-white",
      title: "The Library of Alexandria",
      description:
        "Rebuilding the Library of Alexandria to make global knowledge freely accessible in every language and format for all humanity.",
      figmalink:
        "https://www.figma.com/design/0WppoHHqLEymWJf6ieG7QW/The-Library-of-Alexandria?node-id=0-1&t=pBwzAAgN3lWa928s-1",
      designimage: "/Library_Alexandria.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
    {
      id: 7,
      icon: LuSchool,
      iconbg: "bg-[#E54C16]",
      iconcolor: "text-white",
      title: "Students Evidence App",
      description:
        "Proof of Evidence is a secure platform helping students manage, verify, and showcase academic and extracurricular achievements easily.",
      figmalink:
        "https://www.figma.com/design/WCvn2EdZVPPTEJ4n90Bnde/Proof-of-Evidence-Mobile-App-for-Students?node-id=0-1&t=ZOQdUUnCpToW7e71-1",
      designimage: "/StudentsEvidenceApp.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
    {
      id: 8,
      icon: BiSolidParty,
      iconbg: "bg-[#3E63DD]",
      iconcolor: "text-white",
      title: "Event Management App",
      description:
        "Modern event management app to plan, manage, track events, vendors, guests, payments, and engagement seamlessly in one platform.",
      figmalink:
        "https://www.figma.com/design/x983oghmCIHkgUPdOdnoKD/Event-Management-App?node-id=0-1&t=2mJulc0vNbotCXji-1",
      designimage: "/eventmanagementapp.png",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
    },
  ];
  return (
    <div className="w-full">
      <div className="mb-12 lg:mb-16">
        <div className="flex flex-col gap-8 sm:gap-12 justify-center w-full items-center">
          <div className="inline-block">
            <span className="px-6 py-2.5 bg-black text-white rounded-full text-base font-normal">
              UI/UX Design Portfolio
            </span>
          </div>
          <h1 className="text-2xl sm:text-5xl lg:text-[40px] font-medium text-gray-900 leading-tight max-w-4xl mx-auto text-center">
            Apps, dashboards, and websites crafted with strategy and precision.
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {figma.map((item) => (
            <div
              className={`${item.bgColor} relative rounded-3xl flex flex-col overflow-visible p-2 transition-all duration-500 group`}
            >
              <div
                onClick={() => window.open(item.figmalink, "_blank")}
                rel="nofollow"
                className={`${item.bgColor1} flex items-center cursor-pointer rounded-2xl justify-between py-2 pl-3 pr-2 mb-2 backdrop-blur-lg transition-all duration-300 group-hover:scale-101`}
              >
                <h3
                  className={`${item.textcolor} text-lg lg:text-xl font-normal`}
                >
                  {item.title}
                </h3>
                <div
                  className={`${item.iconbg}  w-10 h-10 rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                >
                  <item.icon
                    size={20}
                    className={`${item.iconcolor} group-hover:hidden block transition-all duration-300`}
                  />
                  <GrLinkNext
                    size={18}
                    className={`${item.iconcolor} group-hover:block hidden transition-all duration-400 rotate-[-38deg]`}
                  />
                </div>
              </div>

              <div
                className={`${item.bgColor1} p-4 sm:p-5 rounded-2xl h-full group-hover:opacity-30 transition-all duration-300`}
              >
                <p
                  className={`${item.deccolor} text-base leading-relaxed mb-5`}
                >
                  {item.description}
                </p>
                <div className="w-full">
                  <div className="rounded-2xl overflow-hidden bg-gray-200 p-3 h-52 flex items-center justify-center">
                    <img
                      src={item.designimage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
