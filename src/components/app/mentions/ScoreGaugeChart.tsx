"use client";
import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { Skeleton } from "@/components/global/Skeleton";
import { useMentionsDataContext } from "@/context/MentionsData";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ScoreGaugeChartProps {
  ScoreGaugeChartData: {
    name: string;
    sentimentData: {
      name: string;
      value: number;
    }[];
  };
  onlyGauge?: boolean;
  className?: string;
}

export function ScoreGaugeChart({
  ScoreGaugeChartData,
  onlyGauge = true,
  className,
}: ScoreGaugeChartProps) {
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const [instagramSentiment, setInstagramSentiment] = useState<number | null>(
    0,
  );

  const [series, setSeries] = useState([0]);

  useEffect(() => {
    if (mentionsData) {
      setInstagramSentiment(mentionsData.mentions.currentSentiment.instagram);
    }
  }, [mentionsData]);

  useEffect(() => {
    const sentimentValues = [instagramSentiment];
    const numberOfValues = sentimentValues.filter(
      (value) => value !== null && typeof value === "number",
    ).length;
    const sum = sentimentValues.reduce(
      (acc: number, value) => acc + (Number(value?.toFixed(1)) || 0),
      0,
    );
    setSeries([
      Number(Number(sum / Number(numberOfValues.toFixed(1)) / 10).toFixed(1)),
    ]);
  }, [instagramSentiment]);

  const [options] = useState<ApexOptions>({
    chart: {
      type: "radialBar",
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
    <BaseCard className="p-0">
      <BaseCardHeader title={"Score Atual"} />
      {isGettingData ? (
        <Skeleton className={twMerge("mx-auto mt-4 h-48 w-11/12", className)} />
      ) : !Number.isNaN(series[0]) ? (
        <div
          className={twMerge(
            "flex h-56 w-full gap-8 lg:h-full",
            onlyGauge && "items-center justify-center",
          )}
        >
          <ReactApexChart options={options} series={series} type="radialBar" />
          {!onlyGauge && (
            <div className="flex items-center gap-2">
              <Image
                src={
                  ScoreGaugeChartData.sentimentData[0].value >= 650
                    ? "/Icons/positiveScore.svg"
                    : ScoreGaugeChartData.sentimentData[0].value < 650 &&
                        ScoreGaugeChartData.sentimentData[0].value >= 450
                      ? "/Icons/neutralScore.svg"
                      : "/Icons/negativeScore.svg"
                }
                width={50}
                height={50}
                alt=""
              />
              <span>
                {ScoreGaugeChartData.sentimentData[0].value >= 650
                  ? "Positivo"
                  : ScoreGaugeChartData.sentimentData[0].value < 650 &&
                      ScoreGaugeChartData.sentimentData[0].value >= 450
                    ? "Neutro"
                    : "Negativo"}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-full min-h-40 w-full items-center justify-center">
          <span className="text-center text-lg font-semibold italic">
            Não encontramos dados suficientes
          </span>
        </div>
      )}
      <BaseCardFooter text="Valor médio dos sentimentos." />
    </BaseCard>
  );
}
