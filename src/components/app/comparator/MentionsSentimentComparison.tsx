"use client";
// import ReactApexChart from "react-apexcharts";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface SentimentEvolutionProps {
  label: string;
  value: number;
}

interface SeriesProps {
  data: number[];
}

export function MentionsSentimentComparison() {
  const {
    activeUserMentionsData,
    passiveUserMentionsData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();
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

  const ActiveLineGradientChartData = {
    ChartOptions: {
      series: [
        {
          data: [170, 572, 751, 82, 1063, 653, 553, 23, 735],
        },
        {
          data: [60, 729, 360, 708, 126, 350, 626, 167, 350],
        },
      ],
      options: {
        chart: {
          type: "line" as const,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          offsetY: 20,
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.1,
          },
          animations: {
            enabled: false,
          },
          background: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth" as const,
          width: 1,
          colors: ["#0ea5e9"],
        },
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          colors: ["#0ea5e9"],
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                height: 200,
              },
            },
          },
          {
            breakpoint: 1440,
            options: {
              chart: {
                height: 150,
              },
            },
          },
          {
            breakpoint: 1920,
            options: {
              chart: {
                height: 225,
              },
            },
          },
          {
            breakpoint: 2560,
            options: {
              chart: {
                height: 220,
              },
            },
          },
          {
            breakpoint: 2561,
            options: {
              chart: {
                height: 310,
              },
            },
          },
        ],
      },
    },
  };

  const PassiveLineGradientChartData = {
    ChartOptions: {
      series: [
        {
          data: [170, 572, 751, 82, 1063, 653, 553, 23, 735],
        },
        {
          data: [60, 729, 360, 708, 126, 350, 626, 167, 350],
        },
      ],
      options: {
        chart: {
          type: "line" as const,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          offsetY: 20,
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.1,
          },
          animations: {
            enabled: false,
          },
          background: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth" as const,
          width: 1,
          colors: ["#0c4a6e"],
        },
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          colors: ["#0c4a6e"],
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                height: 200,
              },
            },
          },
          {
            breakpoint: 1440,
            options: {
              chart: {
                height: 150,
              },
            },
          },
          {
            breakpoint: 1920,
            options: {
              chart: {
                height: 225,
              },
            },
          },
          {
            breakpoint: 2560,
            options: {
              chart: {
                height: 220,
              },
            },
          },
          {
            breakpoint: 2561,
            options: {
              chart: {
                height: 310,
              },
            },
          },
        ],
      },
    },
  };

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          EVOLUÇÃO DOS SENTIMENTOS DAS MENÇÕES
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            EVOLUÇÃO DOS SENTIMENTOS DAS MENÇÕES
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
        <div className="flex h-56 w-full flex-col justify-center lg:h-full">
          <ReactApexChart
            type="area"
            series={activeSentimentEvolution}
            options={ActiveLineGradientChartData.ChartOptions.options}
          />
        </div>
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-56 w-full flex-col justify-center lg:h-full">
          <ReactApexChart
            type="area"
            series={passiveSentimentEvolution}
            options={PassiveLineGradientChartData.ChartOptions.options}
          />
        </div>
      </div>
      <BaseCardFooter text="Comparador de sentimento médio das menções por publicação." />
    </BaseCard>
  );
}
