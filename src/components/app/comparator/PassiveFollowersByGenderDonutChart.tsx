"use client";
import { ApexOptions } from "apexcharts";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { Skeleton } from "@/components/global/Skeleton";
import { shortenNumber } from "@/utils/masks";

interface PassiveFollowersByGenderDonutChartProps {
  FollowersDonutChartData: {
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

interface CommentsByGenderProps {
  male: number;
  female: number;
  unknown: number;
}

interface SeriesProps {
  series: number[];
}

export function PassiveFollowersByGenderDonutChart({
  FollowersDonutChartData,
}: PassiveFollowersByGenderDonutChartProps) {
  const { passiveUserData, isGettingData } = useComparatorDataContext();
  const [facebookComments, setFacebookComments] =
    useState<CommentsByGenderProps>();
  const [instagramComments, setInstagramComments] =
    useState<CommentsByGenderProps>();
  const [tiktokComments, setTiktokComments] = useState<CommentsByGenderProps>();
  const [youtubeComments, setYoutubeComments] =
    useState<CommentsByGenderProps>();
  const [commentsByGender, setCommentsByGender] = useState<SeriesProps>();
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
      title: "Indeterminado",
      color: "bg-sky-200",
      value: 162,
    },
  ]);

  useEffect(() => {
    if (passiveUserData) {
      setFacebookComments(
        passiveUserData.commentsData.commentByGender.facebook,
      );
      setInstagramComments(
        passiveUserData.commentsData.commentByGender.instagram,
      );
      setTiktokComments(passiveUserData.commentsData.commentByGender.tiktok);
      setYoutubeComments(passiveUserData.commentsData.commentByGender.youtube);
    }
  }, [passiveUserData]);

  useEffect(() => {
    const genderValues = [
      facebookComments,
      instagramComments,
      tiktokComments,
      youtubeComments,
    ];
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
        title: "Indeterminado",
        color: "bg-sky-200",
        value: summedValues!.unknown,
      },
    ]);
  }, [facebookComments, instagramComments, tiktokComments, youtubeComments]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Seguidores Candidato" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <DonutChartWithFooterData
          series={commentsByGender ? commentsByGender?.series : []}
          ChartOptions={FollowersDonutChartData.ChartOptions}
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
                  {shortenNumber(data.value)}
                </strong>
              </div>
            );
          })}
        />
      )}
      <BaseCardFooter text="Comentários de acordo com o Gênero dos Seguidores do candidato 2." />
    </BaseCard>
  );
}
