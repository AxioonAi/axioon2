"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";
import { shortenNumber } from "@/utils/masks";

interface CommentsBySentimentProps {
  countSentiment0To350: number;
  countSentiment351To650: number;
  countSentiment651To1000: number;
  sentimentAverage: number;
  totalSentiment: number;
}

export function CommentsSummary() {
  const [facebookCommentsData, setFacebookCommentsData] =
    useState<CommentsBySentimentProps>();
  const [instagramCommentsData, setInstagramCommentsData] =
    useState<CommentsBySentimentProps>();
  const [tiktokCommentsData, setTiktokCommentsData] =
    useState<CommentsBySentimentProps>();
  const [youtubeCommentsData, setYoutubeCommentsData] =
    useState<CommentsBySentimentProps>();
  const [commentsBySentiment, setCommentsBySentiment] =
    useState<CommentsBySentimentProps>();
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookCommentsData(
        socialMediaData.commentsData.commentBySentiment.facebook,
      );
      setInstagramCommentsData(
        socialMediaData.commentsData.commentBySentiment.instagram,
      );
      setTiktokCommentsData(
        socialMediaData.commentsData.commentBySentiment.tiktok,
      );
      setYoutubeCommentsData(
        socialMediaData.commentsData.commentBySentiment.youtube,
      );
    }
  }, [socialMediaData]);

  useEffect(() => {
    const commentsBySentiment = [
      facebookCommentsData,
      instagramCommentsData,
      tiktokCommentsData,
      youtubeCommentsData,
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
    setCommentsBySentiment(summedValues);
  }, [
    facebookCommentsData,
    instagramCommentsData,
    tiktokCommentsData,
    youtubeCommentsData,
  ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários por Sentimento" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-72 w-full flex-col gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
          <div className="flex w-full items-center gap-2">
            <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
              {shortenNumber(commentsBySentiment?.totalSentiment || 0)}
            </strong>
          </div>
          <div className="flex h-2 w-full overflow-hidden rounded">
            <div
              className={twMerge(
                "h-full bg-green-600",
                commentsBySentiment &&
                  commentsBySentiment.countSentiment651To1000 > 0 &&
                  "rounded-l",
              )}
              style={{
                width: `${commentsBySentiment && (commentsBySentiment.countSentiment651To1000 / (commentsBySentiment.countSentiment0To350 + commentsBySentiment.countSentiment351To650 + commentsBySentiment.countSentiment651To1000)) * 100}%`,
              }}
            />
            <div
              className={"h-full bg-violet-600"}
              style={{
                width: `${commentsBySentiment && (commentsBySentiment.countSentiment351To650 / (commentsBySentiment.countSentiment0To350 + commentsBySentiment.countSentiment351To650 + commentsBySentiment.countSentiment651To1000)) * 100}%`,
              }}
            />
            <div
              className={twMerge(
                "h-full bg-red-600",
                commentsBySentiment &&
                  commentsBySentiment.countSentiment0To350 > 0 &&
                  "rounded-r",
              )}
              style={{
                width: `${commentsBySentiment && (commentsBySentiment.countSentiment0To350 / (commentsBySentiment.countSentiment0To350 + commentsBySentiment.countSentiment351To650 + commentsBySentiment.countSentiment651To1000)) * 100}%`,
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
                {shortenNumber(
                  commentsBySentiment?.countSentiment651To1000 || 0,
                )}{" "}
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
                {shortenNumber(
                  commentsBySentiment?.countSentiment351To650 || 0,
                )}{" "}
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
                {shortenNumber(commentsBySentiment?.countSentiment0To350 || 0)}{" "}
                Comentários
              </span>
            </div>
          </div>
        </div>
      )}
      <BaseCardFooter text="Quantidade de comentários separados por sentimento." />
    </BaseCard>
  );
}
