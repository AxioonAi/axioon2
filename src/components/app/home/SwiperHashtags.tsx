"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
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

  return (
    <>
      <div className="flex w-full">
        <Swiper ref={sliderRef} slidesPerView={3.5} spaceBetween={30}>
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
