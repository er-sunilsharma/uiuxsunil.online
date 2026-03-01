"use client";

import React, { useState } from "react";

export default function DesignProcess() {
  var stateArr = useState(null);
  var activeStep = stateArr[0];
  var setActiveStep = stateArr[1];

  function toggle(index) {
    setActiveStep(activeStep === index ? null : index);
  }

  function cardStyle(isActive, accent) {
    return {
      background: "#fff",
      border: "1.5px solid " + (isActive ? accent + "55" : "#E5E7EB"),
      boxShadow: isActive
        ? "0 8px 32px " + accent + "18"
        : "0 1px 4px rgba(0,0,0,0.05)",
    };
  }

  function iconBoxStyle(isActive, accent) {
    return {
      background: isActive ? accent : "#fff",
      border: "1.5px solid " + (isActive ? accent : "#E5E7EB"),
      color: isActive ? "#fff" : accent,
      boxShadow: isActive
        ? "0 8px 24px " + accent + "33"
        : "0 1px 4px rgba(0,0,0,0.06)",
    };
  }

  function arrowStyle(isActive, accent) {
    return {
      background: isActive ? accent : "#F3F4F6",
      color: isActive ? "#fff" : "#9CA3AF",
    };
  }

  function tagStyle(accent, light) {
    return {
      background: light,
      color: accent,
      border: "1px solid " + accent + "25",
    };
  }

  function expandStyle(isActive) {
    return {
      maxHeight: isActive ? "320px" : "0",
      overflow: "hidden",
      transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
    };
  }

  function rowStyle(delay) {
    return { animation: "fadeUp 0.35s ease both", animationDelay: delay };
  }

  var a1 = "#E8380D";
  var l1 = "#FFF1EE";
  var a2 = "#0958D9";
  var l2 = "#EEF4FF";
  var a3 = "#047857";
  var l3 = "#EDFAF4";
  var a4 = "#6D28D9";
  var l4 = "#F4F0FF";
  var a5 = "#B7188A";
  var l5 = "#FEF0F9";
  var a6 = "#0369A1";
  var l6 = "#EFF8FF";
  var a7 = "#B45309";
  var l7 = "#FFFBEB";

  var s0 = activeStep === 0;
  var s1 = activeStep === 1;
  var s2 = activeStep === 2;
  var s3 = activeStep === 3;
  var s4 = activeStep === 4;
  var s5 = activeStep === 5;
  var s6 = activeStep === 6;

  return (
    <div>
      {/* Header */}
      <div className="w-full mx-auto mb-10 text-center">
        <p className="text-[#6B7280] text-lg max-w-xl mx-auto leading-relaxed"></p>
        <div className="w-full space-y-2 text-center">
          <h1 className="leading-normal text-2xl sm:text-[36px] font-semibold text-gray-900">
            Design Process
          </h1>
          <p className="leading-8 text-[18px] max-w-2xl mx-auto text-gray-600">
            A structured, research-led approach to creating digital experiences
            that are intuitive, scalable, and impactful.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[2.35rem] top-10 bottom-10 w-0.5 hidden md:block rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #E8380D22, #0958D922, #04785722, #6D28D922, #B7188A22, #0369A122, #B4530922)",
            }}
          />

          <div className="space-y-2 sm:space-y-3">
            {/* ── STEP 01 ── */}
            <div
              className="relative flex gap-2 md:gap-7 items-start"
              style={rowStyle("0ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(0);
                }}
                style={iconBoxStyle(s0, a1)}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 8v4l3 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s0, a1)}
                onClick={function () {
                  toggle(0);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a1, minWidth: "2rem" }}
                    >
                      01
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Understanding the Why
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        Discovery & Problem Definition
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s0, a1)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s0 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s0)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a1 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a1 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      I begin by understanding business objectives, target
                      users, and measurable success metrics. Through stakeholder
                      interviews and goal alignment sessions, I translate vague
                      briefs into clear, actionable design direction.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a1, l1)}
                      >
                        Stakeholder Interviews
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a1, l1)}
                      >
                        Business Goals
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a1, l1)}
                      >
                        KPI Definition
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a1, l1)}
                      >
                        Requirement Breakdown
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 02 ── */}
            <div
              className="relative flex gap-4 md:gap-7 items-start"
              style={rowStyle("55ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(1);
                }}
                style={iconBoxStyle(s1, a2)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s1, a2)}
                onClick={function () {
                  toggle(1);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a2, minWidth: "2rem" }}
                    >
                      02
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Listening Before Designing
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        User Research & Insights
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s1, a2)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s1 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s1)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a2 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a2 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      Through structured research and competitor analysis, I
                      identify usability gaps and opportunity areas. Personas,
                      pain point mapping, and journey maps form the backbone of
                      every informed design decision.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a2, l2)}
                      >
                        User Personas
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a2, l2)}
                      >
                        Pain Point Mapping
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a2, l2)}
                      >
                        Competitor Audit
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a2, l2)}
                      >
                        Journey Mapping
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 03 ── */}
            <div
              className="relative flex gap-4 md:gap-7 items-start"
              style={rowStyle("110ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(2);
                }}
                style={iconBoxStyle(s2, a3)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <rect
                    x="14"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s2, a3)}
                onClick={function () {
                  toggle(2);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a3, minWidth: "2rem" }}
                    >
                      03
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Structure Over Aesthetics
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        Information Architecture
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s2, a3)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s2 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s2)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a3 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a3 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      I design intuitive information architecture to reduce
                      friction and improve user clarity. Sitemaps, user flows,
                      and content hierarchies are built before any pixel is
                      placed — structure first, beauty second.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a3, l3)}
                      >
                        Sitemap
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a3, l3)}
                      >
                        User Flows
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a3, l3)}
                      >
                        Content Structure
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a3, l3)}
                      >
                        Navigation Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 04 ── */}
            <div
              className="relative flex gap-4 md:gap-7 items-start"
              style={rowStyle("165ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(3);
                }}
                style={iconBoxStyle(s3, a4)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M3 9h18M9 21V9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s3, a4)}
                onClick={function () {
                  toggle(3);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a4, minWidth: "2rem" }}
                    >
                      04
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Validate Fast, Iterate Faster
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        Wireframing & Prototyping
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s3, a4)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s3 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s3)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a4 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a4 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      Early-stage wireframes help validate ideas quickly before
                      investing in high-fidelity visuals. Interactive Figma
                      prototypes are tested with real users to eliminate
                      assumptions and surface usability issues early.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a4, l4)}
                      >
                        Lo-Fi Wireframes
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a4, l4)}
                      >
                        Interactive Prototypes
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a4, l4)}
                      >
                        Rapid Iteration
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a4, l4)}
                      >
                        Usability Testing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 05 ── */}
            <div
              className="relative flex gap-4 md:gap-7 items-start"
              style={rowStyle("220ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(4);
                }}
                style={iconBoxStyle(s4, a5)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s4, a5)}
                onClick={function () {
                  toggle(4);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a5, minWidth: "2rem" }}
                    >
                      05
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Scalable, Accessible, Consistent
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        UI Design & Design Systems
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s4, a5)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s4 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s4)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a5 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a5 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      I create scalable design systems ensuring consistency,
                      performance, and long-term maintainability.
                      Component-based architecture, WCAG accessibility
                      standards, and responsive layouts define every screen.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a5, l5)}
                      >
                        Component Library
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a5, l5)}
                      >
                        Scalable UI
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a5, l5)}
                      >
                        Accessibility
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a5, l5)}
                      >
                        Responsive Layouts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 06 ── */}
            <div
              className="relative flex gap-4 md:gap-7 items-start"
              style={rowStyle("275ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(5);
                }}
                style={iconBoxStyle(s5, a6)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s5, a6)}
                onClick={function () {
                  toggle(5);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a6, minWidth: "2rem" }}
                    >
                      06
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Design That Ships
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        Collaboration & Handoff
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s5, a6)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s5 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s5)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a6 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a6 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      I work closely with developers to ensure pixel-accurate
                      implementation and smooth delivery. Annotated specs,
                      design tokens, and active QA reviews bridge the gap
                      between vision and production reality.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a6, l6)}
                      >
                        Dev Collaboration
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a6, l6)}
                      >
                        Design Docs
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a6, l6)}
                      >
                        Frontend Feasibility
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a6, l6)}
                      >
                        QA Review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 07 ── */}
            <div
              className="relative flex gap-4 md:gap-7 items-start"
              style={rowStyle("330ms")}
            >
              <div
                className="relative z-10 flex-shrink-0 w-[4.7rem] h-[4.7rem] rounded-2xl hidden sm:flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
                onClick={function () {
                  toggle(6);
                }}
                style={iconBoxStyle(s6, a7)}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M23 6l-9.5 9.5-5-5L1 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 6h6v6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={cardStyle(s6, a7)}
                onClick={function () {
                  toggle(6);
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-18 font-medium tracking-widest select-none"
                      style={{ color: a7, minWidth: "2rem" }}
                    >
                      07
                    </span>
                    <div className="w-px h-6 bg-[#E5E7EB]" />
                    <div>
                      <p className="text-xs font-normal tracking-wider uppercase text-[#6c7179] mb-0.5">
                        Launch Is Just the Beginning
                      </p>
                      <h3 className="text-base md:text-lg font-medium text-[#111827] leading-snug">
                        Optimization & Iteration
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={arrowStyle(s6, a7)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: s6 ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div style={expandStyle(s6)}>
                  <div
                    className="px-6 pb-6"
                    style={{ borderTop: "1px solid " + a7 + "22" }}
                  >
                    <div
                      className="h-0.5 w-12 rounded-full mb-4 mt-5"
                      style={{ background: a7 }}
                    />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      Post-launch optimization is critical to refining user
                      experience and improving conversion metrics. Data-driven
                      iterations, user feedback loops, and continuous UX
                      refinement keep the product evolving.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a7, l7)}
                      >
                        User Feedback
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a7, l7)}
                      >
                        Performance Analysis
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a7, l7)}
                      >
                        UX Improvements
                      </span>
                      <span
                        className="text-sm font-medium px-3 py-1.5 rounded-lg"
                        style={tagStyle(a7, l7)}
                      >
                        Continuous Refinement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="mt-14 text-center">
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium"
            style={{
              background: "#fff",
              border: "1.5px solid #E5E7EB",
              color: "#9CA3AF",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            Click any step to explore details
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
