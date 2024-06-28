import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";

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
      <BaseCardHeader title="Comentários em Menções" />
      <div className="flex h-full w-full flex-col justify-evenly gap-8 p-8">
        <div className="flex w-full items-center gap-2">
          <strong className="text-xl">{CommentsSummaryData.value}</strong>
          <span
            className={twMerge(
              "flex items-center gap-1 rounded p-1 text-sm",
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
          <span className="text-sm text-zinc-500">
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
              <span>Comentários Positivos</span>
            </div>
            <span className="text-sm text-zinc-500">
              {CommentsSummaryData.comments.positive} Comentários
            </span>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-violet-600" />
              <span>Comentários Neutros</span>
            </div>
            <span className="text-sm text-zinc-500">
              {CommentsSummaryData.comments.neutral} Comentários
            </span>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-red-600" />
              <span>Comentários Negativos</span>
            </div>
            <span className="text-sm text-zinc-500">
              {CommentsSummaryData.comments.negative} Comentários
            </span>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
