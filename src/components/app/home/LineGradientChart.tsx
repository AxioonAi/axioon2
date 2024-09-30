"use client";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface LineGradientChartProps {
  LineGradientChartData: {
    ChartOptions: {
      series: {
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

interface SentimentEvolutionProps {
  label: string;
  value: number;
}

interface SeriesProps {
  data: number[];
}

export function LineGradientChart({
  LineGradientChartData,
}: LineGradientChartProps) {
  const [facebookSentiment, setFacebookSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [instagramSentiment, setInstagramSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [tiktokSentiment, setTiktokSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [youtubeSentiment, setYoutubeSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [sentimentEvolution, setSentimentEvolution] = useState<SeriesProps[]>(
    [],
  );
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookSentiment(
        socialMediaData.commentsData.sentimentEvolution.facebook,
      );
      setInstagramSentiment(
        socialMediaData.commentsData.sentimentEvolution.instagram,
      );
      setTiktokSentiment(
        socialMediaData.commentsData.sentimentEvolution.tiktok,
      );
      setYoutubeSentiment(
        socialMediaData.commentsData.sentimentEvolution.youtube,
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
    const flatSentimentValues = sentimentValues
      .flat()
      .filter((value) => value !== null);

    const orderedFlatSentimentValues = flatSentimentValues.sort(
      (a, b) => new Date(a.label).getTime() - new Date(b.label).getTime(),
    );

    const series = {
      name: "Sentimento",
      data: orderedFlatSentimentValues.map((value) =>
        Number(value.value.toFixed(2)),
      ),
    };

    setSentimentEvolution([series]);
  }, [
    facebookSentiment,
    instagramSentiment,
    tiktokSentiment,
    youtubeSentiment,
  ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Evolução de Sentimentos" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : (
        <div className="flex h-56 w-full flex-col lg:h-full">
          <ReactApexChart
            type="area"
            series={sentimentEvolution}
            options={LineGradientChartData.ChartOptions.options}
          />
        </div>
      )}
      <BaseCardFooter text="Sentimento médio por dia." />
    </BaseCard>
  );
}
