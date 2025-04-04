"use client";
import { AgeAndGenderData } from "@/components/data/ComparatorData";
// import ReactApexChart from "react-apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface SeriesProps {
  name: string;
  data: number[];
}

export function MentionsAgeAndGenderComparison() {
  const [activeSeries, setActiveSeries] = useState<SeriesProps[]>([]);
  const [passiveSeries, setPassiveSeries] = useState<SeriesProps[]>([]);
  const {
    activeAdsData,
    passiveAdsData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();

  useEffect(() => {
    if (activeAdsData) {
      setActiveSeries([
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

  useEffect(() => {
    if (passiveAdsData) {
      setPassiveSeries([
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
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          IDADE E GÊNERO
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            IDADE E GÊNERO
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
        <div className="flex h-full w-full flex-col justify-center gap-4 p-4">
          {activeSeries.flatMap((series) => series.data.map((value) => value))
            .length !== 0 ? (
            <ReactApexChart
              options={AgeAndGenderData.ChartOptions.options}
              series={activeSeries}
              type="bar"
            />
          ) : (
            <span className="mx-auto w-max text-sm text-zinc-500">
              Nenhum Dado Encontrado.
            </span>
          )}
        </div>
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-full w-full flex-col justify-center gap-4 p-4">
          {passiveSeries.flatMap((series) => series.data.map((value) => value))
            .length !== 0 ? (
            <ReactApexChart
              options={AgeAndGenderData.ChartOptions.options}
              series={passiveSeries}
              type="bar"
            />
          ) : (
            <span className="mx-auto w-max text-sm text-zinc-500">
              Nenhum Dado Encontrado.
            </span>
          )}
        </div>
      </div>
      <BaseCardFooter text="Idades e gêneros dos perfis das menções." />
    </BaseCard>
  );
}
