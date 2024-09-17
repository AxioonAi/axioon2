"use client";
import { twMerge } from "tailwind-merge";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { shortenNumber } from "@/utils/masks";

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

interface CommentsByGenderProps {
  male: number;
  female: number;
  unknown: number;
}

interface SeriesProps {
  series: number[];
}

export function CommentsDonutGraph({
  CommentsDonutGraphData,
}: CommentsDonutGraphProps) {
  const [facebookComments, setFacebookComments] =
    useState<CommentsByGenderProps>();
  const [instagramComments, setInstagramComments] =
    useState<CommentsByGenderProps>();
  const [tiktokComments, setTiktokComments] = useState<CommentsByGenderProps>();
  const [youtubeComments, setYoutubeComments] =
    useState<CommentsByGenderProps>();
  const [commentsByGender, setCommentsByGender] = useState<SeriesProps>();
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();
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
    if (socialMediaData) {
      setFacebookComments(
        socialMediaData.commentsData.commentByGender.facebook,
      );
      setInstagramComments(
        socialMediaData.commentsData.commentByGender.instagram,
      );
      setTiktokComments(socialMediaData.commentsData.commentByGender.tiktok);
      setYoutubeComments(socialMediaData.commentsData.commentByGender.youtube);
    }
  }, [socialMediaData]);

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
        title: "Indefinido",
        color: "bg-sky-200",
        value: summedValues!.unknown,
      },
    ]);
  }, [facebookComments, instagramComments, tiktokComments, youtubeComments]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Comentários por Gênero" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
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
                    className="text-center text-xs text-zinc-500 lg:text-sm"
                  >
                    {data.title}
                  </span>
                </div>
                <strong className="text-sm lg:text-base">
                  {shortenNumber(data.value)}
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
