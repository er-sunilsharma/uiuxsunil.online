import React from "react";
import Image from "next/image";
import about from "public/about-us.jpg";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-24 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
            <div className="w-full">
              <Image
                src={about}
                alt="about-us"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="w-full space-y-4 px-0 md:px-10">
              <h2 className="text-brand text-3xl md:text-4xl font-bold">
                Hi, I'm Sunil Sharma
              </h2>
              <div className="space-y-4">
                <div className="text-lg text-brand leading-8">
                  Experienced UI/UX Designer with 6+ years of expertise in
                  crafting user-centered designs that enhance functionality and
                  satisfaction. Skilled in Product Design, Front & Backend UI
                  Development, Next.js, wireframing, prototyping, and design
                  systems. Adept at solving complex design challenges and
                  managing projects efficiently, delivering innovative solutions
                  that drive the success of digital products through strategic
                  thinking and meticulous design.
                </div>
                <ul className="flex items-center md:justify-start justify-center space-x-4 pt-3 relative">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/er-sunilsharma/"
                      target="_blank"
                      className="inline-block text-center bg-linkedin text-white shadow-lg px-4 pt-3 pb-2 rounded-lg hover:scale-105 transition-all"
                    >
                      <FaLinkedinIn size={24} className="mx-auto" />
                      <span className="inline-block w-full pt-2 text-sm font-medium">
                        LinkedIn
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://dribbble.com/ersunilsharma"
                      target="_blank"
                      className="inline-block text-center bg-black text-white shadow-lg px-4 pt-3 pb-2 rounded-lg hover:scale-105 transition-all"
                    >
                      <FaDribbble size={22} className="mx-auto" />
                      <span className="inline-block w-full pt-2 text-sm font-medium">
                        Dribbble
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full pt-14 md:pt-28 space-y-7 md:space-y-10">
            <h3 className="border-b border-solid border-gray-400 pb-5 text-brand text-3xl md:text-4xl font-semibold">
              Skills
            </h3>
            <div className="w-full space-y-6 md:space-y-10">
              <div className="space-y-5">
                <h4 className="bg-gray-50 inline-block text-brand text-2xl font-semibold">
                  Technical Skills & Additional Skills
                </h4>
                <ul className="text-lg font-medium leading-9 grid grid-cols-1 md:grid-cols-3 ml-3">
                  <li>⦿ Adobe Photoshop</li>
                  <li>⦿ Illustrator & Adobe XD</li>
                  <li>⦿ Figma, Canva</li>
                  <li>⦿ Wireframing & Prototyping</li>
                  <li>⦿ Systems Design</li>
                  <li>⦿ Responsive Design</li>
                  <li>⦿ Mobile App & Website Design</li>
                  <li>⦿ HTML5</li>
                  <li>⦿ CSS, CSS3</li>
                  <li>⦿ JavaScript</li>
                  <li>⦿ Next.js</li>
                  <li>⦿ Tailwind & Bootstrap CSS</li>
                  <li>⦿ Front & Backend Ui Development</li>
                  <li>⦿ MongoDB</li>
                  <li>⦿ GitHub, Vercel</li>
                  <li>⦿ User Testing</li>
                  <li>⦿ Web Hosting</li>
                  <li>⦿ Team Leadership</li>
                  <li>⦿ Developer Hand-off</li>
                  <li>⦿ Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
