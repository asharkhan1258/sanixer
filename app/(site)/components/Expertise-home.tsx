"use client";

import { useState } from "react";
import HomeData from "@/app/data/Home.json";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 mb-4 overflow-hidden">
      {/* Orange accent line */}
      <div
        className={`h-0 bg-gradient-to-r from-white to-white transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-50"}`}
      ></div>

      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none group-hover:bg-gray-50/50 transition-colors duration-300"
      >
        <h3 className="text-lg lg:text-xl font-semibold text-gray-800  transition-colors duration-300 pr-4">
          {title}
        </h3>
        <div
          className={`p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 flex-shrink-0 ${isOpen ? "bg-white text-black" : "text-black"}`}
        >
          <svg
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#F26522] to-transparent mb-4 opacity-70"></div>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CoreExpertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Next-Gen CMS & Headless Architecture",
      content:
        "Transform your content strategy with cutting-edge CMS and headless solutions (Contentful, Strapi, etc.)—scalable, API-first platforms for seamless omnichannel experiences.",
    },
    {
      title: "AI & Intelligent Automation",
      content:
        "Harness AI-driven workflows and predictive analytics to automate decisions, enhance customer experiences, and drive innovation across your business processes.",
    },
    {
      title: "End-to-End Process Automation",
      content:
        "Revolutionize workflows with intelligent automation, reducing manual tasks and optimizing operations for agility, accuracy, and cost efficiency.",
    },
    {
      title: "Tailored Software Development",
      content:
        "Build custom, high-performance applications designed for your exact needs—agile development, robust architecture, and future-proof scalability.",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="mb-8 flex flex-col">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#F26522]/10 text-[#F26522] text-sm font-semibold rounded-full uppercase tracking-wide">
              Our Expertise
            </span>
          </div>

          <h3
            className="xl:text-5xl lg:text-4xl text-3xl font-bold mb-6 leading-tight"
            style={{
              background:
                "black",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {HomeData.expertiseHome.title}
          </h3>

          <div className="xl:mt-8 lg:text-xl text-base font-medium lg:mt-6 xl:pr-36 tracking-normal">
            <p className="text-gray-600 leading-relaxed">
              {HomeData.expertiseHome.description}
            </p>
          </div>
        </div>

        {/* Expertise Includes Section */}
        <div className="mb-6">
          <h4 className="md:text-2xl text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-0.5 bg-[#F26522] mr-3"></span>
            Our expertise includes:
          </h4>
        </div>

        {/* Accordion Container */}
        <div className="min-h-[400px]">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
