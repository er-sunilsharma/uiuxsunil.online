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
              <h2 className="text-brand text-3xl md:text-5xl font-bold">
                Hi, Im Sunil.
              </h2>
              <div className="space-y-4">
                <div className="text-lg text-brand leading-8">
                  I have over six years of experience in UI/UX design and
                  development, and I am passionate about leveraging technology
                  to drive innovation and create meaningful impact. I
                  collaborate with diverse teams across the organization,
                  mentoring and supporting other UI developers, sharing best
                  practices and feedback, and fostering connections. I am
                  dedicated to continuous learning and growth in the world of UI
                  development, and I am always eager to explore new challenges
                  and opportunities. Let's connect and see how we can make a
                  difference together.
                </div>
                <ul className="flex items-center md:justify-start justify-center space-x-4 pt-3 relative">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/er-sunilsharma/"
                      target="_blank"
                      className="inline-block text-center bg-white shadow-lg px-2 py-1 md:px-3 md:py-2"
                    >
                      <FaLinkedinIn size={20} className="mx-auto" />
                      <span className="inline-block w-full pt-2 text-base">
                        LinkedIn
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://dribbble.com/ersunilsharma"
                      target="_blank"
                      className="inline-block text-center bg-white shadow-lg px-2 py-1 md:px-3 md:py-2"
                    >
                      <FaDribbble size={18} className="mx-auto" />
                      <span className="inline-block w-full pt-2 text-base">
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
                  Design Skills:
                </h4>
                <ul className="text-lg font-medium leading-9 grid grid-cols-1 md:grid-cols-3 ml-3">
                  <li>⦿ UI/UX Design</li>
                  <li>⦿ UI Developer</li>
                  <li>⦿ Responsive Design</li>
                  <li>⦿ Wireframing and Prototyping</li>
                  <li>⦿ Mobile App UI Design</li>
                  <li>⦿ User Research</li>
                  <li>⦿ Systems Design</li>
                  <li>⦿ Team Leadership</li>
                  <li>⦿ Project Management</li>
                  <li>⦿ Developer Hand-off</li>
                  <li>⦿ Light & Dark UI Design</li>
                  <li>⦿ User Testing</li>
                  <li>⦿ HTML5, CSS3</li>
                  <li>⦿ Tailwind & Bootstrap CSS</li>
                  <li>⦿ JavaScript</li>
                  <li>⦿ NextJS Knowledge</li>
                  <li>⦿ Web Hosting</li>
                  <li>⦿ MongoDB</li>
                  <li>⦿ GitHub</li>
                  <li>⦿ Vercel</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h4 className="bg-gray-50 inline-block text-brand text-2xl font-semibold">
                  Design Tools:
                </h4>
                <ul className="text-lg font-medium leading-9 ml-3">
                  <li>⦿ Figma</li>
                  <li>⦿ Adobe Photoshop</li>
                  <li>⦿ Adobe Illustrator</li>
                  <li>⦿ Adobe XD</li>
                  <li>⦿ Canva</li>
                  <li>⦿ etc.</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h4 className="bg-gray-50 inline-block text-brand text-2xl font-semibold">
                  Prototyping Tools:
                </h4>
                <ul className="text-lg font-medium leading-9 ml-3">
                  <li>⦿ Figma</li>
                  <li>⦿ Adobe XD </li>
                  <li>⦿ Marvel Prototyping</li>
                  <li>⦿ Webflow</li>
                  <li>⦿ etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
