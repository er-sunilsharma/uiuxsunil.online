"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import cheersagar from "public/cheersagar.png";
import c2creview from "public/c2creview.png";
import synarionit from "public/synarionit.png";
import ludoapp from "public/ludoapp.png";
import fun2048 from "public/fun2048.png";
import thejohribazar from "public/thejohribazar.png";
import famous11 from "public/famous11.png";
import choic11 from "public/choic11.png";
import bharatiyapashupalan from "public/bharatiyapashupalan.png";

export default function ProjectPortfolio() {
  return (
    <>
      <div className="w-full shadow-lg">
        <Link
          href="/cheersagar"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
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
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/cheersagar"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Cheer Sagar
          </Link>
          <h3 className="text-left text-brand text-sm">
            UI/UX DESIGNING︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/synarionit"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={synarionit}
            alt="synarionit"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/synarionit"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Synarion IT Solutions
          </Link>
          <h3 className="text-left text-brand text-sm">
            UI/UX DESIGNING︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/ludoapp"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={ludoapp}
            alt="ludoapp"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/ludoapp"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Ludo Classic
          </Link>
          <h3 className="text-left text-brand text-sm">
            APP DESIGNING ︲ APP UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/thejohribazar"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={thejohribazar}
            alt="thejohribazar"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/thejohribazar"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            The Johri Bazar
          </Link>
          <h3 className="text-left text-brand text-sm">
            UX DESIGNING︲ UI DEVELOPMENT
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/c2creview"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
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
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/c2creview"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            C2Creview
          </Link>
          <h3 className="text-left text-brand text-sm">
            UI/UX DESIGNING︲ UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/fun2048"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={fun2048}
            alt="fun2048"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/fun2048"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Fun 2048
          </Link>
          <h3 className="text-left text-brand text-sm">
            APP DESIGNING ︲ APP UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/famous11"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={famous11}
            alt="famous11"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/famous11"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Famous11 Fantasy Cricket
          </Link>
          <h3 className="text-left text-brand text-sm">
            APP DESIGNING ︲ APP UX RESEARCH
          </h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/bharatiyapashupalan"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={bharatiyapashupalan}
            alt="bharatiyapashupalan"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/bharatiyapashupalan"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Bhartiya Pashupalan
          </Link>
          <h3 className="text-left text-brand text-sm">UI DEVELOPMENT</h3>
        </div>
      </div>
      <div className="w-full shadow-lg">
        <Link
          href="/choic11"
          rel="nofollow"
          className="mb-3 md:mb-4 block zoom_hover overflow-hidden"
        >
          <Image
            src={choic11}
            alt="choic11"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </Link>
        <div className="space-y-2 md:space-y-4 px-5 pb-5">
          <Link
            href="/choic11"
            rel="nofollow"
            className="text-xl md:text-2xl text-brand font-bold"
          >
            Choic11: Fantasy Cricket
          </Link>
          <h3 className="text-left text-brand text-sm">APP DESIGNING</h3>
        </div>
      </div>
    </>
  );
}
