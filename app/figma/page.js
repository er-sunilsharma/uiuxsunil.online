import React from "react";
import Link from "next/link";
import { LuFigma } from "react-icons/lu";

export default function About() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-20 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full text-2xl font-semibold pb-10">
            Figma Design
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-center">
            <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
              <div className="w-full mb-4">
                <h2 className="text-lg font-medium">
                  Super Kirana App Dashboard
                </h2>
              </div>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://shorturl.at/qyIY1"
                class="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
              >
                <span class="px-3.5 py-2 text-white bg-red-600 group-hover:bg-purple-600 flex items-center justify-center">
                  <LuFigma size={24} />
                </span>
                <span class="pl-4 pr-5 py-2.5 font-medium">View Design</span>
              </Link>
            </div>
            <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
              <div className="w-full mb-4">
                <h2 className="text-lg font-medium">
                  BDA Media Official Website
                </h2>
              </div>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://shorturl.at/dCIKY"
                class="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
              >
                <span class="px-3.5 py-2 text-white bg-red-600 group-hover:bg-purple-600 flex items-center justify-center">
                  <LuFigma size={24} />
                </span>
                <span class="pl-4 pr-5 py-2.5 font-medium">View Design</span>
              </Link>
            </div>
            <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
              <div className="w-full mb-4">
                <h2 className="text-lg font-medium">Vaccination India App</h2>
              </div>
              <Link
                target="_blank"
                rel="nofollow"
                href="#"
                class="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
              >
                <span class="px-3.5 py-2 text-white bg-red-600 group-hover:bg-purple-600 flex items-center justify-center">
                  <LuFigma size={24} />
                </span>
                <span class="pl-4 pr-5 py-2.5 font-medium">View Design</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
