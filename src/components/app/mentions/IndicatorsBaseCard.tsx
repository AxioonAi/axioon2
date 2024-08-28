"use client";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface IndicatorsBaseCardProps {
  IndicatorsData: {
    name: string;
    value: number;
  };
}

export function IndicatorsBaseCard({
  IndicatorsData,
}: IndicatorsBaseCardProps) {
  return (
    <BaseCard className="relative h-36 overflow-hidden p-0">
      <div className="flex h-full items-center p-2 lg:p-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-500 xl:text-xs 3xl:text-sm">
            {IndicatorsData.name}
          </span>
          <strong className="text-xs xl:text-sm 3xl:text-base">
            {IndicatorsData.value}
          </strong>
        </div>
        <div className="mx-auto flex h-full w-full items-center justify-center lg:w-2/5">
          {/* <ReactApexChart options={options} series={series} type="line" /> */}
          <Image
            src="/trendingUp.svg"
            alt="trending"
            width={300}
            height={180}
            quality={100}
            priority
            className="w-full"
          />
        </div>
      </div>
    </BaseCard>
  );
}
