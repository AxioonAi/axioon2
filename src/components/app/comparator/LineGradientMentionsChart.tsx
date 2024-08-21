"use client";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";

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

export function LineGradientMentionsChart({
  LineGradientChartData,
}: LineGradientChartProps) {
  const { isGettingData, activeUserMentionsData, passiveUserMentionsData } =
    useComparatorDataContext();
  const [activeInstagramSentiment, setActiveInstagramSentiment] = useState<
    SentimentEvolutionProps[]
  >([]);
  const [passiveInstagramSentiment, setPassiveInstagramSentiment] = useState<
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
    if (activeUserMentionsData) {
      setActiveInstagramSentiment(
        activeUserMentionsData.mentions.sentimentEvolution.instagram,
      );
    }
  }, [activeUserMentionsData]);

  useEffect(() => {
    const sentimentValues = [activeInstagramSentiment];
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
  }, [activeInstagramSentiment]);

  useEffect(() => {
    if (passiveUserMentionsData) {
      setPassiveInstagramSentiment(
        passiveUserMentionsData.mentions.sentimentEvolution.instagram,
      );
    }
  }, [passiveUserMentionsData]);

  useEffect(() => {
    const sentimentValues = [passiveInstagramSentiment];
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
  }, [passiveInstagramSentiment]);

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
        <div className="flex h-56 w-full flex-col lg:h-full">
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
