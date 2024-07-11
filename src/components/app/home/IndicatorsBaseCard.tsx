"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface IndicatorsBaseCardProps {
  IndicatorsData: {
    name: string;
    value: number;
    trendingUp: boolean;
    trendingValue: string;
  };
  ChartOptions: {
    series: {
      name: string;
      data: number[];
    }[];
    options: ApexOptions;
  };
}

export function IndicatorsBaseCard({
  IndicatorsData,
  ChartOptions,
}: IndicatorsBaseCardProps) {
  return (
    <BaseCard className="flex-row items-center justify-between">
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500">{IndicatorsData.name}</span>
        <strong className="text-sm">{IndicatorsData.value}</strong>
      </div>
      <div className="flex w-1/3">
        <ReactApexChart
          options={ChartOptions.options}
          series={ChartOptions.series}
          type="line"
          height={80}
        />
      </div>
      <div className="flex flex-col">
        <span
          className={twMerge(
            "text-xs font-semibold",
            IndicatorsData.trendingUp ? "text-green-500" : "text-red-500",
          )}
        >
          {IndicatorsData.trendingUp ? "+" : "-"}
          {IndicatorsData.trendingValue} %
        </span>
        <span className="text-xs text-zinc-500">{IndicatorsData.name}</span>
      </div>
    </BaseCard>
  );
}
