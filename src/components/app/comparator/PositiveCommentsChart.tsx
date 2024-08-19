"use client";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

interface PositiveCommentsChartProps {
  PositiveCommentsChartData: {
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

export function PositiveCommentsChart({
  PositiveCommentsChartData,
  headerData,
}: PositiveCommentsChartProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários" />
      <div className="mb-12 flex w-full flex-col gap-1 p-1 lg:mb-0 lg:h-full">
        <div className="flex w-full items-center justify-between">
          {headerData.map((idx) => (
            <>{idx}</>
          ))}
        </div>
        <ReactApexChart
          options={PositiveCommentsChartData.ChartOptions.options}
          series={PositiveCommentsChartData.ChartOptions.series}
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
