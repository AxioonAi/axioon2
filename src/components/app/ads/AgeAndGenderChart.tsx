"use client";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useAdsDataContext } from "@/context/AdsData";
import { Skeleton } from "@/components/global/Skeleton";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface AgeAndGenderChartProps {
  AgeAndGenderData: {
    ChartOptions: {
      series: {
        name: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

interface SeriesProps {
  name: string;
  data: number[];
}

export function AgeAndGenderChart({
  AgeAndGenderData,
}: AgeAndGenderChartProps) {
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const { adsData, isGettingData } = useAdsDataContext();

  useEffect(() => {
    if (adsData) {
      setSeries([
        {
          name: "Masculino",
          data: adsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "male")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
        {
          name: "Feminino",
          data: adsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "female")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
        {
          name: "Outros",
          data: adsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "unknown")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
      ]);
    }
  }, [adsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Idade e Gênero" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-full w-full flex-col justify-center gap-4 p-4">
          <ReactApexChart
            options={AgeAndGenderData.ChartOptions.options}
            series={series}
            type="bar"
          />
        </div>
      )}
      <BaseCardFooter text="Idades e gêneros dos usuários alcançados pelo anúncio." />
    </BaseCard>
  );
}
