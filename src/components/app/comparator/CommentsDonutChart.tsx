"use client";
import { ApexOptions } from "apexcharts";
import { EllipsisVertical } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";

interface CommentsDonutChartProps {
  CommentsDonutChartData: {
    ChartOptions: {
      series: number[];
      options: ApexOptions;
    };
    footerData: {
      title: string;
      color: string;
      value: number;
    }[];
  };
}

export function CommentsDonutChart({
  CommentsDonutChartData,
}: CommentsDonutChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários Candidato 1"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <DonutChartWithFooterData
        ChartOptions={CommentsDonutChartData.ChartOptions}
        footerData={CommentsDonutChartData.footerData.map((data) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className={twMerge("h-2 w-2 rounded-full", data.color)} />
                <span
                  key={data.title}
                  className="text-center text-xs text-zinc-500 lg:text-sm 2xl:text-base"
                >
                  {data.title}
                </span>
              </div>
              <strong className="text-sm lg:text-base 2xl:text-lg">
                {data.value}
              </strong>
            </div>
          );
        })}
      />
      <BaseCardFooter />
    </BaseCard>
  );
}
