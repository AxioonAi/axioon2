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

interface HashtagsCommentsDonutGraphProps {
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

interface CommentsByGenderProps {
  male: number;
  female: number;
  unknown: number;
}
interface SeriesProps {
  series: number[];
}

export function HashtagsCommentsDonutGraph({
  CommentsDonutGraphData,
  className,
}: HashtagsCommentsDonutGraphProps) {
  const [instagramComments, setInstagramComments] =
    useState<CommentsByGenderProps>();
  const [tiktokComments, setTiktokComments] = useState<CommentsByGenderProps>();
  const [commentsByGender, setCommentsByGender] = useState<SeriesProps>();
  const { isGettingData, hashtagData } = useMentionsDataContext();
  const [footerData, setFooterData] = useState([
    {
      title: "Homem",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Mulher",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Indefinido",
      color: "bg-sky-200",
      value: 162,
    },
  ]);

  useEffect(() => {
    if (hashtagData) {
      setInstagramComments(
        hashtagData.hashtagMentions.commentData.commentByGender.instagram,
      );
      setTiktokComments(
        hashtagData.hashtagMentions.commentData.commentByGender.tiktok,
      );
    }
  }, [hashtagData]);

  useEffect(() => {
    const genderValues = [instagramComments, tiktokComments];
    const summedValues = genderValues.reduce(
      (acc, curr) => {
        if (curr) {
          acc!.male += curr.male;
          acc!.female += curr.female;
          acc!.unknown += curr.unknown;
        }
        return acc;
      },
      {
        male: 0,
        female: 0,
        unknown: 0,
      },
    );

    setCommentsByGender({
      series: [summedValues!.male, summedValues!.female, summedValues!.unknown],
    });

    setFooterData([
      {
        title: "Homem",
        color: "bg-sky-900",
        value: summedValues!.male,
      },
      {
        title: "Mulher",
        color: "bg-sky-400",
        value: summedValues!.female,
      },
      {
        title: "Indefinido",
        color: "bg-sky-200",
        value: summedValues!.unknown,
      },
    ]);
  }, [instagramComments, tiktokComments]);
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários por Gênero" />
      {isGettingData ? (
        <Skeleton className={twMerge("mx-auto mt-4 h-80 w-11/12", className)} />
      ) : (
        <DonutChartWithFooterData
          ChartOptions={CommentsDonutGraphData.ChartOptions}
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
