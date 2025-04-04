"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { shortenNumber } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FollowersComparison() {
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();
  const [activeFacebookFollowers, setActiveFacebookFollowers] = useState<
    number | null
  >(null);
  const [activeInstagramFollowers, setActiveInstagramFollowers] = useState<
    number | null
  >(null);
  const [activeTiktokFollowers, setActiveTiktokFollowers] = useState<
    number | null
  >(null);
  const [activeYoutubeFollowers, setActiveYoutubeFollowers] = useState<
    number | null
  >(null);
  const [passiveFacebookFollowers, setPassiveFacebookFollowers] = useState<
    number | null
  >(null);
  const [passiveInstagramFollowers, setPassiveInstagramFollowers] = useState<
    number | null
  >(null);
  const [passiveTiktokFollowers, setPassiveTiktokFollowers] = useState<
    number | null
  >(null);
  const [passiveYoutubeFollowers, setPassiveYoutubeFollowers] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookFollowers(
        (activeUserData.profileEvolution.facebook &&
          activeUserData.profileEvolution.facebook.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
      setActiveInstagramFollowers(
        (activeUserData.profileEvolution.instagram &&
          activeUserData.profileEvolution.instagram.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
      setActiveTiktokFollowers(
        (activeUserData.profileEvolution.tiktok &&
          activeUserData.profileEvolution.tiktok.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
      setActiveYoutubeFollowers(
        (activeUserData.profileEvolution.youtube &&
          activeUserData.profileEvolution.youtube.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookFollowers(
        (passiveUserData.profileEvolution.facebook &&
          passiveUserData.profileEvolution.facebook.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
      setPassiveInstagramFollowers(
        (passiveUserData.profileEvolution.instagram &&
          passiveUserData.profileEvolution.instagram.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
      setPassiveTiktokFollowers(
        (passiveUserData.profileEvolution.tiktok &&
          passiveUserData.profileEvolution.tiktok.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
      setPassiveYoutubeFollowers(
        (passiveUserData.profileEvolution.youtube &&
          passiveUserData.profileEvolution.youtube.find(
            (item) => item.name === "Seguidores",
          )?.value) ||
          null,
      );
    }
  }, [passiveUserData]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          SEGUIDORES ATUAIS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            TOTAL DE SEGUIDORES ATUAIS NAS PLATAFORMAS
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-4 py-4">
        <div className="flex flex-wrap items-center justify-center justify-items-center gap-2 lg:grid lg:w-1/2 lg:grid-cols-2">
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Instagram</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeInstagramFollowers
                    ? shortenNumber(activeInstagramFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">TikTok</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/TikTokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeTiktokFollowers
                    ? shortenNumber(activeTiktokFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Facebook</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeFacebookFollowers
                    ? shortenNumber(activeFacebookFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">YouTube</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/YouTubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeYoutubeFollowers
                    ? shortenNumber(activeYoutubeFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-11/12 my-auto w-1 bg-black" />
        <div className="flex flex-wrap items-center justify-center justify-items-center gap-2 lg:grid lg:w-1/2 lg:grid-cols-2">
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Instagram</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveInstagramFollowers
                    ? shortenNumber(passiveInstagramFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">TikTok</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/TikTokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveTiktokFollowers
                    ? shortenNumber(passiveTiktokFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Facebook</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveFacebookFollowers
                    ? shortenNumber(passiveFacebookFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">YouTube</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/YouTubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveYoutubeFollowers
                    ? shortenNumber(passiveYoutubeFollowers)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Seguidores por rede social." />
    </BaseCard>
  );
}
