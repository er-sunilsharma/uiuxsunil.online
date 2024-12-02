import React from "react";
import Link from "next/link";
import { BsFileEarmarkText } from "react-icons/bs";

export default function CaseStudy() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-20 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 space-y-10 md:space-y-24">
          <div className="w-full">
            <div className="w-full up text-2xl font-semibold pb-5 md:pb-10">
              Case Study:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
              <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
                <div className="w-full mb-4">
                  <h2 className="text-lg font-medium">
                    Car Rental Application
                  </h2>
                </div>
                <Link
                  href="case-study-car-rental-mobile-app"
                  class="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span class="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <BsFileEarmarkText size={24} />
                  </span>
                  <span class="pl-4 pr-5 py-2.5 font-medium">View More </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
