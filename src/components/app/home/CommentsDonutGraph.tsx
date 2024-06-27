import { twMerge } from "tailwind-merge";
import { EllipsisVertical } from "lucide-react";
import { ApexOptions } from "apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";

interface CommentsDonutGraphProps {
  CommentsDonutGraphData: {
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

export function CommentsDonutGraph({
  CommentsDonutGraphData,
}: CommentsDonutGraphProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários por Gênero"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <DonutChartWithFooterData
        ChartOptions={CommentsDonutGraphData.ChartOptions}
        footerData={CommentsDonutGraphData.footerData.map((data) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className={twMerge("h-2 w-2 rounded-full", data.color)} />
                <span key={data.title} className="text-center text-zinc-500">
                  {data.title}
                </span>
              </div>
              <strong>{data.value}</strong>
            </div>
          );
        })}
      />
    </BaseCard>
  );
}
