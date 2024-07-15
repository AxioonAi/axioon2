"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PerfilCard } from "../parameters/PerfilCard";
import "swiper/swiper-bundle.css";
register();

interface Politician {
  id: number;
  name: string;
  city: string;
  socialMedia: {
    youtube: string;
    tiktok: string;
    instagram: string;
    facebook: string;
  };
}
export function SwiperPoliticians({
  politicians,
}: {
  politicians: Politician[];
}) {
  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1400) {
      setSlidesPerView(3.5); // Desktop large
    } else if (width >= 1200) {
      setSlidesPerView(3); // Desktop
    } else if (width >= 1000) {
      setSlidesPerView(2.4); // Tablet
    } else if (width >= 760) {
      setSlidesPerView(1.6); // Tablet
    } else if (width >= 430) {
      setSlidesPerView(1.4); // Tablet
    } else {
      setSlidesPerView(1); // Mobile
    }
  }, []);

  useLayoutEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [updateSlidesPerView]);
  return (
    <>
      <div className="flex w-full">
        <Swiper
          ref={sliderRef}
          slidesPerView={slidesPerView}
          spaceBetween={100}
        >
          {politicians.map((politician) => (
            <SwiperSlide key={politician.id} className="py-2">
              <PerfilCard politician={politician} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => handlePrev()}
          className="flex h-8 w-8 items-center justify-center rounded bg-white p-2 shadow-md"
        >
          <ChevronLeft className="stroke-[3]" />
        </button>
        <button
          onClick={() => handleNext()}
          className="flex h-8 w-8 items-center justify-center rounded bg-white p-2 shadow-md"
        >
          <ChevronRight className="stroke-[3]" />
        </button>
      </div>
    </>
  );
}
