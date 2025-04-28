"use client";
import { CommentsGenderDonutGraphData } from "@/components/data/MentionsData";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { DonutChartWithFooterData } from "@/components/global/DonutChartWithFooterData";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { cn, shortenNumber } from "@/utils/utils";
// import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });
interface CommentsByGenderProps {
  male: number;
  female: number;
  unknown: number;
}

interface SeriesProps {
  series: number[];
}

export function CommentsGenderComparison() {
  const [activeFacebookComments, setActiveActiveFacebookComments] =
    useState<CommentsByGenderProps>();
  const [activeInstagramComments, setActiveInstagramComments] =
    useState<CommentsByGenderProps>();
  const [activeTiktokComments, setActiveTiktokComments] =
    useState<CommentsByGenderProps>();
  const [activeYoutubeComments, setActiveYoutubeComments] =
    useState<CommentsByGenderProps>();
  const [activeCommentsByGender, setActiveCommentsByGender] =
    useState<SeriesProps>();
  const [passiveFacebookComments, setPassivePassiveFacebookComments] =
    useState<CommentsByGenderProps>();
  const [passiveInstagramComments, setPassiveInstagramComments] =
    useState<CommentsByGenderProps>();
  const [passiveTiktokComments, setPassiveTiktokComments] =
    useState<CommentsByGenderProps>();
  const [passiveYoutubeComments, setPassiveYoutubeComments] =
    useState<CommentsByGenderProps>();
  const [passiveCommentsByGender, setPassiveCommentsByGender] =
    useState<SeriesProps>();
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();
  const [activeFooterData, setActiveFooterData] = useState([
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
  const [passiveFooterData, setPassiveFooterData] = useState([
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
    if (activeUserData) {
      setActiveActiveFacebookComments(
        activeUserData.commentsData.commentByGender.facebook,
      );
      setActiveInstagramComments(
        activeUserData.commentsData.commentByGender.instagram,
      );
      setActiveTiktokComments(
        activeUserData.commentsData.commentByGender.tiktok,
      );
      setActiveYoutubeComments(
        activeUserData.commentsData.commentByGender.youtube,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    const genderValues = [
      activeFacebookComments,
      activeInstagramComments,
      activeTiktokComments,
      activeYoutubeComments,
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

    setActiveCommentsByGender({
      series: [summedValues!.male, summedValues!.female, summedValues!.unknown],
    });

    setActiveFooterData([
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
  }, [
    activeFacebookComments,
    activeInstagramComments,
    activeTiktokComments,
    activeYoutubeComments,
  ]);

  useEffect(() => {
    if (passiveUserData) {
      setPassivePassiveFacebookComments(
        passiveUserData.commentsData.commentByGender.facebook,
      );
      setPassiveInstagramComments(
        passiveUserData.commentsData.commentByGender.instagram,
      );
      setPassiveTiktokComments(
        passiveUserData.commentsData.commentByGender.tiktok,
      );
      setPassiveYoutubeComments(
        passiveUserData.commentsData.commentByGender.youtube,
      );
    }
  }, [passiveUserData]);

  useEffect(() => {
    const genderValues = [
      passiveFacebookComments,
      passiveInstagramComments,
      passiveTiktokComments,
      passiveYoutubeComments,
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

    setPassiveCommentsByGender({
      series: [summedValues!.male, summedValues!.female, summedValues!.unknown],
    });

    setPassiveFooterData([
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
  }, [
    passiveFacebookComments,
    passiveInstagramComments,
    passiveTiktokComments,
    passiveYoutubeComments,
  ]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          GÊNERO DE COMENTÁRIOS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            COMENTÁRIOS POR GÊNERO
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
        <DonutChartWithFooterData
          ChartOptions={CommentsGenderDonutGraphData.ChartOptions}
          series={activeCommentsByGender ? activeCommentsByGender?.series : []}
          footerData={activeFooterData.map((data) => {
            return (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className={cn("h-2 w-2 rounded-full", data.color)} />
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
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <DonutChartWithFooterData
          ChartOptions={CommentsGenderDonutGraphData.ChartOptions}
          series={
            passiveCommentsByGender ? passiveCommentsByGender?.series : []
          }
          footerData={passiveFooterData.map((data) => {
            return (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className={cn("h-2 w-2 rounded-full", data.color)} />
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
      </div>
      <BaseCardFooter text="Comentários por rede social." />
    </BaseCard>
  );
}
