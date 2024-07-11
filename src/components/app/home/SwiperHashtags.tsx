"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/swiper-bundle.css";
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
      <Swiper ref={sliderRef} slidesPerView={4} spaceBetween={30}>
        {hashtag.map((item) => (
          <SwiperSlide key={item.id} style={{ maxWidth: "300px" }}>
            <HashtagCard hashtag={item.hashtag} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrev}
          className="h-8 w-32 rounded-full bg-blue-500 text-white"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="h-8 w-32 rounded-full bg-blue-500 text-white"
        >
          Próximo
        </button>
      </div>
    </>
  );
}
