"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import cheersagar from "public/cheersagar.png";
import c2creview from "public/c2creview.png";
import synarionit from "public/synarionit.png";
import ludoapp from "public/ludoapp.png";
import fun2048 from "public/fun2048.png";
import famous11 from "public/famous11.png";

export default function ProjectPortfolio() {
  return (
    <>
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <Link
          href="/cheersagar"
          rel="nofollow"
          className="mb-3 md:mb-4 block overflow-hidden"
        >
          <Image
            src={cheersagar}
            alt="project01"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto hover:scale-103 transition-all ease-in-out"
            priority
          />
        </Link>
        <div className="space-y-2 px-5 pb-5">
          <Link
            href="/cheersagar"
            rel="nofollow"
            className="text-xl text-black font-semibold"
          >
            Cheer Sagar
          </Link>
          <h3 className="text-left text-brand text-sm">
            UI/UX DESIGNING︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <Link
          href="/c2creview"
          rel="nofollow"
          className="mb-3 md:mb-4 block overflow-hidden"
        >
          <Image
            src={c2creview}
            alt="c2creview"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto hover:scale-103 transition-all ease-in-out"
            priority
          />
        </Link>
        <div className="space-y-2 px-5 pb-5">
          <Link
            href="/c2creview"
            rel="nofollow"
            className="text-xl text-black font-semibold"
          >
            C2C Review
          </Link>
          <h3 className="text-left text-brand text-sm">
            UI/UX DESIGNING︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <Link
          href="/synarionit"
          rel="nofollow"
          className="mb-3 md:mb-4 block overflow-hidden"
        >
          <Image
            src={synarionit}
            alt="synarionit"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto hover:scale-103 transition-all ease-in-out"
            priority
          />
        </Link>
        <div className="space-y-2 px-5 pb-5">
          <Link
            href="/synarionit"
            rel="nofollow"
            className="text-xl text-black font-semibold"
          >
            Synarion IT Solutions
          </Link>
          <h3 className="text-left text-brand text-sm">
            UI/UX DESIGNING︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <Link
          href="/ludoapp"
          rel="nofollow"
          className="mb-3 md:mb-4 block overflow-hidden"
        >
          <Image
            src={ludoapp}
            alt="ludoapp"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto hover:scale-103 transition-all ease-in-out"
            priority
          />
        </Link>
        <div className="space-y-2 px-5 pb-5">
          <Link
            href="/ludoapp"
            rel="nofollow"
            className="text-xl text-black font-semibold"
          >
            Ludo Classic
          </Link>
          <h3 className="text-left text-brand text-sm">
            APP DESIGNING ︲ APP UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <Link
          href="/fun2048"
          rel="nofollow"
          className="mb-3 md:mb-4 block overflow-hidden"
        >
          <Image
            src={fun2048}
            alt="fun2048"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto hover:scale-103 transition-all ease-in-out"
            priority
          />
        </Link>
        <div className="space-y-2 px-5 pb-5">
          <Link
            href="/fun2048"
            rel="nofollow"
            className="text-xl text-black font-semibold"
          >
            Fun 2048
          </Link>
          <h3 className="text-left text-brand text-sm">
            APP DESIGNING ︲ APP UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <Link
          href="/famous11"
          rel="nofollow"
          className="mb-3 md:mb-4 block overflow-hidden"
        >
          <Image
            src={famous11}
            alt="famous11"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto hover:scale-103 transition-all ease-in-out"
            priority
          />
        </Link>
        <div className="space-y-2 px-5 pb-5">
          <Link
            href="/famous11"
            rel="nofollow"
            className="text-xl text-black font-semibold"
          >
            Famous11 Fantasy Cricket
          </Link>
          <h3 className="text-left text-brand text-sm">
            APP DESIGNING ︲ APP UX RESEARCH
          </h3>
        </div>
      </div>
    </>
  );
}
