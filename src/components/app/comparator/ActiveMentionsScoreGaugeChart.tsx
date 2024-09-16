"use client";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
// import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//  ssr: false,
// });

interface ActiveScoreGaugeChartProps {
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

export function ActiveMentionsScoreGaugeChart({
  ScoreGaugeChartData,
  onlyGauge = true,
  className,
}: ActiveScoreGaugeChartProps) {
  const { activeUserData, isGettingData } = useComparatorDataContext();
  const [facebookSentiment, setFacebookSentiment] = useState<number | null>(0);
  const [instagramSentiment, setInstagramSentiment] = useState<number | null>(
    0,
  );
  const [tiktokSentiment, setTiktokSentiment] = useState<number | null>(0);
  const [youtubeSentiment, setYoutubeSentiment] = useState<number | null>(0);

  const [series, setSeries] = useState([0]);
  useEffect(() => {
    if (activeUserData) {
      setFacebookSentiment(
        activeUserData.commentsData.currentSentiment.facebook,
      );
      setInstagramSentiment(
        activeUserData.commentsData.currentSentiment.instagram,
      );
      setTiktokSentiment(activeUserData.commentsData.currentSentiment.tiktok);
      setYoutubeSentiment(activeUserData.commentsData.currentSentiment.youtube);
    }
  }, [activeUserData]);

  useEffect(() => {
    const sentimentValues = [
      facebookSentiment,
      instagramSentiment,
      tiktokSentiment,
      youtubeSentiment,
    ];
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
  }, [
    facebookSentiment,
    instagramSentiment,
    tiktokSentiment,
    youtubeSentiment,
  ]);

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
    <BaseCard className="p-0">
      <BaseCardHeader title={"Score Atual"} />
      {isGettingData ? (
        <Skeleton className={twMerge("mx-auto mt-4 h-48 w-11/12", className)} />
      ) : (
        <div
          className={twMerge(
            "flex h-56 w-full gap-8 lg:h-full",
            onlyGauge && "items-center justify-center",
          )}
        >
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={500}
          />
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
      )}
      <BaseCardFooter text="Valor médio dos sentimentos das menções do candidato 1." />
    </BaseCard>
  );
}
