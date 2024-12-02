"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { LuFigma } from "react-icons/lu";
import { SiAdobephotoshop } from "react-icons/si";

export default function CaseStudyCarRentalMobileApp() {
  return (
    <>
      <div className="w-full bg-gray-50 pt-4 md:pt-20 pb-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <main className="max-w-7xl mx-auto space-y-10">
            {/* Introduction Section */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-lg text-gray-700">
                The Car Rental Mobile App aims to simplify the process of
                renting cars with features such as easy car selection, booking,
                and payment integration.
              </p>
            </section>

            {/* Problem Statement */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Problem Statement
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Customer Pain Points:</strong> Difficulty finding
                  cars, complicated booking process, lack of transparency in
                  pricing and availability.
                </li>
                <li>
                  <strong>Business Pain Points:</strong> Inefficient reservation
                  systems, manual fleet management processes, and lack of
                  real-time updates.
                </li>
              </ul>
            </section>

            {/* Research */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Research
              </h2>
              <p className="text-lg text-gray-700">
                We conducted market and user research to understand the pain
                points and preferences of users. This helped us design an
                intuitive solution that meets both customer and business needs.
              </p>
            </section>

            {/* User Persona */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                User Persona
              </h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  <strong>Persona 1: Traveler</strong> – Needs a car for a few
                  days while visiting a new city. Values convenience and GPS
                  navigation.
                </p>
                <p>
                  <strong>Persona 2: Business Professional</strong> – Rents a
                  car for work-related travel. Requires reliability and
                  cost-effectiveness.
                </p>
                <p>
                  <strong>Persona 3: Local Resident</strong> – Needs a car for a
                  few hours or a weekend. Interested in flexible pricing and
                  quick booking.
                </p>
              </div>
            </section>

            {/* Features & Functionality */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Features & Functionality
              </h2>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>User Features:</strong> Car search, booking system,
                  secure payment options, booking history, car delivery/pickup,
                  and ratings/reviews.
                </li>
                <li>
                  <strong>Admin Features:</strong> Fleet management, booking
                  management, payment management, and analytics.
                </li>
              </ul>
            </section>

            {/* Design Process */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Design Process
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We started by creating wireframes and prototypes to visualize
                the user journey. These designs were iterated based on user
                testing and feedback.
              </p>
              <img
                src="/path/to/your/wireframe-image.png"
                alt="Wireframe"
                className="w-full h-auto mb-4"
              />
            </section>

            {/* Development Process */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Development Process
              </h2>
              <p className="text-lg text-gray-700">
                The app was built using Next.js for the frontend and Node.js for
                the backend. Tailwind CSS was used for styling to ensure a
                responsive design.
              </p>
            </section>

            {/* Testing & QA */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Testing & QA
              </h2>
              <p className="text-lg text-gray-700">
                The app underwent extensive testing, including user acceptance
                testing, functional testing, and performance testing, to ensure
                it met user expectations.
              </p>
            </section>

            {/* Launch & Marketing */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Launch & Marketing
              </h2>
              <p className="text-lg text-gray-700">
                The app was launched with a marketing campaign targeting users
                through social media, email campaigns, and partnerships with
                influencers.
              </p>
            </section>

            {/* Results & Impact */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Results & Impact
              </h2>
              <p className="text-lg text-gray-700">
                The app received positive feedback, with increased downloads and
                improved customer retention. Key metrics include a 30% increase
                in active users and high ratings in app stores.
              </p>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Conclusion
              </h2>
              <p className="text-lg text-gray-700">
                The Car Rental Mobile App successfully solved the pain points of
                both users and businesses. Future iterations will focus on
                expanding locations, adding more vehicle types, and improving
                fleet management.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
