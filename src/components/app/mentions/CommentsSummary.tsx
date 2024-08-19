import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface CommentsBySentimentProps {
  countSentiment0To350: number;
  countSentiment351To650: number;
  countSentiment651To1000: number;
  sentimentAverage: number;
  totalSentiment: number;
}

export function CommentsSummary() {
  const [commentsBySentiment, setCommentsBySentiment] =
    useState<CommentsBySentimentProps>();
  const { mentionsData, isGettingData } = useMentionsDataContext();

  useEffect(() => {
    if (mentionsData) {
      const commentsBySentiment = mentionsData.mentions.commentsBySentiment;
      const array = [commentsBySentiment];
      const summedValues = array.reduce(
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
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários em Menções" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-96 w-11/12" />
      ) : (
        <div className="flex h-72 w-full flex-col gap-4 p-4 xs:h-60 lg:h-full lg:gap-8 lg:p-8 3xl:gap-16">
          <div className="flex w-full items-center gap-2">
            <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
              {commentsBySentiment?.totalSentiment.toFixed(2)}
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
                {commentsBySentiment?.countSentiment651To1000} Comentários
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
                {commentsBySentiment?.countSentiment351To650} Comentários
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
                {commentsBySentiment?.countSentiment0To350} Comentários
              </span>
            </div>
          </div>
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
