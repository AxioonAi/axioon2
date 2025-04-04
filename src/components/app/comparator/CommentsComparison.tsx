"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { shortenNumber } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CommentsComparison() {
  const [activeFacebookComments, setActiveFacebookComments] = useState<
    number | null
  >(null);
  const [activeInstagramComments, setActiveInstagramComments] = useState<
    number | null
  >(null);
  const [activeTiktokComments, setActiveTiktokComments] = useState<
    number | null
  >(null);
  const [activeYoutubeComments, setActiveYoutubeComments] = useState<
    number | null
  >(null);
  const [passiveFacebookComments, setPassiveFacebookComments] = useState<
    number | null
  >(null);
  const [passiveInstagramComments, setPassiveInstagramComments] = useState<
    number | null
  >(null);
  const [passiveTiktokComments, setPassiveTiktokComments] = useState<
    number | null
  >(null);
  const [passiveYoutubeComments, setPassiveYoutubeComments] = useState<
    number | null
  >(null);
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookComments(
        activeUserData.commentsData.commentBySentiment.facebook
          ? activeUserData.commentsData.commentBySentiment.facebook
              .countSentiment0To350 +
              activeUserData.commentsData.commentBySentiment.facebook
                .countSentiment351To650 +
              activeUserData.commentsData.commentBySentiment.facebook
                .countSentiment651To1000
          : 0,
      );
      setActiveInstagramComments(
        activeUserData.commentsData.commentBySentiment.instagram
          ? activeUserData.commentsData.commentBySentiment.instagram
              .countSentiment0To350 +
              activeUserData.commentsData.commentBySentiment.instagram
                .countSentiment351To650 +
              activeUserData.commentsData.commentBySentiment.instagram
                .countSentiment651To1000
          : 0,
      );
      setActiveTiktokComments(
        activeUserData.commentsData.commentBySentiment.tiktok
          ? activeUserData.commentsData.commentBySentiment.tiktok
              .countSentiment0To350 +
              activeUserData.commentsData.commentBySentiment.tiktok
                .countSentiment351To650 +
              activeUserData.commentsData.commentBySentiment.tiktok
                .countSentiment651To1000
          : 0,
      );
      setActiveYoutubeComments(
        activeUserData.commentsData.commentBySentiment.youtube
          ? activeUserData.commentsData.commentBySentiment.youtube
              .countSentiment0To350 +
              activeUserData.commentsData.commentBySentiment.youtube
                .countSentiment351To650 +
              activeUserData.commentsData.commentBySentiment.youtube
                .countSentiment651To1000
          : 0,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookComments(
        passiveUserData.commentsData.commentBySentiment.facebook
          ? passiveUserData.commentsData.commentBySentiment.facebook
              .countSentiment0To350 +
              passiveUserData.commentsData.commentBySentiment.facebook
                .countSentiment351To650 +
              passiveUserData.commentsData.commentBySentiment.facebook
                .countSentiment651To1000
          : 0,
      );
      setPassiveInstagramComments(
        passiveUserData.commentsData.commentBySentiment.instagram
          ? passiveUserData.commentsData.commentBySentiment.instagram
              .countSentiment0To350 +
              passiveUserData.commentsData.commentBySentiment.instagram
                .countSentiment351To650 +
              passiveUserData.commentsData.commentBySentiment.instagram
                .countSentiment651To1000
          : 0,
      );
      setPassiveTiktokComments(
        passiveUserData.commentsData.commentBySentiment.tiktok
          ? passiveUserData.commentsData.commentBySentiment.tiktok
              .countSentiment0To350 +
              passiveUserData.commentsData.commentBySentiment.tiktok
                .countSentiment351To650 +
              passiveUserData.commentsData.commentBySentiment.tiktok
                .countSentiment651To1000
          : 0,
      );
      setPassiveYoutubeComments(
        passiveUserData.commentsData.commentBySentiment.youtube
          ? passiveUserData.commentsData.commentBySentiment.youtube
              .countSentiment0To350 +
              passiveUserData.commentsData.commentBySentiment.youtube
                .countSentiment351To650 +
              passiveUserData.commentsData.commentBySentiment.youtube
                .countSentiment651To1000
          : 0,
      );
    }
  }, [passiveUserData]);
  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          COMENTÁRIOS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            QUANTIDADE TOTAL DE COMENTÁRIOS
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
                  {activeInstagramComments
                    ? shortenNumber(activeInstagramComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {activeTiktokComments
                    ? shortenNumber(activeTiktokComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {activeFacebookComments
                    ? shortenNumber(activeFacebookComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {activeYoutubeComments
                    ? shortenNumber(activeYoutubeComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {passiveInstagramComments
                    ? shortenNumber(passiveInstagramComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {passiveTiktokComments
                    ? shortenNumber(passiveTiktokComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {passiveFacebookComments
                    ? shortenNumber(passiveFacebookComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
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
                  {passiveYoutubeComments
                    ? shortenNumber(passiveYoutubeComments)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Comentários</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Comentários por rede social." />
    </BaseCard>
  );
}
