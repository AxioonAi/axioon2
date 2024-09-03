"use client";
import { EllipsisVertical } from "lucide-react";
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

interface ActiveAgeAndGenderChartProps {
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

export function ActiveAgeAndGenderChart({
  AgeAndGenderData,
}: ActiveAgeAndGenderChartProps) {
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const { activeAdsData, isGettingData } = useComparatorDataContext();

  useEffect(() => {
    if (activeAdsData) {
      setSeries([
        {
          name: "Masculino",
          data: activeAdsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "male")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
        {
          name: "Feminino",
          data: activeAdsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "female")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
        {
          name: "Outros",
          data: activeAdsData?.public_by_age_and_gender
            .filter((ad) => ad.gender === "unknown")
            .map((ad) => Number(ad.value.toFixed(0))),
        },
      ]);
    }
  }, [activeAdsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Idade e Gênero Candidato 1"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-full w-full flex-col gap-4 p-4">
          <ReactApexChart
            options={AgeAndGenderData.ChartOptions.options}
            series={series}
            type="bar"
          />
        </div>
      )}
      <BaseCardFooter text="Idades e generôs dos perfis das menções do candidato 1." />
    </BaseCard>
  );
}
