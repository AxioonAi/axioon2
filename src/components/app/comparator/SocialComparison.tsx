"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProfileProps {
  facebook: string | null;
  instagram: string | null;
  tiktok: string | null;
  youtube: string | null;
}

export function SocialComparison() {
  const { activeUserProfileData, passiveUserProfileData } =
    useComparatorDataContext();
  const [activeProfiles, setActiveProfiles] = useState<ProfileProps>();
  const [passiveProfiles, setPassiveProfiles] = useState<ProfileProps>();

  useEffect(() => {
    if (activeUserProfileData) {
      setActiveProfiles({
        facebook: activeUserProfileData.facebook,
        instagram: activeUserProfileData.instagram,
        tiktok: activeUserProfileData.tiktok,
        youtube: activeUserProfileData.youtube,
      });
    }
  }, [activeUserProfileData]);

  useEffect(() => {
    if (passiveUserProfileData) {
      setPassiveProfiles({
        facebook: passiveUserProfileData.facebook,
        instagram: passiveUserProfileData.instagram,
        tiktok: passiveUserProfileData.tiktok,
        youtube: passiveUserProfileData.youtube,
      });
    }
  }, [passiveUserProfileData]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          REDES SOCIAIS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            REDES SOCIAIS
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
        <div className="flex flex-wrap items-center justify-center justify-items-center gap-2 lg:grid lg:w-1/2 lg:grid-cols-2">
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Instagram</span>
            <div
              onClick={() => {
                if (activeProfiles?.instagram) {
                  window.open(
                    `https://www.instagram.com/${activeProfiles.instagram}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {activeProfiles?.instagram ? activeProfiles.instagram : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">TikTok</span>
            <div
              onClick={() => {
                if (activeProfiles?.tiktok) {
                  window.open(
                    `https://www.tiktok.com/@${activeProfiles.tiktok}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/TikTokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {activeProfiles?.tiktok ? activeProfiles.tiktok : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Facebook</span>
            <div
              onClick={() => {
                if (activeProfiles?.facebook) {
                  window.open(
                    `https://www.facebook.com/${activeProfiles.facebook}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {activeProfiles?.facebook ? activeProfiles.facebook : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">YouTube</span>
            <div
              onClick={() => {
                if (activeProfiles?.youtube) {
                  window.open(
                    `https://www.youtube.com/${activeProfiles.youtube}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/YouTubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {activeProfiles?.youtube ? activeProfiles.youtube : "N/A"}
              </span>
            </div>
          </div>
        </div>
        <div className="h-11/12 my-auto w-1 bg-black" />
        <div className="flex flex-wrap items-center justify-center justify-items-center gap-2 lg:grid lg:w-1/2 lg:grid-cols-2">
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Instagram</span>
            <div
              onClick={() => {
                if (passiveProfiles?.instagram) {
                  window.open(
                    `https://www.instagram.com/${passiveProfiles.instagram}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {passiveProfiles?.instagram ? passiveProfiles.instagram : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">TikTok</span>
            <div
              onClick={() => {
                if (passiveProfiles?.tiktok) {
                  window.open(
                    `https://www.tiktok.com/@${passiveProfiles.tiktok}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/TikTokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {passiveProfiles?.tiktok ? passiveProfiles.tiktok : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Facebook</span>
            <div
              onClick={() => {
                if (passiveProfiles?.facebook) {
                  window.open(
                    `https://www.facebook.com/${passiveProfiles.facebook}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {passiveProfiles?.facebook ? passiveProfiles.facebook : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">YouTube</span>
            <div
              onClick={() => {
                if (passiveProfiles?.youtube) {
                  window.open(
                    `https://www.youtube.com/${passiveProfiles.youtube}`,
                    "_blank",
                  );
                }
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Logos/YouTubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-6 object-contain xl:w-10"
              />
              <span className="text-sm font-semibold xl:text-lg">
                {passiveProfiles?.youtube ? passiveProfiles.youtube : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Redes Sociais." />
    </BaseCard>
  );
}
