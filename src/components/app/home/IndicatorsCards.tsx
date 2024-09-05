"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { IndicatorsBaseCard } from "./IndicatorsBaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface IndicatorsProps {
  name: string;
  value: number;
  trendingUp: boolean;
  trendingValue: number;
}

export function IndicatorsCards() {
  const [facebookIndicators, setFacebookIndicators] = useState<
    IndicatorsProps[] | null
  >(null);
  const [instagramIndicators, setInstagramIndicators] = useState<
    IndicatorsProps[] | null
  >(null);
  const [tiktokIndicators, setTiktokIndicators] = useState<
    IndicatorsProps[] | null
  >(null);
  const [youtubeIndicators, setYoutubeIndicators] = useState<
    IndicatorsProps[] | null
  >(null);
  const [indicators, setIndicators] = useState<IndicatorsProps[]>([]);
  const { socialMediaData, isGettingData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookIndicators(socialMediaData.profileEvolution.facebook);
      setInstagramIndicators(socialMediaData.profileEvolution.instagram);
      setTiktokIndicators(socialMediaData.profileEvolution.tiktok);
      setYoutubeIndicators(socialMediaData.profileEvolution.youtube);
    }
  }, [socialMediaData]);

  useEffect(() => {
    const allIndicators = [
      facebookIndicators,
      instagramIndicators,
      tiktokIndicators,
      youtubeIndicators,
    ];
    if (allIndicators.filter((x) => x).length > 0) {
      const result = allIndicators
        .filter((x) => x)
        .flat()
        .reduce<Record<string, IndicatorsProps>>((acc, item) => {
          const { name, value, trendingValue } = item as IndicatorsProps;

          if (!acc[name]) {
            acc[name] = {
              name,
              value: 0,
              trendingUp: false,
              trendingValue: 0,
            };
          }
          acc[name].value += value;
          acc[name].trendingValue += trendingValue;
          return acc;
        }, {});
      setIndicators(Object.values(result));
    }
  }, [
    facebookIndicators,
    instagramIndicators,
    tiktokIndicators,
    youtubeIndicators,
  ]);

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
      centeredSlides={indicators.length === 0 && !isGettingData}
    >
      {isGettingData ? (
        <>
          <SwiperSlide className="py-2">
            <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
              <Skeleton className="h-10 w-full" />
            </BaseCard>
          </SwiperSlide>
          <SwiperSlide className="py-2">
            <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
              <Skeleton className="h-10 w-full" />
            </BaseCard>
          </SwiperSlide>
          <SwiperSlide className="py-2">
            <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
              <Skeleton className="h-10 w-full" />
            </BaseCard>
          </SwiperSlide>
        </>
      ) : indicators.length === 0 ? (
        <SwiperSlide className="py-2">
          <BaseCard className="relative h-36 items-center justify-center overflow-hidden">
            <span className="text-center text-lg font-semibold italic">
              Nenhum dado Encontrado no Período Selecionado
            </span>
          </BaseCard>
        </SwiperSlide>
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
