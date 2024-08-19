"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCookies } from "next-client-cookies";
import { PerfilCard } from "../parameters/PerfilCard";
import "swiper/swiper-bundle.css";
import { CardWithTitleAndButton } from "../parameters/CardWithTitleAndButton";
import { authGetAPI, token as Token } from "@/lib/axios";
import { Skeleton } from "@/components/global/Skeleton";

register();

interface Politician {
  campaignNumber: number;
  city: string;
  facebook: string;
  id: string;
  image: string;
  instagram: string;
  name: string;
  politicalGroup: string;
  tiktok: string;
  youtube: string;
}
export function SwiperPoliticians() {
  const cookies = useCookies();
  const sliderRef = useRef<SwiperRef>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [politicians, setPoliticians] = useState<Politician[]>([]);
  const [isGettingData, setIsGettingData] = useState(true);

  async function GetPoliticians() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const politicians = await authGetAPI("/profile/monitoring", token);
    if (politicians.status === 200) {
      setPoliticians(politicians.body.profile);
      return setIsGettingData(false);
    }
    return setIsGettingData(false);
  }

  useEffect(() => {
    GetPoliticians();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
    <div className="flex w-full flex-col gap-4">
      <div className="col-span-12 rounded-md bg-white shadow-md">
        <CardWithTitleAndButton
          title="Perfis Monitorados"
          buttonText="3 de 5 disponíveis"
          hasTwoButtons={true}
          secondButtonText="Novo Perfil"
        />
      </div>
      <div className="flex w-full">
        {isGettingData ? (
          <Swiper
            ref={sliderRef}
            slidesPerView={slidesPerView}
            spaceBetween={100}
          >
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-[9.5rem] w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-[9.5rem] w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-[9.5rem] w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-[9.5rem] w-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
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
        )}
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
    </div>
  );
}
