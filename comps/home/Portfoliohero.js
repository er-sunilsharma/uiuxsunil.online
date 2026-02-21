"use client";

import { useEffect, useRef } from "react";

import Profile from "./../../public/sunilsharma_profile.png";
import Image from "next/image";

export default function PortfolioHero() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollAmount += scrollSpeed;
      if (marquee) {
        marquee.style.transform = `translateX(-${scrollAmount}px)`;

        // Reset when first set of images has scrolled past
        if (scrollAmount >= marquee.offsetWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated Background Marquee */}
      <div className="absolute inset-0 flex items-center opacity-40 pointer-events-none">
        <div ref={marqueeRef} className="flex gap-6 will-change-transform">
          {/* First set of cards */}
          <MarqueeCard
            image="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400&h=500&fit=crop"
            blur={true}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=500&fit=crop"
            text="Thoughtful UI/UX. Real impact."
            blur={false}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1679168429230-e15dd17e9c05?w=400&h=500&fit=crop"
            blur={true}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=500&fit=crop"
            text="Clarity, Strategy"
            gradient="lime"
            blur={false}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
            text="Crafting user-centered interfaces backed by research and logic."
            blur={false}
          />

          {/* Duplicate set for seamless loop */}
          <MarqueeCard
            image="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400&h=500&fit=crop"
            blur={true}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=500&fit=crop"
            text="Thoughtful UI/UX. Real impact."
            blur={false}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1679168429230-e15dd17e9c05?w=400&h=500&fit=crop"
            blur={true}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=500&fit=crop"
            text="talent, growth"
            gradient="lime"
            blur={false}
          />
          <MarqueeCard
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
            text="Crafting user-centered interfaces backed by research and logic."
            blur={false}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Right side - Hero Image */}
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <div className="aspect-[3/4] w-full rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src={Profile}
                  alt="Portrait"
                  width="0"
                  height="500"
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Marquee Card Component
function MarqueeCard({ image, text, gradient, blur }) {
  return (
    <div
      className={`flex-shrink-0 w-64 sm:w-80 h-96 rounded-2xl overflow-hidden shadow-lg ${blur ? "blur-sm" : ""}`}
    >
      <div className="relative w-full h-full">
        <img src={image} alt="" className="w-full h-full object-cover" />
        {text && (
          <div
            className={`absolute inset-0 flex items-center justify-center p-6 ${
              gradient === "lime"
                ? "bg-gradient-to-br from-lime-300 to-lime-400"
                : "bg-white/90 backdrop-blur-sm"
            }`}
          >
            <p
              className={`text-2xl sm:text-3xl font-medium text-center ${
                gradient === "lime" ? "text-gray-900" : "text-gray-900"
              }`}
            >
              {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
