"use client";
import { EllipsisVertical } from "lucide-react";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";
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
  const { activeUserData, passiveUserData, isGettingData } =
    useComparatorDataContext();
  const [activeFacebookSentiment, setActiveFacebookSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [activeInstagramSentiment, setActiveInstagramSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [activeTiktokSentiment, setActiveTiktokSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [activeYoutubeSentiment, setActiveYoutubeSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [passiveFacebookSentiment, setPassiveFacebookSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [passiveInstagramSentiment, setPassiveInstagramSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [passiveTiktokSentiment, setPassiveTiktokSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [passiveYoutubeSentiment, setPassiveYoutubeSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [activeSentimentEvolution, setActiveSentimentEvolution] = useState<
    SeriesProps[]
  >([]);
  const [passiveSentimentEvolution, setPassiveSentimentEvolution] = useState<
    SeriesProps[]
  >([]);
  const [finalSentimentEvolution, setFinalSentimentEvolution] = useState<
    SeriesProps[]
  >([]);

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookSentiment(
        activeUserData.commentsData.sentimentEvolution.facebook,
      );
      setActiveInstagramSentiment(
        activeUserData.commentsData.sentimentEvolution.instagram,
      );
      setActiveTiktokSentiment(
        activeUserData.commentsData.sentimentEvolution.tiktok,
      );
      setActiveYoutubeSentiment(
        activeUserData.commentsData.sentimentEvolution.youtube,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    const sentimentValues = [
      activeFacebookSentiment,
      activeInstagramSentiment,
      activeTiktokSentiment,
      activeYoutubeSentiment,
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

    setActiveSentimentEvolution([series]);
  }, [
    activeFacebookSentiment,
    activeInstagramSentiment,
    activeTiktokSentiment,
    activeYoutubeSentiment,
  ]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookSentiment(
        passiveUserData.commentsData.sentimentEvolution.facebook,
      );
      setPassiveInstagramSentiment(
        passiveUserData.commentsData.sentimentEvolution.instagram,
      );
      setPassiveTiktokSentiment(
        passiveUserData.commentsData.sentimentEvolution.tiktok,
      );
      setPassiveYoutubeSentiment(
        passiveUserData.commentsData.sentimentEvolution.youtube,
      );
    }
  }, [passiveUserData]);

  useEffect(() => {
    const sentimentValues = [
      passiveFacebookSentiment,
      passiveInstagramSentiment,
      passiveTiktokSentiment,
      passiveYoutubeSentiment,
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

    setPassiveSentimentEvolution([series]);
  }, [
    passiveFacebookSentiment,
    passiveInstagramSentiment,
    passiveTiktokSentiment,
    passiveYoutubeSentiment,
  ]);

  useEffect(() => {
    if (activeSentimentEvolution && passiveSentimentEvolution) {
      setFinalSentimentEvolution([
        ...activeSentimentEvolution,
        ...passiveSentimentEvolution,
      ]);
    }
  }, [activeSentimentEvolution, passiveSentimentEvolution]);

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
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : (
        <div className="flex h-56 w-full flex-col lg:h-[calc(100%-5.5rem)]">
          <ReactApexChart
            type="area"
            series={finalSentimentEvolution}
            options={LineGradientChartData.ChartOptions.options}
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
