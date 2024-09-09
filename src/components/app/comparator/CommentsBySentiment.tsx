"use client";
import { EllipsisVertical } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { Skeleton } from "@/components/global/Skeleton";
import { shortenNumber } from "@/utils/masks";

interface CommentsBySentimentProps {
  countSentiment0To350: number;
  countSentiment351To650: number;
  countSentiment651To1000: number;
  sentimentAverage: number;
  totalSentiment: number;
}

export function CommentsBySentiment() {
  const { isGettingData, activeUserData, passiveUserData } =
    useComparatorDataContext();
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
  const [activeCommentsBySentiment, setActiveCommentsBySentiment] =
    useState<CommentsBySentimentProps>({
      countSentiment0To350: 0,
      countSentiment351To650: 0,
      countSentiment651To1000: 0,
      sentimentAverage: 0,
      totalSentiment: 0,
    });
  const [passiveCommentsBySentiment, setPassiveCommentsBySentiment] =
    useState<CommentsBySentimentProps>({
      countSentiment0To350: 0,
      countSentiment351To650: 0,
      countSentiment651To1000: 0,
      sentimentAverage: 0,
      totalSentiment: 0,
    });

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
    const commentsBySentiment = [
      activeFacebookCommentsData,
      activeInstagramCommentsData,
      activeTiktokCommentsData,
      activeYoutubeCommentsData,
    ];
    const summedValues = commentsBySentiment.reduce(
      (acc, curr) => {
        if (curr) {
          acc!.countSentiment0To350 += curr.countSentiment0To350;
          acc!.countSentiment351To650 += curr.countSentiment351To650;
          acc!.countSentiment651To1000 += curr.countSentiment651To1000;
          acc!.sentimentAverage += curr.sentimentAverage;
          acc!.totalSentiment += curr.totalSentiment;
        }
        return acc;
      },
      {
        countSentiment0To350: 0,
        countSentiment351To650: 0,
        countSentiment651To1000: 0,
        sentimentAverage: 0,
        totalSentiment: 0,
      },
    );
    setActiveCommentsBySentiment(summedValues as CommentsBySentimentProps);
  }, [
    activeFacebookCommentsData,
    activeInstagramCommentsData,
    activeTiktokCommentsData,
    activeYoutubeCommentsData,
  ]);

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

  useEffect(() => {
    const commentsBySentiment = [
      passiveFacebookCommentsData,
      passiveInstagramCommentsData,
      passiveTiktokCommentsData,
      passiveYoutubeCommentsData,
    ];
    const summedValues = commentsBySentiment.reduce(
      (acc, curr) => {
        if (curr) {
          acc!.countSentiment0To350 += curr.countSentiment0To350;
          acc!.countSentiment351To650 += curr.countSentiment351To650;
          acc!.countSentiment651To1000 += curr.countSentiment651To1000;
          acc!.sentimentAverage += curr.sentimentAverage;
          acc!.totalSentiment += curr.totalSentiment;
        }
        return acc;
      },
      {
        countSentiment0To350: 0,
        countSentiment351To650: 0,
        countSentiment651To1000: 0,
        sentimentAverage: 0,
        totalSentiment: 0,
      },
    );
    setPassiveCommentsBySentiment(summedValues as CommentsBySentimentProps);
  }, [
    passiveFacebookCommentsData,
    passiveInstagramCommentsData,
    passiveTiktokCommentsData,
    passiveYoutubeCommentsData,
  ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários por Sentimento"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-full w-full flex-col justify-center gap-2 p-2 pb-12 lg:gap-1 lg:pb-0">
          <span className="text-xs text-zinc-500">Perfil 1</span>
          <div className="flex h-2 w-full overflow-hidden rounded">
            <div
              className={twMerge(
                "h-full bg-green-600",
                activeCommentsBySentiment &&
                  activeCommentsBySentiment.countSentiment651To1000 > 0 &&
                  "rounded-l",
              )}
              style={{
                width: `${(activeCommentsBySentiment!.countSentiment651To1000 / (activeCommentsBySentiment!.countSentiment0To350 + activeCommentsBySentiment!.countSentiment351To650 + activeCommentsBySentiment!.countSentiment651To1000)) * 100}%`,
              }}
            />
            <div
              className={"h-full bg-violet-600"}
              style={{
                width: `${(activeCommentsBySentiment!.countSentiment351To650 / (activeCommentsBySentiment!.countSentiment0To350 + activeCommentsBySentiment!.countSentiment351To650 + activeCommentsBySentiment!.countSentiment651To1000)) * 100}%`,
              }}
            />
            <div
              className={twMerge(
                "h-full bg-red-600",
                activeCommentsBySentiment &&
                  activeCommentsBySentiment.countSentiment0To350 > 0 &&
                  "rounded-r",
              )}
              style={{
                width: `${(activeCommentsBySentiment!.countSentiment0To350 / (activeCommentsBySentiment!.countSentiment0To350 + activeCommentsBySentiment!.countSentiment351To650 + activeCommentsBySentiment!.countSentiment651To1000)) * 100}%`,
              }}
            />
          </div>
          <span className="text-xs text-zinc-500">Perfil 2</span>
          <div className="flex h-2 w-full overflow-hidden rounded">
            <div
              className={twMerge(
                "h-full bg-green-600",
                passiveCommentsBySentiment &&
                  passiveCommentsBySentiment.countSentiment651To1000 > 0 &&
                  "rounded-l",
              )}
              style={{
                width: `${(passiveCommentsBySentiment!.countSentiment651To1000 / (passiveCommentsBySentiment!.countSentiment0To350 + passiveCommentsBySentiment!.countSentiment351To650 + passiveCommentsBySentiment!.countSentiment651To1000)) * 100}%`,
              }}
            />
            <div
              className={"h-full bg-violet-600"}
              style={{
                width: `${(passiveCommentsBySentiment!.countSentiment351To650 / (passiveCommentsBySentiment!.countSentiment0To350 + passiveCommentsBySentiment!.countSentiment351To650 + passiveCommentsBySentiment!.countSentiment651To1000)) * 100}%`,
              }}
            />
            <div
              className={twMerge(
                "h-full bg-red-600",
                passiveCommentsBySentiment &&
                  passiveCommentsBySentiment.countSentiment0To350 > 0 &&
                  "rounded-r",
              )}
              style={{
                width: `${(passiveCommentsBySentiment!.countSentiment0To350 / (passiveCommentsBySentiment!.countSentiment0To350 + passiveCommentsBySentiment!.countSentiment351To650 + passiveCommentsBySentiment!.countSentiment651To1000)) * 100}%`,
              }}
            />
          </div>
          <div className="grid grid-cols-5 gap-4 overflow-x-clip text-[10px] lg:gap-2 2xl:text-xs 3xl:text-sm">
            <span className="col-span-1 col-start-3 text-zinc-500">
              Perfil 1
            </span>
            <span className="col-span-1 text-zinc-500">Perfil 2</span>
            <div className="col-span-2 flex items-center gap-2">
              <div className="min-h-2 min-w-2 rounded-full bg-green-600" />
              <span>Comentários Positivos</span>
            </div>
            <span className="col-span-1 text-zinc-500">
              {shortenNumber(
                activeCommentsBySentiment?.countSentiment651To1000,
              )}
            </span>
            <span className="col-span-1 text-zinc-500">
              {shortenNumber(
                passiveCommentsBySentiment?.countSentiment651To1000,
              )}
            </span>
            <span className="col-span-1 text-zinc-500">Comentários</span>
            <div className="col-span-2 flex items-center gap-2">
              <div className="min-h-2 min-w-2 rounded-full bg-red-600" />
              <span>Comentários Neutros</span>
            </div>
            <span className="col-span-1 text-zinc-500">
              {shortenNumber(activeCommentsBySentiment?.countSentiment351To650)}
            </span>
            <span className="col-span-1 text-zinc-500">
              {shortenNumber(
                passiveCommentsBySentiment?.countSentiment351To650,
              )}
            </span>
            <span className="col-span-1 text-zinc-500">Comentários</span>
            <div className="col-span-2 flex items-center gap-2">
              <div className="min-h-2 min-w-2 rounded-full bg-violet-600" />
              <span>Comentários Negativos</span>
            </div>
            <span className="col-span-1 text-zinc-500">
              {shortenNumber(activeCommentsBySentiment?.countSentiment0To350)}
            </span>
            <span className="col-span-1 text-zinc-500">
              {shortenNumber(passiveCommentsBySentiment?.countSentiment0To350)}
            </span>
            <span className="col-span-1 text-zinc-500">Comentários</span>
          </div>
        </div>
      )}
      <BaseCardFooter text="Comparador das quantidades de comentários separados por sentimento." />
    </BaseCard>
  );
}
