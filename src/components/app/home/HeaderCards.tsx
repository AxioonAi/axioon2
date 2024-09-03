"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { SocialMediaBaseCard } from "./SocialMediaBaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface platformDataProps {
  followers: number;
  following: number;
  name: string;
  posts: number;
  username?: string;
}

export function HeaderCards() {
  const { staticData } = useSocialMediaDataContext();

  const [staticFacebookData, setStaticFacebookData] = useState<
    platformDataProps | null | undefined
  >(null);
  const [staticInstagramData, setStaticInstagramData] = useState<
    platformDataProps | null | undefined
  >(null);
  const [staticTiktokData, setStaticTiktokData] = useState<
    platformDataProps | null | undefined
  >(null);
  const [staticYoutubeData, setStaticYoutubeData] = useState<
    platformDataProps | null | undefined
  >(null);

  useEffect(() => {
    if (staticData) {
      setStaticFacebookData(
        staticData?.staticData.facebookData
          ? staticData.staticData.facebookData
          : null,
      );
      setStaticInstagramData(
        staticData?.staticData.instagramData
          ? staticData.staticData.instagramData
          : null,
      );
      setStaticTiktokData(
        staticData?.staticData.tiktokData
          ? staticData.staticData.tiktokData
          : null,
      );
      setStaticYoutubeData(
        staticData?.staticData.youtubeData
          ? staticData.staticData.youtubeData
          : null,
      );
    }
  }, [staticData]);

  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide className="py-1">
        <SocialMediaBaseCard
          SocialMediaData={staticInstagramData}
          platform="Instagram"
        />
      </SwiperSlide>
      <SwiperSlide className="py-1">
        <SocialMediaBaseCard
          SocialMediaData={staticFacebookData}
          platform="Facebook"
        />
      </SwiperSlide>
      <SwiperSlide className="py-1">
        <SocialMediaBaseCard
          SocialMediaData={staticTiktokData}
          platform="TikTok"
        />
      </SwiperSlide>
      <SwiperSlide className="py-1">
        <SocialMediaBaseCard
          SocialMediaData={staticYoutubeData}
          platform="YouTube"
        />
      </SwiperSlide>
    </Swiper>
  );
}
