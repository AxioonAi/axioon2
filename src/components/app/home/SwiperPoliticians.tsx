import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import { PerfilCard } from "../social-media/PerfilCard";
import "swiper/swiper-bundle.css";

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
      <Swiper ref={sliderRef} slidesPerView={4} spaceBetween={100}>
        {politicians.map((politician) => (
          <SwiperSlide key={politician.id} style={{ maxWidth: "300px" }}>
            <PerfilCard politician={politician} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => handlePrev()}
          className="h-8 w-32 rounded-full bg-blue-500 text-white"
        >
          Anterior
        </button>
        <button
          onClick={() => handleNext()}
          className="h-8 w-32 rounded-full bg-blue-500 text-white"
        >
          Próximo
        </button>
      </div>
    </>
  );
}
