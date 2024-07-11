import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PerfilCard } from "../social-media/PerfilCard";

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
  return (
    <>
      <div className="flex w-full">
        <Swiper ref={sliderRef} slidesPerView={3.5} spaceBetween={100}>
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
