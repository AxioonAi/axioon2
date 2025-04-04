"use client";
import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function MentionsScoreComparison() {
  const {
    activeUserMentionsData,
    passiveUserMentionsData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();
  const [activeInstagramSentiment, setActiveInstagramSentiment] = useState<
    number | null
  >(0);
  const [passiveInstagramSentiment, setPassiveInstagramSentiment] = useState<
    number | null
  >(0);
  const [activeSeries, setActiveSeries] = useState([0]);
  const [passiveSeries, setPassiveSeries] = useState([0]);

  useEffect(() => {
    if (activeUserMentionsData) {
      setActiveInstagramSentiment(
        activeUserMentionsData.mentions.currentSentiment.instagram,
      );
    }
  }, [activeUserMentionsData]);

  useEffect(() => {
    if (passiveUserMentionsData) {
      setPassiveInstagramSentiment(
        passiveUserMentionsData.mentions.currentSentiment.instagram,
      );
    }
  }, [passiveUserMentionsData]);

  useEffect(() => {
    const sentimentValues = [activeInstagramSentiment];
    const numberOfValues = sentimentValues.filter(
      (value) => value !== null && typeof value === "number",
    ).length;
    const sum = sentimentValues.reduce(
      (acc: number, value) => acc + (Number(value?.toFixed(1)) || 0),
      0,
    );
    setActiveSeries([
      Number(Number(sum / Number(numberOfValues.toFixed(1)) / 10).toFixed(1)),
    ]);
  }, [activeInstagramSentiment]);

  useEffect(() => {
    const sentimentValues = [passiveInstagramSentiment];
    const numberOfValues = sentimentValues.filter(
      (value) => value !== null && typeof value === "number",
    ).length;
    const sum = sentimentValues.reduce(
      (acc: number, value) => acc + (Number(value?.toFixed(1)) || 0),
      0,
    );
    setPassiveSeries([
      Number(Number(sum / Number(numberOfValues.toFixed(1)) / 10).toFixed(1)),
    ]);
  }, [passiveInstagramSentiment]);

  const [options] = useState<ApexOptions>({
    chart: {
      type: "radialBar",
      animations: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          value: {
            fontSize: "20px",
            offsetY: -20,
            fontWeight: "bold",
            color: undefined,
            formatter: (val: number) => {
              return (val * 10).toFixed(1);
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: [""],
  });

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          SENTIMENTO MÉDIO DAS MENÇÕES
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            SENTIMENTO MÉDIO DAS MENÇÕES
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
        <div className="flex h-56 w-full items-center justify-center gap-8 lg:h-full">
          <ReactApexChart
            options={options}
            series={passiveSeries}
            type="radialBar"
            height={500}
          />
        </div>
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-56 w-full items-center justify-center gap-8 lg:h-full">
          <ReactApexChart
            options={options}
            series={activeSeries}
            type="radialBar"
            height={500}
          />
        </div>
      </div>
      <BaseCardFooter text="Valor médio dos sentimentos do candidato 2." />
    </BaseCard>
  );
}
