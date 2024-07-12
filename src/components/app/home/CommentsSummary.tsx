import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface CommentsSummaryProps {
  CommentsSummaryData: {
    value: number;
    valueChange: number;
    comments: {
      total: number;
      positive: number;
      neutral: number;
      negative: number;
    };
  };
}

export function CommentsSummary({ CommentsSummaryData }: CommentsSummaryProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários" />
      <div className="flex h-72 w-full flex-col gap-4 p-4 xs:h-60 lg:h-full lg:gap-8 lg:p-8 3xl:gap-16">
        <div className="flex w-full items-center gap-2">
          <strong className="text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
            {CommentsSummaryData.value}
          </strong>
          <span
            className={twMerge(
              "flex items-center gap-1 rounded p-1 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base",
              CommentsSummaryData.valueChange > 0
                ? "bg-teal-500/10 text-teal-500"
                : "text-red-600",
            )}
          >
            {CommentsSummaryData.valueChange}
            {CommentsSummaryData.valueChange > 0 ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </span>
          <span className="text-[10px] text-zinc-500 lg:text-xs 2xl:text-sm 3xl:text-base">
            Comparado a semana anterior
          </span>
        </div>
        <div className="flex h-2 w-full overflow-hidden rounded">
          <div
            className={twMerge(
              "h-full bg-green-600",
              CommentsSummaryData.comments.positive &&
                CommentsSummaryData.comments.total > 0 &&
                "rounded-l",
            )}
            style={{
              width: `${(CommentsSummaryData.comments.positive / CommentsSummaryData.comments.total) * 100}%`,
            }}
          />
          <div
            className={"h-full bg-violet-600"}
            style={{
              width: `${(CommentsSummaryData.comments.neutral / CommentsSummaryData.comments.total) * 100}%`,
            }}
          />
          <div
            className={twMerge(
              "h-full bg-red-600",
              CommentsSummaryData.comments.negative &&
                CommentsSummaryData.comments.total > 0 &&
                "rounded-r",
            )}
            style={{
              width: `${(CommentsSummaryData.comments.negative / CommentsSummaryData.comments.total) * 100}%`,
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
              {CommentsSummaryData.comments.positive} Comentários
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
              {CommentsSummaryData.comments.neutral} Comentários
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
              {CommentsSummaryData.comments.negative} Comentários
            </span>
          </div>
        </div>
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
