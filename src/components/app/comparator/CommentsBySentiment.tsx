import { EllipsisVertical } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

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
      <div className="flex w-full flex-col gap-4 p-4">
        {/* <div className="flex w-full items-center gap-2">
          <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
            {CommentsBySentimentData.Profile[0].value}
          </strong>
          <span
            className={twMerge(
              "flex items-center gap-1 rounded p-1 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base",
              CommentsBySentimentData.Profile[0].valueChange > 0
                ? "bg-teal-500/10 text-teal-500"
                : "text-red-600",
            )}
          >
            {CommentsBySentimentData.Profile[0].valueChange}
            {CommentsBySentimentData.Profile[0].valueChange > 0 ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </span>
          <span className="text-[10px] text-zinc-500 lg:text-xs 2xl:text-sm 3xl:text-base">
            Comparado a semana anterior
          </span>
        </div> */}
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
        <div className="grid grid-cols-5 gap-4 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base">
          <span className="col-span-1 col-start-3 text-zinc-500">Perfil 1</span>
          <span className="col-span-1 text-zinc-500">Perfil 2</span>
          <div className="col-span-2 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-600" />
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
            <div className="h-4 w-4 rounded-full bg-red-600" />
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
            <div className="h-4 w-4 rounded-full bg-violet-600" />
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
      <BaseCardFooter />
    </BaseCard>
  );
}
