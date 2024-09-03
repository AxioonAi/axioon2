"use client";
import { ChevronDown } from "lucide-react";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface EngagementTimesProps {
  EngagementTimesData: {
    options: ApexOptions;
    series: {
      data: number[];
    }[];
  };
}

interface EngagementDataProps {
  midnight_to_four_am: number;
  four_am_to_ten_am: number;
  ten_am_to_two_pm: number;
  two_pm_to_six_pm: number;
  six_pm_to_nine_pm: number;
  nine_pm_to_midnight: number;
}

interface SeriesProps {
  data: number[];
}

export function EngagementTimes({ EngagementTimesData }: EngagementTimesProps) {
  const [facebookEngagementTimes, setFacebookEngagementTimes] =
    useState<EngagementDataProps>();
  const [instagramEngagementTimes, setInstagramEngagementTimes] =
    useState<EngagementDataProps>();
  const [tiktokEngagementTimes, setTiktokEngagementTimes] =
    useState<EngagementDataProps>();
  const [youtubeEngagementTimes, setYoutubeEngagementTimes] =
    useState<EngagementDataProps>();
  const [engagementData, setEngagementData] = useState<SeriesProps>();
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookEngagementTimes(
        socialMediaData.commentsData.engagementByHour.facebook,
      );
      setInstagramEngagementTimes(
        socialMediaData.commentsData.engagementByHour.instagram,
      );
      setTiktokEngagementTimes(
        socialMediaData.commentsData.engagementByHour.tiktok,
      );
      setYoutubeEngagementTimes(
        socialMediaData.commentsData.engagementByHour.youtube,
      );
    }
  }, [socialMediaData]);

  useEffect(() => {
    const engagementTimeValues = [
      facebookEngagementTimes,
      instagramEngagementTimes,
      tiktokEngagementTimes,
      youtubeEngagementTimes,
    ];
    const summedValues = engagementTimeValues.reduce(
      (acc, curr) => {
        if (curr) {
          acc!.midnight_to_four_am += curr.midnight_to_four_am;
          acc!.four_am_to_ten_am += curr.four_am_to_ten_am;
          acc!.ten_am_to_two_pm += curr.ten_am_to_two_pm;
          acc!.two_pm_to_six_pm += curr.two_pm_to_six_pm;
          acc!.six_pm_to_nine_pm += curr.six_pm_to_nine_pm;
          acc!.nine_pm_to_midnight += curr.nine_pm_to_midnight;
        }
        return acc;
      },
      {
        midnight_to_four_am: 0,
        four_am_to_ten_am: 0,
        ten_am_to_two_pm: 0,
        two_pm_to_six_pm: 0,
        six_pm_to_nine_pm: 0,
        nine_pm_to_midnight: 0,
      },
    );
    setEngagementData({
      data: [
        summedValues!.midnight_to_four_am,
        summedValues!.four_am_to_ten_am,
        summedValues!.ten_am_to_two_pm,
        summedValues!.two_pm_to_six_pm,
        summedValues!.six_pm_to_nine_pm,
        summedValues!.nine_pm_to_midnight,
      ],
    });
  }, [
    facebookEngagementTimes,
    instagramEngagementTimes,
    tiktokEngagementTimes,
    youtubeEngagementTimes,
  ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Horários de Engajamento"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-80 w-11/12" />
      ) : (
        <div className="flex h-96 w-full flex-col lg:h-full">
          <ReactApexChart
            options={EngagementTimesData.options}
            series={engagementData ? [engagementData] : []}
            type="bar"
          />
        </div>
      )}
      <BaseCardFooter text="Distribuição de atividade por Horário." />
    </BaseCard>
  );
}
