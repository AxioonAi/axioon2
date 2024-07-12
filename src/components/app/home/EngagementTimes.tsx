"use client";
import { ChevronDown } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
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
      <div className="flex h-96 w-full flex-col lg:h-full">
        <ReactApexChart
          options={EngagementTimesData.options}
          series={EngagementTimesData.series}
          type="bar"
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
