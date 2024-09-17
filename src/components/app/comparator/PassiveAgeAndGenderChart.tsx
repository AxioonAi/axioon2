"use client";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface PassiveAgeAndGenderChartProps {
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

export function PassiveAgeAndGenderChart({
  AgeAndGenderData,
}: PassiveAgeAndGenderChartProps) {
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const { passiveAdsData, isGettingData } = useComparatorDataContext();

  useEffect(() => {
    if (passiveAdsData) {
      setSeries([
        {
          name: "Masculino",
          data: passiveAdsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "male")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
        {
          name: "Feminino",
          data: passiveAdsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "female")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
        {
          name: "Outros",
          data: passiveAdsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "unknown")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
      ]);
    }
  }, [passiveAdsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Idade e Gênero Candidato 2" />
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
      <BaseCardFooter text="Idades e generôs dos perfis das menções do candidato 2." />
    </BaseCard>
  );
}
