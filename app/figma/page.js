import React from "react";
import Image from "next/image";
import about from "public/about-us.jpg";
import Link from "next/link";
import superkirana from "public/figma/super-kirana.png";

export default function About() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-24 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center">
            <div className="w-full bg-white rounded-2xl pt-5 pb-7 px-4 text-center shadow-2xl">
              <div className="w-full relative pb-4">
                <Image
                  src={superkirana}
                  alt="superkirana"
                  width="500"
                  height="500"
                  priority
                />
              </div>
              <h2 className="mb-4 text-lg font-medium">
                Super Kirana App Dashboard
              </h2>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://www.figma.com/design/IhwObTdps693GzqwZ8QEqy/Super-Kirana-App-Dashboard?node-id=0%3A1&t=uTElbLwli7cVIsQh-1"
                class="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
              >
                <span class="px-3.5 py-2 text-white bg-red-600 group-hover:bg-purple-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                </span>
                <span class="pl-4 pr-5 py-2.5">View Design</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
