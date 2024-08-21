"use client";
import { EllipsisVertical } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { Skeleton } from "@/components/global/Skeleton";

interface CommentsBySentimentProps {
  CommentsBySentimentData: {
    Profile: {
      comments: {
        positive: number;
        neutral: number;
        negative: number;
        total: number;
      };
    }[];
  };
}

export function CommentsBySentiment({
  CommentsBySentimentData,
}: CommentsBySentimentProps) {
  const { isGettingData } = useComparatorDataContext();
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
        <div className="flex w-full flex-col gap-2 p-2 pb-12">
          <span className="text-xs text-zinc-500">Perfil 1</span>
          <div className="flex h-2 w-full overflow-hidden rounded">
            <div
              className={twMerge(
                "h-full bg-green-600",
                CommentsBySentimentData.Profile[0].comments.positive &&
                  CommentsBySentimentData.Profile[0].comments.total > 0 &&
                  "rounded-l",
              )}
              style={{
                width: `${(CommentsBySentimentData.Profile[0].comments.positive / CommentsBySentimentData.Profile[0].comments.total) * 100}%`,
              }}
            />
            <div
              className={"h-full bg-violet-600"}
              style={{
                width: `${(CommentsBySentimentData.Profile[0].comments.neutral / CommentsBySentimentData.Profile[0].comments.total) * 100}%`,
              }}
            />
            <div
              className={twMerge(
                "h-full bg-red-600",
                CommentsBySentimentData.Profile[0].comments.negative &&
                  CommentsBySentimentData.Profile[0].comments.total > 0 &&
                  "rounded-r",
              )}
              style={{
                width: `${(CommentsBySentimentData.Profile[0].comments.negative / CommentsBySentimentData.Profile[0].comments.total) * 100}%`,
              }}
            />
          </div>
          <span className="text-xs text-zinc-500">Perfil 2</span>
          <div className="flex h-2 w-full overflow-hidden rounded">
            <div
              className={twMerge(
                "h-full bg-green-600",
                CommentsBySentimentData.Profile[1].comments.positive &&
                  CommentsBySentimentData.Profile[1].comments.total > 0 &&
                  "rounded-l",
              )}
              style={{
                width: `${(CommentsBySentimentData.Profile[1].comments.positive / CommentsBySentimentData.Profile[1].comments.total) * 100}%`,
              }}
            />
            <div
              className={"h-full bg-violet-600"}
              style={{
                width: `${(CommentsBySentimentData.Profile[1].comments.neutral / CommentsBySentimentData.Profile[1].comments.total) * 100}%`,
              }}
            />
            <div
              className={twMerge(
                "h-full bg-red-600",
                CommentsBySentimentData.Profile[1].comments.negative &&
                  CommentsBySentimentData.Profile[1].comments.total > 0 &&
                  "rounded-r",
              )}
              style={{
                width: `${(CommentsBySentimentData.Profile[1].comments.negative / CommentsBySentimentData.Profile[1].comments.total) * 100}%`,
              }}
            />
          </div>
          <div className="grid grid-cols-5 gap-4 overflow-x-clip text-[10px] 2xl:text-xs 3xl:text-sm">
            <span className="col-span-1 col-start-3 text-zinc-500">
              Perfil 1
            </span>
            <span className="col-span-1 text-zinc-500">Perfil 2</span>
            <div className="col-span-2 flex items-center gap-2">
              <div className="min-h-2 min-w-2 rounded-full bg-green-600" />
              <span>Comentários Positivos</span>
            </div>
            <span className="col-span-1 text-zinc-500">
              {CommentsBySentimentData.Profile[0].comments.positive}
            </span>
            <span className="col-span-1 text-zinc-500">
              {CommentsBySentimentData.Profile[1].comments.positive}
            </span>
            <span className="col-span-1 text-zinc-500">Comentários</span>
            <div className="col-span-2 flex items-center gap-2">
              <div className="min-h-2 min-w-2 rounded-full bg-red-600" />
              <span>Comentários Neutros</span>
            </div>
            <span className="col-span-1 text-zinc-500">
              {CommentsBySentimentData.Profile[0].comments.neutral}
            </span>
            <span className="col-span-1 text-zinc-500">
              {CommentsBySentimentData.Profile[1].comments.neutral}
            </span>
            <span className="col-span-1 text-zinc-500">Comentários</span>
            <div className="col-span-2 flex items-center gap-2">
              <div className="min-h-2 min-w-2 rounded-full bg-violet-600" />
              <span>Comentários Negativos</span>
            </div>
            <span className="col-span-1 text-zinc-500">
              {CommentsBySentimentData.Profile[0].comments.negative}
            </span>
            <span className="col-span-1 text-zinc-500">
              {CommentsBySentimentData.Profile[1].comments.negative}
            </span>
            <span className="col-span-1 text-zinc-500">Comentários</span>
          </div>
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
