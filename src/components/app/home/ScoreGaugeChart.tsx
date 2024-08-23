"use client";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { Skeleton } from "@/components/global/Skeleton";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

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
  const { socialMediaData, isGettingData } = useSocialMediaDataContext();
  const [facebookSentiment, setFacebookSentiment] = useState<number | null>(0);
  const [instagramSentiment, setInstagramSentiment] = useState<number | null>(
    0,
  );
  const [tiktokSentiment, setTiktokSentiment] = useState<number | null>(0);
  const [youtubeSentiment, setYoutubeSentiment] = useState<number | null>(0);

  const [series, setSeries] = useState([0]);
  useEffect(() => {
    if (socialMediaData) {
      setFacebookSentiment(
        socialMediaData.commentsData.currentSentiment.facebook,
      );
      setInstagramSentiment(
        socialMediaData.commentsData.currentSentiment.instagram,
      );
      setTiktokSentiment(socialMediaData.commentsData.currentSentiment.tiktok);
      setYoutubeSentiment(
        socialMediaData.commentsData.currentSentiment.youtube,
      );
    }
  }, [socialMediaData]);

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
      (acc: number, value) => acc + (value || 0),
      0,
    );
    setSeries([
      parseFloat(
        Number(sum / Number(numberOfValues.toFixed(2)) / 10).toFixed(2),
      ),
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
              return (val * 10).toString();
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
      <BaseCardFooter />
    </BaseCard>
  );
}
