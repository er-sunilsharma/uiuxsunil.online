"use client";

import React from "react";
import Image from "next/image";

export default function CommunityImpact() {
  const communitylist = [
    {
      id: 1,
      image: "/cheersagar.png",
      title: "Tree Plantation Drive",
      description:
        "Participated in a community tree plantation initiative promoting environmental sustainability and green awareness.",
    },
    {
      id: 2,
      image: "/cheersagar.png",
      title: "Community Support Initiative",
      description:
        "Collaborated with local groups to support social welfare initiatives and community development activities.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
      {communitylist.map((item) => (
        <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <Image
            src={item.image}
            alt={item.title}
            width={2400}
            height={1545}
            className="rounded-xl mb-4 w-full object-cover border border-dashed border-gray-300"
            priority
            rel="nofollow"
            draggable="false"
          />
          <h3 className="text-black text-lg lg:text-xl font-normal mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
