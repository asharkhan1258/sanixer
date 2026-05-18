"use client";
import { useState } from "react";

const tabs = [
  "LOGO DESIGN",
  "WEB DESIGN",
  "BRANDING",
  "SOCIAL MEDIA",
  "SOCIAL MEDIA POST DESIGN",
];

const plans = [
  {
    title: "BASIC",
    price: "$29.99",
    desc: "Simple yet impactful logo design to kickstart your brand.",
    features: [
      "1 unique logo concept",
      "2 rounds of revisions",
      "Includes JPEG file",
    ],
  },
  {
    title: "STANDARD",
    price: "$59.99",
    desc: "Strategic design with creative touches for a stronger brand identity.",
    features: [
      "2 unique logo concepts",
      "4 rounds of revisions",
      "JPEG, PNG, PDF",
    ],
  },
  {
    title: "SILVER",
    price: "$99.99",
    desc: "Premium craftsmanship for a logo that stands out and connects.",
    features: [
      "4 unique logo concepts",
      "6 rounds of revisions",
      "JPEG, PNG, PSD, PDF",
    ],
  },
  {
    title: "GOLD LOGO",
    price: "$149.99",
    desc: "Elite design expertise for a timeless, high-impact brand symbol.",
    features: [
      "6 unique logo concepts",
      "Unlimited revisions",
      "Source files in various formats",
      "Business card design",
    ],
  },
  {
    title: "PLATINUM LOGO",
    price: "$199.99",
    desc: "Elite design expertise for a timeless, high-impact brand symbol.",
      features: [
    "8 Unique Custom Logo Concepts",
    "Unlimited Revisions",
    "Complete Source Files",
    "100% Ownership",
    "Free Icon File",
    "Free Color Options",
    "Free Grayscale File",
    "Free Stationery Designs",
    "Letterhead, Envelope, Business Cards",
  ],
  },
  {
    title: "3D DESIGN RENDERS",
    price: "$244.99",
    desc: "Elite design expertise for a timeless, high-impact brand symbol.",
      features: [
    "4 Concepts – Custom Renders",
    "2 Business Logo Designs",
    "Complete Files for Design Including Source File",
    "Color Options",
    "Facebook Banner & Icons",
    "Complete Stationery",
  ],
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("LOGO DESIGN");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">

        <h2 className="text-[35px] font-bold text-[#f36522]">Let’s keep it simple</h2>
        <span>Choose a plan that’ right of tou.</span>
        </div>
      <div className="max-w-7xl mx-auto ">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full shadow-md border text-lg font-bold transition
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

        {/* Content */}
        {activeTab === "LOGO DESIGN" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-[25px] font-bold mb-2">{plan.title}</h3>
                <p className="text-[16px] text-gray-500 mb-4">{plan.desc}</p>

                <h2 className="text-4xl font-extrabold mb-6 text-[#f26522]">
                  {plan.price}
                </h2>

                <button className="bg-[#f26522] text-white px-6 py-2 rounded-md mb-3 hover:bg-orange-600 transition">
                  Get Started
                </button>

                <p className="text-sm underline mb-5 cursor-pointer text-[#f26522]">
                  Message Us
                </p>

  <ul className="text-lg text-gray-600 space-y-2 text-left max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#f26522] scrollbar-track-gray-100">

  {plan.features.map((feature, idx) => (
    <li key={idx}>{feature}</li>
  ))}
</ul>

              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="  px-12 py-16 text-center">
              
              <h1 className="text-[70px] font-semibold text-gray-300">
                 Coming Soon
              </h1>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
