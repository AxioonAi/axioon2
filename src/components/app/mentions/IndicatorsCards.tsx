"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { IndicatorsBaseCard } from "./IndicatorsBaseCard";
import { IndicatorsBaseCardData } from "@/components/data/HomeData";

export function IndicatorsCards() {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {IndicatorsBaseCardData.map((data, index) => (
        <SwiperSlide className="py-2" key={index}>
          <IndicatorsBaseCard
            IndicatorsData={data.IndicatorsData}
            ChartOptions={data.ChartOptions}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
