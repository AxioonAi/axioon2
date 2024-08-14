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
  const { socialMediaData } = useSocialMediaDataContext();

  const [staticFacebookData, setStaticFacebookData] =
    useState<platformDataProps | null>(null);
  const [staticInstagramData, setStaticInstagramData] =
    useState<platformDataProps | null>(null);
  const [staticTiktokData, setStaticTiktokData] =
    useState<platformDataProps | null>(null);
  const [staticYoutubeData, setStaticYoutubeData] =
    useState<platformDataProps | null>(null);

  useEffect(() => {
    if (socialMediaData) {
      setStaticFacebookData(socialMediaData?.staticData.facebookData);
      setStaticInstagramData(socialMediaData?.staticData.instagramData);
      setStaticTiktokData(socialMediaData?.staticData.tiktokData);
      setStaticYoutubeData(socialMediaData?.staticData.youtubeData);
    }
  }, [socialMediaData]);

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
      <SwiperSlide className="py-2">
        <SocialMediaBaseCard
          SocialMediaData={staticInstagramData}
          platform="Instagram"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SocialMediaBaseCard
          SocialMediaData={staticFacebookData}
          platform="Facebook"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SocialMediaBaseCard
          SocialMediaData={staticTiktokData}
          platform="TikTok"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SocialMediaBaseCard
          SocialMediaData={staticYoutubeData}
          platform="YouTube"
        />
      </SwiperSlide>
    </Swiper>
  );
}
