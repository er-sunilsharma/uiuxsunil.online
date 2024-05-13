import React from "react";
import Image from "next/image";
import about from "public/about-us.jpg";
import Link from "next/link";
import bdacorp from "public/logos/bdacorp.png";
import bdatrip from "public/logos/bdatrip.png";

export default function Logos() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-24 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-center">
            <div className="w-full bg-white rounded-2xl pt-5 pb-6 px-4 text-center shadow-2xl">
              <div className="w-full relative pb-4">
                <Image
                  src={bdacorp}
                  alt="bdacorp"
                  width="500"
                  height="500"
                  priority
                />
              </div>
              <h2 className="text-lg font-medium">
                BDA Tech and Media (Bda Corp.)
              </h2>
            </div>
            <div className="w-full bg-white rounded-2xl pt-5 pb-6 px-4 text-center shadow-2xl">
              <div className="w-full relative pb-4">
                <Image
                  src={bdatrip}
                  alt="bdatrip"
                  width="500"
                  height="500"
                  priority
                />
              </div>
              <h2 className="text-lg font-medium">
                BdaTrip (Vietnam Travel & Tourism)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
