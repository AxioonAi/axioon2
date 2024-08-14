"use client";
import ReactApexChart from "react-apexcharts";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface IndicatorsBaseCardProps {
  IndicatorsData: {
    name: string;
    value: number;
    trendingUp: boolean;
    trendingValue: number;
  };
}

interface SeriesProps {
  name: string;
  data: number[];
}

export function IndicatorsBaseCard({
  IndicatorsData,
}: IndicatorsBaseCardProps) {
  const { isGettingData } = useSocialMediaDataContext();
  const trendingUpArray = [
    15, 16, 18, 12, 17, 20, 24, 15, 16, 18, 12, 17, 20, 24,
  ];
  const trendingDownArray = [
    15, 12, 13, 10, 11, 9, 12, 14, 15, 12, 13, 10, 11, 9,
  ];
  const [series, setSeries] = useState<SeriesProps[]>([
    { name: "", data: trendingUpArray },
  ]);
  const options = {
    chart: {
      type: "line" as const,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#845ADF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth" as const,
      width: 2,
    },
    title: {
      text: "",
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    theme: {
      mode: "light" as const,
    },
    tooltip: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2660,
        options: {
          chart: {
            height: 75,
          },
        },
      },
      {
        breakpoint: 2561,
        options: {
          chart: {
            height: 100,
          },
        },
      },
    ],
  };

  useEffect(() => {
    if (IndicatorsData) {
      if (IndicatorsData.trendingValue > 0) {
        setSeries([{ name: "", data: trendingUpArray }]);
      } else {
        setSeries([{ name: "", data: trendingDownArray }]);
      }
    }
  }, [IndicatorsData]);

  return (
    <BaseCard className="relative h-36 overflow-hidden p-0">
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex items-center justify-between p-2 lg:p-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 xl:text-xs 3xl:text-sm">
              {IndicatorsData.name}
            </span>
            <strong className="text-xs xl:text-sm 3xl:text-base">
              {IndicatorsData.value}
            </strong>
          </div>
          <div className="flex w-full lg:w-2/5">
            <ReactApexChart options={options} series={series} type="line" />
          </div>
          <div className="flex flex-col">
            <span
              className={twMerge(
                "text-[10px] font-semibold xl:text-xs 3xl:text-sm",
                IndicatorsData.trendingValue > 0
                  ? "text-green-500"
                  : "text-red-500",
              )}
            >
              {IndicatorsData.trendingValue > 0 && "+"}
              {IndicatorsData.trendingValue}%
            </span>
            <span className="text-xs text-zinc-500 xl:text-sm 3xl:text-base">
              {IndicatorsData.name}
            </span>
          </div>
        </div>
      )}
    </BaseCard>
  );
}
