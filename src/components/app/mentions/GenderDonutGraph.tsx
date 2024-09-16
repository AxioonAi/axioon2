"use client";
import { twMerge } from "tailwind-merge";
import { EllipsisVertical } from "lucide-react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface GenderDonutGraphProps {
  GenderDonutGraphData: {
    ChartOptions: {
      series: number[];
      options: ApexOptions;
    };
    footerData: {
      title: string;
      color: string;
      value: number;
    }[];
  };
  className?: string;
}

interface SeriesProps {
  series: number[];
}

export function GenderDonutGraph({
  GenderDonutGraphData,
  className,
}: GenderDonutGraphProps) {
  const [commentsByGender, setCommentsByGender] = useState<SeriesProps>();
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const [footerData, setFooterData] = useState([
    {
      title: "Feminino",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Masculino",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Outro",
      color: "bg-sky-200",
      value: 162,
    },
  ]);

  useEffect(() => {
    const genderValues = mentionsData?.mentions.commentsByGender;
    if (genderValues) {
      setCommentsByGender({
        series: [
          genderValues!.female,
          genderValues!.male,
          genderValues!.unknown,
        ],
      });
      setFooterData([
        {
          title: "Homem",
          color: "bg-sky-900",
          value: genderValues!.male,
        },
        {
          title: "Mulher",
          color: "bg-sky-400",
          value: genderValues!.female,
        },
        {
          title: "Indefinido",
          color: "bg-sky-200",
          value: genderValues!.unknown,
        },
      ]);
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários por Sentimento"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className={twMerge("mx-auto mt-4 h-80 w-11/12", className)} />
      ) : (
        <DonutChartWithFooterData
          ChartOptions={GenderDonutGraphData.ChartOptions}
          series={commentsByGender ? commentsByGender?.series : []}
          footerData={footerData.map((data) => {
            return (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={twMerge("h-2 w-2 rounded-full", data.color)}
                  />
                  <span
                    key={data.title}
                    className="text-center text-xs text-zinc-500 lg:text-sm 2xl:text-base"
                  >
                    {data.title}
                  </span>
                </div>
                <strong className="text-sm lg:text-base 2xl:text-lg">
                  {data.value}
                </strong>
              </div>
            );
          })}
        />
      )}
      <BaseCardFooter text="Comentários de acordo com o Gênero dos Seguidores." />
    </BaseCard>
  );
}
