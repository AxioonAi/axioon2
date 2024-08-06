"use client";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
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
  const { isGettingData } = useSocialMediaDataContext();

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários" />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex h-96 w-full flex-col justify-evenly gap-2 p-2 lg:h-full lg:gap-4 lg:p-4">
          <div className="flex w-full items-center justify-between">
            {headerData.map((idx, index) => (
              <div key={index}>{idx}</div>
            ))}
          </div>
          <ReactApexChart
            options={PositiveNegativeCommentsData.ChartOptions.options}
            series={PositiveNegativeCommentsData.ChartOptions.series}
            height={200}
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
