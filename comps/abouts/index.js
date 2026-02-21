"use client";

import React from "react";
import { FaBrain } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { TiDeviceLaptop } from "react-icons/ti";

export default function SkillsExpertise() {
  const myskills = [
    {
      id: 1,
      icon: FaBrain,
      iconbg: "bg-[#4F46E5]",
      iconcolor: "text-white",
      title: "1. UI/UX Design Expertise",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
      skills: [
        "User Research",
        "Wireframing",
        "Prototyping (Figma)",
        "Information Architecture",
        "User Flow Creation",
        "Design Systems",
        "Usability Testing",
        "Interaction Design",
      ],
    },
    {
      id: 2,
      icon: IoColorPalette,
      iconbg: "bg-white",
      iconcolor: "text-[#7430f7]",
      title: "2. Interface & Visual Design",
      bgColor: "bg-black",
      bgColor1: "bg-[#7430f7]",
      textcolor: "text-white",
      deccolor: "text-white",
      skills: [
        "Web Design",
        "Mobile App Design",
        "Dashboard Design",
        "Responsive Design",
        "Typography & Layout",
        "Design Thinking",
        "High-Fidelity UI",
      ],
    },
    {
      id: 3,
      icon: TiDeviceLaptop,
      iconbg: "bg-[#7b6af4]",
      iconcolor: "text-white",
      title: "3. UI Development & Tools",
      bgColor: "bg-[#f7f7f7]",
      bgColor1: "bg-white",
      textcolor: "text-black",
      deccolor: "text-gray-600",
      skills: [
        "Webflow (CMS)",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Responsive UI Development",
        "Frontend Implementation",
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-12 lg:mb-16 text-center">
        <span className="px-6 py-2.5 bg-black text-white rounded-full text-base">
          My Expertise
        </span>
        <h1 className="mt-8 text-2xl sm:text-5xl lg:text-[40px] font-medium text-gray-900 leading-tight max-w-4xl mx-auto">
          UI/UX design, visual interfaces, and frontend development
          capabilities.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {myskills.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`${item.bgColor} rounded-3xl p-2 transition-all duration-500 group flex flex-col`}
              >
                {/* Header */}
                <div
                  className={`${item.bgColor1} flex items-center justify-between py-3 px-4 rounded-2xl mb-3`}
                >
                  <h3
                    className={`${item.textcolor} text-lg lg:text-xl font-normal`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`${item.iconbg} w-10 h-10 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={20} className={item.iconcolor} />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${item.bgColor1} p-5 rounded-2xl h-full group-hover:opacity-30 transition-all duration-300`}
                >
                  {/* ✅ Dynamic Skills List */}
                  <ul className={`${item.textcolor} grid grid-cols-1 gap-3`}>
                    {item.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="text-base font-normal list-disc list-inside"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
