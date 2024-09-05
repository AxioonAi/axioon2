"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { IndicatorsBaseCard } from "./IndicatorsBaseCard";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { Skeleton } from "@/components/global/Skeleton";
import { useAdsDataContext } from "@/context/AdsData";

interface IndicatorsProps {
  name: string;
  value: number;
}

export function IndicatorsCards() {
  const [indicators, setIndicators] = useState<IndicatorsProps[]>([]);
  const { adsData, isGettingData } = useAdsDataContext();

  useEffect(() => {
    if (adsData) {
      setIndicators([
        {
          name: "Anúncios",
          value: adsData?.total_ads || 0,
        },
        {
          name: "Valor Gasto",
          value: adsData?.total_spend || 0,
        },
        {
          name: "Público Atingido",
          value: adsData?.total_impressions || 0,
        },
      ]);
    }
  }, [adsData]);

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
        1360: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {isGettingData ? (
        <>
          <SwiperSlide className="py-2">
            <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
              <Skeleton className="h-36 w-full" />
            </BaseCard>
          </SwiperSlide>
          <SwiperSlide className="py-2">
            <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
              <Skeleton className="h-36 w-full" />
            </BaseCard>
          </SwiperSlide>
          <SwiperSlide className="py-2">
            <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
              <Skeleton className="h-36 w-full" />
            </BaseCard>
          </SwiperSlide>
        </>
      ) : (
        indicators?.map((data, index) => (
          <SwiperSlide className="py-2" key={index}>
            <IndicatorsBaseCard IndicatorsData={data} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
