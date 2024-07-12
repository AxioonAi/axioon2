"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import "swiper/swiper-bundle.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HashtagCard } from "../social-media/HashtagCard";

interface hashtag {
  id: number;
  hashtag: string;
}

export function SwiperHashtag({ hashtag }: { hashtag: hashtag[] }) {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef?.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideNext();
  }, []);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1400) {
      setSlidesPerView(3.5); // Desktop large
    } else if (width >= 1200) {
      setSlidesPerView(3); // Desktop
    } else if (width >= 768) {
      setSlidesPerView(2); // Tablet
    } else {
      setSlidesPerView(1.2); // Mobile
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
        <Swiper ref={sliderRef} slidesPerView={slidesPerView} spaceBetween={30}>
          {hashtag.map((item) => (
            <SwiperSlide key={item.id} className="py-2">
              <HashtagCard hashtag={item.hashtag} />
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
