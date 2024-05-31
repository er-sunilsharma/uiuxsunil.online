import { ProjectPortfolio } from "@/comps/common";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="w-full bg-white pb-8 md:pb-20 pt-4 md:pt-0">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full space-y-3 md:space-y-7 pt-2 md:pt-16 pb-7 md:pb-20">
            <h1 className="text-3xl md:text-40 font-semibold">Hi, I'm Sunil</h1>
            <p className="leading-7 md:leading-8 text-base md:text-xl">
              I’m a Ui/Ux designer & Ui developer with a strong passion of
              design strategy, highly resourceful, innovative, and competent
              with extensive experience in the UI/UX of Mobile Apps and
              Websites, Prototyping, Wireframing, Brainstorming, Empathy
              Mapping, Research Interviewing etc. I strive to meet user needs
              and behaviors while balancing them with client business needs. My
              strengths are my creativity and solving issues that at first seem
              impossible.
            </p>
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
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <ProjectPortfolio />
          </div>
        </div>
      </div>
    </>
  );
}
