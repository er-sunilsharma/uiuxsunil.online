"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import cheersagar from "public/cheersagar.png";
import c2creview from "public/c2creview.png";

export default function ProjectPortfolio() {
  return (
    <>
      <div className="w-full">
        <Link
          href="/cheersagar"
          rel="nofollow"
          className="mb-4 md:mb-6 block zoom_hover overflow-hidden"
        >
          <Image
            src={cheersagar}
            alt="project01"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-3 md:space-y-5">
          <Link
            href="/cheersagar"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Cheer Sagar
          </Link>
          <h3 className="text-left text-brand text-sm">
            UX DESIGN︲ UI DESIGN ︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full">
        <Link
          href="/c2creview"
          rel="nofollow"
          className="mb-4 md:mb-6 block zoom_hover overflow-hidden"
        >
          <Image
            src={c2creview}
            alt="c2creview"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-3 md:space-y-5">
          <Link
            href="/c2creview"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            C2Creview
          </Link>
          <h3 className="text-left text-brand text-sm">
            UX DESIGN︲ UI DESIGN ︲ UX RESEARCH
          </h3>
        </div>
      </div>
    </>
  );
}
