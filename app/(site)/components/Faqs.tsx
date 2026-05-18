import React from "react";
import HomeData from "@/app/data/Home.json";

const Faqs = async () => {
  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="grid gap-6 md:gap-8">
        {HomeData.faqs.map((faq, index) => {
          return (
            <div
              key={index}
              className="group bg-white  shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <details className="group/details">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none  transition-colors duration-200">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Question Number Badge */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#F26522] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Question Text */}
                    <h3 className="text-[#000000] font-semibold text-base md:text-lg lg:text-xl leading-relaxed pr-4">
                      {faq.title}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10  rounded-full flex items-center justify-center transition-transform duration-300 group-open/details:rotate-45">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>

                {/* Answer Content */}
                <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="p-6 md:p-8 pl-20 md:pl-24">
                    <div className="relative">
                      {/* Orange accent line */}
                      <div className="absolute -left-4 top-0 w-1 h-full  rounded-full opacity-30"></div>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                        {faq.content}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
