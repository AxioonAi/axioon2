"use client";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

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
      data: orderedFlatSentimentValues.map((value) => value.value),
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
      <BaseCardHeader
        title="Evolução de Sentimentos"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex h-56 w-full flex-col lg:h-full">
          <ReactApexChart
            type="area"
            series={sentimentEvolution}
            options={LineGradientChartData.ChartOptions.options}
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
