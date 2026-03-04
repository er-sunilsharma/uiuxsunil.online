"use client";

import React from "react";
import Image from "next/image";
import { GiClothes, GiTap } from "react-icons/gi";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineImportantDevices } from "react-icons/md";
import { SiCivicrm } from "react-icons/si";
import { FaKitMedical } from "react-icons/fa6";
import { FaLightbulb, FaDigitalOcean, FaHeadSideVirus } from "react-icons/fa";

export default function ProjectPortfolio() {
  const projects = [
    {
      id: 1,
      icon: GiClothes,
      iconbg: "bg-[#c19967]",
      iconcolor: "text-white",
      title: "Cheer Sagar",
      description:
        "Leading garment manufacturer and exporter in India, offering boutique, formal, casual, and party wear for women and kids at affordable prices.",
      projectlead: "Mr. Nikhar Sharma",
      myrole: "Ui/Ux Designing, Ui Development",
      projectlink: "https://www.cheersagar.com/",
      image: "/cheersagar.png",
      bgColor: "bg-[#f0eff2]",
    },
    {
      id: 2,
      icon: VscPreview,
      iconbg: "bg-[#3852db]",
      iconcolor: "text-white",
      title: "C2C Review",
      description:
        "B2B & B2C Review's for Top IT Technologies. C2CReview offers services to boost up the reputation of your companies or earn more ROI.",
      projectlead: "Mr. Ram Sharma",
      myrole: "Ui/Ux Designing, Ux Research",
      projectlink: "https://c2creview.co/",
      image: "/c2creview.png",
      bgColor: "bg-[#f0eff2]",
    },
    {
      id: 3,
      icon: MdOutlineImportantDevices,
      iconbg: "bg-[#f87a0b]",
      iconcolor: "text-white",
      title: "Synarion IT Solutions",
      description:
        "A leading mobile app, web, software, and game development company serving clients in India and the USA.",
      projectlead: "Ayushi Sharma",
      myrole: "Website Design, Ui Development",
      projectlink: "https://www.synarionit.com/",
      image: "/synarionit.png",
      bgColor: "bg-[#f3f4f5]",
    },
    {
      id: 4,
      icon: FaKitMedical,
      iconbg: "bg-[#2b92c8]",
      iconcolor: "text-white",
      title: "nobarrier",
      description:
        "No Barrier delivers AI medical interpretation, bridging language gaps for secure, accurate, instant healthcare communication.",
      projectlead: "Jaspreet Singh",
      myrole: "Website Design, Webflow Dev. (CMS)",
      projectlink: "https://www.nobarrier.ai/",
      image: "/nobarriersite.jpg",
      bgColor: "bg-white",
    },
    {
      id: 5,
      icon: FaDigitalOcean,
      iconbg: "bg-[#000]",
      iconcolor: "text-white",
      title: "catch + release",
      description:
        "Catch+Release helps brands create authentic, award-winning marketing campaigns in collaboration with agencies and teams.",
      projectlead: "Kapil Singh Negi",
      myrole: "Website Design, Webflow Dev. (CMS)",
      projectlink: "https://www.catchandrelease.com/",
      image: "/catchandrelease.jpg",
      bgColor: "bg-white",
    },
    {
      id: 6,
      icon: GiTap,
      iconbg: "bg-[#555c60]",
      iconcolor: "text-white",
      title: "My Home Filters",
      description:
        "My Home Filters provides Sydney families clean, safe water through a simple one-page website, backed by trusted plumbers — not pushy sales tactics.",
      projectlead: "Jaspreet Singh (geewonii)",
      myrole: "Prototype Design, Webflow Dev. (CMS)",
      projectlink: "https://www.myhomefilters.com.au/",
      image: "/myhomefilters.jpg",
      bgColor: "bg-white",
    },
    {
      id: 7,
      icon: FaHeadSideVirus,
      iconbg: "bg-[#f26531]",
      iconcolor: "text-white",
      title: "BDA Media",
      description:
        "BDA provides innovative digital marketing solutions that help brands grow, engage audiences, and unlock new possibilities.",
      projectlead: "Jonathan Pham",
      myrole: "Next.js Ui Development (Tailwind)",
      projectlink: "https://bda.media/",
      image: "/0-bdamedia.jpg",
      bgColor: "bg-[#f3f4f5]",
    },
    {
      id: 8,
      icon: FaLightbulb,
      iconbg: "bg-[#e74732]",
      iconcolor: "text-white",
      title: "Sprint Creative",
      description:
        "Sprint Creative delivers agile, high-impact marketing—direct collaboration, fast decisions, zero layers, focused purely on real results.",
      projectlead: "Jaspreet Singh",
      myrole: "Prototype Design, Webflow Development",
      projectlink: "https://www.sprintcreative.co.uk/",
      image: "/sprintcreative.jpg",
      bgColor: "bg-[#f3f4f5]",
    },
    {
      id: 9,
      icon: SiCivicrm,
      iconbg: "bg-[#006aff]",
      iconcolor: "text-white",
      title: "TPOS.AI",
      description:
        "TPOS™ helps agents scale smarter, simplify operations, and grow confidently at every stage.",
      projectlead: "Jaspreet Singh",
      myrole: "Ui Design, Webflow Development",
      projectlink: "https://www.tpos.ai/",
      image: "/tpossaipreview.jpg",
      bgColor: "bg-[#f3f4f5]",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            {/* Projects Badge */}
            {/* <div className="inline-block mb-6 lg:mb-8">
              <span className="px-6 py-2.5 animated-gradient-bg text-white rounded-full text-base font-normal">
                Websites Designed & Built by Me
              </span>
            </div> */}

            {/* Title and All Projects Link */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h1 className="leading-normal text-2xl sm:text-[40px] font-medium text-gray-900 max-w-2xl">
                Crafted Digital Experiences - Designed & Built by Me
              </h1>

              <button
                onClick={() => (window.location.href = "#design")}
                className="inline-flex items-center gap-2 animated-gradient-bg py-2.5 rounded-full px-6 text-white font-normal hover:gap-3 transition-all duration-300 self-start lg:self-auto lg:mt-2"
              >
                <span className="text-base lg:text-lg">
                  View UI/UX Projects
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m0 0l-3-3m3 3l-3 3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            {projects.map((item) => (
              <div className="flex flex-col md:flex-row top-0 sm:top-24 relative sm:sticky">
                <div
                  className={`${item.bgColor} relative py-5 sm:py-0 w-full md:w-3/5 rounded-3xl overflow-hidden order-1 md:order-2 flex justify-center items-center border-solid border-[#ebebeb] border-l sm:border-l-0 border`}
                >
                  <Image
                    src={item.image}
                    alt={item.myrole}
                    width={2400}
                    height={1545}
                    className=""
                    priority
                    rel="nofollow"
                    draggable="false"
                  />
                </div>
                <div className="p-6 sm:p-8 w-full md:w-2/5 flex flex-col justify-between overflow-hidden border-solid border-[#ebebeb] border rounded-3xl bg-white order-2 md:order-1">
                  <div>
                    <div
                      className={`${item.iconbg} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-8 shadow-lg`}
                    >
                      <item.icon className={`${item.iconcolor} w-7 h-7`} />
                    </div>

                    <h2
                      rel="nofollow"
                      className="text-xl sm:text-2xl font-medium text-gray-900 mb-4"
                    >
                      {item.title}
                    </h2>
                    <p
                      rel="nofollow"
                      className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 font-normal"
                    >
                      {item.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <span className="text-gray-500 text-sm sm:text-base">
                          Project Lead
                        </span>
                        <span
                          rel="nofollow"
                          className="text-gray-900 font-normal text-sm sm:text-base"
                        >
                          {item.projectlead}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm sm:text-base">
                          My Role
                        </span>
                        <span
                          rel="nofollow"
                          className="text-gray-900 font-normal text-sm sm:text-base"
                        >
                          {item.myrole}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(item.projectlink, "_blank")}
                    rel="nofollow"
                    className="w-full h-12 bg-gray-900 text-white rounded-full text-base font-normal hover:bg-gray-600 transition-colors duration-300 shadow-lg"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
