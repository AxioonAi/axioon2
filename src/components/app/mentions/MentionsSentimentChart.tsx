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
      <div className="flex h-full w-full flex-col gap-8 p-8">
        <div className="flex w-full items-center justify-between">
          {MentionsSentimentChartData.headerData.map((item, index) => (
            <div className="flex w-40 flex-col" key={index}>
              <div className="flex items-center gap-1">
                <div className={twMerge("h-3 w-3 rounded-full", item.color)} />
                <span>{item.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <strong>R$ 51.000,00</strong>
                <div className="rounded bg-sky-900/10 p-1 text-sky-900">
                  <span className="text-xs">
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
