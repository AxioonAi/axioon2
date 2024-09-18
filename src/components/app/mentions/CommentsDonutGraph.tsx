"use client";
import { twMerge } from "tailwind-merge";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface CommentsDonutGraphProps {
  CommentsDonutGraphData: {
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

export function CommentsDonutGraph({
  CommentsDonutGraphData,
  className,
}: CommentsDonutGraphProps) {
  const [commentsBySentiment, setCommentsBySentiment] = useState<SeriesProps>();
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const [footerData, setFooterData] = useState([
    {
      title: "Instagram",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Portais",
      color: "bg-sky-400",
      value: 1267,
    },
  ]);

  useEffect(() => {
    if (mentionsData) {
      setCommentsBySentiment({
        series: [
          mentionsData?.mentions.mentionQuantity.instagram,
          mentionsData?.mentions.mentionQuantity.news,
        ],
      });

      setFooterData([
        {
          title: "Instagram",
          color: "bg-sky-900",
          value: mentionsData?.mentions.mentionQuantity.instagram,
        },
        {
          title: "Portais",
          color: "bg-sky-400",
          value: mentionsData?.mentions.mentionQuantity.news,
        },
      ]);
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Menções por Fonte" />
      {isGettingData ? (
        <Skeleton className={twMerge("mx-auto mt-4 h-80 w-11/12", className)} />
      ) : (
        <DonutChartWithFooterData
          ChartOptions={CommentsDonutGraphData.ChartOptions}
          series={commentsBySentiment ? commentsBySentiment?.series : []}
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
