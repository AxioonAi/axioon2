"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SocialMediaBaseCard } from "./SocialMediaBaseCard";
import { SocialMediaBaseData } from "@/components/data/HomeData";

export function HeaderCards() {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {SocialMediaBaseData.map((data, index) => (
        <SwiperSlide key={index} className="py-2">
          <SocialMediaBaseCard SocialMediaData={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
