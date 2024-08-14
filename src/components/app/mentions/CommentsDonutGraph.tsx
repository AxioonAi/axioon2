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
}

interface CommentsBySentimentProps {
  countSentiment0To350: number;
  countSentiment351To650: number;
  countSentiment651To1000: number;
  sentimentAverage: number;
  totalSentiment: number;
}

interface SeriesProps {
  series: number[];
}

export function CommentsDonutGraph({
  CommentsDonutGraphData,
}: CommentsDonutGraphProps) {
  const [instagramComments, setInstagramComments] =
    useState<CommentsBySentimentProps>();
  const [commentsBySentiment, setCommentsBySentiment] = useState<SeriesProps>();
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const [footerData, setFooterData] = useState([
    {
      title: "Positivo",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Neutro",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Negativo",
      color: "bg-sky-200",
      value: 162,
    },
  ]);

  useEffect(() => {
    if (mentionsData) {
      setInstagramComments(mentionsData.mentions.commentsBySentiment);
    }
  }, [mentionsData]);

  useEffect(() => {
    const sentimentValues = [instagramComments];
    const summedValues = sentimentValues.reduce(
      (acc, curr) => {
        if (curr) {
          acc!.countSentiment651To1000 += curr.countSentiment651To1000;
          acc!.countSentiment351To650 += curr.countSentiment351To650;
          acc!.countSentiment0To350 += curr.countSentiment0To350;
        }
        return acc;
      },
      {
        countSentiment651To1000: 0,
        countSentiment351To650: 0,
        countSentiment0To350: 0,
      },
    );

    setCommentsBySentiment({
      series: [
        summedValues!.countSentiment651To1000,
        summedValues!.countSentiment351To650,
        summedValues!.countSentiment0To350,
      ],
    });

    setFooterData([
      {
        title: "Positivo",
        color: "bg-sky-900",
        value: summedValues!.countSentiment651To1000,
      },
      {
        title: "Neutro",
        color: "bg-sky-400",
        value: summedValues!.countSentiment351To650,
      },
      {
        title: "Negativo",
        color: "bg-sky-200",
        value: summedValues!.countSentiment0To350,
      },
    ]);
  }, [instagramComments]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Comentários por Gênero"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
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
      <BaseCardFooter />
    </BaseCard>
  );
}
