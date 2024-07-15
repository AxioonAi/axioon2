"use client";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";

interface AgeAndGenderChartProps {
  AgeAndGenderData: {
    ChartOptions: {
      series: {
        name: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

export function AgeAndGenderChart({
  AgeAndGenderData,
}: AgeAndGenderChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Idade e Gênero"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="flex h-full w-full flex-col gap-4 p-4">
        <ReactApexChart
          options={AgeAndGenderData.ChartOptions.options}
          series={AgeAndGenderData.ChartOptions.series}
          type="bar"
        />
      </div>
    </BaseCard>
  );
}
