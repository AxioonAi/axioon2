"use client";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

interface PositiveNegativeCommentsChartProps {
  PositiveNegativeCommentsData: {
    ChartOptions: {
      series: {
        name: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
  headerData: React.ReactNode[];
}

export function PositiveNegativeCommentsChart({
  PositiveNegativeCommentsData,
  headerData,
}: PositiveNegativeCommentsChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários" />
      <div className="flex h-full w-full flex-col justify-evenly gap-4 p-4">
        <div className="flex w-full items-center justify-between">
          {headerData.map((idx) => (
            <>{idx}</>
          ))}
        </div>
        <ReactApexChart
          options={PositiveNegativeCommentsData.ChartOptions.options}
          series={PositiveNegativeCommentsData.ChartOptions.series}
          height={200}
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
