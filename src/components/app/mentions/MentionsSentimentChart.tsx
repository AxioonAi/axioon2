"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface MentionsSentimentChartProps {
  MentionsSentimentChartData: {
    ChartOptions: {
      series: {
        name: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
    headerData: {
      title: string;
      color: string;
      value: number;
      trendingUp: boolean;
      trendingValue: string;
    }[];
  };
}

export function MentionsSentimentChart({
  MentionsSentimentChartData,
}: MentionsSentimentChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Menções" />
      <div className="flex h-full w-full flex-col gap-4 p-4 lg:gap-8 lg:p-8">
        <div className="flex w-full flex-row flex-wrap items-center justify-between gap-4 text-[10px] lg:gap-0 lg:text-xs 2xl:text-sm 3xl:text-base">
          {MentionsSentimentChartData.headerData.map((item, index) => (
            <div className="flex flex-col lg:w-40" key={index}>
              <div className="flex items-center gap-1">
                <div className={twMerge("h-3 w-3 rounded-full", item.color)} />
                <span>{item.title}</span>
              </div>
              <div className="flex flex-row items-center justify-center lg:justify-between">
                <strong>{item.value}</strong>
                <div className="rounded bg-sky-900/10 p-1 text-sky-900">
                  <span>
                    {item.trendingUp ? "+" : "-"} {item.trendingValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ReactApexChart
          options={MentionsSentimentChartData.ChartOptions.options}
          series={MentionsSentimentChartData.ChartOptions.series}
          type="bar"
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
