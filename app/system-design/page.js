"use client";

import React from "react";
import Link from "next/link";
import { LuFigma } from "react-icons/lu";
import Image from "next/image";
import systemdesign from "public/system-design.jpg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function SystemDesign() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-12 pb-10 md:pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-10 items-center">
            <div className="w-full bg-white rounded-xl overflow-hidden text-center shadow-2xl">
              <Image
                src={systemdesign}
                alt="system-design"
                width={1500}
                height={976}
                priority
                unoptimized
              />
            </div>
            <div className="w-full space-y-10">
              <div className="w-full space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl text-black font-bold">
                  Design System: A Unified Approach to UI Components
                </h2>
                <p className="text-base text-gray-600 leading-7">
                  A Design System is a structured collection of reusable UI
                  components, patterns, and guidelines that ensure consistency,
                  efficiency, and scalability across digital products. It acts
                  as a single source of truth for designers and developers,
                  enhancing user experience across different platforms and
                  devices.
                </p>
                <div className="space-y-4 pb-3">
                  <h3 className="font-bold text-xl text-red-700">
                    Core Elements of the Design System:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-start space-x-2 text-base text-black">
                      <span className="text-red-700">✔</span>
                      <p>
                        <strong className="text-red-700">
                          Navigation & Layout
                        </strong>
                        – Navbar (Top & Bottom), Breadcrumbs, Page Control,
                        Pagination.
                      </p>
                    </li>
                    <li className="flex items-center justify-start space-x-2 text-base text-black">
                      <span className="text-red-700">✔</span>
                      <p>
                        <strong className="text-red-700">
                          Interactive Elements
                        </strong>
                        – Buttons, Button Groups, Toggle, Radio, Checkbox,
                        Dropdown, Stepper, Tab, Context Menu, Action Sheet.
                      </p>
                    </li>
                    <li className="flex items-center justify-start space-x-2 text-base text-black">
                      <span className="text-red-700">✔</span>
                      <p>
                        <strong className="text-red-700">
                          Feedback & Alerts
                        </strong>
                        – Alerts, Pop-ups, Progress Bars, Loaders, Tooltips.
                      </p>
                    </li>
                    <li className="flex items-center justify-start space-x-2 text-base text-black">
                      <span className="text-red-700">✔</span>
                      <p>
                        <strong className="text-red-700">
                          Visual & Styling
                        </strong>
                        – Fonts, Typography, Icons, Colors, Shadow, Badge &
                        Chip, Avatar.
                      </p>
                    </li>
                    <li className="flex items-center justify-start space-x-2 text-base text-black">
                      <span className="text-red-700">✔</span>
                      <p>
                        <strong className="text-red-700">
                          Cards & Containers
                        </strong>
                        – Card Components for structured layouts.
                      </p>
                    </li>
                  </ul>
                </div>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://www.figma.com/design/tm5UCxauFHvj9EZrazFHls/My-System-Design?node-id=0-1&t=ddqEngWJyBQIrhjD-1"
                  className="inline-flex overflow-hidden text-white bg-gray-900 rounded-full group"
                >
                  <span className="px-3.5 py-2 text-white bg-red-600 flex items-center justify-center">
                    <LuFigma size={24} />
                  </span>
                  <span className="pl-4 pr-5 py-2.5 font-medium">
                    Figma Design
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full pt-7 md:pt-12">
            <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-15 md:text-base font-semibold">
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>List</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Stepper</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Dropdown</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Tab</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Card</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Page Control</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Pagination</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Context Menu</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Action Sheet</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Pop-Up</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Font</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Icons</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Colors</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Button Group</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Input</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Alert</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Toggle</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Radio</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Progress Bar</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Shadow</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Navbar: Top</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Navbar: Bottom</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Avatar</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Breadcrumbs</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Loader</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Tooltip</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Checkbox</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Badge & Chip</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Button</span>
              </li>
              <li className="flex items-center space-x-2 bg-white py-2 px-3 rounded-lg shadow-sm">
                <IoCheckmarkCircleOutline size={20} className="text-blue-600" />
                <span>Typography</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
