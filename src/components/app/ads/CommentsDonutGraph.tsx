"use client";
import { twMerge } from "tailwind-merge";
import { EllipsisVertical } from "lucide-react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useAdsDataContext } from "@/context/AdsData";

interface CommentsDonutGraphProps {
  CommentsDonutGraphData: {
    ChartOptions: {
      series: number[];
      options: ApexOptions;
    };
    footerData: {
      title: string;
      color: string;
      value: number;
    }[];
  };
}

interface SeriesProps {
  series: number[];
}

export function CommentsDonutGraph({
  CommentsDonutGraphData,
}: CommentsDonutGraphProps) {
  const { adsData, isGettingData } = useAdsDataContext();
  const [series, setSeries] = useState<SeriesProps>();
  const [footerData, setFooterData] = useState([
    {
      title: "Homem",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Mulher",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Indefinido",
      color: "bg-sky-200",
      value: 162,
    },
  ]);

  useEffect(() => {
    if (adsData) {
      setFooterData([
        {
          title: "Homem",
          color: "bg-sky-900",
          value:
            Number(
              adsData?.public_by_gender.male &&
                adsData?.public_by_gender.male.toFixed(0),
            ) || 0,
        },
        {
          title: "Mulher",
          color: "bg-sky-400",
          value:
            Number(
              adsData?.public_by_gender.female &&
                adsData?.public_by_gender.female.toFixed(0),
            ) || 0,
        },
        {
          title: "Outro",
          color: "bg-sky-200",
          value:
            Number(
              adsData?.public_by_gender.unknown &&
                adsData?.public_by_gender.unknown.toFixed(0),
            ) || 0,
        },
      ]);
      setSeries({
        series: [
          Number(
            adsData?.public_by_gender.male &&
              adsData?.public_by_gender.male.toFixed(0),
          ) || 0,
          Number(
            adsData?.public_by_gender.female &&
              adsData?.public_by_gender.female.toFixed(0),
          ) || 0,
          Number(
            adsData?.public_by_gender.unknown &&
              adsData?.public_by_gender.unknown.toFixed(0),
          ) || 0,
        ],
      });
    }
  }, [adsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Gêneros"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <DonutChartWithFooterData
          ChartOptions={CommentsDonutGraphData.ChartOptions}
          series={series?.series}
          footerData={footerData.map((data) => {
            return (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={twMerge("h-2 w-2 rounded-full", data.color)}
                  />
                  <span
                    key={data.title}
                    className="text-center text-xs text-zinc-500 lg:text-sm 2xl:text-base"
                  >
                    {data.title}
                  </span>
                </div>
                <strong className="text-sm lg:text-base 2xl:text-lg">
                  {data.value}
                </strong>
              </div>
            );
          })}
        />
      )}
      <BaseCardFooter text="Gêneros dos usuários alcançados pelo anúncio." />
    </BaseCard>
  );
}
