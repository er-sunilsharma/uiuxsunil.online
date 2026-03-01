"use client";
import { useState } from "react";
import {
  DesignProcess,
  LearningAndGrowth,
  CommunityImpact,
} from "@/comps/common";

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("Design Process");

  const tabs = ["Design Process", "Learning & Growth", "Community Impact"];

  const renderContent = () => {
    switch (activeTab) {
      case "Design Process":
        return <DesignProcess />;

      case "Learning & Growth":
        return <LearningAndGrowth />;

      case "Community Impact":
        return <CommunityImpact />;

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white pb-0 md:pb-16 pt-16 sm:pt-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-4 sm:mb-8 space-y-3 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-normal">
            Beyond the <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="leading-8 text-[19px] max-w-2xl mx-auto text-gray-600">
            A closer look at my design methodology, continuous growth, and
            meaningful contributions through social impact initiatives.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 pb-6 mb-3 sm:mb-6">
          {tabs.map((tab) => {
            const isDisabled = tab === "Community Impact";

            return (
              <button
                key={tab}
                onClick={() => !isDisabled && setActiveTab(tab)}
                disabled={isDisabled}
                className={`px-6 py-2 rounded-full text-[15px] font-medium transition-all border duration-300
          ${
            isDisabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : activeTab === tab
                ? "animated-gradient-bg text-white shadow-lg"
                : "bg-gray-50 text-gray-600 border hover:bg-gray-100"
          }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Animated Content Box */}
        <div
          key={activeTab}
          style={{
            background: "#f7f7f7",
          }}
          className="transition-all duration-300 animate-fadeIn w-full px-3 pt-12 md:px-10 pb-14 rounded-xl"
        >
          {renderContent()}
        </div>
      </div>

      {/* Fade Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
