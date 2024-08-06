"use client";
import { ChevronDown } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

interface EngagementTimesProps {
  EngagementTimesData: {
    options: ApexOptions;
    series: {
      data: number[];
    }[];
  };
}

export function EngagementTimes({ EngagementTimesData }: EngagementTimesProps) {
  const { isGettingData } = useSocialMediaDataContext();

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Horários de Engajamento"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex h-96 w-full flex-col lg:h-full">
          <ReactApexChart
            options={EngagementTimesData.options}
            series={EngagementTimesData.series}
            type="bar"
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
