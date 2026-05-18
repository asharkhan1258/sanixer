"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import HomeData from "@/app/data/Home.json";

const HomePageSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000}
      modules={[Autoplay]}
      className="w-full"
    >
      {HomeData.homeSlider.map((slide, index) => {
        const parts = slide.title.split(
          new RegExp(`(${slide.highlightWord})`, "gi")
        );

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center text-center px-4 py-4">
              <h2
                className="lg:text-5xl md:text-4xl text-3xl font-bold md:mb-6 mb-3 leading-tight text-white"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.25)",
                }}
              >
                {parts.map((part, i) =>
                  part.toLowerCase() === slide.highlightWord.toLowerCase() ? (
                    <span key={i} className="text-[#F26522]">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </h2>

              <p className="lg:text-xl md:text-lg text-base text-gray-200 leading-relaxed max-w-4xl mx-auto">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomePageSlider;
