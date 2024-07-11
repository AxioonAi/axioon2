"use client";
import { ApexOptions } from "apexcharts";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface FollowerProgressionChartProps {
  FollowerProgressionChartData: {
    ChartOptions: {
      series: {
        name: string;
        type: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

export function FollowerProgressionChart({
  FollowerProgressionChartData,
}: FollowerProgressionChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Evolução de seguidores"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="flex w-full flex-col">
        <ReactApexChart
          options={FollowerProgressionChartData.ChartOptions.options}
          series={FollowerProgressionChartData.ChartOptions.series}
          type="line"
          height={275}
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
