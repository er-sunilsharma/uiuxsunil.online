import React from "react";
import Image from "next/image";
import about from "public/about-us.jpg";

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
              <div className="space-y-4 text-base text-dark leading-26">
                <div>
                  With a BCA degree from the Central University of Rajasthan,
                  Jaipur, I am a Team Leader at UI/UX Designer at BDA Global
                  Corp, where I fuse design expertise with frontend skills to
                  build captivating and responsive digital experiences. I use
                  React and Next JS to create seamless and engaging user
                  interfaces, leading and contributing to multiple UI projects
                  for various clients and domains.
                </div>
                <div>
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
              </div>
            </div>
          </div>
          <div className="w-full pt-14 md:pt-28 space-y-7 md:space-y-10">
            <h3 className="border-b border-solid border-gray-400 pb-5 text-brand text-3xl md:text-4xl font-semibold">
              Skills
            </h3>
            <div className="w-full space-y-6 md:space-y-10">
              <div className="space-y-5">
                <h4 className="text-brand text-2xl font-semibold">General</h4>
                <ul className="text-lg font-medium leading-9 ml-10 list-disc">
                  <li>UI UX Designer & UI Developer</li>
                  <li>HTML5 | JavaScript | Bootstrap</li>
                  <li>CSS3 | Tailwind CSS</li>
                  <li>Mockup & Wireframe Design</li>
                  <li>NextJS, WordPress Knowledge</li>
                  <li>Web Hosting, MySQL, MongoDB</li>
                  <li>GitHub, Vercel</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h4 className="text-brand text-2xl font-semibold">Design</h4>
                <ul className="text-lg font-medium leading-9 ml-10 list-disc">
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe XD</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
