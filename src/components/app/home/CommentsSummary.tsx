"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";

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
  const [sentimentRate, setSentimentRate] = useState<number | null>(null);
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

  useEffect(() => {
    if (socialMediaData) {
      const allSentiment = [
        ...(socialMediaData.commentsData.sentimentEvolution.facebook || []),
        ...(socialMediaData.commentsData.sentimentEvolution.instagram || []),
        ...(socialMediaData.commentsData.sentimentEvolution.tiktok || []),
        ...(socialMediaData.commentsData.sentimentEvolution.youtube || []),
      ];

      const currentWeekSentiment = allSentiment
        .filter(
          (comment) =>
            new Date(comment.label) >=
            new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        )
        .sort(
          (a, b) => new Date(a.label).getTime() - new Date(b.label).getTime(),
        );
      const lastWeekSentiment = allSentiment
        .filter(
          (comment) =>
            new Date(comment.label) >=
              new Date(new Date().getTime() - 14 * 24 * 60 * 60 * 1000) &&
            new Date(comment.label) <
              new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        )
        .sort(
          (a, b) => new Date(a.label).getTime() - new Date(b.label).getTime(),
        );
      const currentSentiment = currentWeekSentiment.reduce(
        (acc, current) => acc + current.value,
        0,
      );
      const lastSentiment = lastWeekSentiment.reduce(
        (acc, current) => acc + current.value,
        0,
      );
      const currentAvg = Number(
        (currentSentiment / currentWeekSentiment.length).toFixed(1),
      );
      const lastAvg = Number(
        (lastSentiment / lastWeekSentiment.length).toFixed(1),
      );

      setSentimentRate(Number(Number(currentAvg - lastAvg).toFixed(1)));
    }
  }, [socialMediaData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários por Sentimento" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-72 w-full flex-col justify-center gap-4 p-4 xs:h-60 lg:h-full lg:gap-4 lg:p-4 3xl:gap-16">
          <div className="flex w-full items-center gap-2">
            <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
              {(commentsBySentiment &&
                commentsBySentiment?.countSentiment0To350 +
                  commentsBySentiment?.countSentiment351To650 +
                  commentsBySentiment?.countSentiment651To1000) ||
                0}{" "}
              Comentários
            </strong>
            {sentimentRate && (
              <div className="flex items-center gap-1 text-xs lg:text-sm">
                <div
                  className={twMerge(
                    "flex items-center gap-1 rounded p-1",
                    sentimentRate > 0
                      ? "bg-green-600/10 text-green-600"
                      : sentimentRate < 0
                        ? "bg-red-600/10 text-red-600"
                        : "bg-violet-600/10 text-violet-600",
                  )}
                >
                  {sentimentRate > 0 ? (
                    <ArrowUp size={14} />
                  ) : sentimentRate < 0 ? (
                    <ArrowDown size={14} />
                  ) : (
                    <ArrowRight size={14} />
                  )}
                  <strong>{sentimentRate}</strong>
                </div>
                <span className="text-zinc-400">
                  Sentimento comparado a semana anterior
                </span>
              </div>
            )}
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
                {commentsBySentiment?.countSentiment651To1000 || 0} Comentários
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
                {commentsBySentiment?.countSentiment351To650 || 0} Comentários
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
                {commentsBySentiment?.countSentiment0To350 || 0} Comentários
              </span>
            </div>
          </div>
        </div>
      )}
      <BaseCardFooter text="Quantidade de comentários separados por sentimento." />
    </BaseCard>
  );
}
