import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
interface SliderProps<T> {
  data: T[]; // Array de dados de qualquer tipo (políticos, notícias, hashtags)
  children: (item: T) => ReactNode; // Função que renderiza cada item
}

// Componente Swiper genérico
export const SwiperComponent = <T,>({ data, children }: SliderProps<T>) => {
  return (
    <Swiper slidesPerView="auto" spaceBetween={20} navigation>
      {data.map((item, index) => (
        <SwiperSlide key={index}>{children}</SwiperSlide>
      ))}
    </Swiper>
  );
};
