"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CommentsBySentimentProps {
  countSentiment0To350: number;
  countSentiment351To650: number;
  countSentiment651To1000: number;
  sentimentAverage: number;
  totalSentiment: number;
}

export function CommentsDetailsComparison() {
  const [activeFacebookCommentsData, setActiveFacebookCommentsData] =
    useState<CommentsBySentimentProps>();
  const [activeInstagramCommentsData, setActiveInstagramCommentsData] =
    useState<CommentsBySentimentProps>();
  const [activeTiktokCommentsData, setActiveTiktokCommentsData] =
    useState<CommentsBySentimentProps>();
  const [activeYoutubeCommentsData, setActiveYoutubeCommentsData] =
    useState<CommentsBySentimentProps>();
  const [passiveFacebookCommentsData, setPassiveFacebookCommentsData] =
    useState<CommentsBySentimentProps>();
  const [passiveInstagramCommentsData, setPassiveInstagramCommentsData] =
    useState<CommentsBySentimentProps>();
  const [passiveTiktokCommentsData, setPassiveTiktokCommentsData] =
    useState<CommentsBySentimentProps>();
  const [passiveYoutubeCommentsData, setPassiveYoutubeCommentsData] =
    useState<CommentsBySentimentProps>();
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookCommentsData(
        activeUserData.commentsData.commentBySentiment.facebook,
      );
      setActiveInstagramCommentsData(
        activeUserData.commentsData.commentBySentiment.instagram,
      );
      setActiveTiktokCommentsData(
        activeUserData.commentsData.commentBySentiment.tiktok,
      );
      setActiveYoutubeCommentsData(
        activeUserData.commentsData.commentBySentiment.youtube,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookCommentsData(
        passiveUserData.commentsData.commentBySentiment.facebook,
      );
      setPassiveInstagramCommentsData(
        passiveUserData.commentsData.commentBySentiment.instagram,
      );
      setPassiveTiktokCommentsData(
        passiveUserData.commentsData.commentBySentiment.tiktok,
      );
      setPassiveYoutubeCommentsData(
        passiveUserData.commentsData.commentBySentiment.youtube,
      );
    }
  }, [passiveUserData]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          SENTIMENTO
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            COMENTÁRIOS POR SENTIMENTO
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(activeFacebookCommentsData &&
                  activeFacebookCommentsData?.countSentiment0To350 +
                    activeFacebookCommentsData?.countSentiment351To650 +
                    activeFacebookCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  activeFacebookCommentsData &&
                    activeFacebookCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${activeFacebookCommentsData && (activeFacebookCommentsData.countSentiment651To1000 / (activeFacebookCommentsData.countSentiment0To350 + activeFacebookCommentsData.countSentiment351To650 + activeFacebookCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${activeFacebookCommentsData && (activeFacebookCommentsData.countSentiment351To650 / (activeFacebookCommentsData.countSentiment0To350 + activeFacebookCommentsData.countSentiment351To650 + activeFacebookCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  activeFacebookCommentsData &&
                    activeFacebookCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${activeFacebookCommentsData && (activeFacebookCommentsData.countSentiment0To350 / (activeFacebookCommentsData.countSentiment0To350 + activeFacebookCommentsData.countSentiment351To650 + activeFacebookCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeFacebookCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeFacebookCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeFacebookCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
          <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(passiveFacebookCommentsData &&
                  passiveFacebookCommentsData?.countSentiment0To350 +
                    passiveFacebookCommentsData?.countSentiment351To650 +
                    passiveFacebookCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  passiveFacebookCommentsData &&
                    passiveFacebookCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${passiveFacebookCommentsData && (passiveFacebookCommentsData.countSentiment651To1000 / (passiveFacebookCommentsData.countSentiment0To350 + passiveFacebookCommentsData.countSentiment351To650 + passiveFacebookCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${passiveFacebookCommentsData && (passiveFacebookCommentsData.countSentiment351To650 / (passiveFacebookCommentsData.countSentiment0To350 + passiveFacebookCommentsData.countSentiment351To650 + passiveFacebookCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  passiveFacebookCommentsData &&
                    passiveFacebookCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${passiveFacebookCommentsData && (passiveFacebookCommentsData.countSentiment0To350 / (passiveFacebookCommentsData.countSentiment0To350 + passiveFacebookCommentsData.countSentiment351To650 + passiveFacebookCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveFacebookCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveFacebookCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveFacebookCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(activeInstagramCommentsData &&
                  activeInstagramCommentsData?.countSentiment0To350 +
                    activeInstagramCommentsData?.countSentiment351To650 +
                    activeInstagramCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  activeInstagramCommentsData &&
                    activeInstagramCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${activeInstagramCommentsData && (activeInstagramCommentsData.countSentiment651To1000 / (activeInstagramCommentsData.countSentiment0To350 + activeInstagramCommentsData.countSentiment351To650 + activeInstagramCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${activeInstagramCommentsData && (activeInstagramCommentsData.countSentiment351To650 / (activeInstagramCommentsData.countSentiment0To350 + activeInstagramCommentsData.countSentiment351To650 + activeInstagramCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  activeInstagramCommentsData &&
                    activeInstagramCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${activeInstagramCommentsData && (activeInstagramCommentsData.countSentiment0To350 / (activeInstagramCommentsData.countSentiment0To350 + activeInstagramCommentsData.countSentiment351To650 + activeInstagramCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeInstagramCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeInstagramCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeInstagramCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
          <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(passiveInstagramCommentsData &&
                  passiveInstagramCommentsData?.countSentiment0To350 +
                    passiveInstagramCommentsData?.countSentiment351To650 +
                    passiveInstagramCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  passiveInstagramCommentsData &&
                    passiveInstagramCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${passiveInstagramCommentsData && (passiveInstagramCommentsData.countSentiment651To1000 / (passiveInstagramCommentsData.countSentiment0To350 + passiveInstagramCommentsData.countSentiment351To650 + passiveInstagramCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${passiveInstagramCommentsData && (passiveInstagramCommentsData.countSentiment351To650 / (passiveInstagramCommentsData.countSentiment0To350 + passiveInstagramCommentsData.countSentiment351To650 + passiveInstagramCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  passiveInstagramCommentsData &&
                    passiveInstagramCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${passiveInstagramCommentsData && (passiveInstagramCommentsData.countSentiment0To350 / (passiveInstagramCommentsData.countSentiment0To350 + passiveInstagramCommentsData.countSentiment351To650 + passiveInstagramCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveInstagramCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveInstagramCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveInstagramCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/TiktokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(activeTiktokCommentsData &&
                  activeTiktokCommentsData?.countSentiment0To350 +
                    activeTiktokCommentsData?.countSentiment351To650 +
                    activeTiktokCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  activeTiktokCommentsData &&
                    activeTiktokCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${activeTiktokCommentsData && (activeTiktokCommentsData.countSentiment651To1000 / (activeTiktokCommentsData.countSentiment0To350 + activeTiktokCommentsData.countSentiment351To650 + activeTiktokCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${activeTiktokCommentsData && (activeTiktokCommentsData.countSentiment351To650 / (activeTiktokCommentsData.countSentiment0To350 + activeTiktokCommentsData.countSentiment351To650 + activeTiktokCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  activeTiktokCommentsData &&
                    activeTiktokCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${activeTiktokCommentsData && (activeTiktokCommentsData.countSentiment0To350 / (activeTiktokCommentsData.countSentiment0To350 + activeTiktokCommentsData.countSentiment351To650 + activeTiktokCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeTiktokCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeTiktokCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeTiktokCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
          <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/TiktokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(passiveTiktokCommentsData &&
                  passiveTiktokCommentsData?.countSentiment0To350 +
                    passiveTiktokCommentsData?.countSentiment351To650 +
                    passiveTiktokCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  passiveTiktokCommentsData &&
                    passiveTiktokCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${passiveTiktokCommentsData && (passiveTiktokCommentsData.countSentiment651To1000 / (passiveTiktokCommentsData.countSentiment0To350 + passiveTiktokCommentsData.countSentiment351To650 + passiveTiktokCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${passiveTiktokCommentsData && (passiveTiktokCommentsData.countSentiment351To650 / (passiveTiktokCommentsData.countSentiment0To350 + passiveTiktokCommentsData.countSentiment351To650 + passiveTiktokCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  passiveTiktokCommentsData &&
                    passiveTiktokCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${passiveTiktokCommentsData && (passiveTiktokCommentsData.countSentiment0To350 / (passiveTiktokCommentsData.countSentiment0To350 + passiveTiktokCommentsData.countSentiment351To650 + passiveTiktokCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveTiktokCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveTiktokCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveTiktokCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/YoutubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(activeYoutubeCommentsData &&
                  activeYoutubeCommentsData?.countSentiment0To350 +
                    activeYoutubeCommentsData?.countSentiment351To650 +
                    activeYoutubeCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  activeYoutubeCommentsData &&
                    activeYoutubeCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${activeYoutubeCommentsData && (activeYoutubeCommentsData.countSentiment651To1000 / (activeYoutubeCommentsData.countSentiment0To350 + activeYoutubeCommentsData.countSentiment351To650 + activeYoutubeCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${activeYoutubeCommentsData && (activeYoutubeCommentsData.countSentiment351To650 / (activeYoutubeCommentsData.countSentiment0To350 + activeYoutubeCommentsData.countSentiment351To650 + activeYoutubeCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  activeYoutubeCommentsData &&
                    activeYoutubeCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${activeYoutubeCommentsData && (activeYoutubeCommentsData.countSentiment0To350 / (activeYoutubeCommentsData.countSentiment0To350 + activeYoutubeCommentsData.countSentiment351To650 + activeYoutubeCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeYoutubeCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeYoutubeCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {activeYoutubeCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
          <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
          <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
            <div className="flex w-full items-center gap-2">
              <Image
                src="/Logos/YoutubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                {(passiveYoutubeCommentsData &&
                  passiveYoutubeCommentsData?.countSentiment0To350 +
                    passiveYoutubeCommentsData?.countSentiment351To650 +
                    passiveYoutubeCommentsData?.countSentiment651To1000) ||
                  0}{" "}
                Comentários
              </strong>
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded">
              <div
                className={twMerge(
                  "h-full bg-green-600",
                  passiveYoutubeCommentsData &&
                    passiveYoutubeCommentsData.countSentiment651To1000 > 0 &&
                    "rounded-l",
                )}
                style={{
                  width: `${passiveYoutubeCommentsData && (passiveYoutubeCommentsData.countSentiment651To1000 / (passiveYoutubeCommentsData.countSentiment0To350 + passiveYoutubeCommentsData.countSentiment351To650 + passiveYoutubeCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={"h-full bg-violet-600"}
                style={{
                  width: `${passiveYoutubeCommentsData && (passiveYoutubeCommentsData.countSentiment351To650 / (passiveYoutubeCommentsData.countSentiment0To350 + passiveYoutubeCommentsData.countSentiment351To650 + passiveYoutubeCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
              <div
                className={twMerge(
                  "h-full bg-red-600",
                  passiveYoutubeCommentsData &&
                    passiveYoutubeCommentsData.countSentiment0To350 > 0 &&
                    "rounded-r",
                )}
                style={{
                  width: `${passiveYoutubeCommentsData && (passiveYoutubeCommentsData.countSentiment0To350 / (passiveYoutubeCommentsData.countSentiment0To350 + passiveYoutubeCommentsData.countSentiment351To650 + passiveYoutubeCommentsData.countSentiment651To1000)) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Positivos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveYoutubeCommentsData?.countSentiment651To1000 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-violet-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Neutros
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveYoutubeCommentsData?.countSentiment351To650 || 0}{" "}
                  Comentários
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600" />
                  <span className="text-sm lg:text-base 2xl:text-lg">
                    Comentários Negativos
                  </span>
                </div>
                <span className="text-sm text-zinc-500 lg:text-base 2xl:text-lg">
                  {passiveYoutubeCommentsData?.countSentiment0To350 || 0}{" "}
                  Comentários
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Quantidade de comentários separados por sentimento." />
    </BaseCard>
  );
}
