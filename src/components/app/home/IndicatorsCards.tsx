"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { IndicatorsBaseCard } from "./IndicatorsBaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

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
  const [indicators, setIndicators] = useState<IndicatorsProps[] | null>([]);
  const { socialMediaData } = useSocialMediaDataContext();

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
    if (allIndicators.filter((x) => x !== null).length > 0) {
      const result = allIndicators
        .filter((x) => x !== null)
        .flat()
        .reduce<Record<string, IndicatorsProps>>((acc, item) => {
          const { name, value, trendingValue } = item;

          if (!acc[name]) {
            // Se o objeto com o nome ainda não existe no acumulador, cria-o
            acc[name] = {
              name,
              value: 0,
              trendingUp: false,
              trendingValue: 0,
            };
          }

          // Soma os valores
          acc[name].value += value;
          acc[name].trendingValue += trendingValue;

          // Soma os valores de evolution por índice
          // acc[name].evolution.push(...evolution);

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
        1440: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {indicators &&
        indicators.map((data, index) => (
          <SwiperSlide className="py-2" key={index}>
            <IndicatorsBaseCard IndicatorsData={data} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
