"use client";

import React from "react";
import Image from "next/image";
import webdevelopmentdesignimg03 from "public/icons/webdevelopment_design_img03.png";
import webdevelopmentdesignimg05 from "public/icons/webdevelopment_design_img05.png";
import webdevelopmentdesignimg04 from "public/icons/webdevelopment_design_img04.png";
import webdevelopmentdesignimg02 from "public/icons/webdevelopment_design_img02.png";
import canva from "public/icons/canva.png";
import html5 from "public/icons/html5.png";
import css3 from "public/icons/css3.png";
import javascript from "public/icons/javascript.png";
import nextjs from "public/icons/next-js.png";
import tailwindcss from "public/icons/tailwind-css.png";
import bootstrap from "public/icons/bootstrap.png";
import mongodb from "public/icons/mongodb.png";
import github from "public/icons/github.png";
import vercel from "public/icons/vercel.png";

export default function About() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-16 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-10">
            <div className="w-full space-y-5 px-0 md:px-10">
              <h2 className="text-black text-3xl md:text-5xl font-bold">
                About Me
              </h2>
              <div className="space-y-4 text-base text-dark leading-26">
                <div className="space-y-3">
                  <p>
                    Hi, I'm Sunil Sharma, a Senior UI/UX Designer with over 6+
                    years of experience in crafting intuitive and user-centered
                    digital experiences. Passionate about design thinking and
                    problem-solving, I specialize in transforming ideas into
                    seamless, functional, and visually compelling interfaces.
                  </p>
                  <p>
                    With expertise in UI/UX design, product design, front &
                    backend UI development, and wireframing & prototyping, I
                    have successfully led and executed projects across various
                    industries, including B2B, C2C platforms, healthcare, and
                    e-commerce. My approach blends creativity, usability, and
                    strategy, ensuring that every design enhances functionality
                    and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full space-y-5 px-0 md:px-10">
              <h2 className="text-black text-3xl font-bold">My Skillset:</h2>
              <div className="space-y-4 text-base text-dark leading-26">
                <ul className="space-y-2">
                  <li className="list-disc list-inside">
                    UI/UX Design & Web Design
                  </li>
                  <li className="list-disc list-inside">
                    Wireframing & Prototyping (Figma, Adobe XD)
                  </li>
                  <li className="list-disc list-inside">
                    Design Systems & User Research
                  </li>
                  <li className="list-disc list-inside">
                    Front-End UI Development (HTML, CSS, Bootstrap, Tailwind Css
                    JavaScript)
                  </li>
                  <li className="list-disc list-inside">
                    Basic Knowledge of Next.js (Experience in small projects)
                  </li>
                  <li className="list-disc list-inside">
                    Graphic Design & Branding
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full space-y-5 px-0 md:px-10">
              <h2 className="text-black text-3xl font-bold">
                My Work Philosophy
              </h2>
              <div className="space-y-4 text-base text-dark leading-26">
                <div className="space-y-3">
                  <p>
                    I believe that great design goes beyond aesthetics—it should
                    solve real problems, drive engagement, and create lasting
                    impressions. Whether it's building a dashboard for a
                    healthcare platform or designing an intuitive B2B review &
                    rating system, I focus on delivering designs that are both
                    aesthetically pleasing and functionally efficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-0 md:px-10">
              <div className="bg-white py-12 px-6 text-center rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">
                  Let’s Connect!
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                  I’m always eager to collaborate on exciting projects and bring
                  innovative ideas to life. Feel free to explore my work and get
                  in touch for design projects, collaborations, or discussions
                  on UI/UX trends.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:sharmasunil0968@gmail.com"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                  >
                    📩 Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sunilsharma-uixd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition"
                  >
                    🔗 Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white pt-4 md:pt-10 pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-7 md:space-y-10">
            <div className="w-full space-y-6 md:space-y-10 text-center">
              <ul className="flex flex-wrap gap-4 items-center justify-center">
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg03}
                    alt="webdevelopment_design_img03"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={canva}
                    alt="canva"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg05}
                    alt="webdevelopment_design_img05"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={html5}
                    alt="html5"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg04}
                    alt="webdevelopment_design_img04"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={css3}
                    alt="css3"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={webdevelopmentdesignimg02}
                    alt="webdevelopment_design_img02"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={javascript}
                    alt="javascript"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
              </ul>
              <ul className="flex flex-wrap gap-4 items-center justify-center">
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={nextjs}
                    alt="nextjs"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={tailwindcss}
                    alt="tailwindcss"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={bootstrap}
                    alt="bootstrap"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={mongodb}
                    alt="mongodb"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={github}
                    alt="github"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
                <li className="bg-yellow-50 rounded-md inline-block">
                  <Image
                    src={vercel}
                    alt="vercel"
                    width={77}
                    height={77}
                    priority
                    unoptimized
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
