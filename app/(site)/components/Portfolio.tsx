"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = ["LOGO DESIGN", "WEB DESIGN", "BRANDING"];

const portfolioData: Record<string, string[]> = {
  "LOGO DESIGN": [
    "/images/logo-1.jpg",
    "/images/logo-2.jpg",
    "/images/logo-3.jpg",
    "/images/logo-4.jpg",
    "/images/logo-5 - Copy.jpg",
    "/images/logo-6.jpg",
    "/images/logo-7.jpg",
    "/images/logo-8.jpg",
    "/images/logo-9.jpg",
  ],
  "WEB DESIGN": [
    "/images/web-1.avif",
    "/images/web-2.avif",
    "/images/web-3.avif",
    "/images/web-4.avif",
    "/images/web-5.avif",
    "/images/web-6.avif",
    "/images/web-7.avif",
    "/images/web-8.avif",
    "/images/web-9.avif",
  ],
  "BRANDING": [
    "/images/br-1.avif",
    "/images/br-2.webp",
    "/images/br-3.png",
    "/images/br-4.webp",
    "/images/br-5.jpg",
    "/images/br-6.jpg",
    "/images/br-7.jpg",
    "/images/br-8.jpg",
    "/images/br-9.jpg",
  ],
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("LOGO DESIGN");

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <p className="text-sm tracking-widest text-[#f26522]">
          PORTFOLIO - SHOWCASE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-10">
          Our Work For Clients
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-5 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full shadow-md font-semibold transition-all duration-300
              ${
                activeTab === tab
                   ? "bg-[#f26522] text-white border-[#f26522]"
                    : "bg-white hover:bg-[#f26522] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData[activeTab].map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt="portfolio"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-[#f26522] hover:bg-[#f26522] text-white px-8 py-3 rounded-lg shadow-md transition">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
