"use client";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface LineGradientChartProps {
  LineGradientChartData: {
    ChartOptions: {
      series: {
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

export function LineGradientChart({
  LineGradientChartData,
}: LineGradientChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="flex h-56 w-full flex-col lg:h-full">
        <ReactApexChart
          type="area"
          series={LineGradientChartData.ChartOptions.series}
          options={LineGradientChartData.ChartOptions.options}
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
