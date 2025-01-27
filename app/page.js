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
            <h1 className="text-3xl md:text-40 font-bold">Hi, I'm Sunil</h1>
            <p className="leading-7 text-base">
              Experienced Senior UI/UX Designer with 7+ years of delivering
              user-centered digital solutions for web and mobile platforms.
              Proficient in Figma, Adobe XD, and Next.js, with expertise in
              wireframing, prototyping, and responsive design. Specializes in
              user research, design systems, and creating accessible designs for
              outstanding user experiences. Proficient in turning complex
              requirements into clear, visually engaging designs that optimize
              usability and foster user engagement. Strong collaborator with
              cross-functional teams to ensure the timely delivery of
              top-quality products.
            </p>
            <ul className="flex items-center justify-start space-x-4 pt-3 relative">
              <li>
                <Link
                  href="https://www.linkedin.com/in/er-sunilsharma/"
                  target="_blank"
                  className="inline-block text-center bg-linkedin text-white shadow-lg px-4 pt-3 pb-2 rounded-xl hover:scale-105 transition-all"
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
                  className="inline-block text-center bg-black text-white shadow-lg px-4 pt-3 pb-2 rounded-xl hover:scale-105 transition-all"
                >
                  <FaDribbble size={22} className="mx-auto" />
                  <span className="inline-block w-full pt-2 text-sm font-medium">
                    Dribbble
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <ProjectPortfolio />
          </div>
        </div>
      </div>
    </>
  );
}
